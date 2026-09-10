## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-13 - Made custom interactive div elements keyboard accessible
**Learning:** Found interactive `div` elements like `.gallery-item` and `.bar-segment` acting as buttons without keyboard support (`tabindex`, `role`, or keydown handlers).
**Action:** Add `tabindex="0"`, `role="button"`, and `keydown` event listeners for 'Enter' and 'Space' (with `preventDefault()`) to ensure full keyboard accessibility.
