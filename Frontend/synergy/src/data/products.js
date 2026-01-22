const products = [
  // Masks
  {
    id: 1,
    brand: "Cressi",
    category: "Masks",
    name: "Cressi Big Eyes Evolution Mask",
    price: "$59",
    sku: "CR-MSK-001",
    datasheet: "/datasheets/cressi-big-eyes.pdf",
    description:
      "Enhanced downward visibility with angled lenses and soft silicone skirt for comfort.",
    specs: {
      Lens: "Tempered glass",
      Skirt: "Soft hypoallergenic silicone",
      Visibility: "Wide-angle",
      Certification: "CE Approved",
    },
    images: [
      "https://www.tradeinn.com/f/14093/140933606/cressi-big-eyes-evolution-diving-mask.webp",
      "https://www.tradeinn.com/f/14093/140933607/cressi-big-eyes-evolution-diving-mask.webp",
    ],
  },
  {
    id: 2,
    brand: "Cressi",
    category: "Masks",
    name: "Cressi ZS2 Mask",
    price: "$45",
    sku: "CR-MSK-002",
    datasheet: "/datasheets/cressi-zs2.pdf",
    description:
      "Compact framed diving mask with crystal silicone skirt and tempered glass lenses.",
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
    sku: "CR-MSK-003",
    datasheet: "/datasheets/cressi-calibro.pdf",
    description:
      "Low-volume diving mask with integrated dual frame and matte finish to reduce reflections.",
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

  // Fins
  {
    id: 4,
    brand: "Cressi",
    category: "Fins",
    name: "Cressi Frog Plus Fins",
    price: "$99",
    sku: "CR-FIN-001",
    datasheet: "/datasheets/cressi-frog-plus.pdf",
    description:
      "High-performance fins with channel thrust technology delivering powerful propulsion.",
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
    sku: "CR-FIN-002",
    datasheet: "/datasheets/cressi-reaction-pro.pdf",
    description:
      "Professional fins offering powerful thrust and excellent control for recreational and technical divers.",
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
    sku: "CR-FIN-003",
    datasheet: "/datasheets/cressi-pro-light.pdf",
    description:
      "Lightweight fins perfect for travel divers requiring speed, comfort, and maneuverability.",
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

  // Regulators
  {
    id: 7,
    brand: "Cressi",
    category: "Regulators",
    name: "Cressi MC9 SC Regulator",
    price: "$349",
    sku: "CR-REG-001",
    datasheet: "/datasheets/cressi-mc9-sc.pdf",
    description:
      "Balanced diaphragm first stage with cold-water protection and smooth air delivery.",
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
    sku: "CR-REG-002",
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
    sku: "CR-REG-003",
    datasheet: "/datasheets/cressi-t10-sc.pdf",
    description:
      "Lightweight travel regulator with cold-water performance and compact design.",
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

  // BCDs
  {
    id: 10,
    brand: "Cressi",
    category: "BCDs",
    name: "Cressi Patrol BCD",
    price: "$399",
    sku: "CR-BCD-001",
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
    sku: "CR-BCD-002",
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
    sku: "CR-BCD-003",
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

  // Computers
  {
    id: 13,
    brand: "Cressi",
    category: "Computers",
    name: "Cressi Leonardo Dive Computer",
    price: "$199",
    sku: "CR-COM-001",
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
    sku: "CR-COM-002",
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

  // Accessories / Featured items
  {
    id: 23,
    brand: "Cressi",
    category: "Accessories",
    featured: true,
    name: "Cressi Mask Strap Cover",
    price: "$15",
    sku: "CR-ACC-001",
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
    featured: true,
    name: "Cressi Mesh Gear Bag",
    price: "$59",
    sku: "CR-ACC-002",
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
    featured: true,
    name: "Cressi Console 2 Pressure Gauge",
    price: "$89",
    sku: "CR-ACC-003",
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

  // Lights
  {
    id: 26,
    brand: "Cressi",
    category: "Lights",
    featured: true,
    name: "Cressi Lumia Dive Torch",
    price: "$129",
    sku: "CR-LGT-001",
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
    featured: true,
    name: "Cressi Astra 1200 Dive Torch",
    price: "$149",
    sku: "CR-LGT-002",
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
    featured: true,
    name: "Cressi Vega Rechargeable Torch",
    price: "$169",
    sku: "CR-LGT-003",
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

  // Bags
  {
    id: 29,
    brand: "Cressi",
    category: "Bags",
    featured: true,
    name: "Cressi Gorilla Pro XL Bag",
    price: "$139",
    sku: "CR-BAG-001",
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
    featured: true,
    name: "Cressi Moby 5 Trolley Bag",
    price: "$169",
    sku: "CR-BAG-002",
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
