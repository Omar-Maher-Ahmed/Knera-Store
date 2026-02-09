
import Link from "next/link";
import { products } from "../data/products";

export default function Home() {
    return (
        <section className="max-w-6xl mx-auto px-6">

            {/* ================= Hero ================= */}
            <div className="grid md:grid-cols-2 gap-10 items-center mb-24">
                <div className="fade-up delay-1">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        Handmade Bags <br /> Crafted With Love
                    </h1>

                    <p className="text-gray-600 text-lg mb-8">
                        Discover unique handmade crochet bags designed to match
                        your everyday style.
                    </p>

                    <Link href="/shop" className="btn-primary">
                        Shop Now
                    </Link>
                </div>

                <img
                    src="/images/bag-1.jpg"
                    alt="Handmade crochet bag"
                    className="h-72 w-full object-cover rounded-xl fade-up delay-2"
                />
            </div>

            {/* ================= Featured ================= */}
            <section className="section-lg fade-up">
                <h2 className="text-2xl font-semibold mb-10">
                    Featured Collection
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {products.slice(0, 3).map((product) => (
                        <Link
                            key={product.id}
                            href={`/product/${product.id}`}
                            className="group bg-white border rounded-xl overflow-hidden
                            shadow-sm hover:shadow-xl hover:-translate-y-1
                            transition-all duration-300"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="h-44 w-full object-cover
                                transition-transform duration-300
                                group-hover:scale-105"
                            />

                            <div className="p-5">
                                <h3 className="font-medium">
                                    {product.name}
                                </h3>

                                <p className="text-sm text-muted mt-1">
                                    Contact for price
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* ================= Why Knera ================= */}
            <section className="section fade-up">
                <h2 className="text-2xl font-semibold mb-12 text-center">
                    Why Choose Knera
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {[
                        {
                            icon: "✋",
                            title: "Handmade with Care",
                            text: "Each piece is carefully handcrafted with attention to detail.",
                        },
                        {
                            icon: "🌿",
                            title: "Natural Materials",
                            text: "Inspired by nature and handmade traditions.",
                        },
                        {
                            icon: "✨",
                            title: "Timeless Design",
                            text: "Designs that fit warm homes and calm spaces.",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-xl p-8 text-center
                            shadow-sm hover:shadow-xl hover:-translate-y-1
                            transition-all duration-300"
                        >
                            <div className="w-12 h-12 mx-auto mb-4 flex items-center
                            justify-center rounded-full bg-secondary text-primary text-xl">
                                {item.icon}
                            </div>

                            <h3 className="font-semibold mb-2">
                                {item.title}
                            </h3>

                            <p className="text-sm text-muted">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= Craft Process ================= */}
            <section className="section fade-up">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-2xl font-semibold mb-6">
                            Our Handmade Process
                        </h2>

                        <p className="text-muted mb-6 leading-relaxed">
                            From the first stitch to the final detail, every piece
                            is made slowly and thoughtfully.
                        </p>

                        <ul className="space-y-4 text-sm text-gray-700">
                            <li>🧶 Premium yarn selection</li>
                            <li>✋ Handmade stitch by stitch</li>
                            <li>✨ Final quality finishing</li>
                        </ul>
                    </div>

                    <img
                        src="/images/craft.jpg"
                        className="h-64 w-full object-cover rounded-xl"
                    />
                </div>
            </section>

            {/* ================= Decor Gallery ================= */}
            <section className="section fade-up">
                <h2 className="text-2xl font-semibold mb-12 text-center">
                    Handmade Home Decor
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { img: "macrame2.jpg", title: "Macramé Wall Art" },
                        { img: "mirror.jpg", title: "Knéra Signature Mirror" },
                        { img: "macrame1.jpg", title: "Macramé Hanging Shelf" },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="group bg-white rounded-xl overflow-hidden
                            shadow-sm hover:shadow-xl hover:-translate-y-1
                            transition-all duration-300"
                        >
                            <img
                                src={`/images/${item.img}`}
                                className="h-56 w-full object-cover
                                transition-transform duration-300
                                group-hover:scale-105"
                            />

                            <div className="p-5 text-center">
                                <h3 className="font-medium">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </section>
    );
}
// import Link from "next/link";
// import { products } from "../data/products";

// export default function Home() {
//     return (
//         <section className="max-w-6xl mx-auto px-6">

//             {/* ================= Hero ================= */}
//             <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
//                 <div className="fade-up">
//                     <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
//                         Handmade <br /> With Intention
//                     </h1>

//                     <p className="text-muted text-lg mb-10 max-w-md">
//                         Knera creates handmade pieces inspired by calm spaces,
//                         slow living, and natural textures.
//                     </p>

//                     <Link href="/shop" className="btn-primary">
//                         Explore Collection
//                     </Link>
//                 </div>

//                 <img
//                     src="/images/room.jpg"
//                     className="h-[420px] w-full object-cover rounded-xl fade-up delay-1"
//                 />
//             </div>

//             {/* ================= Mood Gallery ================= */}
//             <section className="section-lg">
//                 <div className="grid md:grid-cols-3 gap-8">

//                     {[
//                         { img: "macrame1.jpg", text: "Soft handmade textures" },
//                         { img: "mirror.jpg", text: "Warm natural details" },
//                         { img: "macrame2.jpg", text: "Calm crafted spaces" },
//                     ].map((item, i) => (
//                         <div
//                             key={i}
//                             className="relative overflow-hidden rounded-xl group"
//                         >
//                             <img
//                                 src={`/images/${item.img}`}
//                                 className="h-80 w-full object-cover
//                 group-hover:scale-105 transition duration-500"
//                             />

//                             <div className="absolute inset-0 bg-black/30 flex items-end p-6">
//                                 <p className="text-white text-lg font-medium">
//                                     {item.text}
//                                 </p>
//                             </div>
//                         </div>
//                     ))}

//                 </div>
//             </section>

//             {/* ================= Editorial Text ================= */}
//             <section className="section text-center">
//                 <h2 className="text-6xl md:text-7xl font-bold tracking-tight text-gray-200">
//                     SLOW
//                 </h2>
//                 <p className="text-muted mt-6 max-w-lg mx-auto">
//                     We believe handmade takes time —
//                     and that’s where the beauty lives.
//                 </p>
//             </section>

//             {/* ================= Featured ================= */}
//             <section className="section-lg">
//                 <h2 className="text-2xl font-semibold mb-12">
//                     Featured Pieces
//                 </h2>

//                 <div className="grid md:grid-cols-2 gap-12">
//                     {products.slice(0, 2).map((product) => (
//                         <Link
//                             key={product.id}
//                             href={`/product/${product.id}`}
//                             className="group block"
//                         >
//                             <img
//                                 src={product.image}
//                                 className="h-[420px] w-full object-cover rounded-xl
//                 group-hover:scale-[1.02] transition duration-500"
//                             />

//                             <div className="mt-4">
//                                 <h3 className="font-medium text-lg">
//                                     {product.name}
//                                 </h3>
//                                 <p className="text-sm text-muted">
//                                     Handmade • One of a kind
//                                 </p>
//                             </div>
//                         </Link>
//                     ))}
//                 </div>
//             </section>

//         </section>
//     );
// }


