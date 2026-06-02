import Image from "next/image";

import {
  capabilityCards,
  capabilityTags,
  heroImage,
  processSteps,
  proofItems,
  sampleCategories,
  type SiteImage
} from "./_content/home";
import { InfoCard } from "./_components/info-card";
import { SectionHeading } from "./_components/section-heading";

function StyleTile({ image }: { image: SiteImage }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[1.8rem] border border-line/80 bg-paper/95 shadow-card ${image.className ?? ""}`.trim()}
    >
      <div className="relative h-[22rem] md:h-full">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 768px) 72vw, (max-width: 1200px) 33vw, 24vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          style={{ objectPosition: image.objectPosition }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(7,5,10,0.72))]" />
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <p className="text-[11px] uppercase tracking-[0.22em] text-white/70">{image.label}</p>
          <h3 className="mt-2 text-xl font-medium tracking-tight text-white">{image.title}</h3>
        </div>
      </div>
    </article>
  );
}

function ProcessCard({ step }: { step: SiteImage }) {
  return (
    <article className="overflow-hidden rounded-[1.7rem] border border-line/80 bg-paper/95 shadow-card">
      <div className="relative h-64">
        <Image
          src={step.src}
          alt={step.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 25vw"
          className="object-cover"
          style={{ objectPosition: step.objectPosition }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(9,7,12,0.62))]" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="text-[11px] uppercase tracking-[0.22em] text-white/72">{step.label}</p>
          <h3 className="mt-2 text-2xl font-medium tracking-tight text-white">{step.title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-base leading-7 text-stone">{step.note}</p>
      </div>
    </article>
  );
}


function SampleCategoryBlock({
  title,
  intro,
  images
}: {
  title: string;
  intro: string;
  images: SiteImage[];
}) {
  const isMultiImage = images.length > 1;

  return (
    <article className="rounded-[1.9rem] border border-line/80 bg-paper/95 p-6 shadow-card sm:p-8">
      <div className="flex flex-col gap-3 sm:max-w-xl">
        <p className="text-xs uppercase tracking-[0.22em] text-stone">Sample category</p>
        <h3 className="text-3xl font-semibold tracking-tight text-ink">{title}</h3>
        <p className="text-base leading-7 text-stone">{intro}</p>
      </div>

      <div className={`mt-6 grid gap-4 ${isMultiImage ? "sm:grid-cols-2 xl:grid-cols-4" : "sm:max-w-[22rem]"}`}>
        {images.map((image) => (
          <StyleTile key={image.src} image={image} />
        ))}
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top,_rgba(255,63,112,0.24),_transparent_58%)]" />
      <div className="absolute left-[-8rem] top-20 -z-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute right-[-6rem] top-[26rem] -z-10 h-80 w-80 rounded-full bg-[#6e44ff]/20 blur-3xl" />
      <div className="absolute inset-x-0 top-[48rem] -z-10 h-[26rem] bg-[linear-gradient(180deg,transparent_0%,rgba(255,255,255,0.03)_35%,transparent_100%)]" />

      <header className="fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-black/90 backdrop-blur">
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
            <a href="#styles" className="transition hover:text-white">
              Samples
            </a>
            <a href="#capabilities" className="transition hover:text-white">
              Capabilities
            </a>
            <a href="#process" className="transition hover:text-white">
              Support
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
                  <a href="#styles" className="rounded-xl px-4 py-3 text-white transition hover:bg-white/5">
                    Samples
                  </a>
                  <a href="#capabilities" className="rounded-xl px-4 py-3 text-white transition hover:bg-white/5">
                    Capabilities
                  </a>
                  <a href="#process" className="rounded-xl px-4 py-3 text-white transition hover:bg-white/5">
                    Support
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
        className="mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-14 px-6 pb-16 pt-32 lg:grid-cols-[0.94fr_1.06fr] lg:px-10 lg:pb-20 lg:pt-36"
      >
        <div className="max-w-3xl lg:pr-10">
          <div className="flex items-center gap-4">
            <p className="text-2xl font-semibold uppercase tracking-[0.24em] text-ink sm:text-3xl">
              JATIZO
            </p>
            <span className="hidden h-px flex-1 bg-gradient-to-r from-accent/50 to-transparent sm:block" />
          </div>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-ink sm:text-6xl lg:text-[4.4rem] lg:leading-[0.94]">
Woven sample development and production support for retail-facing teams.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone sm:text-xl">
            JATIZO leads with sample garments as proof of product judgment, using only a
            small amount of factory imagery to confirm the team can support execution through
            packing and shipment readiness.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-accentDark px-6 py-4 text-center text-sm font-medium text-white transition hover:bg-accent"
            >
              Get in Touch
            </a>
            <a
              href="#styles"
              className="rounded-full border border-line bg-paper/70 px-6 py-4 text-center text-sm font-medium text-ink transition hover:border-accent/60"
            >
              See Sample Proof
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {capabilityTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/78"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-5 border-t border-line/80 pt-6 sm:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-stone">Product lens</p>
              <p className="mt-3 text-sm leading-6 text-ink">
                Woven categories with clean styling, balanced proportions, and retail-ready
                presentation.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-stone">Sample proof</p>
              <p className="mt-3 text-sm leading-6 text-ink">
                The strongest evidence stays in the garments: proportion, drape, print control,
                and category clarity.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-stone">Selected support</p>
              <p className="mt-3 text-sm leading-6 text-ink">
                Factory and packing images are intentionally limited so they support the sample
                story instead of dominating it.
              </p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[37rem] lg:pl-4">
          <div className="absolute -inset-4 rounded-[3rem] bg-[conic-gradient(from_140deg_at_50%_50%,rgba(255,63,112,0.24),rgba(122,44,255,0.10),rgba(255,180,197,0.16),rgba(255,63,112,0.24))] blur-2xl" />
          <div className="relative overflow-hidden rounded-[2.4rem] border border-line/80 bg-paper shadow-glow">
            <div className="relative h-[34rem] sm:h-[40rem]">
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                fill
                sizes="(max-width: 1024px) 92vw, 42vw"
                className="object-cover"
                style={{ objectPosition: heroImage.objectPosition }}
                priority
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(7,6,10,0.08),rgba(5,4,8,0.62))]" />
              <div className="absolute inset-x-5 top-5 flex items-center justify-between rounded-full border border-white/15 bg-black/25 px-4 py-3 backdrop-blur">
                <span className="text-[11px] uppercase tracking-[0.24em] text-white/88">{heroImage.label}</span>
                <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_18px_rgba(255,107,138,0.9)]" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <div className="max-w-lg rounded-[1.7rem] border border-white/10 bg-black/35 p-6 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.22em] text-white/60">Sample focus</p>
                  <h2 className="mt-3 text-2xl font-medium leading-tight text-white sm:text-[2rem]">
                    {heroImage.title}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-white/76">{heroImage.note}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="styles" className="mx-auto max-w-7xl px-6 py-[4.5rem] lg:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.34fr_0.66fr] lg:items-end">
          <SectionHeading
            title="Sample proof by category"
            intro="The homepage now separates sample proof into shirts, trousers, tailoring, and coordinated looks so capability is read through garments first and immediately."
          />
          <div className="rounded-[1.6rem] border border-accent/20 bg-paperAlt/80 p-7 shadow-card">
            <p className="text-sm uppercase tracking-[0.22em] text-stone">Why this leads</p>
            <p className="mt-4 text-lg leading-8 text-ink">
              Sample garments should do most of the persuasive work on the homepage. The mix here
              shows silhouette control, print handling, and retail-facing balance before the user
              ever reaches factory proof.
            </p>
          </div>
        </div>

        <div className="mt-10 space-y-6">
          {sampleCategories.map((category) => (
            <SampleCategoryBlock
              key={category.title}
              title={category.title}
              intro={category.intro}
              images={category.images}
            />
          ))}
        </div>
      </section>

      <section id="capabilities" className="mx-auto max-w-7xl px-6 py-[4.5rem] lg:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.34fr_0.66fr] lg:items-start">
          <SectionHeading
            title="What we make"
            intro="The sample mix points to a clear woven capability set: tops, trousers, and light tailoring with retail-facing proportion and finish."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {capabilityCards.map((item, index) => (
              <InfoCard
                key={item.title}
                title={item.title}
                text={item.text}
                tone={index % 2 === 0 ? "default" : "tinted"}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[1.6rem] border border-accent/30 bg-[linear-gradient(135deg,rgba(255,63,112,0.18),rgba(122,44,255,0.14))] p-7 shadow-card">
            <p className="text-xs uppercase tracking-[0.24em] text-white/68">Best suited for</p>
            <p className="mt-4 text-xl leading-9 text-ink">
              Emerging brands, private-label partners, and retail-facing teams that need woven
              product support with more realism and structure than a purely trading-led workflow.
            </p>
          </div>
          <div className="rounded-[1.6rem] border border-line/80 bg-paper/95 p-7 shadow-card">
            <p className="text-xs uppercase tracking-[0.24em] text-stone">Working style</p>
            <p className="mt-4 text-lg leading-8 text-ink">
              The homepage should feel sample-first. Production support still matters, but it now
              appears as a supporting layer rather than the dominant visual story.
            </p>
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-6 py-[4.5rem] lg:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.34fr_0.66fr] lg:items-end">
          <SectionHeading
            title="Selected factory support"
            intro="Only a few factory visuals are kept. They exist to confirm execution depth while the sample garments remain the main proof of capability."
          />
          <div className="rounded-[1.6rem] border border-line/80 bg-paper/95 p-7 shadow-card">
            <p className="text-sm uppercase tracking-[0.22em] text-stone">Support role</p>
            <p className="mt-4 text-lg leading-8 text-ink">
              These images are intentionally selective. They reassure the viewer that sample-led
              product work is backed by real line coordination and shipment readiness, without
              turning the homepage into a factory tour.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {processSteps.map((step) => (
            <ProcessCard key={step.src} step={step} />
          ))}
        </div>

      </section>

      <section className="mx-auto max-w-7xl px-6 py-[4.5rem] lg:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.34fr_0.66fr] lg:items-start">
          <SectionHeading
            title="Why JATIZO"
            intro="Anonymous proof points from the supplied introduction sheet now sit underneath the sample-led story, reinforcing category credibility without overexplaining the factory side."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {proofItems.map((item, index) => (
              <InfoCard
                key={item.title}
                stat={item.stat}
                title={item.title}
                text={item.text}
                tone={index === 0 ? "dark" : index % 2 === 0 ? "default" : "tinted"}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-[4.5rem] lg:px-10 lg:py-20">
        <div className="relative overflow-hidden rounded-[2rem] border border-accent/20 bg-[linear-gradient(135deg,#ff3f70,#7a2cff)] px-8 py-10 text-white shadow-glow sm:px-12 sm:py-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.14),_transparent_26%),linear-gradient(135deg,rgba(255,255,255,0.06),rgba(0,0,0,0.18))]" />
          <div className="absolute -right-10 top-8 h-40 w-40 rounded-full border border-white/10" />
          <div className="absolute -right-2 top-16 h-40 w-40 rounded-full border border-white/5" />
          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-white/70">Let&apos;s talk</p>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                Let&apos;s build a stronger woven product story.
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/82">
                If you&apos;re shaping woven products for the U.S. market or need a development
                partner who can think from silhouette to shipment, we&apos;d be happy to hear about
                your program.
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
                  className="text-base text-white/82 underline decoration-white/30 underline-offset-4 transition hover:text-white"
                >
                  Email: jatizo.fashion@gmail.com
                </a>
              </div>
            </div>

            <div className="rounded-[1.6rem] border border-white/15 bg-black/15 p-6 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.24em] text-white/64">Contact frame</p>
              <div className="mt-5 space-y-4 text-sm leading-6 text-white/80">
                <p>California, USA</p>
                <p>Fashion-first product presentation.</p>
                <p>Woven category focus.</p>
                <p>Selective factory-backed execution and shipment support.</p>
              </div>
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
              Fashion-first woven product support with execution depth.
            </p>
            <p className="mt-5 max-w-xl text-base leading-7 text-stone">
              A woven apparel development and production partner for retail-facing teams that need
              product clarity and factory-backed follow-through.
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
