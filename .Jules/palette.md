## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-06-15 - Added keyboard accessibility to interactive div wrappers
**Learning:** Found that interactive `div` elements like `.gallery-item` and `.bar-segment` lacked keyboard accessibility, preventing users from opening modals/lightboxes using the keyboard.
**Action:** When using `div` elements for interactive items with rich content, add `tabindex="0"` and `role="button"`, and add `keydown` event listeners for 'Enter' and 'Space' mapping to `.click()` to ensure full keyboard support while preserving child content accessibility.
