## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-13 - Added Keyboard Support to custom interactive div components
**Learning:** Interactive UI components that use basic `div` tags instead of semantic tags (like `button` or `a`) completely lack keyboard accessibility by default. For example, `.gallery-item` and `.bar-segment` were completely inaccessible to keyboard users.
**Action:** When creating interactive elements from non-interactive tags (e.g. `div`), ensure you explicitly set `tabindex="0"`, assign `role="button"` (if acting as a button), and attach keydown event listeners to trigger click functionality when Enter or Space is pressed. Additionally, ensure `Escape` key closes modals globally.
