## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-06-08 - Keyboard interaction for interactive semantic elements
**Learning:** Adding a click listener and `tabindex="0"` to a `div` does not automatically make it activate on `Enter` or `Space` like a real `<button>` would.
**Action:** Always add an explicit `keydown` event listener for `Enter` and `Space` when creating custom interactive elements (`role="button"`) from generic containers like `div` to ensure full keyboard support.
