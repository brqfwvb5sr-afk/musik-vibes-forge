import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import heroStage from "../assets/hero-stage.jpg";
import bandLive from "../assets/band-live.jpg";
import dancefloor from "../assets/dancefloor.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Musik Palast Inwil — Live-Musik, Tanzen & Bar" },
      { name: "description", content: "Der Musik Palast in Inwil (LU): Cover-Rock, Oldies und Schlager auf der Bühne, Tanzfläche bis 00:30 und eine ehrliche Bar. Von Frauen geführt." },
      { property: "og:title", content: "Musik Palast Inwil — Live-Musik, Tanzen & Bar" },
      { property: "og:description", content: "Cover-Rock, Oldies und Schlager live. Tanzfläche bis 00:30. Hauptstrasse 22, Inwil." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <>
      <Hero />
      <NextUp />
      <Manifest />
      <RoomStrip />
      <BigCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b-4 border-double border-ink">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, oklch(0.14 0.02 40 / 0.55), oklch(0.14 0.02 40 / 0.85)), url(${heroStage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-12 md:py-32">
        <div className="md:col-span-8">
          <p className="font-stamp text-xs uppercase tracking-[0.35em] text-amber-neon">
            Seit 1987 · Inwil · Luzern · Ausgabe Nr. 04
          </p>
          <h1
            className="mt-4 font-display text-bone"
            style={{ fontSize: "clamp(3.5rem, 12vw, 11rem)", lineHeight: 0.85, letterSpacing: "0.005em" }}
          >
            EIN <span className="neon-glow neon-flicker">ABEND</span><br />
            LAUT <span className="italic text-oxblood">&amp;</span> LIVE.
          </h1>
          <p className="mt-6 max-w-xl font-body text-lg text-bone/85 md:text-xl">
            Coverbands auf der Bühne, hölzerne Tanzfläche vor der Nase, eine ehrliche Bar im Rücken.
            Kein Club-Türsteher, kein Dresscode — nur Musik, die man mitsingen kann.
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
              to="/programm"
              className="font-display text-xl uppercase text-bone underline decoration-amber-neon decoration-2 underline-offset-8 hover:text-amber-neon"
            >
              Wer spielt heute?
            </Link>
          </div>
        </div>

        {/* Ticket stub */}
        <motion.aside
          initial={{ opacity: 0, y: 20, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: 2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="poster relative mx-auto w-full max-w-sm p-6 md:col-span-4 md:mt-8"
        >
          <div className="flex items-start justify-between border-b-2 border-dashed border-ink pb-3">
            <div>
              <p className="font-stamp text-[10px] uppercase tracking-widest">Admit One · Eintritt Frei</p>
              <p className="font-display text-3xl leading-none">Samstag</p>
              <p className="font-display text-5xl leading-none text-oxblood">21:30</p>
            </div>
            <div className="rotate-90 font-stamp text-[10px] uppercase tracking-widest">
              № 004 / 24
            </div>
          </div>
          <p className="mt-4 font-stamp text-xs uppercase tracking-widest text-oxblood">Heute auf der Bühne</p>
          <p className="font-display text-4xl leading-tight">Die Ringos</p>
          <p className="font-body text-sm text-ink/70">
            Cover-Rock von Stones bis Springsteen. Zwei Sets, eine Zugabe.
          </p>
          <div className="mt-4 border-t border-dashed border-ink pt-3 font-stamp text-[10px] uppercase tracking-widest">
            Palast Nord · Reihe A · Bar-nah<br />
            Bitte tanzen. Fotos verboten.
          </div>
        </motion.aside>
      </div>

      {/* Bottom info bar */}
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

function NextUp() {
  const shows = [
    { day: "Do", date: "07.11", band: "Die Ringos", genre: "Cover-Rock · Oldies", note: "Zwei Sets" },
    { day: "Fr", date: "08.11", band: "Schlagernacht", genre: "Schlager-DJ · Wunschzettel", note: "Kein Eintritt" },
    { day: "Sa", date: "09.11", band: "Blueschtängel", genre: "Rock-Blues Trio", note: "Ab 21:30" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="flex flex-wrap items-end justify-between gap-4 rule-thick pt-6">
        <div>
          <p className="font-stamp text-xs uppercase tracking-widest text-oxblood">§ 01 — Diese Woche</p>
          <h2 className="font-display text-6xl leading-none text-ink md:text-8xl">Auf der Bühne</h2>
        </div>
        <Link to="/programm" className="font-display text-xl uppercase text-ink underline decoration-oxblood decoration-2 underline-offset-4">
          Ganzes Programm →
        </Link>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {shows.map((s, i) => (
          <motion.article
            key={s.band}
            initial={{ opacity: 0, y: 30, rotate: i % 2 ? 1.5 : -1.5 }}
            whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 1.5 : -1.5 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`poster p-6 ${i === 1 ? "poster-red" : ""}`}
          >
            <div className="flex items-baseline justify-between">
              <p className="font-display text-2xl uppercase">{s.day}</p>
              <p className="font-stamp text-xs uppercase tracking-widest">{s.date}</p>
            </div>
            <h3 className="mt-4 font-display text-4xl leading-none">{s.band}</h3>
            <p className={`mt-2 font-stamp text-xs uppercase tracking-widest ${i === 1 ? "text-bone/80" : "text-oxblood"}`}>
              {s.genre}
            </p>
            <p className="mt-4 text-sm">{s.note}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Manifest() {
  return (
    <section className="border-y-4 border-double border-ink bg-parchment">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 md:grid-cols-12 md:py-32">
        <div className="md:col-span-5">
          <p className="font-stamp text-xs uppercase tracking-widest text-oxblood">§ 02 — Hausordnung</p>
          <h2 className="mt-2 font-display text-6xl leading-[0.9] text-ink md:text-7xl">
            Ein Ort für <span className="italic">Leute,</span><br />
            die noch <span className="text-oxblood">mitsingen.</span>
          </h2>
        </div>
        <div className="space-y-8 md:col-span-7">
          {[
            ["01.", "Coverbands, keine Playbacks.", "Freitag und Samstag steht eine Band auf der Bühne. Manchmal Rock, manchmal Oldies, immer live."],
            ["02.", "Tanzfläche, keine Absperrung.", "Zwischen Bar und Bühne liegt Holz. Wer hinsteht, tanzt. So einfach ist das."],
            ["03.", "Von Frauen geführt.", "Der Palast wird geführt, wie ein Wohnzimmer geführt wird — mit Anspruch und ohne Getue."],
            ["04.", "Kein Dresscode. Kein Türsteher.", "Kommt in Jeans, kommt in Ausgangs­kleidern. Alle sind willkommen, solange die Musik bleibt."],
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
        <p className="font-stamp text-xs uppercase tracking-widest text-oxblood">§ 03 — Der Raum</p>
        <h2 className="mt-2 font-display text-6xl leading-none text-ink md:text-8xl">Wie's drin aussieht</h2>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="paper-torn relative overflow-hidden md:col-span-3 md:row-span-2"
          style={{ transform: "rotate(-0.6deg)" }}
        >
          <img src={bandLive} alt="Coverband live auf der Bühne im Musik Palast" loading="lazy" width={1200} height={1504} className="h-full w-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-ink/85 p-4 font-stamp text-xs uppercase tracking-widest text-bone">
            Foto: Rock-Set · 22:14 Uhr · Objektiv beschlagen
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="paper-torn relative overflow-hidden md:col-span-2"
          style={{ transform: "rotate(0.7deg)" }}
        >
          <img src={dancefloor} alt="Tanzfläche im Musik Palast Inwil" loading="lazy" width={1408} height={1008} className="h-full w-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-oxblood p-4 font-stamp text-xs uppercase tracking-widest text-bone">
            Tanzfläche · Holz · knarzt schön
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
          <p className="font-stamp text-xs uppercase tracking-widest">— Urs H. · Google-Rezension</p>
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
          <a href="tel:+41414484045" className="poster-amber inline-flex items-center gap-2 px-6 py-4 font-display text-xl uppercase">
            041 448 40 45
          </a>
          <Link to="/kontakt" className="border-2 border-bone px-6 py-4 font-display text-xl uppercase text-bone hover:bg-bone hover:text-ink">
            Route &amp; Öffnungszeiten
          </Link>
        </div>
      </div>
    </section>
  );
}
