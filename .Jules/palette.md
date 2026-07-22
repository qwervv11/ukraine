## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-14 - Interactive div accessibility
**Learning:** Found custom interactive elements like `.gallery-item` and `.bar-segment` acting as buttons but missing `role="button"`, `tabindex="0"`, and `keydown` event listeners for `Enter` and `Space`, rendering them completely inaccessible to keyboard users.
**Action:** Always add `role="button"`, `tabindex="0"`, and map `Enter`/`Space` keydown events to the click handler when using `div` elements for interactive actions.
