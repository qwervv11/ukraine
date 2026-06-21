## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-13 - Add keyboard accessibility to custom interactive elements
**Learning:** Custom interactive components like `.gallery-item` and `.bar-segment` had click handlers and hover states but completely lacked keyboard navigation, which excludes screen reader and keyboard-only users.
**Action:** Always add `tabindex="0"`, `role="button"`, and `keydown` event listeners (for 'Enter' and 'Space') when converting generic `div` elements into interactive controls to ensure UX parity.
