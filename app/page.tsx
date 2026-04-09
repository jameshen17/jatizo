import Image from "next/image";

const services = [
  {
    title: "Product Development Support",
    text: "Style adaptation, sample coordination, sizing adjustments with U.S.-market fit considerations, and small-batch planning for apparel projects targeting the U.S. market."
  },
  {
    title: "Sourcing & Supplier Coordination",
    text: "Supplier identification, quotation comparison, communication support, and production follow-up across cross-border workflows."
  },
  {
    title: "Sampling & Production Support",
    text: "Support for sample development, iteration, and production coordination with a practical focus on timelines, clarity, and feasibility."
  },
  {
    title: "Early-Stage Market Testing Support",
    text: "Support for teams testing products in early-stage channels, with attention to product readiness, small-batch flexibility, and execution details."
  },
  {
    title: "Advisory Support",
    text: "Light consulting support for apparel founders and small teams evaluating sourcing, product setup, and go-to-market execution."
  }
];

const audiences = [
  {
    title: "Emerging apparel brands",
    text: "Teams developing or testing products for the U.S. market."
  },
  {
    title: "Boutique and niche fashion sellers",
    text: "Operators looking for small-batch flexibility and practical supplier coordination."
  },
  {
    title: "Founders exploring apparel opportunities",
    text: "Entrepreneurs who need help bridging product ideas, supplier execution, and early-stage testing."
  }
];

const reasons = [
  {
    title: "Market-aware product thinking",
    text: "We look beyond factory quotes and consider product fit, target market needs, and execution feasibility."
  },
  {
    title: "Flexible small-batch approach",
    text: "Useful for teams that need iteration, testing, and lower-risk execution rather than rigid large-scale workflows."
  },
  {
    title: "Cross-border coordination",
    text: "We help connect product, supplier, and market needs across different stages of execution."
  },
  {
    title: "Practical and responsive",
    text: "Clear communication, realistic planning, and hands-on follow-through matter more than vague promises."
  }
];

function SectionHeading({
  title,
  intro
}: {
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-2xl space-y-4">
      <p className="text-sm uppercase tracking-[0.24em] text-stone">{title}</p>
      {intro ? <p className="max-w-xl text-lg leading-8 text-stone">{intro}</p> : null}
    </div>
  );
}

function Card({
  title,
  text,
  tone = "default"
}: {
  title: string;
  text: string;
  tone?: "default" | "tinted" | "dark";
}) {
  const toneClass =
    tone === "dark"
      ? "border-white/10 bg-charcoal text-white shadow-glow"
      : tone === "tinted"
        ? "border-accent/20 bg-paperAlt/90"
        : "border-line/90 bg-paper/95";

  const textClass = tone === "dark" ? "text-white/72" : "text-stone";

  return (
    <article className={`rounded-[1.6rem] border p-7 shadow-card transition duration-300 hover:-translate-y-1 ${toneClass}`}>
      <h3 className={`text-xl font-medium tracking-tight ${tone === "dark" ? "text-white" : "text-ink"}`}>
        {title}
      </h3>
      <p className={`mt-4 text-base leading-7 ${textClass}`}>{text}</p>
    </article>
  );
}

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top,_rgba(255,63,112,0.28),_transparent_56%)]" />
      <div className="absolute left-[-8rem] top-20 -z-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute right-[-6rem] top-[26rem] -z-10 h-80 w-80 rounded-full bg-[#6e44ff]/20 blur-3xl" />
      <div className="absolute inset-x-0 top-[40rem] -z-10 h-[24rem] bg-[linear-gradient(180deg,transparent_0%,rgba(255,255,255,0.02)_32%,transparent_100%)]" />

      <header className="fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#top" className="flex items-center" aria-label="JATIZO home">
            <Image
              src="/logo-current.png"
              alt="JATIZO"
              width={420}
              height={126}
              className="h-11 w-auto sm:h-14"
              priority
            />
          </a>
          <nav className="hidden items-center gap-8 text-sm text-white/72 md:flex">
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#who-we-work-with" className="transition hover:text-white">
              Who We Work With
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90 md:inline-flex"
            >
              Get in Touch
            </a>
            <details className="group relative md:hidden">
              <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-white/20 bg-white/5 text-white marker:content-none">
                <span className="sr-only">Open menu</span>
                <span className="flex w-[18px] flex-col gap-1.5">
                  <span className="h-px w-full bg-current transition group-open:translate-y-[7px] group-open:rotate-45" />
                  <span className="h-px w-full bg-current transition group-open:opacity-0" />
                  <span className="h-px w-full bg-current transition group-open:-translate-y-[7px] group-open:-rotate-45" />
                </span>
              </summary>
              <div className="absolute right-0 top-[calc(100%+0.75rem)] w-64 rounded-[1.4rem] border border-white/10 bg-[#111111] p-3 shadow-card backdrop-blur">
                <nav className="flex flex-col text-sm text-ink">
                  <a href="#services" className="rounded-xl px-4 py-3 text-white transition hover:bg-white/5">
                    Services
                  </a>
                  <a
                    href="#who-we-work-with"
                    className="rounded-xl px-4 py-3 text-white transition hover:bg-white/5"
                  >
                    Who We Work With
                  </a>
                  <a href="#contact" className="rounded-xl px-4 py-3 text-white transition hover:bg-white/5">
                    Contact
                  </a>
                  <a
                    href="#contact"
                    className="mt-2 rounded-xl bg-white px-4 py-3 text-center font-medium text-black transition hover:bg-white/90"
                  >
                    Get in Touch
                  </a>
                </nav>
              </div>
            </details>
          </div>
        </div>
      </header>

      <section
        id="top"
        className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-10 px-6 pb-14 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-18 lg:pt-36"
      >
        <div className="max-w-3xl lg:pr-10">
          <div className="flex items-center gap-4">
            <p className="text-2xl font-semibold uppercase tracking-[0.24em] text-ink sm:text-3xl">
              JATIZO
            </p>
            <span className="hidden h-px flex-1 bg-gradient-to-r from-accent/50 to-transparent sm:block" />
          </div>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-ink sm:text-6xl lg:text-[4.55rem] lg:leading-[0.92]">
            Cross-border apparel development and supply chain support for the U.S. market.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-stone sm:text-xl">
            JATIZO helps emerging apparel teams develop products, coordinate suppliers, and
            execute small-batch projects with clarity and flexibility.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-accentDark px-6 py-4 text-center text-sm font-medium text-white transition hover:bg-accent"
            >
              Get in Touch
            </a>
            <a
              href="#services"
              className="rounded-full border border-line bg-paper/70 px-6 py-4 text-center text-sm font-medium text-ink transition hover:border-accent/60"
            >
              See Services
            </a>
          </div>
          <div className="mt-10 grid gap-5 border-t border-line/80 pt-6 sm:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-stone">Positioning</p>
              <p className="mt-3 text-sm leading-6 text-ink">
                Boutique operational support for apparel teams entering or testing the U.S.
                market.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-stone">Workflow</p>
              <p className="mt-3 text-sm leading-6 text-ink">
                Product development, sourcing coordination, and small-batch execution planning.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-stone">Approach</p>
              <p className="mt-3 text-sm leading-6 text-ink">
                Calm communication, realistic timelines, and flexible cross-border coordination.
              </p>
            </div>
          </div>
        </div>

        <div className="relative lg:pl-4">
          <div className="absolute -inset-5 rounded-[3rem] bg-[conic-gradient(from_140deg_at_50%_50%,rgba(255,63,112,0.28),rgba(122,44,255,0.08),rgba(255,180,197,0.14),rgba(255,63,112,0.24))] blur-2xl" />
          <div className="relative grid gap-4">
            <div className="relative ml-auto w-full max-w-[34rem] overflow-hidden rounded-[2.2rem] border border-line/80 bg-paper shadow-glow">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0)),linear-gradient(135deg,rgba(255,63,112,0.08),transparent)]" />
              <Image
                src="/textile-abstract.svg"
                alt="Abstract textile-inspired composition"
                width={1200}
                height={1400}
                className="h-[28rem] w-full object-cover sm:h-[34rem]"
                priority
              />
              <div className="absolute inset-x-5 top-5 flex items-center justify-between rounded-full border border-white/20 bg-black/25 px-4 py-3 backdrop-blur">
                <span className="text-[11px] uppercase tracking-[0.24em] text-white/88">Small-batch focused</span>
                <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_18px_rgba(255,107,138,0.9)]" />
              </div>
            </div>
            <div className="relative mr-auto w-full max-w-[25rem] rounded-[1.8rem] border border-line/80 bg-paper/95 p-6 shadow-card sm:-mt-20 sm:ml-0">
              <div className="absolute inset-0 rounded-[1.8rem] bg-[radial-gradient(circle_at_top_right,_rgba(255,63,112,0.16),_transparent_35%)]" />
              <div className="relative space-y-7">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-stone">Focus</p>
                  <p className="mt-3 text-lg leading-7 text-ink">
                    Apparel development, sourcing, and supplier coordination for practical U.S.
                    market execution.
                  </p>
                </div>
                <div className="grid gap-5 border-t border-line/80 pt-6 sm:grid-cols-2">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-stone">Responsive</p>
                    <p className="mt-2 text-sm leading-6 text-ink">Hands-on follow-through across suppliers, samples, and timelines.</p>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-stone">Flexible</p>
                    <p className="mt-2 text-sm leading-6 text-ink">Built for teams iterating through early runs, testing, and refinement.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-[4.5rem] lg:px-10 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.34fr_0.66fr] lg:items-start">
          <SectionHeading title="What we do" />
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <p className="max-w-3xl text-xl leading-9 text-stone">
            We support apparel projects that need practical execution across product development,
            sourcing, and supplier coordination. Our work is especially relevant for teams building
            or testing products for the U.S. market.
          </p>
          <div className="rounded-[1.6rem] border border-accent/25 bg-paperAlt/90 p-7 shadow-card">
            <p className="text-sm uppercase tracking-[0.22em] text-stone">Operating lens</p>
            <p className="mt-4 text-lg leading-8 text-ink">
              Boutique support with operational discipline, designed for early teams that need
              execution confidence without the weight of a large agency structure.
            </p>
          </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-[4.5rem] lg:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.34fr_0.66fr] lg:items-start">
          <SectionHeading
            title="Services"
            intro="We focus on practical support across product development, sourcing, and execution."
          />
          <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service, index) => (
            <Card
              key={service.title}
              title={service.title}
              text={service.text}
              tone={index % 2 === 0 ? "default" : "tinted"}
            />
          ))}
          </div>
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.4rem] border border-accent/30 bg-[linear-gradient(135deg,rgba(255,63,112,0.16),rgba(122,44,255,0.12))] p-6 shadow-card">
            <p className="text-xs uppercase tracking-[0.24em] text-white/70">Illustrative case</p>
            <p className="mt-3 text-lg font-medium leading-8 text-ink">
              Supported an early-stage activewear brand from product development through a
              small-batch launch within a 45-day timeline.
            </p>
          </div>
          <div className="rounded-[1.4rem] border border-line/80 bg-paper/95 p-6 shadow-card">
            <p className="text-xs uppercase tracking-[0.24em] text-stone">Typical support</p>
            <p className="mt-3 text-base leading-7 text-ink">
              Typical support included sample comments, measurement checks, trim notes, fit
              adjustments, and production coordination aligned with launch timing.
            </p>
          </div>
        </div>
      </section>

      <section id="who-we-work-with" className="mx-auto max-w-7xl px-6 py-[4.5rem] lg:px-10 lg:py-20">
        <div className="relative overflow-hidden rounded-[2.1rem] border border-line/80 bg-paper px-8 py-10 shadow-card sm:px-10 sm:py-12">
          <div className="absolute inset-y-0 right-0 w-1/3 bg-[linear-gradient(180deg,rgba(255,63,112,0.1),transparent)]" />
          <div className="grid gap-10 lg:grid-cols-[0.32fr_0.68fr] lg:items-start">
            <SectionHeading
              title="Who we work with"
              intro="JATIZO is best suited for small teams that need flexible, execution-oriented support."
            />
            <div className="relative grid gap-6 lg:grid-cols-3">
            {audiences.map((audience) => (
              <Card key={audience.title} title={audience.title} text={audience.text} tone="tinted" />
            ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-[4.5rem] lg:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.34fr_0.66fr] lg:items-start">
          <SectionHeading
            title="Why JATIZO"
            intro="We bring together product thinking, sourcing coordination, and practical execution."
          />
          <div className="grid gap-6 md:grid-cols-2">
          {reasons.map((reason) => (
            <Card key={reason.title} title={reason.title} text={reason.text} tone="default" />
          ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-[4.5rem] lg:px-10 lg:py-20">
        <div className="relative overflow-hidden rounded-[2rem] border border-accent/20 bg-[linear-gradient(135deg,#ff3f70,#7a2cff)] px-8 py-10 text-white shadow-glow sm:px-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.14),_transparent_26%),linear-gradient(135deg,rgba(255,255,255,0.06),rgba(0,0,0,0.18))]" />
          <div className="absolute -right-10 top-8 h-40 w-40 rounded-full border border-white/10" />
          <div className="absolute -right-2 top-16 h-40 w-40 rounded-full border border-white/5" />
          <div className="relative">
          <p className="text-sm uppercase tracking-[0.24em] text-white/70">Let&apos;s talk</p>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">Let&apos;s talk</h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
            If you&apos;re developing apparel products for the U.S. market or need sourcing and
            execution support, we&apos;d be happy to hear from you.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/72">
            We welcome inquiries from emerging brands, boutique sellers, and founders exploring
            product opportunities.
          </p>
          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <a
              href="mailto:jatizo.fashion@gmail.com"
              className="rounded-full bg-white px-6 py-4 text-sm font-medium text-[#b01242] transition hover:bg-[#ffe8ee]"
            >
              Contact Us
            </a>
            <a
              href="mailto:jatizo.fashion@gmail.com"
              className="text-base text-white/80 underline decoration-white/30 underline-offset-4 transition hover:text-white"
            >
              Email: jatizo.fashion@gmail.com
            </a>
          </div>
          </div>
        </div>
      </section>

      <footer className="relative border-t border-line/80 bg-[linear-gradient(180deg,rgba(23,19,29,0.98),rgba(15,10,20,1))]">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-[1fr_auto] lg:px-10">
          <div className="max-w-2xl">
            <p className="text-lg font-semibold uppercase tracking-[0.22em] text-ink sm:text-xl">
              JATIZO LLC
            </p>
            <p className="mt-5 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Cross-border apparel development and supply chain support
            </p>
            <p className="mt-5 max-w-xl text-base leading-7 text-stone">
              A calm, execution-oriented partner for emerging apparel teams building toward the U.S. market.
            </p>
          </div>
          <div className="grid gap-3 self-end text-sm text-stone lg:text-right">
            <p className="uppercase tracking-[0.18em] text-ink">California, USA</p>
            <a href="mailto:jatizo.fashion@gmail.com" className="transition hover:text-ink">
              jatizo.fashion@gmail.com
            </a>
            <a href="#top" className="pt-4 text-ink transition hover:text-accentDark">
              Back to top
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
