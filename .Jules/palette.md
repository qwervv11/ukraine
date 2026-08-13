## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.
## 2024-05-13 - Added keyboard accessibility to interactive div elements
**Learning:** Found several interactive `div` elements (`.gallery-item`, `.bar-segment`) acting as buttons but missing `tabindex="0"`, `role="button"`, and `keydown` event listeners, making them inaccessible to keyboard and screen reader users.
**Action:** When using `div` elements as buttons, always add `tabindex="0"`, `role="button"`, and map 'Enter' and 'Space' keys (with `e.preventDefault()` for Space) to trigger the `click()` event.
