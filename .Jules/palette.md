## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2026-06-15 - Added Keyboard Accessibility to Interactive Custom Elements
**Learning:** Discovered interactive elements like `.gallery-item` and `.bar-segment` that handled `click` events but lacked keyboard navigation and semantic role assignments.
**Action:** When adding `click` listeners to non-semantic interactive elements, ensure they also have `tabindex="0"`, `role="button"`, and a `keydown` listener (handling 'Enter' and 'Space') to guarantee full keyboard accessibility.
