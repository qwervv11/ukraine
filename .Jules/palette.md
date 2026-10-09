## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.
## 2024-05-18 - Keyboard accessibility for interactive div elements
**Learning:** When using standard `div` elements for interactive elements like custom buttons or gallery items, adding `tabindex="0"` and `role="button"` is not enough. You must also explicitly map the 'Enter' and 'Space' key presses to trigger the element's click action to ensure full keyboard accessibility.
**Action:** Always pair `tabindex="0"` on non-native interactive elements with a `keydown` event listener that handles 'Enter' and 'Space' keys.
