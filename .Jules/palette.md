## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-13 - Added keyboard interactivity to visual grid elements and Escape handling
**Learning:** Found that custom interactive elements like gallery images and timeline segments lack keyboard interactivity (`tabindex`, 'Enter'/'Space' event handlers) and dynamically created modals trap focus/don't respond to 'Escape', hindering accessibility for non-mouse users.
**Action:** Ensure all interactive elements have `tabindex="0"`, explicit keyboard event handlers mapped to click actions, and modals implement global 'Escape' keydown handlers that are properly cleaned up upon closure.
