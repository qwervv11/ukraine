## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-13 - Keyboard Accessibility for Interactive Divs
**Learning:** Found that custom interactive elements like `.gallery-item` and `.bar-segment` (which are `div` elements acting as buttons) lacked keyboard accessibility, preventing users who rely on keyboards from interacting with the lightbox and map modals.
**Action:** When implementing custom interactive `div` elements, always add `tabindex="0"`, `role="button"`, and a `keydown` event listener mapping `Enter` and `Space` keys to trigger the `.click()` action.
