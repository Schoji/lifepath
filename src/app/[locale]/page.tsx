import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("home");
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100 text-black font-sans">
      <div className="grid justify-center gap-5">
        <h1 className="text-6xl font-bold text-center">LifePath</h1>
        <div className="flex gap-1 justify-center">
          <div className="h-1 rounded-xl bg-blue-600 w-32"></div>
          <div className="h-1 rounded-xl bg-yellow-600 w-32"></div>
        </div>
        <p>{t('header')}</p>
        <Link className="btn btn-primary" href={"/questionaire"}>Get Started</Link>
      </div>
    </div>
  );
}
