import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { CampaignForm, type FieldDef } from "@/components/CampaignForm";

export const Route = createFileRoute("/lawn-sign")({
  head: () => ({
    meta: [
      { title: "Request a Lawn Sign — Alex Rivera for Councillor" },
      { name: "description", content: "Show your support by hosting a lawn sign. Request one and we'll deliver and install it for free." },
    ],
  }),
  component: LawnSign,
});

const fields: FieldDef[] = [
  { name: "fullName", label: "Full name", required: true, max: 120 },
  { name: "email", label: "Email", type: "email", required: true, max: 200 },
  { name: "phone", label: "Phone", type: "tel", required: true, max: 25 },
  { name: "address", label: "Street address", required: true, max: 200 },
  { name: "city", label: "City", required: true, max: 60 },
  { name: "postalCode", label: "Postal code", required: true, max: 10 },
  {
    name: "signSize", label: "Sign size", type: "radio", required: true,
    options: ["Standard lawn sign", "Large lawn sign (corner / high-traffic lot)"],
  },
  {
    name: "installation", label: "Installation help?", type: "radio", required: true,
    options: ["Yes, please install it for me", "No, I'll install it myself"],
  },
  { name: "notes", label: "Delivery notes (gate code, best time, etc.)", type: "textarea", max: 600 },
];

function LawnSign() {
  return (
    <PageLayout>
      <section className="mx-auto max-w-3xl px-6 py-20">
        <span className="text-xs font-semibold uppercase tracking-widest text-accent">Lawn Signs</span>
        <h1 className="mt-2 font-serif text-4xl md:text-5xl">Put your support on display.</h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Lawn signs work — they tell neighbours that someone they trust is voting for Alex. Request one below and a volunteer will drop it off (and install it for you, if you'd like).
        </p>
        <div className="mt-10">
          <CampaignForm
            fields={fields}
            submitLabel="Request my lawn sign"
            successTitle="Sign on the way!"
            successBody="Thanks! A volunteer will reach out to confirm a delivery window in the next few days."
            storageKey="lawn-sign-requests"
          />
        </div>
      </section>
    </PageLayout>
  );
}
