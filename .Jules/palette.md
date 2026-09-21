## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2025-01-22 - Keyboard Accessibility for Interactive Divs
**Learning:** Custom interactive `div` elements (like `.gallery-item` and `.bar-segment`) require explicit `tabindex="0"`, `role="button"`, and `keydown` event listeners for 'Enter' and 'Space' to be fully keyboard accessible.
**Action:** Always add keyboard event listeners that map 'Enter' and 'Space' (calling `e.preventDefault()`) to `.click()` for custom interactive `div` wrappers, alongside `tabindex` and `role`.
