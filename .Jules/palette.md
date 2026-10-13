## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.
## 2024-10-13 - Interactive div wrappers require proper ARIA and keyboard events
**Learning:** Found that custom interactive components like `.gallery-item` and `.bar-segment` built with `div`s lacked `role="button"`, `tabindex="0"`, and `keydown` event listeners, making them completely inaccessible to keyboard users despite having `click` listeners.
**Action:** When building interactive elements using non-semantic tags (like `div`), always explicitly add `role="button"`, `tabindex="0"`, and map 'Enter' and 'Space' keys to the `click` handler to emulate native button accessibility.
