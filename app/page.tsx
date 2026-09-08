import Image from "next/image";

import {
  factoryCapabilities,
  heroImage,
  productCategories,
  sampleImages,
  valuePoints,
  workflowSteps,
  type FactoryCapability,
  type SiteImage
} from "./_content/home";
import { MobileNav } from "./_components/mobile-nav";
import { CopyEmailButton } from "./_components/copy-email-button";

const contactHref = "#contact";
const emailHref = "mailto:james@jatizo.biz?subject=Production%20Inquiry";

function SectionIntro({
  eyebrow,
  title,
  text
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title mt-4">{title}</h2>
      <p className="section-copy mt-5">{text}</p>
    </div>
  );
}

function SampleTile({ image, featured = false }: { image: SiteImage; featured?: boolean }) {
  return (
    <figure
      className={`group relative overflow-hidden rounded-2xl border border-line bg-paper ${
        featured ? "col-span-2 lg:row-span-2" : ""
      }`}
    >
      <div className={`relative ${featured ? "h-[34rem] lg:h-full" : "h-80 sm:h-96"}`}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={featured ? "(max-width: 640px) 100vw, 40vw" : "(max-width: 640px) 50vw, 24vw"}
          className="object-cover transition duration-500 group-hover:scale-[1.02]"
          style={{ objectPosition: image.objectPosition }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />
        <figcaption className="absolute inset-x-0 bottom-0 p-5">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">{image.label}</p>
          <p className="mt-2 text-lg font-medium text-white">{image.title}</p>
        </figcaption>
      </div>
    </figure>
  );
}

function FactoryCard({ item }: { item: FactoryCapability }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-line bg-paper">
      <div className="relative h-64 sm:h-72">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          style={{ objectPosition: item.objectPosition }}
        />
      </div>
      <div className="p-5 sm:p-6">
        <p className="eyebrow">{item.label}</p>
        <h3 className="mt-3 text-xl font-medium text-ink">{item.title}</h3>
        <p className="mt-3 leading-7 text-stone">{item.text}</p>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main id="top" className="overflow-x-hidden">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-canvas/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-6 lg:px-10">
          <a href="#top" className="flex items-center" aria-label="JATIZO home">
            <span className="wordmark">JATIZO</span>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-white/70 md:flex" aria-label="Main navigation">
            <a href="#capabilities" className="nav-link">Capabilities</a>
            <a href="#workflow" className="nav-link">How We Work</a>
            <a href="#why-jatizo" className="nav-link">Why JATIZO</a>
            <a href="#production" className="nav-link">Production</a>
          </nav>

          <a href={contactHref} className="button-light hidden md:inline-flex">
            Get in Touch
          </a>

          <MobileNav contactHref={contactHref} />
        </div>
      </header>

      <section className="relative border-b border-line pt-20 sm:pt-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_24%,rgba(154,42,72,0.24),transparent_34%)]" />
        <div className="mx-auto grid max-w-7xl gap-9 px-5 py-10 sm:gap-12 sm:px-6 sm:py-16 lg:grid-cols-[1.06fr_0.94fr] lg:items-center lg:gap-10 lg:px-10 lg:py-12">
          <div className="max-w-3xl">
            <p className="eyebrow text-accentSoft">California-based · China manufacturing network</p>
            <h1 className="mt-5 max-w-[12.5ch] text-[2.55rem] font-semibold leading-[1.02] tracking-[-0.045em] text-ink sm:max-w-3xl sm:text-6xl lg:max-w-[12.5ch] lg:text-[4rem] lg:leading-[1.01] 2xl:text-[4.4rem]">
              Women&apos;s woven development &amp; production, from sample to shipment.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-stone sm:mt-6 sm:text-xl sm:leading-8 lg:mt-5">
              California-based development and production partner backed by an experienced China
              manufacturing network. We help fashion teams develop, sample, and produce women&apos;s
              woven styles with practical flexibility from first sample through shipment.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row lg:mt-6">
              <a href="#capabilities" className="button-primary">View Capabilities</a>
              <a href={contactHref} className="button-secondary">Start a Production Conversation</a>
            </div>
          </div>

          <figure className="relative mx-auto w-full max-w-[34rem] overflow-hidden rounded-[1.75rem] border border-line bg-paper shadow-card">
            <div className="relative h-[29rem] sm:h-[34rem] lg:h-[32rem] 2xl:h-[36rem]">
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                fill
                sizes="(max-width: 1024px) 92vw, 42vw"
                className="object-cover"
                style={{ objectPosition: heroImage.objectPosition }}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/65">{heroImage.label}</p>
                <p className="mt-3 max-w-sm text-2xl font-medium leading-tight text-white">{heroImage.title}</p>
              </figcaption>
            </div>
          </figure>
        </div>
      </section>

      <section id="capabilities" className="scroll-mt-24 border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
          <SectionIntro
            eyebrow="Product capabilities"
            title="Women’s woven categories we know well"
            text="From feminine dresses and blouses to separates and light tailoring, we support woven product development across a broad contemporary women’s assortment."
          />

          <div className="mt-10 grid border-l border-t border-line sm:mt-12 sm:grid-cols-2 lg:grid-cols-5">
            {productCategories.map((category, index) => (
              <article key={category.title} className="border-b border-r border-line bg-paper/45 p-5 sm:p-6 lg:min-h-64">
                <p className="text-sm tabular-nums text-accentSoft">0{index + 1}</p>
                <h3 className="mt-8 text-xl font-medium leading-tight text-ink">{category.title}</h3>
                <p className="mt-4 text-[15px] leading-7 text-stone">{category.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-16 flex items-end justify-between gap-6 sm:mt-20 sm:gap-8">
            <div>
              <p className="eyebrow">Selected sample work</p>
              <h3 className="mt-3 text-3xl font-medium tracking-tight text-ink">Product detail before scale</h3>
            </div>
            <p className="hidden max-w-md text-right leading-7 text-stone lg:block">
              Representative woven samples showing proportion, print handling, finishing, and coordinated development.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-8 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4">
            {sampleImages.map((image, index) => (
              <SampleTile key={image.src} image={image} featured={index === 0} />
            ))}
          </div>
        </div>
      </section>

      <section id="workflow" className="scroll-mt-24 border-b border-line bg-paper/25">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
          <SectionIntro
            eyebrow="How we work"
            title="From development to shipment"
            text="JATIZO stays involved across the product cycle, helping teams move from an initial brief to production-ready garments and shipment."
          />
          <ol className="mt-10 grid border-l border-t border-line sm:mt-12 md:grid-cols-2 lg:grid-cols-3">
            {workflowSteps.map((step) => (
              <li key={step.number} className="relative border-b border-r border-line p-5 sm:p-8">
                <span className="text-sm tabular-nums text-accentSoft">{step.number}</span>
                <h3 className="mt-8 text-2xl font-medium text-ink">{step.title}</h3>
                <p className="mt-4 max-w-sm leading-7 text-stone">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:gap-10 sm:px-6 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-10 lg:py-28">
          <div>
            <p className="eyebrow">A practical first step</p>
            <h2 className="section-title mt-4">Start with the sample</h2>
          </div>
          <div className="border-l-2 border-accent pl-6 sm:pl-8">
            <p className="text-xl leading-9 text-ink sm:text-2xl sm:leading-10">
              For new relationships, sampling is often the most practical place to start. It gives
              both teams a chance to align on construction, fit, workmanship, communication, and
              production feasibility before moving into bulk orders.
            </p>
          </div>
        </div>
      </section>

      <section id="why-jatizo" className="scroll-mt-24 border-b border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
          <SectionIntro
            eyebrow="Why JATIZO"
            title="Built for clear product and production communication"
            text="A U.S.-based working relationship, connected to experienced manufacturing support in China."
          />
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:mt-12 md:grid-cols-2">
            {valuePoints.map((item) => (
              <article key={item.title} className="bg-paper p-6 sm:p-9">
                {item.stat ? <p className="text-3xl font-semibold tracking-tight text-accentSoft">{item.stat}</p> : null}
                <h3 className={`${item.stat ? "mt-6" : ""} text-2xl font-medium leading-tight text-ink`}>{item.title}</h3>
                <p className="mt-4 max-w-xl leading-7 text-stone">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="production" className="scroll-mt-24 border-b border-line bg-paper/25">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
          <SectionIntro
            eyebrow="Factory-backed execution"
            title="From development room to production floor"
            text="Our integrated network of partner factories supports the full production process, from development samples and pre-production preparation through bulk manufacturing, quality control, and shipment."
          />
          <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2">
            {factoryCapabilities.map((item) => <FactoryCard key={item.src} item={item} />)}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[linear-gradient(125deg,#f43f72_0%,#cf3798_48%,#7026e6_100%)] shadow-[0_28px_90px_rgba(174,38,113,0.28)]">
            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border border-white/15" />
            <div className="pointer-events-none absolute -right-6 top-12 h-56 w-56 rounded-full border border-white/10" />
            <div className="relative grid lg:grid-cols-[1.18fr_0.82fr] lg:items-center">
              <div className="p-7 sm:p-12 lg:p-16">
                <p className="eyebrow text-white/75">Get in touch</p>
                <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-5xl lg:text-[3.5rem]">
                  Let&apos;s build your next woven program.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
                  Send us a tech pack, reference sample, or development brief. We can start with a
                  practical conversation around sampling, construction, timing, and production fit.
                </p>
                <a
                  href={emailHref}
                  className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#a51f57] shadow-sm transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#c93699]"
                >
                  Contact Us
                </a>
              </div>
              <div className="m-5 rounded-[1.6rem] border border-white/15 bg-[#5b208f]/60 p-7 shadow-[0_20px_60px_rgba(53,8,88,0.2)] backdrop-blur-sm sm:m-8 sm:p-10 lg:ml-0 lg:p-12">
                <p className="eyebrow text-white/65">Direct contact</p>
                <div className="mt-7 space-y-2 text-lg leading-8 text-white/80">
                  <p className="text-2xl font-medium text-white">James Shen</p>
                  <p>Founder, JATIZO LLC</p>
                  <p>California, USA</p>
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a href={emailHref} className="break-all text-lg text-white underline decoration-white/35 underline-offset-4 transition hover:text-white/80">
                    james@jatizo.biz
                  </a>
                  <CopyEmailButton />
                </div>
                <a href="https://jatizo.biz" className="mt-3 block text-white/70 transition hover:text-white">
                  jatizo.biz
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-line bg-black/30">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-stone sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10">
          <p>JATIZO LLC · Women&apos;s woven development and production</p>
          <div className="flex gap-6">
            <a href={emailHref} className="transition hover:text-white">james@jatizo.biz</a>
            <a href="#top" className="transition hover:text-white">Back to top</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
