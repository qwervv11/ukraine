## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-13 - Made interactive DIVs fully keyboard accessible
**Learning:** Adding tabindex and role attributes to interactive custom wrappers (like .gallery-item and .bar-segment) isn't enough for keyboard accessibility. They also require explicit keydown event listeners for 'Enter' and 'Space' that trigger their existing .click() functionality, with e.preventDefault() on 'Space' to prevent scrolling.
**Action:** Whenever creating interactive elements from non-interactive tags (like div or span), always implement the full keyboard support trio: tabindex, ARIA role, and keydown listeners for Enter/Space.
