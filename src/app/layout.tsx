import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "http://localhost:3000";

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: "LifePath",
        template: "%s | LifePath",
    },
    description: "Find your path in your new life: education, career and integration guidance step by step.",
    applicationName: "LifePath",
    keywords: [
        "LifePath",
        "education guidance",
        "career guidance",
        "integration support",
        "Germany pathways",
    ],
    authors: [{ name: "LifePath Team" }],
    creator: "LifePath Team",
    publisher: "LifePath Team",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "/",
        siteName: "LifePath",
        title: "LifePath",
        description: "Find your path in your new life: education, career and integration guidance step by step.",
    },
    twitter: {
        card: "summary_large_image",
        title: "LifePath",
        description: "Find your path in your new life: education, career and integration guidance step by step.",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/favicon.ico",
    },
    manifest: "/manifest.webmanifest",
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
