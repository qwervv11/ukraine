## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-08-16 - Make interactive div elements accessible with keyboard
**Learning:** Found several `div` elements (like `.gallery-item` and `.bar-segment`) that were used as buttons (had `click` event listeners) but lacked `tabindex`, `role="button"`, and `keydown` event handlers to support keyboard activation (Enter/Space), preventing keyboard users from accessing gallery lightboxes or timeline modals.
**Action:** Always ensure that if a non-interactive element like a `div` is given click functionality, it must also receive `tabindex="0"`, `role="button"`, and a keyboard event listener that handles Enter and Space keys to maintain full keyboard accessibility.
