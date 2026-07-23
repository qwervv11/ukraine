## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-07-23 - Added role, tabindex, and keyboard listeners to interactive divs
**Learning:** Custom interactive elements (like `.gallery-item` or `.bar-segment` that use `div` tags) lack native keyboard accessibility. Relying solely on `click` event listeners makes them unusable for keyboard and screen reader users.
**Action:** When creating custom interactive elements out of non-interactive tags like `div`, always add `role="button"`, `tabindex="0"`, and explicitly map `keydown` events for the 'Enter' and 'Space' keys to the click action.
