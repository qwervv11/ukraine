## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-13 - Added keyboard support and ARIA roles for custom interactive elements
**Learning:** Found several custom interactive elements (e.g. `.gallery-item`, `.bar-segment`) using click listeners on generic `div` elements, lacking `tabindex`, `role="button"`, and keyboard handlers for 'Enter' and 'Space'. This prevented keyboard users from accessing interactive functionality like the lightbox or timeline modals.
**Action:** Always ensure that `div` elements used as interactive components include `tabindex="0"`, `role="button"`, and a `keydown` event listener that maps 'Enter' and 'Space' keys to trigger the element's existing `click` event listener.
