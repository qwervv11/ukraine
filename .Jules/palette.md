## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-10-03 - Keyboard Accessibility for Interactive Divs
**Learning:** When turning structural divs (like gallery items and timeline segments) into interactive elements, generic `aria-label`s shouldn't be applied if they already contain rich descriptive child content (like images with alt text or structured timelines), as it masks the inner semantics for screen readers.
**Action:** Always ensure interactive structural divs receive `role="button"` and `tabindex="0"`, and map 'Enter' and 'Space' (using `e.preventDefault()`) to `this.click()` in a `keydown` listener to guarantee keyboard accessibility while preserving inner descriptions.
