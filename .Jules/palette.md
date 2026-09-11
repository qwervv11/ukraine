## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2025-02-12 - Adding keyboard accessibility to interactive non-semantic elements
**Learning:** Found several interactive `div` elements (like `.gallery-item` and `.bar-segment`) that lacked keyboard accessibility (not focusable and couldn't be triggered via keyboard).
**Action:** Always ensure interactive `div` elements have `tabindex="0"`, `role="button"`, and a `keydown` event listener that maps 'Enter' and 'Space' keys to the element's existing `click` event (ensuring `e.preventDefault()` is called for 'Space').
