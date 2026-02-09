
import Link from "next/link";
import { products } from "../../data/products";

const decorItems = [
    { id: "d1", name: "Macramé Wall Art", image: "/images/macrame1.jpg" },
    { id: "d2", name: "Macramé Hanging", image: "/images/macrame2.jpg" },
    { id: "d3", name: "Handmade Mirror", image: "/images/mirror.jpg" },
    { id: "d4", name: "Calm Handmade Room", image: "/images/room.jpg" },
];

export default function ShopPage() {
    return (
        <section className="max-w-6xl mx-auto px-6">

            <div className="mb-32 text-center">
                <h1 className="text-5xl font-bold mb-6">
                    The Collection
                </h1>
                <p className="text-muted max-w-xl mx-auto">
                    A curated selection of handmade pieces,
                    created slowly and thoughtfully.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">

                {[...products, ...decorItems].map((item: any, i) => (
                    <Link
                        key={i}
                        href={item.id ? `/product/${item.id}` : "#"}
                        className="group block"
                    >
                        <img
                            src={item.image}
                            className="h-[420px] w-full object-cover rounded-xl
              group-hover:scale-[1.03] transition duration-500"
                        />

                        <div className="mt-4">
                            <h3 className="font-medium text-lg">
                                {item.name}
                            </h3>
                            <p className="text-sm text-muted">
                                Handmade Piece
                            </p>
                        </div>
                    </Link>
                ))}

            </div>

        </section>
    );
}
