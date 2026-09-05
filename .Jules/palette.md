## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-24 - Interactive Divs Accessibility
**Learning:** Interactive `div` elements like `.gallery-item` and `.bar-segment` require explicit `keydown` event listeners for 'Enter' and 'Space' keys mapped to `.click()`, in addition to `tabindex` and `role` attributes, to ensure full keyboard accessibility.
**Action:** When creating custom interactive components from standard block elements, always ensure they are focusable and can be triggered via standard keyboard interactions.
