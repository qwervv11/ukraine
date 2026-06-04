## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2026-06-04 - Keyboard Accessibility for Interactive Divs
**Learning:** Found that custom interactive elements like `.gallery-item` and `.bar-segment` used `div` tags with only mouse `click` listeners, making them inaccessible to keyboard users.
**Action:** When identifying custom interactive elements (e.g. ones that open modals or lightboxes), verify they have `tabindex="0"`, `role="button"`, and `keydown` listeners for `Enter` and `Space` to ensure full accessibility.
