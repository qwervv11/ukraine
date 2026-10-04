## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-15 - Added explicit keyboard navigation to custom interactive divs
**Learning:** Custom interactive `div` elements acting as buttons (like `.gallery-item` and `.bar-segment`) require explicit `keydown` listeners mapping 'Enter' and 'Space' (using `e.preventDefault()` to prevent scrolling) to trigger click actions, in addition to `tabindex="0"` and `role="button"`.
**Action:** Whenever using non-standard HTML elements (like `div`) as interactive triggers, explicitly implement 'Enter'/'Space' keydown handlers to ensure full keyboard operability for screen reader and keyboard-only users.
