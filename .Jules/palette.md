## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.
## 2024-05-18 - Keyboard accessibility for interactive divs
**Learning:** Interactive `div` elements used as buttons (e.g., gallery items, progress bar segments) must explicitly include `tabindex="0"`, `role="button"`, and handle `keydown` events for "Enter" and "Space" to be fully accessible to keyboard users.
**Action:** Always verify that custom interactive elements receive focus, announce their role correctly, and can be activated using standard keyboard interactions.
