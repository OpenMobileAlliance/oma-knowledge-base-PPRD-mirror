### Usage

#### Presentation
This is the display format for the `ShAvatar` constructor, designed to showcase an avatar representing a project member and provide a direct link to their social media profiles.
 
##### Example Basic Avatar

::ShAvatar
---
srcAvatar: 'https://avatars.githubusercontent.com/u/3258579?v=4'
altAvatar: JPC
name: |
    Joaquin Prado
role: |
    Co-Founder
company: |
    Standards-Hub
linkedin: 'https://www.linkedin.com/in/jpradocueva/' #link to social media source
facebook: 'https://www.linkedin.com/in/jpradocueva/'
instagram: 'https://www.linkedin.com/in/jpradocueva/'
twitter: 'https://www.linkedin.com/in/jpradocueva/'
---
::

This is how it is constructed. 

```md
::ShAvatar
---
srcAvatar: 'https://avatars.githubusercontent.com/u/3258579?v=4'
altAvatar: JPC
name: |
    Joaquin Prado
role: |
    Co-Founder
company: |
    Standards-Hub
linkedin: 'https://www.linkedin.com/in/jpradocueva/' #link to social media source
facebook: 'https://www.linkedin.com/in/jpradocueva/'
instagram: 'https://www.linkedin.com/in/jpradocueva/'
twitter: 'https://www.linkedin.com/in/jpradocueva/'
---
::
```
### Avatar Props
These are the properties and attributes associated to the `ShAvatar` constructor:

#### ShAvatar Properties and Attributes Description
The `ShAvatar` constructor creates a display format showcasing an avatar that represents a project member, including links to their social media profiles. Below is a detailed description of the properties and attributes used in the `ShAvatar` constructor.

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
      <td rowspan="9">ui</td>
      <td>n/a</td>
      <td>The <code>ui</code> property in the <code>ShAvatar</code> constructor is a comprehensive configuration object that allows for the customization of various styling aspects of the avatar component. Each attribute within the <code>ui</code> property targets a specific part of the avatar display, providing detailed control over its appearance and layout. Below is a detailed description of each attribute within the <code>ui</code> property:</td>
    </tr>
    <tr>
      <td><code>wrapper</code></td>
      <td>Defines the overall styling for the container that holds all the elements of the avatar. The attribute <code>shadow-xl</code> is used to provide a shadow effect around the wrapper.</td>
    </tr>
    <tr>
      <td><code>base</code></td>
      <td>A placeholder for additional base styles that can be applied to the avatar component.</td>
    </tr>
    <tr>
      <td><code>avatar</code></td>
      <td>Styles applied to the avatar image itself, including properties like grayscale effect, rounded shape, and size.</td>
    </tr>
    <tr>
      <td><code>socials</code></td>
      <td>Contains the styles for the social media icons, including their alignment and spacing.</td>
    </tr>
    <tr>
      <td><code>icon</code></td>
      <td>Defines the styling for individual social media icons, including hover effects and transition animations.</td>
    </tr>
    <tr>
      <td><code>name</code></td>
      <td>Styles applied to the text displaying the name of the person, such as font size and color.</td>
    </tr>
    <tr>
      <td><code>role</code></td>
      <td>Styles applied to the text displaying the role or position of the person.</td>
    </tr>
    <tr>
      <td><code>company</code></td>
      <td>Styles applied to the text displaying the company name of the person.</td>
    </tr>
    <tr>
      <td><code>srcAvatar</code></td>
      <td>n/a</td>
      <td>The source URL of the avatar image to be displayed.</td>
    </tr>
    <tr>
      <td><code>altAvatar</code></td>
      <td>n/a</td>
      <td>Alternative text for the avatar image, used for accessibility and in case the image fails to load.</td>
    </tr>
    <tr>
      <td><code>name</code></td>
      <td>n/a</td>
      <td>The name of the person to be displayed.</td>
    </tr>
    <tr>
      <td><code>role</code></td>
      <td>n/a</td>
      <td>The role or position of the person within the company.</td>
    </tr>
    <tr>
      <td><code>company</code></td>
      <td>n/a</td>
      <td>The name of the company the person is associated with.</td>
    </tr>
    <tr>
      <td><code>linkedin</code></td>
      <td>n/a</td>
      <td>URL link to the person's LinkedIn profile.</td>
    </tr>
    <tr>
      <td><code>facebook</code></td>
      <td>n/a</td>
      <td>URL link to the person's Facebook profile.</td>
    </tr>
    <tr>
      <td><code>instagram</code></td>
      <td>n/a</td>
      <td>URL link to the person's Instagram profile.</td>
    </tr>
    <tr>
      <td><code>twitter</code></td>
      <td>n/a</td>
      <td>URL link to the person's Twitter profile.</td>
    </tr>
  </tbody>
</table>


#### Example Usage
##### Simple Settings
A basic example without custom `ui` attributes:

```md
::ShAvatar
---
srcAvatar: 'https://avatars.githubusercontent.com/u/3258579?v=4'
altAvatar: JPC
name: |
    Joaquin Prado
role: |
    Co-Founder
company: |
    Standards-Hub
linkedin: 'https://www.linkedin.com/in/jpradocueva/' #link to social media source
facebook: 'https://www.linkedin.com/in/jpradocueva/'
instagram: 'https://www.linkedin.com/in/jpradocueva/'
twitter: 'https://www.linkedin.com/in/jpradocueva/'
---
::
```
##### Advanced Settings
An example with customized `ui` attributes for enhanced display. This is how it is written:

```md
::ShAvatar
---
ui:
    wrapper: "shadow-xl" # provide a shadow around the wrapper
    name: "text-3xl" # controls text font, size and color
    role: "text-2xl"
    company: "text-xl"
    # twitter, facebook, linkedin & instagram are props for links, so no visual effects can be added here
srcAvatar: 'https://avatars.githubusercontent.com/u/3258579?v=4'
altAvatar: JPC
name: |
    Joaquin Prado
role: |
    Co-Founder
company: |
    Standards-Hub
linkedin: 'https://www.linkedin.com/in/jpradocueva/' #link to social media source
facebook: 'https://www.linkedin.com/in/jpradocueva/'
instagram: 'https://www.linkedin.com/in/jpradocueva/'
twitter: 'https://www.linkedin.com/in/jpradocueva/'
---
::
```
This is how it is rendered:

::ShAvatar
---
ui:
    wrapper: "shadow-xl" # provide a shadow around the wrapper
    name: "text-3xl" # controls text font, size and color
    role: "text-2xl"
    company: "text-xl"
    # twitter, facebook, linkedin & instagram are props for links, so no visual effects can be added here
srcAvatar: 'https://avatars.githubusercontent.com/u/3258579?v=4'
altAvatar: JPC
name: |
    Joaquin Prado
role: |
    Co-Founder
company: |
    Standards-Hub
linkedin: 'https://www.linkedin.com/in/jpradocueva/' #link to social media source
facebook: 'https://www.linkedin.com/in/jpradocueva/'
instagram: 'https://www.linkedin.com/in/jpradocueva/'
twitter: 'https://www.linkedin.com/in/jpradocueva/'
---
::

### Avatar Config
These style properties can be modified via `ui` and are stored in the `sh-avatar.ts` file:


```ts
export default {
    wrapper: "grid grid-cols-2 gap-4 p-4 mx-auto",
    avatar: "grayscale justify-self-end tracking-widest rounded-full size-48",
    base: "",
    name: "text-3xl font-bold grow text-pink-500 bottom-0",
    role: "text-lg font-semibold text-black dark:text-white -mt-4",
    company: "text-lg text-gray-500 tracking-widest -mt-5",
    socials: "flex text-5xl -mx-1 -mt-2",
    icon: "transition-transform transform hover:-translate-y-1 dark:text-white duration-400",
    // Default Tailwind CSS values
    default: {
    }
  }
```

#### Attribute Descriptions
The following attributes values are used to style the `ShAvatar` constructor by default. 
These attributes are also exposed via the `ShAvatar` constructor to add additional values.

**wrapper**

* **Value**: <code>"grid grid-cols-2 gap-4 p-4 mx-auto"</code>
* **Description**: This defines the overall styling for the container holding the avatar elements. The value <code>"grid grid-cols-2 gap-4 p-4 mx-auto"</code> indicates that the wrapper uses a CSS grid layout with two columns, has a gap of 4 units between grid items, padding of 4 units, and centers the container horizontally with mx-auto.

**avatar**

* **Value**: <code>"grayscale justify-self-end tracking-widest rounded-full size-48"</code>
* **Description**: This specifies styles for the avatar image. The value <code>"grayscale justify-self-end tracking-widest rounded-full size-48"</code> includes a grayscale effect, right-aligned positioning within the grid (justify-self-end), widest possible letter spacing (tracking-widest), a rounded shape (rounded-full), and a size of 48 units.

**base**
* **Value**: ""
* **Description**: This is an empty placeholder for additional base styles that can be customized if needed.

**name**
* **Value**: <code>"text-3xl font-bold grow text-pink-500 bottom-0"</code>
* **Description**: This defines the styling for the text displaying the person's name. The value <code>"text-3xl font-bold grow text-pink-500 bottom-0"</code> indicates a large font size (text-3xl), bold font weight (font-bold), flexible growth within the container (grow), pink color (text-pink-500), and positioning at the bottom of its container (bottom-0).

**role**
* **Value**: <code>"text-lg font-semibold text-black dark:text-white -mt-4"</code>
* **Description**: This specifies the styling for the text displaying the role or position of the person. The value <code>"text-lg font-semibold text-black dark:text-white -mt-4"</code> includes a medium-large font size (text-lg), semi-bold font-weight (font-semibold), black text color (text-black) that switches to white in dark mode (dark:text-white), and a top margin of -4 units (-mt-4).

**company**
* **Value**: <code>"text-lg text-gray-500 tracking-widest -mt-5"</code>
* **Description**: This defines the styling for the text displaying the company name. The value <code>"text-lg text-gray-500 tracking-widest -mt-5"</code> includes a medium-large font size (text-lg), gray color (text-gray-500), widest possible letter spacing (tracking-widest), and a top margin of -5 units (-mt-5).

**socials**
* **Value**: <code>"flex text-5xl -mx-1 -mt-2"</code>
* **Description**: This specifies the styling for the container holding social media icons. The value <code>"flex text-5xl -mx-1 -mt-2"</code> indicates a flexible box layout (flex), large icon size (text-5xl), horizontal margin of -1 unit (-mx-1), and top margin of -2 units (-mt-2).

**icon**
* **Value**: <code>"transition-transform transform hover:-translate-y-1 dark:text-white duration-400"</code>
* **Description**: This defines the styling for individual social media icons. The value <code>"transition-transform transform hover:-translate-y-1 dark:text-white duration-400"</code> includes a smooth transformation transition (transition-transform), translation transformation (transform), upward translation on hover (hover:-translate-y-1), white color in dark mode (dark:text-white), and a transition duration of 400ms (duration-400).

**default**
* **Value**: {}
* **Description**: This object is intended to hold any default Tailwind CSS values that might be used as fallback or initial styles.

These style properties ensure that the <code>ShAvatar</code> component is visually appealing and flexible, allowing for a wide range of customization to meet specific design requirements.

