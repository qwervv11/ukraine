## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-13 - Made gallery and timeline items accessible via keyboard
**Learning:** Found that interactive `div` elements like `.gallery-item` and `.bar-segment` lacked keyboard support because they were missing `tabindex="0"`, `role="button"`, and explicit `keydown` event listeners to map "Enter" and "Space" keys to click events.
**Action:** Always ensure that any `div` or `span` that functions as a button has `tabindex="0"`, `role="button"`, and a `keydown` listener to trigger the click action for full keyboard accessibility.
