
import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-blue-900 text-white">
            <nav
                aria-label="Main navigation"
                className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5"
            >
                <Link href="/" className="text-xl font-bold">
                    Nsikak Eyo
                </Link>

                <div className="flex gap-6">
                    <Link href="/" className="hover:underline">
                        Home
                    </Link>

                    <Link href="/about" className="hover:underline">
                        About
                    </Link>
                </div>
            </nav>
        </header>
    );
}
