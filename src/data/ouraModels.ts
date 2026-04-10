export type OuraColor = {
  id: string;
  name: string;
  image: string;
  swatch: string;
};

export type OuraModel = {
  id: string;
  name: string;
  price: string;
  finishLabel: string;
  description: string;
  badge: string;
  sizes: string[];
  colors: OuraColor[];
};

const sizes = ["4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"];

export const ouraModels: OuraModel[] = [
  {
    id: "oura-ring-4",
    name: "Oura Ring 4",
    price: "$349",
    finishLabel: "Titanium finishes",
    badge: "5-8 days battery life",
    description:
      "Sleek, fully-titanium design with Smart Sensing technology for highly accurate, continuous tracking all day and night.",
    sizes,
    colors: [
      {
        id: "silver",
        name: "Silver",
        image: "/products/oura/or4-silver-angle.png",
        swatch: "/products/oura/or4-silver-swatch.png",
      },
      {
        id: "black",
        name: "Black",
        image: "/products/oura/or4-black-angle.png",
        swatch: "/products/oura/or4-black-swatch.png",
      },
      {
        id: "stealth",
        name: "Stealth",
        image: "/products/oura/or4-stealth-angle.png",
        swatch: "/products/oura/or4-stealth-swatch.png",
      },
      {
        id: "brushed-silver",
        name: "Brushed Silver",
        image: "/products/oura/or4-brushed-silver-angle.png",
        swatch: "/products/oura/or4-brushed-silver-swatch.png",
      },
      {
        id: "gold",
        name: "Gold",
        image: "/products/oura/or4-gold-angle.png",
        swatch: "/products/oura/or4-gold-swatch.png",
      },
      {
        id: "rose-gold",
        name: "Rose Gold",
        image: "/products/oura/or4-rose-gold-angle.png",
        swatch: "/products/oura/or4-rose-gold-swatch.png",
      },
    ],
  },
  {
    id: "oura-ring-4-ceramic",
    name: "Oura Ring 4 Ceramic",
    price: "$499",
    finishLabel: "Ceramic finishes",
    badge: "High-performance zirconia ceramic",
    description:
      "A polished ceramic expression of Oura Ring 4 with the same continuous health data, richer material feel, and elevated color story.",
    sizes,
    colors: [
      {
        id: "midnight",
        name: "Midnight",
        image: "/products/oura/or4-ceramic-midnight-angle.png",
        swatch: "/products/oura/or4-ceramic-midnight-swatch.png",
      },
      {
        id: "cloud",
        name: "Cloud",
        image: "/products/oura/or4-ceramic-cloud-angle.png",
        swatch: "/products/oura/or4-ceramic-cloud-swatch.png",
      },
      {
        id: "tide",
        name: "Tide",
        image: "/products/oura/or4-ceramic-tide-angle.png",
        swatch: "/products/oura/or4-ceramic-tide-swatch.png",
      },
      {
        id: "petal",
        name: "Petal",
        image: "/products/oura/or4-ceramic-petal-angle.png",
        swatch: "/products/oura/or4-ceramic-petal-swatch.png",
      },
    ],
  },
];
