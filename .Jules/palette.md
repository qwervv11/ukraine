## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-14 - Keyboard accessibility for interactive div elements
**Learning:** The gallery items and timeline bar segments use interactive `div` elements that completely lack keyboard accessibility, preventing users from opening the lightbox or map modal without a mouse.
**Action:** Always add `tabindex="0"`, `role="button"`, and explicit `keydown` listeners mapping `Enter` and `Space` to `.click()` on non-semantic interactive elements (`div`, `span`) to ensure full keyboard navigability.
