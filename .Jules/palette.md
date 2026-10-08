## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-15 - Interactive div keyboard accessibility
**Learning:** Interactive `div` elements (like gallery items and bar segments) that act as buttons need explicit `keydown` event listeners for 'Enter' and 'Space' to be fully keyboard accessible, in addition to `tabindex` and `role="button"`.
**Action:** Always map 'Enter' and 'Space' to `.click()` and call `e.preventDefault()` on 'Space' when creating custom interactive elements out of `div`s.
