
import Link from "next/link";

export default function CartPage() {
    return (
        <section className="max-w-5xl mx-auto px-6">

            {/* ================= Header ================= */}
            <div className="text-center mb-24">
                <h1 className="text-4xl font-bold mb-4">
                    Your selected pieces
                </h1>

                <p className="text-muted max-w-lg mx-auto">
                    A small collection of handmade items you connected with.
                    Each one carries a story and a human touch.
                </p>
            </div>

            {/* ================= Selected Items ================= */}
            <div className="space-y-10 mb-32">

                <div className="flex gap-8 items-center bg-white rounded-xl p-8 shadow-sm">
                    <img
                        src="/images/bag-1.jpg"
                        className="w-32 h-32 object-cover rounded-lg"
                    />

                    <div className="flex-1">
                        <h3 className="font-semibold mb-2">
                            Sunflower Handmade Bag
                        </h3>

                        <p className="text-sm text-muted mb-4">
                            Handmade crochet bag
                        </p>

                        <button className="text-sm text-red-500 hover:underline">
                            Remove
                        </button>
                    </div>
                </div>

                <div className="flex gap-8 items-center bg-white rounded-xl p-8 shadow-sm">
                    <img
                        src="/images/macrame1.jpg"
                        className="w-32 h-32 object-cover rounded-lg"
                    />

                    <div className="flex-1">
                        <h3 className="font-semibold mb-2">
                            Macramé Wall Art
                        </h3>

                        <p className="text-sm text-muted mb-4">
                            Handmade home décor
                        </p>

                        <button className="text-sm text-red-500 hover:underline">
                            Remove
                        </button>
                    </div>
                </div>

            </div>

            {/* ================= Closing ================= */}
            <div className="text-center mb-32">
                <p className="text-muted mb-10">
                    Pricing and availability are shared personally
                    to keep each piece meaningful and unique.
                </p>

                <Link href="/shop" className="btn-primary">
                    Continue Exploring
                </Link>
            </div>

        </section>
    );
}

