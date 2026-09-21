import type { Metadata } from "next";
import { ProgramaCarousel } from "@/components/ProgramaCarousel";
import { PROGRAMMES } from "@/lib/content";

/** Programmes section — the dark, slide-driven carousel. */
export const metadata: Metadata = {
  title: "Programmes",
  description:
    "Power of You Festival, AmplifyHer, Seed2030, Young Africa Innovates and Prodigy Clubs — five doors into one network.",
  alternates: { canonical: "/programmes" },
};

export default function ProgrammesPage() {
  return (
    <div className="page-top-dark">
      <ProgramaCarousel programmes={PROGRAMMES} />
    </div>
  );
}
