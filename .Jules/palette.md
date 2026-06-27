## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-13 - Interactive Div Elements Require Explicit Keydown Handlers
**Learning:** Found that interactive `div` elements (like `.gallery-item` and `.bar-segment` used for modals and lightboxes) lack innate keyboard accessibility. Simply adding a click listener is insufficient for screen readers and keyboard navigation.
**Action:** Always add `tabindex="0"`, `role="button"`, and an explicit `keydown` listener mapping 'Enter' and 'Space' keys to `.click()` for custom interactive `div` elements to ensure full keyboard accessibility.
