## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-14 - Interactive element accessibility requirements
**Learning:** Interactive `div` wrappers (like gallery items or bar segments) shouldn't use generic `aria-label`s if they have rich descriptive child elements, as it overrides the children. They need `tabindex="0"`, `role="button"`, and explicit `keydown` handlers for 'Enter' and 'Space' (mapping to `this.click()` and preventing default scroll on 'Space').
**Action:** When making custom non-button elements interactive, avoid overly broad `aria-label`s that hide internal content, ensure focusability with `tabindex`, apply appropriate semantic `role`, and implement thorough keyboard event handlers.
