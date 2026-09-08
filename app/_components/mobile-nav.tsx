"use client";

import { useRef } from "react";

const links = [
  { href: "#capabilities", label: "Capabilities" },
  { href: "#workflow", label: "How We Work" },
  { href: "#why-jatizo", label: "Why JATIZO" },
  { href: "#production", label: "Production" }
];

export function MobileNav({ contactHref }: { contactHref: string }) {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  const closeMenu = () => {
    if (detailsRef.current) {
      detailsRef.current.open = false;
    }
  };

  return (
    <details ref={detailsRef} className="group relative md:hidden">
      <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-white/20 text-white marker:content-none">
        <span className="sr-only">Open navigation menu</span>
        <span className="flex w-[18px] flex-col gap-1.5" aria-hidden="true">
          <span className="h-px w-full bg-current transition group-open:translate-y-[7px] group-open:rotate-45" />
          <span className="h-px w-full bg-current transition group-open:opacity-0" />
          <span className="h-px w-full bg-current transition group-open:-translate-y-[7px] group-open:-rotate-45" />
        </span>
      </summary>
      <nav
        className="absolute right-0 top-[calc(100%+0.75rem)] flex w-64 flex-col rounded-2xl border border-white/10 bg-canvas p-3 shadow-card"
        aria-label="Mobile navigation"
      >
        {links.map((link) => (
          <a key={link.href} href={link.href} className="mobile-nav-link" onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <a
          href={contactHref}
          className="mt-2 rounded-xl bg-white px-4 py-3 text-center text-sm font-medium text-black"
          onClick={closeMenu}
        >
          Get in Touch
        </a>
      </nav>
    </details>
  );
}
