import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/kontakt")({
  component: KontaktPage,
  head: () => ({
    meta: [
      { title: "Besuch & Reservation — Musik Palast Inwil" },
      {
        name: "description",
        content:
          "Hauptstrasse 22, 6034 Inwil. Reservationen unter 041 448 40 45. Öffnungszeiten und Anfahrt zum Musik Palast.",
      },
      { property: "og:title", content: "Besuch & Reservation — Musik Palast Inwil" },
      {
        property: "og:description",
        content: "Hauptstrasse 22, 6034 Inwil · 041 448 40 45. Öffnungszeiten und Anfahrt.",
      },
      { property: "og:url", content: "/kontakt" },
    ],
    links: [{ rel: "canonical", href: "/kontakt" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BarOrPub",
          name: "Musik Palast",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Hauptstrasse 22",
            postalCode: "6034",
            addressLocality: "Inwil",
            addressRegion: "LU",
            addressCountry: "CH",
          },
          telephone: "+41414484045",
          url: "https://musik-palast.ch",
          servesCuisine: "Bar",
          openingHours: [
            "We 13:30-17:00",
            "We 19:30-00:30",
            "Th 19:30-00:30",
            "Fr 19:30-00:30",
            "Sa 19:30-00:30",
            "Su 13:30-17:00",
          ],
        }),
      },
    ],
  }),
});

function KontaktPage() {
  return (
    <>
      <header className="border-b-4 border-double border-ink bg-parchment">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
          <p className="font-stamp text-xs uppercase tracking-[0.4em] text-oxblood">
            Wegweiser · Route
          </p>
          <h1
            className="mt-4 font-display text-ink"
            style={{ fontSize: "clamp(3.5rem, 14vw, 12rem)", lineHeight: 0.85 }}
          >
            BESUCH.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink/80">
            Der Musik Palast steht mitten in Inwil, direkt an der Hauptstrasse. Parkplätze gibt es
            direkt vor dem Haus, die Bushaltestelle Inwil Pannerhof liegt in der Nähe.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Info column */}
          <div className="space-y-10 md:col-span-5">
            <div>
              <p className="font-stamp text-xs uppercase tracking-widest text-oxblood">Adresse</p>
              <p className="mt-2 font-display text-4xl leading-tight text-ink">
                Hauptstrasse 22
                <br />
                6034 Inwil
                <br />
                Kanton Luzern
              </p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Musik+Palast+Hauptstrasse+22+6034+Inwil"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block font-stamp text-xs uppercase tracking-widest text-oxblood underline underline-offset-4"
              >
                Route in Google Maps öffnen →
              </a>
            </div>

            <div>
              <p className="font-stamp text-xs uppercase tracking-widest text-oxblood">
                Reservation
              </p>
              <a
                href="tel:+41414484045"
                className="mt-2 block font-display text-5xl leading-none text-ink hover:text-oxblood"
              >
                041 448 40 45
              </a>
              <p className="mt-3 max-w-sm text-ink/70">
                Am liebsten telefonisch — dann wissen wir, ob's ein Tanzplatz-Tisch werden soll oder
                ein ruhiger in der Ecke.
              </p>
            </div>

            <div>
              <p className="font-stamp text-xs uppercase tracking-widest text-oxblood">
                Öffnungszeiten
              </p>
              <table className="mt-3 w-full font-body">
                <tbody className="divide-y divide-ink/20">
                  {[
                    ["Montag", "geschlossen"],
                    ["Dienstag", "geschlossen"],
                    ["Mittwoch", "13:30 – 17:00 / 19:30 – 00:30"],
                    ["Donnerstag", "19:30 – 00:30"],
                    ["Freitag", "19:30 – 00:30"],
                    ["Samstag", "19:30 – 00:30"],
                    ["Sonntag", "13:30 – 17:00"],
                  ].map(([d, h]) => (
                    <tr key={d}>
                      <td className="py-3 font-display text-xl uppercase text-ink">{d}</td>
                      <td className="py-3 text-right font-stamp text-sm uppercase tracking-widest text-ink/70">
                        {h}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Map */}
          <div className="md:col-span-7">
            <div className="paper-torn overflow-hidden" style={{ transform: "rotate(-0.4deg)" }}>
              <iframe
                title="Musik Palast auf der Karte"
                src="https://www.google.com/maps?q=Musik+Palast+Hauptstrasse+22+6034+Inwil&output=embed"
                width="100%"
                height="620"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0, filter: "sepia(0.35) contrast(1.05) saturate(0.9)" }}
              />
              <div className="border-t-2 border-ink bg-ink p-4 font-stamp text-xs uppercase tracking-widest text-bone">
                48CW+M8 Inwil · Kartenausschnitt № 022
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                ["ÖV", "Linien 110 und 111 · Haltestelle Inwil Pannerhof"],
                ["Auto", "Gratis-Parkplätze vor dem Haus"],
                ["Barrierefrei", "Ebenerdig, WC im Erdgeschoss"],
              ].map(([t, d]) => (
                <div key={t} className="poster p-4">
                  <p className="font-display text-xl uppercase text-oxblood">{t}</p>
                  <p className="mt-1 text-sm text-ink/80">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
