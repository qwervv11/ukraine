## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-13 - Making interactive div elements keyboard accessible
**Learning:** Found custom interactive elements like `.gallery-item` and `.bar-segment` acting as buttons via JavaScript `click` listeners, but they were missing keyboard navigation support (`tabindex`) and semantic roles (`role="button"`).
**Action:** Always ensure that any non-button element (like a `<div>` or `<span>`) with a click listener also receives `tabindex="0"`, `role="button"`, and a `keydown` listener that triggers the action on `Enter` or `Space` key presses.
