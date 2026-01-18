
---

## 🎨 Overall Design Language (Applies to All Images)

### ✦ Visual Style

* **Playful, friendly, hand-crafted UI**
* Strong **outline-based components** (thick black borders)
* Soft, rounded corners everywhere
* “Sticker / card on canvas” feeling
* Mix of **professional + fun**, not corporate

### ✦ Color Philosophy

* **Warm off-white / cream background** (not pure white)
* Bold, saturated accent colors:

  * Pastel pink
  * Soft yellow
  * Mint green
  * Lavender / purple
  * Teal
* Colors are **flat**, no gradients
* Black used strictly for:

  * Text
  * Borders
  * Icons outlines

---

## 🧱 Core UI Building Blocks

---

## 1️⃣ Framed Canvas / Page Container

![Image](https://png.pngtree.com/png-vector/20220618/ourmid/pngtree-black-round-edge-cinematic-bar-png-image_5139100.png)

![Image](https://museprintables.com/files/letter-size-borders/png/black-rounded-thick-line-border.png)

![Image](https://www.uxpin.com/studio/wp-content/uploads/2022/10/card-design-UI.png)

![Image](https://www.justinmind.com/wp-content/uploads/2019/09/card-ui-design-principles-examples.png)

### Design Description

* The entire page content sits inside a **large rounded rectangle**
* Thick black border (≈ 3–4px)
* Large border radius (24–32px)
* Looks like a “paper sheet placed on a desk”

### How to Apply

* Wrap main content in a `<main>` container
* Give it:

  * `border: 3px solid #000`
  * `border-radius: 28px`
  * `background: #FFF6ED` (cream tone)
* Add generous padding (40–64px)

---

## 2️⃣ Hero Section (Typography-First)

![Image](https://qodeinteractive.com/magazine/wp-content/uploads/2021/10/Examples-of-Innovative-Hero-Typography-Trends.jpg)

![Image](https://qodeinteractive.com/magazine/wp-content/uploads/2021/10/Butt-Studio.jpg)

![Image](https://www.creativefabrica.com/wp-content/uploads/2023/12/20/Product-Designer-Portfolio-Hero-Section-Graphics-86701594-1.jpg)

![Image](https://cdn.dribbble.com/userupload/46091798/file/c824b900de0de63b66e2a9e2db18451c.jpg?resize=400x0)

### Design Description

* Massive, bold headline:

  * Uppercase
  * Very tight line height
  * Dominates the page
* Small friendly intro text above:

  * “Hi, my name is …”
* Supporting paragraph below in softer tone

### Typography Rules

* Heading:

  * Extra-bold sans-serif
  * Heavy weight (900 or similar)
* Body text:

  * Rounded sans-serif
  * Comfortable spacing
* No serif fonts

### Example Text Hierarchy

```
Hi, my name is Suraj.
I BUILD
PRODUCTS
THAT SCALE.
```

---

## 3️⃣ Primary CTA Button (Pill Button)

![Image](https://sarunw.com/images/swiftui-button-border-buttonstyle-tint.png)

![Image](https://i.sstatic.net/fbHkC.png)

![Image](https://i0.wp.com/css-tricks.com/wp-content/uploads/2021/10/target_candy_boo_result-1.png)

![Image](https://cdn.sanity.io/images/ut8rd85x/production/c4a4d444bf791f38571f9191a798840b66d1910e-600x300.svg?fit=max\&w=800)

### Design Description

* Rounded pill-shaped button
* Solid fill (usually yellow)
* Thick black border
* Bold label text
* Slight “toy button” feel

### Interaction

* Hover:

  * Button lifts slightly (translateY(-2px))
  * Shadow appears (hard shadow, not blur)
* Active:

  * Button presses down

### Implementation Notes

* Border radius: 999px
* Border: 3px solid black
* Font weight: bold
* Padding: large horizontal padding

---

## 4️⃣ Floating Decorative Stickers / Icons

![Image](https://cdn.svgator.com/images/2025/09/animated-icon-examples-article-cover.png)

![Image](https://cdn.prod.website-files.com/6365d860c7b7a7191055eb8a/66d3bffab95a7789483d28b0_65953470293b8edfec9f14de_doodle-icons.webp)

![Image](https://img.icons8.com/stickers/1200/web-design.jpg)

![Image](https://gamipress.com/wp-content/uploads/2019/01/featured-image.png)

### Design Description

* Randomly placed decorative icons:

  * Hearts
  * Charts
  * Eyes
  * Brand logos (Figma, Webflow)
* They look like **stickers scattered around**
* Positioned partially outside the main container

### Key Characteristics

* Bright pastel fills
* Black outlines
* Slight rotation (±10 degrees)
* No interaction (purely visual)

### How to Use

* Absolutely positioned SVGs or PNGs
* Low z-index
* Hidden on very small screens if needed

---

## 5️⃣ Profile / Image Card (Sticker Portrait)

![Image](https://studio.uxpincdn.com/studio/wp-content/uploads/2022/10/card-design-UI-1024x512.png.webp)

![Image](https://cdn.dribbble.com/userupload/44216706/file/original-d6548134db6b0254f8a2de32fde4dbc8.png?format=webp\&resize=400x300\&vertical=center)

![Image](https://i.etsystatic.com/13967210/r/il/8a9e0a/3669626279/il_570xN.3669626279_izp4.jpg)

![Image](https://centurylibrary.com/wp-content/uploads/2022/07/001877.jpg)

### Design Description

* Portrait inside a rounded rectangle
* Thick black border
* Colored background behind the photo
* Looks like a polaroid / badge

### Extras

* Small floating labels:

  * Name tag
  * “Available for freelance”
* Labels use pill style with green background

---

## 6️⃣ Feature / Service Cards

![Image](https://studio.uxpincdn.com/studio/wp-content/uploads/2022/10/card-design-UI-1024x512.png.webp)

![Image](https://framerusercontent.com/images/I0hbslNxXKpg5mTQxiy3wtfIvg.png?height=975\&width=1300)

![Image](https://staticecp.uprinting.com/16897/600x600/rounded_corner_business_card.jpg)

![Image](https://d2zn16t8uygl6t.cloudfront.net/store55printing/images/opt/contentimages/images/cheap_business_cards_printing_product_image_35x2%2B_ICON_%2Bround%2Bcorners%2Bcopy.jpg.webp?v=9222)

### Design Description

* Cards arranged in a **3-column grid**
* Each card contains:

  * Icon at top
  * Bold title
  * Short description
  * Text link with arrow

### Visual Rules

* White card background
* Thick black border
* Rounded corners
* Icon inside colored circular badge

### Interaction

* Hover:

  * Card slightly lifts
  * Border stays rigid (no glow)

---

## 7️⃣ Grid-Based Visual Showcase (Projects / Moodboard)

![Image](https://i.pinimg.com/736x/19/d5/78/19d578fe5e19a2e996bbd4dda5020a92.jpg)

![Image](https://static.wixstatic.com/media/41e17b_66a52ebcdd8f4589bb02a765e5e1ba4d~mv2.png/v1/fill/w_924%2Ch_635%2Cal_c%2Cq_90%2Cenc_avif%2Cquality_auto/41e17b_66a52ebcdd8f4589bb02a765e5e1ba4d~mv2.png)

![Image](https://images.ctfassets.net/h6goo9gw1hh6/3AneTs5IC6C2ZO8apOmFwc/75e7bb1421157ae0c6841c940b0b8553/motorcycle_collage_facebook_post_-_1600x1100.png?fm=png\&h=1100\&q=70\&w=1600)

![Image](https://images.ctfassets.net/h6goo9gw1hh6/4V0ceYE7jNvvInpRiwchPk/3e8f3c12862806e3564df9f9b02cc176/lifestyle_collage_insta_post_-_1600x1100.png?fm=png\&h=1100\&q=70\&w=1600)

### Design Description

* Masonry-style grid
* Mix of:

  * Website screenshots
  * Posters
  * UI previews
* No uniform height → feels organic

### How to Apply to Projects Page

* Use CSS grid or masonry
* Rounded corners on every image
* Add subtle black outline
* No hover overlay text (visual-first)

---

## 8️⃣ Mobile Mockups as Design Elements

![Image](https://cdn.dribbble.com/userupload/14890840/file/original-433566b0e026e3d753658e3c634799f2.png?resize=752x\&vertical=center)

![Image](https://uidesignz.com/assets/img/portfolio/feature/p_5bookme-travel-agency-app-design--min.webp)

![Image](https://s3-alpha.figma.com/hub/file/6643974415/b4ee234a-fe58-4084-b81b-115043cb864e-cover.png)

![Image](https://www.befunky.com/images/wp/wp-2023-10-05-appdesign-photo-photo.jpg?auto=avif%2Cwebp\&format=jpg\&width=944)

### Design Description

* Tall mobile frames placed side-by-side
* Used as **visual storytelling**
* Each screen is colorful and illustrative
* Buttons inside are exaggerated and rounded

### Usage

* Perfect for:

  * Case studies
  * Projects page hero
  * Visual break between sections

---

## 9️⃣ Badge & Tag System

![Image](https://tailkits.com/_ipx/_/pill-badge.png)

![Image](https://cdn.dribbble.com/userupload/10027010/file/original-15490ad800051d96ade0d43fa19ba046.jpg?resize=752x\&vertical=center)

![Image](https://cdn.dribbble.com/userupload/41521914/file/original-f8216b5e526da8354572d6cf3aabd67b.png?resize=400x0)

![Image](https://miro.medium.com/1%2AmHYr_bsjIE_oVFAuHpt6-g.png)

### Design Description

* Small rounded pill badges
* Used for:

  * Names
  * Status
  * Categories
* Strong border
* Pastel background
* Black text

---

## 🔤 Typography Summary (Very Important)

| Element      | Style                                |
| ------------ | ------------------------------------ |
| Headings     | Extra-bold, uppercase                |
| Sub-headings | Bold, sentence case                  |
| Body         | Clean, rounded sans-serif            |
| Buttons      | Bold, compact                        |
| Line height  | Tight for headings, relaxed for body |

Fonts that fit this style:

* Inter
* Poppins
* Satoshi
* Space Grotesk

---

## 🎯 Animation Style (Subtle but Present)

* Scroll-in animations:

  * Fade + slight upward movement
* Hover:

  * Lift, not glow
* No heavy motion
* Everything feels **snappy, tactile**

---

## 🧠 FINAL PROMPT YOU CAN USE IN YOUR IDE

You can literally paste this 👇

```
Apply a playful, outlined UI design system inspired by modern product designer portfolios.

Use:
- Cream/off-white background
- Thick black borders (3–4px)
- Large rounded corners
- Bold pastel accent colors (yellow, pink, mint, purple)
- Sticker-like decorative icons floating around the layout
- Extra-bold hero typography
- Pill-shaped CTA buttons with black borders
- Card-based layouts for services and projects
- Subtle lift animations on hover
- No gradients, no glassmorphism

Design should feel friendly, creative, and handcrafted — not corporate.
```

---