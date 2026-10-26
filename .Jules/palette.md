## 2024-10-26 - Keyboard accessibility for interactive div elements
**Learning:** Interactive `div` elements like `.gallery-item` and `.bar-segment` use click events for opening lightboxes/modals but are missing keyboard accessibility (tabindex, role="button", and keydown event listeners).
**Action:** Always add `tabindex="0"`, `role="button"`, and a keydown event listener mapping Enter/Space to click for custom interactive div elements to ensure keyboard users can interact with them.
