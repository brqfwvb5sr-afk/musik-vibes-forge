import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/impressum")({
  component: ImpressumPage,
  head: () => ({
    meta: [
      { title: "Impressum — Musik Palast Inwil" },
      { name: "description", content: "Impressum und Kontaktangaben des Musik Palast Inwil." },
      { property: "og:title", content: "Impressum — Musik Palast Inwil" },
      { property: "og:url", content: "/impressum" },
    ],
    links: [{ rel: "canonical", href: "/impressum" }],
  }),
});

function ImpressumPage() {
  return (
    <>
      <header className="border-b-4 border-double border-ink bg-parchment">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
          <p className="font-stamp text-xs uppercase tracking-[0.4em] text-oxblood">Rechtliches</p>
          <h1
            className="mt-4 font-display text-ink"
            style={{ fontSize: "clamp(3.5rem, 14vw, 12rem)", lineHeight: 0.85 }}
          >
            IMPRESSUM.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink/80">
            Anbieterkennzeichnung und Kontaktangaben für diese Website.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="poster p-6">
            <p className="font-stamp text-xs uppercase tracking-widest text-oxblood">Anbieter</p>
            <h2 className="mt-2 font-display text-4xl uppercase text-ink">Musik Palast Inwil</h2>
            <p className="mt-4 leading-7 text-ink/80">
              Hauptstrasse 22
              <br />
              6034 Inwil
              <br />
              Schweiz
            </p>
          </article>

          <article className="poster p-6">
            <p className="font-stamp text-xs uppercase tracking-widest text-oxblood">Kontakt</p>
            <h2 className="mt-2 font-display text-4xl uppercase text-ink">Direkt</h2>
            <p className="mt-4 leading-7 text-ink/80">
              Telefon:{" "}
              <a
                href="tel:+41414484045"
                className="underline decoration-oxblood underline-offset-4"
              >
                041 448 40 45
              </a>
              <br />
              E-Mail:{" "}
              <a
                href="mailto:info@musik-palast.ch"
                className="underline decoration-oxblood underline-offset-4"
              >
                info@musik-palast.ch
              </a>
              <br />
              Website:{" "}
              <a
                href="https://musik-palast.ch"
                className="underline decoration-oxblood underline-offset-4"
              >
                musik-palast.ch
              </a>
            </p>
          </article>

          <article className="poster p-6">
            <p className="font-stamp text-xs uppercase tracking-widest text-oxblood">
              Verantwortlich
            </p>
            <h2 className="mt-2 font-display text-4xl uppercase text-ink">Inhalt</h2>
            <p className="mt-4 leading-7 text-ink/80">
              Verantwortlich für die Inhalte dieser Website ist der Musik Palast Inwil. Angaben zu
              Öffnungszeiten, Preisen und Angeboten können sich ändern.
            </p>
          </article>

          <article className="poster p-6">
            <p className="font-stamp text-xs uppercase tracking-widest text-oxblood">Links</p>
            <h2 className="mt-2 font-display text-4xl uppercase text-ink">Externe Seiten</h2>
            <p className="mt-4 leading-7 text-ink/80">
              Für externe Links wird keine Haftung übernommen. Für den Inhalt verlinkter Seiten sind
              ausschliesslich deren Betreiber verantwortlich.
            </p>
          </article>

          <article className="poster p-6 md:col-span-2">
            <p className="font-stamp text-xs uppercase tracking-widest text-oxblood">Rechte</p>
            <h2 className="mt-2 font-display text-4xl uppercase text-ink">Urheberrecht</h2>
            <p className="mt-4 leading-7 text-ink/80">
              Texte, Gestaltung und Bildmaterial dieser Website dürfen ohne Zustimmung des
              Betreibers nicht weiterverwendet werden.
            </p>
            <Link
              to="/datenschutz"
              className="mt-6 inline-block font-display text-2xl uppercase text-oxblood underline decoration-2 underline-offset-4"
            >
              Datenschutz lesen →
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}
