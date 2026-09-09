import { Section } from "@/components/ui/Section";

/**
 * Sanity Studio setup guide.
 * To enable the Studio, you need to:
 * 1. Create a Sanity project at sanity.io
 * 2. Set NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET in .env.local
 * 3. Install: npm install sanity @sanity/ui @sanity/color
 * 4. Uncomment the Studio code below and remove this placeholder
 *
 * For now, this page shows setup instructions.
 */
export default function StudioPage() {
  return (
    <Section className="min-h-screen py-24">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
          Sanity Studio Setup
        </h1>
        <p className="mt-4 text-brand-700 leading-relaxed">
          The Sanity Studio will be embedded here once configured. Follow these
          steps to set it up:
        </p>

        <div className="mt-8 space-y-6">
          <div className="rounded-3xl border border-brand-100 bg-white p-6">
            <h2 className="font-display text-lg font-bold text-brand-950">
              1. Create a Sanity project
            </h2>
            <p className="mt-2 text-sm text-brand-700">
              Go to{" "}
              <a
                href="https://sanity.io/manage"
                target="_blank"
                rel="noopener noreferrer"
                className="text-flame-500 underline"
              >
                sanity.io/manage
              </a>{" "}
              and create a new project. Note your project ID.
            </p>
          </div>

          <div className="rounded-3xl border border-brand-100 bg-white p-6">
            <h2 className="font-display text-lg font-bold text-brand-950">
              2. Set environment variables
            </h2>
            <p className="mt-2 text-sm text-brand-700">
              Add to your <code className="rounded bg-brand-100 px-1">.env.local</code>:
            </p>
            <pre className="mt-2 overflow-x-auto rounded-xl bg-brand-950 p-4 text-sm text-brand-200">
{`NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production`}
            </pre>
          </div>

          <div className="rounded-3xl border border-brand-100 bg-white p-6">
            <h2 className="font-display text-lg font-bold text-brand-950">
              3. Install Studio dependencies
            </h2>
            <pre className="mt-2 overflow-x-auto rounded-xl bg-brand-950 p-4 text-sm text-brand-200">
              npm install sanity @sanity/ui @sanity/color
            </pre>
          </div>

          <div className="rounded-3xl border border-brand-100 bg-white p-6">
            <h2 className="font-display text-lg font-bold text-brand-950">
              4. Activate the Studio
            </h2>
            <p className="mt-2 text-sm text-brand-700">
              Once dependencies are installed, the Studio code in{" "}
              <code className="rounded bg-brand-100 px-1">
                src/app/studio/page.tsx
              </code>{" "}
              can be uncommented. The schemas are already defined in{" "}
              <code className="rounded bg-brand-100 px-1">sanity/schemas/</code>.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-volt-500/30 bg-volt-500/10 p-6">
          <h3 className="font-display text-lg font-bold text-brand-950">
            📋 Available schemas
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-brand-700">
            <li>
              <strong>post</strong> — Blog posts with categories, excerpts, and
              rich content
            </li>
            <li>
              <strong>event</strong> — Events with dates, locations, registration
              links, and photo galleries
            </li>
            <li>
              <strong>program</strong> — Programs with descriptions, impact
              stats, and status
            </li>
            <li>
              <strong>teamMember</strong> — Team profiles with photos and social
              links
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
