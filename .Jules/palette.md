## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-16 - Keyboard Accessibility for Interactive DIVs
**Learning:** Interactive `div` elements acting as buttons (like `.gallery-item` and `.bar-segment`) require explicit `tabindex="0"`, `role="button"`, and a `keydown` event listener for 'Enter' and 'Space' (with `e.preventDefault()` for 'Space') to be fully accessible for keyboard navigation.
**Action:** Always ensure interactive non-semantic elements receive proper ARIA attributes, focus management, and keyboard event bindings to mirror mouse interactions.
