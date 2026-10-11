## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.
## 2026-10-11 - Make interactive div elements accessible and fix lightbox escape leak
**Learning:** Found that custom interactive components like `.gallery-item` and `.bar-segment` were implemented using `div` tags but lacked `tabindex="0"`, `role="button"`, and keyboard event handlers. Furthermore, dynamic lightboxes needed an Escape key listener that required careful cleanup to prevent duplicate listener bindings.
**Action:** When building interactive UI elements with non-native HTML tags (like `div`), always assign `tabindex` and semantic `role`, map `Enter` and `Space` keys to click events, and explicitly clean up any dynamically added global `keydown` listeners across all dismissal paths.
