## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-12 - Making interactive divs accessible
**Learning:** Generic `aria-label` attributes on interactive parent wrappers (like `.gallery-item` or `.bar-segment`) can mask informative child content (like alt text or timelines). In addition to `tabindex="0"` and `role="button"`, custom interactive `div` elements require explicit `keydown` listeners for 'Enter' and 'Space' to be fully accessible.
**Action:** When making custom `div` elements interactive, always add `tabindex="0"`, `role="button"`, and a `keydown` listener mapping Enter/Space to `.click()`. Avoid adding a generic `aria-label` to wrappers if they contain rich informative children, relying instead on semantic HTML within the wrapper.
