## 2024-05-12 - Added ARIA labels to icon-only buttons and global focus styles
**Learning:** Found several icon-only buttons missing ARIA labels (e.g. map modal close, lightbox close, scroll to top) and the site completely lacked keyboard focus styles (`:focus-visible`), hindering accessibility.
**Action:** Always ensure custom modal close buttons and global interactive elements have descriptive ARIA labels, and implement a global `:focus-visible` to aid keyboard navigation.

## 2024-05-14 - Keyboard Accessibility for Interactive Divs
**Learning:** Found that non-native interactive elements like `div`s with click listeners (e.g., gallery items acting as buttons) fail accessibility checks because they lack native keyboard focus and interaction support. Users cannot navigate to them or trigger their actions via keyboard.
**Action:** Always add explicit keyboard accessibility attributes (`tabindex="0"`, `role="button"`) and attach `keydown` event listeners to handle `Enter` and `Space` key actions for any non-native element used as a button.
