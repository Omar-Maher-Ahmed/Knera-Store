
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 mt-32">
            <div className="max-w-6xl mx-auto px-6 py-16">
                {/* ================= Top Section ================= */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-semibold text-primary mb-4">
                            Knera
                        </h3>

                        <p className="text-sm text-muted leading-relaxed">
                            Handmade crochet bags crafted with love, care,
                            and attention to detail.
                        </p>
                    </div>

                    {/* Shop Links */}
                    <div>
                        <h4 className="font-semibold mb-4">
                            Shop
                        </h4>

                        <ul className="space-y-3 text-sm text-muted">
                            <li>
                                <Link href="/shop" className="hover:text-primary transition">
                                    All Products
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop" className="hover:text-primary transition">
                                    Featured
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop" className="hover:text-primary transition">
                                    New Arrivals
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-semibold mb-4">
                            Company
                        </h4>

                        <ul className="space-y-3 text-sm text-muted">
                            <li>
                                <Link href="/about" className="hover:text-primary transition">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-primary transition">
                                    Our Story
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-primary transition">
                                    Values
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold mb-4">
                            Contact
                        </h4>

                        <ul className="space-y-3 text-sm text-muted">
                            <li>Instagram: @knera</li>
                            <li>Email: info@knera.com</li>
                            <li>Location: Handmade Studio</li>
                        </ul>
                    </div>
                </div>

                {/* ================= Bottom Section ================= */}
                <div className="border-t pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-muted">
                    <p>
                        © {new Date().getFullYear()} Knera. All rights reserved.
                    </p>

                    <p className="mt-4 sm:mt-0">
                        Handmade with care 🤍
                    </p>
                </div>
            </div>
        </footer>
    );
}

