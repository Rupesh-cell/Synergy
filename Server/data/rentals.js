const rentals = [
  // =========================
  // 1. UNDERWATER TOOLS
  // =========================
  {
    id: "underwater-tools",
    title: "Underwater Tools",
    description: "Professional subsea hydraulic & pneumatic tools",
    brands: ["Broco", "Stanley", "Cressi"],
    products: [
      {
        id: "uw-grinder",
        name: "Underwater Grinder",
        sku: "UW-GR-001",
        brand: "Broco",
        image:
          "https://underwaterhydraulics.com/cdn/shop/products/BrocoBrocuda.jpg?v=1609367324",
        short: "Heavy-duty underwater grinding tool",
        availability: "In Stock",
        datasheet: "https://static.datasheets.com/doc/7101731-te-connectivity-282087-1-ds.pdf",
        specs: {
          Power: "Hydraulic",
          Depth: "Up to 100m",
          Weight: "5.5 kg",
          Material: "Marine-grade steel",
        },
      },
      {
        id: "uw-drill",
        name: "Underwater Drill",
        sku: "UW-DR-002",
        brand: "Stanley",
        image:
          "https://tse3.mm.bing.net/th/id/OIP.2uZGHWTMUjSNepLIjz-HjwHaHa?cb=defcache2defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        short: "High torque subsea drilling system",
        availability: "Limited Stock",
        datasheet: "/pdfs/uw-drill.pdf",
        specs: {
          Power: "Hydraulic",
          Speed: "0–1200 RPM",
          Depth: "Up to 90m",
          Weight: "6.2 kg",
        },
      },
      {
        id: "uw-cutter",
        name: "Underwater Cutter",
        sku: "UW-CUT-003",
        brand: "Cressi",
        image:
          "https://underwaterhydraulics.com/cdn/shop/files/HCS16.jpg?height=720&v=1715719061",
        short: "Compact underwater cutting tool",
        availability: "Out of Stock",
        datasheet: "",
        specs: {
          Power: "Manual",
          Blade: "Titanium",
          Depth: "Up to 60m",
          Weight: "0.8 kg",
        },
      },
      {
        id: "uw-impact-wrench",
        name: "Underwater Impact Wrench",
        sku: "UW-WR-004",
        brand: "Stanley",
        image:
          "https://tse3.mm.bing.net/th/id/OIP.1mc1o2BYUuXQHM4C6r38yQHaJy?cb=defcache2defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        short: "High power subsea bolting solution",
        availability: "In Stock",
        datasheet: "/pdfs/uw-impact-wrench.pdf",
        specs: {
          Power: "Hydraulic",
          Torque: "680 Nm",
          Depth: "Up to 90m",
          Weight: "7.1 kg",
        },
      },
    ],
  },

  // =========================
  // 2. DIVING EQUIPMENT
  // =========================
  {
    id: "diving-equipment",
    title: "Diving Equipment",
    description: "Commercial diving systems and life-support gear",
    brands: ["Dräger", "Kirby Morgan", "Cressi"],
    products: [
      {
        id: "surface-supplied-helmet",
        name: "Surface Supplied Diving Helmet",
        sku: "DE-HEL-001",
        brand: "Kirby Morgan",
        image:
          "https://www.kirbymorgan.com/wp-content/uploads/2019/09/SL17B-1.jpg",
        short: "Professional commercial diving helmet",
        availability: "In Stock",
        datasheet: "/pdfs/diving-helmet.pdf",
        specs: {
          Material: "Marine-grade composite",
          Communication: "Hardwire",
          Depth: "Up to 300m",
          Weight: "5.3 kg",
        },
      },
      {
        id: "bcd-jacket",
        name: "Buoyancy Control Device",
        sku: "DE-BCD-002",
        brand: "Cressi",
        image:
          "https://www.cressi.com/media/catalog/product/cache/1/image/1200x/040ec09b1e35df139433887a97daa66f/r/1/r1_bcd.jpg",
        short: "Adjustable diving buoyancy jacket",
        availability: "In Stock",
        datasheet: "/pdfs/bcd.pdf",
        specs: {
          LiftCapacity: "18 kg",
          Weight: "3.2 kg",
          Material: "Cordura nylon",
          Sizes: "S to XL",
        },
      },
      {
        id: "regulator-set",
        name: "Regulator Set",
        sku: "DE-REG-003",
        brand: "Dräger",
        image:
          "https://www.draeger.com/Products/Content/panoramasupplyair-breathing-regulator.jpg",
        short: "High-performance breathing regulator system",
        availability: "Limited Stock",
        datasheet: "/pdfs/regulator.pdf",
        specs: {
          Pressure: "300 bar",
          Stages: "2-stage",
          FlowRate: "High flow",
          Weight: "1.4 kg",
        },
      },
      {
        id: "dive-suit",
        name: "Commercial Dive Suit",
        sku: "DE-SUIT-004",
        brand: "Cressi",
        image:
          "https://www.cressi.com/media/catalog/product/cache/1/image/1200x/040ec09b1e35df139433887a97daa66f/c/o/comfort_5mm.jpg",
        short: "Thermal protection diving suit",
        availability: "In Stock",
        datasheet: "/pdfs/dive-suit.pdf",
        specs: {
          Thickness: "5 mm",
          Material: "Neoprene",
          Sizes: "S to XXL",
          Weight: "2.5 kg",
        },
      },
    ],
  },

  // =========================
  // 3. UNDERWATER CAMERAS
  // =========================
  {
    id: "inspection-cameras",
    title: "Underwater Cameras",
    description: "Inspection cameras, housings & lighting systems",
    brands: ["Sony", "SeaLife", "GoPro"],
    products: [
      {
        id: "rov-camera",
        name: "ROV Inspection Camera",
        sku: "UC-CAM-001",
        brand: "Sony",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/7/73/ROV_camera_system.jpg",
        short: "High-definition subsea inspection camera",
        availability: "In Stock",
        datasheet: "/pdfs/rov-camera.pdf",
        specs: {
          Resolution: "4K UHD",
          Depth: "Up to 300m",
          Output: "HDMI / SDI",
          Weight: "2.2 kg",
        },
      },
      {
        id: "underwater-housing",
        name: "Camera Underwater Housing",
        sku: "UC-HOUS-002",
        brand: "SeaLife",
        image:
          "https://www.sealife-cameras.com/wp-content/uploads/2020/02/SL120_1200.jpg",
        short: "Pressure-rated camera housing",
        availability: "In Stock",
        datasheet: "/pdfs/camera-housing.pdf",
        specs: {
          Depth: "Up to 60m",
          Material: "Polycarbonate",
          Controls: "Full access",
          Weight: "1.1 kg",
        },
      },
      {
        id: "action-camera",
        name: "Action Camera Kit",
        sku: "UC-ACT-003",
        brand: "GoPro",
        image:
          "https://gopro.com/content/dam/help/articles/hero10-black-underwater.jpg",
        short: "Compact underwater action camera",
        availability: "Limited Stock",
        datasheet: "/pdfs/action-camera.pdf",
        specs: {
          Resolution: "5.3K",
          Stabilization: "HyperSmooth",
          Depth: "Up to 10m (60m w/ housing)",
          Weight: "153 g",
        },
      },
      {
        id: "underwater-light",
        name: "Underwater LED Light",
        sku: "UC-LGT-004",
        brand: "SeaLife",
        image:
          "https://www.sealife-cameras.com/wp-content/uploads/2021/03/SL983.jpg",
        short: "High-lumen underwater illumination",
        availability: "In Stock",
        datasheet: "/pdfs/underwater-light.pdf",
        specs: {
          Brightness: "5000 lumens",
          Runtime: "60 mins",
          Depth: "Up to 100m",
          Weight: "0.9 kg",
        },
      },
    ],
  },

  // =========================
  // 4. NDT & SURVEY TOOLS
  // =========================
  {
    id: "ndt-survey-tools",
    title: "NDT & Survey Tools",
    description: "Non-destructive testing and subsea survey equipment",
    brands: ["Olympus", "Sonardyne", "Bosch"],
    products: [
      {
        id: "ultrasonic-tester",
        name: "Ultrasonic Thickness Gauge",
        sku: "NDT-UT-001",
        brand: "Olympus",
        image:
          "https://www.olympus-ims.com/site/en/applications/ut/ultrasonic-thickness-gauge/images/utg.jpg",
        short: "Portable ultrasonic inspection device",
        availability: "In Stock",
        datasheet: "/pdfs/ultrasonic-tester.pdf",
        specs: {
          MeasurementRange: "0.5–250 mm",
          Accuracy: "±0.01 mm",
          Display: "LCD",
          Weight: "0.7 kg",
        },
      },
      {
        id: "subsea-sonar",
        name: "Subsea Sonar System",
        sku: "NDT-SNR-002",
        brand: "Sonardyne",
        image:
          "https://www.sonardyne.com/wp-content/uploads/2018/03/compatt-6-transponder.jpg",
        short: "High-resolution subsea positioning sonar",
        availability: "Limited Stock",
        datasheet: "/pdfs/subsea-sonar.pdf",
        specs: {
          Frequency: "300 kHz",
          Range: "Up to 1000 m",
          Accuracy: "±0.1 m",
          Weight: "4.5 kg",
        },
      },
      {
        id: "laser-scanner",
        name: "Underwater Laser Scanner",
        sku: "NDT-LSR-003",
        brand: "Bosch",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/3/3b/Laser_scanner.jpg",
        short: "3D underwater surface mapping scanner",
        availability: "In Stock",
        datasheet: "/pdfs/laser-scanner.pdf",
        specs: {
          Resolution: "0.5 mm",
          Range: "Up to 20 m",
          Accuracy: "±1 mm",
          Weight: "3.8 kg",
        },
      },
      {
        id: "magnetic-particle-kit",
        name: "Magnetic Particle Inspection Kit",
        sku: "NDT-MPI-004",
        brand: "Olympus",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/63/Magnetic_particle_testing.jpg",
        short: "Surface crack detection testing kit",
        availability: "In Stock",
        datasheet: "/pdfs/magnetic-particle-kit.pdf",
        specs: {
          InspectionType: "Surface flaws",
          Power: "Battery operated",
          Sensitivity: "High",
          Weight: "2.1 kg",
        },
      },
    ],
  },

  // =========================
  // 5. SURFACE SUPPORT
  // =========================
  {
    id: "surface-support",
    title: "Surface Support",
    description: "Compressors, generators, HPUs and surface systems",
    brands: ["Atlas Copco", "Doosan", "Stanley"],
    products: [
      {
        id: "air-compressor",
        name: "High Pressure Air Compressor",
        sku: "SS-CMP-001",
        brand: "Atlas Copco",
        image:
          "https://www.atlascopco.com/content/dam/www/public-site/air-compressors/images/portable-compressors/portable-air-compressor-xas88.jpg",
        short: "Portable compressor for diving air supply",
        availability: "In Stock",
        datasheet: "/pdfs/air-compressor.pdf",
        specs: {
          Pressure: "300 bar",
          Output: "600 L/min",
          Power: "Diesel",
          Weight: "450 kg",
        },
      },
      {
        id: "diesel-generator",
        name: "Diesel Generator",
        sku: "SS-GEN-002",
        brand: "Doosan",
        image:
          "https://www.doosanportablepower.com/wp-content/uploads/2020/04/G40.jpg",
        short: "Portable power generation unit",
        availability: "In Stock",
        datasheet: "/pdfs/diesel-generator.pdf",
        specs: {
          PowerOutput: "40 kVA",
          Fuel: "Diesel",
          Runtime: "12 hrs",
          Weight: "780 kg",
        },
      },
      {
        id: "hydraulic-power-unit",
        name: "Hydraulic Power Unit",
        sku: "SS-HPU-003",
        brand: "Stanley",
        image:
          "https://www.stanleyinfrastructure.com/-/media/Images/Products/Power-Units/Hydraulic-Power-Unit.ashx",
        short: "Hydraulic power source for subsea tools",
        availability: "Limited Stock",
        datasheet: "/pdfs/hydraulic-power-unit.pdf",
        specs: {
          FlowRate: "30 L/min",
          Pressure: "210 bar",
          Power: "Diesel",
          Weight: "350 kg",
        },
      },
      {
        id: "control-panel",
        name: "Diving Control Panel",
        sku: "SS-CTRL-004",
        brand: "Atlas Copco",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/3/3b/Industrial_control_panel.jpg",
        short: "Surface dive control & monitoring panel",
        availability: "In Stock",
        datasheet: "/pdfs/control-panel.pdf",
        specs: {
          Channels: "4 diver",
          Monitoring: "Depth, gas, comms",
          Power: "AC",
          Weight: "42 kg",
        },
      },
    ],
  },

  // =========================
  // 6. LIFTING & RIGGING
  // =========================
  {
    id: "lifting-gear",
    title: "Lifting & Rigging",
    description: "Subsea lifting bags, slings, chains & rigging tools",
    brands: ["Subsalve", "Crosby", "Gunnebo"],
    products: [
      {
        id: "lifting-bag",
        name: "Subsea Lifting Bag",
        sku: "LR-BAG-001",
        brand: "Subsalve",
        image:
          "https://www.subsalve.com/wp-content/uploads/2020/01/Lifting-Bags-Open-Bottom.jpg",
        short: "High-capacity inflatable lifting bag",
        availability: "In Stock",
        datasheet: "/pdfs/lifting-bag.pdf",
        specs: {
          Capacity: "5 Tons",
          Material: "Reinforced PVC",
          Depth: "Up to 200m",
          Weight: "18 kg",
        },
      },
      {
        id: "wire-sling",
        name: "Wire Rope Sling",
        sku: "LR-SLN-002",
        brand: "Crosby",
        image:
          "https://www.thecrosbygroup.com/wp-content/uploads/2020/05/wire-rope-slings.jpg",
        short: "Heavy-duty marine wire sling",
        availability: "In Stock",
        datasheet: "/pdfs/wire-sling.pdf",
        specs: {
          Capacity: "10 Tons",
          Length: "5 m",
          Material: "Galvanized steel",
          Weight: "12 kg",
        },
      },
      {
        id: "shackle",
        name: "Anchor Shackle",
        sku: "LR-SHK-003",
        brand: "Gunnebo",
        image:
          "https://www.gunneboindustries.com/globalassets/products/shackles/anchor-shackle.jpg",
        short: "Marine-grade anchor shackle",
        availability: "Limited Stock",
        datasheet: "/pdfs/shackle.pdf",
        specs: {
          Capacity: "8 Tons",
          Material: "Alloy steel",
          Coating: "Hot-dip galvanized",
          Weight: "3.4 kg",
        },
      },
      {
        id: "chain-block",
        name: "Chain Block Hoist",
        sku: "LR-CHN-004",
        brand: "Gunnebo",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/7/7c/Chain_block.jpg",
        short: "Manual heavy lifting chain hoist",
        availability: "In Stock",
        datasheet: "/pdfs/chain-block.pdf",
        specs: {
          Capacity: "3 Tons",
          LiftHeight: "3 m",
          Material: "Alloy steel",
          Weight: "22 kg",
        },
      },
    ],
  },
];

export default rentals;
