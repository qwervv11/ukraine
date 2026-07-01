## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-24 - Interactive Elements Keyboard Accessibility
**Learning:** Custom interactive elements like `.gallery-item` or `.bar-segment` that use standard `div` elements require explicit implementation of keyboard interactions. Just adding `tabindex="0"` and `role="button"` makes them focusable and identifiable to screen readers, but doesn't map keyboard events like 'Enter' or 'Space' to the `.click()` action.
**Action:** Always ensure any non-button element with an `onclick` listener also has a corresponding `keydown` listener that handles 'Enter' and 'Space' keys, in addition to the proper ARIA roles and tabindex.
