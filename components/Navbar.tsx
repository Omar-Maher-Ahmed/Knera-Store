// import Link from "next/link";

// export default function Navbar() {
//     return (
//         <header className="border-b mb-8">
//             <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
//                 <h1 className="text-xl font-bold">
//                     Knera
//                 </h1>

//                 <ul className="flex gap-6 text-sm font-medium">
//                     <li>
//                         <Link href="/">Home</Link>
//                     </li>
//                     <li>
//                         <Link href="/shop">Shop</Link>
//                     </li>
//                     <li>
//                         <Link href="/about">About</Link>
//                     </li>
//                     <li>
//                         <Link href="/cart">Cart</Link>
//                     </li>
//                 </ul>
//             </nav>
//         </header>
//     );
// }
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="bg-white border-b border-gray-100">
            <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-3xl font-semibold text-primary tracking-wide"
                >
                    Knera
                </Link>

                {/* Navigation */}
                <ul className="flex items-center gap-10 text-sm font-medium text-muted uppercase tracking-wider">
                    <li>
                        <Link href="/" className="hover:text-primary transition">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/shop" className="hover:text-primary transition">
                            Shop
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:text-primary transition">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/cart"
                            className="hover:text-primary transition border px-4 py-2 rounded-xl"
                        >
                            Cart
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

