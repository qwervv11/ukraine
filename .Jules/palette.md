## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-14 - Keyboard accessible interactive div elements
**Learning:** Adding `tabindex="0"` and `role="button"` to a `div` element makes it focusable and semantically identifiable, but it does not natively bind keyboard events like actual `<button>` elements do. Screen reader users and keyboard navigators expect to trigger these elements using 'Enter' or 'Space'.
**Action:** When making custom `div` elements interactive (e.g. `.gallery-item` or `.bar-segment`), always supplement the HTML attributes with a JavaScript `keydown` listener that explicitly maps 'Enter' and 'Space' to trigger the element's `.click()` method, making sure to call `e.preventDefault()` for 'Space' to prevent unintended page scrolling.
