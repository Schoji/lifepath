import { useTranslations } from "next-intl";
import { ArrowRight, BriefcaseBusiness, Compass, GraduationCap, Languages } from "lucide-react";
import HomeLink from "../components/home_link";
import Link from "next/link";

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
          <h2 className="text-center text-4xl font-bold sm:text-5xl">Choose Your Guide</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <HomeLink
              header={"LifePath Quiz"}
              content={"A quick decision tree to help you figure out your next steps after finishing school."}
              href={"/questionaire"}
              icon={Compass}
              iconColor={"text-white"}
              iconBackground={"bg-blue-700"}
            />
            <HomeLink
              header={"Pathways Guide"}
              content={"Comprehensive guide with detailed information about earning money, education, and learning German."}
              href={"/yourpath"}
              icon={ArrowRight}
              iconColor={"text-white"}
              iconBackground={"bg-yellow-500"}
            />
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-center text-4xl font-bold sm:text-5xl">Quick Start</h2>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <Link href="/yourpath" className="rounded-2xl border border-zinc-300 bg-white p-6 shadow-sm transition-all duration-200 ease-out hover:border-blue-600 hover:shadow-xl">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-100">
                  <BriefcaseBusiness size={22} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold">Earn Money</h3>
                  <p className="mt-1 text-2xl text-zinc-600">Find work opportunities</p>
                </div>
              </div>
            </Link>
            <Link href="/yourpath" className="rounded-2xl border border-zinc-300 bg-white p-6 shadow-sm transition-all duration-200 ease-out hover:border-blue-600 hover:shadow-xl">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-100">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold">Education</h3>
                  <p className="mt-1 text-2xl text-zinc-600">Get or upgrade certificates</p>
                </div>
              </div>
            </Link>
            <Link href="/yourpath" className="rounded-2xl border border-zinc-300 bg-white p-6 shadow-sm transition-all duration-200 ease-out hover:border-blue-600 hover:shadow-xl">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-100">
                  <Languages size={22} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold">Learn German</h3>
                  <p className="mt-1 text-2xl text-zinc-600">Language courses & resources</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
