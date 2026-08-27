/*
 * Page-level layout only — everything else (color, type, spacing rhythm,
 * card/button chrome) comes from Pearl.
 *
 * Authored in vanilla-extract (Pearl's own styling engine, ADR-0001) rather
 * than plain CSS specifically so it can import Pearl's token objects and use
 * them in the same form Pearl does internally — `space.lg`, not a re-declared
 * `--space-lg`. Pearl ships hashed custom-property names, so a plain
 * stylesheet has nothing stable to reference; importing the tokens is the
 * supported path for a consuming app.
 */
import { globalStyle, style } from '@vanilla-extract/css';
import { space } from '@msanagu/pearl';

const CONTENT_WIDTH = '760px';

/**
 * Print insets are physical units, not Pearl space tokens, on purpose: these
 * position content against a sheet of paper, so they belong in inches like
 * the `@page` rule they pair with — not on the screen spacing scale.
 */
const PRINT_EDGE = '0.4in';

export const page = style({
  maxWidth: CONTENT_WIDTH,
  margin: `${space['2xl']} auto calc(2 * ${space['2xl']})`,
  padding: `0 ${space.lg}`,

  '@media': {
    '(max-width: 600px)': {
      margin: `${space.xl} auto ${space['2xl']}`,
      padding: `0 ${space.md}`,
    },
    print: {
      maxWidth: 'none',
      margin: 0,
      /* Horizontal inset lives here, not on `@page`: left/right padding
         applies to every fragment of a broken box, so it holds on all pages —
         and it keeps Card borders off the printable-area boundary, where a
         1px line gets clipped by rounding (and where the print dialog's own
         margin setting can override `@page` out from under us). Top padding
         stacks on the `@page` margin for page 1's fragment only, giving the
         masthead extra room without leaving later pages flush. */
      padding: `0.15in ${PRINT_EDGE} 0`,
    },
  },
});

export const toolbar = style({
  position: 'sticky',
  top: 0,
  zIndex: 10,
  maxWidth: CONTENT_WIDTH,
  margin: '0 auto',
  padding: `${space.md} ${space.lg}`,
});

export const block = style({
  marginBottom: `calc(${space.xl} + ${space.sm})`,

  '@media': {
    print: {
      marginBottom: `calc(${space.md} + ${space.xs})`,
    },
  },
});

export const summary = style({
  /* The header Stack and this Card are siblings with no shared gap, so
     without this they sit flush — most visible once the contact row wraps to
     two lines on narrow screens. */
  marginTop: space.lg,
  marginBottom: `calc(${space.xl} + ${space.sm})`,
  '@media': {
    print: {
      /* Header/contact/about got hit hardest by the print type compaction —
         giving this section back some of the room the rest of the page
         traded away for length. */
      marginTop: `calc(${space.md} + ${space.xs})`,
      marginBottom: space.xl,
      breakInside: 'avoid',
    },
  },
});

export const jobCard = style({
  '@media': {
    print: {
      breakInside: 'avoid',
    },
  },
});

export const contactRow = style({
  /* Longhands, not the `gap` shorthand: Pearl's `Row` sets `gap` from its
     own prop, and these override just the axis we need while inheriting the
     rest. Row gap matters once the items wrap onto multiple lines. */
  rowGap: space.sm,

  '@media': {
    '(max-width: 600px)': {
      columnGap: space.md,
    },
    print: {
      marginTop: `calc(${space.sm} + ${space.xs})`,
    },
  },
});

/**
 * Each icon + label pair stays one unwrappable unit. Without this the flex
 * items shrink below their content on narrow screens, so a long value (the
 * phone number, the LinkedIn URL) wraps mid-item and collides with its
 * neighbour instead of moving to the next line.
 */
export const contactItem = style({
  flexShrink: 0,
  whiteSpace: 'nowrap',
});

export const plainLink = style({
  textDecoration: 'none',
  color: 'inherit',

  ':hover': {
    textDecoration: 'underline',
  },
});

export const skillsGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: `calc(${space.md} + ${space.xs})`,

  '@media': {
    '(max-width: 600px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

export const colophon = style({
  marginTop: space['2xl'],
});

export const pageFooter = style({
  textAlign: 'center',
  marginTop: space.lg,
});

export const noPrint = style({
  '@media': {
    print: {
      display: 'none',
    },
  },
});

/* Every Pearl token (type sizes, Card padding, Button height, Row/Stack
   gaps) is rem — relative to the root, not to `.page`. One override here
   scales the whole layout's density at once for print, the same lever
   Pearl's `globalStyles.css.ts` documents for accessibility, just turned the
   other way. Much past this and it stops being legible; the next lever is
   trimming content, not shrinking further. */
globalStyle('html', {
  '@media': {
    print: {
      fontSize: '12px',
    },
  },
});

/* Deliberately white on paper, not Pearl's alabaster: a full-bleed tint lays
   toner across the whole sheet, which bands on office printers and burns ink
   for no benefit — and white is what recruiters' print and ATS workflows
   expect from a resume PDF. Cards keep their borders, so the structure still
   reads without the page tint. `!important` because main.tsx sets <html>'s
   background as an inline style.

   print-color-adjust on both: browsers skip background painting in print
   unless allowed per element, and it's still needed here so Card surfaces,
   borders, and Tag pills print rather than dropping out. */
globalStyle('html, body', {
  '@media': {
    print: {
      background: '#fff !important',
      WebkitPrintColorAdjust: 'exact',
      printColorAdjust: 'exact',
    },
  },
});

/* Card's own shadow (a tight, near-invisible `borderStrong`-tinted shadow on
   screen) renders as a solid visible ring once `print-color-adjust: exact`
   above forces exact color preservation — a print-fidelity quirk of that fix,
   not a Pearl bug. Dropped for print only, via the documented override
   contract (data-component, not Card's class internals) — the border alone
   still defines the card edge. */
globalStyle('[data-component="card"]', {
  '@media': {
    print: {
      boxShadow: 'none',
    },
  },
});
