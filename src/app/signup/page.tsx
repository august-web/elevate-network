import type { Metadata } from "next";
import { SignupModal } from "@/components/SignupModal";

/** Sign-up section — launcher tiles plus the ticket-styled modal. */
export const metadata: Metadata = {
  title: "Sign Up",
  description:
    "Students can register interest in a Prodigy Club or the next festival cohort; partners can tell us how they'd like to support the work.",
  alternates: { canonical: "/signup" },
};

export default function SignupPage() {
  return <SignupModal />;
}
