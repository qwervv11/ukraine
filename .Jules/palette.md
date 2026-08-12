## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-08-12 - Keyboard Accessibility for Timeline Bars
**Learning:** Found interactive `div` elements (`.bar-segment`) acting as buttons without `tabindex`, `role="button"`, or keyboard event listeners (Enter/Space), which made them inaccessible to keyboard users.
**Action:** When using non-semantic elements for interactions, ensure they have `tabindex="0"`, appropriate roles, and `keydown` event listeners that map 'Enter' and 'Space' (using `e.preventDefault()` for Space) to the click handler.
