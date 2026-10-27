## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-18 - Ensure interactive div elements support keyboard interaction
**Learning:** Found several interactive `div` elements (e.g., `.gallery-item`, `.bar-segment`) that lacked keyboard accessibility attributes (`tabindex="0"`, `role="button"`) and keyboard event handlers (`keydown` for Enter and Space), making them inaccessible via keyboard.
**Action:** Always ensure that any non-native interactive elements (like `div` acting as a button) have both semantic HTML attributes (`tabindex="0"`, `role="button"`) and the proper keyboard event handlers mapped to trigger their click behavior to guarantee full keyboard accessibility.
