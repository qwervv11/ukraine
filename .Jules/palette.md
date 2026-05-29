## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.
## 2024-05-13 - Using div elements for interactive controls requires keydown handlers
**Learning:** Found that `div` elements used as interactive controls (like the `.gallery-item` and `.bar-segment` elements) were missing keyboard accessibility. Unlike native `<button>` elements, `div` elements do not automatically trigger click events when the Enter or Space key is pressed.
**Action:** When using non-semantic elements like `div` or `span` for interactive controls, always ensure you add `tabindex="0"`, an appropriate `role` (e.g., `button`), an `aria-label`, and explicitly add `keydown` event listeners for the 'Enter' and 'Space' keys.
