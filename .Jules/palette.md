## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-13 - Keyboard Accessibility for Interactive Divs
**Learning:** Interactive `div` elements (like `.gallery-item` and `.bar-segment`) require explicit `keydown` event listeners mapping 'Enter' and 'Space' keys to `.click()`, along with `tabindex` and `role` attributes, to ensure full keyboard accessibility. Mouse-only click listeners are insufficient.
**Action:** Always verify that custom interactive elements implemented using non-semantic tags (`div`, `span`) have matching keyboard interaction support alongside their mouse event listeners.
