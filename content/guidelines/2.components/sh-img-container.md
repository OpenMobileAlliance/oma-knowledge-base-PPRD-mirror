---
title: Image Container
description: This constructor is designed to showcase an image with an optional caption, providing flexibility in displaying images and captions in various layouts.
constructorName: ShImgContainer
layout: doc
---

### Usage
This constructor is mainly used withs `.svg` image file types, to create a more unified look and feel when displaying those formats.

::ShAlert
---
typeAlert: warning
---
This constructor inverts colors in dark mode, so any other image inserted will have its colors inverted. Works best with white/black colors.
::

#### Presentation
This is the display format for the {{ $doc.constructorName }} constructor, designed to showcase what are its capabilities.

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
These are the properties and attributes associated to the {{ $doc.constructorName }} constructor:

#### Properties and Attributes Description
The constructor creates a display format showcasing an image and an optional caption. Below is a detailed description of the properties and attributes used in the {{ $doc.constructorName }} constructor.

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
      <td rowspan="4">ui</td>
      <td>n/a</td>
      <td>The <code>ui</code> property in the <code>ShImgContainer</code> constructor is a comprehensive configuration object that allows for the customization of various styling aspects of the image container component. Each attribute within the <code>ui</code> property targets a specific part of the image display, providing detailed control over its appearance and layout. Below is a detailed description of each attribute within the <code>ui</code> property:</td>
    </tr>
    <tr>
      <td><code>wrapper</code></td>
      <td>Defines the overall styling for the container that holds both the image and its caption.</td>
    </tr>
    <tr>
      <td><code>inner</code></td>
      <td>Styles applied to the inner section that holds the image.</td>
    </tr>
    <tr>
      <td><code>base</code></td>
      <td>A placeholder for additional base styles that can be applied to the image component.</td>
    </tr>
    <tr>
      <td><code>image</code></td>
      <td>n/a</td>
      <td>Styles applied to the image itself, including size, alignment, and additional effects like borders or shadows.</td>
    </tr>
    <tr>
      <td><code>figcaption</code></td>
      <td>n/a</td>
      <td>Optional caption text displayed below the image. This includes font size, color, and alignment settings.</td>
    </tr>
    <tr>
      <td><code>urlImage</code></td>
      <td>n/a</td>
      <td>The source URL of the image to be displayed.</td>
    </tr>
    <tr>
      <td><code>altImage</code></td>
      <td>n/a</td>
      <td>Alternative text for the image, used for accessibility and in case the image fails to load.</td>
    </tr>
    <tr>
      <td><code>figcaption</code></td>
      <td>n/a</td>
      <td>The text displayed below the image as a caption.</td>
    </tr>
    <tr>
      <td><code>description</code></td>
      <td>n/a</td>
      <td>Help content for developers or content writers, does not render on the website.</td>
    </tr>
  </tbody>
</table>

### Example Usage
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
  wrapper: shadow-lg bg-gray-100 p-4
  image: rounded-lg border border-gray-300
  figcaption: text-lg text-gray-600 italic
urlImage: https://example.com/image.jpg
altImage: Custom Image
figcaption: |
    This is a custom caption with styled text.
---
::
```

### Config
These style properties can be modified via `ui` and are stored in the <b>{{ $doc.constructorName }}.ts</b> file:

```ts
export default {
    wrapper: "max-w-xl mx-auto p-4 bg-white shadow-md rounded-md",
    inner: "flex justify-center items-center",
    base: "relative",
    image: "w-full h-auto rounded-lg",
    figcaption: "text-center text-sm text-gray-500 mt-2",
    // Default Tailwind CSS values
    default: {
    }
}
```

#### Class Descriptions
These represent the class values utilized in the <b>{{ $doc.constructorName }}</b> constructor. These values are customizable and can be strengthened or overridden through the `ui` properties' attributes.

_**wrapper**_
* **Value**: `"max-w-xl mx-auto p-4 bg-white shadow-md rounded-md"`
* **Description**: Defines the overall styling for the container holding the image and caption. The value includes a maximum width, centered layout, padding, shadow, and rounded corners.

_**inner**_
* **Value**: `"flex justify-center items-center"`
* **Description**: Applies flexbox layout for centering the image within the container.

_**base**_
* **Value**: `"relative"`
* **Description**: A relative container for positioning the image element.

_**image**_
* **Value**: `"w-full h-auto rounded-lg"`
* **Description**: Defines the image's width, height, and rounded corners.

_**figcaption**_
* **Value**: `"text-center text-sm text-gray-500 mt-2"`
* **Description**: Applies styles to the optional caption, including text size, color, and top margin.

_**default**_
* **Value**: n/a
* **Description**: This object is intended to hold any default Tailwind CSS values that might be used as fallback or initial styles.

These style properties ensure that the <b>{{ $doc.constructorName }}</b> component is visually appealing and flexible, allowing for a wide range of customization to meet specific design requirements.
