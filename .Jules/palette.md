## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2026-05-16 - Keyboard accessibility for non-interactive elements
**Learning:** Found that `.gallery-item` elements were implemented as plain `div`s with `click` event listeners. Because they are not inherently interactive HTML elements (like `button` or `a`), they cannot be focused via keyboard navigation out of the box, breaking accessibility.
**Action:** When adding interactivity to non-interactive elements using JavaScript `click` events, always ensure you also set `tabindex="0"`, assign the appropriate ARIA role (e.g., `role="button"`), and attach a `keydown` event listener to trigger the same action via the `Enter` and `Space` keys.
