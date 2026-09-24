## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-18 - Keyboard Access for Interactive Divs
**Learning:** Interactive `div` wrappers (like `.gallery-item` or `.bar-segment`) need explicit `keydown` listeners mapping 'Enter' and 'Space' keys to `.click()`, in addition to `tabindex="0"` and `role="button"`, to ensure full keyboard accessibility. Calling `e.preventDefault()` for 'Space' is crucial to avoid unintended page scrolling.
**Action:** When making custom non-interactive elements interactive, always ensure they are fully navigable and operable via keyboard by manually adding these attributes and event listeners.
