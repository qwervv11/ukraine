## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-09-16 - Make interactive divs keyboard accessible
**Learning:** Found interactive `div` elements (`.gallery-item`, `.bar-segment`) lacking keyboard support (no tabindex, role, or keydown event bindings for Enter/Space), making them completely inaccessible to keyboard users.
**Action:** Always add `tabindex="0"`, `role="button"`, and a `keydown` event listener mapping 'Enter' and 'Space' to the element's existing click functionality when using `div`s as interactive controls.
