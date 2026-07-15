## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-12 - Added keyboard support to interactive div components
**Learning:** Found a pattern where interactive custom UI components like gallery items (`.gallery-item`) and timeline bars (`.bar-segment`) were built using `<div>` tags with `click` listeners, but lacked keyboard accessibility.
**Action:** Always ensure custom interactive `<div>` elements receive `tabindex="0"`, `role="button"`, and appropriate `keydown` event listeners mapping 'Enter' and 'Space' to `.click()` to support full keyboard navigation.
