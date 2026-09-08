"use client";

import { useState } from "react";

const email = "james@jatizo.biz";

export function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={copyEmail}
      className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/75 transition hover:border-accentSoft hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentSoft"
      aria-live="polite"
    >
      {copied ? "Email copied" : "Copy email"}
    </button>
  );
}
