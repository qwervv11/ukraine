## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2025-02-12 - Keyboard accessibility for interactive components
**Learning:** Certain custom interactive elements like gallery images and timeline markers were only operable via mouse clicks and were missing semantic roles, `tabindex`, and keyboard event handlers. Furthermore, Escape key handlers did not cleanly handle dynamically injected elements or multiple open modal states.
**Action:** Always verify that non-standard interactive elements have `role="button"`, `tabindex="0"`, and `keydown` listeners for `Enter` and `Space`. Ensure global `Escape` listeners properly target and cleanup all potential active modal elements.
