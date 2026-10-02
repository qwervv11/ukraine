## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-13 - Added keyboard accessibility to interactive div elements
**Learning:** Found interactive `div` elements (gallery items, bar segments) acting as buttons but missing `tabindex="0"`, `role="button"`, and `keydown` event handlers for 'Enter' and 'Space' keys.
**Action:** Always ensure that custom interactive elements (`div`, `span`) have appropriate ARIA attributes, keyboard focusability (`tabindex`), and keyboard event handlers that emulate click behavior.
