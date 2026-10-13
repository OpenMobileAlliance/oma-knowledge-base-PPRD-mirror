---
title: Alert
description: A component for expressing information of some importance
constructorName: ShAlert
layout: doc
---

### Usage

#### Presentation
This is the display format for the {{ $doc.constructorName }} constructor, designed to showcase an alerts with different types for different impact on subject.

##### Example Basic

This is `info` type of alert

::ShAlert
Testing alert component related to info. This is the default alert type.
::

This is how it is constructed

```mdc
::ShAlert
Testing alert component related to info. This is the default alert type.
::
```
___

This is `success` type of alert

::ShAlert
---
typeAlert: success
---
Testing alert component related to success
::

This is how it is constructed

```mdc
::ShAlert
---
typeAlert: success
---
Testing alert component related to success
::
```
___

This is `warning` type of alert

::ShAlert
---
typeAlert: warning
---
Testing alert component related to warning
::

This is how it is constructed

```mdc
::ShAlert
---
typeAlert: warning
---
Testing alert component related to warning
::
```
___

This is `danger` type of alert

::ShAlert
---
typeAlert: danger
---
Testing alert component related to danger
::

This is how it is constructed
```mdc
::ShAlert
---
typeAlert: danger
---
Testing alert component related to danger
::
```
___

### Props
These are the properties and attributes associated to the <b>{{ $doc.constructorName }}</b> constructor:
#### Properties and Attributes Description
The <b>{{ $doc.constructorName }}</b> constructor creates a notification field with different background color to showcase the importance of notification. Below is a detailed description of the properties and attributes used in the <b>{{ $doc.constructorName }}</b> constructor.
<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Class</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="4"><code>ui</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>The <code>ui</code> property in the <code>ShAlert</code> constructor is a comprehensive configuration object that allows for the customization of various styling aspects of the alert component. Each attribute within the <code>ui</code> property targets a specific part of the alert display, providing detailed control over its appearance and layout. Below is a detailed description of each attribute within the <code>ui</code> property:</td>
    </tr>
      <tr>
        <td><code>wrapper</code></td>
        <td><code>config.wrapper</code></td>
        <td>Defines the overall styling for the container that holds all the elements of the alert.</td>
      </tr>
      <tr>
        <td><code>base</code></td>
        <td><code>config.base</code></td>
        <td>A placeholder for additional base styles that can be applied to the alert component. In this specific case, it will target the section around icon.</td>
      </tr>
    <tr>
      <td><code>icon</code></td>
      <td><code>config.icon[typeAlert]</code></br><code>config.icon.color[typeAlert]</code></td>
      <td>Icon computes which type of alert is chosen, and with that information it shows accordingly the icon of alert type. This could also be used to change the icon, make it different color, etc.</td>
    </tr>
    <tr>
      <td><code>typeAlert</code></td>
      <td>n/a</td>
      <td><code>info</code></td>
      <td>
        This represents the type of the alert.
        </br><b>Options</b>: <code>info</code>, <code>success</code>, <code>warning</code> & <code>danger</code>
      </td>
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

::ShAlert
---
ui:
    wrapper: "shadow-xl w-fit mx-auto text-2xl" # adds a shadow to the wrapper as well as making the wrapper width fit the lenght of content inside, center the alert wrapper and enlarge text
---
Testing alert component with shorten width
::

```mdc
::ShAlert
---
ui:
    wrapper: "shadow-xl w-fit mx-auto text-2xl" # adds a shadow to the wrapper as well as making the wrapper width fit the lenght of content inside, center the alert wrapper and enlarge text
---
Testing alert component with shorten width
::
```

### Config
These style properties can be modified via `ui` and are stored in the <code><b>{{ $doc.constructorName }}</b><b>.ts</b></code> file:

```ts
export default {
  wrapper: "flex items-center space-x-1 mt-4 mb-4 shadow-md rounded-xl text-xl",
  base: "flex mx-2 p-1",
  alert: {
    success: 'bg-[#F0FFF4] dark:bg-[#22543D] text-[#2F855A] dark:text-[#9AE6B4] relative border-l-4 border-[#68D391] dark:border-[#2F855A]',
    warning: 'bg-[#FFFAF0] dark:bg-[#744210] text-[#C05621] dark:text-[#FBD38D] relative border-l-4 border-[#F6AD55] dark:border-[#B7791F]',
    danger: 'bg-[#FFF5F5] dark:bg-[#742A2A] text-[#C53030] dark:text-[#FEB2B2] relative border-l-4 border-[#FC8181] dark:border-[#C53030]',
    info: 'bg-[#EBF8FF] dark:bg-[#2A4365] text-[#2B6CB0] dark:text-[#90CDF4] relative border-l-4 border-[#63B3ED] dark:border-[#2B6CB0]',
  },
  icon: {
    success: 'i-heroicons-check-circle',
    warning: 'i-heroicons-exclamation-circle',
    danger: 'i-heroicons-x-circle',
    info: 'i-heroicons-information-circle',
    color: {
      success: 'text-[#68D391] dark:text-[#68D391]',
      warning: 'text-[#F6AD55] dark:text-[#F6AD55]',
      danger: 'text-[#FC8181] dark:text-[#FC8181]',
      info: 'text-[#63B3ED] dark:text-[#63B3ED]',
    }
  },
  // Default Tailwind CSS values
  default: {
  }
}
```

#### Class Descriptions
These represent the class values utilized in the exported object. These values are customizable and can be strengthened or overridden through the `ui` properties' attributes.

_**wrapper**_
*  **Value**: `"flex items-center space-x-1 mt-4 mb-4"`
*  **Description**: This defines the overall styling for the container. The value `"flex items-center space-x-1 mt-4 mb-4"` indicates that the wrapper uses a flexbox layout (`flex`), centers its items along the cross axis (`items-center`), has a horizontal spacing of 1 unit between items (`space-x-1`), and vertical margins of 4 units on both top (`mt-4`) and bottom (`mb-4`).

_**base**_
*  **Value**: `"flex mx-2 p-1"`
*  **Description**: This specifies the base styles for the component. The value `"flex mx-2 p-1"` includes a flexbox layout (`flex`), horizontal margin of 2 units (`mx-2`), and padding of 1 unit (`p-1`).

_**alert**_
*  **Description**: This object contains styles for different types of alert messages, tailored for both light and dark modes.<br>

    _**success**_
      *    **Value**: `'bg-[#F0FFF4] dark:bg-[#22543D] text-[#2F855A] dark:text-[#9AE6B4] px-2 py-3 relative border-l-4 border-[#68D391] dark:border-[#2F855A]'`
      *    **Description**: This style is for a success alert. It includes a light background (`bg-[#F0FFF4]`), a dark mode background (`dark:bg-[#22543D]`), light text color (`text-[#2F855A]`), dark mode text color (`dark:text-[#9AE6B4]`), padding (`px-2 py-3`), relative positioning (`relative`), a left border of 4 units width (`border-l-4`), and different border colors for light and dark modes (`border-[#68D391]` and `dark:border-[#2F855A]`).

    _**warning**_
      *    **Value**: `'bg-[#FFFAF0] dark:bg-[#744210] text-[#C05621] dark:text-[#FBD38D] px-2 py-3 relative border-l-4 border-[#F6AD55] dark:border-[#B7791F]'`
      *    **Description**: This style is for a warning alert. It includes a light background (`bg-[#FFFAF0]`), a dark mode background (`dark:bg-[#744210]`), light text color (`text-[#C05621]`), dark mode text color (`dark:text-[#FBD38D]`), padding (`px-2 py-3`), relative positioning (`relative`), a left border of 4 units width (`border-l-4`), and different border colors for light and dark modes (`border-[#F6AD55]` and `dark:border-[#B7791F]`).

    _**danger**_
      *    **Value**: `'bg-[#FFF5F5] dark:bg-[#742A2A] text-[#C53030] dark:text-[#FEB2B2] px-2 py-3 relative border-l-4 border-[#FC8181] dark:border-[#C53030]'`
      *    **Description**: This style is for a danger alert. It includes a light background (`bg-[#FFF5F5]`), a dark mode background (`dark:bg-[#742A2A]`), light text color (`text-[#C53030]`), dark mode text color (`dark:text-[#FEB2B2]`), padding (`px-2 py-3`), relative positioning (`relative`), a left border of 4 units width (`border-l-4`), and different border colors for light and dark modes (`border-[#FC8181]` and `dark:border-[#C53030]`).

    _**info**_
      *    **Value**: `'bg-[#EBF8FF] dark:bg-[#2A4365] text-[#2B6CB0] dark:text-[#90CDF4] px-2 py-3 relative border-l-4 border-[#63B3ED] dark:border-[#2B6CB0]'`
      *    **Description**: This style is for an info alert. It includes a light background (`bg-[#EBF8FF]`), a dark mode background (`dark:bg-[#2A4365]`), light text color (`text-[#2B6CB0]`), dark mode text color (`dark:text-[#90CDF4]`), padding (`px-2 py-3`), relative positioning (`relative`), a left border of 4 units width (`border-l-4`), and different border colors for light and dark modes (`border-[#63B3ED]` and `dark:border-[#2B6CB0]`).

_**icon**_
*  **Description**: This object contains styles for different icons, tailored for both light and dark modes.<br>

    _**success**_
      *    **Value**: `'text-[#68D391] dark:text-[#68D391] i-heroicons-check-circle'`
      *    **Description**: This style is for a success icon. It includes a consistent text color for both light and dark modes (`text-[#68D391]`), and uses the "i-heroicons-check-circle" icon.

    _**warning**_
      *    **Value**: `'text-[#F6AD55] dark:text-[#F6AD55] i-heroicons-exclamation-circle'`
      *    **Description**: This style is for a warning icon. It includes a consistent text color for both light and dark modes (`text-[#F6AD55]`), and uses the "i-heroicons-exclamation-circle" icon.

    _**danger**_
      *    **Value**: `'text-[#FC8181] dark:text-[#FC8181] i-heroicons-x-circle'`
      *    **Description**: This style is for a danger icon. It includes a consistent text color for both light and dark modes (`text-[#FC8181]`), and uses the "i-heroicons-x-circle" icon.

    _**info**_
      *    **Value**: `'text-[#63B3ED] dark:text-[#63B3ED] i-heroicons-information-circle'`
      *    **Description**: This style is for an info icon. It includes a consistent text color for both light and dark modes (`text-[#63B3ED]`), and uses the "i-heroicons-information-circle" icon.

_**default**_
*  **Value**: `{}`
*  **Description**: This object is intended to hold any default Tailwind CSS values that might be used as fallback or initial styles.

These style properties ensure that the component is visually appealing and flexible, allowing for a wide range of customization to meet specific design requirements.
