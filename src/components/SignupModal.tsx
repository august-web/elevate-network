"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const STUDENT_INTERESTS = [
  "Leadership",
  "Technology",
  "Entrepreneurship",
  "Music",
  "Dance",
  "Film/ Content Creation",
  "Art & Design",
  "Photography",
];

const PARTNER_SUPPORT = [
  "Financial sponsorship",
  "In-kind donation",
  "Mentorship / volunteering",
  "Venue / facility",
  "Speaking / facilitation",
  "Media & amplification",
];

type Ticket = "student" | "partner";

/** Composes a mailto: link from the submitted form fields. */
function openMailto(ticket: Ticket, form: HTMLFormElement) {
  const data = new FormData(form);
  const lines: string[] = [];
  const seen = new Set<string>();

  for (const [key, value] of data.entries()) {
    const text = String(value).trim();
    if (!text) continue;
    if (seen.has(key)) {
      const index = lines.findIndex((line) => line.startsWith(`${key}:`));
      if (index >= 0) lines[index] = `${lines[index]}, ${text}`;
      continue;
    }
    seen.add(key);
    lines.push(`${key}: ${text}`);
  }

  const subject =
    ticket === "student"
      ? "Elevate Network — Student interest"
      : "Elevate Network — Partner interest";

  window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(lines.join("\n"))}`;
}

/** Sign-up launcher tiles plus the ticket-styled modal with both forms. */
export function SignupModal() {
  const [open, setOpen] = useState<Ticket | null>(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <section className="block signup page-top" id="signup">
        <div className="wrap">
          <div className="signup-head">
            <p className="tag">Elevate Network Community</p>
            <h2>Join in, or back the young people who do.</h2>
            <p>
              Students can register interest in a Prodigy Club or the next
              festival cohort. Partners and sponsors can tell us how they&apos;d
              like to support the work — funding, mentors, a venue, or a
              platform.
            </p>
          </div>

          <div className="signup-launchers">
            <button
              className="signup-launch"
              type="button"
              aria-haspopup="dialog"
              onClick={() => {
                setStatus("");
                setOpen("student");
              }}
            >
              <span className="signup-launch-label">I&apos;m a student</span>
              <span className="signup-launch-sub">
                Register interest in a Prodigy Club or the next festival
                cohort.
              </span>
              <span className="signup-launch-cta" aria-hidden="true">
                Open your sign-up card
              </span>
            </button>
            <button
              className="signup-launch is-partner"
              type="button"
              aria-haspopup="dialog"
              onClick={() => {
                setStatus("");
                setOpen("partner");
              }}
            >
              <span className="signup-launch-label">I&apos;m a partner</span>
              <span className="signup-launch-sub">
                Tell us how you&apos;d like to support the work — funding,
                mentors, a venue, or a platform.
              </span>
              <span className="signup-launch-cta" aria-hidden="true">
                Open your sign-up card
              </span>
            </button>
          </div>
        </div>
      </section>

      <div
        className={`signup-modal-overlay${open ? " open" : ""}`}
        aria-hidden={open ? "false" : "true"}
        onClick={(event) => {
          if (event.target === event.currentTarget) setOpen(null);
        }}
      >
        <div
          className="signup-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Sign-up card"
        >
          <button
            className="signup-modal-close"
            type="button"
            aria-label="Close sign-up card"
            onClick={() => setOpen(null)}
          >
            ×
          </button>

          {/* Student ticket */}
          <div className="signup-ticket" hidden={open !== "student"}>
            <div className="signup-stub">
              <p className="tag">Elevate Network Community</p>
              <h3>Student Sign-Up Card</h3>
            </div>
            <div className="signup-perf" />
            <div className="signup-body">
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  openMailto("student", event.currentTarget);
                  setStatus(
                    "Opening your email app — send the message and you're registered.",
                  );
                }}
              >
                <div className="signup-grid">
                  <div className="field full">
                    <label htmlFor="s-name">Full name</label>
                    <input id="s-name" name="Full name" type="text" required />
                  </div>
                  <div className="field">
                    <label htmlFor="s-school">School</label>
                    <input id="s-school" name="School" type="text" required />
                  </div>
                  <div className="field">
                    <label htmlFor="s-class">Class / year group</label>
                    <input id="s-class" name="Class / year group" type="text" />
                  </div>
                  <div className="field full">
                    <label htmlFor="s-phone">Student phone (optional)</label>
                    <input id="s-phone" name="Student phone" type="tel" />
                  </div>
                </div>

                <fieldset className="check-fieldset">
                  <legend>Areas of interest (tick all that apply)</legend>
                  <div className="check-grid">
                    {STUDENT_INTERESTS.map((interest) => (
                      <label className="check-item" key={interest}>
                        <input
                          type="checkbox"
                          name="Areas of interest"
                          value={interest}
                        />{" "}
                        {interest}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div className="signup-notice">
                  <strong>Important notice</strong>
                  Membership in the Elevate Network Community requires
                  completion of a Parent/Guardian Consent Form. A consent form
                  will be provided to students who sign up. This card registers
                  interest only — participation begins after consent is
                  received.
                </div>

                <button className="pill pill-dark signup-submit" type="submit">
                  Register interest
                </button>
                <p className="signup-note">
                  This opens an email to {site.email} with your details filled
                  in, ready to send.
                </p>
                <p className={`signup-status${status ? " visible" : ""}`} aria-live="polite">
                  {status}
                </p>
              </form>
            </div>
          </div>

          {/* Partner ticket */}
          <div className="signup-ticket" hidden={open !== "partner"}>
            <div className="signup-stub is-partner">
              <p className="tag">Elevate Network Community</p>
              <h3>Partner Sign-Up Card</h3>
            </div>
            <div className="signup-perf" />
            <div className="signup-body">
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  openMailto("partner", event.currentTarget);
                  setStatus(
                    "Opening your email app — send the message and we'll be in touch.",
                  );
                }}
              >
                <div className="signup-grid">
                  <div className="field full">
                    <label htmlFor="p-org">Organisation / individual name</label>
                    <input
                      id="p-org"
                      name="Organisation / individual name"
                      type="text"
                      required
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="p-contact">Contact person</label>
                    <input
                      id="p-contact"
                      name="Contact person"
                      type="text"
                      required
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="p-phone">Phone</label>
                    <input id="p-phone" name="Phone" type="tel" />
                  </div>
                  <div className="field full">
                    <label htmlFor="p-email">Email</label>
                    <input id="p-email" name="Email" type="email" required />
                  </div>
                </div>

                <fieldset className="check-fieldset">
                  <legend>Ways you&apos;d like to support (tick all that apply)</legend>
                  <div className="check-grid">
                    {PARTNER_SUPPORT.map((way) => (
                      <label className="check-item" key={way}>
                        <input type="checkbox" name="Ways to support" value={way} />{" "}
                        {way}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div className="field full" style={{ marginBottom: 28 }}>
                  <label htmlFor="p-message">Tell us more (optional)</label>
                  <textarea id="p-message" name="Message" />
                </div>

                <button className="pill pill-dark signup-submit" type="submit">
                  Register interest
                </button>
                <p className="signup-note">
                  This opens an email to {site.email} with your details filled
                  in, ready to send.
                </p>
                <p className={`signup-status${status ? " visible" : ""}`} aria-live="polite">
                  {status}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
