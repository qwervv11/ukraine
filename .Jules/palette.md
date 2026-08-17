## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-14 - Keyboard accessibility for custom interactive DIVs
**Learning:** Found custom interactive UI elements (`.gallery-item` and `.bar-segment`) built with `<div>` tags that relied solely on `click` event listeners, making them inaccessible to keyboard users as they lacked `tabindex`, `role="button"`, and keyboard event handlers.
**Action:** When turning non-interactive elements like `<div>` into clickable targets, always add `tabindex="0"`, `role="button"`, and explicitly map `Enter` and `Space` key presses (`keydown` events) to trigger the `.click()` method, remembering to `e.preventDefault()` for `Space` to avoid unintended page scrolling.
