/**
 * ─────────────────────────────────────────────────────────────
 *  SITE CONFIG — edit real URLs and contacts HERE, in one place.
 * ─────────────────────────────────────────────────────────────
 *  TODO before launch:
 *  1. steamUrl    → your real Steam store page (wishlist target)
 *  2. discordUrl  → your real Discord invite
 *  3. pressEmail  → your real press contact
 *  4. studio      → your studio name
 *  5. astro.config.mjs `site` → your production domain
 */

export const site = {
  name: "Sumerian Merchant",
  tagline: "Become the most influential merchant in history.",
  description:
    "A first-person merchant simulator set in Mesopotamia, 2000 BCE. Open the shop. Fill the shelves. Weigh the barley. Earn their trust.",
  steamUrl: "https://store.steampowered.com/app/0000000/Sumerian_Merchant/", // TODO
  discordUrl: "https://discord.gg/XXXXXXXX", // TODO
  pressEmail: "press@yourstudio.example", // TODO
  studio: "Your Studio Name", // TODO
  copyrightYear: 2026,
};

export const nav = [
  { href: "/about", label: "About" },
  { href: "/features", label: "Features" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Devlog" },
  { href: "/faq", label: "FAQ" },
  { href: "/press", label: "Press Kit" },
];
