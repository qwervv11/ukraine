## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-06-29 - Added keyboard accessibility to interactive div elements
**Learning:** Found several interactive `div` elements (`.gallery-item` and `.bar-segment`) acting as buttons without `tabindex`, `role="button"`, or keyboard event listeners, rendering them completely inaccessible to keyboard and screen reader users.
**Action:** Always verify custom interactive `div` elements have `tabindex="0"`, `role="button"`, and a `keydown` listener that maps "Enter" and "Space" keys to trigger a click, ensuring full keyboard interactivity and proper screen reader announcements.
