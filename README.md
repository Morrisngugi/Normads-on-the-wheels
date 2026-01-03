# Nomads on Wheels 🚙

A modern, responsive website for Nomads on Wheels - showcasing authentic Kenyan safari adventures, cultural immersion experiences, and off-road expeditions.

## 🎨 Design Philosophy

The website features a logo-inspired color palette that captures the essence of Kenya's landscapes:

- **Savanna Gold** (#E8B84C) - Warm sunset hues
- **Dusty Tan** (#F5EFE1) - Primary background, evoking safari dust
- **Safari Green** (#75896A) - Navigation and natural elements
- **Terracotta** (#BC5E3C) - Call-to-action accents
- **Deep Umber** (#3B312A) - Primary text and footer
- **Sky Blue** (#BBDDDF) - Subtle accents

## 📁 Project Structure

```
nomads-on-wheels/
├── index.html              # Main HTML structure
├── styles.css              # Complete styling with logo color palette
├── assets/
│   ├── images/
│   │   ├── logo.svg                  # Your logo (to be added)
│   │   ├── kenya-safari-poster.jpg   # Hero video poster (to be added)
│   │   ├── philosophy-image.jpg      # Philosophy section image (to be added)
│   │   ├── journey-safari.jpg        # Safari journey card (to be added)
│   │   ├── journey-culture.jpg       # Cultural journey card (to be added)
│   │   └── journey-offroad.jpg       # Off-road journey card (to be added)
│   └── videos/
│       └── kenya-safari.mp4          # Hero background video (to be added)
└── scripts/
    └── main.js                       # Interactive JavaScript functionality
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- VS Code (recommended) or any text editor
- Basic understanding of HTML/CSS (optional)

### Installation

1. **Open the project in VS Code:**
   ```
   File > Open Folder > Select "nomads-on-wheels"
   ```

2. **Add your media assets:**
   - Place your logo file in `assets/images/` as `logo.svg`
   - Add your images to `assets/images/` following the naming convention above
   - Add your hero video to `assets/videos/` as `kenya-safari.mp4`

3. **Open the website:**
   - Right-click on `index.html`
   - Select "Open with Live Server" (if you have the Live Server extension)
   - Or simply open `index.html` in your web browser

### Recommended VS Code Extensions

- **Live Server** - Launch a local development server with live reload
- **HTML CSS Support** - IntelliSense for HTML class and id attributes
- **Prettier** - Code formatter for consistent styling

## 📝 Customization Guide

### Updating Content

#### 1. **Navigation Logo & Text**
Edit the logo and site name in the navbar (lines 17-22 in index.html):
```html
<div class="logo">
    <img src="assets/images/logo.svg" alt="Your Company Name">
    <span class="logo-text">Your Company Name</span>
</div>
```

#### 2. **Hero Section**
Update the hero title and subtitle (lines 36-39 in index.html):
```html
<h1 class="hero-title">Your Tagline Here</h1>
<p class="hero-subtitle">Your description here</p>
```

#### 3. **Philosophy Section**
Edit your company's philosophy (lines 46-52 in index.html):
```html
<p>Your philosophy text here...</p>
```

#### 4. **Journey Cards**
Customize each journey card's title, description, and features (lines 63-131 in index.html):
```html
<h3>Journey Name</h3>
<p>Journey description...</p>
<ul class="card-features">
    <li>Feature 1</li>
    <li>Feature 2</li>
</ul>
```

#### 5. **Contact Information**
Update footer contact details (lines 180-183 in index.html):
```html
<p>Email: your-email@example.com</p>
<p>Phone: +254 XXX XXX XXX</p>
<p>Your City, Kenya</p>
```

### Changing Colors

All colors are defined as CSS variables in `styles.css` (lines 9-15). To change the theme:

```css
:root {
    --savanna-gold: #E8B84C;      /* Change this to your color */
    --dusty-tan: #F5EFE1;          /* Change this to your color */
    --safari-green: #75896A;       /* Change this to your color */
    --terracotta: #BC5E3C;         /* Change this to your color */
    --deep-umber: #3B312A;         /* Change this to your color */
    --sky-blue: #BBDDDF;           /* Change this to your color */
}
```

### Adding New Sections

To add a new section, follow this template:

```html
<section id="new-section" class="new-section">
    <div class="container">
        <h2>Section Title</h2>
        <p>Section content...</p>
    </div>
</section>
```

Then add corresponding CSS in `styles.css`.

## ✨ Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Hero Video Background** - Engaging video with fallback poster image
- **Smooth Scrolling** - Elegant navigation between sections
- **Interactive Cards** - Hover effects and animations for journey cards
- **Form Validation** - Client-side validation for contact form
- **Active Navigation** - Highlights current section in navbar while scrolling
- **Accessibility** - Semantic HTML and proper ARIA labels

## 🛠️ JavaScript Functionality

The `main.js` file includes:

- Smooth scrolling navigation
- Navbar scroll behavior and shadow effects
- Active section highlighting
- Contact form validation
- Journey card interactions
- Video fallback handling
- Scroll-triggered animations using Intersection Observer

## 📱 Responsive Breakpoints

- **Desktop:** 1200px and above
- **Tablet:** 768px - 1199px
- **Mobile:** 480px - 767px
- **Small Mobile:** Below 480px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📦 Deployment

### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Push your code to the repository
3. Go to Settings > Pages
4. Select your main branch
5. Your site will be live at `https://yourusername.github.io/nomads-on-wheels`

### Option 2: Netlify (Free)
1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Your site will be live instantly with a unique URL

### Option 3: Traditional Web Hosting
1. Get web hosting with cPanel
2. Upload files via FTP
3. Access via your domain

## 📄 File Sizes & Performance

To optimize performance:

- **Images:** Use JPEG for photos (recommended max 500KB each)
- **Video:** Compress the hero video to under 5MB for faster loading
- **Logo:** Use SVG format for crisp scaling at any size

### Image Optimization Tools
- [TinyPNG](https://tinypng.com/) - Compress PNG/JPEG images
- [Squoosh](https://squoosh.app/) - Advanced image compression
- [HandBrake](https://handbrake.fr/) - Video compression

## 🐛 Troubleshooting

### Images Not Showing
- Check file paths are correct and match case-sensitivity
- Ensure images are in the correct folder: `assets/images/`
- Verify file extensions match (e.g., `.jpg` vs `.jpeg`)

### Video Not Playing
- Check browser console for errors
- Ensure video format is MP4 (H.264 codec)
- Verify file size isn't too large (under 10MB recommended)
- The poster image will show if video fails to load

### Styling Issues
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check that `styles.css` is in the same folder as `index.html`
- Verify no typos in class names

## 📞 Support

For questions or issues with this template:
- Review the code comments in each file
- Check the browser console for JavaScript errors
- Validate HTML at [W3C Validator](https://validator.w3.org/)

## 📜 License

This project is free to use for your business. Feel free to customize and deploy as needed.

## 🎯 Next Steps

1. ✅ Add your logo to `assets/images/logo.svg`
2. ✅ Add your images to `assets/images/`
3. ✅ Add your hero video to `assets/videos/`
4. ✅ Update all text content to match your brand
5. ✅ Update contact information in the footer
6. ✅ Test on different devices and browsers
7. ✅ Deploy to your hosting platform

---

**Built with ❤️ for Nomads on Wheels**

*Ready to showcase your authentic Kenyan adventures to the world!*
