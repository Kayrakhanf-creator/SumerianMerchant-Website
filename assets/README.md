# /public/assets — placeholder manifest

Drop real files here with these exact names; the site references them already
(or marks where to swap a vector for the real capture).

## Hero & scenes
| File | Used in | What to capture |
|---|---|---|
| `hero-shop-dawn.mp4` / `hero-shop-dawn.jpg` | Home hero | First-person: shop at dawn, scale in foreground, street beyond. Replace `<SceneLayers/>` in `src/components/home/Hero.tsx`. |
| `ambience-market.mp3` | Hero ambience toggle | Quiet loop: wind, distant voices, sparrows. No music. |
| `shop-interior.jpg` | Gallery | Stocked shelves, warm light |
| `market-street.jpg` | Gallery | Street with carts, crowds, dust |
| `shop-before.jpg` / `shop-after.jpg` | "Your Shop Grows" slider | Same camera angle, early vs. established shop. Swap the CSS dioramas in `src/components/home/ShopGrowth.tsx`. |
| `mesopotamia-map.jpg` | Gallery | The region map |

## Objects & characters
| File | Used in | Notes |
|---|---|---|
| `balance-scale.png` / `balance-scale.glb` | Scale section | Or a short capture .mp4 of the weighing action — replaces the SVG in `ScaleScene.tsx` |
| `barley-sack.png`, `stone-weights.png`, `copper-ingot.png`, `clay-tablet.png`, `cylinder-seal.png` | Feature/press imagery | High-res renders on dark |
| `ziggurat-progression.png` | Society section (optional swap for the SVG) | |
| `npc-ea-nasir.png` | Home teaser + Characters | Half-lit portrait; keep him ambiguous |
| `npc-guardian.png` | Characters | Inspector at the door, lamplight |
| `artifact-cylinder-seal.glb`, `artifact-clay-tablet.glb` | Artifacts section (future 3D) | Keep polycounts light |

## Gallery & press
| File | Used in |
|---|---|
| `gallery-01.jpg` … `gallery-03.jpg` | Gallery grid |
| `press-logo.png` | Press kit |
| `press-kit.zip` | Press kit download (logo pack + key art + screenshots) |
| `og-cover.jpg` | Social sharing (1200×630) — then uncomment `images` in `src/app/layout.tsx` |

Aspect guidance: gallery 16:9, portraits 4:5, key art 16:10.
