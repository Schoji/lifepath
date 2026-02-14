import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
    title: "Lifepath",
    description: "Choose your life path!",
};

const robotoFont = Roboto({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export default function AppLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-theme="light">
            <body className={`${robotoFont.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
