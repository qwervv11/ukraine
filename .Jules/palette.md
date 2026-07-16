## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2026-07-16 - Keyboard accessibility for custom interactive div elements
**Learning:** Discovered that custom interactive `div` elements (like `.gallery-item` and `.bar-segment`) lacked keyboard event listeners mapping 'Enter' and 'Space' to `.click()`. Adding `tabindex="0"` and `role="button"` makes them focusable but fails to make them fully accessible unless keyboard events explicitly handle activation.
**Action:** Always pair `tabindex` and `role="button"` with `keydown` event listeners for 'Enter' and 'Space' on non-semantic interactive elements to ensure complete keyboard accessibility.
