
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageWrapper from "../components/PageWrapper";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Navbar />

                <main className="min-h-screen max-w-6xl mx-auto px-6 py-8">
                    <PageWrapper>
                        {children}
                    </PageWrapper>
                </main>

                <Footer />
            </body>
        </html>
    );
}

