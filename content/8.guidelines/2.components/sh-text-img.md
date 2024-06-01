---
title: Text&Image #title of the window browser
description: Page dedicated to LwM2M and IPSO
constructorName: ShTextImg
---

### Usage

With the {{ $doc.constructorName }} constructor you can have text and image in the same row like shown in the
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
status: "on" #options: "on", "off", "pending", and "highlight"
imageLink: "https://www.nasa.gov/wp-content/uploads/2023/01/draco-4-darpa-nasa-ussf-caption.jpg?resize=2000,1119"
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
status: "on" #options: "on", "off", "pending", and "highlight"
imageLink: "https://www.nasa.gov/wp-content/uploads/2023/01/draco-4-darpa-nasa-ussf-caption.jpg?resize=2000,1119"
title: |
  Hello component
subtitle: |
  Hello subtitle
text: |
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et ligula quis justo bibendum consequat. Ut auctor diam sit amet diam ornare euismod. [URL](https://docs.google.com/spreadsheets/d/18O4QvBpIGMcXMq3VZMICwYB8L7tyJ11T/edit#gid=1718761465) elit at dapibus commodo. <a href="https://en.wikipedia.org/wiki/Gaius_Maecenas" target='_blank'>Maecenas</a> sit amet purus eu metus pharetra pulvinar. In quis scelerisque leo. Praesent scelerisque at nulla non fermentum. Morbi varius nisi eu pharetra molestie. Sed ipsum mauris, tincidunt ut velit ac, luctus egestas mi. Quisque commodo dui in mi aliquam, nec varius nunc luctus.
---
::
```

### Props

These are the properties used on the {{ $doc.constructorName }} constructor:
> Note: (*) It means that these properties also accept styles:

* `ui`:
* `wrapper`(*):
* `title`(*):
* `subtitle`(*):
* `text`(*)
* `image`(*) (image is not a property to be used only for styling)
* `status`(*)
* `textPosition`:
* `textSpan`:
* `textAlign`:
* `imageLink`:
* `altImage`:


### Config
This is the content inside of the `sh-text-img.ts` & `status.ts`. It list properties where styles can be applied: 

```ts
import status from './status';

export default {
  wrapper: "px-8 border dark:border-gray-700 rounded-2xl",
  title: "font-bold text-2xl",
  subtitle: "font-semibold text-xl -mt-6",
  text: "",
  image: "mx-auto rounded-xl",
  status,
  // Default Tailwind CSS values
  default: {
  }
}
```

```ts
const status: { [key: string]: string } = {
  on: '       bg-green-200    border-green-200    dark:border-green-800   dark:bg-green-800   dark:text-white',
  off: '      bg-red-200      border-red-200      dark:border-red-800     dark:bg-red-800     dark:text-white',
  pending: '  bg-yellow-100   border-yellow-100   dark:border-yellow-800  dark:bg-yellow-600  dark:text-white',
  highlight: 'bg-sky-100      border-sky-100      dark:border-sky-800     dark:bg-sky-800     dark:text-white',
  default: '  bg-neutral-200  border-neutral-200  dark:border-gray-700    dark:bg-slate-800   dark:text-gray-300 text-gray-700',
};

export default status;
```