## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-07-05 - Keyboard accessibility for interactive div elements
**Learning:** Found that custom interactive elements (`<div class="gallery-item">`, `<div class="bar-segment">`) were inaccessible to keyboard users because they lacked focusability, semantic meaning, and keyboard event handlers. They only responded to mouse clicks.
**Action:** Always ensure that custom interactive `div` elements include `tabindex="0"`, `role="button"`, and explicit `keydown` event listeners for 'Enter' and 'Space' that trigger `.click()` to provide full keyboard accessibility alongside standard `:focus-visible` styles.
