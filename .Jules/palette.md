## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2026-05-21 - Keyboard Accessibility for Custom Interactive Elements
**Learning:** Interactive elements implemented as `div`s (like the gallery items and timeline bar segments in this app) are completely invisible to keyboard users and screen readers by default.
**Action:** When creating or modifying custom interactive elements (e.g., clickable `div`s), always ensure they have `tabindex="0"`, `role="button"` (or other appropriate role), a descriptive `aria-label`, and explicit `keydown` event listeners for the `Enter` and `Space` keys.
