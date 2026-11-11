## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-14 - Interactive custom elements need keyboard accessibility
**Learning:** Elements like `.gallery-item` and `.bar-segment` that use click listeners lack implicit keyboard accessibility and roles, rendering them unusable for keyboard-only users. Furthermore, dynamically created modals (like the gallery lightbox) need careful `Escape` key handling and document listener cleanup to avoid duplicate bindings.
**Action:** Always add `tabindex="0"`, `role="button"`, and `keydown` listeners (mapping 'Enter' and 'Space' to `this.click()`) to custom interactive elements. When adding document-level event listeners for dynamically created modals, ensure they are explicitly removed via `removeEventListener` upon closing.
