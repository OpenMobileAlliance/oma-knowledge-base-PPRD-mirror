---
title: Video
description: Embed video either from YouTube or from your local
constructorName: ShVideo
layout: doc
---

### Usage

#### Presentation
This section explains how the <b>{{ $doc.constructorName }}</b> constructor is displayed, enabling the embedding of videos with custom styles.

##### Example Basic
</br>

::ShVideo
---
src: "https://www.youtube.com/watch?v=8A5AMiskxvQ"
---
::

This is how it is constructed:

```mdc
::ShVideo
---
src: "https://www.youtube.com/watch?v=8A5AMiskxvQ"
---
::
```

### Props
These are the properties and attributes associated with the <b>{{ $doc.constructorName }}</b> constructor:

#### Properties and Attributes Description
The <b>{{ $doc.constructorName }}</b> constructor creates a display format for embedding a video with customizable styles. Below is a detailed description of the properties and attributes used in the <b>{{ $doc.constructorName }}</b> constructor.

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
      <td>The <code>ui</code> property in the <code>ShVideo</code> constructor is a configuration object that allows for the customization of various styling aspects of the video component. Below is a detailed description of each attribute within the <code>ui</code> property:</td>
    </tr>
    <tr>
      <td><code>wrapper</code></td>
      <td><code>config.wrapper</code></td>
      <td>Defines the overall styling for the container that holds the video.</td>
    </tr>
    <tr>
      <td><code>src</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>The source URL of the video to be embedded. This property is mandatory.</td>
    </tr>
    <tr>
      <td><code>description</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>Intented to be used as a help to content writter. Doesn`t render on website.
    </td>
    </tr>
  </tbody>
</table>

#### Example Usage
##### Advanced Settings
An example with customized `ui` attributes for enhanced display:

::ShVideo
---
ui:
    wrapper: "shadow-2xl mx-auto max-w-screen-lg" # custom styles for the wrapper
src: "https://www.youtube.com/watch?v=8A5AMiskxvQ"
---
::

This is an example with customized `ui` attributes for enhanced display:

```mdc
::ShVideo
---
ui:
    wrapper: "shadow-2xl mx-auto max-w-screen-lg" # custom styles for the wrapper
src: "https://www.youtube.com/watch?v=8A5AMiskxvQ"
---
::
```

### Config
These style properties can be modified via `ui` and are stored in the <code><b>{{ $doc.constructorName }}</b><b>.ts</b></code> file:

```ts
export default {
    wrapper: "mx-5 ring-4",
    // Default Tailwind CSS values
    default: {
    }
}
```

#### Class Descriptions
These represent the class values utilized in the <b>{{ $doc.constructorName }}</b> constructor. These values are customizable and can be strengthened or overridden through the `ui` properties' attributes.

_**wrapper**_
*  **Value**: <code>"mx-5 ring-4"</code>
*  **Description**: This defines the overall styling for the video container. The value "mx-5 ring-4" indicates a horizontal margin of 5 units (mx-5) and a ring (border) of 4 units.

_**default**_
*  **Value**: <code>{}</code>
*  **Description**: This object is intended to hold any default Tailwind CSS values that might be used as fallback or initial styles.

These style properties ensure that the <b>{{ $doc.constructorName }}</b> component is visually appealing and flexible, allowing for a wide range of customization to meet specific design requirements.
