---
title: ListCards
description: This constructor is designed to showcase a list of cards, each represented by a component with associated properties. It provides a header section with a title, subtitle, and description, and dynamically renders the cards in a grid layout based on the provided settings and cardID.
constructorName: ShListCards
layout: doc
---

### Usage

#### Presentation
This is the display format for the {{ $doc.constructorName }} constructor, designed to showcase its capabilities.

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
cardID: [4, 2, 1]
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
cardID: [4, 2, 1]
---
::
```

### Props
These are the properties and attributes associated to the {{ $doc.constructorName }} constructor:

#### Properties and Attributes Description
The constructor creates a display format for a list of cards, including a header section and a grid layout for the cards. Below is a detailed description of the properties and attributes used in the {{ $doc.constructorName }} constructor.

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
      <td rowspan="8">ui</td>
      <td>n/a</td>
      <td>The <code>ui</code> property in the <code>ShListCards</code> constructor is a comprehensive configuration object that allows for the customization of various styling aspects of the list cards component. Each attribute within the <code>ui</code> property targets a specific part of the list cards display, providing detailed control over its appearance and layout. Below is a detailed description of each attribute within the <code>ui</code> property:</td>
    </tr>
    <tr>
      <td><code>wrapper</code></td>
      <td>Defines the overall styling for the container that holds the entire list of cards. This typically includes padding, margins, and general layout settings.</td>
    </tr>
    <tr>
      <td><code>header</code></td>
      <td>Styles applied to the header section, including the title, subtitle, and description. This can include font size, color, and alignment settings.</td>
    </tr>
    <tr>
      <td><code>title</code></td>
      <td>Define the style of title fonts, displayed prominently at the top of the header section.</td>
    </tr>
    <tr>
      <td><code>subtitle</code></td>
      <td>Define the style of subtitle fonts, which provides additional context or description for the list of cards.</td>
    </tr>
    <tr>
      <td><code>text</code></td>
      <td>Define the style of text fonts</td>
    </tr>
    <tr>
      <td><code>base</code></td>
      <td>Styles applied to the grid layout of the cards. This typically includes grid columns and gap settings.</td>
    </tr>
    <tr>
      <td><code>gap</code></td>
      <td>The gap size between the cards in the grid layout.</td>
    </tr>
    <tr>
      <td><code>title</code></td>
      <td>n/a</td>
      <td>The title of the list of cards, displayed prominently at the top of the header section.</td>
    </tr>
    <tr>
      <td><code>subtitle</code></td>
      <td>n/a</td>
      <td>The subtitle, which provides additional context or description for the list of cards.</td>
    </tr>
    <tr>
      <td><code>text</code></td>
      <td>n/a</td>
      <td>Additional descriptive text or instructions displayed below the subtitle.</td>
    </tr>
    <tr>
      <td><code>cols</code></td>
      <td>n/a</td>
      <td>The number of columns in the grid layout for the cards.</td>
    </tr>
    <tr>
      <td><code>cardID</code></td>
      <td>n/a</td>
      <td>This prop allows this constructor to list cards in order that is inputed</td>
    </tr>
    <tr>
      <td><code>description</code></td>
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
cardID: [4, 2, 1]
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
cardID: [4, 2, 1]
---
::
```

### Config
These style properties can be modified via `ui` and are stored in the `sh-list-cards.ts` file:

```ts
export default {
  wrapper: "pl-4 pr-4 pb-10 shadow-xl bg-neutral-100 dark:bg-neutral-900/[0.6] rounded-2xl",
  inner: "",
  tags: {
    title: "flex flex-wrap justify-center",
    clear: "mt-3 text-lg px-3 border border-oma-red-500 bg-oma-red-600 hover:bg-oma-red-500 hover:border-oma-red-600 text-white dark:border-oma-red-500 dark:bg-oma-red-600 dark:hover:bg-oma-red-500 dark:hover:border-oma-red-600 dark:text-white rounded-3xl",
    list: "inline-block overflow-hidden hover:scale-105 duration-200 ease-in-out rounded-3xl text-lg cursor-pointer px-3 mx-2 mt-4 hover:shadow-xl hover:shadow-primary/[0.3] border border-primary dark:text-white dark:border-primary dark:shadow-primary/[0.3]",
  },
  header: "",
  title: "pt-6 text-3xl font-extrabold text-center dark:text-gray-200",
  subtitle: "pb-6 text-xl font-semibold text-gray-600 dark:text-gray-400 -mt-8 text-center",
  text: "pb-16 text-center font-light dark:text-gray-400",
  base: "justify-between flex flex-wrap",
  gap: "gap-0",
  // Default Tailwind CSS values
  default: {
  }
}
```

### Class Descriptions
These represent the class values utilized in the {{ $doc.constructorName }} constructor. These values are customizable and can be strengthened or overridden through the `ui` properties' attributes.

#### wrapper
- **Value**: `"pl-4 pr-4 pb-10 shadow-xl bg-sky-100 dark:bg-oma-blue-950 rounded-2xl"`
- **Description**: This defines the overall styling for the component's container. The value applies padding to the left, right, and bottom, a large shadow (`shadow-xl`), a sky blue background color for light mode (`bg-sky-100`), a dark blue background color for dark mode (`dark:bg-oma-blue-950`), and rounded corners (`rounded-2xl`).

#### inner
- **Value**: `""`
- **Description**: No specific styling is applied to the inner container by default. This class can be customized as needed.

#### tags.title
- **Value**: `"flex flex-wrap justify-center"`
- **Description**: This specifies the styling for the tag title section. The value includes a flexible box layout (`flex`), wrapping of flex items (`flex-wrap`), and centers the content horizontally (`justify-center`).

#### tags.clear
- **Value**: `"mt-3 text-lg px-3 border border-oma-red-500 bg-oma-red-600 hover:bg-oma-red-500 hover:border-oma-red-600 text-white dark:border-oma-red-500 dark:bg-oma-red-600 dark:hover:bg-oma-red-500 dark:hover:border-oma-red-600 dark:text-white rounded-3xl"`
- **Description**: This defines the styling for the clear tags button. It includes a top margin (`mt-3`), large text (`text-lg`), padding (`px-3`), a red border (`border-oma-red-500`), and a red background (`bg-oma-red-600`) that changes on hover (`hover:bg-oma-red-500`). In dark mode, similar styles are applied with corresponding `dark` variants.

#### tags.list
- **Value**: `"inline-block overflow-hidden hover:scale-105 duration-200 ease-in-out rounded-3xl text-lg cursor-pointer px-3 mx-2 mt-4 hover:shadow-xl hover:shadow-[#8DD1C3] border border-green-800 dark:text-white dark:border-oma-cyan-700 dark:shadow-oma-cyan-300"`
- **Description**: This specifies the styling for each tag in the list. The value includes inline-block display (`inline-block`), hidden overflow (`overflow-hidden`), hover scaling effect (`hover:scale-105`), smooth transition (`duration-200 ease-in-out`), rounded corners (`rounded-3xl`), and padding (`px-3`). It also includes a border (`border-green-800`) and a hover shadow effect (`hover:shadow-xl`). Dark mode includes white text (`dark:text-white`), a cyan border (`dark:border-oma-cyan-700`), and a cyan shadow (`dark:shadow-oma-cyan-300`).

#### header
- **Value**: `""`
- **Description**: No specific styling is applied to the header section by default.

#### title
- **Value**: `"pt-6 text-3xl font-extrabold text-center"`
- **Description**: This defines the styling for the title. The value includes padding at the top (`pt-6`), extra-large font size (`text-3xl`), bold font weight (`font-extrabold`), and centered text (`text-center`).

#### subtitle
- **Value**: `"pb-6 text-xl font-semibold text-gray-600 dark:text-gray-400 -mt-8 text-center"`
- **Description**: This specifies the styling for the subtitle. The value includes padding at the bottom (`pb-6`), large font size (`text-xl`), bold font weight (`font-semibold`), gray text color (`text-gray-600`) that changes to a lighter gray in dark mode (`dark:text-gray-400`), a negative top margin (`-mt-8`), and centered text (`text-center`).

#### text
- **Value**: `"pb-16 text-center font-light"`
- **Description**: This defines the styling for the descriptive text. The value includes padding at the bottom (`pb-16`), centered text (`text-center`), and a light font weight (`font-light`).

#### base
- **Value**: `"justify-between flex flex-wrap"`
- **Description**: This specifies the styling for the layout container. The value includes a flexbox layout (`flex`), wrapping of flex items (`flex-wrap`), and space distributed between items (`justify-between`).

#### gap
- **Value**: `"gap-0"`
- **Description**: This specifies no gap between items in the layout.

#### default
- **Value**: `{ cols: 3, gap: "4" }`
- **Description**: This object contains default values for the number of columns (`cols: 3`) and gap size (`gap: "4"`), which can be overridden as needed.

