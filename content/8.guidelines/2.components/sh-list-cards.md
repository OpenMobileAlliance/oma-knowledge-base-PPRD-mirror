---
title: ListCards
description: Renders content in ShCard components, displays a grid of cards by order of cardID, and supports tag filtering.
constructorName: ShListCards
layout: doc
---

### Usage

#### Presentation
This is the display format for the <b>{{ $doc.constructorName }}</b> constructor, designed to showcase its capabilities.

#### Example Basic

::ShListCards
---
ui:
  gap: gap-6
description: This constructor is standalone
title: |
    Featured Projects
subtitle: |
    Check out our latest projects
text: |
    Here are some of the exciting projects we're working on.
cols: 2
cardID: [55, 50]
---
::

This is how it is constructed.

```mdc
::ShListCards
---
ui:
  gap: gap-6
description: This constructor is standalone
title: |
    Featured Projects
subtitle: |
    Check out our latest projects
text: |
    Here are some of the exciting projects we're working on.
cols: 2
cardID: [55, 50]
---
::
```

### Props
These are the properties and attributes associated to the <b>{{ $doc.constructorName }}</b> constructor:

#### Properties and Attributes Description
The constructor creates a display format for a list of cards, including a header section and a grid layout for the cards. Below is a detailed description of the properties and attributes used in the <b>{{ $doc.constructorName }}</b> constructor.

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
      <td rowspan="8"><code>ui</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>The <code>ui</code> property in the <code>ShListCards</code> constructor is a comprehensive configuration object that allows for the customization of various styling aspects of the list cards component. Each attribute within the <code>ui</code> property targets a specific part of the list cards display, providing detailed control over its appearance and layout. Below is a detailed description of each attribute within the <code>ui</code> property:</td>
    </tr>
    <tr>
      <td><code>wrapper</code></td>
      <td><code>config.wrapper</code></td>
      <td>Defines the overall styling for the container that holds the entire list of cards. This typically includes padding, margins, and general layout settings.</td>
    </tr>
    <tr>
      <td><code>header</code></td>
      <td><code>config.header</code></td>
      <td>Styles applied to the header section, including the title, subtitle, and description. This can include font size, color, and alignment settings.</td>
    </tr>
    <tr>
      <td><code>title</code></td>
      <td><code>config.title</code></td>
      <td>Define the style of title fonts, displayed prominently at the top of the header section.</td>
    </tr>
    <tr>
      <td><code>subtitle</code></td>
      <td><code>config.subtitle</code></td>
      <td>Define the style of subtitle fonts, which provides additional context or description for the list of cards.</td>
    </tr>
    <tr>
      <td><code>text</code></td>
      <td><code>config.text</code></td>
      <td>Define the style of text fonts</td>
    </tr>
    <tr>
      <td><code>base</code></td>
      <td><code>config.base</code></td>
      <td>Styles applied to the grid layout of the cards. This typically includes grid columns and gap settings.</td>
    </tr>
    <tr>
      <td><code>gap</code></td>
      <td><code>config.gap</code></td>
      <td>The gap size between the cards in the grid layout.</td>
    </tr>
    <tr>
      <td><code>title</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>The title of the list of cards, displayed prominently at the top of the header section.</td>
    </tr>
    <tr>
      <td><code>subtitle</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>The subtitle, which provides additional context or description for the list of cards.</td>
    </tr>
    <tr>
      <td><code>text</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>Additional descriptive text or instructions displayed below the subtitle.</td>
    </tr>
    <tr>
      <td><code>cols</code></td>
      <td>n/a</td>
      <td><code>gridClass</code></td>
      <td>The number of columns in the grid layout for the cards. The <code>gridClass</code> inteligentlly calculates number of cols that can be visible depending of the width of the screen. For any screen larger than <code>1300px</code> this component will allow user to enter his desired number of columns. Any width lower than that, it will automatically set columns to either 3, 2 or 1.</br>
      User can always set a smaller number if screen is beyond <code>1300px</code>.</td>
    </tr>
    <tr>
      <td><code>cardID</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>This prop allows this constructor to list cards in order that is inputed</td>
    </tr>
    <tr>
      <td><code>description</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>This is used to help content writers. Doesn`t render on site.</td>
    </tr>
  </tbody>
</table>

#### Example Usage
##### Advanced Settings
An example with customized `ui` attributes for enhanced display:

::ShListCards
---
ui:
  header: "text-center mb-4"
  title: "text-4xl font-bold text-blue-600"
  subtitle: "text-2xl font-medium text-gray-700"
  text: "text-lg text-gray-600"
  base: "bg-gradient-to-b from-[#8FD2C4] rounded-2xl p-8"
  gap: gap-6
cols: 3
title: |
    Advanced Usage of this constuctor
subtitle: |
    Check out the looks and feels
text: |
    Feel free to explore any styling option using Tailwind classes!
cardID: [55, 50, 45]
---
::

This is an example with customized `ui` attributes for enhanced display:

```mdc
::ShListCards
---
ui:
  header: "text-center mb-4"
  title: "text-4xl font-bold text-blue-600"
  subtitle: "text-2xl font-medium text-gray-700"
  text: "text-lg text-gray-600"
  base: "bg-gradient-to-b from-[#8FD2C4] rounded-2xl p-8"
  gap: gap-6
cols: 3
title: |
    Advanced Usage of this constuctor
subtitle: |
    Check out the looks and feels
text: |
    Feel free to explore any styling option using Tailwind classes!
cardID: [55, 50, 45]
---
::
```

### Config
These style properties can be modified via `ui` and are stored in the <code><b>{{ $doc.constructorName }}</b><b>.ts</b></code> file:

```ts
export default {
  wrapper: "pl-4 pr-4 pb-10 shadow-md dark:shadow-none bg-neutral-100 dark:bg-neutral-900/[0.6] rounded-2xl",
  inner: "",
  tags: {
    title: "title flex flex-wrap justify-center",
    clear: "mt-3 text-lg px-3 border border-oma-red-500 bg-oma-red-600 hover:bg-oma-red-500 hover:border-oma-red-600 text-white dark:border-oma-red-500 dark:bg-oma-red-600 dark:hover:bg-oma-red-500 dark:hover:border-oma-red-600 dark:text-white rounded-3xl",
    list: "inline-block overflow-hidden hover:scale-105 duration-200 ease-in-out rounded-3xl text-lg cursor-pointer px-3 mx-2 mt-4 hover:shadow-xl hover:shadow-primary/[0.3] border border-primary dark:text-white dark:border-primary dark:shadow-primary/[0.3]",
  },
  header: "",
  title: "title pt-6 text-3xl font-extrabold text-center dark:text-golden",
  subtitle: "subtitle pb-6 text-xl font-semibold text-gray-600 dark:text-golden/[0.9] -mt-8 text-center",
  text: "text pb-16 text-center font-light dark:text-golden/[0.8]",
  base: "justify-between flex flex-wrap",
  gap: "gap-0",
  // Default Tailwind CSS values
  default: {
  }
}
```

#### Class Descriptions
These represent the class values utilized in the <b>{{ $doc.constructorName }}</b> constructor. These values are customizable and can be strengthened or overridden through the `ui` properties' attributes.

_**wrapper**_
* **Value**: `"pl-4 pr-4 pb-10 shadow-md dark:shadow-none bg-neutral-100 dark:bg-neutral-900/[0.6] rounded-2xl"`
* **Description**: Provides padding on the left, right, and bottom, a shadow for light mode, and a neutral background color with transparency in dark mode. Also includes large rounded corners.

_**inner**_
* **Value**: `""`
* **Description**: No default styles are applied; this class is intentionally left blank for custom inner container styling.

_**tags.title**_
* **Value**: `"title flex flex-wrap justify-center"`
* **Description**: Defines a flexible layout for wrapping and centering content, used for tag titles.

_**tags.clear**_
* **Value**: `"mt-3 text-lg px-3 border border-oma-red-500 bg-oma-red-600 hover:bg-oma-red-500 hover:border-oma-red-600 text-white dark:border-oma-red-500 dark:bg-oma-red-600 dark:hover:bg-oma-red-500 dark:hover:border-oma-red-600 dark:text-white rounded-3xl"`
* **Description**: A button-like style with red-themed borders and background, hover effects, and rounded corners, adapting to light and dark modes.

_**tags.list**_
* **Value**: `"inline-block overflow-hidden hover:scale-105 duration-200 ease-in-out rounded-3xl text-lg cursor-pointer px-3 mx-2 mt-4 hover:shadow-xl hover:shadow-primary/[0.3] border border-primary dark:text-white dark:border-primary dark:shadow-primary/[0.3]"`
* **Description**: Provides hover animations with scaling, shadow effects, and rounded corners. Includes padding, margin, and a border for tag items.

_**header**_
* **Value**: `""`
* **Description**: No default styles are applied; this class is intentionally left blank for custom header styling.

_**title**_
* **Value**: `"title pt-6 text-3xl font-extrabold text-center dark:text-golden"`
* **Description**: Defines padding at the top, large bold text, and centered alignment, with a golden text color in dark mode.

_**subtitle**_
* **Value**: `"subtitle pb-6 text-xl font-semibold text-gray-600 dark:text-golden/[0.9] -mt-8 text-center"`
* **Description**: Applies bottom padding, medium-bold text style, gray coloring (light mode) or golden coloring (dark mode), and centered alignment. Includes a negative top margin for positioning adjustments.

_**text**_
* **Value**: `"text pb-16 text-center font-light dark:text-golden/[0.8]"`
* **Description**: Centers light-text font style with golden coloring in dark mode and adds bottom padding for spacing.

_**base**_
* **Value**: `"justify-between flex flex-wrap"`
* **Description**: Arranges children with flexbox, wrapping them and justifying content space between.

_**gap**_
* **Value**: `"gap-0"`
* **Description**: Removes gaps between items.

_**default**_
* **Value**: `n/a`
* **Description**: This object is intended to hold any default Tailwind CSS values that might be used as fallback or initial styles.

