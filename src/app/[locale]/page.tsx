import { useTranslations } from "next-intl";
import { ArrowRight, Compass } from "lucide-react";
import HomeLink from "../components/home_link";

export default function Home() {
  const t = useTranslations("home");
  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900 font-sans">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">LifePath</h1>
          <div className="mt-5 flex gap-2 justify-center">
            <div className="h-1 w-24 rounded-xl bg-blue-700"></div>
            <div className="h-1 w-24 rounded-xl bg-yellow-500"></div>
          </div>
          <p className="mt-8 max-w-4xl text-3xl leading-relaxed text-zinc-600 sm:text-4xl">
            {t("header")}
          </p>
        </div>

        <div className="mt-20">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">{t("choose_your_guide")}</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <HomeLink
              header={t("quiz_title")}
              content={t("quiz_content")}
              href={"/questionaire"}
              icon={Compass}
              iconColor={"text-white"}
              iconBackground={"bg-blue-700"}
              ctaLabel={t("get_started")}
            />
            <HomeLink
              header={t("pathways_title")}
              content={t("pathways_content")}
              href={"/yourpath"}
              icon={ArrowRight}
              iconColor={"text-white"}
              iconBackground={"bg-yellow-500"}
              ctaLabel={t("get_started")}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
