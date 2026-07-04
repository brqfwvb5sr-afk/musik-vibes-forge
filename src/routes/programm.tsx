import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";

export const Route = createFileRoute("/programm")({
  component: ProgrammPage,
  head: () => ({
    meta: [
      { title: "Programm — Musik Palast Inwil" },
      { name: "description", content: "Live-Coverbands und Schlagernächte im Musik Palast Inwil. Aktuelles Programm, Bands und Startzeiten." },
      { property: "og:title", content: "Programm — Musik Palast Inwil" },
      { property: "og:description", content: "Live-Coverbands und Schlagernächte im Musik Palast Inwil." },
      { property: "og:url", content: "/programm" },
    ],
    links: [{ rel: "canonical", href: "/programm" }],
  }),
});

type Show = {
  date: string; day: string; month: string;
  band: string; genre: string; sets: string;
  status: "live" | "dj" | "spezial";
  desc: string;
};

const shows: Show[] = [
  { date: "07", day: "Donnerstag", month: "November", band: "Die Ringos", genre: "Cover-Rock · Stones bis Springsteen", sets: "21:30 · 23:00", status: "live", desc: "Der Stamm-Act des Palasts. Zwei Sets, eine Zugabe, Publikum singt mit." },
  { date: "08", day: "Freitag", month: "November", band: "Schlagernacht mit DJ Peo", genre: "Schlager · Deutsche Hits · Wunschzettel", sets: "ab 21:00", status: "dj", desc: "Wunschzettel auf der Bar. Von Andrea Berg bis DJ Ötzi — was aufliegt, wird gespielt." },
  { date: "09", day: "Samstag", month: "November", band: "Blueschtängel", genre: "Rock-Blues Trio · Luzern", sets: "21:30 · 23:15", status: "live", desc: "Drei Musiker, ein Verstärker zu viel. Wer's laut mag, steht vorne." },
  { date: "14", day: "Donnerstag", month: "November", band: "Karaoke-Palast", genre: "Offene Bühne · alle willkommen", sets: "ab 20:30", status: "spezial", desc: "Textblatt bereit, Mikrofon warm. Kein Talent nötig, nur Mut." },
  { date: "15", day: "Freitag", month: "November", band: "The Highway Cats", genre: "Rockabilly · Country-Rock", sets: "21:30 · 23:00", status: "live", desc: "Kontrabass, Steel-Gitarre, gepomadetes Haar. Boots optional." },
  { date: "16", day: "Samstag", month: "November", band: "Oldies But Goldies", genre: "60s · 70s · 80s Cover", sets: "21:30 · 23:15", status: "live", desc: "Vom Twist zum Discofox. Bringt die Eltern mit." },
  { date: "22", day: "Freitag", month: "November", band: "Ländler-Nacht", genre: "Volksmusik · Örgeli · Klarinette", sets: "ab 20:00", status: "spezial", desc: "Einmal im Monat: echte Schweizer Volksmusik. Trachten gerne gesehen." },
  { date: "23", day: "Samstag", month: "November", band: "Die Ringos", genre: "Cover-Rock · Stones bis Springsteen", sets: "21:30 · 23:00", status: "live", desc: "Zurück auf der Bühne. Wieder zwei Sets, wieder mit Zugabe." },
];

function StatusBadge({ s }: { s: Show["status"] }) {
  const map = {
    live: ["LIVE", "poster-red"],
    dj: ["DJ-SET", "poster-amber"],
    spezial: ["SPEZIAL", "poster"],
  } as const;
  const [label, cls] = map[s];
  return <span className={`${cls} px-2 py-1 font-stamp text-[10px] uppercase tracking-widest`}>{label}</span>;
}

function ProgrammPage() {
  return (
    <>
      <header className="border-b-4 border-double border-ink bg-parchment">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
          <p className="font-stamp text-xs uppercase tracking-[0.4em] text-oxblood">Ausgabe November · Aktuell</p>
          <h1 className="mt-4 font-display text-ink" style={{ fontSize: "clamp(3.5rem, 14vw, 12rem)", lineHeight: 0.85 }}>
            PROGRAMM
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink/80">
            Coverbands, DJ-Sets, Volksmusik. Der Musik Palast programmiert nach einer Regel:
            wenn die Tanzfläche voll wird, war's richtig.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <ul className="divide-y-2 divide-double divide-ink border-y-4 border-double border-ink">
          {shows.map((s, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="grid grid-cols-[auto_1fr] items-start gap-6 py-8 md:grid-cols-[120px_1fr_auto] md:gap-10"
            >
              <div className="text-center">
                <p className="font-display text-6xl leading-none text-oxblood md:text-7xl">{s.date}</p>
                <p className="font-stamp text-[10px] uppercase tracking-widest text-ink">{s.month}</p>
                <p className="mt-1 font-stamp text-xs uppercase tracking-widest text-ink/60">{s.day}</p>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="font-display text-3xl uppercase leading-none text-ink md:text-5xl">{s.band}</h2>
                  <StatusBadge s={s.status} />
                </div>
                <p className="mt-2 font-stamp text-xs uppercase tracking-widest text-oxblood">{s.genre}</p>
                <p className="mt-3 max-w-xl text-ink/80">{s.desc}</p>
              </div>
              <div className="col-span-2 flex items-center justify-between md:col-span-1 md:flex-col md:items-end md:justify-start">
                <p className="font-display text-2xl text-ink">{s.sets}</p>
                <a href="tel:+41414484045" className="font-stamp text-xs uppercase tracking-widest text-oxblood underline underline-offset-4">
                  Tisch reservieren
                </a>
              </div>
            </motion.li>
          ))}
        </ul>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="poster p-6">
            <p className="font-stamp text-xs uppercase tracking-widest text-oxblood">Eure Band?</p>
            <h3 className="mt-1 font-display text-3xl uppercase text-ink">Bühne frei.</h3>
            <p className="mt-3 text-ink/80">
              Ihr spielt Cover-Rock, Oldies, Blues, Schlager oder Ländler? Schickt uns ein Demo und ein Datum —
              wir hören uns alles an.
            </p>
            <a href="tel:+41414484045" className="mt-4 inline-block font-display text-xl uppercase text-oxblood underline decoration-2 underline-offset-4">
              041 448 40 45 →
            </a>
          </div>
          <div className="poster-red p-6">
            <p className="font-stamp text-xs uppercase tracking-widest text-bone/80">Private Feier?</p>
            <h3 className="mt-1 font-display text-3xl uppercase">Geburtstag im Palast.</h3>
            <p className="mt-3 text-bone/90">
              Wir schliessen für private Anlässe — mit oder ohne Band. Ab 30 Personen unter der Woche
              den ganzen Saal.
            </p>
            <Link to="/kontakt" className="mt-4 inline-block font-display text-xl uppercase underline decoration-amber-neon decoration-2 underline-offset-4">
              Anfrage stellen →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}