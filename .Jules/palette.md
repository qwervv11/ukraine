## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-24 - Added keyboard accessibility to custom interactive divs
**Learning:** Found that custom interactive elements like `.gallery-item` and `.bar-segment` were lacking `tabindex="0"`, `role="button"`, and `keydown` event listeners, making them inaccessible via keyboard.
**Action:** When using non-semantic elements like `div`s as interactive buttons, always ensure they are given `tabindex="0"`, `role="button"`, and a `keydown` listener mapping 'Enter' and 'Space' to trigger the click action, explicitly calling `e.preventDefault()` for 'Space' to avoid unwanted scrolling.
