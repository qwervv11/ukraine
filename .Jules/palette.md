## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-07-02 - Keyboard Accessibility for Interactive Divs
**Learning:** Interactive `div` elements in this repository (e.g., `.gallery-item`, `.bar-segment`) that have click listeners lack native keyboard support.
**Action:** Always add `tabindex="0"`, `role="button"`, and explicit `keydown` event listeners mapping 'Enter' and 'Space' keys to `.click()` for these elements to ensure full keyboard accessibility.
