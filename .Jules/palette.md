## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2026-05-30 - Focus management in custom lightboxes
**Learning:** Custom interactive elements (like `div`s functioning as buttons) often lack native keyboard focus (`tabindex`) and `keydown` support for activation (Space/Enter). When these custom components open modals or lightboxes, they typically fail to trap focus inside the modal or return focus correctly upon closing, leading to poor keyboard accessibility.
**Action:** Always ensure that custom interactive components are focusable and operable via keyboard. When implementing custom modals or lightboxes, remember to `.focus()` the newly opened modal's first interactive element (like the close button), and to explicitly return focus to the trigger element when the modal is closed.
