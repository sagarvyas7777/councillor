import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";

export const Route = createFileRoute("/platform")({
  head: () => ({
    meta: [
      { title: "Platform — Alex Rivera for Councillor" },
      { name: "description", content: "Our priorities for the ward: housing, safety, green space, and reliable transit." },
    ],
  }),
  component: Platform,
});

const planks = [
  {
    title: "Attainable Housing",
    items: [
      "Cut red tape for missing-middle housing in transit corridors.",
      "Protect long-term tenants from displacement during redevelopment.",
      "Partner with non-profits to bring 500 new affordable units online this term.",
    ],
  },
  {
    title: "Safer Streets",
    items: [
      "Calmer traffic on residential streets through proven design changes.",
      "Better lighting on every walking route to a school or transit stop.",
      "Funding for crisis response teams so police can focus on real emergencies.",
    ],
  },
  {
    title: "Parks & Green Space",
    items: [
      "Protect the mature tree canopy through a stronger by-law.",
      "Renew three neighbourhood playgrounds in our first two years.",
      "Connect the river trail through the south end of the ward.",
    ],
  },
  {
    title: "Reliable Transit & Active Travel",
    items: [
      "Push for 10-minute weekend service on key bus routes.",
      "Build the bike network we were promised — actually protected, actually connected.",
      "Fix the sidewalks. All of them. Especially yours.",
    ],
  },
];

function Platform() {
  return (
    <PageLayout>
      <section className="mx-auto max-w-4xl px-6 py-20">
        <span className="text-xs font-semibold uppercase tracking-widest text-accent">The Platform</span>
        <h1 className="mt-2 font-serif text-4xl md:text-5xl">What we'll work on, together.</h1>
        <p className="mt-5 text-lg text-muted-foreground">
          A platform is a promise. Here are mine — specific enough to be measured, ambitious enough to matter.
        </p>
        <div className="mt-12 space-y-10">
          {planks.map((p, i) => (
            <div key={p.title} className="rounded-2xl border border-border bg-card p-8">
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-3xl text-gold">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="font-serif text-2xl text-foreground">{p.title}</h2>
              </div>
              <ul className="mt-5 space-y-3">
                {p.items.map((item) => (
                  <li key={item} className="flex gap-3 text-foreground/85">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
