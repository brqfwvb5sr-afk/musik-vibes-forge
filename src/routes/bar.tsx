import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import barDetail from "../assets/bar-detail.jpg";

export const Route = createFileRoute("/bar")({
  component: BarPage,
  head: () => ({
    meta: [
      { title: "Bar & Getränke — Musik Palast Inwil" },
      { name: "description", content: "Bier vom Fass, ehrliche Longdrinks, Kaffee bis spät. Die Bar im Musik Palast Inwil — kein Chichi, keine Preisliste zum Fürchten." },
      { property: "og:title", content: "Bar & Getränke — Musik Palast Inwil" },
      { property: "og:description", content: "Bier vom Fass, ehrliche Longdrinks, Kaffee bis spät im Musik Palast Inwil." },
      { property: "og:url", content: "/bar" },
    ],
    links: [{ rel: "canonical", href: "/bar" }],
  }),
});

const menu = [
  {
    kind: "Vom Fass",
    items: [
      ["Eichhof Lager", "0.3 · 0.5", "4.50 · 6.50"],
      ["Feldschlösschen dunkel", "0.3 · 0.5", "4.80 · 6.80"],
      ["Palast-Panaché", "0.5", "5.50"],
    ],
  },
  {
    kind: "Aus der Flasche",
    items: [
      ["Rugenbräu", "0.33", "5.00"],
      ["Chopfab India Pale", "0.33", "6.50"],
      ["Alkoholfrei · Erdinger", "0.33", "5.00"],
    ],
  },
  {
    kind: "Longdrinks",
    items: [
      ["Whisky-Cola", "4 cl", "12.00"],
      ["Gin-Tonic", "4 cl", "13.00"],
      ["Vodka-Redbull", "4 cl", "13.00"],
      ["Cuba Libre", "4 cl", "12.00"],
    ],
  },
  {
    kind: "Wein & Schaum",
    items: [
      ["Hauswein weiss · Fendant", "1 dl", "5.50"],
      ["Hauswein rot · Merlot Ticino", "1 dl", "5.80"],
      ["Prosecco vom Fass", "1 dl", "7.00"],
    ],
  },
  {
    kind: "Ohne Alkohol",
    items: [
      ["Coca-Cola, Rivella, Sprite", "3 dl", "4.50"],
      ["Frisch gepresster Orangensaft", "2 dl", "6.00"],
      ["Kaffee · Espresso · Schümli", "—", "4.20"],
    ],
  },
  {
    kind: "Kleine Karte",
    items: [
      ["Toast Käse-Schinken", "—", "9.50"],
      ["Wurstsalat mit Brot", "—", "14.50"],
      ["Nüssli & Chips-Teller", "—", "6.00"],
    ],
  },
];

function BarPage() {
  return (
    <>
      <header className="relative overflow-hidden border-b-4 border-double border-ink">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, oklch(0.14 0.02 40 / 0.9), oklch(0.14 0.02 40 / 0.4)), url(${barDetail})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-32">
          <p className="font-stamp text-xs uppercase tracking-[0.4em] text-amber-neon">Hinter dem Tresen</p>
          <h1 className="mt-4 font-display text-bone" style={{ fontSize: "clamp(3.5rem, 14vw, 12rem)", lineHeight: 0.85 }}>
            DIE BAR.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-bone/85">
            Kein Cocktail-Zirkus, keine Rauchmaschine. Kaltes Bier, ehrliche Longdrinks,
            ein Wein zum Zuhören und ein Kaffee, der spät noch schmeckt.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-x-16 gap-y-14 md:grid-cols-2">
          {menu.map((group, gi) => (
            <motion.div
              key={group.kind}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: gi * 0.05 }}
            >
              <div className="flex items-baseline justify-between border-b-2 border-ink pb-2">
                <h2 className="font-display text-3xl uppercase text-ink md:text-4xl">{group.kind}</h2>
                <span className="font-stamp text-[10px] uppercase tracking-widest text-oxblood">Karte № {String(gi + 1).padStart(2, "0")}</span>
              </div>
              <ul className="mt-4 space-y-3">
                {group.items.map(([name, size, price]) => (
                  <li key={name} className="grid grid-cols-[1fr_auto_auto] items-baseline gap-4">
                    <span className="font-body text-lg text-ink">{name}</span>
                    <span className="font-stamp text-xs uppercase tracking-widest text-ink/50">{size}</span>
                    <span className="font-display text-xl text-oxblood">CHF {price}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid gap-6 border-y-4 border-double border-ink py-10 md:grid-cols-3">
          <p className="font-stamp text-sm uppercase tracking-widest text-ink/70">
            <span className="text-oxblood">*</span> Preise in Schweizer Franken.
          </p>
          <p className="font-stamp text-sm uppercase tracking-widest text-ink/70">
            Barzahlung · Twint · Karten ab 20.—
          </p>
          <p className="font-stamp text-sm uppercase tracking-widest text-ink/70">
            Küche warm bis 23:30 · Kaffee bis Schluss
          </p>
        </div>
      </section>
    </>
  );
}