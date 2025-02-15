---
title: FAQ
description: Component to render a list of frequently asked questions and answers.
constructorName: ShFaq
layout: doc
---

## Usage
The simplest example of usage for the <b>{{ $doc.constructorName }}</b> is with just a list of questions and answers.

::ShFaq
---
qas:
  - q: "What is the purpose of this component?"
    a: "To display a list of FAQs."
  - q: "How do I use it?"
    a: "Include the qas property with question-answer pairs."
---
::

This is how it is written:

```mdc
::ShFaq
---
qas:
  - q: "What is the purpose of this component?"
    a: "To display a list of FAQs."
  - q: "How do I use it?"
    a: "Include the qas property with question-answer pairs."
---
::
```

## Props
These are the properties and attributes associated to the <b>{{ $doc.constructorName }}</b> constructor:

#### Properties and Attributes
These are the properties and attributes to define and style the <b>{{ $doc.constructorName }}</b> constructor:

<table>
    <caption>Properties & Attributes</caption>
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
            <td rowspan="10"><code>ui</code></td>
            <td>n/a</td>
            <td>n/a</td>
            <td>The <code>ui</code> property is a comprehensive configuration object that allows for the customization of various styling aspects of the FAQ component. Each attribute within the <code>ui</code> property targets a specific part of the component's appearance and layout, providing detailed control over its design.</td>
        </tr>
        <tr>
            <td>
              <code>header.wrapper</code></br>
              <code>header.title</code></br>
            </td>
            <td>
              <code>config.header.wrapper</code></br>
              <code>config.header.title</code></br>
            </td>
            <td>Defines the styling for the header, including the wrapper and title of the FAQ component.</td>
        </tr>
        <tr>
            <td><code>wrapper</code></td>
            <td><code>config.wrapper</code></td>
            <td>Defines the styling for the container of the FAQ items. This includes borders, padding, and layout.</td>
        </tr>
        <tr>
            <td><code>inner</code></td>
            <td><code>config.inner</code></td>
            <td>Specifies the styling for individual FAQ items, such as margin and padding.</td>
        </tr>
        <tr>
            <td><code>question</code></td>
            <td><code>config.question</code></td>
            <td>Defines the styling for the question part of the FAQ, including cursor and text color.</td>
        </tr>
        <tr>
            <td><code>q</code></td>
            <td><code>config.q</code></td>
            <td>Defines the text styling for the question part of the FAQ.</td>
        </tr>
        <tr>
            <td><code>answer</code></td>
            <td><code>config.answer</code></td>
            <td>Defines the styling for the answer part of the FAQ, including text color.</td>
        </tr>
        <tr>
            <td><code>a</code></td>
            <td><code>config.a</code></td>
            <td>Defines the text styling for the answer part of the FAQ.</td>
        </tr>
        <tr>
            <td><code>divider</code></td>
            <td><code>config.divider</code></td>
            <td>Defines the styling for the divider between FAQ items.</td>
        </tr>
        <tr>
            <td><code>icon</code></td>
            <td><code>config.icon</code></td>
            <td>Defines the styling of the icon.</td>
        </tr>
        <tr>
            <td><code>qas</code></td>
            <td>n/a</td>
            <td>n/a</td>
            <td>Represents the list of question-answer pairs to be displayed in the FAQ component.</td>
        </tr>
        <td><code>description</code></td>
            <td>n/a</td>
            <td>n/a</td>
            <td>Intented to be used as a help to content writter. Doesn`t render on website.</td>
    </tbody>
</table>

#### Example Usage
##### Advanced Settings
An example with customized `ui` attributes for enhanced display:

::ShFaq
---
ui:
  header:
    wrapper: "font-bold text-xl mb-4"
    title: "text-2xl"
  wrapper: "border p-4"
  inner: "mb-2"
  question: "cursor-pointer text-blue-500"
  answer: "text-gray-700"
  divider: "border-t my-2"
qas:
  - q: "What is the purpose of this component?"
    a: "To display a list of FAQs."
  - q: "How do I use it?"
    a: "Include the qas property with question-answer pairs."
---
::


This is how it is written:
```mdc
::ShFaq
---
ui:
  header:
    wrapper: "font-bold text-xl mb-4"
    title: "text-2xl"
  wrapper: "border p-4"
  inner: "mb-2"
  question: "cursor-pointer text-blue-500"
  answer: "text-gray-700"
  divider: "border-t my-2"
qas:
  - q: "What is the purpose of this component?"
    a: "To display a list of FAQs."
  - q: "How do I use it?"
    a: "Include the qas property with question-answer pairs."
---
::
```

## Config
These style properties can be modified via `ui` and are stored in the <code><b>{{ $doc.constructorName }}</b><b>.ts</b></code> file:

```ts
export default {
  header: {
    wrapper: "mt-10",
    title: "title text-2xl font-bold",
  },
  wrapper: "border rounded-xl",
  inner: "mx-3 cursor-pointer",
  question: "grid grid-cols-2 flex-row font-bold",
  q: "w-full hover:scale-105 duration-300 text-black dark:text-golden mx-4",
  answer: "ml-1",
  a: "mx-6 font-light text-black dark:text-golden",
  divider: "border-b",
  icon: "place-self-end self-center text-2xl text-black dark:text-golden i-icons8-chevron-right-round",
  // Default Tailwind CSS values
  default: {
  }
}
```

#### Class Descriptions
These represent the class values utilized in the <b>{{ $doc.constructorName }}</b> constructor. These values are customizable and can be strengthened or overridden through the `ui` properties' attributes.

_**header.wrapper**_
*  **Value**: `mt-10`
*  **Description**: Sets the top margin for the header wrapper, providing spacing above it.

_**header.title**_
*  **Value**: `text-2xl font-bold`
*  **Description**: Applies a text size of 2xl and bold font weight to the title within the header.

_**wrapper**_
*  **Value**: `border rounded-xl`
*  **Description**: Defines a border around the container and applies extra-large rounding to its corners.

_**inner**_
*  **Value**: `mx-3 cursor-pointer`
*  **Description**: Adds horizontal margins and changes the cursor to a pointer when hovering, indicating interactivity.

_**question**_
*  **Value**: `grid grid-cols-2 flex-row font-bold`
*  **Description**: Utilizes a grid layout with two columns and a flex-row direction, applying bold font weight to questions.

_**q**_
*  **Value**: `w-full hover:scale-105 duration-300 hover:text-primary-500 dark:text-white mx-4`
*  **Description**: Ensures full width, applies a scale transform on hover, sets a transition duration, changes text color on hover, and applies white text color in dark mode with horizontal margins.

_**answer**_
*  **Value**: `ml-1`
*  **Description**: Adds a small left margin to the answer text.

_**a**_
*  **Value**: `mx-6 dark:text-white`
*  **Description**: Applies horizontal margins and sets text color to white in dark mode for the 'a' element.

_**divider**_
*  **Value**: `border-b`
*  **Description**: Applies a bottom border, often used to separate elements.

_**icon**_
*  **Value**: `place-self-end self-center text-2xl i-icons8-chevron-right-round`
*  **Description**: Aligns the icon to the end of its container, centers it vertically, sets its text size to 2xl, and applies a specific icon class.

_**default**_
*  **Value**: `{}`
*  **Description**: Placeholder for default Tailwind CSS values, currently empty.

These style properties ensure that the <b>{{ $doc.constructorName }}</b> component is visually appealing and flexible, allowing for a wide range of customization to meet specific design requirements.
