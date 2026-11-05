## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-24 - Make interactive divs keyboard accessible
**Learning:** Interactive `div` elements acting as buttons (like gallery items and map markers) need `tabindex="0"`, `role="button"`, and explicit keyboard event handlers (for Enter/Space) to be fully accessible.
**Action:** When using non-semantic elements for interactions, always add appropriate ARIA roles, tabindex, and map keyboard events to their click handlers to ensure screen reader and keyboard user support.
