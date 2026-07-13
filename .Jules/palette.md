## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-18 - Added keyboard accessibility to interactive divs
**Learning:** Found custom interactive `div` elements (`.gallery-item`, `.bar-segment`) in this app that relied entirely on click events, failing to support keyboard navigation or activation.
**Action:** Always add `tabindex="0"`, `role="button"`, and a `keydown` listener mapping 'Enter' and 'Space' to the existing click logic for any non-button element that acts as a button.
