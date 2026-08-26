## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-08-26 - Make interactive divs keyboard accessible
**Learning:** Found several `div` elements acting as buttons (`.gallery-item`, `.bar-segment`) that lacked keyboard accessibility. They couldn't be focused via Tab or activated via Enter/Space.
**Action:** When using `div`s as interactive elements, always add `tabindex="0"`, `role="button"`, and implement `keydown` event handlers mapped to `Enter` and `Space` (with `e.preventDefault()` for Space) to ensure they are fully operable for all users.
