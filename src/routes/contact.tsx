import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { CampaignForm, type FieldDef } from "@/components/CampaignForm";
import { Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Alex Rivera for Councillor" },
      { name: "description", content: "Get in touch with the Alex Rivera campaign." },
    ],
  }),
  component: Contact,
});

const fields: FieldDef[] = [
  { name: "name", label: "Your name", required: true, max: 120 },
  { name: "email", label: "Email", type: "email", required: true, max: 200 },
  { name: "subject", label: "Subject", required: true, max: 160 },
  { name: "message", label: "Message", type: "textarea", required: true, max: 2000 },
];

function Contact() {
  return (
    <PageLayout>
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Contact</span>
          <h1 className="mt-2 font-serif text-4xl md:text-5xl">We'd love to hear from you.</h1>
          <p className="mt-5 text-muted-foreground">
            Questions, ideas, or a community issue you want on our radar? Send us a note — we read every message.
          </p>
          <div className="mt-8 space-y-4 text-sm">
            <div className="flex items-start gap-3"><Mail className="mt-0.5 text-primary" size={18} /><span>hello@alexforward.ca</span></div>
            <div className="flex items-start gap-3"><Phone className="mt-0.5 text-primary" size={18} /><span>(555) 123-4567</span></div>
            <div className="flex items-start gap-3"><MapPin className="mt-0.5 text-primary" size={18} /><span>123 Main Street<br />Your City, ON</span></div>
          </div>
        </div>
        <CampaignForm
          fields={fields}
          submitLabel="Send message"
          successTitle="Message received"
          successBody="Thanks for writing — we'll respond within a couple of business days."
          storageKey="contact-messages"
        />
      </section>
    </PageLayout>
  );
}
