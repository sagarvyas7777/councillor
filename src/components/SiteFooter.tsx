import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/50">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <div className="font-serif text-xl text-primary">Alex Rivera for Councillor</div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            A community-first campaign focused on housing, safe streets, and neighbourhoods we are proud to call home.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-wider text-foreground/70">Get involved</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/volunteer" className="hover:text-primary">Volunteer</Link></li>
            <li><Link to="/lawn-sign" className="hover:text-primary">Request a lawn sign</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact the campaign</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-wider text-foreground/70">Campaign office</div>
          <p className="mt-3 text-sm text-muted-foreground">
            123 Main Street<br />Your City, ON<br />hello@alexforward.ca
          </p>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        Authorized by the Official Agent for Alex Rivera Campaign · © {new Date().getFullYear()}
      </div>
    </footer>
  );
}
