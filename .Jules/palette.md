## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-07-24 - Added keyboard accessibility to interactive wrapper divs without masking content
**Learning:** Found that interactive wrapper divs (like `.gallery-item` and `.bar-segment`) lacked keyboard focus and interaction, making them inaccessible to keyboard users. When making these interactive, one should add `tabindex="0"` and `role="button"` along with `keydown` event listeners for 'Enter' and 'Space'. However, generic `aria-label`s shouldn't be added if the wrapper contains rich descriptive content (like images with `alt` text or timelines), as it would mask the informative child content for screen readers.
**Action:** Always ensure interactive elements, even wrapper divs, are fully keyboard accessible by adding `tabindex`, `role="button"`, and mapping 'Enter'/'Space' to click logic, while being careful not to override child content descriptions with generic wrapper `aria-label`s.
