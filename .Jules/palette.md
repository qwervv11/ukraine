## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-13 - Add keyboard accessibility to interactive div elements
**Learning:** Found that custom interactive `div` elements like `.gallery-item` and `.bar-segment` lacked keyboard accessibility, preventing users who rely on keyboard navigation from opening lightboxes or viewing timeline events.
**Action:** When implementing custom interactive elements (e.g., using `div` or `span`), always ensure they are focusable by adding `tabindex="0"`, communicate their purpose with `role="button"`, and include `keydown` event listeners that map the 'Enter' and 'Space' keys to the click action (`e.preventDefault(); this.click();`).
