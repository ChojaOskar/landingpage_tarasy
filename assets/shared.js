// Shared Tailwind config + nav/footer injection for Konrad Tarasy site
(function () {
  // Tailwind config must be set before tailwind script runs in <head>.
  if (window.tailwind) {
    window.tailwind.config = {
      theme: {
        extend: {
          fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
          colors: {
            brand: {
              50:  '#f6f3ee',
              100: '#e9e0d2',
              200: '#d2bea0',
              300: '#b69770',
              400: '#9a774f',
              500: '#7d5d3b',
              600: '#624830',
              700: '#4a3725',
              800: '#33261a',
              900: '#1f1710',
            }
          }
        }
      }
    };
  }

  const NAV_LINKS = [
    { href: 'index.html',      label: 'Start' },
    { href: 'uslugi.html',     label: 'Usługi' },
    { href: 'realizacje.html', label: 'Realizacje' },
    { href: 'zespol.html',     label: 'Zespół' },
    { href: 'faq.html',        label: 'FAQ' },
    { href: 'kontakt.html',    label: 'Kontakt' },
  ];

  function currentPage() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    return path;
  }

  function renderNav() {
    const here = currentPage();
    const links = NAV_LINKS.map(l => {
      const active = l.href === here;
      return `<a href="${l.href}" class="${active ? 'text-brand-700' : 'hover:text-brand-600'} font-medium">${l.label}</a>`;
    }).join('');

    const mobileLinks = NAV_LINKS.map(l => {
      const active = l.href === here;
      return `<a href="${l.href}" class="block py-2 px-3 rounded-lg ${active ? 'bg-brand-100 text-brand-800' : 'hover:bg-brand-50'} font-medium">${l.label}</a>`;
    }).join('');

    return `
      <header class="fixed top-0 inset-x-0 z-50 backdrop-blur bg-brand-50/90 border-b border-brand-100">
        <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="index.html" class="flex items-center gap-2">
            <div class="w-9 h-9 rounded-lg bg-brand-700 flex items-center justify-center text-brand-50 font-bold">KT</div>
            <span class="font-bold text-lg tracking-tight text-brand-900">Konrad Tarasy</span>
          </a>
          <nav class="hidden md:flex items-center gap-7 text-sm text-brand-800">
            ${links}
          </nav>
          <div class="flex items-center gap-2">
            <a href="kontakt.html" class="hidden sm:inline-flex items-center gap-2 bg-brand-700 hover:bg-brand-800 text-brand-50 px-4 py-2 rounded-lg text-sm font-semibold transition">
              Bezpłatna wycena
            </a>
            <button id="kt-mobile-toggle" class="md:hidden p-2 rounded-lg hover:bg-brand-100" aria-label="Menu">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>
        </div>
        <div id="kt-mobile-menu" class="hidden md:hidden border-t border-brand-100 bg-brand-50/95 px-4 py-3 space-y-1 text-brand-800">
          ${mobileLinks}
          <a href="kontakt.html" class="block mt-2 text-center bg-brand-700 text-brand-50 font-semibold py-2.5 rounded-lg">Bezpłatna wycena</a>
        </div>
      </header>
    `;
  }

  function renderFooter() {
    const year = new Date().getFullYear();
    return `
      <footer class="bg-brand-900 text-brand-200 py-12 mt-0">
        <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          <div class="md:col-span-2">
            <div class="flex items-center gap-2 mb-3">
              <div class="w-9 h-9 rounded-lg bg-brand-700 flex items-center justify-center text-brand-50 font-bold">KT</div>
              <span class="font-bold text-brand-50 text-lg">Konrad Tarasy</span>
            </div>
            <p class="text-sm text-brand-200/90 max-w-md">Budowa tarasów, drenaż wokół domu, studnie chłonne i hydroizolacja fundamentów. Mały, doświadczony zespół z praktyką budowlaną.</p>
          </div>
          <div>
            <h4 class="text-brand-50 font-semibold mb-3">Nawigacja</h4>
            <ul class="space-y-2 text-sm">
              ${NAV_LINKS.map(l => `<li><a href="${l.href}" class="hover:text-brand-50">${l.label}</a></li>`).join('')}
            </ul>
          </div>
          <div>
            <h4 class="text-brand-50 font-semibold mb-3">Kontakt</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="tel:+48000000000" class="hover:text-brand-50">+48 000 000 000</a></li>
              <li><a href="mailto:kontakt@konradtarasy.pl" class="hover:text-brand-50">kontakt@konradtarasy.pl</a></li>
              <li>Polska — dojeżdżamy</li>
            </ul>
          </div>
        </div>
        <div class="max-w-6xl mx-auto px-6 mt-10 pt-6 border-t border-brand-800 text-sm text-brand-300 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© ${year} Konrad Tarasy. Wszelkie prawa zastrzeżone.</div>
          <div>Konrad Gurga · Filip Kozikowski · Oskar Choja</div>
        </div>
      </footer>
    `;
  }

  function mount() {
    const navHost = document.getElementById('kt-nav');
    const footHost = document.getElementById('kt-footer');
    if (navHost) navHost.innerHTML = renderNav();
    if (footHost) footHost.innerHTML = renderFooter();

    const toggle = document.getElementById('kt-mobile-toggle');
    const menu = document.getElementById('kt-mobile-menu');
    if (toggle && menu) {
      toggle.addEventListener('click', () => menu.classList.toggle('hidden'));
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
