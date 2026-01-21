# AOS (Animate On Scroll) Animation Setup

All components have been updated with beautiful scroll animations using the AOS library.

## What Was Added

### 1. **Dependencies** (package.json)
- Added `aos: ^2.3.4` to dependencies

### 2. **Initialization** (src/main.jsx)
- Imported AOS library and CSS
- Initialized AOS with configuration:
  - Duration: 800ms
  - Easing: ease-in-out
  - Offset: 100px
  - Animation runs every time element comes into view

### 3. **Animation Effects Used**

| Component | Animation | Effect |
|-----------|-----------|--------|
| **Sidebar** | fade-in-right | Slides in from right |
| **Navbar** | fade-up | Slides up from bottom |
| **About Section** | fade-in | Fades in smoothly |
| **Services** | zoom-in | Scales in with stagger |
| **Testimonials** | flip-left | Flips horizontally |
| **Clients** | zoom-in | Scales in on scroll |
| **Resume Items** | fade-up | Slides up with delay |
| **Skills** | fade-up | Slides up with stagger |
| **Portfolio** | zoom-in | Scales in with stagger |
| **Contact Form** | fade-up | Slides up with delay |
| **Modal** | zoom-in | Scales in smoothly |

### 4. **How It Works**
- Each element has `data-aos` attribute for animation type
- Optional `data-aos-delay` for staggered animations (50-100ms increments)
- Animations trigger when elements enter viewport
- Smooth easing for professional look

## Installation

Run this command to install AOS:
```bash
npm install
```

Then start the development server:
```bash
npm run dev
```

## Customization

To adjust animations, edit the AOS initialization in `src/main.jsx`:

```javascript
AOS.init({
  duration: 800,      // Change animation duration
  easing: 'ease-in-out', // Change easing function
  once: false,        // Set to true to animate only once
  offset: 100         // Change offset before animation triggers
})
```

## Available AOS Animations

- `fade`, `fade-up`, `fade-down`, `fade-left`, `fade-right`
- `flip-left`, `flip-right`
- `zoom-in`, `zoom-out`
- `slide-up`, `slide-down`, `slide-left`, `slide-right`

Learn more at: https://michalsnik.github.io/aos/

---

All components are now properly animated! Enjoy the enhanced visual appeal. ✨
