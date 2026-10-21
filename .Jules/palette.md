## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.
## 2024-10-21 - Interactive div accessibility
**Learning:** Found several interactive `div` elements (`.gallery-item`, `.bar-segment`) acting as buttons without keyboard focus (`tabindex`) or keyboard event listeners (`keydown` for Enter/Space).
**Action:** When a non-button element is made interactive via click events, always add `tabindex="0"`, `role="button"`, and a `keydown` listener to trigger the click action for keyboard users.
