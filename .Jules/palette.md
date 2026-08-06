## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.
## 2024-06-25 - Keyboard accessibility for interactive div elements
**Learning:** Found that custom interactive `div` elements (like `.gallery-item` and `.bar-segment`) lacked keyboard accessibility. Simply adding `tabindex="0"` and `role="button"` makes them focusable, but they also require explicit `keydown` event listeners for the 'Enter' and 'Space' keys to trigger their functionality, as well as `e.preventDefault()` on 'Space' to prevent unintended page scrolling.
**Action:** Always ensure that any non-standard interactive elements (like `div` or `span`) are given `tabindex="0"`, an appropriate `role`, and explicit keyboard event listeners mapping 'Enter' and 'Space' to their `.click()` handlers.
