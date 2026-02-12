import { useTranslations } from "next-intl";
import { Compass, } from "lucide-react";
import HomeLink from "../components/home_link";
import Link from "next/link";

export default function Home() {
  const t = useTranslations("home");
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100 text-black font-sans">
      <div className="flex flex-col justify-center gap-2 w-1/2">
        <h1 className="text-7xl font-bold text-center">LifePath</h1>
        <div className="flex gap-1 justify-center">
          <div className="h-1 rounded-xl bg-blue-600 w-32"></div>
          <div className="h-1 rounded-xl bg-yellow-600 w-32"></div>
        </div>
        <p className="text-3xl text-gray-700 text-center">{t('header')}</p>
        <p></p>
        <p className="text-center font-bold text-3xl">Choose your guide</p>
        <div className="flex justify-center gap-4">
          {/* <HomeLink header={"LifePath Quiz"} content={"A quick dqwdwqd"} href={"/questionaire"} icon={Compass} iconColor={"text-gray-500"} />
          <HomeLink header={"LifePath Quiz"} content={"A quick dqwdwqd"} href={"/questionaire"} icon={Compass} iconColor={"text-gray-500"} /> */}
          <Link className="btn btn-primary" href={"/questionaire"}>Questionaire</Link>
          <Link className="btn btn-primary" href={"/yourpath"}>Your path</Link>
        </div>

      </div>
    </div>
  );
}
