## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-07-25 - Accessible Interactive Wrappers
**Learning:** Custom interactive `div` wrappers (like `.gallery-item` and `.bar-segment`) require explicit `tabindex="0"`, `role="button"`, and mapping of 'Enter' and 'Space' keys to `.click()`. Adding a generic `aria-label` to these wrappers is an anti-pattern as it masks the rich descriptive content of child elements (e.g., image `alt` text or timelines) from screen readers.
**Action:** Always make interactive `div` elements keyboard accessible using `tabindex` and event listeners. Avoid adding generic `aria-label` attributes to wrappers if they contain descriptive child content, to ensure screen readers announce the specific content correctly.
