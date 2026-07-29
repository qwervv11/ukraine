## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-14 - Keyboard accessibility for interactive div elements
**Learning:** Found that custom interactive elements like `.gallery-item` and `.bar-segment` (which are `div`s functioning as buttons) were inaccessible via keyboard. They lacked `tabindex`, `role="button"`, and `keydown` event handlers to trigger click logic.
**Action:** Always verify that non-standard interactive elements (like `div` or `span` used as buttons) have `tabindex="0"`, `role="button"`, and handle `Enter` and `Space` key presses to emulate click behavior for keyboard and screen reader accessibility. Do not add generic `aria-label` to parent wrappers if their child elements already contain rich descriptive content, as it will override and mask the child content for screen readers.
