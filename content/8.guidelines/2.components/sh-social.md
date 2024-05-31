## Usage ShSocial
### Presentation
This is the display format for the `ShSocial` constructor, designed to showcase Social Media posts.

#### X (Twitter) embeded post

::ShSocial
---
src: "1757162766115176926"
---
::

This is how it is constructed:

```md
::ShSocial
---
src: "1757162766115176926"
---
::
```

#### Facebook embeded post

::ShSocial
---
src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FNASA%2Fposts%2Fpfbid0KzFf9KDNS8zh4Cngx22ec2aeRHBYcQk4KkescRzoW2hUMpH6Yuc13smPmLww95qNl&show_text=true&width=500"
---
::

This is how it is constructed:

```md
::ShSocial
---
src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FNASA%2Fposts%2Fpfbid0KzFf9KDNS8zh4Cngx22ec2aeRHBYcQk4KkescRzoW2hUMpH6Yuc13smPmLww95qNl&show_text=true&width=500"
---
::
```

#### LinkedIn embeded post

::ShSocial
---
src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7161263277866422272"
---
::

This is how it is constructed:

```md
::ShSocial
---
src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7161263277866422272"
---
::
```
### ShSocial Props
These are the properties and attributes associated to the `ShSocial` constructor:

#### ShSocial Properties and Attributes Description
The `ShSocial` constructor creates a display format showcasing a Social Media post.  Below is a detailed description of the properties and attributes used in the `ShSocial` constructor.

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Attributes</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="9">ui</td>
      <td>n/a</td>
      <td>The <code>ui</code> property in the <code>ShSocial</code> constructor is a comprehensive configuration object that allows for the customization of various styling aspects of the Social Media component. Each attribute within the <code>ui</code> property targets a specific part of the Social Media display, providing detailed control over its appearance and layout. Below is a detailed description of each attribute within the <code>ui</code> property:</td>
    </tr>
    <tr>
      <td><code>wrapper</code></td>
      <td>Defines the overall styling for the container that holds all the elements of the Social Media post. The attribute <code>shadow-xl</code> is used to provide a shadow effect around the wrapper.</td>
    </tr>
    <tr>
      <td><code>src</code></td>
      <td>n/a</td>
      <td>The source URL of the Social Media post (Facebook, LinkedIn, X (formally Twitter) to be displayed.</td>
    </tr>
  </tbody>
</table>

### ShSocial Config
These style properties represent the class values utilized in the `ShSocial` constructor. These values are customizable and can be strengthened or override through the `ui` properties' attribute. The content of `sh-social.ts` file is:

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
