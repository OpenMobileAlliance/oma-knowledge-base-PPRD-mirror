---
title: Text&Image #title of the window browser
description: Have text and image in the same row. You can also declare the span of text thus changing the size of image, and changing the position of text.
constructorName: ShTextImg
layout: doc
---

### Usage

#### Presentation
This is the display format for the <b>{{ $doc.constructorName }}</b> constructor, designed to showcase what are its capabilities.

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
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et ligula quis justo bibendum consequat. Ut auctor diam sit amet diam ornare euismod. [URL](https://docs.google.com/spreadsheets/d/18O4QvBpIGMcXMq3VZMICwYB8L7tyJ11T/edit#gid=1718761465) elit at dapibus commodo. <a href="https://en.wikipedia.org/wiki/Gaius_Maecenas">Maecenas</a> sit amet purus eu metus pharetra pulvinar. In quis scelerisque leo.
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
These are the properties and attributes associated to the <b>{{ $doc.constructorName }}</b> constructor:

#### Properties and Attributes Description
The <b>{{ $doc.constructorName }}</b> constructor gives you an option to hold both image and text in one row. Text size, position and alignement are fully adjustable. Below is a detailed description of the properties and attributes used in the <b>{{ $doc.constructorName }}</b> constructor.

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Attribute</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="6"><code>ui</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>The <code>ui</code> property in the component is a configuration object that allows customization of various styling aspects of the component. Each attribute within the <code>ui</code> property targets a specific part of the component display, providing detailed control over its appearance and layout. Below is a detailed description of each attribute within the <code>ui</code> property:</td>
    </tr>
    <tr>
      <td><code>wrapper</code></td>
      <td><code>config.wrapper</code></td>
      <td>Defines the overall styling for the container that holds all the elements of the component.</td>
    </tr>
    <tr>
      <td><code>image</code></td>
      <td><code>config.image</code></td>
      <td>Styles applied to the image element, including properties like size and border radius.</td>
    </tr>
    <tr>
      <td><code>title</code></td>
      <td><code>config.title</code></td>
      <td>Styles applied to the title text, such as font size and color.</td>
    </tr>
    <tr>
      <td><code>subtitle</code></td>
      <td><code>config.subtitle</code></td>
      <td>Styles applied to the subtitle text, such as font size and color.</td>
    </tr>
    <tr>
      <td><code>text</code></td>
      <td><code>config.text</code></td>
      <td>Styles applied to the text content, such as font size and color.</td>
    </tr>
    <tr>
      <td><code>positionText</code></td>
      <td>n/a</td>
      <td><code>right</code></td>
      <td>
        Defines position of text in regard of image.</br>
        <b>Options:</b> <code>left</code>, <code>right</code></td>
    </tr>
    <tr>
      <td><code>spanText</code></td>
      <td>n/a</td>
      <td><code>m</code></td>
      <td>
        Defines amount of space that will text occupy.</br>
        <b>Options:</b> <code>s</code>, <code>m</code>, <code>l</code>
      </td>
    </tr>
    <tr>
      <td><code>alignText</code></td>
      <td>n/a</td>
      <td><code>center</code></td>
      <td>
        Defines alignement of the text. </br>
        <b>Options:</b> <code>left</code>, <code>center</code> & <code>right</code>
      </td>
    </tr>
    <tr>
      <td><code>status</code></td>
      <td>n/a</td>
      <td><code>config.status</code></td>
      <td>Styles for the container background depending on the status value. <b>Options:</b> <code>a</code>, <code>b</code>, <code>c</code>, <code>d</code> & <code>default</code></td>
    </tr>
    <tr>
      <td><code>urlImage</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>The source URL of the image to be displayed.</td>
    </tr>
    <tr>
      <td><code>altImage</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>Alternative text for the image, used for accessibility and in case the image fails to load.</td>
    </tr>
    <tr>
      <td><code>title</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>The title text to be displayed.</td>
    </tr>
    <tr>
      <td><code>subtitle</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>The subtitle text to be displayed, if any.</td>
    </tr>
    <tr>
      <td><code>text</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>The main text content to be displayed.</td>
    </tr>
    <td><code>description</code></td>
      <td>n/a</td>
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
This is the content inside of the <code><b>{{ $doc.constructorName }}</b><b>.ts</b></code> & `status.ts`. It list properties where styles can be applied: 

<code><b>{{ $doc.constructorName }}</b><b>.ts</b></code>

```ts
export default {
  wrapper: "bg-gray-50 dark:bg-inherit border-neutral-200 dark:border-neutral-500 rounded-2xl shadow-lg dark:shadow-none p-3 sm:p-5 mb-12",
  title: "title font-extrabold text-xl dark:saturate-[300%] sm:text-3xl md:text-4xl lg:text-5xl",
  subtitle: "subtitle font-semibold dark:saturate-[180%] text-lg sm:text-xl md:text-2xl lg:text-3xl break-words -mt-9",
  text: "not-prose text-lg sm:text-md md:text-lg lg:text-xl leading-loose break-words mt-16",
  image: "mx-auto rounded-xl",
  status: "",
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
These represent the class values utilized in the <b>{{ $doc.constructorName }}</b> constructor. These values are customizable and can be strengthened or overridden through the `ui` properties' attributes.

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


These style properties ensure that the <b>{{ $doc.constructorName }}</b> component is visually appealing and flexible, allowing for a wide range of customization to meet specific design requirements.
