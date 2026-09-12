import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

// Image metadata
export const alt =
  "Elevate Network — youth-led nonprofit empowering young Ghanaians through mentorship, STEM education and bold youth events.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Brand tokens (kept in sync with src/app/globals.css)
const BRAND_950 = "#110c2a";
const VOLT_500 = "#ffd60a";
const FLAME_500 = "#ff7a00";
const CREAM = "#faf8f2";

/**
 * Social share card: deep navy base, kente-inspired volt/flame bars, the
 * wordmark and tagline. `next/og` bundles a fallback font, so this renders
 * entirely at build time with no network calls.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: BRAND_950,
          padding: "72px 80px",
        }}
      >
        {/* Header — wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              width: 64,
              height: 64,
              borderRadius: 16,
              backgroundColor: "#ffffff",
              color: BRAND_950,
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              fontWeight: 700,
            }}
          >
            E
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 34,
              fontWeight: 700,
              color: CREAM,
            }}
          >
            Elevate
            <span style={{ color: FLAME_500, margin: "0 2px" }}>.</span>
            Network
          </div>
          <div
            style={{
              display: "flex",
              marginLeft: 16,
              padding: "8px 20px",
              borderRadius: 999,
              backgroundColor: "rgba(255,214,10,0.15)",
              color: VOLT_500,
              fontSize: 22,
              fontWeight: 600,
            }}
          >
            Adenta · Accra · Ghana
          </div>
        </div>

        {/* Body — mission line */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 64, fontWeight: 700, color: CREAM, lineHeight: 1.1, maxWidth: 880 }}>
            We don&apos;t wait for permission. We build the thing we wish
            existed.
          </div>
          <div style={{ display: "flex", fontSize: 28, color: "#cbc5ee", maxWidth: 820 }}>
            {site.tagline}
          </div>
        </div>

        {/* Footer — kente bars + URL */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", gap: 10 }}>
            <div style={{ width: 64, height: 14, borderRadius: 7, backgroundColor: VOLT_500 }} />
            <div style={{ width: 36, height: 14, borderRadius: 7, backgroundColor: FLAME_500 }} />
            <div style={{ width: 96, height: 14, borderRadius: 7, backgroundColor: VOLT_500, opacity: 0.6 }} />
          </div>
          <div style={{ display: "flex", fontSize: 24, color: "#8373cd", fontWeight: 500 }}>
            elevatenetworkhq.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}