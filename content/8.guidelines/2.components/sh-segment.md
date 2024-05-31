---
titile: ShSegment component
discription: 
---

The `ShSegment` component represent the most flexible component as it's 
encapsulates one block of markdown content that can be styled.

## Usage
This is how the `ShSegment` is displayed:

::ShSegment
---
ui:
  wrapper: bg-cyan-300 rounded-xl border shadow-md p-4 hover:bg-sky-500 # Comment
---

This is a specific block of *Markdown* content that can be styled as a whole.

::

This is how the above `ShSegment` is written in markdown:

```mdc
::ShSegment
---
ui:
  wrapper: bg-cyan-300 rounded-xl border shadow-md p-4 hover:bg-sky-500 # Comment
---

This is a specific block of *Markdown* content that can be styled as a whole.

::
```

The content can be markdown text of any length. All elements are supported as in
the *normal* text.

### Examples of a Complex ShSegment
This is how a complex example of `ShSegment` is displayed:

::ShSegment
---
ui:
  wrapper: border p-4 shadow-2xl
---

Content inside of the `ShSegment` can be of any length or structure.

It can have any general *Markdown* formatting structure: lists, order lists, or 
tables.

* item
* item
* and one more item

1. First element 
1. Second element
1. third element

| first | second | third |
| ----- | :------: | -----: |
| left   | center    | right |
| one   | two    | three |

It can also include other components. For example another `ShSegment`.

:::ShSegment
---
ui:
  wrapper: bg-gradient-to-r from-blue-500 text-3xl p-4 rounded shadow-2xl
---
This is a nested segment with its own specific styling and an image.


![image](https://assets-global.website-files.com/5e19ea5aa7d3a217492e372b/624de949df5a11680ab170b9_Axios%20logo%20-%20RGB%20-%20minimum%20space.png)

That is making this used to show this component flexibility.
:::

::

This is how the above `ShSegment` is written:

```mdc
::ShSegment
---
ui:
  wrapper: border p-4 shadow-2xl
---

Content inside of the `ShSegment` can be of any length or structure.

It can have any general *Markdown* formatting structure: lists, order lists, or 
tables.

* item
* item
* and one more item

1. First element 
1. Second element
1. third element

| first | second | third |
| ----- | :------: | -----: |
| left   | center    | right |
| one   | two    | three |

It can also include other components. For example another `ShSegment`.

:::ShSegment
---
ui:
  wrapper: bg-gradient-to-r from-blue-500 text-3xl p-4 rounded shadow-2xl
---
This is a nested segment with its own specific styling and an image.


![image](https://assets-global.website-files.com/5e19ea5aa7d3a217492e372b/624de949df5a11680ab170b9_Axios%20logo%20-%20RGB%20-%20minimum%20space.png)

That is making this used to show this component flexibility.
:::

::
```

## Props
The `ShSegment` consturctor supports only one property: `ui`.

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
      <td>The <code>ui</code> property in the <code>ShSegment</code> constructor is a comprehensive configuration object that allows for the customization of various styling aspects of the segment component. The <code>ui</code> property contains only one attribute that targets the framework on how `ShSegment` is displayed. Below is the description of of the single attribute within the <code>ui</code> property:</td>
    </tr>
    <tr>
      <td><code>wrapper</code></td>
      <td>Defines the overall styling for the container that holds all the elements inside of the `ShSegment`. The attribute <code>shadow-xl</code> is used to provide a shadow effect around the wrapper.</td>
    </tr>
  </tbody>
</table>    

## ShSegment Config

```json
{
  wrapper: ""
}
```

### Class Descriptions
These represent the class values utilized in the `ShSegment` constructor. These values are customizable and can be strengthened or overridden through the `ui` properties' attributes.

_**wrapper**_
*  **Value**: <code>bg-gradient-to-r from-blue-500 text-3xl p-4 rounded shadow-2xl</code> (these are the values used by the embedded `ShSegment` of the above example. 
*  **Description**: This defines the overall styling for the container holding the segment elements:

    * `bg-gradient-to-r`: Applies a background gradient that transitions to the right.
    * `from-blue-500`: Sets the starting color of the gradient to a medium shade of blue.
    * `text-3xl`: Sets the text size to 3 times larger than the base size.
    * `p-4`: Applies padding of 1rem (16px) on all sides.
rounded: Adds rounded corners to the element.
    * `shadow-2xl`: Applies a large shadow effect to the element. 