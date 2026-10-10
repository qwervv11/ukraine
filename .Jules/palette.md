## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.
## 2026-10-10 - [Keyboard Accessibility for Interactive Divs]
**Learning:** Interactive `div` elements in this repository (e.g., `.gallery-item`, `.bar-segment`) lack native keyboard accessibility (tabindex, role) and require explicit `keydown` event listeners for 'Enter' and 'Space' keys. Additionally, dynamically created UI components like lightboxes must manage global document event listeners for the 'Escape' key, ensuring they are removed upon closure to prevent duplicate executions.
**Action:** When working with interactive non-button elements, always verify keyboard accessibility and ensure dynamic components handle 'Escape' key closure and proper event listener cleanup.
