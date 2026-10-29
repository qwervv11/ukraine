## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.
## 2024-10-29 - Keyboard Accessibility for Interactive Divs
**Learning:** Custom interactive elements (like `.gallery-item` and `.bar-segment` div blocks) mapped to click events were completely inaccessible to keyboard users because they lacked `tabindex`, semantic ARIA roles, and `keydown` event listeners for 'Enter' and 'Space'.
**Action:** When making non-button/link elements interactive via click events, always add `tabindex="0"`, an appropriate `role` (like `button`), and map `keydown` events to trigger the same click functionality to ensure keyboard accessibility.
