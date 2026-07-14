## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-14 - Interactive div accessibility requires custom keydown listeners
**Learning:** Found custom interactive `div` elements (`.gallery-item`, `.bar-segment`) in the repository that were mapped to mouse clicks but completely lacked keyboard interactivity (no `tabindex`, no `role`, no `keydown` events).
**Action:** When adding accessibility to interactive `div` or `span` elements, always append `tabindex="0"`, `role="button"`, and a `keydown` listener mapping 'Enter' and 'Space' keys to `.click()`.
