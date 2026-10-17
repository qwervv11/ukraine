## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-03-20 - Adding explicit keyboard support for interactive divs
**Learning:** When using generic elements like `div` for interactive components (like gallery items and timeline segments), they must be explicitly made focusable (`tabindex="0"`), semantically identifiable (`role="button"`), and controllable via keyboard (`keydown` listeners for 'Enter' and 'Space') to be accessible.
**Action:** Always add explicit keyboard accessibility attributes and event listeners when using non-button elements for interactive UI components.
