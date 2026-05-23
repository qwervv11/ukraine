## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-12 - Making interactive custom elements accessible
**Learning:** Found custom interactive elements like `.gallery-item` (which act as buttons to open a lightbox) implemented as simple `div` tags without any ARIA attributes or keyboard support. This made the lightbox inaccessible to screen readers and keyboard users.
**Action:** When a non-button element is interactive, always ensure it has `role="button"`, `tabindex="0"`, an appropriate `aria-label`, and handle `keydown` events (Enter/Space) to trigger the same action as click.
