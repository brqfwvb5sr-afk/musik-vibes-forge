import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PlaceholderImage } from "../components/PlaceholderImage";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Musik Palast Inwil — Musik, Tanzen & Bar" },
      {
        name: "description",
        content:
          "Der Musik Palast in Inwil (LU): Musik, Tanzfläche und eine ehrliche Bar. Geöffnet bis 00:30.",
      },
      { property: "og:title", content: "Musik Palast Inwil — Musik, Tanzen & Bar" },
      {
        property: "og:description",
        content: "Musik, Tanzfläche und Bar in Inwil. Hauptstrasse 22, Inwil.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <>
      <Hero />
      <Manifest />
      <RoomStrip />
      <BigCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b-4 border-double border-ink bg-ink">
      <div className="absolute inset-0" aria-hidden>
        <div
          className="absolute inset-0 opacity-80"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, oklch(0.14 0.02 40 / 0.28), oklch(0.14 0.02 40 / 0.94)), repeating-linear-gradient(90deg, oklch(0.94 0.02 80 / 0.08) 0 1px, transparent 1px 90px), repeating-linear-gradient(0deg, oklch(0.82 0.17 78 / 0.09) 0 2px, transparent 2px 64px)",
          }}
        />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-12 md:py-32">
        <div className="md:col-span-7">
          <p className="font-stamp text-xs uppercase tracking-[0.35em] text-amber-neon">
            Inwil · Luzern · Bar & Tanz
          </p>
          <h1
            className="mt-4 font-display text-bone"
            style={{
              fontSize: "clamp(3.5rem, 12vw, 11rem)",
              lineHeight: 0.85,
              letterSpacing: "0.005em",
            }}
          >
            EIN <span className="neon-glow neon-flicker">ABEND</span>
            <br />
            LAUT <span className="italic text-oxblood">&amp;</span> LIVE.
          </h1>
          <p className="mt-6 max-w-xl font-body text-lg text-bone/85 md:text-xl">
            Musik im Raum, eine hölzerne Tanzfläche und eine ehrliche Bar im Rücken. Kein
            Club-Türsteher, kein Dresscode — einfach ein unkomplizierter Abend in Inwil.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/kontakt"
              className="poster-amber inline-flex items-center gap-3 px-6 py-4 font-display text-xl uppercase"
            >
              Tisch reservieren
              <span aria-hidden>→</span>
            </Link>
            <Link
              to="/bar"
              className="font-display text-xl uppercase text-bone underline decoration-amber-neon decoration-2 underline-offset-8 hover:text-amber-neon"
            >
              Zur Bar
            </Link>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20, rotate: -1.5 }}
          animate={{ opacity: 1, y: 0, rotate: 1.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:col-span-5 md:mt-8"
        >
          <PlaceholderImage
            label="Saalfoto folgt"
            tone="dark"
            className="min-h-[360px] w-full shadow-[8px_10px_0_oklch(0.82_0.17_78)]"
          />
        </motion.div>
      </div>

      <div className="relative border-t border-bone/20 bg-ink/80 text-bone">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-bone/20 px-4 text-center font-stamp text-[11px] uppercase tracking-widest sm:grid-cols-4">
          {[
            ["36", "Google-Sterne"],
            ["4.1", "Ø Bewertung"],
            ["00:30", "Letzter Drink"],
            ["0", "Türsteher"],
          ].map(([n, l]) => (
            <div key={l} className="py-4">
              <p className="font-display text-3xl leading-none text-amber-neon">{n}</p>
              <p className="mt-1">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Manifest() {
  return (
    <section className="border-y-4 border-double border-ink bg-parchment">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 md:grid-cols-12 md:py-32">
        <div className="md:col-span-5">
          <p className="font-stamp text-xs uppercase tracking-widest text-oxblood">
            § 01 — Hausgefühl
          </p>
          <h2 className="mt-2 font-display text-6xl leading-[0.9] text-ink md:text-7xl">
            Ein Ort für <span className="italic">Leute,</span>
            <br />
            die noch <span className="text-oxblood">mitsingen.</span>
          </h2>
        </div>
        <div className="space-y-8 md:col-span-7">
          {[
            [
              "01.",
              "Musik, Bar, Tanzfläche.",
              "Der Fokus liegt auf einem unkomplizierten Abend mitten in Inwil.",
            ],
            [
              "02.",
              "Tanzfläche, keine Absperrung.",
              "Zwischen Bar und Saal liegt Holz. Wer hinsteht, tanzt. So einfach ist das.",
            ],
            [
              "03.",
              "Persönlich geführt.",
              "Der Palast wird geführt, wie ein Wohnzimmer geführt wird — mit Anspruch und ohne Getue.",
            ],
            [
              "04.",
              "Kein Dresscode. Kein Türsteher.",
              "Kommt in Jeans, kommt in Ausgangs­kleidern. Alle sind willkommen, solange die Stimmung bleibt.",
            ],
          ].map(([n, t, d]) => (
            <div key={n} className="grid grid-cols-[auto_1fr] gap-6 border-b border-ink/20 pb-6">
              <p className="font-display text-4xl leading-none text-oxblood">{n}</p>
              <div>
                <h3 className="font-display text-2xl uppercase leading-tight text-ink">{t}</h3>
                <p className="mt-2 text-ink/80">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RoomStrip() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="rule-thick pt-6">
        <p className="font-stamp text-xs uppercase tracking-widest text-oxblood">§ 02 — Bilder</p>
        <h2 className="mt-2 font-display text-6xl leading-none text-ink md:text-8xl">
          Einblick
        </h2>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="paper-torn relative overflow-hidden md:col-span-3 md:row-span-2"
          style={{ transform: "rotate(-0.6deg)" }}
        >
          <PlaceholderImage
            label="Raumfoto"
            framed={false}
            className="min-h-[520px] h-full w-full"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-ink/85 p-4 font-stamp text-xs uppercase tracking-widest text-bone">
            Saal · Stimmung · Tanzfläche
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="paper-torn relative overflow-hidden md:col-span-2"
          style={{ transform: "rotate(0.7deg)" }}
        >
          <PlaceholderImage
            label="Detailfoto"
            framed={false}
            className="min-h-[260px] h-full w-full"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-oxblood p-4 font-stamp text-xs uppercase tracking-widest text-bone">
            Licht · Bar · Details
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="poster-amber flex flex-col justify-between p-6 md:col-span-2"
          style={{ transform: "rotate(-0.4deg)" }}
        >
          <p className="font-stamp text-xs uppercase tracking-widest">Gästebuch, gekürzt</p>
          <blockquote className="font-display text-2xl leading-tight text-ink md:text-3xl">
            "War ein Hammer Abend bei Euch. War die Reise wert vom Kanton Bern."
          </blockquote>
          <p className="font-stamp text-xs uppercase tracking-widest">
            — Urs H. · Google-Rezension
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function BigCTA() {
  return (
    <section className="relative overflow-hidden bg-ink text-bone">
      <div className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6">
        <p className="font-stamp text-xs uppercase tracking-[0.4em] text-amber-neon">Türe offen</p>
        <h2
          className="mt-6 font-display leading-[0.85]"
          style={{ fontSize: "clamp(4rem, 14vw, 13rem)" }}
        >
          KOMM <span className="neon-glow neon-flicker">VORBEI.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-bone/80">
          Hauptstrasse 22, 6034 Inwil. Do–Sa ab 20:00. Reserviere einen Tisch — oder komm einfach.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="tel:+41414484045"
            className="poster-amber inline-flex items-center gap-2 px-6 py-4 font-display text-xl uppercase"
          >
            041 448 40 45
          </a>
          <Link
            to="/kontakt"
            className="border-2 border-bone px-6 py-4 font-display text-xl uppercase text-bone hover:bg-bone hover:text-ink"
          >
            Route &amp; Öffnungszeiten
          </Link>
        </div>
      </div>
    </section>
  );
}
