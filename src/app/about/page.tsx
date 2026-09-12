import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { Section } from "@/components/ui/Section";
import { getTeamMembers, type TeamMember } from "@/lib/supabase";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `The story behind ${site.name} — why we exist, what we believe, and who's making it happen.`,
  alternates: { canonical: "/about" },
};

const VALUES = [
  {
    title: "Show up, don't just talk",
    description:
      "We measure ourselves by what we build, not what we announce. Every event happens. Every workshop runs. No vaporware.",
  },
  {
    title: "Young people lead",
    description:
      "This isn't a youth wing of someone else's vision. We set the agenda, make the calls, and own the outcomes.",
  },
  {
    title: "Local solutions, local people",
    description:
      "We don't import playbooks. What works in Adenta might not work in Kumasi — and that's fine. We figure it out here.",
  },
  {
    title: "Radical transparency",
    description:
      "Every cedi we spend, every program we run — it's all public. No black boxes. Trust is built, not assumed.",
  },
];

// Revalidate every 5 minutes (ISR) so newly added team members appear
// without a full redeploy. Must stay a literal.
export const revalidate = 300;

/** Render a team member's photo or a fallback initials badge. */
function TeamAvatar({ member }: { member: TeamMember }) {
  if (member.photo_url) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={member.photo_url}
        alt={member.name}
        className="h-16 w-16 rounded-full object-cover"
        width={64}
        height={64}
      />
    );
  }

  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 font-display text-xl font-bold text-brand-600">
      {initials}
    </div>
  );
}

export default async function AboutPage() {
  const team = await getTeamMembers();

  return (
    <>
      {/* Hero — why we exist */}
      <Section className="bg-brand-950 text-white">
        <div className="max-w-3xl">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-volt-500">
            Our story
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl">
            We got tired of waiting.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-200">
            Elevate Network started because someone had to do it. Young people
            in Ghana have ideas, energy, and talent — but not always the
            mentorship, the space, or the confidence to act on it. So we built
            the thing we wished existed.
          </p>
        </div>
      </Section>

      {/* Founder story */}
      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-flame-500">
              Founded by
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
              Augustine Asare
            </h2>
            <p className="mt-1 text-sm text-brand-500">
              Adenta, Accra — since 2024
            </p>
          </div>
          <div className="space-y-4 text-brand-700 leading-relaxed">
            <p>
              &ldquo;I kept seeing the same thing: brilliant young people in my
              community who had no idea what was possible for them — not because
              they lacked talent, but because nobody showed them the path.&rdquo;
            </p>
            <p>
              &ldquo;So I started Elevate. Not as a charity that hands things
              out, but as a platform where young people build real skills, meet
              real mentors, and create real things. The first event was just 30
              people in a borrowed room. Now we&apos;ve reached thousands.&rdquo;
            </p>
            <p className="text-brand-950 font-medium">
              &ldquo;We&apos;re just getting started.&rdquo;
            </p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-brand-50">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
            What we believe
          </h2>
          <p className="mt-4 text-brand-700">
            Not slogans — actual principles we hold ourselves to.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {VALUES.map((value) => (
            <Card key={value.title}>
              <h3 className="font-display text-lg font-bold text-brand-950">
                {value.title}
              </h3>
              <p className="mt-2 text-sm text-brand-700 leading-relaxed">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section>
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
            The people doing the work
          </h2>
          <p className="mt-4 text-brand-700">
            Small team. Big commitment. No one&apos;s here for the title.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.length > 0 ? (
            team.map((member) => (
              <Card key={member.id}>
                <TeamAvatar member={member} />
                <h3 className="mt-4 font-display text-lg font-bold text-brand-950">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-flame-500">
                  {member.role}
                </p>
                <p className="mt-2 text-sm text-brand-700 leading-relaxed">
                  {member.bio}
                </p>
              </Card>
            ))
          ) : (
            <EmptyState
              title="Team members will appear here"
              description="Once the Supabase dataset is connected and team members are added, they'll show up on this page automatically."
              className="sm:col-span-2 lg:col-span-3"
            />
          )}
        </div>
      </Section>
    </>
  );
}
