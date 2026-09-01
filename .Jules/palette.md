## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2025-02-12 - Added keyboard accessibility to interactive divs
**Learning:** Found that custom interactive `div` elements (e.g. `.gallery-item` and `.bar-segment`) were missing `tabindex="0"`, `role="button"`, and `keydown` event listeners for "Enter" and "Space" keys, making them completely inaccessible to keyboard users.
**Action:** When using non-semantic elements like `div` for interactive controls, always add `tabindex="0"`, `role="button"`, and handle `keydown` events (mapping "Enter" and "Space" to the element's existing `click()` functionality) to ensure full keyboard accessibility.
