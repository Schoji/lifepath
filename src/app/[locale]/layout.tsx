import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import Link from "next/link";
import { House, Mail } from "lucide-react";

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
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
    const t = await getTranslations({ locale, namespace: "navbar" });
    return (
        <NextIntlClientProvider>
            <div className="min-h-screen bg-zinc-100">
                <div className="navbar sticky top-0 z-50 border-b border-black/10 bg-white/45 px-4 sm:px-6 backdrop-blur-xl">
                    <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
                        <Link href={`/${locale}`} className="btn btn-ghost gap-2 text-base font-medium normal-case text-zinc-800 hover:bg-white/40">
                            <House size={18} />
                            {t("home")}
                        </Link>
                        <Link href={`/${locale}/contact`} className="btn btn-ghost gap-2 text-base font-medium normal-case text-zinc-800 hover:bg-white/40">
                            <Mail size={18} />
                            {t("contact_us")}
                        </Link>
                    </div>
                </div>
                {children}
            </div>
        </NextIntlClientProvider>
    );
}
