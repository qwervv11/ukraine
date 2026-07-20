## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-18 - Keyboard accessibility for interactive div elements
**Learning:** Found that custom interactive elements like `.gallery-item` and `.bar-segment` (which are `div`s functioning as buttons) were not accessible via keyboard, breaking accessibility guidelines.
**Action:** Always add `tabindex="0"` and `role="button"` to non-button elements used as interactable controls, and attach explicit `keydown` event listeners to map 'Enter' and 'Space' keys to `.click()`.
