## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.
## 2024-05-18 - Keyboard Accessibility for Interactive Divs
**Learning:** Interactive `div` elements (like gallery items and timelines) require explicit `keydown` event listeners for 'Enter' and 'Space' in addition to `tabindex` and `role="button"` to ensure full keyboard accessibility. Using `e.preventDefault()` for 'Space' is crucial to prevent unexpected page scrolling.
**Action:** Always verify if custom interactive elements can be triggered via keyboard and append a keydown listener mapping to the existing `.click()` handler when adding `tabindex`.
