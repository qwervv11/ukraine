## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-11-20 - Keyboard Accessibility for Interactive Divs
**Learning:** In static repositories, using non-semantic elements like `div` for interactive components (e.g., `.gallery-item` for lightbox images and `.bar-segment` for timeline actions) requires manual implementation of keyboard accessibility. Just adding `:focus-visible` CSS is insufficient for functionality.
**Action:** Always ensure that custom interactive `div` or `span` elements receive `tabindex="0"`, an appropriate `role` (like `button`), explicit focus styling (`:focus-visible`), and explicit JavaScript `keydown` event listeners mapping 'Enter' and 'Space' keys to trigger the default action (`.click()`).
