import Link from "next/link";
import { useTranslations } from "next-intl";

export default function QuestionaireIntro() {
    const t = useTranslations("questionaire");

    return (
        <main className="flex min-h-[calc(100vh-65px)] w-full items-center justify-center bg-zinc-100 px-4 py-8 text-zinc-900 sm:py-10">
            <div className="w-full max-w-4xl text-center">

                <h1 className="mt-4 text-4xl font-bold tracking-tight sm:mt-6 sm:text-6xl md:text-7xl">{t("intro.title")}</h1>

                <div className="mt-6 flex items-center justify-center gap-3">
                    <span className="h-2 w-20 rounded-full bg-blue-700 sm:w-32" />
                    <span className="h-2 w-20 rounded-full bg-yellow-500 sm:w-32" />
                </div>

                <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-zinc-600 sm:mt-8 sm:text-2xl md:text-3xl">
                    {t("intro.description")}
                </p>

                <Link
                    href="/questionaire/start"
                    className="btn mt-8 h-14 rounded-2xl bg-blue-700 px-8 text-xl font-semibold text-white hover:bg-blue-800 sm:mt-12 sm:h-16 sm:px-14 sm:text-3xl"
                >
                    {t("intro.cta")}
                </Link>
            </div>
        </main>
    );
}
