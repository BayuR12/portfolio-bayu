export const skills = {
  languages: [
    { name: "Java", icon: "☕" },
    { name: "Python", icon: "🐍" },
    { name: "Dart", icon: "🎯" },
    { name: "PHP", icon: "🐘" },
  ],
  tools: [
    { name: "Flutter", icon: "💙" },
    { name: "GetX", icon: "⚡" },
    { name: "OpenCV", icon: "👁️" },
    { name: "MongoDB", icon: "🍃" },
    { name: "MySQL", icon: "🐬" },
    { name: "GitHub", icon: "🐙" },
    { name: "Figma", icon: "🎨" },
  ],
};

export const projects = [
  {
    id: "01",
    title: "AI Face Recognition Login",
    description:
      "Sistem autentikasi login berbasis pengenalan wajah menggunakan teknologi computer vision dan machine learning untuk meningkatkan keamanan pengguna.",
    stack: ["Python", "OpenCV", "Machine Learning", "Google Colab"],
    features: [
      "Face Detection & Recognition",
      "Real-time Camera Integration",
      "Secure Login System",
    ],
    links: [
      {
        label: "View Project",
        href: "https://colab.research.google.com/drive/1EqT8VpQJZn5_oW1FQ8Qn8Wixt24r1WDh?usp=sharing",
        variant: "primary" as const,
      },
      {
        label: "Google Colab",
        href: "https://colab.research.google.com/drive/1EqT8VpQJZn5_oW1FQ8Qn8Wixt24r1WDh?usp=sharing",
        variant: "outline" as const,
      },
    ],
    featured: false,
  },
  {
    id: "02",
    title: "RuangSisa — Sustainable Marketplace",
    description:
      "Platform marketplace untuk menjual dan mendonasikan barang bekas guna membantu mengurangi limbah serta mendukung ekonomi berkelanjutan.",
    stack: ["Flutter", "REST API", "MongoDB", "MySQL", "Machine Learning"],
    features: [
      "Marketplace barang bekas",
      "Donasi barang",
      "User Authentication",
      "Smart Recommendation",
      "Sustainable Campaign",
    ],
    links: [
      { label: "View Project", href: "https://github.com/jihadmuntaha/ruangsisa", variant: "primary" as const },
      { label: "GitHub", href: "https://github.com/jihadmuntaha/ruangsisa", variant: "outline" as const },
    ],
    featured: true,
  },
  {
    id: "03",
    title: "Booking Billiard Management",
    description:
      "Aplikasi manajemen booking meja billiard dan pelanggan dengan fitur pengelolaan data, database integration, dan keamanan sistem.",
    stack: ["Java", "MongoDB", "MySQL"],
    features: [
      "Booking & Customer Management",
      "CRUD System",
      "Multi-thread Process",
      "Data Encryption",
    ],
    links: [
      { label: "View Project", href: "https://github.com/BayuR12/Aplikasi-booking-meja-billiard-dan-menejemen-pelanggan", variant: "primary" as const },
      { label: "GitHub", href: "https://github.com/BayuR12/Aplikasi-booking-meja-billiard-dan-menejemen-pelanggan", variant: "outline" as const },
    ],
    featured: false,
  },
  {
    id: "04",
    title: "Vehicle Middle UI/UX Prototype",
    description:
      "Prototype desain UI/UX aplikasi kendaraan modern menggunakan Figma dengan pendekatan clean design dan user-friendly interface.",
    stack: ["Figma", "UI/UX Design", "Prototype Design"],
    features: [
      "Modern Dashboard Design",
      "Interactive Prototype",
      "Responsive Mobile Layout",
      "Minimalist Interface",
    ],
    links: [
      {
        label: "View Design",
        href: "https://www.figma.com/design/6pVKoSUMVuZUgBhKlHET3N/Design-Prototype-Vehicle-Middle?node-id=0-1&t=td5d1bKJHvxAfwai-1",
        variant: "primary" as const,
      },
      {
        label: "Figma Prototype",
        href: "https://www.figma.com/design/6pVKoSUMVuZUgBhKlHET3N/Design-Prototype-Vehicle-Middle?node-id=0-1&t=td5d1bKJHvxAfwai-1",
        variant: "outline" as const,
      },
    ],
    featured: false,
  },
];

export const contact = [
  { label: "Email", href: "mailto:bayurahmatn0@email.com", icon: "email" },
  { label: "GitHub", href: "https://github.com/BayuR12", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/", icon: "linkedin" },
  { label: "WhatsApp", href: "https://wa.me/6281927257880", icon: "whatsapp" },
];
