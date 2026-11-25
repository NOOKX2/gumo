"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { NAV_LINKS, TIKTOK_SHOP_URL } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color] duration-300 ${
        scrolled || open
          ? "border-b border-line bg-cream-mist/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="relative mx-auto flex h-16 w-full items-center md:h-20">
        <a
          href="#home"
          className="relative ml-3 block h-9 w-9 shrink-0 md:ml-5 md:h-11 md:w-11 lg:ml-6"
          aria-label="GUMO home"
        >
          <Logo variant="mark" priority />
        </a>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-muted transition-colors hover:text-accent-deep"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3 pr-3 md:pr-5 lg:pr-6">
          <a
            href={TIKTOK_SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 border border-accent-deep bg-accent-deep px-4 py-2 text-sm text-cream-mist transition-colors hover:bg-accent sm:inline-flex"
          >
            Shop Now
            <span aria-hidden>↗</span>
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center border border-line text-accent-deep lg:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 block h-px w-full bg-current transition-transform ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-px w-full bg-current transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-full bg-current transition-transform ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-line bg-cream-mist lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="border-b border-line py-3 text-base text-accent-deep"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={TIKTOK_SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-1.5 bg-accent-deep px-4 py-3 text-sm text-cream-mist"
              onClick={() => setOpen(false)}
            >
              Shop Now
              <span aria-hidden>↗</span>
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
