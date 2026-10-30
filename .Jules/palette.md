## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-18 - Added keyboard accessibility to interactive divs
**Learning:** Found that custom interactive components like `.gallery-item` and `.bar-segment` were built using `<div>` tags with only click handlers, making them completely inaccessible to keyboard users as they lacked `tabindex`, `role="button"`, and `keydown` event handling.
**Action:** When implementing custom interactive elements instead of native buttons, always ensure they are focusable via `tabindex="0"`, semantic via `role="button"`, and handle `Enter` and `Space` keys mimicking click behavior to ensure full accessibility.
