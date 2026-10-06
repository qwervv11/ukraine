## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.
## 2024-05-24 - Interactive DIV Keyboard Accessibility
**Learning:** When using `div` elements for interactive components like gallery items or timeline bars, they lack native keyboard support (focusability and key event handling), making them inaccessible to keyboard and screen reader users.
**Action:** Always add `tabindex="0"` and `role="button"` to such elements, and implement a `keydown` event listener that maps 'Enter' and 'Space' keys to the element's existing `click` handler, calling `e.preventDefault()` for 'Space' to prevent unwanted scrolling.
