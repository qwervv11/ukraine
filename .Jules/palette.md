## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2026-05-28 - Keyboard Accessibility for Custom Interactive Elements
**Learning:** Interactive non-button elements (like `div`s used as buttons) must have `tabindex="0"`, `role="button"`, `aria-label` (if icon-only or lacking text), and listen for keyboard events (`Enter` and `Space`) to be fully accessible to keyboard users.
**Action:** Always verify keyboard accessibility of interactive elements and implement necessary ARIA and event handling attributes when using `div` or `span` as buttons.
