## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.
## 2025-02-14 - Keyboard Accessibility on Custom Interactive Divs
**Learning:** Custom interactive elements (like `.gallery-item` and `.bar-segment`) in this app were exclusively relying on `onclick` handlers, omitting keyboard users completely.
**Action:** When adding interactivity to `div`s or `span`s, always assign them `tabindex="0"`, a `role="button"` (or appropriate role), and attach `keydown` listeners targeting the `Enter` (and `Space`) keys, mirroring the `click` logic to ensure full accessibility for screen reader and keyboard users.
