---
title: Social
description: Embed social media posts
constructorName: ShSocial
layout: doc
---

### Usage
#### Presentation
This is the display format for the <b>{{ $doc.constructorName }}</b> constructor, designed to showcase Social Media posts.
##### X (Twitter) embeded post

::ShSocial
---
src: "1757162766115176926"
---
::

This is how it is constructed:

```mdc
::ShSocial
---
src: "1757162766115176926"
---
::
```

___

#### Facebook Embeded Post

::ShSocial
---
src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FNASA%2Fposts%2Fpfbid0KzFf9KDNS8zh4Cngx22ec2aeRHBYcQk4KkescRzoW2hUMpH6Yuc13smPmLww95qNl&show_text=true&width=500"
---
::

This is how it is constructed:

```mdc
::ShSocial
---
src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FNASA%2Fposts%2Fpfbid0KzFf9KDNS8zh4Cngx22ec2aeRHBYcQk4KkescRzoW2hUMpH6Yuc13smPmLww95qNl&show_text=true&width=500"
---
::
```

___

#### LinkedIn Embeded Post

::ShSocial
---
src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7161263277866422272"
---
::

This is how it is constructed:

```mdc
::ShSocial
---
src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7161263277866422272"
---
::
```
### Props
These are the properties and attributes associated to the <b>{{ $doc.constructorName }}</b> constructor:

#### Properties and Attributes Description
The <b>{{ $doc.constructorName }}</b> constructor creates a display format showcasing a Social Media post.  Below is a detailed description of the properties and attributes used in the <b>{{ $doc.constructorName }}</b> constructor.

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Attributes</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2"><code>ui</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>The <code>ui</code> property in the <code>ShSocial</code> constructor is a comprehensive configuration object that allows for the customization of various styling aspects of the Social Media component. Each attribute within the <code>ui</code> property targets a specific part of the Social Media display, providing detailed control over its appearance and layout. Below is a detailed description of each attribute within the <code>ui</code> property:</td>
    </tr>
    <tr>
      <td><code>wrapper</code></td>
      <td><code>config.wrapper</code></td>
      <td>Defines the overall styling for the container that holds all the elements of the Social Media post. The attribute <code>shadow-xl</code> is used to provide a shadow effect around the wrapper.</td>
    </tr>
    <tr>
      <td><code>src</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>The source URL of the Social Media post; Facebook, LinkedIn, X (formally Twitter) to be displayed.</td>
    </tr>
    <td><code>description</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>Intented to be used as a help to content writter. Doesn`t render on website.</td>
  </tbody>
</table>

### Config
These style properties can be modified via `ui` and are stored in the <code><b>{{ $doc.constructorName }}</b><b>.ts</b></code> file:

```ts
export default {
    wrapper: "flex p-4 justify-center",
    facebook: "bg-white dark:bg-white rounded-xl border",
    linkedin: "",
    twitter: "bg-white dark:bg-white",
    // Default Tailwind CSS values
    default: {
    }
  }
```

#### Class Descriptions

These style properties represent the class values utilized in the <b>{{ $doc.constructorName }}</b> constructor. These values are customizable and can be strengthened or override through the `ui` properties' attribute. 


_**wrapper**_

* **Value**: `"flex p-4 justify-center"`
* **Description**: This defines the overall styling for the container holding the social media elements. The value `"flex p-4 justify-center"` indicates that the wrapper uses a flexible box layout (flex), has padding of 4 units (p-4), and centers its content horizontally (justify-center).

_**facebook**_

* **Value**: `"bg-white dark:bg-white rounded-xl border"`
* **Description**: This specifies styles for the Facebook element. The value `"bg-white dark:bg-white rounded-xl border"` includes a white background (bg-white) that remains white in dark mode (dark
), rounded corners with an extra-large radius (rounded-xl), and a border (border).

_**linkedin**_

* **Value**: `""`
* **Description**: This is an empty placeholder for additional LinkedIn styles that can be customized if needed.

_**twitter**_

* **Value**: `"bg-white dark:bg-white"`
* **Description**: This specifies styles for the Twitter element. The value "bg-white dark:bg-white" includes a white background (bg-white) that remains white in dark mode (dark
).

_**default**_

* **Value**: `{}`
* **Description**: This object is intended to hold any default Tailwind CSS values that might be used as fallback or initial styles.

These style properties ensure that the <b>{{ $doc.constructorName }}</b> component is visually appealing and flexible, allowing for a wide range of customization to meet specific design requirements.
