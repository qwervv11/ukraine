## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2026-05-19 - Keyboard Accessibility for Dynamic Modals/Lightboxes
**Learning:** Found that the gallery items were not keyboard accessible (lacked tabindex, role, and keydown listeners) and the dynamically created lightbox trapped users because it lacked explicit focus management (moving focus to the close button) and an Escape key listener.
**Action:** Always ensure interactive elements (like gallery items) have `tabindex="0"`, `role="button"`, and support 'Enter'/'Space' keys. For dynamically created modals or lightboxes, explicitly manage focus (move focus into it, return focus to the trigger element when closed) and add an Escape key listener.
