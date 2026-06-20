# AESTHETE — Unrivaled Elegance. Unlisted Estates.

AESTHETE is a bespoke, elite-grade digital real estate platform engineered for the ultra-high-net-worth individual (UHNWI) market in Chennai, targeting the exclusive ECR (East Coast Road) and OMR (Old Mahabalipuram Road) coastal corridors. 

This repository showcases a high-end Next.js 14 web application modeled on the concept of a private digital guild. It prioritizes quiet luxury, brutalist-inspired geometry, and strict confidentiality.

---

## 💎 The Aesthetics ($500k UI/UX Design System)

Inspired by private wealth management portals and high-end automotive configurators, AESTHETE replaces standard real estate listings with a private catalog feel.

- **Obsidian Dark Mode**: Built entirely on `#0A0A0A` (Deep Obsidian) and `#111111` (Deep Charcoal) base colors to reduce visual clutter and emphasize architectural photography.
- **Champagne Gold Accents**: Highlights are detailed in `#E9C349` (Champagne Gold), creating a sense of premium prestige and exclusivity.
- **Brushed Metal Shimmers**: Customized buttons employ a cinematic `.metal-brushed` linear gradient effect that reacts dynamically to hover states.
- **Typography Hierarchy**: Uses the dramatic serif typeface *Playfair Display* for primary headers and clean, minimalist *Inter* for administrative metadata.

---

## ⚡ Technical Architecture & Features

AESTHETE is powered by a modern, high-performance web development stack:

### Core Frameworks
- **Next.js 14 (App Router)**: Leverages React Server Components (RSC) and server-side optimization protocols for near-instant page responses.
- **Tailwind CSS**: Strict utility-first implementation of the customized design system color palette, spacing tokens, and typography.
- **Framer Motion**: Smooth, high-fidelity micro-animations, cinematic staggered text reveals, and fade-in transitions.
- **Lucide Icons**: Clean, thin-stroke icon suite.

### Interactive Features
- **Dynamic Glassmorphism Header**: A sticky navbar that transitions from completely transparent to a high-blur black overlay as the user scrolls.
- **Cinematic Hero Video**: Plays a high-resolution, muted looping background video of a coastal brutalist villa with a bounce-scroll indicator.
- **Horizontal Portfolio Carousel**: A smooth, snap-scrolling carousel showcasing Chennai's premier estates with manual left/right slider buttons, status badges, and price indicators placed underneath the items.
- **Ken Burns Image Hover**: Hovering over any estate image initiates a slow, elegant scale zoom mimicking professional architectural videography.
- **10-Second VIP Access Popup**: An overlay modal that prompts users to register after 10 seconds of activity. Uses `sessionStorage` tracking to ensure a seamless experience, avoiding repeated prompts after dismissal.
- **Secure Lead Capture (Make.com)**: A fully functional contact form and popup register that sends structured JSON data to a custom Make.com webhook backend, including loading indicators and transition states.

---

## 🛠️ Folder Structure

```
├── public/                  # Core video assets and static media
├── src/
│   ├── app/
│   │   ├── globals.css      # Core base CSS, typography, and premium utilities
│   │   ├── layout.tsx       # Root layout containing SEO meta tags
│   │   └── page.tsx         # Page composition router
│   └── components/
│       ├── Navbar.tsx            # Sticky header with drawer overlay
│       ├── Hero.tsx              # Cinematic video header & CTA
│       ├── PropertyCard.tsx      # Individual snap item with Ken Burns hover
│       ├── PropertyShowcase.tsx  # Horizontal portfolio carousel
│       ├── AuthorityBlock.tsx    # Typographic quote section
│       ├── LeadCapture.tsx       # Secure application form
│       ├── VIPPopup.tsx          # 10-second registration modal
│       └── Footer.tsx            # AESTHETE Private Guild copyright footer
├── tailwind.config.ts       # Design token configurations
├── tsconfig.json            # Strict TypeScript rules
└── package.json             # Build script packages
```

---

## 🚀 Installation & Local Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup Instructions
1. **Clone the repository and install dependencies:**
   ```bash
   npm install
   ```

2. **Configure your Webhook Endpoints:**
   In [LeadCapture.tsx](src/components/LeadCapture.tsx) (line 43) and [VIPPopup.tsx](src/components/VIPPopup.tsx) (line 43), replace the placeholder Make.com webhook URLs with your active Make.com webhook address to record incoming leads.

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the live dashboard.

4. **Compile production build:**
   Ensure zero errors are present:
   ```bash
   npm run build
   ```

---

## 🔒 Confidentiality & Discretion

All properties listed on AESTHETE are imaginary concepts illustrating Chennai's coastal architectural capabilities. The backend webhook integrations are secured via HTTPS, encrypting name, phone, and budget parameters directly during transmission to the Make.com server.
