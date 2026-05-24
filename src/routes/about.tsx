import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import candidate from "@/assets/candidate.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Alex Rivera — Councillor Candidate" },
      { name: "description", content: "Learn about Alex Rivera, a long-time community organizer running for City Councillor." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <PageLayout>
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1fr_1.4fr]">
        <div>
          <img src={candidate} alt="Alex Rivera" width={1024} height={1280} loading="lazy" className="aspect-[4/5] w-full rounded-2xl object-cover shadow-lg" />
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">About Alex</span>
          <h1 className="mt-2 font-serif text-4xl md:text-5xl">A neighbour first. A councillor next.</h1>
          <div className="mt-6 space-y-5 text-foreground/85">
            <p>Alex Rivera has lived in our ward for over fifteen years — raising a family, running a small business on the avenue, and showing up at countless community meetings long before there was a campaign sign in the front yard.</p>
            <p>That work has spanned tenant advocacy, mentoring local youth, organizing the annual block clean-up, and serving on the neighbourhood association board for three terms. Through it all, one belief has held steady: city government works best when it's close to the people it serves.</p>
            <p>Now Alex is asking for the chance to bring that perspective to City Hall — to be the councillor who reads every email, walks every block, and remembers that behind every line item in the budget is a family, a small business, or a kid who deserves a safer route to school.</p>
            <p className="font-serif text-xl italic text-primary">"You don't have to choose between a city that grows and a city that cares. We can have both — but only if we build it together."</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
