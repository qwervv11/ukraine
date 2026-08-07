## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-13 - Keyboard Accessibility for Interactive Divs
**Learning:** Found that custom interactive elements like `.gallery-item` and `.bar-segment` (which are `div`s acting as buttons) lacked keyboard operability and semantics. They could not be focused via Tab or activated via Enter/Space.
**Action:** Always provide full keyboard accessibility for custom interactive `div` elements by adding `tabindex="0"`, `role="button"`, and a `keydown` event listener that maps 'Enter' and 'Space' keys to the element's click logic (calling `e.preventDefault()` for Space to prevent page scrolling). Avoid adding generic ARIA labels if the parent wrapper already contains rich descriptive child content (like images with `alt` text).
