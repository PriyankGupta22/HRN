import white from "../assets/white2.png";

const products = [
  {
    id: 1,
    name: "Aurora™ Puffer Jacket",
    shortName: "AURORA™",
    category: "Puffer Jackets",
    collection: "ARTIC 01™ COLLECTION",
    price: 899.99,
    color: "Frost White",
    colors: [
      { name: "Frost White", value: "#eef3f4" },
      { name: "Ice Grey", value: "#a9bdc9" },
      { name: "Slate", value: "#3b5362" },
      { name: "Black", value: "#101b22" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    defaultSize: "M",

    description:
      "Extreme warmth. Minimal weight. Engineered for the harshest conditions.",

    temperature: "-30°C / -22°F",

    features: [
      {
        title: "WINDLOCK™",
        description: "Windproof shell",
      },
      {
        title: "HYDROSHIELD™",
        description: "Water repellent",
      },
      {
        title: "THERMAL CORE™",
        description: "Premium insulation",
      },
    ],

    images: [white],

    details: [
      "100% Nylon Ripstop Shell",
      "Thermal Core™ Insulation",
      "Windlock™ Technology",
      "Hydroshield™ Coating",
      "YKK® AquaGuard® Zippers",
      "Adjustable Hood & Hem",
      "Internal Secure Pockets",
    ],

    fillPower: "850+",
    weight: "620g",
    tested: "-30°C",
  },

  {
    id: 2,
    name: "Frostguard™ Parka",
    shortName: "FROSTGUARD™",
    category: "Parkas",
    collection: "ARTIC 01™ COLLECTION",
    price: 949.99,
    color: "Frost White",
    colors: [
      { name: "Frost White", value: "#eef3f4" },
      { name: "Slate", value: "#3b5362" },
      { name: "Black", value: "#101b22" },
    ],
    sizes: ["M", "L", "XL"],
    defaultSize: "M",

    description:
      "Full-length protection engineered for extreme winter expeditions.",

    temperature: "-35°C / -31°F",

    features: [
      {
        title: "WINDLOCK™",
        description: "Extreme wind protection",
      },
      {
        title: "HYDROSHIELD™",
        description: "Water resistant shell",
      },
      {
        title: "THERMAL CORE™",
        description: "High loft insulation",
      },
    ],

    images: [white],

    details: [
      "Technical Nylon Shell",
      "Premium Down Insulation",
      "Storm Hood",
      "Water Resistant Exterior",
    ],

    fillPower: "800+",
    weight: "710g",
    tested: "-35°C",
  },

  {
    id: 3,
    name: "Glacier™ Down Jacket",
    shortName: "GLACIER™",
    category: "Puffer Jackets",
    collection: "ARTIC 01™ COLLECTION",
    price: 799.99,
    color: "Ice Grey",
    colors: [
      { name: "Ice Grey", value: "#a9bdc9" },
      { name: "Frost White", value: "#eef3f4" },
      { name: "Black", value: "#101b22" },
    ],
    sizes: ["S", "M", "L"],
    defaultSize: "M",

    description:
      "Lightweight down protection built for high-altitude environments.",

    temperature: "-25°C / -13°F",

    features: [
      {
        title: "WINDLOCK™",
        description: "Wind resistant shell",
      },
      {
        title: "HYDROSHIELD™",
        description: "Water repellent",
      },
      {
        title: "THERMAL CORE™",
        description: "Down insulation",
      },
    ],

    images: [white],

    details: [
      "Ripstop Nylon",
      "800 Fill Power Down",
      "Adjustable Hood",
      "YKK® Zippers",
    ],

    fillPower: "800+",
    weight: "580g",
    tested: "-25°C",
  },

  {
    id: 4,
    name: "Polar Shell™ Jacket",
    shortName: "POLAR SHELL™",
    category: "Shell Jackets",
    collection: "ARTIC 01™ COLLECTION",
    price: 699.99,
    color: "Black",
    colors: [
      { name: "Black", value: "#101b22" },
      { name: "Slate", value: "#3b5362" },
    ],
    sizes: ["S", "M", "L", "XL"],
    defaultSize: "M",

    description:
      "A technical outer shell designed for brutal wind and wet conditions.",

    temperature: "-20°C / -4°F",

    features: [
      {
        title: "WINDLOCK™",
        description: "Windproof membrane",
      },
      {
        title: "HYDROSHIELD™",
        description: "Waterproof shell",
      },
      {
        title: "THERMAL CORE™",
        description: "Light insulation",
      },
    ],

    images: [white],

    details: [
      "3-Layer Technical Shell",
      "Waterproof Membrane",
      "Fully Taped Seams",
      "Adjustable Hood",
    ],

    fillPower: "—",
    weight: "490g",
    tested: "-20°C",
  },

  {
    id: 5,
    name: "Arctic Vest™",
    shortName: "ARCTIC VEST™",
    category: "Puffer Jackets",
    collection: "ARTIC 01™ COLLECTION",
    price: 449.99,
    color: "Slate",
    colors: [
      { name: "Slate", value: "#3b5362" },
      { name: "Black", value: "#101b22" },
    ],
    sizes: ["S", "M", "L", "XL"],
    defaultSize: "M",

    description:
      "Core warmth without the bulk. Built for fast movement in cold terrain.",

    temperature: "-15°C / 5°F",

    features: [
      {
        title: "THERMAL CORE™",
        description: "Core insulation",
      },
      {
        title: "WINDLOCK™",
        description: "Wind resistant",
      },
      {
        title: "HYDROSHIELD™",
        description: "Water repellent",
      },
    ],

    images: [white],

    details: [
      "Nylon Ripstop",
      "Lightweight Insulation",
      "Two-Way Zipper",
      "Secure Pockets",
    ],

    fillPower: "750+",
    weight: "410g",
    tested: "-15°C",
  },

  {
    id: 6,
    name: "Summit™ Puffer Jacket",
    shortName: "SUMMIT™",
    category: "Puffer Jackets",
    collection: "ARTIC 01™ COLLECTION",
    price: 849.99,
    color: "Frost White",
    colors: [
      { name: "Frost White", value: "#eef3f4" },
      { name: "Ice Grey", value: "#a9bdc9" },
    ],
    sizes: ["M", "L", "XL"],
    defaultSize: "M",

    description:
      "High altitude insulation engineered for long days above the tree line.",

    temperature: "-28°C / -18°F",

    features: [
      {
        title: "THERMAL CORE™",
        description: "High loft insulation",
      },
      {
        title: "WINDLOCK™",
        description: "Windproof exterior",
      },
      {
        title: "HYDROSHIELD™",
        description: "Water repellent",
      },
    ],

    images: [white],

    details: [
      "Premium Down",
      "Nylon Ripstop",
      "Storm Hood",
      "YKK® Zippers",
    ],

    fillPower: "850+",
    weight: "600g",
    tested: "-28°C",
  },

  {
    id: 7,
    name: "Icefield™ Parka",
    shortName: "ICEFIELD™",
    category: "Parkas",
    collection: "ARTIC 01™ COLLECTION",
    price: 999.99,
    color: "Ice Grey",
    colors: [
      { name: "Ice Grey", value: "#a9bdc9" },
      { name: "Black", value: "#101b22" },
      { name: "Frost White", value: "#eef3f4" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    defaultSize: "M",

    description:
      "Maximum protection for prolonged exposure to extreme cold.",

    temperature: "-40°C / -40°F",

    features: [
      {
        title: "THERMAL CORE™",
        description: "Maximum insulation",
      },
      {
        title: "WINDLOCK™",
        description: "Expedition shell",
      },
      {
        title: "HYDROSHIELD™",
        description: "Storm protection",
      },
    ],

    images: [white],

    details: [
      "Expedition Grade Shell",
      "Premium Down",
      "Storm Cuffs",
      "Extended Hem",
    ],

    fillPower: "900+",
    weight: "820g",
    tested: "-40°C",
  },

  {
    id: 8,
    name: "Northseeker™ Shell",
    shortName: "NORTHSEEKER™",
    category: "Shell Jackets",
    collection: "ARTIC 01™ COLLECTION",
    price: 699.99,
    color: "Black",
    colors: [
      { name: "Black", value: "#101b22" },
      { name: "Slate", value: "#3b5362" },
    ],
    sizes: ["M", "L", "XL"],
    defaultSize: "M",

    description:
      "Technical shell protection designed for fast-moving expeditions.",

    temperature: "-22°C / -8°F",

    features: [
      {
        title: "WINDLOCK™",
        description: "Windproof shell",
      },
      {
        title: "HYDROSHIELD™",
        description: "Waterproof membrane",
      },
      {
        title: "THERMAL CORE™",
        description: "Light insulation",
      },
    ],

    images: [white],

    details: [
      "3-Layer Shell",
      "Waterproof Membrane",
      "Taped Seams",
      "Adjustable Cuffs",
    ],

    fillPower: "—",
    weight: "510g",
    tested: "-22°C",
  },
];

export default products;