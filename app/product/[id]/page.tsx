

"use client";

import { products } from "../../../data/products";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "../../../context/CartContext";

type Props = {
  params: { id: string };
};

export default function ProductPage({ params }: Props) {
  const { addToCart } = useCart();

  const product = products.find(
    (p) => p.id === Number(params.id)
  );

  if (!product) {
    return (
      <section className="text-center py-32">
        <h1 className="text-2xl font-semibold mb-6">
          This piece is no longer available
        </h1>
        <Link href="/shop" className="btn-primary">
          Back to Collection
        </Link>
      </section>
    );
  }

  return (
    <section className="max-w-6xl mx-auto">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">

        {/* Images */}
        <div className="space-y-6">

          <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center">

          <h1 className="text-3xl sm:text-4xl font-bold mb-6">
            {product.name}
          </h1>

          <p className="text-lg font-semibold mb-4">
            {product.price} EGP
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            {product.description}
          </p>

          <ul className="space-y-3 text-sm text-gray-700 mb-10">
            <li>Handcrafted with premium yarn</li>
            <li>Limited handmade piece</li>
            <li>Designed for calm, natural spaces</li>
          </ul>

          <button
            onClick={() =>
              addToCart({
                id: product.id,
                name: product.name,
                image: product.image,
                price: product.price,
              })
            }
            className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition w-full sm:w-auto"
          >
            Add to Cart
          </button>

        </div>
      </div>

      <div className="text-center mb-24">
        <Link
          href="/shop"
          className="text-sm text-gray-500 hover:underline"
        >
          Back to collection
        </Link>
      </div>

    </section>
  );
}
