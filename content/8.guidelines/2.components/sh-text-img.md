---
title: Text&Image #title of the window browser
description: With this constructor you can have text and image in the same row like shown in the following example. You can also declare the span of text thus changing the size of image, and changing the position of text.
constructorName: ShTextImg
---

### Usage

#### Presentation
This is the display format for the {{ $doc.constructorName }} constructor, designed to showcase what are its capabilities.

##### Example Basic

::ShTextImg
---
positionText: left
spanText: s
alignText: left
urlImage: https://www.nasa.gov/wp-content/uploads/2023/01/draco-4-darpa-nasa-ussf-caption.jpg?resize=2000,1119
title: |
  Hello component
subtitle: |
  Hello subtitle
text: |
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et ligula quis justo bibendum consequat. Ut auctor diam sit amet diam ornare euismod. [URL](https://docs.google.com/spreadsheets/d/18O4QvBpIGMcXMq3VZMICwYB8L7tyJ11T/edit#gid=1718761465) elit at dapibus commodo. <a href="https://en.wikipedia.org/wiki/Gaius_Maecenas">Maecenas</a> sit amet purus eu metus pharetra pulvinar. In quis scelerisque leo. Praesent scelerisque at nulla non fermentum. Morbi varius nisi eu pharetra molestie. Sed ipsum mauris, tincidunt ut velit ac, luctus egestas mi. Quisque commodo dui in mi aliquam, nec varius nunc luctus.
---
::

This is how it is constructed

```mdc
::ShTextImg
---
positionText: left
spanText: s
alignText: left
urlImage: https://www.nasa.gov/wp-content/uploads/2023/01/draco-4-darpa-nasa-ussf-caption.jpg?resize=2000,1119
title: |
  Hello component
subtitle: |
  Hello subtitle
text: |
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et ligula quis justo bibendum consequat. Ut auctor diam sit amet diam ornare euismod. [URL](https://docs.google.com/spreadsheets/d/18O4QvBpIGMcXMq3VZMICwYB8L7tyJ11T/edit#gid=1718761465) elit at dapibus commodo. <a href="https://en.wikipedia.org/wiki/Gaius_Maecenas">Maecenas</a> sit amet purus eu metus pharetra pulvinar. In quis scelerisque leo. Praesent scelerisque at nulla non fermentum. Morbi varius nisi eu pharetra molestie. Sed ipsum mauris, tincidunt ut velit ac, luctus egestas mi. Quisque commodo dui in mi aliquam, nec varius nunc luctus.
---
::
```

### Props
These are the properties and attributes associated to the {{ $doc.constructorName }} constructor:

#### Properties and Attributes Description
The {{ $doc.constructorName }} constructor gives you an option to hold both image and text in one row. Text size, position and alignement are fully adjustable. Below is a detailed description of the properties and attributes used in the {{ $doc.constructorName }} constructor.

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Attribute</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="6">ui</td>
      <td>n/a</td>
      <td>The <code>ui</code> property in the component is a configuration object that allows customization of various styling aspects of the component. Each attribute within the <code>ui</code> property targets a specific part of the component display, providing detailed control over its appearance and layout. Below is a detailed description of each attribute within the <code>ui</code> property:</td>
    </tr>
    <tr>
      <td>wrapper</td>
      <td>Defines the overall styling for the container that holds all the elements of the component.</td>
    </tr>
    <tr>
      <td>image</td>
      <td>Styles applied to the image element, including properties like size and border radius.</td>
    </tr>
    <tr>
      <td>title</td>
      <td>Styles applied to the title text, such as font size and color.</td>
    </tr>
    <tr>
      <td>subtitle</td>
      <td>Styles applied to the subtitle text, such as font size and color.</td>
    </tr>
    <tr>
      <td>text</td>
      <td>Styles applied to the text content, such as font size and color.</td>
    </tr>
    <tr>
      <td>positionText</td>
      <td>n/a</td>
      <td>Defines position of text in regard of image. <b>Options:</b> <code>left</code>, <code>right</code></td>
    </tr>
    <tr>
      <td>spanText</td>
      <td>n/a</td>
      <td>Defines amount of space that will text occupy. <b>Options:</b> <code>s</code>, <code>m</code>, <code>l</code></td>
    </tr>
    <tr>
      <td>alignText</td>
      <td>n/a</td>
      <td>Defines alignement of the text. <b>Options:</b> <code>left, <code>center</code>, <code>right</code></td>
    </tr>
    <tr>
      <td>status</td>
      <td>n/a</td>
      <td>Styles for the container background depending on the status value. <b>Options:</b> <code>a</code>, <code>b</code>, <code>c</code>, <code>d</code> & <code>default</code></td>
    </tr>
    <tr>
      <td>urlImage</td>
      <td>n/a</td>
      <td>The source URL of the image to be displayed.</td>
    </tr>
    <tr>
      <td>altImage</td>
      <td>n/a</td>
      <td>Alternative text for the image, used for accessibility and in case the image fails to load.</td>
    </tr>
    <tr>
      <td>title</td>
      <td>n/a</td>
      <td>The title text to be displayed.</td>
    </tr>
    <tr>
      <td>subtitle</td>
      <td>n/a</td>
      <td>The subtitle text to be displayed, if any.</td>
    </tr>
    <tr>
      <td>text</td>
      <td>n/a</td>
      <td>The main text content to be displayed.</td>
    </tr>
    <td>description</td>
      <td>n/a</td>
      <td>Intented to be used as a help to content writter. Doesn`t render on website.
    </td>
  </tbody>
</table>

#### Example Usage
##### Advanced Settings
An example with customized `ui` attributes for enhanced display:

::ShTextImg
---
ui:
  wrapper: shadow-xl
  title: text-4xl
  subtitle: font-mono
  text:  # no style has been applied, added as a reference only.
  image: hover:skew-y-3
positionText: left #this is an inline comment example that is not displayed
spanText: s
alignText: left
status: d #options: "a", "b", "c", "d" & default
urlImage: https://www.nasa.gov/wp-content/uploads/2023/01/draco-4-darpa-nasa-ussf-caption.jpg?resize=2000,1119
title: |
  Hello component
subtitle: |
  Hello subtitle
text: |
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et ligula quis justo bibendum consequat. Ut auctor diam sit amet diam ornare euismod. [URL](https://docs.google.com/spreadsheets/d/18O4QvBpIGMcXMq3VZMICwYB8L7tyJ11T/edit#gid=1718761465) elit at dapibus commodo. <a href="https://en.wikipedia.org/wiki/Gaius_Maecenas">Maecenas</a> sit amet purus eu metus pharetra pulvinar. In quis scelerisque leo. Praesent scelerisque at nulla non fermentum. Morbi varius nisi eu pharetra molestie. Sed ipsum mauris, tincidunt ut velit ac, luctus egestas mi. Quisque commodo dui in mi aliquam, nec varius nunc luctus.
---
::

This is an example with customized `ui` attributes for enhanced display:

```mdc
::ShTextImg
---
ui:
  wrapper: shadow-xl
  title: text-4xl
  subtitle: font-mono
  text:  # no style has been applied, added as a reference only.
  image: hover:skew-y-3 # when hovered over image, it skews
positionText: left #this is an inline comment example that is not displayed
spanText: s
alignText: left
status: d #options: "a", "b", "c", "d" & default
urlImage: https://www.nasa.gov/wp-content/uploads/2023/01/draco-4-darpa-nasa-ussf-caption.jpg?resize=2000,1119
title: |
  Hello component
subtitle: |
  Hello subtitle
text: |
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et ligula quis justo bibendum consequat. Ut auctor diam sit amet diam ornare euismod. [URL](https://docs.google.com/spreadsheets/d/18O4QvBpIGMcXMq3VZMICwYB8L7tyJ11T/edit#gid=1718761465) elit at dapibus commodo. <a href="https://en.wikipedia.org/wiki/Gaius_Maecenas">Maecenas</a> sit amet purus eu metus pharetra pulvinar. In quis scelerisque leo. Praesent scelerisque at nulla non fermentum. Morbi varius nisi eu pharetra molestie. Sed ipsum mauris, tincidunt ut velit ac, luctus egestas mi. Quisque commodo dui in mi aliquam, nec varius nunc luctus.
---
::
```

### Config
This is the content inside of the `sh-text-img.ts` & `status.ts`. It list properties where styles can be applied: 

`sh-text-img.ts`

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

___

`status.ts`

```ts
const status: { [key: string]: string } = {
  a: 'bg-[#FFFFFF] border-[#E3E3E3] text-[#FF0000]',
  b: 'bg-[#000000] border-[#000000] text-[#00FF00]',
  c: 'bg-[#FFFF00] border-[#FFFF00] text-[#000000]',
  d: 'bg-[#ADD8E6] border-[#ADD8E6] text-[#0000FF]',
  default: 'bg-neutral-200 border-neutral-200 dark:border-gray-700 dark:bg-slate-800 dark:text-gray-300 text-gray-700',
};

export default status;
```

#### Class Descriptions
These represent the class values utilized in the {{ $doc.constructorName }} constructor. These values are customizable and can be strengthened or overridden through the `ui` properties' attributes.

_**wrapper**_
*  **Value**: <code>"px-8 border dark:border-gray-700 rounded-2xl"</code>
*  **Description**: This defines the overall styling for the container holding the elements. The value "px-8 border dark:border-gray-700 rounded-2xl" includes horizontal padding of 8 units (px-8), a border (border) with a gray color in dark mode (dark:border-gray-700), and rounded corners (rounded-2xl).

_**title**_
*  **Value**: <code>"font-bold text-2xl"</code>
*  **Description**: This defines the styling for the title text. The value "font-bold text-2xl" includes a bold font weight (font-bold) and a double extra-large font size (text-2xl).

_**subtitle**_
*  **Value**: <code>"font-semibold text-xl -mt-6"</code>
*  **Description**: This specifies the styling for the subtitle text. The value "font-semibold text-xl -mt-6" includes a semi-bold font weight (font-semibold), an extra-large font size (text-xl), and a negative top margin of 6 units (-mt-6).

_**text**_
*  **Value**: <code>""</code>
*  **Description**: This defines the styling for general text. As it is empty, it implies no specific styles have been set.

_**image**_
*  **Value**: <code>"mx-auto rounded-xl"</code>
*  **Description**: This specifies styles for an image. The value "mx-auto rounded-xl" includes horizontal centering (mx-auto) and rounded corners (rounded-xl).

_**status**_
*  **Description**: Imported from a separate module (status). It contains additional styles or functionality related to status.

_**default**_
*  **Value**: <code>{}</code>
*  **Description**: This object is intended to hold any default Tailwind CSS values that might be used as fallback or initial styles.


These style properties ensure that the {{ $doc.constructorName }} component is visually appealing and flexible, allowing for a wide range of customization to meet specific design requirements.