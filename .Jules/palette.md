## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-24 - Keyboard accessibility for interactive div wrappers
**Learning:** Custom interactive elements like `.gallery-item` and `.bar-segment` acting as buttons need `tabindex="0"`, `role="button"`, and explicit `keydown` listeners for Enter/Space to ensure keyboard accessibility.
**Action:** When converting static `div` elements into interactive elements, always ensure they are fully accessible via keyboard by adding `tabindex`, `role`, and mapping Enter/Space to `.click()`.
