## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-08-03 - Keyboard Accessibility for Interactive Divs
**Learning:** Found that custom interactive elements like gallery images and timeline bar segments (which were built using `div` tags) could not be focused via keyboard or activated with standard keystrokes, completely isolating keyboard and screen reader users from accessing this content.
**Action:** Always verify that interactive `div` wrappers implement keyboard accessibility by adding `tabindex="0"`, `role="button"`, and mapping both 'Enter' and 'Space' keystrokes to the underlying click logic, specifically remembering to call `e.preventDefault()` for the 'Space' key to prevent unwanted page scrolling.
