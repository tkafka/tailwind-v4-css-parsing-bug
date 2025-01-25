# Tailwind 4.0 css parsing bug?

This demo demonstrates, how a single typo in `@theme` section in `style.css` causes the page to have broken css in production.
The dev build is fine, and there is no error message in production.
This can let to a single typo silently breaking the production.

## Reproduction steps:

1. Install dependencies:

```bash
pnpm install
```

2. Dev build looks fine:

```bash
pnpm dev
```

3. Production build has broken styling, no error is produced:

```bash
pnpm build && pnpm preview
```

This is caused by a typo in `style.css` in `--shadow-inset-bad` - it has invalid `rgb(var(from --color-secondary-500) r g b / 0.08)` instead of `rgb(from var(--color-secondary-500) r g b / 0.08)` (`from` is in the wrong place).

Commenting out the `--shadow-inset-bad` style causes the production build to have a proper styling.

This seems like an error caused by different behavior of css parsing in development vs. in production. I believe that either the parser should work in a same way in development and production mode, or it should report found errors in css.
