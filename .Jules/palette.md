## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.
## 2026-05-22 - Keyboard Accessibility for Interactive Divs
**Learning:** When using `div` elements as interactive buttons (like gallery items triggering a lightbox), they must have `tabindex="0"` and `role="button"` to be accessible. Additionally, custom Javascript must handle `keydown` events for `Enter` and `Space` keys to mimic native button behavior.
**Action:** Always ensure custom interactive elements have keyboard support and proper ARIA roles in addition to click handlers.
