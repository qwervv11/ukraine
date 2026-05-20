## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2026-05-20 - Keyboard Accessibility for Custom Interactive Elements
**Learning:** Found custom interactive elements (`div`s like `.gallery-item` and `.bar-segment` used as buttons) that lacked keyboard accessibility. While they had click event listeners, they were entirely inaccessible via keyboard navigation (Tab) and activation (Enter/Space).
**Action:** Always ensure that non-semantic interactive elements receive `tabindex="0"`, `role="button"`, and explicit `keydown` event handlers to match their click behavior for full keyboard support.
