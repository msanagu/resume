import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { pearlLightThemeClass, pearlTreatmentClass, vars } from '@msanagu/design-system';
import '@msanagu/design-system/index.css';
import './index.css';
import App from './App.tsx';

// The printed sheet's full area — including the `@page` margin band — is
// painted from the ROOT element's background (canvas background
// propagation), not from <body> or the themed div. But `vars.color.background`
// is a custom property scoped to `pearlLightThemeClass`: it resolves only on
// that element and its descendants, so <html> (an ancestor) can't reference
// it directly. So: put the theme on <body> to bring the var into scope, read
// the *resolved* color back out, and hand <html> that literal value.
document.body.classList.add(pearlLightThemeClass, pearlTreatmentClass);
document.body.style.background = vars.color.background;
document.documentElement.style.background =
  getComputedStyle(document.body).backgroundColor;

// Same pattern Pearl's own Storybook preview uses: a theme class as an
// ancestor is what every component's `vars.*` reads resolve against, plus
// pearlTreatmentClass for the sphere's luster. Nothing below this div knows
// it's themed — that's the point (roadmap.md's reskinning model).
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* No `background` here — <body> above paints it, and its background is
        what propagates to the page canvas. A second background on this div
        would cover the content area only, re-creating the edge mismatch in
        reverse the moment print overrides the page color. */}
    <div
      className={`${pearlLightThemeClass} ${pearlTreatmentClass}`}
      style={{
        color: vars.color.text,
        fontFamily: vars.fontFamily.body,
        minHeight: '100vh',
      }}
    >
      <App />
    </div>
  </StrictMode>,
);
