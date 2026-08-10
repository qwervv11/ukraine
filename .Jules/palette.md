## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-08-10 - Keyboard Navigation for Interactive Elements
**Learning:** `div` elements used as interactive buttons (`.gallery-item` and `.bar-segment`) in this repository were missing essential keyboard navigation (Enter/Space key mappings to trigger clicks) and `tabindex`/`role="button"` attributes. When mapping Space, it's essential to use `e.preventDefault()` to prevent unintended page scrolling.
**Action:** When identifying custom interactive `div` wrappers, ensure they have `tabindex="0"`, `role="button"`, and explicit `keydown` listeners for 'Enter' and 'Space' keys to maintain full keyboard accessibility.
