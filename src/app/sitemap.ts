import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "http://localhost:3000";
const locales = ["en", "de", "uk", "ru"] as const;
const localizedRoutes = ["", "/contact", "/questionaire", "/questionaire/start", "/yourpath"];

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();
    const localizedEntries: MetadataRoute.Sitemap = localizedRoutes.flatMap((route) =>
        locales.map((locale) => ({
            url: `${siteUrl}/${locale}${route}`,
            lastModified: now,
            changeFrequency: route === "" ? "weekly" : "monthly",
            priority: route === "" ? 0.9 : 0.7,
        })),
    );

    return [
        {
            url: siteUrl,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 1,
        },
        ...localizedEntries,
    ];
}
