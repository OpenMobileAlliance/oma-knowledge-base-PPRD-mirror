---
title: Image Container
description: This constructor is designed to showcase an image with an optional caption, providing flexibility in displaying images and captions in various layouts.
constructorName: ShImgContainer
layout: doc
---

### Usage
This constructor is mainly used with `.svg` image file types, to create a more unified look and feel when displaying those formats.

::ShAlert
---
typeAlert: warning
---
This constructor inverts colors in dark mode, so any other image inserted will have its colors inverted. Works best with white/black colors.
::

#### Presentation
This is the display format for the <b>{{ $doc.constructorName }}</b> constructor, designed to showcase what are its capabilities.

#### Example Basic

::ShImgContainer
---
urlImage: /images/lwm2m/overall_architecture.drawio.svg
altImage: Sample Image
figcaption: |
    This is an example caption for the image.
---
::

This is how it is constructed

```mdc
::ShImgContainer
---
urlImage: /images/lwm2m/overall_architecture.drawio.svg
altImage: Sample Image
figcaption: |
    This is an example caption for the image.
---
::
```

### Props
These are the properties and attributes associated to the <b>{{ $doc.constructorName }}</b> constructor:

#### Properties and Attributes Description
The constructor creates a display format showcasing an image and an optional caption. Below is a detailed description of the properties and attributes used in the <b>{{ $doc.constructorName }}</b> constructor.

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Attribute</th>
      <th>Deafult</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="5"><code>ui</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>The <code>ui</code> property in the <code>ShImgContainer</code> constructor is a comprehensive configuration object that allows for the customization of various styling aspects of the image container component. Each attribute within the <code>ui</code> property targets a specific part of the image display, providing detailed control over its appearance and layout. Below is a detailed description of each attribute within the <code>ui</code> property:</td>
    </tr>
    <tr>
      <td><code>wrapper</code></td>
      <td><code>config.wrapper</code></td>
      <td>Defines the overall styling for the container that holds both the image and its caption.</td>
    </tr>
    <tr>
      <td><code>inner</code></td>
      <td><code>config.inner</code></td>
      <td>Styles applied to the inner section that holds the image.</td>
    </tr>
    <tr>
      <td><code>base</code></td>
      <td><code>config.base</code></td>
      <td>A placeholder for additional base styles that can be applied to the image component.</td>
    </tr>
    <tr>
      <td><code>image</code></td>
      <td><code>config.image</code></td>
      <td>Styles applied to the image itself, including size, alignment, and additional effects like borders or shadows.</td>
    </tr>
    <tr>
      <td><code>figcaption</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>Optional caption text displayed below the image. This includes font size, color, and alignment settings.</td>
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
      <td><code>description</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>Help content for developers or content writers, does not render on the website.</td>
    </tr>
  </tbody>
</table>

#### Example Usage
#### Advanced Settings
An example with customized ui attributes for enhanced display:

::ShImgContainer
---
ui:
  wrapper: shadow-lg bg-purple-300 dark:bg-purple-900 p-4 rounded-xl
  image: rounded-lg border border-gray-300
  figcaption: text-lg text-gray-600 italic
urlImage: /images/lwm2m/overall_architecture.drawio.svg
altImage: Custom Image
figcaption: |
    This is a custom caption with styled text.
---
::

This is an example with customized `ui` attributes for enhanced display:

```mdc
::ShImgContainer
---
ui:
  wrapper: shadow-lg bg-purple-300 dark:bg-purple-900 p-4 rounded-xl
  image: rounded-lg border border-gray-300
  figcaption: text-lg text-gray-600 italic
urlImage: /images/lwm2m/overall_architecture.drawio.svg
altImage: Custom Image
figcaption: |
    This is a custom caption with styled text.
---
::
```

### Config
These style properties can be modified via `ui` and are stored in the <code><b>{{ $doc.constructorName }}</b><b>.ts</b></code> file:

```ts
export default{
    wrapper: 'flex-row',
    inner: 'bg-white dark:bg-black pt-3 pb-3 mx-32 rounded-lg',
    base: 'dark:invert flex flex-col justify-center items-center m-4',
    image: '',
    figcaption: 'flex justify-center italic text-neutral-600 dark:text-neutral-400',
}
```

#### Class Descriptions
These represent the class values utilized in the <b>{{ $doc.constructorName }}</b> constructor. These values are customizable and can be strengthened or overridden through the `ui` properties' attributes.

_**wrapper**_
* **Value**: `"flex-row"`
* **Description**: Defines the flex direction for the container's children, arranging them in a row.

_**inner**_
* **Value**: `"bg-white dark:bg-black pt-3 pb-3 mx-32 rounded-lg"`
* **Description**: Provides the inner container with background color support for light and dark modes, top and bottom padding, side margins, and rounded corners.

_**base**_
* **Value**: `"dark:invert flex flex-col justify-center items-center m-4"`
* **Description**: Acts as a relative container with inverted colors in dark mode, flex column layout, centered content, and margin.

_**image**_
* **Value**: `""`
* **Description**: No default styles are applied; this class is left intentionally blank for custom image-specific styling.

_**figcaption**_
* **Value**: `"flex justify-center italic text-neutral-600 dark:text-neutral-400"`
* **Description**: Applies a centered flex layout with italic text style and neutral text color, adapting for light and dark modes.


These style properties ensure that the <b>{{ $doc.constructorName }}</b> component is visually appealing and flexible, allowing for a wide range of customization to meet specific design requirements.
