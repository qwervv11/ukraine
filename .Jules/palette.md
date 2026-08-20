## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.
## 2024-08-20 - Adding keyboard accessibility to interactive div elements
**Learning:** Interactive elements implemented as `div` (such as `.gallery-item` and `.bar-segment`) that function as buttons need specific attributes (`tabindex="0"`, `role="button"`) and explicit `keydown` listeners for 'Enter' and 'Space' to be fully accessible for keyboard users.
**Action:** Always ensure that any non-button element with an `onclick` or `addEventListener('click')` handler is explicitly given `tabindex="0"`, `role="button"`, and a keyboard event listener calling `this.click()` when 'Enter' or 'Space' is pressed to mimic native button functionality.
