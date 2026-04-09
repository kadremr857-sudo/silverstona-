"use client";

import { useEffect, useRef } from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
import {
  Monitor,
  Code2, Cloud, Leaf, Zap, MessageSquare, ShieldCheck,
  ArrowRight, Brain, Workflow,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────
   Pulsing Badge – Live AI Indicator
   base: secondary_container (#9d05ff)
   ring: secondary (#dfb7ff) pulsing 0→100% opacity
   ───────────────────────────────────────────────────────── */
function PulsingBadge({ label }: { label: string }) {
  return (
    <div className="pulsing-badge">
      <span className="badge-dot" />
      <span
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.625rem",
          fontWeight: 600,
          textTransform: "uppercase" as const,
          letterSpacing: "0.1em",
          color: "#dfb7ff",
        }}
      >
        {label}
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Bento Card — Obsidian Forge version
   Surface: surface_container_low (#1c1b1b)
   No hard borders — tonal transitions define space
   Radius: xl (1.75rem inner, 2rem wrapper)
   ───────────────────────────────────────────────────────── */
interface BentoCardProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  features?: string[];
  badge?: string;
  liveAI?: boolean;
  accentClass?: string;
  children?: React.ReactNode;
  className?: string;
  delay?: string;
}

function BentoCard({
  icon, title, description, features, badge, liveAI,
  accentClass = "accent-cyan", children, className, delay,
}: BentoCardProps) {
  return (
    <div
      className={cn("service-card reveal list-none", className)}
      style={delay ? { transitionDelay: delay } : undefined}
    >
      <div className="relative h-full rounded-[2rem] border-[0.75px] border-white/[0.03] p-2">
        <GlowingEffect spread={44} glow={true} disabled={false} proximity={72} inactiveZone={0.01} borderWidth={3} />
        <div className={cn("bento-card relative h-full rounded-[1.75rem] p-10 flex flex-col justify-between overflow-hidden", accentClass)}>

          {/* Badge – surface_container_highest nested element */}
          {badge && (
            <span
              className="absolute top-5 right-5 label-tag px-3 py-1.5 rounded-full"
              style={{ background: "rgba(53,53,52,0.8)", color: "#b9cacb" }}
            >
              {badge}
            </span>
          )}

          {/* Live AI badge */}
          {liveAI && (
            <div className="absolute top-5 right-5">
              <PulsingBadge label="Live AI" />
            </div>
          )}

          <div className="relative z-10">
            {/* Icon housed in elevated surface_container_highest */}
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-7"
              style={{ background: "rgba(53,53,52,0.6)" }}
            >
              {icon}
            </div>

            <h4 className="font-headline text-2xl font-bold mb-4" style={{ color: "#e5e2e1", letterSpacing: "-0.02em" }}>
              {title}
            </h4>

            {description && (
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#b9cacb" }}>
                {description}
              </p>
            )}

            {/* Feature list — no dividers, just vertical spacing */}
            {features && (
              <ul className="space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm" style={{ color: "#b9cacb" }}>
                    {/* Laser sight accent dot */}
                    <span className="laser-dot flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Feature Cell – Why-Us grid
   No dividers: alternating surface tones + generous gutters
   ───────────────────────────────────────────────────────── */
interface FeatureCellProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: string;
  index: number;
}

function FeatureCell({ icon, title, description, delay, index }: FeatureCellProps) {
  return (
    <div
      className="reveal feature-cell"
      style={{
        transitionDelay: delay,
        /* alternating tonal bg per spec — no dividers */
        background: index % 2 === 0 ? "#1c1b1b" : "#131313",
      }}
    >
      {/* Icon in surface_container_highest */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
        style={{ background: "rgba(53,53,52,0.7)" }}
      >
        {icon}
      </div>
      <h5
        className="font-headline text-lg font-bold mb-3"
        style={{ color: "#e5e2e1", letterSpacing: "-0.01em" }}
      >
        {title}
      </h5>
      <p className="text-sm leading-relaxed" style={{ color: "#b9cacb" }}>
        {description}
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Main Page
   ───────────────────────────────────────────────────────── */
export default function Home() {
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const iconOpenRef   = useRef<SVGSVGElement>(null);
  const iconCloseRef  = useRef<SVGSVGElement>(null);
  const hamburgerRef  = useRef<HTMLButtonElement>(null);

  /* Scroll reveal */
  useEffect(() => {
    const revealEls = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
        });
      },
      { threshold: 0.08 }
    );
    revealEls.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  /* Navbar ambient glow on scroll */
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const onScroll = () => {
      if (navbar) {
        navbar.style.boxShadow = window.scrollY > 50
          ? "0 0 60px rgba(0,240,255,0.08), 0 1px 0 rgba(59,73,75,0.15)"
          : "0 0 40px rgba(0,240,255,0.04)";
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function closeMobile() {
    mobileMenuRef.current?.classList.remove("open");
    iconOpenRef.current?.classList.remove("hidden");
    iconCloseRef.current?.classList.add("hidden");
    hamburgerRef.current?.setAttribute("aria-expanded", "false");
  }

  function toggleMobile() {
    const isOpen = mobileMenuRef.current?.classList.toggle("open");
    iconOpenRef.current?.classList.toggle("hidden", !!isOpen);
    iconCloseRef.current?.classList.toggle("hidden", !isOpen);
    hamburgerRef.current?.setAttribute("aria-expanded", String(!!isOpen));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form    = e.currentTarget;
    const name    = (form.elements.namedItem("name")    as HTMLInputElement)?.value.trim();
    const email   = (form.elements.namedItem("email")   as HTMLInputElement)?.value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value.trim();
    const success = document.getElementById("form-success");
    const error   = document.getElementById("form-error");
    if (!name || !email || !message) {
      error?.classList.remove("hidden");
      success?.classList.add("hidden");
      return;
    }
    error?.classList.add("hidden");
    success?.classList.remove("hidden");
    form.reset();
  }

  const navLinks = [["#hero", "Ana Sayfa"], ["#services", "Hizmetler"], ["#why-us", "Neden Biz?"], ["#contact", "İletişim"]];

  return (
    <>
      {/* ══════════════════ NAVIGATION ══════════════════ */}
      {/* Glassmorphism: surface (#131313) at 60% + blur(20px) */}
      <header
        id="navbar"
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{ background: "rgba(14,14,14,0.65)" }}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <a href="#hero" className="flex items-center gap-3 group">
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center transition-all group-hover:scale-105"
                style={{ background: "linear-gradient(135deg, #00f0ff, #00dbe9)" }}
              >
                <svg className="w-4 h-4" fill="none" stroke="#00363a" viewBox="0 0 24 24" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              {/* Chrome gradient on logo text */}
              <span className="font-headline text-xl font-bold chrome-text tracking-tight">
                Silverstone AI
              </span>
            </a>

            {/* Desktop nav — labels uppercase per spec */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="label-tag transition-colors duration-300 hover:text-[#00f0ff]"
                    style={{ color: "#b9cacb" }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Glow CTA */}
            <a href="#contact" className="hidden md:inline-flex btn-glow">
              Hemen Başlayalım
            </a>

            {/* Hamburger */}
            <button
              ref={hamburgerRef}
              id="hamburger"
              onClick={toggleMobile}
              className="md:hidden p-2 rounded-xl transition-colors"
              style={{ color: "#b9cacb" }}
              aria-label="Menüyü aç/kapat"
              aria-expanded="false"
              aria-controls="mobile-menu"
            >
              <svg ref={iconOpenRef} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg ref={iconCloseRef} className="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile menu — glass panel */}
          <div
            ref={mobileMenuRef}
            id="mobile-menu"
            className="glass-panel rounded-2xl mb-2 overflow-hidden"
            role="navigation"
            aria-label="Mobil navigasyon"
          >
            <ul className="flex flex-col gap-1 p-4">
              {navLinks.map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="block px-4 py-3 rounded-xl label-tag transition-all hover:bg-white/5 hover:text-[#00f0ff]"
                    onClick={closeMobile}
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a href="#contact" onClick={closeMobile} className="block text-center btn-glow w-full">
                  Hemen Başlayalım
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* ══════════════════ HERO ══════════════════ */}
      <section id="hero" className="hero-section min-h-screen flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-28 relative z-10 grid lg:grid-cols-2 gap-20 items-center w-full">

          {/* Left */}
          <div>
            {/* Live AI Badge — pulsing secondary_container */}
            <div
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-8 animate-fade-in"
              style={{ background: "rgba(19,19,19,0.6)", backdropFilter: "blur(20px)", border: "1px solid rgba(59,73,75,0.15)" }}
            >
              <PulsingBadge label="Dijital Dönüşümde Güvenilir Ortağınız" />
            </div>

            {/* Display headline — Plus Jakarta Sans, -0.04em tracking */}
            <h1
              className="font-headline font-extrabold leading-none mb-6 chrome-text animate-fade-up"
              style={{ fontSize: "clamp(2.8rem, 6vw, 4rem)", letterSpacing: "-0.04em" }}
            >
              Geleneksel İşletmeleri Geleceğin Teknolojisine Bağlıyoruz
            </h1>

            {/* Sub — on_surface_variant, never pure white */}
            <p className="text-xl leading-relaxed mb-10 max-w-xl animate-fade-up delay-150" style={{ color: "#b9cacb" }}>
              Web Tasarım, n8n Otomasyonları ve AI Çözümleri ile işletmenizi dijital çağa adım atın.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-14 animate-fade-up delay-300">
              <a href="#contact" className="btn-glow">
                Hemen Başlayalım
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#services" className="btn-ghost">
                Hizmetlerimizi Keşfet
              </a>
            </div>

            {/* Stats — glass panel, tonal surface */}
            <div
              className="flex items-center gap-8 py-5 px-8 rounded-2xl animate-fade-up delay-450"
              style={{ background: "rgba(28,27,27,0.6)", backdropFilter: "blur(20px)", border: "1px solid rgba(59,73,75,0.12)" }}
            >
              {[["50+", "Tamamlanan Proje"], ["30+", "Mutlu Müşteri"], ["3x", "Daha Hızlı Süreç"]].map(([num, label], i) => (
                <div
                  key={label}
                  className={cn("text-center", i > 0 && "border-l border-[rgba(59,73,75,0.2)] pl-8")}
                >
                  {/* Plus Jakarta Sans for numbers */}
                  <div className="font-headline text-2xl font-bold" style={{ color: "#00dbe9" }}>{num}</div>
                  <div className="label-tag mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Floating Visual Card */}
          <div className="relative hidden lg:block animate-float" aria-hidden="true">
            {/* Ambient glow halo behind card */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{ boxShadow: "0 0 80px rgba(0,240,255,0.06), 0 0 160px rgba(157,5,255,0.04)" }}
            />

            <div
              className="relative aspect-square rounded-3xl overflow-hidden"
              style={{ background: "rgba(19,19,19,0.60)", backdropFilter: "blur(20px)", border: "1px solid rgba(59,73,75,0.12)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,240,255,0.05)] via-transparent to-[rgba(157,5,255,0.06)]" />

              <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 p-10">
                {/* Icon cluster — nested in surface_container_highest */}
                <div className="grid grid-cols-3 gap-5">
                  {[
                    { icon: <Monitor className="w-7 h-7 text-[#00f0ff]" />, label: "Web Tasarım" },
                    { icon: <Workflow className="w-7 h-7 text-[#dfb7ff]" />,   label: "Otomasyon" },
                    { icon: <Brain    className="w-7 h-7 text-[#00dbe9]" />, label: "AI" },
                  ].map(({ icon, label }) => (
                    <div
                      key={label}
                      className="w-20 h-20 rounded-2xl flex flex-col items-center justify-center gap-2 transition-transform hover:scale-105 cursor-default"
                      style={{ background: "rgba(53,53,52,0.7)" }}
                      title={label}
                    >
                      {icon}
                      <span className="label-tag">{label}</span>
                    </div>
                  ))}
                </div>

                {/* Mini stat card — surface_container_highest nested */}
                <div
                  className="w-full rounded-2xl px-6 py-4 flex items-center justify-between"
                  style={{ background: "rgba(53,53,52,0.6)", border: "1px solid rgba(59,73,75,0.12)" }}
                >
                  <div>
                    <p className="label-tag mb-1">Proje başarı oranı</p>
                    <p className="font-headline text-2xl font-bold" style={{ color: "#00f0ff" }}>%98+</p>
                  </div>
                  <div className="w-20 h-1.5 rounded-full overflow-hidden" style={{ background: "#353534" }}>
                    <div
                      className="h-full rounded-full"
                      style={{ width: "98%", background: "linear-gradient(90deg, #00f0ff, #00dbe9)" }}
                    />
                  </div>
                </div>

                {/* Availability — green ambient pill */}
                <div
                  className="flex items-center gap-2.5 px-5 py-2.5 rounded-full"
                  style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.15)" }}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow inline-block" />
                  <span className="label-tag" style={{ color: "#34d399" }}>Şu an müsaitiz</span>
                </div>
              </div>
            </div>

            {/* Decorative ambient blobs */}
            <div
              className="absolute -top-8 -right-8 w-28 h-28 rounded-full pointer-events-none"
              style={{ background: "rgba(0,240,255,0.12)", filter: "blur(40px)", animation: "pulseSlow 4s ease-in-out infinite" }}
            />
            <div
              className="absolute -bottom-12 -left-12 w-44 h-44 rounded-full pointer-events-none"
              style={{ background: "rgba(157,5,255,0.07)", filter: "blur(50px)" }}
            />
          </div>
        </div>
      </section>

      {/* ══════════════════ SERVICES – BENTO GRID ══════════════════ */}
      {/*
          Obsidian Forge Bento modularism:
          – surface_container_low (#1c1b1b) cards
          – Intentional asymmetry via varying col-spans
          – No dividers inside cards; use body-sm spacing (1.5–2rem)
      */}
      <section id="services" className="py-28" style={{ background: "#0e0e0e" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Section header */}
          <div className="text-center mb-20 reveal">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="laser-dot" />
              <span className="label-tag" style={{ color: "#00f0ff" }}>Uzmanlık Alanlarımız</span>
            </div>
            <h2
              className="font-headline font-bold chrome-text"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 3rem)", letterSpacing: "-0.03em" }}
            >
              İşinizi Büyüten Çözümler
            </h2>
          </div>

          {/* Bento grid — asymmetric layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">

            {/* Web Tasarım — wide (8 cols) */}
            <BentoCard
              icon={<Monitor className="w-7 h-7 text-[#00f0ff]" />}
              title="Web Tasarım"
              features={["Özel tasarım & kodlama", "SEO optimizasyonu", "Performans odaklı mimari"]}
              accentClass="accent-cyan"
              className="md:col-span-8"
              delay="0s"
            />

            {/* n8n — narrow (4 cols) */}
            <BentoCard
              icon={<Workflow className="w-7 h-7 text-[#dfb7ff]" />}
              title="n8n Otomasyonları"
              description="İş akışlarınızı otonom hale getirin. CRM, E-posta ve veri tabanlarınızı kusursuz bir döngüde birleştiriyoruz."
              accentClass="accent-purple"
              className="md:col-span-4"
              delay="0.08s"
            >
              {/* Tonal separator — no divider line, just vertical spacing */}
              <div className="mt-8 pt-2">
                <span className="label-tag" style={{ color: "#dfb7ff" }}>Yüksek Verimlilik</span>
              </div>
            </BentoCard>

            {/* AI Agents — full width (12 cols) with visual panel */}
            <div
              className="service-card reveal list-none md:col-span-12"
              style={{ transitionDelay: "0.16s" }}
            >
              <div className="relative h-full rounded-[2rem] border-[0.75px] border-white/[0.03] p-2">
                <GlowingEffect spread={60} glow={true} disabled={false} proximity={80} inactiveZone={0.01} borderWidth={3} />
                <div
                  className="bento-card accent-teal relative h-full rounded-[1.75rem] p-10 flex flex-col md:flex-row gap-12 items-center overflow-hidden"
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,240,255,0.03)] via-transparent to-[rgba(157,5,255,0.03)] pointer-events-none" />

                  <div className="flex-1 relative z-10">
                    {/* Live AI badge */}
                    <div className="mb-6">
                      <PulsingBadge label="Live AI System" />
                    </div>

                    {/* Icon */}
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                      style={{ background: "rgba(53,53,52,0.6)" }}
                    >
                      <Brain className="w-7 h-7 text-[#00dbe9]" />
                    </div>

                    <h3
                      className="font-headline font-bold mb-4"
                      style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", letterSpacing: "-0.03em", color: "#e5e2e1" }}
                    >
                      AI Ajanlar
                    </h3>
                    <p className="leading-relaxed mb-8 max-w-xl" style={{ color: "#b9cacb" }}>
                      İşletmenize özel AI chatbotlar ve veri analiz motorları geliştiriyoruz. Dokümanlarınızı anlayan ve müşterilerinizle gerçek zamanlı konuşan sistemler.
                    </p>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 font-semibold transition-all group/btn hover:gap-3"
                      style={{ color: "#00f0ff" }}
                    >
                      Hemen Başlayın
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </div>

                  {/* Visual panel — glass nested in bento card */}
                  <div
                    className="w-full md:w-2/5 aspect-[4/3] rounded-2xl overflow-hidden flex flex-col gap-3 p-6 relative z-10"
                    style={{ background: "rgba(14,14,14,0.65)", backdropFilter: "blur(20px)", border: "1px solid rgba(59,73,75,0.12)" }}
                  >
                    <div className="label-tag mb-2" style={{ color: "#00f0ff" }}>AI Ajan Demo</div>

                    {/* Chat bubbles — no dividers */}
                    {[
                      { role: "user", text: "Fatura durumum nedir?" },
                      { role: "ai",   text: "Son faturanız 3.450 ₺ — 5 Nisan'da ödendi ✓" },
                      { role: "user", text: "Teşekkür ederim!" },
                    ].map((msg, i) => (
                      <div key={i} className={cn("flex", msg.role === "user" ? "justify-end" : "justify-start")}>
                        <span
                          className="px-3.5 py-2 rounded-2xl text-[11px] leading-snug max-w-[80%]"
                          style={
                            msg.role === "ai"
                              ? { background: "rgba(0,240,255,0.10)", color: "#00f0ff", border: "1px solid rgba(0,240,255,0.15)" }
                              : { background: "rgba(53,53,52,0.8)", color: "#b9cacb" }
                          }
                        >
                          {msg.text}
                        </span>
                      </div>
                    ))}

                    {/* Typing indicator */}
                    <div className="flex justify-start mt-auto">
                      <div
                        className="px-4 py-2.5 rounded-2xl flex items-center gap-1"
                        style={{ background: "rgba(0,240,255,0.08)", border: "1px solid rgba(0,240,255,0.12)" }}
                      >
                        {[0, 1, 2].map(i => (
                          <span
                            key={i}
                            className="w-1.5 h-1.5 rounded-full animate-pulse-slow"
                            style={{ background: "#00f0ff", animationDelay: `${i * 0.2}s` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ WHY US ══════════════════ */}
      {/* surface sits against surface_lowest — tonal transition, no line */}
      <section id="why-us" className="py-28" style={{ background: "#131313" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Header — intentional asymmetry */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl reveal">
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="laser-dot" />
                <span className="label-tag" style={{ color: "#00f0ff" }}>Neden Silverstone?</span>
              </div>
              <h2
                className="font-headline font-bold chrome-text"
                style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", letterSpacing: "-0.03em" }}
              >
                Farkımızı Hissedin
              </h2>
            </div>

            {/* Vertical rule — ghost border, never full-opacity */}
            <p
              className="reveal text-sm leading-relaxed max-w-sm pl-6"
              style={{
                color: "#b9cacb",
                borderLeft: "1px solid rgba(59,73,75,0.15)",
                transitionDelay: "0.1s",
              }}
            >
              Sıradan yazılım ajanslarından farklıyız. Biz işletmenizi geleceğe hazırlayan teknoloji ortaklarınızız.
            </p>
          </div>

          {/* 3-col grid — no dividers, alternating surface tones */}
          <div className="grid grid-cols-1 md:grid-cols-3 rounded-[2rem] overflow-hidden">
            {[
              { icon: <Code2 className="w-6 h-6 text-[#00f0ff]" />, title: "Özel Kodlama",         desc: "Hazır şablonlar yerine, markanızın DNA'sına uygun özel çözümler üretiyoruz." },
              { icon: <Cloud className="w-6 h-6 text-[#dfb7ff]" />, title: "Profesyonel Barındırma", desc: "Dünya standartlarında cloud altyapısı ile %99.9 uptime garantisi." },
              { icon: <Leaf  className="w-6 h-6 text-[#00dbe9]" />, title: "Sürdürülebilir Çözümler", desc: "Gelecekte de değerini koruyan, genişleyebilir teknolojik mimari." },
              { icon: <Zap   className="w-6 h-6 text-[#00f0ff]" />, title: "Hızlı Teslimat",       desc: "Agile süreç yönetimi ile projelerinizi tam zamanında yayına alıyoruz." },
              { icon: <MessageSquare className="w-6 h-6 text-[#dfb7ff]" />, title: "Şeffaf İletişim", desc: "Projenin her aşamasında düzenli raporlama ve açık diyalog." },
              { icon: <ShieldCheck   className="w-6 h-6 text-[#00dbe9]" />, title: "Güvenli & Bakımlı", desc: "7/24 güvenlik izleme ve sürekli teknik destek ile içiniz rahat olsun." },
            ].map(({ icon, title, desc }, i) => (
              <FeatureCell
                key={title}
                icon={icon}
                title={title}
                description={desc}
                delay={`${i * 0.05}s`}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ CONTACT ══════════════════ */}
      {/* Back to surface_lowest — tonal transition */}
      <section id="contact" className="py-28" style={{ background: "#0e0e0e" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">

            {/* Info column */}
            <div className="reveal">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="laser-dot" />
                <span className="label-tag" style={{ color: "#00f0ff" }}>İletişim</span>
              </div>

              <h2
                className="font-headline font-extrabold chrome-text mb-6"
                style={{ fontSize: "clamp(2.4rem, 5vw, 3.5rem)", letterSpacing: "-0.04em" }}
              >
                Projenizi Konuşalım
              </h2>

              <p className="text-lg leading-relaxed mb-12" style={{ color: "#b9cacb" }}>
                Hayalinizdeki projeyi gerçeğe dönüştürmek için ilk adımı atın. Ekibimiz sizinle iletişime geçmek için sabırsızlanıyor.
              </p>

              {/* Contact items — no dividers, generous 2rem gutters */}
              <div className="space-y-8">
                {[
                  {
                    label: "E-Posta", value: "info@silverstoneai.com", href: "mailto:info@silverstoneai.com",
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="#00f0ff" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                  },
                  {
                    label: "Telefon", value: "+90 538 528 03 33", href: "tel:+905385280333",
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="#00f0ff" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                  },
                ].map(({ label, value, href, icon }) => (
                  <div key={label} className="flex items-center gap-5 group">
                    {/* Icon box — surface_container_highest */}
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-105"
                      style={{ background: "rgba(53,53,52,0.6)", border: "1px solid rgba(59,73,75,0.12)" }}
                    >
                      {icon}
                    </div>
                    <div>
                      <div className="label-tag mb-1">{label}</div>
                      <a
                        href={href}
                        className="font-headline text-lg font-semibold transition-colors"
                        style={{ color: "#e5e2e1" }}
                        onMouseOver={e => (e.currentTarget.style.color = "#00f0ff")}
                        onMouseOut={e => (e.currentTarget.style.color = "#e5e2e1")}
                      >
                        {value}
                      </a>
                    </div>
                  </div>
                ))}

                {/* Location */}
                <div className="flex items-center gap-5 group">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-105"
                    style={{ background: "rgba(53,53,52,0.6)", border: "1px solid rgba(59,73,75,0.12)" }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="#00f0ff" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="label-tag mb-1">Konum</div>
                    <p className="font-headline text-lg font-semibold" style={{ color: "#e5e2e1" }}>Alanya / Antalya</p>
                  </div>
                </div>
              </div>

              {/* Availability badge */}
              <div
                className="mt-12 inline-flex items-center gap-3 px-5 py-2.5 rounded-full"
                style={{ background: "rgba(16,185,129,0.07)", border: "1px solid rgba(16,185,129,0.15)" }}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow inline-block" />
                <span className="label-tag" style={{ color: "#34d399" }}>Şu an müsaitiz</span>
              </div>
            </div>

            {/* Form — glass panel with ambient glow */}
            <div
              className="reveal glass-panel cyber-glow p-10 rounded-[2rem]"
              style={{ transitionDelay: "0.15s" }}
            >
              <form id="contact-form" noValidate onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="label-tag block ml-1">İsim Soyisim</label>
                    <input id="name" name="name" type="text" required placeholder="Adınız" className="form-input" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="label-tag block ml-1">E-Posta</label>
                    <input id="email" name="email" type="email" required placeholder="E-Posta Adresiniz" className="form-input" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="label-tag block ml-1">Konu</label>
                  <select id="subject" name="subject" className="form-input appearance-none">
                    <option value="">Hizmet seçiniz…</option>
                    <option value="web">Web Tasarım</option>
                    <option value="n8n">n8n Otomasyonu</option>
                    <option value="ai">AI Çözümü</option>
                    <option value="other">Diğer</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="label-tag block ml-1">Mesajınız</label>
                  <textarea id="message" name="message" rows={4} required placeholder="Projenizden kısaca bahsedin…" className="form-input resize-none" />
                </div>

                {/* Glow submit button */}
                <button type="submit" className="btn-glow w-full py-4 text-base rounded-[1rem]">
                  <span>Gönder</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>

                <p id="form-success" className="hidden mt-4 text-center text-sm font-medium" style={{ color: "#34d399" }}>
                  ✓ Mesajınız alındı! En kısa sürede dönüş yapacağız.
                </p>
                <p id="form-error" className="hidden mt-4 text-center text-sm" style={{ color: "#f87171" }}>
                  Lütfen zorunlu alanları doldurun.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ FOOTER ══════════════════ */}
      {/* Deepest surface — no border, tonal gap from contact section */}
      <footer style={{ background: "#080808" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#hero" className="flex items-center gap-2.5">
            <div
              className="w-7 h-7 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #00f0ff, #00dbe9)" }}
            >
              <svg className="w-4 h-4" fill="none" stroke="#00363a" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="font-headline font-bold text-lg chrome-text">Silverstone AI</span>
          </a>

          <nav className="flex items-center gap-8" aria-label="Footer navigasyon">
            {[
              { href: "#", label: "X" },
              { href: "#", label: "Instagram" },
              { href: "https://linkedin.com", label: "LinkedIn" },
            ].map(({ href, label }) => (
              <a
                key={label}
                href={href}
                className="label-tag transition-colors duration-300 hover:text-[#00f0ff]"
              >
                {label}
              </a>
            ))}
          </nav>

          <p className="label-tag">© 2025 Silverstone AI. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </>
  );
}
