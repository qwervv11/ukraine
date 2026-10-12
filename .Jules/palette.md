## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-15 - Interactive Div Accessibility
**Learning:** In this project, many interactive elements (`.gallery-item`, `.bar-segment`) are implemented as `div` tags with click event listeners. Screen readers and keyboard users cannot interact with these `div`s by default because they lack `tabindex`, `role="button"`, and keyboard event handlers (for Enter/Space keys).
**Action:** When identifying `div` elements that function as buttons (such as gallery items or timeline bars), ensure they have `tabindex="0"`, `role="button"`, and a `keydown` listener that checks for `e.key === 'Enter' || e.key === ' '` and triggers `this.click()`. Call `e.preventDefault()` on the spacebar press to prevent the page from scrolling. Also, ensure modals have Escape key closing handlers.
