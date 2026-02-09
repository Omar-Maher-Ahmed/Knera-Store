
import { products } from "../../../data/products";
import Link from "next/link";

type Props = {
  params: { id: string };
};

export default function ProductPage({ params }: Props) {
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
    <section className="max-w-6xl mx-auto px-6">

      {/* ================= Hero Image ================= */}
      <div className="mb-24">
        <img
          src={product.image}
          className="h-[520px] w-full object-cover rounded-xl"
        />
      </div>

      {/* ================= Story ================= */}
      <div className="max-w-3xl mx-auto text-center mb-24">
        <h1 className="text-4xl font-bold mb-6">
          {product.name}
        </h1>

        <p className="italic text-muted mb-8">
          Each piece is slightly different —
          because it’s made by hand, not by machines.
        </p>

        <p className="text-muted leading-relaxed mb-12">
          {product.description}
        </p>

        <ul className="space-y-3 text-sm text-gray-700 mb-16">
          <li>• Crafted slowly, stitch by stitch</li>
          <li>• Inspired by calm interiors</li>
          <li>• Designed to feel personal</li>
        </ul>

        <Link href="/cart" className="btn-primary">
          Add to Selected Pieces
        </Link>
      </div>

      {/* ================= Gallery ================= */}
      <section className="grid md:grid-cols-2 gap-12 mb-32">
        <img
          src={product.image}
          className="h-[420px] w-full object-cover rounded-xl"
        />
        <img
          src={product.image}
          className="h-[420px] w-full object-cover rounded-xl"
        />
      </section>

      {/* ================= Back ================= */}
      <div className="text-center mb-32">
        <Link
          href="/shop"
          className="text-sm text-muted hover:underline"
        >
          Back to collection
        </Link>
      </div>

    </section>
  );
}

