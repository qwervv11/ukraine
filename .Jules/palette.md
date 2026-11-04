## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-13 - Added keyboard support to custom interactive elements
**Learning:** Found that custom interactive `div` elements (like `.gallery-item` and `.bar-segment`) lacked keyboard accessibility (no `tabindex`, `role="button"`, or `keydown` event mapping).
**Action:** Always add `tabindex="0"`, `role="button"`, and a `keydown` listener mapping 'Enter' and 'Space' to `click` for non-button interactive elements to ensure full keyboard navigability.
