---
title: About Page #title of the window browser
description: Page dedicated to LwM2M and IPSO
---

## Text-Image

With the component you can have text and image in the same row like shown in the
following example. <!-- comment example -->

::ShTextImg
---
textPosition: "left" #comment example
textSpan: "m"
textAlign: "left"
status: "on"
src: "https://www.nasa.gov/wp-content/uploads/2023/01/draco-4-darpa-nasa-ussf-caption.jpg?resize=2000,1119"
title: |
  Hello component
subtitle: |
  Hello subtitle
text: |
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et ligula quis justo bibendum consequat. Ut auctor diam sit amet diam ornare euismod. Nunc laoreet elit at dapibus commodo. Maecenas sit amet purus eu metus pharetra pulvinar. In quis scelerisque leo. Praesent scelerisque at nulla non fermentum. Morbi varius nisi eu pharetra molestie. Sed ipsum mauris, tincidunt ut velit ac, luctus egestas mi. Quisque commodo dui in mi aliquam, nec varius nunc luctus.
---
::

The above exmaple is achieved by inserting the following code in markdown document:

```md
::ShTextImg
---
textPosition: "left"
textSpan: "m"
textAlign: "left"
status: "on"
src: "https://www.nasa.gov/wp-content/uploads/2023/01/draco-4-darpa-nasa-ussf-caption.jpg?resize=2000,1119"
title: |
  Hello component
subtitle: |
  Hello subtitle
text: |
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et ligula quis justo bibendum consequat. Ut auctor diam sit amet diam ornare euismod. Nunc laoreet elit at dapibus commodo. Maecenas sit amet purus eu metus pharetra pulvinar. In quis scelerisque leo. Praesent scelerisque at nulla non fermentum. Morbi varius nisi eu pharetra molestie. Sed ipsum mauris, tincidunt ut velit ac, luctus egestas mi. Quisque commodo dui in mi aliquam, nec varius nunc luctus.
---
::
```
