## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-20 - Keyboard Accessibility for Custom Interactive Elements
**Learning:** When making non-interactive elements like `div` accessible by adding `tabindex="0"` and `role="button"`, they do not automatically handle `Enter` and `Space` key presses like native buttons do.
**Action:** Always implement a `keydown` event listener that explicitly checks for `Enter` and `Space` keys (and uses `e.preventDefault()` for `Space` to avoid scrolling) and triggers the element's existing `click()` handler.
