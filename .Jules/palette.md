## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-23 - Interactive Elements Keyboard Accessibility
**Learning:** Found that custom interactive elements like `.gallery-item` and `.bar-segment` lacked keyboard support (`tabindex` and `role="button"`), as well as `keydown` event listeners, making them inaccessible to keyboard users.
**Action:** Always verify that all interactive elements, particularly those behaving like buttons or links, have proper `tabindex`, semantic roles, and handle keyboard events (Enter/Space) to trigger their actions.
