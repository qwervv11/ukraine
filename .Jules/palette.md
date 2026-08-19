## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-13 - Added keyboard support to interactive divs
**Learning:** Custom interactive `div` elements like gallery items and timeline bar segments require explicit `keydown` listeners mapping 'Enter' and 'Space' to `.click()` (along with `tabindex` and `role`) for full keyboard accessibility. Calling `e.preventDefault()` on 'Space' is crucial to avoid unwanted scrolling.
**Action:** Always add proper keyboard handlers to non-standard interactive elements, not just `tabindex` and visual focus states.
