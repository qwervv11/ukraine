## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2025-05-18 - Added keyboard accessibility to interactive div elements
**Learning:** Found several interactive elements (`.gallery-item`, `.bar-segment`) that acted as buttons but were structurally just `div` elements, completely blocking keyboard users from opening lightboxes or modals.
**Action:** Always ensure custom interactive elements like cards or timeline segments have `tabindex="0"`, `role="button"`, and explicit `keydown` listeners mapping 'Enter' and 'Space' to trigger their click functionality. When mapping 'Space', always use `e.preventDefault()` to stop unintended page scrolling.
