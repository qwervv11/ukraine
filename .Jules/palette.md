## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.
## 2024-10-24 - Interactive custom divs need keyboard accessibility
**Learning:** `div` elements used as interactive components (like gallery items and timeline bars) do not natively support keyboard focus or interactions. They require `tabindex`, `role="button"`, and explicit `keydown` listeners for 'Enter' and 'Space'.
**Action:** Always ensure any non-button interactive element has explicit ARIA attributes and keyboard event handlers so screen reader and keyboard users can activate them.
