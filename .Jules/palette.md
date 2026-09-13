## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-20 - Keyboard Accessibility for Interactive Divs
**Learning:** Interactive `div` elements like `.gallery-item` and `.bar-segment` need explicit `keydown` handlers for 'Enter' and 'Space' keys (with `e.preventDefault()` for Space) alongside `tabindex="0"` and `role="button"` to ensure full keyboard accessibility.
**Action:** When making non-button elements interactive, always add `tabindex`, `role`, and explicitly map 'Enter' and 'Space' keys to trigger their click functionality.
