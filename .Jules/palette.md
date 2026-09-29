## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-18 - Keyboard accessibility for interactive divs
**Learning:** Interactive `div` elements like `.gallery-item` and `.bar-segment` often lack native keyboard accessibility (tabbing and Enter/Space to click), making critical UI flows inaccessible to keyboard and screen reader users.
**Action:** Ensure all interactive elements that are not native buttons or links receive `tabindex="0"`, `role="button"`, and explicit `keydown` event listeners that map the 'Enter' and 'Space' keys to trigger `.click()`. When capturing 'Space', be sure to call `e.preventDefault()` to avoid unwanted page scrolling.
