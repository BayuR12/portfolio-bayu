# Portfolio Bayu Rahmat

Website portfolio pribadi dengan tema **Minimalist Developer** — dark mode, modern, clean, dan responsive.

## Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 3**
- **Framer Motion 12**

## Cara Setup di VS Code

### 1. Install dependencies

```bash
npm install
```

### 2. Jalankan development server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### 3. Build untuk production

```bash
npm run build
npm start
```

---

## Struktur Folder

```
portfolio-bayu/
├── src/
│   ├── app/
│   │   ├── globals.css       # Global styles + CSS variables
│   │   ├── layout.tsx        # Root layout & metadata
│   │   └── page.tsx          # Halaman utama
│   ├── components/
│   │   ├── Navbar.tsx        # Navigation bar (responsive + mobile menu)
│   │   ├── Hero.tsx          # Hero section + typing animation + avatar
│   │   ├── About.tsx         # About Me section + code block
│   │   ├── Skills.tsx        # Skills grid
│   │   ├── Projects.tsx      # Featured projects card grid
│   │   ├── Contact.tsx       # Contact links
│   │   ├── Footer.tsx        # Footer
│   │   ├── FadeIn.tsx        # Reusable scroll animation wrapper
│   │   └── SectionHeader.tsx # Reusable section title component
│   └── data/
│       └── index.ts          # Edit data project/skill di sini
├── public/                   # Taruh foto & CV di sini
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

---

## Kustomisasi

### Ganti data project / skill
Edit file `src/data/index.ts`

### Ganti warna
Edit CSS variables di `src/app/globals.css`:
```css
:root {
  --bg: #0F172A;
  --accent: #38BDF8;
}
```

### Tambah foto profil
Taruh foto di `public/foto.jpg`, lalu di `Hero.tsx` ganti komponen `<Avatar />` dengan:
```tsx
import Image from "next/image";
<Image src="/foto.jpg" alt="Bayu Rahmat" width={340} height={340} className="rounded-full object-cover" />
```

### Tambah CV
Taruh file di `public/cv-bayu-rahmat.pdf` — tombol Download CV sudah otomatis pointing ke sana.

---

## Deploy ke Vercel (Gratis)

1. Push ke GitHub
2. Buka [vercel.com](https://vercel.com) → Import repository
3. Deploy otomatis ✅
