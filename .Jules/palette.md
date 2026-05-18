## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2025-02-12 - Added keyboard support for interactive elements
**Learning:** Discovered interactive elements like `div` cards (`.gallery-item` and `.bar-segment`) that function as buttons but missed semantic `role="button"`, `tabindex="0"`, and `keydown` event listeners for 'Enter' or 'Space' presses. Even with global `:focus-visible` styles, these elements were inaccessible to keyboard users.
**Action:** When creating custom interactive widgets that act like buttons, always add `tabindex="0"`, `role="button"`, and ensure keydown events map to click actions to keep them accessible.
