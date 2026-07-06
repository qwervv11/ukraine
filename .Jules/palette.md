## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2026-07-06 - Interactive div keyboard accessibility
**Learning:** Found that custom interactive `div` elements like `.gallery-item` and `.bar-segment` lacked keyboard accessibility, preventing users from opening modals or lightboxes without a mouse.
**Action:** Always add `tabindex="0"` and `role="button"` to interactive div elements, and ensure a `keydown` listener maps 'Enter' and 'Space' to trigger the same actions as `click`.
