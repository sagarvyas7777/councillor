import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { CampaignForm, type FieldDef } from "@/components/CampaignForm";
import { Users, Phone, Calendar, Megaphone } from "lucide-react";

export const Route = createFileRoute("/volunteer")({
  head: () => ({
    meta: [
      { title: "Volunteer — Alex Rivera for Councillor" },
      { name: "description", content: "Sign up to volunteer with the Alex Rivera campaign — door-knocking, phone banking, events, and more." },
    ],
  }),
  component: Volunteer,
});

const fields: FieldDef[] = [
  { name: "firstName", label: "First name", required: true, max: 60 },
  { name: "lastName", label: "Last name", required: true, max: 60 },
  { name: "email", label: "Email", type: "email", required: true, max: 200 },
  { name: "phone", label: "Phone (optional)", type: "tel", max: 25 },
  { name: "postalCode", label: "Postal code", required: true, max: 10 },
  {
    name: "interests", label: "How would you like to help?", type: "checkboxes", required: true,
    options: ["Door-knocking", "Phone banking", "Event support", "Social media", "Translating", "Driving voters on election day"],
  },
  {
    name: "availability", label: "When are you usually free?", type: "checkboxes",
    options: ["Weekday mornings", "Weekday evenings", "Weekends"],
  },
  { name: "notes", label: "Anything else we should know?", type: "textarea", max: 1000 },
];

const perks = [
  { icon: Users, title: "A real team", body: "Join a crew of neighbours who actually like each other." },
  { icon: Phone, title: "Training included", body: "First time? We'll teach you everything you need." },
  { icon: Calendar, title: "Flexible hours", body: "Give an hour or every weekend. Both matter." },
  { icon: Megaphone, title: "Make it count", body: "Local elections turn on conversations. Yours included." },
];

function Volunteer() {
  return (
    <PageLayout>
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Volunteer</span>
          <h1 className="mt-2 font-serif text-4xl md:text-5xl">Help us win this thing.</h1>
          <p className="mt-5 text-lg text-muted-foreground">
            This campaign is powered by neighbours. Tell us a bit about you and how you'd like to pitch in — we'll be in touch within a couple of days.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {perks.map((p) => (
              <div key={p.title} className="rounded-xl border border-border bg-card p-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <p.icon size={18} />
                </div>
                <div className="mt-3 font-serif text-lg">{p.title}</div>
                <p className="mt-1 text-sm text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
        <CampaignForm
          fields={fields}
          submitLabel="Sign me up"
          successTitle="Thanks for stepping up!"
          successBody="We've received your info and a campaign organizer will be in touch within 48 hours."
          storageKey="volunteer-signups"
        />
      </section>
    </PageLayout>
  );
}
