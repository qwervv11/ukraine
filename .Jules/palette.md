## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-13 - Add keyboard accessibility to interactive div elements
**Learning:** Found interactive components (`.gallery-item`, `.bar-segment`) that lacked keyboard navigability (`tabindex="0"`) and proper semantics (`role="button"`). They also lacked `keydown` event listeners to map standard activation keys ('Enter', 'Space') to their existing click actions.
**Action:** Always verify that interactive `div` wrappers include `tabindex="0"`, `role="button"`, and appropriate `keydown` handlers (calling `.click()` is typically cleanest) to ensure full keyboard accessibility.
