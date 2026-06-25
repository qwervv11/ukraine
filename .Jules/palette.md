## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-06-25 - Interactive div elements require keyboard handlers
**Learning:** Adding tabindex and roles to interactive `div` elements (like gallery items) is not enough for full keyboard accessibility, because native click events triggered by Enter or Space keydowns do not naturally propagate to div elements like they do to button or a tags.
**Action:** Always add explicit `keydown` event listeners that listen for Enter and Space keys to trigger programmatic `click()` on interactive `div` components.
