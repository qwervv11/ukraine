## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-08-29 - Added keyboard accessibility to interactive div elements
**Learning:** Found several interactive `div` elements (.gallery-item and .bar-segment) functioning as buttons but lacking semantic roles (`role="button"`), keyboard focus capability (`tabindex="0"`), and keyboard event handlers (for 'Enter' and 'Space' keys). This prevents users who navigate via keyboard or screen readers from interacting with these features.
**Action:** When implementing custom interactive elements using generic containers like `div` or `span`, always ensure they include `role="button"`, `tabindex="0"`, and `keydown` event listeners that map 'Enter' and 'Space' to their `.click()` behavior to provide full keyboard accessibility.
