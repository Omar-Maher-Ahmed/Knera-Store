
"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { useState } from "react";

type Props = {
  id: number;
  name: string;
  image: string;
  price: number;
};

export default function ProductCard({ id, name, image, price }: Props) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
      
      <div className="relative aspect-[4/5] w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      </div>

      <div className="p-5 space-y-3">
        <h3 className="font-medium">{name}</h3>

        <p className="text-sm font-semibold text-gray-900">
          ${price}
        </p>

        <div className="flex items-center justify-between">
          <Link href={`/product/${id}`} className="text-sm underline">
            View
          </Link>

          <button
            onClick={() => {
              addToCart({ id, name, price, image });
              setAdded(true);
              setTimeout(() => setAdded(false), 1500);
            }}
            className="bg-black text-white text-xs px-4 py-2 rounded-full hover:bg-gray-800 transition"
          >
            {added ? "Added" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
