## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.
## 2024-05-24 - Added keyboard accessibility to interactive div elements
**Learning:** Interactive `div` elements like `.gallery-item` and `.bar-segment` often act as buttons but lack native keyboard support, causing accessibility issues for keyboard-only users.
**Action:** When using `div` elements for interaction, ensure to add `tabindex="0"`, `role="button"`, and explicit `keydown` event listeners for the 'Enter' and 'Space' keys to trigger their functionality.
