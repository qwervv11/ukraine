## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-17 - Keyboard accessibility for interactive elements
**Learning:** Custom interactive elements (like `div`s functioning as buttons or links) require both explicit `tabindex="0"` and `role="button"` attributes in HTML, as well as explicit JavaScript event listeners to handle keyboard triggers (like Enter and Space keys). Without these, keyboard-only users cannot access or interact with these elements.
**Action:** Always ensure custom interactive elements have a focus state, a semantic role, and keyboard event handlers if they rely on JavaScript for interaction.
