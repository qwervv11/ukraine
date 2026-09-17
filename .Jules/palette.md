## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-13 - Made interactive div elements keyboard accessible
**Learning:** Interactive `div` elements (like `.gallery-item`, `.bar-segment`) acting as buttons require explicit `keydown` event listeners for 'Enter' and 'Space' keys, along with `tabindex="0"` and `role="button"`, to be fully keyboard accessible.
**Action:** Always verify that custom interactive elements created with `div` or `span` have appropriate keyboard event listeners mapping action keys to `.click()` and the necessary accessibility attributes.
