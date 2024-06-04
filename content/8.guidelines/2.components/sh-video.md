---
title: Video
description:
constructorName: ShVideo
---

### Usage

#### Presentation
This section explains how the {{ $doc.constructorName }} constructor is displayed, enabling the embedding of videos with custom styles.

##### Example Basic

::ShVideo
---
src: "https://www.youtube.com/watch?v=8A5AMiskxvQ"
---
::

This is how it is constructed:

```md
::ShVideo
---
src: "https://www.youtube.com/watch?v=8A5AMiskxvQ"
---
::
```

### Props
These are the properties and attributes associated with the {{ $doc.constructorName }} constructor:

#### Properties and Attributes Description
The {{ $doc.constructorName }} constructor creates a display format for embedding a video with customizable styles. Below is a detailed description of the properties and attributes used in the {{ $doc.constructorName }} constructor.

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Class</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">ui</td>
      <td>n/a</td>
      <td>The <code>ui</code> property in the <code>ShVideo</code> constructor is a configuration object that allows for the customization of various styling aspects of the video component. Below is a detailed description of each attribute within the <code>ui</code> property:</td>
    </tr>
    <tr>
      <td><code>wrapper</code></td>
      <td>Defines the overall styling for the container that holds the video. The attribute <code>shadow-2xl</code> provides a shadow effect around the wrapper.</td>
    </tr>
    <tr>
      <td>src</td>
      <td>n/a</td>
      <td>The source URL of the video to be embedded. This property is mandatory.</td>
    </tr>
  </tbody>
</table>

### Example Usage
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

```md
::ShVideo
---
ui:
    wrapper: "shadow-2xl mx-auto max-w-screen-lg" # custom styles for the wrapper
src: "https://www.youtube.com/watch?v=8A5AMiskxvQ"
---
::
```

### Config
These style properties can be modified via `ui` and are stored in the `sh-video.ts` file:

```ts
export default {
    wrapper: "mx-5 ring-4",
    // Default Tailwind CSS values
    default: {
    }
}
```

#### Class Descriptions
These represent the class values utilized in the {{ $doc.constructorName }} constructor. These values are customizable and can be strengthened or overridden through the `ui` properties' attributes.

_**wrapper**_
*  **Value**: <code>"mx-5 ring-4"</code>
*  **Description**: This defines the overall styling for the video container. The value "mx-5 ring-4" indicates a horizontal margin of 5 units (mx-5) and a ring (border) of 4 units.

_**default**_
*  **Value**: <code>{}</code>
*  **Description**: This object is intended to hold any default Tailwind CSS values that might be used as fallback or initial styles.

These style properties ensure that the {{ $doc.constructorName }} component is visually appealing and flexible, allowing for a wide range of customization to meet specific design requirements.
