import express from "express";
import { openrouter } from "../index.js";
import products from "../data/products.js";
import rentals from "../data/rentals.js";
import PQueue from "p-queue";

const router = express.Router();

// Queue to avoid hitting free-tier limits
const queue = new PQueue({ interval: 60000, intervalCap: 20 });

// Trim inventory to essential fields
function getTrimmedInventory() {
  return [
    ...products.map(p => ({
      name: p.name,
      sku: p.sku,
      brand: p.brand,
      availability: p.availability
    })),
    ...rentals.flatMap(r => r.products.map(p => ({
      name: p.name,
      sku: p.sku,
      brand: p.brand,
      availability: p.availability,
      category: r.title
    })))
  ];
}

router.post("/chat", async (req, res) => {
  const { messages } = req.body;
  if (!messages) return res.status(400).json({ error: "Messages required" });

  const inventory = getTrimmedInventory();
  const systemPrompt = `
You are Synergy Equipment AI Assistant — a commercial diving & subsea equipment expert.

Rules:
- Recommend ONLY from the provided inventory.
- Mention availability, specs, and datasheet when useful.
- Be concise, professional, and accurate.
- Never hallucinate products.

Return plain text only.
`;

  try {
    const content = await queue.add(async () => {
      const completion = await openrouter.chat.completions.create({
        model: "openai/gpt-3.5-turbo", // Free-compatible model
        temperature: 0.3,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "system", content: `Inventory:\n${JSON.stringify(inventory)}` },
          ...messages,
        ],
        max_tokens: 500,
      });
      return completion.choices[0].message.content;
    });

    res.json({ role: "assistant", content });
  } catch (error) {
    console.error("❌ OpenRouter Chat Error:", error);
    res.status(500).json({ error: "AI chat failed" });
  }
});

export default router;
