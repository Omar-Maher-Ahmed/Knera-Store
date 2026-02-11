
import Link from "next/link";
import Image from "next/image";
import { products } from "../data/products";

export default function Home() {
  return (
    <section className="space-y-28">

      {/* Hero */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Handmade Bags <br /> Crafted With Love
          </h1>

          <p className="text-gray-600 text-lg mb-8 max-w-md">
            Discover unique handmade crochet pieces designed
            to match your everyday style.
          </p>

          <Link
            href="/shop"
            className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition"
          >
            Shop Now
          </Link>
        </div>

        <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden">
          <Image
            src="/images/bag-1.jpg"
            alt="Handmade crochet bag"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Featured */}
      <section>
        <h2 className="text-2xl font-semibold mb-10">
          Featured Collection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, 3).map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition"
            >
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="p-5">
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Handmade • Limited
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Craft Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-2xl font-semibold mb-6">
            Our Handmade Process
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            From the first stitch to the final detail,
            every piece is made slowly and thoughtfully.
          </p>

          <ul className="space-y-3 text-sm text-gray-700">
            <li>Premium yarn selection</li>
            <li>Handcrafted stitch by stitch</li>
            <li>Final quality finishing</li>
          </ul>
        </div>

        <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden">
          <Image
            src="/images/craft.jpg"
            alt="Crochet crafting process"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

    </section>
  );
}


