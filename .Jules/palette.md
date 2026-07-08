## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2026-07-08 - Keyboard accessibility for interactive div elements
**Learning:** Found that custom interactive elements like `.gallery-item` and `.bar-segment` (which are `div`s) require explicit `tabindex="0"`, `role="button"`, and `keydown` event listeners for 'Enter' and 'Space' to be fully accessible.
**Action:** Always verify that non-button interactive elements are focusable, have semantic roles, and respond to keyboard interactions equivalently to mouse clicks.
