## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-13 - Made interactive div elements fully keyboard accessible
**Learning:** Found that custom interactive `div` elements like `.gallery-item` and `.bar-segment` lacked keyboard accessibility, preventing non-mouse users from triggering their actions.
**Action:** When using `div` elements for interaction, always ensure they have `tabindex="0"`, `role="button"`, and a `keydown` event listener that maps 'Enter' and 'Space' keys to `.click()`, calling `e.preventDefault()` on 'Space' to stop unintended page scrolling.
