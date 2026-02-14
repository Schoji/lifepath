import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface HomeLinkProps {
    header: string;
    content: string;
    href: string;
    icon: LucideIcon;
    iconColor?: string;
    iconBackground?: string;
    ctaLabel?: string;
}

const HomeLink = ({
    header,
    content,
    href,
    icon: Icon,
    iconColor = "text-white",
    iconBackground = "bg-blue-700",
    ctaLabel = "Get Started",
}: HomeLinkProps) => {
    return (
        <Link
            className="w-full rounded-2xl border border-zinc-300 bg-white p-8 shadow-sm transition-all duration-200 ease-out hover:border-blue-600 hover:shadow-xl"
            href={href}
        >
            <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${iconBackground}`}>
                <Icon className={iconColor} size={24} />
            </div>
            <h1 className="mt-5 text-3xl sm:text-4xl font-semibold leading-tight text-zinc-900">{header}</h1>
            <p className="mt-3 text-xl sm:text-2xl leading-relaxed text-zinc-600">{content}</p>
            <p className="mt-6 text-xl sm:text-2xl font-semibold text-blue-700">{ctaLabel} →</p>
        </Link>
    );
};

export default HomeLink;
