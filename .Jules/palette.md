## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-20 - Adding keyboard accessibility to custom interactive elements
**Learning:** Adding `tabindex` and ARIA roles to non-button interactive elements like `div`s (e.g. `.gallery-item` and `.bar-segment`) is not enough for full accessibility. They must also have explicit `keydown` event listeners that map the 'Enter' and 'Space' keys to trigger their primary action (e.g. `.click()`).
**Action:** Whenever converting a non-interactive element into an interactive component, always implement the accompanying `keydown` event listener for 'Enter' and 'Space' keys to ensure complete keyboard accessibility.
