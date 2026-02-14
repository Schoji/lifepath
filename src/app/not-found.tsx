import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex min-h-screen w-full items-center justify-center bg-zinc-100 px-6 py-12 text-zinc-900">
            <div className="w-full max-w-3xl text-center">
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">Error 404</p>
                <h1 className="mt-3 text-4xl font-bold text-zinc-900 sm:text-5xl">Page not found</h1>
                <p className="mt-4 text-lg text-zinc-600">
                    The page you are looking for does not exist or may have been moved.
                </p>
                <Link href="/" className="btn btn-primary mt-8">
                    Go to home page
                </Link>
            </div>
        </main>
    );
}
