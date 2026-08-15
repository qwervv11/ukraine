## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-23 - Interactive UI Elements Keyboard Accessibility
**Learning:** Found several visually interactive components (such as `.gallery-item` and `.bar-segment`) acting as pseudo-buttons. They responded to mouse clicks using JavaScript event listeners, but completely lacked keyboard interactivity (missing `tabindex`, `role="button"`, and `keydown` event listeners for 'Enter' and 'Space'), making them inaccessible to keyboard users and screen readers.
**Action:** When implementing or fixing interactive parent wrappers (like gallery cards or timeline segments) that trigger actions via click, always ensure they are focusable (`tabindex="0"`), semantically identified (`role="button"`), and explicitly support keyboard activation (listening to 'Enter' and 'Space' keydown events, including `e.preventDefault()` for 'Space' to prevent scrolling).
