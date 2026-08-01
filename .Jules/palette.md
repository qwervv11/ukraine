## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-12 - Keyboard Accessibility for Interactive Divs
**Learning:** Found custom interactive elements (like `.gallery-item` and `.bar-segment` acting as buttons) that relied solely on `click` events, making them inaccessible to keyboard users.
**Action:** When using non-semantic elements (like `div`) for interactions, ensure they have `tabindex="0"`, `role="button"`, and explicitly handle `keydown` events (mapping 'Enter' and 'Space' to `.click()`) to provide full keyboard accessibility.
