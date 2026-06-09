## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-06-09 - Interactive Div Accessibility
**Learning:** In this project, `div` elements like `.gallery-item` are used as interactive elements to trigger lightboxes on click. Without `tabindex="0"`, `role="button"`, and keyboard event listeners, these crucial interactive elements are completely inaccessible to keyboard and screen reader users.
**Action:** Whenever using `div` elements for click interactions, dynamically or statically add `tabindex="0"`, `role="button"`, and a `keydown` listener that handles `Enter` and `Space` to trigger the `click` event.
