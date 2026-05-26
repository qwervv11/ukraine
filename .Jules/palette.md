## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2026-05-26 - Enable keyboard navigation for custom interactive elements
**Learning:** Found custom interactive elements (`.gallery-item` and `.bar-segment`) that functioned as buttons using `click` listeners on `div`s, but were inaccessible to keyboard users and screen readers as they lacked `tabindex`, `role="button"`, and `keydown` event listeners for `Enter`/`Space` keys. Additionally, dynamically created modals (lightboxes) didn't focus their close buttons upon opening, trapping focus and hindering navigation.
**Action:** Always add `tabindex="0"`, `role="button"`, and `keydown` event listeners to `div`s functioning as buttons. For dynamically created modals, ensure their close buttons receive focus upon opening to support keyboard users, and handle `Escape` key global dismisses cleanly.
