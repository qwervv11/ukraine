## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-24 - Make interactive divs accessible via keyboard
**Learning:** Found interactive elements like `.gallery-item` and `.bar-segment` (using custom `div` elements) missing keyboard accessibility (tabindex="0", role="button", and keydown listeners for Enter/Space), preventing screen reader users and keyboard navigators from interacting with them.
**Action:** Always add `tabindex="0"`, `role="button"`, and map 'Enter' and 'Space' to `.click()` via `keydown` events when building interactive UI elements with non-semantic HTML tags like `div`.
