## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-06-11 - Interactive elements missing keyboard accessibility and focus management
**Learning:** Found custom interactive elements (`.gallery-item`, `.bar-segment`) using `div`s with `click` listeners but lacking `tabindex`, `role="button"`, and `keydown` handlers for Enter/Space. Also discovered that dynamic modals (like the lightbox) were not managing focus upon opening and closing, trapping screen reader users and breaking keyboard navigation flow.
**Action:** Always ensure custom interactive elements have `tabindex="0"`, an appropriate ARIA role, and keyboard event listeners. For dynamic modals, focus should be shifted into the modal when opened and returned to the triggering element when closed.
