import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="font-stamp text-xs uppercase tracking-widest text-oxblood">
          Seite nicht gefunden
        </p>
        <h1 className="mt-4 font-display text-8xl text-ink">404</h1>
        <h2 className="mt-2 font-display text-2xl uppercase text-ink">Diese Seite ist leer.</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Die Seite existiert nicht — oder wurde abgesagt.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="poster-red inline-flex items-center justify-center px-6 py-3 font-display text-lg uppercase"
          >
            Zurück zum Palast
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Musik Palast — Musik & Tanzbar in Inwil" },
      {
        name: "description",
        content:
          "Der Musik Palast in Inwil (LU): Musik, Tanzfläche und gemütliche Bar. Geöffnet am Mittwoch, Donnerstag, Freitag, Samstag und Sonntag.",
      },
      { name: "author", content: "Musik Palast Inwil" },
      { property: "og:title", content: "Musik Palast — Musik & Tanzbar in Inwil" },
      {
        property: "og:description",
        content: "Musik, Tanzfläche und gemütliche Bar in Inwil (LU).",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Musik Palast" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Special+Elite&family=Work+Sans:wght@300;400;500;600&display=swap",
      },
      { rel: "icon", href: "/favicon.svg?v=mp1", type: "image/svg+xml" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteChrome>
        <Outlet />
      </SiteChrome>
    </QueryClientProvider>
  );
}

function SiteChrome({ children }: { children: ReactNode }) {
  const nav = [
    { to: "/", label: "Palast" },
    { to: "/bar", label: "Bar" },
    { to: "/kontakt", label: "Besuch" },
  ] as const;
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b-2 border-ink bg-bone/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <Link to="/" className="group flex items-baseline gap-2">
            <span className="font-display text-3xl leading-none text-ink sm:text-4xl">
              MUSIK PALAST
            </span>
            <span className="hidden font-stamp text-[10px] uppercase tracking-widest text-oxblood sm:inline">
              est. Inwil · LU
            </span>
          </Link>
          <nav className="flex items-center gap-1 sm:gap-2">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="rounded-none px-2 py-1 font-display text-lg uppercase text-ink hover:text-oxblood sm:px-3 sm:text-xl"
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{
                  className: "text-oxblood underline underline-offset-4 decoration-2",
                }}
              >
                {n.label}
              </Link>
            ))}
            <a
              href="tel:+41414484045"
              className="poster-red ml-2 hidden items-center gap-2 px-3 py-2 font-display text-sm uppercase sm:inline-flex"
            >
              041 448 40 45
            </a>
          </nav>
        </div>
        {/* Marquee ribbon */}
        <div className="overflow-hidden border-t border-ink/20 bg-ink text-bone">
          <div className="marquee-track flex whitespace-nowrap py-1.5 font-stamp text-xs uppercase tracking-widest">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex shrink-0 items-center gap-8 pr-8">
                <span>Mi &amp; So ab 13:30</span>
                <span>Mi bis Sa abends ab 19:30</span>
                <span>Seit Jahren in Inwil</span>
                <span>Hauptstrasse 22 · 6034 Inwil</span>
                <span>★ Reservation: 041 448 40 45</span>
                <span>Musik und Bar in Inwil</span>
                <span>Mi bis Sa offen bis 00:30</span>
              </div>
            ))}
          </div>
        </div>
      </header>
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-24 border-t-4 border-double border-ink bg-ink text-bone">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <p className="font-stamp text-xs uppercase tracking-widest text-amber-neon">Der</p>
            <p className="font-display text-6xl leading-none">MUSIK</p>
            <p className="neon-flicker font-display text-6xl leading-none">PALAST</p>
            <p className="mt-4 max-w-xs text-sm text-bone/70">
              Musik, Tanzfläche und eine ehrliche Bar mitten in Inwil.
            </p>
          </div>
          <div className="font-stamp text-sm leading-loose">
            <p className="mb-2 font-display text-xl uppercase text-amber-neon">Besuch</p>
            Hauptstrasse 22
            <br />
            6034 Inwil · Luzern
            <br />
            <a
              href="tel:+41414484045"
              className="underline decoration-amber-neon underline-offset-4"
            >
              041 448 40 45
            </a>
            <br />
            <a
              href="https://musik-palast.ch"
              className="underline decoration-amber-neon underline-offset-4"
            >
              musik-palast.ch
            </a>
          </div>
          <div className="font-stamp text-sm leading-loose">
            <p className="mb-2 font-display text-xl uppercase text-amber-neon">Öffnungszeiten</p>
            Mi · 13:30 – 17:00 / 19:30 – 00:30
            <br />
            Do – Sa · 19:30 – 00:30
            <br />
            So · 13:30 – 17:00
          </div>
          <div className="font-stamp text-sm leading-loose">
            <p className="mb-2 font-display text-xl uppercase text-amber-neon">Rechtliches</p>
            <Link to="/impressum" className="underline decoration-amber-neon underline-offset-4">
              Impressum
            </Link>
            <br />
            <Link to="/datenschutz" className="underline decoration-amber-neon underline-offset-4">
              Datenschutz
            </Link>
            <br />
            <a
              href="mailto:info@musik-palast.ch"
              className="underline decoration-amber-neon underline-offset-4"
            >
              info@musik-palast.ch
            </a>
          </div>
        </div>
        <p className="mt-12 font-display text-[18vw] leading-[0.85] tracking-tighter text-oxblood/40 md:text-[14vw]">
          MUSIKPALAST
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-bone/20 pt-4 font-stamp text-[10px] uppercase tracking-widest text-bone/60">
          <span>© Musik Palast Inwil</span>
          <span>Musik und Bar in Inwil</span>
          <span>Mi bis Sa · offen bis 00:30</span>
        </div>
      </div>
    </footer>
  );
}
