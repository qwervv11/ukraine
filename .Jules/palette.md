## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2026-03-05 - Keyboard Navigation for Interactive Elements
**Learning:** Interactive `div` elements (like `.gallery-item` and `.bar-segment`) that function as buttons need explicit keyboard support (`tabindex="0"`, `role="button"`, and `keydown` event listeners for 'Enter'/'Space') to be accessible to screen reader and keyboard users. When creating dynamic overlays (like the lightbox), ensure they can be closed with the 'Escape' key and that the event listener is properly cleaned up.
**Action:** Always add `tabindex="0"`, `role="button"`, and map 'Enter'/'Space' to `.click()` for non-button interactive elements. Implement 'Escape' key support for all modal/lightbox components and ensure global event listeners are removed upon closing to prevent memory leaks.
