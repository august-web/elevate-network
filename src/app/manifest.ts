import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "Elevate",
    description: site.tagline,
    start_url: "/",
    display: "standalone",
    background_color: "#faf8f2",
    theme_color: "#110c2a",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}