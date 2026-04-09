<!DOCTYPE html>

<html class="dark" lang="tr"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Silverstone AI – Web Tasarım, AI & Otomasyon Ajansı</title>
<meta name="description" content="Web Tasarım, n8n Otomasyonları ve AI Çözümleri ile işletmenizi dijital çağa taşıyoruz. Alanya / Antalya merkezli teknoloji ajansı."/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
<script id="tailwind-config">
  tailwind.config = {
    darkMode: "class",
    theme: {
      extend: {
        colors: {
          "surface-container-lowest": "#0e0e0e",
          "surface-container-high": "#2a2a2a",
          "primary-fixed-dim": "#00dbe9",
          "on-secondary-fixed-variant": "#6b00b0",
          "secondary-container": "#9d05ff",
          "surface": "#131313",
          "surface-dim": "#131313",
          "on-error": "#690005",
          "surface-bright": "#3a3939",
          "surface-container": "#201f1f",
          "inverse-surface": "#e5e2e1",
          "on-error-container": "#ffdad6",
          "on-background": "#e5e2e1",
          "on-tertiary-container": "#595f66",
          "inverse-on-surface": "#313030",
          "surface-container-low": "#1c1b1b",
          "on-secondary": "#4b007e",
          "secondary-fixed-dim": "#dfb7ff",
          "on-surface-variant": "#b9cacb",
          "on-surface": "#e5e2e1",
          "primary": "#dbfcff",
          "on-primary-fixed": "#002022",
          "on-tertiary-fixed": "#161c22",
          "secondary-fixed": "#f1daff",
          "surface-tint": "#00dbe9",
          "primary-container": "#00f0ff",
          "on-secondary-fixed": "#2d004f",
          "on-secondary-container": "#f7e6ff",
          "outline-variant": "#3b494b",
          "surface-variant": "#353534",
          "primary-fixed": "#7df4ff",
          "error": "#ffb4ab",
          "on-primary-container": "#006970",
          "tertiary-fixed-dim": "#c1c7cf",
          "secondary": "#dfb7ff",
          "tertiary-container": "#d4dae2",
          "surface-container-highest": "#353534",
          "on-tertiary": "#2b3137",
          "tertiary": "#f1f6ff",
          "error-container": "#93000a",
          "outline": "#849495",
          "on-primary": "#00363a",
          "on-tertiary-fixed-variant": "#41474e",
          "on-primary-fixed-variant": "#004f54",
          "inverse-primary": "#006970",
          "tertiary-fixed": "#dde3eb",
          "background": "#131313"
        },
        borderRadius: {
          DEFAULT: "0.25rem",
          lg: "0.5rem",
          xl: "0.75rem",
          full: "9999px"
        },
        fontFamily: {
          headline: ["Plus Jakarta Sans"],
          body: ["Inter"],
          label: ["Inter"]
        }
      }
    }
  }
</script>
<style>
  body { background-color: #0e0e0e; color: #e5e2e1; font-family: 'Inter', sans-serif; overflow-x: hidden; }
  .chrome-text { background: linear-gradient(to right, #f1f6ff 0%, #849495 50%, #f1f6ff 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
  .cyber-glow { box-shadow: 0 0 40px rgba(0, 240, 255, 0.15); }
  .glass-panel { background: rgba(19, 19, 19, 0.6); backdrop-filter: blur(20px); border: 1px solid rgba(132, 148, 149, 0.1); }
  .bento-hover:hover { background: #2a2a2a; transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
  .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24; }
</style>
</head>
<body class="selection:bg-primary-container selection:text-on-primary-container">

<!-- Navbar -->
<nav class="fixed top-0 w-full z-50 bg-neutral-950/60 backdrop-blur-xl bg-neutral-900/20 shadow-[0_0_40px_rgba(0,240,255,0.05)]">
  <div class="flex justify-between items-center max-w-7xl mx-auto px-8 py-4 font-['Plus_Jakarta_Sans'] tracking-tight">
    <div class="text-2xl font-bold bg-gradient-to-r from-slate-100 via-slate-400 to-slate-100 bg-clip-text text-transparent">
      Silverstone AI
    </div>
    <div class="hidden md:flex items-center gap-10">
      <a class="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors duration-300" href="#">Ana Sayfa</a>
      <a class="text-slate-400 hover:text-cyan-300 transition-colors duration-300" href="#services">Hizmetler</a>
      <a class="text-slate-400 hover:text-cyan-300 transition-colors duration-300" href="#why-us">Neden Biz?</a>
      <a class="text-slate-400 hover:text-cyan-300 transition-colors duration-300" href="#contact">İletişim</a>
    </div>
    <button class="px-6 py-2.5 rounded-full bg-gradient-to-r from-primary-container to-primary-fixed-dim text-on-primary font-semibold text-sm hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all active:scale-95">
      Hemen Başlayalım
    </button>
  </div>
</nav>

<!-- Hero Section -->
<main class="relative pt-32 pb-20 overflow-hidden">
  <div class="absolute top-0 -left-20 w-[600px] h-[600px] bg-primary-container/5 blur-[120px] rounded-full"></div>
  <div class="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-secondary-container/5 blur-[120px] rounded-full"></div>

  <div class="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
    <div class="relative z-10">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel mb-8">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-primary-container"></span>
        </span>
        <span class="text-[10px] font-label uppercase tracking-widest text-on-surface-variant">✦ Dijital Dönüşümde Güvenilir Ortağınız</span>
      </div>

      <h1 class="text-5xl lg:text-7xl font-headline font-extrabold leading-tight tracking-tighter mb-6 chrome-text">
        Geleneksel İşletmeleri Geleceğin Teknolojisine Bağlıyoruz
      </h1>
      <p class="text-xl text-on-surface-variant font-body leading-relaxed mb-10 max-w-xl">
        Web Tasarım, n8n Otomasyonları ve AI Çözümleri ile işletmenizi dijital çağa adım atın.
      </p>

      <div class="flex flex-wrap gap-4 mb-12">
        <button onclick="document.getElementById('contact').scrollIntoView({behavior:'smooth'})" class="px-8 py-4 rounded-xl bg-gradient-to-r from-primary-container to-primary-fixed-dim text-on-primary font-bold hover:shadow-[0_0_25px_rgba(0,240,255,0.3)] transition-all active:scale-95">
          Hemen Başlayalım
        </button>
        <button onclick="document.getElementById('services').scrollIntoView({behavior:'smooth'})" class="px-8 py-4 rounded-xl border border-outline-variant hover:bg-white/5 transition-colors font-semibold text-on-surface">
          Hizmetlerimizi Keşfet
        </button>
      </div>

      <!-- Stats Bar -->
      <div class="flex items-center gap-8 py-6 px-8 rounded-2xl bg-surface-container-low/50 border border-outline-variant/10 backdrop-blur-md">
        <div>
          <div class="text-2xl font-headline font-bold text-primary-fixed-dim">50+</div>
          <div class="text-[10px] font-label uppercase tracking-wider text-slate-500">Tamamlanan Proje</div>
        </div>
        <div class="w-px h-8 bg-outline-variant/30"></div>
        <div>
          <div class="text-2xl font-headline font-bold text-primary-fixed-dim">30+</div>
          <div class="text-[10px] font-label uppercase tracking-wider text-slate-500">Mutlu Müşteri</div>
        </div>
        <div class="w-px h-8 bg-outline-variant/30"></div>
        <div>
          <div class="text-2xl font-headline font-bold text-primary-fixed-dim">3x</div>
          <div class="text-[10px] font-label uppercase tracking-wider text-slate-500">Daha Hızlı Süreç</div>
        </div>
      </div>
    </div>

    <!-- Hero Visual: CSS-based futuristic dashboard -->
    <div class="relative">
      <div class="relative aspect-square rounded-3xl overflow-hidden glass-panel border border-outline-variant/20 p-6 flex flex-col gap-4">
        <!-- Fake Dashboard Header -->
        <div class="flex items-center justify-between">
          <div class="flex gap-2">
            <div class="w-3 h-3 rounded-full bg-red-500/60"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500/60"></div>
            <div class="w-3 h-3 rounded-full bg-green-500/60"></div>
          </div>
          <div class="text-[10px] text-slate-500 uppercase tracking-widest">AI Dashboard v2.0</div>
        </div>
        <!-- Animated graph bars -->
        <div class="flex-1 grid grid-cols-3 gap-4">
          <div class="rounded-2xl bg-primary-container/10 border border-primary-container/20 p-4 flex flex-col justify-between">
            <span class="material-symbols-outlined text-primary-container text-xl">neurology</span>
            <div>
              <div class="text-xs text-slate-500 mb-1">AI Model</div>
              <div class="text-lg font-bold text-primary-fixed-dim">Active</div>
            </div>
          </div>
          <div class="rounded-2xl bg-secondary-container/10 border border-secondary-container/20 p-4 flex flex-col justify-between">
            <span class="material-symbols-outlined text-secondary text-xl">account_tree</span>
            <div>
              <div class="text-xs text-slate-500 mb-1">Workflows</div>
              <div class="text-lg font-bold text-secondary">24 Live</div>
            </div>
          </div>
          <div class="rounded-2xl bg-emerald-500/10 border border-emerald-500/20 p-4 flex flex-col justify-between">
            <span class="material-symbols-outlined text-emerald-400 text-xl">trending_up</span>
            <div>
              <div class="text-xs text-slate-500 mb-1">Uptime</div>
              <div class="text-lg font-bold text-emerald-400">99.9%</div>
            </div>
          </div>
          <!-- Bar chart placeholder -->
          <div class="col-span-3 rounded-2xl bg-surface-container border border-outline-variant/20 p-4">
            <div class="text-[10px] text-slate-500 uppercase tracking-widest mb-3">Performance</div>
            <div class="flex items-end gap-2 h-16">
              <div class="flex-1 bg-primary-container/30 rounded" style="height:40%"></div>
              <div class="flex-1 bg-primary-container/50 rounded" style="height:65%"></div>
              <div class="flex-1 bg-primary-container/70 rounded" style="height:45%"></div>
              <div class="flex-1 bg-primary-container rounded" style="height:90%"></div>
              <div class="flex-1 bg-primary-container/80 rounded" style="height:75%"></div>
              <div class="flex-1 bg-primary-container/60 rounded" style="height:55%"></div>
              <div class="flex-1 bg-primary-container rounded animate-pulse" style="height:100%"></div>
            </div>
          </div>
          <div class="col-span-3 rounded-2xl bg-surface-container border border-outline-variant/20 p-4 flex items-center gap-4">
            <div class="w-8 h-8 rounded-full bg-primary-container/20 border border-primary-container/40 flex items-center justify-center">
              <span class="material-symbols-outlined text-primary-container text-sm">smart_toy</span>
            </div>
            <div class="flex-1">
              <div class="h-2 bg-primary-container/30 rounded-full w-3/4 mb-2"></div>
              <div class="h-2 bg-outline-variant/30 rounded-full w-1/2"></div>
            </div>
            <div class="text-[10px] text-emerald-400 font-medium">Online</div>
          </div>
        </div>
      </div>
      <div class="absolute -top-6 -right-6 w-24 h-24 bg-primary-container/20 rounded-full blur-2xl animate-pulse"></div>
      <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary-container/10 rounded-full blur-3xl"></div>
    </div>
  </div>
</main>

<!-- Services Bento Section -->
<section class="py-24 bg-surface-container-lowest relative" id="services">
  <div class="max-w-7xl mx-auto px-8">
    <div class="text-center mb-16">
      <h2 class="text-xs font-label uppercase tracking-[0.3em] text-primary-container mb-4">Uzmanlık Alanlarımız</h2>
      <h3 class="text-4xl lg:text-5xl font-headline font-bold chrome-text">İşinizi Büyüten Çözümler</h3>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
      <!-- Card 1: Web Design (large) -->
      <div class="md:col-span-8 group relative overflow-hidden rounded-[2rem] bg-surface-container-low border border-outline-variant/10 p-10 flex flex-col justify-between hover:border-primary-container/30 transition-all min-h-[280px]">
        <div class="relative z-10">
          <span class="material-symbols-outlined text-4xl text-primary-container mb-6 block">table_chart</span>
          <h4 class="text-3xl font-headline font-bold mb-4">Web Tasarım</h4>
          <ul class="space-y-3 text-on-surface-variant font-body">
            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-sm text-primary">check_circle</span> Özel tasarım &amp; kodlama</li>
            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-sm text-primary">check_circle</span> SEO optimizasyonu</li>
            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-sm text-primary">check_circle</span> Performans odaklı mimari</li>
          </ul>
        </div>
        <div class="absolute top-0 right-0 w-64 h-full opacity-10 pointer-events-none">
          <div class="w-full h-full bg-gradient-to-l from-primary-container to-transparent"></div>
        </div>
      </div>

      <!-- Card 2: n8n -->
      <div class="md:col-span-4 group relative overflow-hidden rounded-[2rem] bg-surface-container-low border border-outline-variant/10 p-10 flex flex-col hover:border-secondary-container/30 transition-all">
        <span class="material-symbols-outlined text-4xl text-secondary-fixed-dim mb-6 block">account_tree</span>
        <h4 class="text-2xl font-headline font-bold mb-4">n8n Otomasyonları</h4>
        <p class="text-on-surface-variant text-sm leading-relaxed mb-6">
          İş akışlarınızı otonom hale getirin. CRM, E-posta ve veri tabanlarınızı kusursuz bir döngüde birleştiriyoruz.
        </p>
        <div class="mt-auto pt-6 border-t border-outline-variant/20 text-xs font-label uppercase tracking-widest text-secondary">Yüksek Verimlilik</div>
      </div>

      <!-- Card 3: AI Agents (full width) -->
      <div class="md:col-span-12 group relative overflow-hidden rounded-[2rem] bg-surface-container-low border border-outline-variant/10 p-10 flex flex-col md:flex-row gap-10 items-center hover:border-primary-fixed-dim/30 transition-all">
        <div class="flex-1">
          <span class="material-symbols-outlined text-4xl text-primary-fixed-dim mb-6 block">neurology</span>
          <h4 class="text-3xl font-headline font-bold mb-4">AI Ajanlar</h4>
          <p class="text-on-surface-variant font-body mb-6 text-lg max-w-xl">
            İşletmenize özel AI chatbotlar ve veri analiz motorları geliştiriyoruz. Dokümanlarınızı anlayan ve müşterilerinizle gerçek zamanlı konuşan sistemler.
          </p>
          <button onclick="document.getElementById('contact').scrollIntoView({behavior:'smooth'})" class="text-primary-container font-semibold flex items-center gap-2 group/btn">
            Hemen Başlayın <span class="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>
        <div class="w-full md:w-1/3 aspect-video rounded-2xl bg-surface-container border border-primary-fixed-dim/20 flex items-center justify-center">
          <div class="text-center">
            <span class="material-symbols-outlined text-6xl text-primary-fixed-dim/40">smart_toy</span>
            <div class="mt-2 text-xs text-slate-500 uppercase tracking-widest">AI Engine</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Why Us Section -->
<section class="py-24 bg-surface relative overflow-hidden" id="why-us">
  <div class="max-w-7xl mx-auto px-8">
    <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
      <div class="max-w-2xl">
        <h2 class="text-xs font-label uppercase tracking-[0.3em] text-primary-container mb-4">Neden Silverstone?</h2>
        <h3 class="text-4xl lg:text-5xl font-headline font-bold chrome-text">Farkımızı Hissedin</h3>
      </div>
      <div class="text-on-surface-variant max-w-sm text-sm border-l border-outline-variant pl-6">
        Sıradan yazılım ajanslarından farklıyız. Biz işletmenizi geleceğe hazırlayan teknoloji ortaklarınızız.
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline-variant/20 rounded-[2.5rem] overflow-hidden border border-outline-variant/20">
      <div class="bg-surface-container-low p-12 bento-hover">
        <span class="material-symbols-outlined text-3xl text-primary mb-6 block">code_off</span>
        <h5 class="text-xl font-headline font-bold mb-3">Özel Kodlama</h5>
        <p class="text-on-surface-variant text-sm leading-relaxed">Hazır şablonlar yerine, markanızın DNA'sına uygun özel çözümler üretiyoruz.</p>
      </div>
      <div class="bg-surface-container-low p-12 bento-hover">
        <span class="material-symbols-outlined text-3xl text-primary mb-6 block">cloud_done</span>
        <h5 class="text-xl font-headline font-bold mb-3">Profesyonel Barındırma</h5>
        <p class="text-on-surface-variant text-sm leading-relaxed">Dünya standartlarında cloud altyapısı ile %99.9 uptime garantisi.</p>
      </div>
      <div class="bg-surface-container-low p-12 bento-hover">
        <span class="material-symbols-outlined text-3xl text-primary mb-6 block">eco</span>
        <h5 class="text-xl font-headline font-bold mb-3">Sürdürülebilir Çözümler</h5>
        <p class="text-on-surface-variant text-sm leading-relaxed">Gelecekte de değerini koruyan, genişleyebilir teknolojik mimari.</p>
      </div>
      <div class="bg-surface-container-low p-12 bento-hover">
        <span class="material-symbols-outlined text-3xl text-primary mb-6 block">bolt</span>
        <h5 class="text-xl font-headline font-bold mb-3">Hızlı Teslimat</h5>
        <p class="text-on-surface-variant text-sm leading-relaxed">Agile süreç yönetimi ile projelerinizi tam zamanında yayına alıyoruz.</p>
      </div>
      <div class="bg-surface-container-low p-12 bento-hover">
        <span class="material-symbols-outlined text-3xl text-primary mb-6 block">chat_bubble</span>
        <h5 class="text-xl font-headline font-bold mb-3">Şeffaf İletişim</h5>
        <p class="text-on-surface-variant text-sm leading-relaxed">Projenin her aşamasında düzenli raporlama ve açık diyalog.</p>
      </div>
      <div class="bg-surface-container-low p-12 bento-hover">
        <span class="material-symbols-outlined text-3xl text-primary mb-6 block">verified_user</span>
        <h5 class="text-xl font-headline font-bold mb-3">Güvenli &amp; Bakımlı</h5>
        <p class="text-on-surface-variant text-sm leading-relaxed">7/24 güvenlik izleme ve sürekli teknik destek ile içiniz rahat olsun.</p>
      </div>
    </div>
  </div>
</section>

<!-- Contact Section -->
<section class="py-24 bg-surface-container-lowest" id="contact">
  <div class="max-w-7xl mx-auto px-8">
    <div class="grid lg:grid-cols-2 gap-20 items-start">
      <div>
        <h2 class="text-4xl lg:text-6xl font-headline font-extrabold mb-8 chrome-text">Projenizi Konuşalım</h2>
        <p class="text-xl text-on-surface-variant mb-12">
          Hayalinizdeki projeyi gerçeğe dönüştürmek için ilk adımı atın. Ekibimiz sizinle iletişime geçmek için sabırsızlanıyor.
        </p>

        <div class="space-y-8">
          <div class="flex items-center gap-6 group">
            <div class="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center group-hover:bg-primary-container/10 transition-all">
              <span class="material-symbols-outlined text-primary-container">mail</span>
            </div>
            <div>
              <div class="text-[10px] font-label uppercase tracking-widest text-slate-500 mb-1">E-Posta</div>
              <div class="text-lg font-headline font-semibold">info@silverstoneai.com</div>
            </div>
          </div>
          <div class="flex items-center gap-6 group">
            <div class="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center group-hover:bg-primary-container/10 transition-all">
              <span class="material-symbols-outlined text-primary-container">call</span>
            </div>
            <div>
              <div class="text-[10px] font-label uppercase tracking-widest text-slate-500 mb-1">Telefon</div>
              <div class="text-lg font-headline font-semibold">+90 538 528 03 33</div>
            </div>
          </div>
          <div class="flex items-center gap-6 group">
            <div class="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center group-hover:bg-primary-container/10 transition-all">
              <span class="material-symbols-outlined text-primary-container">location_on</span>
            </div>
            <div>
              <div class="text-[10px] font-label uppercase tracking-widest text-slate-500 mb-1">Konum</div>
              <div class="text-lg font-headline font-semibold">Alanya / Antalya</div>
            </div>
          </div>
        </div>

        <div class="mt-12 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span class="text-xs font-label font-medium text-emerald-400 uppercase tracking-widest">Şu an müsaitiz · Proje alımına açığız</span>
        </div>
      </div>

      <div class="glass-panel p-10 rounded-[2.5rem] cyber-glow">
        <form class="space-y-6" onsubmit="handleSubmit(event)">
          <div class="grid grid-cols-2 gap-6">
            <div class="space-y-2">
              <label class="text-[10px] font-label uppercase tracking-[0.2em] text-slate-400 ml-1">İsim Soyisim</label>
              <input id="form-name" class="w-full bg-surface-container-high/50 border-b border-outline-variant/30 focus:border-primary-container focus:outline-none transition-all text-on-surface py-4 px-4 rounded-xl" placeholder="Adınız" type="text" required/>
            </div>
            <div class="space-y-2">
              <label class="text-[10px] font-label uppercase tracking-[0.2em] text-slate-400 ml-1">E-Posta</label>
              <input id="form-email" class="w-full bg-surface-container-high/50 border-b border-outline-variant/30 focus:border-primary-container focus:outline-none transition-all text-on-surface py-4 px-4 rounded-xl" placeholder="E-Posta Adresiniz" type="email" required/>
            </div>
          </div>
          <div class="space-y-2">
            <label class="text-[10px] font-label uppercase tracking-[0.2em] text-slate-400 ml-1">Konu</label>
            <input id="form-subject" class="w-full bg-surface-container-high/50 border-b border-outline-variant/30 focus:border-primary-container focus:outline-none transition-all text-on-surface py-4 px-4 rounded-xl" placeholder="Web Tasarım / AI / Otomasyon" type="text"/>
          </div>
          <div class="space-y-2">
            <label class="text-[10px] font-label uppercase tracking-[0.2em] text-slate-400 ml-1">Mesajınız</label>
            <textarea id="form-message" class="w-full bg-surface-container-high/50 border-b border-outline-variant/30 focus:border-primary-container focus:outline-none transition-all text-on-surface py-4 px-4 rounded-xl resize-none" placeholder="Projenizden kısaca bahsedin..." rows="4"></textarea>
          </div>
          <button id="submit-btn" type="submit" class="w-full py-5 rounded-2xl bg-gradient-to-r from-primary-container to-primary-fixed-dim text-on-primary font-bold text-lg hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all active:scale-[0.98]">
            Gönder
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

<!-- Footer -->
<footer class="bg-neutral-950 w-full border-t border-white/5">
  <div class="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
    <div class="font-['Plus_Jakarta_Sans'] font-bold text-slate-100 text-xl tracking-tight">Silverstone AI</div>
    <div class="flex items-center gap-8 font-['Inter'] uppercase tracking-widest text-[10px]">
      <a class="text-slate-500 hover:text-cyan-400 transition-all" href="#">X</a>
      <a class="text-slate-500 hover:text-cyan-400 transition-all" href="#">Instagram</a>
      <a class="text-slate-500 hover:text-cyan-400 transition-all" href="#">LinkedIn</a>
    </div>
    <div class="text-slate-500 font-['Inter'] uppercase tracking-widest text-[10px]">© 2025 Silverstone AI. Tüm hakları saklıdır.</div>
  </div>
</footer>

<script>
  function handleSubmit(e) {
    e.preventDefault();
    const btn = document.getElementById('submit-btn');
    btn.textContent = '✓ Mesajınız Alındı!';
    btn.classList.remove('from-primary-container', 'to-primary-fixed-dim');
    btn.classList.add('from-emerald-500', 'to-emerald-400');
    setTimeout(() => {
      btn.textContent = 'Gönder';
      btn.classList.add('from-primary-container', 'to-primary-fixed-dim');
      btn.classList.remove('from-emerald-500', 'to-emerald-400');
      e.target.reset();
    }, 3000);
  }
</script>
</body></html>
