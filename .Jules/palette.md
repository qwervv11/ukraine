## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.
## 2026-07-21 - Keyboard accessibility for interactive div wrappers
**Learning:** Interactive `div` elements (like `.gallery-item` or `.bar-segment`) that have click handlers bound in JS are completely inaccessible to keyboard users by default. Simply adding `tabindex="0"` and `role="button"` is not enough, as native buttons trigger click on Enter/Space, but `div` elements do not.
**Action:** When implementing custom interactive elements using `div` wrappers, always explicitly bind `keydown` listeners for 'Enter' and 'Space' keys to mirror the `click` functionality, ensuring the `this` context is safely preserved for the handler.
