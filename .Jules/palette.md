## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-13 - Made interactive DIV elements keyboard accessible
**Learning:** Found that custom interactive `div` elements like `.gallery-item` and `.bar-segment` had click event listeners but lacked `tabindex="0"`, `role="button"`, and `keydown` event listeners for the `Enter` and `Space` keys, rendering them inaccessible to keyboard and screen reader users.
**Action:** When implementing custom click interactions on non-interactive HTML elements (like `div` or `span`), always ensure they are fully keyboard accessible by adding `tabindex="0"`, an appropriate ARIA `role`, and mapping the `Enter` and `Space` keys to trigger the click action.
