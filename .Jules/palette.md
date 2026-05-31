## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-31 - Keyboard Accessibility for DIV Click Targets
**Learning:** Using `div` elements for click targets in interactive UX components (like gallery items or infographics) requires explicit accessibility features. Without `role="button"`, `tabindex="0"`, and custom `keydown` event listeners for 'Enter'/'Space', these elements are completely inaccessible to keyboard-only and screen reader users.
**Action:** Always ensure that custom interactive elements created with non-semantic tags (like `div` or `span`) are fully keyboard accessible by adding `tabindex`, semantic roles, keyboard event handlers, and appropriate focus indicators (`:focus-visible`).
