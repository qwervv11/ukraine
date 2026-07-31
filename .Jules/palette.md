## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-18 - Keyboard accessibility for interactive div elements
**Learning:** In this project, `div` elements (like `.gallery-item` and `.bar-segment`) were used as interactive components with `click` event listeners, but completely lacked keyboard navigability. This breaks accessibility for screen reader and keyboard-only users who cannot "tab" to or activate the elements using standard keys.
**Action:** When creating custom interactive elements out of non-semantic tags (like `div`), always ensure they are given `tabindex="0"`, `role="button"`, and have explicitly bound `keydown` event listeners mapping the 'Enter' and 'Space' keys to the `click` logic.
