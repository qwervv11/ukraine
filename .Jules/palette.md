## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-08-14 - Keyboard accessibility for interactive div elements
**Learning:** Custom interactive elements like `.gallery-item` and `.bar-segment` require explicit `tabindex="0"`, `role="button"`, and `keydown` event listeners (Enter/Space) to be fully keyboard accessible.
**Action:** Always ensure `div` elements used as interactive triggers have these properties, and specifically use `e.preventDefault()` on the Space key to prevent unintended page scrolling.
