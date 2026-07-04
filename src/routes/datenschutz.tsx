import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/datenschutz")({
  component: DatenschutzPage,
  head: () => ({
    meta: [
      { title: "Datenschutz — Musik Palast Inwil" },
      {
        name: "description",
        content: "Datenschutzhinweise für die Website des Musik Palast Inwil.",
      },
      { property: "og:title", content: "Datenschutz — Musik Palast Inwil" },
      { property: "og:url", content: "/datenschutz" },
    ],
    links: [{ rel: "canonical", href: "/datenschutz" }],
  }),
});

const sections = [
  {
    title: "Verantwortliche Stelle",
    body: "Musik Palast Inwil, Hauptstrasse 22, 6034 Inwil, Schweiz. Kontakt: info@musik-palast.ch oder 041 448 40 45.",
  },
  {
    title: "Server-Logs",
    body: "Beim Aufruf der Website werden technische Zugriffsdaten verarbeitet, zum Beispiel IP-Adresse, Datum, Uhrzeit, aufgerufene Seiten, Browser und Betriebssystem. Diese Daten dienen dem sicheren Betrieb, der Fehleranalyse und der Missbrauchsverhinderung.",
  },
  {
    title: "Kontakt und Reservation",
    body: "Wenn Besucher telefonisch, per E-Mail oder über verlinkte Kontaktwege mit dem Musik Palast Kontakt aufnehmen, werden die freiwillig mitgeteilten Angaben zur Bearbeitung der Anfrage verwendet.",
  },
  {
    title: "Google Maps",
    body: "Die Besuch-Seite bindet Google Maps ein, damit die Lage des Musik Palast angezeigt werden kann. Beim Laden der Karte können technische Daten an Google übermittelt werden.",
  },
  {
    title: "Google Fonts",
    body: "Diese Website lädt Schriften von Google Fonts. Dabei können technische Daten wie die IP-Adresse an Google übertragen werden.",
  },
  {
    title: "Cookies und Tracking",
    body: "Diese Website setzt keine eigenen Analyse- oder Marketing-Cookies ein. Technisch notwendige Daten können durch den Betrieb der Website und eingebundene Dienste entstehen.",
  },
  {
    title: "Aufbewahrung",
    body: "Personendaten werden nur so lange aufbewahrt, wie es für den jeweiligen Zweck erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.",
  },
  {
    title: "Rechte",
    body: "Betroffene Personen können nach Schweizer Datenschutzrecht Auskunft über ihre Personendaten verlangen und die Berichtigung oder Löschung unrichtiger oder nicht mehr erforderlicher Daten verlangen.",
  },
];

function DatenschutzPage() {
  return (
    <>
      <header className="border-b-4 border-double border-ink bg-parchment">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
          <p className="font-stamp text-xs uppercase tracking-[0.4em] text-oxblood">Rechtliches</p>
          <h1
            className="mt-4 font-display text-ink"
            style={{ fontSize: "clamp(3.5rem, 14vw, 12rem)", lineHeight: 0.85 }}
          >
            DATENSCHUTZ.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink/80">
            Informationen dazu, welche Daten beim Besuch dieser Website verarbeitet werden.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <div className="space-y-6">
          {sections.map((section, index) => (
            <article
              key={section.title}
              className="grid gap-6 border-b border-ink/20 pb-6 md:grid-cols-[auto_1fr]"
            >
              <p className="font-display text-4xl leading-none text-oxblood">
                {String(index + 1).padStart(2, "0")}.
              </p>
              <div>
                <h2 className="font-display text-3xl uppercase leading-tight text-ink">
                  {section.title}
                </h2>
                <p className="mt-2 leading-7 text-ink/80">{section.body}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 poster-amber p-6">
          <p className="font-stamp text-xs uppercase tracking-widest">Kontakt</p>
          <p className="mt-3 max-w-2xl text-ink/80">
            Datenschutzanfragen können per E-Mail an{" "}
            <a
              href="mailto:info@musik-palast.ch"
              className="underline decoration-2 underline-offset-4"
            >
              info@musik-palast.ch
            </a>{" "}
            oder telefonisch an 041 448 40 45 gerichtet werden.
          </p>
          <Link
            to="/impressum"
            className="mt-4 inline-block font-display text-2xl uppercase text-ink underline decoration-2 underline-offset-4"
          >
            Zum Impressum →
          </Link>
        </div>
      </section>
    </>
  );
}
