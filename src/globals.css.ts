/*
 * Global reset. Deliberately tiny: Pearl owns color, type, and spacing, so
 * this file only does what a document-level reset must, and reads any value
 * it does need from Pearl's exported tokens rather than re-declaring a
 * parallel palette (this replaced a Vite-template `:root` block that defined
 * its own `--text`/`--bg`/`--accent`/`--sans` — a second source of truth that
 * silently competed with the theme).
 */
import { globalStyle } from '@vanilla-extract/css';
import { color } from '@msanagu/pearl';

globalStyle(':root', {
  colorScheme: 'light',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
});

globalStyle('*', {
  boxSizing: 'border-box',
});

globalStyle('body', {
  margin: 0,
});

/* Margin reset only — no font-family or color here. Every heading on the
   page goes through Pearl's `Text`, which sets its own face and color from
   the theme; forcing them here would override the design system with a
   hardcoded stack. */
globalStyle('h1, h2, h3, h4, h5, h6, p', {
  margin: 0,
});

globalStyle('a', {
  color: color.accent,
});
