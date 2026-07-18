## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-07-18 - Keyboard Accessible Gallery and Timeline
**Learning:** Found custom interactive elements (like `.gallery-item` and `.bar-segment`) that function as buttons but lack keyboard accessibility, making them unusable for keyboard and screen reader users.
**Action:** When implementing custom interactive elements (divs acting as buttons), always add `tabindex="0"` and `role="button"` to make them focusable and semantically correct, and ensure you map 'Enter' and 'Space' keydown events to the same logic as the click handlers.
