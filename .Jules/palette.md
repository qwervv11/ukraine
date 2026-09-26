## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-06-25 - Interactive Div Elements Require Keyboard Mapping
**Learning:** Found that custom interactive components built with `div` tags (e.g., `.gallery-item`, `.bar-segment`) lacked native keyboard interaction, despite some being clickable via mouse. Merely adding `tabindex="0"` and `role="button"` makes them focusable and identifiable but does not natively trigger the click event via keyboard.
**Action:** Always map 'Enter' and 'Space' keys to the `click()` event explicitly via `keydown` listeners when building interactive elements with non-native tags like `div` or `span`. Ensure `e.preventDefault()` is called for 'Space' to prevent unwanted page scrolling.
