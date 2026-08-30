## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2026-08-30 - Keyboard Accessibility for Interactive Divs
**Learning:** Found that interactive `div` elements like `.gallery-item` and `.bar-segment` used for custom interactions lacked keyboard accessibility. They couldn't be focused or activated without a mouse.
**Action:** Always add `tabindex="0"`, `role="button"`, and explicit `keydown` event listeners (mapping 'Enter' and 'Space' to `.click()`, with `e.preventDefault()` on Space to stop scrolling) to non-native interactive elements to ensure full keyboard navigation support.
