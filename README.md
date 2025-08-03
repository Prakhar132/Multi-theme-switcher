# Multi-Theme Switcher App

A modern React TypeScript application featuring a dynamic theme switcher with three distinct themes, API integration, and smooth animations.

## 🎨 Features

### Theme System
- **Theme 1 (Minimalist)**: Clean, light design with sans-serif typography
- **Theme 2 (Dark Mode)**: Elegant dark theme with sidebar layout and serif fonts
- **Theme 3 (Colorful)**: Vibrant design with Pacifico font and card-based layout

### Core Features
- ✅ Theme persistence across page reloads (localStorage)
- ✅ React Context API for theme management
- ✅ API integration with FakeStore API
- ✅ Responsive design for all devices
- ✅ Smooth animations with Framer Motion
- ✅ React Router for multi-page navigation
- ✅ TypeScript for type safety
- ✅ Styled-components for styling
- ✅ Security best practices

### Pages
- **Home**: Product showcase with API data
- **About**: Feature overview and theme descriptions
- **Contact**: Contact form with validation

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd multi-theme-switcher
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🛠️ Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.tsx     # Navigation and theme switcher
│   └── ProductCard.tsx # Product display component
├── context/            # React Context
│   └── ThemeContext.tsx # Theme management
├── pages/              # Page components
│   ├── Home.tsx       # Home page with products
│   ├── About.tsx      # About page
│   └── Contact.tsx    # Contact page
├── themes/             # Theme definitions
│   └── themes.ts      # Theme configurations
├── types/              # TypeScript types
│   └── theme.ts       # Theme type definitions
├── App.tsx            # Main app component
└── index.tsx          # Entry point
```

## 🎯 Theme Differences

### Theme 1 - Minimalist
- Light background with clean typography
- Simple grid layout
- Professional color scheme
- Sans-serif fonts

### Theme 2 - Dark Mode
- Dark background with elegant colors
- Sidebar navigation layout
- Serif typography
- Sophisticated spacing

### Theme 3 - Colorful
- Vibrant color palette
- Card-based grid layout
- Pacifico Google Font
- Playful animations

## 🔧 Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Styled-components** - CSS-in-JS styling
- **Framer Motion** - Animations
- **React Router** - Navigation
- **FakeStore API** - Product data

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🔒 Security Features

- Input validation on forms
- XSS protection
- Secure API calls
- TypeScript for type safety

## 🎨 Customization

### Adding New Themes

1. Define theme in `src/themes/themes.ts`:
```typescript
theme4: {
  id: 'theme4',
  name: 'Custom Theme',
  colors: { /* your colors */ },
  typography: { /* your typography */ },
  spacing: { /* your spacing */ },
  layout: { /* your layout */ }
}
```

2. Add to theme switcher in `Header.tsx`

### Modifying Existing Themes

Edit the theme objects in `src/themes/themes.ts` to customize:
- Colors
- Typography
- Spacing
- Layout properties

## 🐛 Troubleshooting

### Common Issues

1. **Theme not persisting**: Check localStorage in browser dev tools
2. **API not loading**: Verify network connection and API endpoint
3. **Animations not working**: Ensure Framer Motion is installed

### Development

```bash
# Run tests
npm test

# Build for production
npm run build

# Eject (not recommended)
npm run eject
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For questions or support, please open an issue on GitHub.

---

**Built with ❤️ using React, TypeScript, and Styled-components** 