## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-10-15 - Interactive div keyboard accessibility
**Learning:** Found custom interactive elements like `.gallery-item` and `.bar-segment` acting as buttons but missing `tabindex="0"`, `role="button"`, and keyboard event listeners. This makes them inaccessible to keyboard users, despite them having visual interactions and click handlers.
**Action:** When creating custom interactive widgets that aren't native `<button>` or `<a>` tags, always ensure to add `tabindex="0"`, `role="button"`, and map 'Enter' and 'Space' keydown events to the element's click functionality using `e.preventDefault()` for Space to stop page scrolling.
