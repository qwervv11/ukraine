## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-09-06 - Added keyboard navigation to interactive div elements
**Learning:** Found that custom interactive `div` elements like gallery items and timeline bars were inaccessible via keyboard. They lacked `tabindex="0"`, `role="button"`, and `keydown` event listeners for the 'Enter' and 'Space' keys.
**Action:** Always ensure that custom interactive components constructed from generic elements (like `div` or `span`) are fully equipped with proper ARIA roles, focus management (`tabindex`), and keyboard event handlers that map 'Enter' and 'Space' to `.click()`.
