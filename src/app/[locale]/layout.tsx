import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import { Roboto } from 'next/font/google';

import type { Metadata } from "next";
import "../globals.css";


export const metadata: Metadata = {
    title: "Lifepath",
    description: "Choose your life path!",
};

const robotoFont = Roboto({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
    children,
    params
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string; }>;
}>) {
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }
    return (
        <html lang={locale}>
            <head>
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body
                className={`${robotoFont.variable} antialiased`}
            >
                <NextIntlClientProvider>
                    {children}
                </NextIntlClientProvider>
            </body>

        </html>
    );
}
