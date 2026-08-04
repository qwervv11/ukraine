## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-08-04 - Keyboard accessibility for interactive div elements
**Learning:** Found that custom interactive components built with `div` tags (e.g. `.gallery-item` and `.bar-segment`) mapped only to `click` events lack native keyboard accessibility. Users navigating via keyboard could not trigger these elements.
**Action:** When implementing custom interactive elements using non-semantic tags like `div`, always ensure they include `tabindex="0"`, an appropriate `role` (like `button`), and explicit `keydown` event listeners mapping 'Enter' and 'Space' keys to the primary action (with `e.preventDefault()` for 'Space' to prevent scrolling).
