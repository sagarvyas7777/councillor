import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import candidate from "@/assets/candidate.jpg";
import neighborhood from "@/assets/neighborhood.jpg";
import { Home, Bus, Trees, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Rivera for Councillor — Forward, Together" },
      { name: "description", content: "Alex Rivera is running for City Councillor with a community-first platform focused on housing, safe streets, and vibrant neighbourhoods." },
      { property: "og:title", content: "Alex Rivera for Councillor" },
      { property: "og:description", content: "A community-first campaign for City Council." },
    ],
  }),
  component: Index,
});

const priorities = [
  { icon: Home, title: "Attainable Housing", body: "Practical zoning reform and partnerships that get more homes built — and keep families in the neighbourhoods they love." },
  { icon: ShieldCheck, title: "Safer Streets", body: "Better lighting, calmer traffic, and well-resourced first responders so every block feels safe to call home." },
  { icon: Trees, title: "Parks & Green Space", body: "Protect mature trees, invest in playgrounds, and expand the trail network our families use every weekend." },
  { icon: Bus, title: "Reliable Transit", body: "On-time buses, real bike lanes, and infrastructure that actually keeps up with how our city is growing." },
];

function Index() {
  return (
    <PageLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span className="inline-block rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
              Municipal Election · 2026
            </span>
            <h1 className="mt-5 font-serif text-5xl leading-[1.05] text-foreground md:text-6xl lg:text-7xl">
              Forward,<br /><em className="text-primary not-italic">together.</em>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              I'm Alex Rivera, and I'm running for City Councillor because the future of our ward should be written by the people who live here. Let's build it together.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/volunteer" className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90">
                Volunteer with us
              </Link>
              <Link to="/lawn-sign" className="rounded-full border border-primary/30 px-6 py-3 text-sm font-medium text-primary transition hover:bg-primary/5">
                Request a lawn sign
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gold/20 blur-2xl" />
            <img
              src={candidate}
              alt="Alex Rivera, candidate for City Councillor"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* MESSAGE */}
      <section className="border-y border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="font-serif text-3xl text-foreground md:text-4xl">A community-first campaign.</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            For too long, decisions about our neighbourhoods have been made without us at the table. I've spent the last decade organizing tenants, supporting small business owners, and showing up at every community meeting that mattered. As your councillor, I'll bring that same persistence to City Hall — listening first, acting with care, and reporting back honestly.
          </p>
          <Link to="/about" className="mt-8 inline-block text-sm font-semibold uppercase tracking-widest text-primary underline-offset-4 hover:underline">
            Read Alex's story →
          </Link>
        </div>
      </section>

      {/* PRIORITIES */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Our priorities</span>
          <h2 className="mt-2 font-serif text-3xl text-foreground md:text-4xl">Four commitments for our ward.</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {priorities.map((p) => (
            <div key={p.title} className="rounded-2xl border border-border bg-card p-6 transition hover:border-primary/40 hover:shadow-md">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <p.icon size={22} />
              </div>
              <h3 className="mt-5 font-serif text-xl text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link to="/platform" className="text-sm font-semibold uppercase tracking-widest text-primary">
            See the full platform →
          </Link>
        </div>
      </section>

      {/* GET INVOLVED */}
      <section className="relative overflow-hidden">
        <img src={neighborhood} alt="" width={1600} height={900} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary/70" />
        <div className="relative mx-auto max-w-5xl px-6 py-20 text-center text-primary-foreground">
          <h2 className="font-serif text-3xl md:text-5xl">Every door, every conversation, every sign matters.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-primary-foreground/85">
            This campaign runs on the energy of neighbours. Whether you have an hour or every weekend, we'd love to have you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/volunteer" className="rounded-full bg-cream px-6 py-3 text-sm font-medium text-primary transition hover:bg-cream/90">
              Become a volunteer
            </Link>
            <Link to="/lawn-sign" className="rounded-full border border-cream/50 px-6 py-3 text-sm font-medium text-cream transition hover:bg-cream/10">
              Host a lawn sign
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
