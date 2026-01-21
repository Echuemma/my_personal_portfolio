# Echu Emmanuel's Portfolio - React + Vite

A modern, responsive portfolio website built with React and Vite.

## Project Structure

```
port/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx          # Sidebar with contact info
│   │   ├── Navbar.jsx           # Navigation bar
│   │   ├── TestimonialModal.jsx # Modal for testimonials
│   │   └── pages/
│   │       ├── About.jsx        # About page with services & testimonials
│   │       ├── Resume.jsx       # Education, experience & skills
│   │       ├── Portfolio.jsx    # Projects showcase
│   │       └── Contact.jsx      # Contact form
│   ├── styles/
│   │   └── App.css              # All styling (responsive design)
│   ├── assets/
│   │   └── images/              # Local images (move your images here)
│   ├── App.jsx                  # Main app component
│   └── main.jsx                 # React entry point
├── public/                       # Static files
├── index.html                    # HTML entry point
├── vite.config.js               # Vite configuration
├── package.json                 # Dependencies & scripts
└── README.md                     # This file
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Move your local images:**
   Copy your image files from `/images` to `/src/assets/images`:
   - niceman.jpg
   - adept.png
   - advanztek.png
   - personal.png
   - samloriden.png
   - Screenshot 2026-01-19 152709.png

### Running the Project

**Development Mode:**
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

**Production Build:**
```bash
npm run build
```

**Preview Production Build:**
```bash
npm run preview
```

## Key Features

✅ **React Hooks** - State management with useState  
✅ **Component-based** - Reusable, modular components  
✅ **Responsive Design** - Mobile, tablet, and desktop support  
✅ **Fast Builds** - Vite provides instant HMR  
✅ **Modern CSS** - CSS variables, gradients, and animations  
✅ **Ionicons** - Icon library integration  

## Component Overview

| Component | Purpose |
|-----------|---------|
| `App.jsx` | Main app state & page routing |
| `Sidebar` | Profile & contact information |
| `Navbar` | Navigation between pages |
| `About` | About you, services, testimonials |
| `Resume` | Education, experience, skills |
| `Portfolio` | Project showcase with filtering |
| `Contact` | Contact form & map |
| `TestimonialModal` | Modal for detailed testimonials |

## Next Steps

1. **Update Content:**
   - Replace text with your actual information
   - Update links and social profiles
   - Customize colors in CSS variables if needed

2. **Add Images:**
   - Place all images in `src/assets/images/`
   - Update image paths in components as needed

3. **Deploy:**
   - Push to GitHub
   - Deploy with Vercel, Netlify, or GitHub Pages
   - Build command: `npm run build`
   - Output folder: `dist/`

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool & dev server
- **CSS3** - Styling with variables & responsive design
- **Ionicons** - Icon library

## Notes

- The old `main.js` logic has been converted to React hooks
- CSS remains largely the same with responsive media queries intact
- All data is hardcoded in components (can be moved to a separate data file)
- Form validation is basic; add backend integration as needed

## License

This project is your personal portfolio. Feel free to customize and deploy!
