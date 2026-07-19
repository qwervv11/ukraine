## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-14 - Keyboard Support for Custom Interactive Elements
**Learning:** Found that custom interactive `div` elements (like `.gallery-item` and `.bar-segment`) lacked keyboard accessibility. Simply adding `tabindex` and `role="button"` to the HTML is insufficient; explicit `keydown` listeners mapping 'Enter' and 'Space' keys to the click logic are required.
**Action:** When retrofitting non-native interactive elements for accessibility, always implement `keydown` handlers for Enter/Space keys alongside click handlers, ensuring the original `this` context is safely preserved (e.g., using `handler.call(this)`).
