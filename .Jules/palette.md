## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-19 - Keyboard Accessibility for Interactive Divs
**Learning:** Interactive `div` elements (like `.gallery-item` and `.bar-segment`) styled as clickable items do not inherently support keyboard navigation or activation. Users navigating with a keyboard (using Tab) cannot interact with them.
**Action:** When using non-semantic elements like `div` for interactions, always add `tabindex="0"` and `role="button"` in HTML. Additionally, attach `keydown` event listeners in JavaScript to explicitly map 'Enter' and 'Space' keys to `.click()`.
