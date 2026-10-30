
export default function Footer() {
    return (
        <footer className="bg-blue-900 px-6 py-6 text-center text-white">
            <p className="text-sm">
                © {new Date().getFullYear()} Nsikak Eyo.
                All rights reserved.
            </p>

            <p className="mt-2 text-sm">
                Software Development Student | BYU-Idaho
            </p>

            <a
                href="https://github.com/Nsikakeyo01"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm underline hover:text-blue-200"
            >
                Visit My GitHub
            </a>
        </footer>
    );
}
