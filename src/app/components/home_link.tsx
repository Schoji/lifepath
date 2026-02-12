import { Link, LucideIcon } from 'lucide-react';

interface HomeLinkProps {
    header: string;
    content: string;
    href: string;
    icon: LucideIcon;
    iconColor: string;
}

const HomeLink = ({ header, content, href, icon: Icon, iconColor }: HomeLinkProps) => {
    return (
        // <Link className="w-full bg-white rounded-xl border-2 border-gray-400 p-10 flex flex-col gap-2" href={href}>
        //     <div className="p-4 bg-blue-600 rounded-lg">
        //         <div className={iconColor}>
        //             <Icon />
        //         </div>
        //     </div>
        //     <h1 className="text-2xl font-bold">{header}</h1>
        //     <p className="text-gray-700">{content}</p>
        //     <p className="text-blue-800 font-bold">Get started →</p>
        // </Link>
        <Link href={href} className="btn btn-primary">
            {header}
        </Link>
    );
};

export default HomeLink;