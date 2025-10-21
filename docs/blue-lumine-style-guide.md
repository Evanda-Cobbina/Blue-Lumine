# Blue Lumine Style Guide

## 🧩 1. Brand Overview
**Name:** Blue Lumine  
**Tone:** Professional, analytical, forward-thinking, and minimal  

---

## 🖋 2. Typography

### Primary Typeface
**Font Family:** `'Bagoss Standard TRIAL', sans-serif;`  
**Usage:** All headings, body text, and buttons  

### Font Weights
- **400** — Regular text and paragraphs  
- **500–600** — Navigation, small titles, and UI labels  
- **700** — Headings and emphasized text  

### Line Spacing
- Headings: `1.1–1.2`
- Body: `1.5`

### Letter Spacing
- Headings: `-0.02em`
- Body: `normal`

#### CSS Example
```css
body {
  font-family: 'Bagoss Standard TRIAL', sans-serif;
  font-weight: 400;
  color: #0B0B0B;
  line-height: 1.5;
}

h1, h2, h3, h4, h5 {
  font-weight: 700;
  letter-spacing: -0.02em;
}
```

---

## 🎨 3. Color Palette

| Name | Hex | Usage |
|------|------|--------|
| **Lumine Blue** | `#204ECF` | Primary brand color — buttons, highlights, accents |
| **Deep Navy** | `#0B0B0B` | Headlines, primary text |
| **Neutral Gray** | `#6B6B6B` | Secondary text |
| **Soft White** | `#FFFFFF` | Background |
| **Accent Sky** | `#DDE6FF` | Background tints, icons |
| **Success Green** | `#14C484` | Positive indicators (+14%) |

---

## 🧭 4. Layout & Spacing

- **Container width:** `1200px` max  
- **Section padding:** `80px 0` desktop, `40px 0` mobile  
- **Grid:** Two- or three-column flex layouts for features  
- **Alignment:** Center-aligned hero, left-aligned text sections  

---

## 🔤 5. Headings Hierarchy

| Element | Example | Font Size | Font Weight |
|----------|----------|------------|--------------|
| **H1** | “Monetization for data-driven businesses” | `clamp(2.5rem, 5vw, 4rem)` | 700 |
| **H2** | “Unlock Smarter Revenue™” | `clamp(2rem, 3vw, 3rem)` | 700 |
| **H3** | “Efficient tax collection” | `1.25rem` | 600 |
| **Body** | Paragraph text | `1rem` | 400 |

---

## 🖱 6. Buttons

### Primary Button
```css
.button-primary {
  background-color: #204ECF;
  color: #fff;
  padding: 0.9rem 2rem;
  border-radius: 9999px;
  font-weight: 500;
  transition: background 0.3s ease;
}
.button-primary:hover {
  background-color: #163CA3;
}
```

### Usage
- “Get started”, “Contact Sales”

---

## 🧭 7. Navigation

- Font weight: `500`
- Font size: `1rem`
- Color: `#0B0B0B`
- Hover color: `#204ECF`
- Spacing: `2rem` between items
- Right-aligned button: “Contact Sales”

---

## 🧱 8. Iconography & Illustrations

- Rounded, geometric icons with consistent line weight  
- Use **Lumine Blue (#204ECF)** and **Accent Sky (#DDE6FF)**  
- Maintain soft drop shadows (`rgba(0,0,0,0.05)`)  

---

## 💡 9. Imagery & Visuals
- Prefer **clean vector illustrations** or **flat UI mockups**  
- Consistent use of blue, white, and black for contrast  
- Graphs or analytics visuals should feature the brand blue prominently  

---

## ⚙️ 10. Global Styles
```css
:root {
  --color-primary: #204ECF;
  --color-dark: #0B0B0B;
  --color-gray: #6B6B6B;
  --color-bg: #FFFFFF;
  --font-main: 'Bagoss Standard TRIAL', sans-serif;
}

* {
  font-family: var(--font-main);
  color: var(--color-dark);
  box-sizing: border-box;
}
```
