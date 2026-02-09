
// export default function AboutPage() {
//     return (
//         <section className="max-w-6xl mx-auto">
//             {/* ================= Page Header ================= */}
//             <div className="mb-20 text-center">
//                 <h1 className="text-3xl md:text-4xl font-semibold mb-4">
//                     About Knera
//                 </h1>

//                 <p className="text-muted max-w-xl mx-auto">
//                     Knera is a handmade brand dedicated to creating unique,
//                     timeless crochet bags with love and care.
//                 </p>
//             </div>

//             {/* ================= Story Section ================= */}
//             <div className="grid md:grid-cols-2 gap-12 mb-24 items-center">
//                 {/* Text */}
//                 <div>
//                     <h2 className="text-2xl font-semibold mb-6">
//                         Our Story
//                     </h2>

//                     <p className="text-gray-700 leading-relaxed mb-4">
//                         Knera started as a passion for handcrafted products and
//                         slowly grew into a brand that values creativity, quality,
//                         and individuality.
//                     </p>

//                     <p className="text-gray-700 leading-relaxed">
//                         Each bag is carefully designed and handmade to ensure
//                         that every piece feels special and personal.
//                     </p>
//                 </div>

//                 {/* Image */}
//                 <div className="bg-secondary rounded-xl h-80 flex items-center justify-center text-primary text-xl font-medium">
//                     Handmade Craft
//                 </div>
//             </div>

//             {/* ================= Values Section ================= */}
//             <section className="section">
//                 <h2 className="text-2xl font-semibold mb-12 text-center">
//                     Our Values
//                 </h2>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//                     {/* Value 1 */}
//                     <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition">
//                         <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-secondary text-primary text-xl">
//                             ✋
//                         </div>

//                         <h3 className="font-semibold mb-2">
//                             Handmade Quality
//                         </h3>

//                         <p className="text-sm text-muted leading-relaxed">
//                             Every product is carefully handcrafted to ensure
//                             high quality and attention to detail.
//                         </p>
//                     </div>

//                     {/* Value 2 */}
//                     <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition">
//                         <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-secondary text-primary text-xl">
//                             🌿
//                         </div>

//                         <h3 className="font-semibold mb-2">
//                             Sustainability
//                         </h3>

//                         <p className="text-sm text-muted leading-relaxed">
//                             We choose materials that are eco-friendly and safe
//                             for the environment.
//                         </p>
//                     </div>

//                     {/* Value 3 */}
//                     <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition">
//                         <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-secondary text-primary text-xl">
//                             ✨
//                         </div>

//                         <h3 className="font-semibold mb-2">
//                             Unique Design
//                         </h3>

//                         <p className="text-sm text-muted leading-relaxed">
//                             Each design is created to be unique, reflecting
//                             creativity and individuality.
//                         </p>
//                     </div>
//                 </div>
//             </section>
//         </section>
//     );
// }
export default function AboutPage() {
    return (
        <section className="max-w-5xl mx-auto px-6">

            {/* ================= Header ================= */}
            <div className="text-center mb-24">
                <h1 className="text-4xl font-bold mb-4">
                    About Knera
                </h1>
                <p className="text-muted max-w-xl mx-auto">
                    Knera is a handmade brand inspired by calm spaces,
                    slow living, and thoughtful craftsmanship.
                </p>
            </div>

            {/* ================= Story ================= */}
            <section className="section grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-2xl font-semibold mb-6">
                        Our Story
                    </h2>

                    <p className="text-muted leading-relaxed mb-4">
                        Knera began with a love for handmade details and
                        a belief that beauty lives in slow, intentional work.
                    </p>

                    <p className="text-muted leading-relaxed">
                        Every piece is created with patience, care,
                        and attention to the smallest details.
                    </p>
                </div>

                <img
                    src="/images/craft.jpg"
                    className="h-72 w-full object-cover rounded-xl"
                />
            </section>

            {/* ================= Values ================= */}
            <section className="section">
                <h2 className="text-2xl font-semibold mb-12 text-center">
                    What We Believe In
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        {
                            title: "Handmade Quality",
                            text: "Every item is handcrafted with care and precision.",
                        },
                        {
                            title: "Natural Materials",
                            text: "Inspired by nature and warm, neutral textures.",
                        },
                        {
                            title: "Timeless Design",
                            text: "Pieces designed to last and never feel trendy.",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-xl p-8 text-center
                            shadow-sm hover:shadow-xl hover:-translate-y-1
                            transition-all duration-300"
                        >
                            <h3 className="font-semibold mb-3">
                                {item.title}
                            </h3>

                            <p className="text-sm text-muted">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= Closing ================= */}
            <section className="section text-center">
                <p className="text-muted text-lg">
                    Knera is more than a brand —
                    it’s a story told through handmade details.
                </p>
            </section>

        </section>
    );
}

