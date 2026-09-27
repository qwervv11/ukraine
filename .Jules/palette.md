## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-06-25 - Keyboard navigation for interactive divs
**Learning:** Interactive `div` elements visually styled as buttons (like gallery items and timeline segments) lacked keyboard accessibility. Using `tabindex="0"` and `role="button"` makes them focusable, but explicit `keydown` event listeners for 'Enter' and 'Space' keys mapped to `.click()` are required for full usability. Additionally, dynamically created UI components like lightboxes must manage their own global event listeners (e.g., removing 'Escape' handlers) to prevent memory leaks and erratic behavior.
**Action:** Always verify keyboard accessibility on non-standard interactive elements, map 'Enter' and 'Space' to clicks, and explicitly clean up global event listeners attached to temporary DOM nodes.
