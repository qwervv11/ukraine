## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.
## 2024-05-13 - Made gallery and timeline items keyboard accessible
**Learning:** Interactive `div` wrappers like `.gallery-item` and `.bar-segment` require explicit `tabindex="0"`, `role="button"`, and explicit `keydown` event listeners mapping 'Enter' and 'Space' to their `click` handlers for proper keyboard navigation.
**Action:** Always add `tabindex="0"`, `role="button"`, and `keydown` handlers mapped to click events when making non-button elements interactive.
