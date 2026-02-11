

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  images: string[];
};

export const products: Product[] = [
  {
    id: 1,
    name: "Sunflower Handmade Bag",
    description:
      "A warm handmade crochet bag inspired by sunflower tones and natural textures.",
    price: 450,
    image: "/images/bag-1.jpg",
    images: [
      "/images/bag-1.jpg",
      "/images/bag-4.jpg",
      "/images/bag-5.jpg",
    ],
  },
  {
    id: 2,
    name: "Green Crochet Bag",
    description:
      "Elegant handcrafted crochet bag in calming green shades, designed for everyday style.",
    price: 520,
    image: "/images/bag-2.jpg",
    images: [
      "/images/bag-2.jpg",
      "/images/bag-7.jpg",
      "/images/bag-4.jpg",
    ],
  },
  {
    id: 3,
    name: "Floral Tote Bag",
    description:
      "Floral-inspired handmade tote bag combining soft yarn details with functional design.",
    price: 480,
    image: "/images/bag-6.jpg",
    images: [
      "/images/bag-6.jpg",
      "/images/bag-5.jpg",
      "/images/bag-7.jpg",
    ],
  },
];
