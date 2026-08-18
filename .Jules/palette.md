## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-13 - Made gallery items and bar segments keyboard accessible
**Learning:** Found that `.gallery-item` and `.bar-segment` elements were functioning as interactive buttons but were structured as `div`s without `tabindex`, `role="button"`, or keyboard event listeners, rendering them inaccessible to keyboard users.
**Action:** When implementing custom interactive elements (like image galleries or custom data visualizations), always add `tabindex="0"`, `role="button"`, and map the 'Enter' and 'Space' keys to the existing `click` logic to ensure parity between mouse and keyboard interaction.
