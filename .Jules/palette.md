## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.
## 2024-05-12 - Interactive div keyboard accessibility
**Learning:** Found interactive custom `div` elements like `.gallery-item` and `.bar-segment` acting as buttons but missing `tabindex="0"`, `role="button"`, and keyboard event handlers, making them inaccessible for keyboard users despite having visual focus styles.
**Action:** When implementing custom interactive elements (like clickable divs for modals or lightboxes), always ensure they have `tabindex="0"`, `role="button"`, and handle `keydown` events (Enter/Space) to trigger the same action as a click.
