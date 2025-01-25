# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

## Production Build

```bash
# Build for production
pnpm build
```

This creates a `dist` directory with the production build.

### Running Production Build

You have two options to run the production build:

1. Using Vite's built-in preview server:

```bash
pnpm preview
```

2. Using any static file server to serve the `dist` directory. For example:
   - Using `serve` package: `npx serve dist`
   - Using Python: `python3 -m http.server --directory dist`
   - Using PHP: `php -S localhost:8000 -t dist`

Note: The app must be served from a web server - opening the HTML file directly in a browser won't work due to how the assets are referenced.

## Plugins

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
