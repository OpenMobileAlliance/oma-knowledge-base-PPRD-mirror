---
title: Badge
description: Display a short text to represent a status or a category.
constructorName: ShBadge
layout: doc
---

### Usage

#### Presentation
This is the display format for the <b>{{ $doc.constructorName }}</b> constructor, designed to showcase what are its capabilities.

##### Example Basic

::ShBadge
1.2+
::

This is how it is constructed

```mdc
::ShBadge
1.2+
::
```

### Props
There aren`t any properties associated to the <b>{{ $doc.constructorName }}</b> constructor.

#### Attributes Description
The <b>{{ $doc.constructorName }}</b> constructor represents a short text that is easily visible. It can be used to represent versions of files, documents, updates etc. Below is a description of the attribute used in the <b>{{ $doc.constructorName }}</b> constructor.

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
      <td rowspan="2"><code>ui</code></td>
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
      <td><code>description</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>Intented to be used as a help to content writter. Doesn`t render on website.</td>
    </tr>
    </tbody>
</table>

#### Example Usage
##### Advanced Settings
An example with customized `ui` attributes for enhanced display:

::ShBadge
---
ui:
    wrapper: hover:scale-125 duration-300 mx-10 bg-oma-red-50 dark:bg-oma-red-700 text-primary
---
1.2+
::

This is an example with customized `ui` attributes for enhanced display:

```mdc
::ShBadge
---
ui:
    wrapper: hover:scale-125 duration-300 mx-10 bg-oma-red-50 dark:bg-oma-red-700 text-primary
---
1.2+
::
```

### Config
These style properties can be modified via `ui` and are stored in the <code><b>{{ $doc.constructorName }}</b><b>.ts</b></code> and `status.ts` files:

<code><b>{{ $doc.constructorName }}</b><b>.ts</b></code>

```ts
import status from './status';

export default {
  wrapper: status.default,
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
*  **Value**: <code>status.default</code>
*  **Description**: This defines the overall styling for the container holding the element. The value status.default is defined inside of <code>status.ts</code> file.

This style property ensure that the <b>{{ $doc.constructorName }}</b> component is visually appealing and flexible, allowing for a wide range of customization to meet specific design requirements.
