const products = [
  {
    id: 1,
    brand: "Cressi",
    category: "Masks",
    name: "Cressi Big Eyes Evolution Mask",
    price: "$59",
    datasheet: "/datasheets/cressi-big-eyes.pdf",
    description:
      "The Cressi Big Eyes Evolution mask offers enhanced downward visibility with angled lenses and soft silicone skirt for superior comfort.",
    specs: {
      Lens: "Tempered glass",
      Skirt: "Soft hypoallergenic silicone",
      Visibility: "Wide-angle",
      Certification: "CE Approved",
    },
    images: [
      "https://www.tradeinn.com/f/14093/140933606/cressi-big-eyes-evolution-diving-mask.webp",
      "https://www.tradeinn.com/f/14093/140933607/cressi-big-eyes-evolution-diving-mask.webp",
      "https://www.tradeinn.com/f/14093/140933608/cressi-big-eyes-evolution-diving-mask.webp",
    ],
  },
  {
    id: 2,
    brand: "Cressi",
    category: "Masks",
    name: "Cressi ZS2 Mask",
    price: "$45",
    datasheet: "/datasheets/cressi-zs2.pdf",
    description:
      "Compact framed diving mask with crystal silicone skirt and tempered glass lenses designed for comfort and performance.",
    specs: {
      Lens: "Tempered glass",
      Frame: "Low-profile",
      Skirt: "Crystal silicone",
      Certification: "CE Approved",
    },
    images: [
      "https://www.tradeinn.com/f/14093/140933627/cressi-zs2-medium-diving-mask.webp",
      "https://www.tradeinn.com/f/14093/140933628/cressi-zs2-medium-diving-mask.webp",
    ],
  },
  {
    id: 3,
    brand: "Cressi",
    category: "Masks",
    name: "Cressi Calibro Mask",
    price: "$69",
    datasheet: "/datasheets/cressi-calibro.pdf",
    description:
      "Advanced low-volume diving mask featuring integrated dual frame and matte finish to reduce reflections underwater.",
    specs: {
      Lens: "Tempered glass",
      Frame: "Integrated",
      Volume: "Low-volume",
      Certification: "CE Approved",
    },
    images: [
      "https://www.tradeinn.com/f/14093/140933640/cressi-calibro-diving-mask.webp",
      "https://www.tradeinn.com/f/14093/140933641/cressi-calibro-diving-mask.webp",
    ],
  },
  {
    id: 4,
    brand: "Cressi",
    category: "Fins",
    name: "Cressi Frog Plus Fins",
    price: "$99",
    datasheet: "/datasheets/cressi-frog-plus.pdf",
    description:
      "High-performance fins with channel thrust technology delivering powerful propulsion with reduced leg fatigue.",
    specs: {
      Blade: "Polypropylene",
      FootPocket: "Soft rubber",
      Type: "Open heel",
      Certification: "CE Approved",
    },
    images: [
      "https://www.tradeinn.com/f/14093/140933656/cressi-frog-plus-diving-fins.webp",
      "https://www.tradeinn.com/f/14093/140933657/cressi-frog-plus-diving-fins.webp",
    ],
  },
  {
    id: 5,
    brand: "Cressi",
    category: "Fins",
    name: "Cressi Reaction Pro Fins",
    price: "$119",
    datasheet: "/datasheets/cressi-reaction-pro.pdf",
    description:
      "Professional fins offering powerful thrust and excellent control for both recreational and technical divers.",
    specs: {
      Blade: "High-flex polymer",
      Type: "Open heel",
      Weight: "1.9kg pair",
      Certification: "CE Approved",
    },
    images: [
      "https://www.tradeinn.com/f/14093/140933664/cressi-reaction-pro-diving-fins.webp",
      "https://www.tradeinn.com/f/14093/140933665/cressi-reaction-pro-diving-fins.webp",
    ],
  },
  {
    id: 6,
    brand: "Cressi",
    category: "Fins",
    name: "Cressi Pro Light Fins",
    price: "$79",
    datasheet: "/datasheets/cressi-pro-light.pdf",
    description:
      "Lightweight and responsive fins perfect for travel divers requiring speed, comfort, and maneuverability.",
    specs: {
      Blade: "Lightweight polymer",
      Type: "Open heel",
      Weight: "1.4kg pair",
      Certification: "CE Approved",
    },
    images: [
      "https://www.tradeinn.com/f/14093/140933672/cressi-pro-light-diving-fins.webp",
      "https://www.tradeinn.com/f/14093/140933673/cressi-pro-light-diving-fins.webp",
    ],
  },
  {
    id: 7,
    brand: "Cressi",
    category: "Regulators",
    name: "Cressi MC9 SC Regulator",
    price: "$349",
    datasheet: "/datasheets/cressi-mc9-sc.pdf",
    description:
      "Balanced diaphragm first stage with cold-water protection and smooth air delivery at any depth.",
    specs: {
      FirstStage: "Balanced diaphragm",
      Ports: "4 LP / 2 HP",
      WaterTemp: "Cold water rated",
      Certification: "CE Approved",
    },
    images: [
      "https://www.tradeinn.com/f/14093/140933684/cressi-mc9-sc-diving-regulator.webp",
      "https://www.tradeinn.com/f/14093/140933685/cressi-mc9-sc-diving-regulator.webp",
    ],
  },
  {
    id: 8,
    brand: "Cressi",
    category: "Regulators",
    name: "Cressi AC2 Compact Regulator",
    price: "$299",
    datasheet: "/datasheets/cressi-ac2-compact.pdf",
    description:
      "Compact piston regulator offering reliability, simplicity, and excellent breathing performance.",
    specs: {
      FirstStage: "Piston",
      Ports: "4 LP / 1 HP",
      Weight: "950g",
      Certification: "CE Approved",
    },
    images: [
      "https://www.tradeinn.com/f/14093/140933688/cressi-ac2-compact-diving-regulator.webp",
      "https://www.tradeinn.com/f/14093/140933689/cressi-ac2-compact-diving-regulator.webp",
    ],
  },
  {
    id: 9,
    brand: "Cressi",
    category: "Regulators",
    name: "Cressi T10-SC Regulator",
    price: "$379",
    datasheet: "/datasheets/cressi-t10-sc.pdf",
    description:
      "Lightweight travel regulator with cold-water performance and compact design for easy packing.",
    specs: {
      FirstStage: "Balanced diaphragm",
      Weight: "740g",
      WaterTemp: "Cold water rated",
      Certification: "CE Approved",
    },
    images: [
      "https://www.tradeinn.com/f/14093/140933692/cressi-t10-sc-diving-regulator.webp",
      "https://www.tradeinn.com/f/14093/140933693/cressi-t10-sc-diving-regulator.webp",
    ],
  },
  {
    id: 10,
    brand: "Cressi",
    category: "BCDs",
    name: "Cressi Patrol BCD",
    price: "$399",
    datasheet: "/datasheets/cressi-patrol-bcd.pdf",
    description:
      "Travel-friendly back-inflation BCD with lightweight materials and excellent trim underwater.",
    specs: {
      Lift: "17kg",
      Weight: "2.5kg",
      Pockets: "Integrated weight",
      Certification: "CE Approved",
    },
    images: [
      "https://www.tradeinn.com/f/14093/140933704/cressi-patrol-bcd.webp",
      "https://www.tradeinn.com/f/14093/140933705/cressi-patrol-bcd.webp",
    ],
  },
  {
    id: 11,
    brand: "Cressi",
    category: "BCDs",
    name: "Cressi Start Pro BCD",
    price: "$329",
    datasheet: "/datasheets/cressi-start-pro.pdf",
    description:
      "Durable jacket-style BCD ideal for dive centers and training programs.",
    specs: {
      Lift: "19kg",
      Weight: "3.2kg",
      Material: "420D Nylon",
      Certification: "CE Approved",
    },
    images: [
      "https://www.tradeinn.com/f/14093/140933708/cressi-start-pro-bcd.webp",
      "https://www.tradeinn.com/f/14093/140933709/cressi-start-pro-bcd.webp",
    ],
  },
  {
    id: 12,
    brand: "Cressi",
    category: "BCDs",
    name: "Cressi Travelight BCD",
    price: "$429",
    datasheet: "/datasheets/cressi-travelight.pdf",
    description:
      "Ultra-lightweight BCD designed for divers who travel frequently without sacrificing performance.",
    specs: {
      Lift: "16kg",
      Weight: "2.1kg",
      Material: "Cordura",
      Certification: "CE Approved",
    },
    images: [
      "https://www.tradeinn.com/f/14093/140933712/cressi-travelight-bcd.webp",
      "https://www.tradeinn.com/f/14093/140933713/cressi-travelight-bcd.webp",
    ],
  },
  {
    id: 13,
    brand: "Cressi",
    category: "Computers",
    name: "Cressi Leonardo Dive Computer",
    price: "$199",
    datasheet: "/datasheets/cressi-leonardo.pdf",
    description:
      "Single-button intuitive dive computer for recreational divers with Nitrox capability.",
    specs: {
      Display: "High contrast LCD",
      Gas: "Air / Nitrox",
      Battery: "User replaceable",
      Certification: "CE Approved",
    },
    images: [
      "https://www.tradeinn.com/f/14093/140933720/cressi-leonardo-dive-computer.webp",
      "https://www.tradeinn.com/f/14093/140933721/cressi-leonardo-dive-computer.webp",
    ],
  },
  {
    id: 14,
    brand: "Cressi",
    category: "Computers",
    name: "Cressi Giotto Dive Computer",
    price: "$249",
    datasheet: "/datasheets/cressi-giotto.pdf",
    description:
      "Large-screen dive computer with multi-gas capability and intuitive navigation.",
    specs: {
      Display: "Large LCD",
      Gas: "Air / Nitrox",
      Modes: "4 modes",
      Certification: "CE Approved",
    },
    images: [
      "https://www.tradeinn.com/f/14093/140933724/cressi-giotto-dive-computer.webp",
      "https://www.tradeinn.com/f/14093/140933725/cressi-giotto-dive-computer.webp",
    ],
  },
  {
    id: 15,
    brand: "Cressi",
    category: "Computers",
    name: "Cressi Goa Dive Computer",
    price: "$229",
    datasheet: "/datasheets/cressi-goa.pdf",
    description:
      "Slim wrist-style dive computer with modern design and full Nitrox functionality.",
    specs: {
      Display: "High contrast",
      Gas: "Air / Nitrox",
      Profile: "Slim",
      Certification: "CE Approved",
    },
    images: [
      "https://www.tradeinn.com/f/14093/140933728/cressi-goa-dive-computer.webp",
      "https://www.tradeinn.com/f/14093/140933729/cressi-goa-dive-computer.webp",
    ],
  },
  {
    id: 16,
    brand: "Cressi",
    category: "Wetsuits",
    name: "Cressi Morea 3mm Wetsuit",
    price: "$169",
    datasheet: "/datasheets/cressi-morea-3mm.pdf",
    description:
      "Comfortable and flexible wetsuit for warm-water diving and snorkeling.",
    specs: {
      Thickness: "3mm",
      Material: "Neoprene",
      Zip: "Back zip",
      Certification: "CE Approved",
    },
    images: [
      "https://www.tradeinn.com/f/14093/140933740/cressi-morea-3mm-wetsuit.webp",
      "https://www.tradeinn.com/f/14093/140933741/cressi-morea-3mm-wetsuit.webp",
    ],
  },
  {
    id: 17,
    brand: "Cressi",
    category: "Wetsuits",
    name: "Cressi Fast 5mm Wetsuit",
    price: "$219",
    datasheet: "/datasheets/cressi-fast-5mm.pdf",
    description:
      "Thermal protection wetsuit for moderate water temperatures with ergonomic cut.",
    specs: {
      Thickness: "5mm",
      Material: "Neoprene",
      Zip: "Back zip",
      Certification: "CE Approved",
    },
    images: [
      "https://www.tradeinn.com/f/14093/140933744/cressi-fast-5mm-wetsuit.webp",
      "https://www.tradeinn.com/f/14093/140933745/cressi-fast-5mm-wetsuit.webp",
    ],
  },
  {
    id: 18,
    brand: "Cressi",
    category: "Wetsuits",
    name: "Cressi Castoro 7mm Wetsuit",
    price: "$279",
    datasheet: "/datasheets/cressi-castoro-7mm.pdf",
    description:
      "Cold-water wetsuit providing excellent insulation and durability.",
    specs: {
      Thickness: "7mm",
      Material: "Neoprene",
      Zip: "Back zip",
      Certification: "CE Approved",
    },
    images: [
      "https://www.tradeinn.com/f/14093/140933748/cressi-castoro-7mm-wetsuit.webp",
      "https://www.tradeinn.com/f/14093/140933749/cressi-castoro-7mm-wetsuit.webp",
    ],
  },
  {
    id: 19,
    brand: "Cressi",
    category: "Snorkels",
    name: "Cressi Dry Snorkel",
    price: "$39",
    datasheet: "/datasheets/cressi-dry-snorkel.pdf",
    description:
      "Dry-top snorkel with splash guard and purge valve for easy breathing.",
    specs: {
      Valve: "Dry top",
      Mouthpiece: "Silicone",
      Length: "Standard",
      Certification: "CE Approved",
    },
    images: [
      "https://www.tradeinn.com/f/14093/140933756/cressi-dry-snorkel.webp",
      "https://www.tradeinn.com/f/14093/140933757/cressi-dry-snorkel.webp",
    ],
  },
  {
    id: 20,
    brand: "Cressi",
    category: "Snorkels",
    name: "Cressi Alpha Ultra Dry Snorkel",
    price: "$45",
    datasheet: "/datasheets/cressi-alpha-ultra-dry.pdf",
    description:
      "Ultra-dry snorkel with advanced float valve preventing water entry.",
    specs: {
      Valve: "Ultra-dry",
      Mouthpiece: "Ergonomic silicone",
      FlexTube: "Yes",
      Certification: "CE Approved",
    },
    images: [
      "https://www.tradeinn.com/f/14093/140933760/cressi-alpha-ultra-dry-snorkel.webp",
      "https://www.tradeinn.com/f/14093/140933761/cressi-alpha-ultra-dry-snorkel.webp",
    ],
  },
  {
    id: 21,
    brand: "Cressi",
    category: "Snorkels",
    name: "Cressi Corsica Freediving Snorkel",
    price: "$29",
    datasheet: "/datasheets/cressi-corsica.pdf",
    description:
      "Flexible freediving snorkel designed to contour to the face during descents.",
    specs: {
      Tube: "Flexible polymer",
      Mouthpiece: "Hypoallergenic silicone",
      Type: "Freediving",
      Certification: "CE Approved",
    },
    images: [
      "https://www.tradeinn.com/f/14093/140933764/cressi-corsica-freediving-snorkel.webp",
      "https://www.tradeinn.com/f/14093/140933765/cressi-corsica-freediving-snorkel.webp",
    ],
  },
  {
    id: 22,
    brand: "Cressi",
    category: "Accessories",
    name: "Cressi Anti-Fog Spray",
    price: "$12",
    datasheet: "/datasheets/cressi-antifog.pdf",
    description:
      "Long-lasting anti-fog spray keeping your mask crystal clear underwater.",
    specs: {
      Volume: "60ml",
      Application: "Spray",
      Usage: "Mask lenses",
      Certification: "CE Approved",
    },
    images: [
      "https://www.tradeinn.com/f/14093/140933770/cressi-antifog-spray.webp",
    ],
  },
  {
    id: 23,
    brand: "Cressi",
    category: "Accessories",
    name: "Cressi Mask Strap Cover",
    price: "$15",
    datasheet: "/datasheets/cressi-mask-strap-cover.pdf",
    description:
      "Neoprene mask strap cover improving comfort and preventing hair pulling.",
    specs: {
      Material: "Neoprene",
      Fit: "Universal",
      Use: "Mask straps",
      Certification: "CE Approved",
    },
    images: [
      "https://www.tradeinn.com/f/14093/140933772/cressi-mask-strap-cover.webp",
    ],
  },
  {
    id: 24,
    brand: "Cressi",
    category: "Accessories",
    name: "Cressi Mesh Gear Bag",
    price: "$59",
    datasheet: "/datasheets/cressi-mesh-bag.pdf",
    description:
      "Breathable mesh gear bag ideal for transporting wet diving equipment.",
    specs: {
      Material: "Mesh nylon",
      Capacity: "Large",
      Closure: "Zipper",
      Certification: "CE Approved",
    },
    images: [
      "https://www.tradeinn.com/f/14093/140933774/cressi-mesh-gear-bag.webp",
    ],
  },
  {
    id: 25,
    brand: "Cressi",
    category: "Accessories",
    name: "Cressi Console 2 Pressure Gauge",
    price: "$89",
    datasheet: "/datasheets/cressi-console-2.pdf",
    description:
      "Dual-console pressure gauge with depth indicator and luminous dial.",
    specs: {
      Gauge: "Pressure + Depth",
      Housing: "Rubber boot",
      Mount: "Console",
      Certification: "CE Approved",
    },
    images: [
      "https://www.tradeinn.com/f/14093/140933778/cressi-console-2-pressure-gauge.webp",
    ],
  },
  {
    id: 26,
    brand: "Cressi",
    category: "Lights",
    name: "Cressi Lumia Dive Torch",
    price: "$129",
    datasheet: "/datasheets/cressi-lumia.pdf",
    description:
      "Compact LED dive torch delivering powerful illumination for night dives.",
    specs: {
      Lumens: "1000lm",
      Battery: "Rechargeable",
      DepthRating: "100m",
      Certification: "CE Approved",
    },
    images: [
      "https://www.tradeinn.com/f/14093/140933782/cressi-lumia-dive-torch.webp",
    ],
  },
  {
    id: 27,
    brand: "Cressi",
    category: "Lights",
    name: "Cressi Astra 1200 Dive Torch",
    price: "$149",
    datasheet: "/datasheets/cressi-astra-1200.pdf",
    description:
      "High-power LED dive light suitable for deep and technical dives.",
    specs: {
      Lumens: "1200lm",
      Battery: "Rechargeable",
      DepthRating: "120m",
      Certification: "CE Approved",
    },
    images: [
      "https://www.tradeinn.com/f/14093/140933784/cressi-astra-1200-dive-torch.webp",
    ],
  },
  {
    id: 28,
    brand: "Cressi",
    category: "Lights",
    name: "Cressi Vega Rechargeable Torch",
    price: "$169",
    datasheet: "/datasheets/cressi-vega.pdf",
    description:
      "Rechargeable aluminum dive torch with wide beam and long battery life.",
    specs: {
      Lumens: "1100lm",
      Battery: "Rechargeable",
      DepthRating: "120m",
      Certification: "CE Approved",
    },
    images: [
      "https://www.tradeinn.com/f/14093/140933786/cressi-vega-rechargeable-dive-torch.webp",
    ],
  },
  {
    id: 29,
    brand: "Cressi",
    category: "Bags",
    name: "Cressi Gorilla Pro XL Bag",
    price: "$139",
    datasheet: "/datasheets/cressi-gorilla-pro-xl.pdf",
    description:
      "Heavy-duty wheeled dive bag with massive storage capacity and rugged construction.",
    specs: {
      Capacity: "135L",
      Wheels: "Heavy-duty",
      Material: "1000D Tarpaulin",
      Certification: "CE Approved",
    },
    images: [
      "https://www.tradeinn.com/f/14093/140933790/cressi-gorilla-pro-xl-dive-bag.webp",
    ],
  },
  {
    id: 30,
    brand: "Cressi",
    category: "Bags",
    name: "Cressi Moby 5 Trolley Bag",
    price: "$169",
    datasheet: "/datasheets/cressi-moby-5.pdf",
    description:
      "Large roller dive bag designed to carry full dive kit with ease and durability.",
    specs: {
      Capacity: "115L",
      Wheels: "Large roller",
      Material: "840D Nylon",
      Certification: "CE Approved",
    },
    images: [
      "https://www.tradeinn.com/f/14093/140933794/cressi-moby-5-trolley-bag.webp",
    ],
  },
];

export default products;
