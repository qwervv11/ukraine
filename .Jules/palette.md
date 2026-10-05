## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-10-05 - Added keyboard navigation to interactive div elements
**Learning:** Found custom interactive elements (`.gallery-item`, `.bar-segment`) styled as clickable cards but functioning without `tabindex`, `role="button"`, and missing keyboard event handlers ('Enter'/'Space'), preventing keyboard accessibility. Furthermore, dynamically created modals (like the gallery lightbox) lacked 'Escape' key functionality for keyboard users.
**Action:** Always verify that pseudo-buttons (interactive `div` or `span` elements) have `tabindex="0"`, `role="button"`, and `keydown` listeners mapping 'Enter' and 'Space' to their `.click()` method. For dynamically created modals, ensure a global `keydown` event listener for the 'Escape' key is added upon creation and explicitly removed upon any exit path to prevent memory leaks and unintended behavior.
