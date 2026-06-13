## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-13 - Keyboard Accessibility for Interactive Divs
**Learning:** Adding `tabindex="0"` is necessary but not sufficient for fully accessible non-button interactive elements like gallery items. Custom interactive elements built with `div` or `span` lack default key bindings for Enter and Space that native buttons have.
**Action:** Whenever converting a `div` into an interactive element using `tabindex="0"`, explicitly add a `keydown` event listener to handle `Enter` and `Space` key presses, mirroring the behavior of native buttons.
