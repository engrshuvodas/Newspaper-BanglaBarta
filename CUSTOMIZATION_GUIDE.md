# 🎨 Advanced Customization Guide

## 🎯 Complete Customization Reference

### Color Customization

#### Primary Colors (Main Brand)
```css
:root {
  --primary-color: #366129;      /* Main green */
  --primary-light: #4a7d39;      /* Lighter shade */
  --primary-dark: #2a4a1f;       /* Darker shade */
}
```

**Where primary color is used:**
- Header background
- Primary buttons
- Active navigation items
- Links
- Headings
- Section titles

**Change example:**
```css
:root {
  --primary-color: #FF5733;      /* Your brand color */
  --primary-light: #FF7F5C;      /* Lighter */
  --primary-dark: #CC3622;       /* Darker */
}
```

#### Secondary Colors (Accent)
```css
:root {
  --secondary-color: #009DA6;    /* Teal */
  --secondary-light: #1ab5bf;    /* Lighter */
  --secondary-dark: #00747c;     /* Darker */
}
```

**Where secondary color is used:**
- Hover effects on links
- Secondary buttons
- Accents in design
- Icons highlights

#### Text Colors
```css
:root {
  --text-dark: #1a1a1a;          /* Main text */
  --text-light: #555;            /* Regular paragraphs */
  --text-muted: #888;            /* Muted/secondary */
}
```

#### Background Colors
```css
:root {
  --bg-light: #f5f5f5;           /* Light sections */
  --bg-white: #ffffff;           /* Main background */
  --border-color: #e0e0e0;       /* Borders */
}
```

### Typography Customization

#### Font Families
```css
:root {
  --font-primary: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  --font-secondary: 'Georgia', serif;
}
```

**Change to different fonts:**
```css
/* Using Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

:root {
  --font-primary: 'Roboto', sans-serif;
  --font-secondary: 'Roboto', sans-serif;
}
```

#### Font Sizes
```css
:root {
  --font-size-base: 16px;        /* Body text */
  --font-size-sm: 14px;          /* Small text */
  --font-size-lg: 18px;          /* Large text */
  --font-size-xl: 24px;          /* Headings */
  --font-size-xxl: 32px;         /* Page titles */
}
```

**Adjust for readability:**
```css
/* Make all text 10% larger */
:root {
  --font-size-base: 17.6px;      /* was 16px */
  --font-size-sm: 15.4px;        /* was 14px */
  --font-size-lg: 19.8px;        /* was 18px */
  /* ... and so on */
}
```

### Spacing Customization

#### Spacing Scale
```css
:root {
  --space-xs: 4px;               /* Tiny */
  --space-sm: 8px;               /* Small */
  --space-md: 16px;              /* Medium */
  --space-lg: 24px;              /* Large */
  --space-xl: 32px;              /* Extra Large */
  --space-xxl: 48px;             /* Huge */
}
```

**Adjust spacing:**
```css
/* More comfortable spacing */
:root {
  --space-md: 20px;              /* More breathing room */
  --space-lg: 30px;              /* Larger gaps */
  --space-xl: 40px;              /* More separation */
}
```

### Border Radius Customization

```css
:root {
  --radius-sm: 4px;              /* Slight rounding */
  --radius-md: 8px;              /* Medium rounding */
  --radius-lg: 12px;             /* Rounded corners */
}
```

**Change to pill-shaped:**
```css
:root {
  --radius-md: 25px;             /* Pill buttons */
  --radius-lg: 30px;             /* More rounded */
}
```

### Shadow Customization

```css
:root {
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.12);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.15);
  --shadow-lg: 0 10px 20px rgba(0, 0, 0, 0.15);
}
```

**Adjust shadow intensity:**
```css
/* Softer shadows */
:root {
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 2px 4px rgba(0, 0, 0, 0.10);
  --shadow-lg: 0 5px 10px rgba(0, 0, 0, 0.10);
}

/* Stronger shadows */
:root {
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.15);
  --shadow-md: 0 6px 12px rgba(0, 0, 0, 0.20);
  --shadow-lg: 0 15px 30px rgba(0, 0, 0, 0.25);
}
```

### Animation Customization

```css
:root {
  --transition-fast: 0.15s ease-in-out;
  --transition-base: 0.3s ease-in-out;
  --transition-slow: 0.5s ease-in-out;
}
```

**Faster animations:**
```css
:root {
  --transition-fast: 0.05s ease-in-out;
  --transition-base: 0.15s ease-in-out;
  --transition-slow: 0.25s ease-in-out;
}
```

## 🛠️ Component Customization

### Header Customization

**Change sticky header to fixed:**
```css
header {
  position: fixed;  /* Instead of sticky */
  width: 100%;
  top: 0;
  z-index: 100;
}

main {
  margin-top: 70px;  /* Add space below fixed header */
}
```

**Remove header shadow:**
```css
header {
  box-shadow: none;
}
```

**Change header height:**
```css
.navbar {
  padding: 10px 0 !important;  /* Compact */
  /* or */
  padding: 20px 0 !important;  /* Spacious */
}
```

### Navigation Customization

**Change nav link color on hover:**
```css
.navbar-nav .nav-link:hover {
  color: #FF5733 !important;    /* Your color */
}
```

**Remove underline on nav links:**
```css
.navbar-nav .nav-link {
  border-bottom: none;  /* Remove underline */
}
```

**Make nav background darker:**
```css
.navbar {
  background: #f0f0f0 !important;  /* Lighter gray */
  /* or */
  background: rgba(54, 97, 41, 0.95) !important;  /* Dark green */
}
```

### Button Customization

**Make buttons larger:**
```css
.btn {
  padding: 12px 24px;  /* Bigger padding */
  font-size: 18px;     /* Larger text */
}
```

**Make buttons rounder:**
```css
.btn {
  border-radius: 25px;  /* Pill shape */
}
```

**Add button borders:**
```css
.btn-primary {
  border: 2px solid var(--primary-color);
}

.btn-primary:hover {
  border-color: var(--primary-dark);
}
```

### Card Customization

**Remove card shadow:**
```css
.card {
  box-shadow: none;
  border: 1px solid var(--border-color);
}
```

**Increase card lift on hover:**
```css
.card:hover {
  transform: translateY(-8px);  /* More lift */
}
```

**Disable card hover effect:**
```css
.card:hover {
  transform: none;
  box-shadow: var(--shadow-sm);
}
```

### Footer Customization

**Change footer color:**
```css
footer {
  background: #1a1a1a;  /* Dark gray */
  /* or */
  background: linear-gradient(135deg, #366129, #00747c);  /* Gradient */
}
```

**Change footer text color:**
```css
footer {
  color: #ffffff;
}

footer a {
  color: #FFD700;  /* Gold links */
}
```

## 🎬 Animation Customization

### Add more animations

**Slide-up animation for cards:**
```css
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card {
  animation: slideUp var(--transition-base);
}
```

**Bounce animation:**
```css
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.btn:hover {
  animation: bounce var(--transition-base);
}
```

### Disable animations for accessibility

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 📱 Responsive Customization

### Custom breakpoints

**Add breakpoint for large desktop:**
```css
@media (min-width: 1440px) {
  .container {
    max-width: 1320px;
  }
  
  h1 {
    font-size: 36px;  /* Even larger */
  }
}
```

**Adjust mobile breakpoint:**
```css
@media (max-width: 600px) {  /* Changed from 480px */
  body {
    font-size: 13px;
  }
  
  h1 {
    font-size: 18px;
  }
}
```

## 🌓 Dark Mode (Add Custom)

**Add dark mode variant:**
```css
@media (prefers-color-scheme: dark) {
  :root {
    --text-dark: #ffffff;
    --text-light: #cccccc;
    --bg-white: #1a1a1a;
    --border-color: #333333;
  }
}
```

**Or toggle with JS:**
```javascript
// In script.js
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// In CSS
body.dark-mode {
  background: #1a1a1a;
  color: #ffffff;
}
```

## 🎯 Status Colors

### Add status indicators

```css
:root {
  --success-color: #28a745;
  --warning-color: #ffc107;
  --error-color: #dc3545;
  --info-color: #17a2b8;
}

/* Use in alerts */
.alert-success {
  background: var(--success-color);
  color: white;
}

.alert-error {
  background: var(--error-color);
  color: white;
}
```

## 🖼️ Image Customization

**Add border to images:**
```css
img {
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
}
```

**Add shadow to images:**
```css
.article-image {
  box-shadow: var(--shadow-md);
}
```

**Grayscale on hover:**
```css
.article-image:hover {
  filter: grayscale(0%);  /* Adds color on hover */
}

.article-image {
  filter: grayscale(10%);  /* Slightly desaturated */
}
```

## 📝 Form Customization

**Change input border color:**
```css
.form-input:focus {
  border-color: #FF5733;  /* Your color */
  box-shadow: 0 0 0 3px rgba(255, 87, 51, 0.1);
}
```

**Make inputs rounder:**
```css
.form-input,
.form-select,
textarea {
  border-radius: 10px;  /* More rounded */
}
```

**Change button in form:**
```css
form .btn {
  width: 100%;  /* Full width */
  margin-top: var(--space-lg);
}
```

## 🔗 Link Customization

**Change link colors:**
```css
a {
  color: #0066cc;  /* Blue */
}

a:hover {
  color: #FF5733;  /* Orange on hover */
}

a:visited {
  color: #660066;  /* Purple after visited */
}
```

**Add underline to all links:**
```css
a {
  text-decoration: underline;
}

a:hover {
  text-decoration: none;
}
```

## 🎨 Complete Color Theme Examples

### Modern Blue
```css
:root {
  --primary-color: #2563eb;
  --primary-light: #3b82f6;
  --primary-dark: #1d4ed8;
  --secondary-color: #0891b2;
}
```

### Warm Orange
```css
:root {
  --primary-color: #ea580c;
  --primary-light: #f97316;
  --primary-dark: #c2410c;
  --secondary-color: #f59e0b;
}
```

### Professional Purple
```css
:root {
  --primary-color: #7c3aed;
  --primary-light: #a78bfa;
  --primary-dark: #6d28d9;
  --secondary-color: #ec4899;
}
```

### Clean Gray
```css
:root {
  --primary-color: #374151;
  --primary-light: #4b5563;
  --primary-dark: #1f2937;
  --secondary-color: #6b7280;
}
```

---

**Remember:** All changes are in CSS variables, so edit `:root` at the top of `style.css` and watch your entire site transform!

**Pro Tip:** Use DevTools → Inspect → Edit live CSS to preview changes before saving them permanently.
