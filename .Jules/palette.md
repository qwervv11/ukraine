## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2026-05-27 - Added keyboard support to interactive divs
**Learning:** Found several `div` elements acting as buttons (`.gallery-item`, `.bar-segment`) that were missing native keyboard accessibility, making it impossible for keyboard users to interact with them (like opening the lightbox or viewing timeline details).
**Action:** When a non-button element (like `div` or `span`) is given an `onclick` handler or a click event listener, always ensure it is accessible to keyboard users by adding `tabindex="0"`, `role="button"`, and a `keydown` event listener that triggers the action when "Enter" or "Space" is pressed.
