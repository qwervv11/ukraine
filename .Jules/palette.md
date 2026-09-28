## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.
## 2024-05-13 - Keyboard Accessibility for Interactive Divs
**Learning:** Found custom interactive elements (`.gallery-item`, `.bar-segment`) using `div` tags that were inaccessible via keyboard navigation as they lacked `tabindex`, `role="button"`, and `keydown` event listeners for 'Enter' and 'Space' keys.
**Action:** Always ensure custom interactive elements like clickable `div`s have `tabindex="0"`, `role="button"`, and explicitly map 'Enter' and 'Space' keys to trigger their `click()` functionality while preventing default scrolling behavior on 'Space'.
