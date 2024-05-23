---
title: About Page #title of the window browser
description: Page dedicated to LwM2M and IPSO
---

## Text-Image

With the component you can have text and image in the same row like shown in the
following example. <!-- comment example -->

::ShTextImg
---
ui:
  wrapper: "shadow-xl"
  title: "text-4xl"
  subtitle: "font-mono"
  text: "" # no style has been applied, added as a reference only.
textPosition: "left" #this is an inline comment example that is not displayed
textSpan: "m"
textAlign: "left"
status: "on"
src: "https://www.nasa.gov/wp-content/uploads/2023/01/draco-4-darpa-nasa-ussf-caption.jpg?resize=2000,1119"
title: |
  Hello component
subtitle: |
  Hello subtitle
text: |
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et ligula quis justo bibendum consequat. Ut auctor diam sit amet diam ornare euismod. [URL](https://docs.google.com/spreadsheets/d/18O4QvBpIGMcXMq3VZMICwYB8L7tyJ11T/edit#gid=1718761465) elit at dapibus commodo. <a href="https://en.wikipedia.org/wiki/Gaius_Maecenas">Maecenas</a> sit amet purus eu metus pharetra pulvinar. In quis scelerisque leo. Praesent scelerisque at nulla non fermentum. Morbi varius nisi eu pharetra molestie. Sed ipsum mauris, tincidunt ut velit ac, luctus egestas mi. Quisque commodo dui in mi aliquam, nec varius nunc luctus.
---
::

The above exmaple is achieved by inserting the following code in markdown document:

> Note: Markdown and HTML links (anchor) can be inserted inside of the `text` property.

```md
::ShTextImg
---
ui:
  wrapper: "shadow-xl"
  title: "text-4xl"
  subtitle: "font-mono"
  text: "" # no style has been applied, added as a reference only.
textPosition: "left" #this is an inline comment example that is not displayed
textSpan: "m"
textAlign: "left"
status: "on"
src: "https://www.nasa.gov/wp-content/uploads/2023/01/draco-4-darpa-nasa-ussf-caption.jpg?resize=2000,1119"
title: |
  Hello component
subtitle: |
  Hello subtitle
text: |
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et ligula quis justo bibendum consequat. Ut auctor diam sit amet diam ornare euismod. [URL](https://docs.google.com/spreadsheets/d/18O4QvBpIGMcXMq3VZMICwYB8L7tyJ11T/edit#gid=1718761465) elit at dapibus commodo. <a href="https://en.wikipedia.org/wiki/Gaius_Maecenas" target='_blank'>Maecenas</a> sit amet purus eu metus pharetra pulvinar. In quis scelerisque leo. Praesent scelerisque at nulla non fermentum. Morbi varius nisi eu pharetra molestie. Sed ipsum mauris, tincidunt ut velit ac, luctus egestas mi. Quisque commodo dui in mi aliquam, nec varius nunc luctus.
---
::
```
