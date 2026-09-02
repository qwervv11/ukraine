## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-13 - Added keyboard accessibility to custom interactive components
**Learning:** Found several interactive `div` elements (`.gallery-item`, `.bar-segment`) that lacked keyboard focus and event handling, meaning keyboard users couldn't activate the gallery lightbox or timeline modals.
**Action:** Always ensure that custom interactive components using non-semantic tags (like `div` or `span` instead of `button` or `a`) have `tabindex="0"`, `role="button"`, and handle `keydown` events for "Enter" and "Space" keys by calling `e.preventDefault(); this.click();`.
