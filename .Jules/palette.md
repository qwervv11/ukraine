## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-13 - Keyboard Accessibility for Interactive Divs
**Learning:** Interactive `div` elements used as buttons (like gallery items and timeline segments) lacked keyboard accessibility, making them unusable for users navigating with a keyboard.
**Action:** Always ensure that custom interactive `div` elements acting as buttons have `tabindex="0"`, `role="button"`, and explicit `keydown` event listeners mapping 'Enter' and 'Space' to their `.click()` handlers.
