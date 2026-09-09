## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.
## 2024-05-18 - Keyboard accessibility for interactive divs
**Learning:** Interactive non-button elements (like `div` elements with `.gallery-item` or `.bar-segment`) require explicit `keydown` event handlers mapping 'Enter' and 'Space' to `.click()` in addition to `tabindex="0"` and `role="button"` attributes to ensure full keyboard accessibility. Calling `e.preventDefault()` when handling 'Space' is crucial to prevent unintended page scrolling.
**Action:** When adding click interactivity to standard `div` elements, always include `keydown` handlers for 'Enter'/'Space', set `tabindex="0"`, assign `role="button"`, and ensure semantic HTML is used where possible to automatically get these benefits.
