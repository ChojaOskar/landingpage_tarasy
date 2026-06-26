# Konrad Tarasy — strona firmowa

Statyczna strona wielostronnicowa. Bez buildu — TailwindCSS przez CDN.

## Struktura

- `index.html` — strona główna
- `uslugi.html` — szczegółowy opis usług (tarasy, drenaż, hydroizolacja, dodatkowe)
- `realizacje.html` — case studies projektów
- `zespol.html` — Oskar Choja
- `faq.html` — najczęstsze pytania
- `kontakt.html` — formularz + dane kontaktowe
- `assets/shared.js` — nawigacja, stopka, konfiguracja Tailwind (wspólne dla wszystkich podstron)
- `assets/styles.css` — wspólne style (tła hero, wood-pattern)

## Uruchomienie

Otwórz `index.html` w przeglądarce, albo uruchom lokalny serwer:

```powershell
python -m http.server 8000
```

I otwórz `http://localhost:8000`.

## Do podmiany

- Numer telefonu (`+48 000 000 000`) — w `assets/shared.js` (stopka) i w `kontakt.html`, `zespol.html`, `index.html`
- E-mail (`kontakt@konradtarasy.pl`) — w tych samych miejscach
- Zdjęcia: obecnie placeholdery z Unsplash w `assets/styles.css` (hero) i w plikach HTML (galerie). Podmień na własne fotki.
- Avatary zespołu w `zespol.html` to inicjały — można podmienić na prawdziwe zdjęcia (`<img>` w miejsce `<div>` z inicjałami).
- Formularz kontaktowy obecnie tylko pokazuje komunikat sukcesu. Do podpięcia np. Formspree / EmailJS / własne API.

## Zespół

- **Oskar Choja** — hydroizolacja i wykończenia
