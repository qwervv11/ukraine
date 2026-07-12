## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-13 - Keyboard Accessibility for Interactive Divs
**Learning:** Found that custom interactive `div` elements like `.gallery-item` and `.bar-segment` lacked keyboard accessibility entirely. Relying solely on `click` event listeners on non-native interactive elements excludes keyboard-only and screen reader users from accessing content like modals and lightboxes.
**Action:** Always add `tabindex="0"`, `role="button"`, and a `keydown` event listener mapping 'Enter' and 'Space' to trigger the same action as a click for any custom interactive `div` elements.
