import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "LifePath",
        short_name: "LifePath",
        description: "Find your path in your new life: education, career and integration guidance step by step.",
        start_url: "/",
        display: "standalone",
        background_color: "#f4f4f5",
        theme_color: "#f4f4f5",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
        ],
    };
}
