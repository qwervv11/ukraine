## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.
## 2024-05-13 - Making Custom Interactive Div Elements Keyboard Accessible
**Learning:** Found that custom interactive `div` elements (like `.gallery-item` and `.bar-segment`) lack native keyboard accessibility. They are not focusable by default and do not trigger click events when pressing 'Enter' or 'Space'.
**Action:** Always add `tabindex="0"` and an appropriate `role` (like `role="button"`) to make custom interactive elements focusable and identifiable to screen readers. Furthermore, explicitly attach `keydown` event listeners that map the 'Enter' and 'Space' keys to the element's existing click functionality (and call `e.preventDefault()` for 'Space' to prevent page scrolling).
