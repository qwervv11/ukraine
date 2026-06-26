## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-13 - Explicit keyboard event mapping for interactive div components
**Learning:** This app extensively uses standard `div` elements for interactive components like gallery images (`.gallery-item`) and interactive charts (`.bar-segment`). Unlike native buttons, making these accessible requires explicitly mapping 'Enter' and 'Space' keypresses via a `keydown` event listener to trigger a click, along with adding `tabindex="0"` and `role="button"`.
**Action:** When encountering interactive `div` elements, implement keyboard event mappings and ARIA roles instead of relying on native focus handling or replacing the element type.
