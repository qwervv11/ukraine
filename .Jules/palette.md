## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-13 - Make Interactive Divs Keyboard Accessible
**Learning:** Interactive `div` elements used as buttons (e.g., `.gallery-item`, `.bar-segment`) lack native keyboard accessibility and need explicit support to be usable by keyboard navigators.
**Action:** Always add `tabindex="0"`, `role="button"`, and a `keydown` event listener mapping 'Enter' and 'Space' keys to `.click()` on non-native interactive elements. Ensure to call `e.preventDefault()` on 'Space' to prevent unintended page scrolling.
