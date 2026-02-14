import { Code2, Heart, Mail } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function ContactPage() {
    const t = useTranslations("contact");
    const email = t("email");

    return (
        <main className="w-full bg-zinc-100 text-zinc-900">
            <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
                <section className="text-center">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                        <Mail size={28} />
                    </div>
                    <h1 className="mt-5 text-4xl font-bold sm:text-5xl">{t("title")}</h1>
                    <p className="mx-auto mt-5 max-w-3xl text-xl leading-relaxed text-zinc-600 sm:text-2xl">
                        {t("subtitle_line1")}
                        <br className="hidden sm:block" /> {t("subtitle_line2")}
                    </p>
                </section>

                <section className="card mt-10 border border-zinc-300 bg-white shadow-sm">
                    <div className="card-body p-6 sm:p-10">
                        <h2 className="text-3xl font-semibold sm:text-4xl">{t("get_in_touch.title")}</h2>
                        <p className="mt-3 text-lg leading-relaxed text-zinc-600 sm:text-2xl">
                            {t("get_in_touch.description")}
                        </p>

                        <Link
                            href={`mailto:${email}`}
                            className="mt-6 inline-flex items-center gap-3 text-2xl font-semibold text-blue-700 transition-colors hover:text-blue-800"
                        >
                            <Mail size={24} />
                            {email}
                        </Link>
                    </div>
                </section>

                <section className="card mt-8 border border-zinc-300 bg-white shadow-sm">
                    <div className="card-body p-6 sm:p-10">
                        <div className="flex items-center gap-4">
                            <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-zinc-100 text-blue-700">
                                <Heart size={24} />
                            </div>
                            <h2 className="text-3xl font-semibold sm:text-4xl">{t("credits.title")}</h2>
                        </div>

                        <p className="mt-5 text-lg leading-relaxed text-zinc-600 sm:text-2xl">
                            {t("credits.description")}
                        </p>

                        <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div className="rounded-2xl bg-zinc-100 p-5">
                                <div className="flex items-center gap-3">
                                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-blue-700">
                                        <Code2 size={18} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-semibold">{t("credits.development_role")}</h3>
                                        <p className="text-lg text-zinc-600">{t("credits.development_name")}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-2xl bg-zinc-100 p-5">
                                <div className="flex items-center gap-3">
                                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-blue-700">
                                        <Heart size={18} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-semibold">{t("credits.content_research_role")}</h3>
                                        <p className="text-lg text-zinc-600">{t("credits.content_research_name")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <p className="mt-10 text-center text-base text-zinc-500 sm:text-lg">
                    {t("footer_note")}
                </p>
            </div>
        </main>
    );
}
