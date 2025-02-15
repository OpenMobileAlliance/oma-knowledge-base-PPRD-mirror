---
title: Multi Column 
description: Create a multicolumn element to populate it with anything from your content
constructorName: ShMultiColumn
layout: doc
---

### Usage

::ShAlert
---
typeAlert: warning
---
Don`t nest ShMultiColumn inside another ShMultiColumn as it will result in bad rendering and responsive design malfunctioning.
::

::ShAlert
---
typeAlert: success
---
Instead nesting many ShMultiColumns inside itself, do a combination with ShTwoColumns & ShColumn inside of a ShMultiColumn
::

#### Presentation 
This is the display format for the <b>{{ $doc.constructorName }}</b> constructor, designed to showcase what are its capabilities.
The following example shows a basic example of the <b>{{ $doc.constructorName }}</b> component. It is used  to organise the content in three columns with two rows.
>Note: The `border` around the <b>{{ $doc.constructorName }}</b> is just to highlight the area covered by the component. It is not displayed in the written example below.

##### Example Basic
::ShMultiColumn
---
ui:
  wrapper: border text-center #this border is to clearly state the area covered by the multicolumn
cols: 2
---
First column

Last column

First column 2nd row

Last column 2nd row
::

This is how the above example is written in markdown:

```mdc
::ShMultiColumn
---
cols: 2
---
First column

Last column

First column 2nd row

Last column 2nd row
::

This is how the above example is written in markdown:

```

### Props
These are the properties and attributes associated to the <b>{{ $doc.constructorName }}</b> constructor

#### Properties and Attributes Description
The constructor <b>{{ $doc.constructorName }}</b> allows to organize content inside a multi-column layout. Below is a detailed description of the properties and attributes used in the <b>{{ $doc.constructorName }}</b> constructor:

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
      <td rowspan="4"><code>ui</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>The <code>ui</code> property in the <code>ShMultiColumn</code> constructor is a comprehensive configuration object that allows for the customization of various styling aspects of the multi-column component. Each attribute within the <code>ui</code> property targets a specific part of the multi-column display, providing detailed control over its appearance and layout. Below is a detailed description of each attribute within the <code>ui</code> property:</td>
    </tr>
    <tr>
      <td><code>wrapper</code></td>
      <td><code>config.wrapper</code></td>
      <td>Defines the overall styling for the container that holds all the elements of the multi-column. The default value is an empty string, indicating no styles are applied by default.</td>
    </tr>
    <tr>
      <td><code>size</code></td>
      <td><code>L</code></td>
      <td>This attribute specifies the default width of the left column. The value "L" indicates a large size.</td>
    </tr>
    <tr>
      <td><code>gap</code></td>
      <td class="truncate"><code>gap-4</code></td>
      <td>This attribute controls the gutters between columns. The value <code>"gap-4"</code> applies a gap utility class from Tailwind CSS to add spacing between the columns. Detailed information about the <code>`gap`</code> property can be found in the <a href="https://tailwindcss.com/docs/gap" target="_blank">Tailwind CSS documentation</a>.</td>
    </tr>
    <tr>
      <td><code>cols</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>The number of columns to display. If not provided, it defaults to the value specified in the configuration. If a value is provided, e.g., 4, the width of the space ocupied by the multi-column is divided by 4.</td>
    </tr>
    <tr>
      <td><code>gap</code></td>
      <td>n/a</td>
      <td><code>gap-4</code></td>
      <td>Optional. Controls the gutters between columns. The value <code>"gap-4"</code> applies a gap utility class from Tailwind CSS to add spacing between the columns.</td>
    </tr>
    <tr>
      <td><code>class</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>Optional. Additional CSS classes to apply to the multi-column container.</td>
    </tr>
    <tr>
      <td><code>description</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>Intented to be used as a help to content writter. Doesn`t render on website.</td>
    </tr>
  </tbody>
</table>

#### Advance Usage
In the following example the <b>{{ $doc.constructorName }}</b> component is styled using the attribute `ui.wrapper` and `class` property. The [ShColumn](/guidelines/components/sh-column) component is usually used with the <b>{{ $doc.constructorName }}</b> component to present each column content. It is possible to use different width for each column.

This <b>{{ $doc.constructorName }}</b> contains the following content:
* The width is divided in four columns. The two middle columns have been combined into a single column. This is the reason why in the image below appears only three columns.
* The <b>{{ $doc.constructorName }}</b> space or `wrapper` has been styled as `wrapper: "bg-stone-200 text-emerald-800 shadow-lg"`. This provides a specific background color, text color and shadow effect, creating a disting and appeling container:
  * `bg-stone-200`: Sets the background color to a light shade of stone (grayish-beige).
  * `text-emerald-800`: Sets the text color to a dark shade of emerald green.
  * `shadow-lg`: Applies a large shadow effect to the element, providing a pronounced shadow for a more elevated appearance.
* *Text Centered*: Using the `class` property, the text is displayed in the middle of the columns.
* *First Column*: The text is written in markdown with inline style.
* *Second Column*: The [ShColumn](/guidelines/components/sh-column) constructor or module is used to represent the content on the second column.
  * In this column the `wrapper` attribute is used to provide a different background color and text color.  `wrapper: "bg-emerald-800 text-stone-200"`
    * `bg-emerald-800`: Sets the background color to a dark (greenish) color.
    * `text-stone-200`: Sets the text color to a lighter shade of emerald beige.
  * *class*: It is set to `col-span-2` to cover the space of two columns.
  * *size*: It is set to two to take the space of two out of the four columns.
* *Third Column*: The text is written in markdown with inline style.


This is how <b>{{ $doc.constructorName }}</b> example is displayed:

::ShMultiColumn
---
cols: 4
ui:
  wrapper: "bg-stone-200 text-emerald-800 shadow-lg"
class: text-center
---
[First column first Row]{.hover:text-primary}

:::ShColumn
---
ui:
  wrapper: "bg-emerald-800 text-stone-200"
class: col-span-2 # This merge the middle columns on each row added
size: 2
---
Second column first row with double width
:::

[Last column first Row]{.hover:text-primary}

[First column second Row]{.hover:text-primary}

:::ShColumn
---
ui:
  wrapper: "bg-emerald-800 text-stone-200"
class: col-span-2 # This merge the middle columns on each row added
size: 2
---
Second column second row with double width
:::

[Last column second Row]{.hover:text-primary}
::

This is how the above `MultiColumn` example is written in markdown:

```mdc
::ShMultiColumn
---
cols: 4
ui:
  wrapper: "bg-stone-200 text-emerald-800 shadow-lg"
class: text-center
---
[First column first Row]{.hover:text-primary}

:::ShColumn
---
ui:
  wrapper: "bg-emerald-800 text-stone-200"
class: col-span-2 # This merge the middle columns on each row added
size: 2
---
Second column first row with double width
:::

[Last column first Row]{.hover:text-primary}

[First column second Row]{.hover:text-primary}

:::ShColumn
---
ui:
  wrapper: "bg-emerald-800 text-stone-200"
class: col-span-2 # This merge the middle columns on each row added
size: 2
---
Second column second row with double width
:::

[Last column second Row]{.hover:text-primary}
::

```

#### Advance Multicolumn

The <b>{{ $doc.constructorName }}</b> can have multiple *rows* and each row can organise its 
columns with different column sizes. Columns can spread in multiple rows like in the following
example.

This is how <b>{{ $doc.constructorName }}</b> component can be used to construct multiple rows with different column width:

::ShMultiColumn
---
ui:
cols: 4 # Indicates that the width of the `MultiColumn` is divided in 4 spaces or columns
---

  :::ShColumn 
  --- 
  size: 2 #First row will expand the column content to cover 2 out of the 4 column spaces.
  ui:
    wrapper: "bg-stone-200 text-center dark:text-black" # Provides background color and text is centered
  ---
  This column has a span of two. 
  :::

  :::ShColumn 
  ---
  ui: # First row, second column
    wrapper: "bg-stone-300 text-center dark:text-black" # The background color is darked than previous column and text is set in the center
  ---
  This colum has default span of 1.
  :::

  :::ShColumn 
  ---
  ui: # First row, third column
    wrapper: "bg-stone-300 text-center dark:text-black"
  ---
  This colum has default span of 1.
  :::

  :::ShColumn 
  ---
  ui: # Second row, first column. It doesn't use `size` therefore the  the width is 1 out of the 4 column space.
    wrapper: "bg-stone-200 text-center dark:text-black"
  ---
  This colum has default span.
  :::

  :::ShColumn 
  ---
  size: 3 # Second row, as `size` is used this column covers 3 out of the 4 column space.
  ui:
    wrapper: "bg-stone-300 text-center dark:text-black"
  ---
  This colum now is 3 column wide.
  :::

  :::ShColumn 
  ---
  ui: # Third and fourth row as it is used the `row-span-2`
    wrapper: "bg-stone-200 text-center row-span-2 flex flex-col justify-center items-center dark:text-black"
  ---
  This colum has default span and spread on 2 rows.
  :::

  :::ShColumn 
  ---
  size: 2 # Third row, this column covers the space of 2 out of 4 `MultiColum` width.
  ui:
    wrapper: "bg-stone-300 text-center dark:text-black"
  ---
  This colum now is 2 column wide.
  :::

  :::ShColumn 
  ---
  ui: # Third row, it covers the space of 1 out of 4 `Multicolumn` width.
    wrapper: "border text-center" # It doesn't contain any background color
  ---

  This colum has span of 1 as well.
  :::

  :::ShColumn 
  ---
  ui: # This is the fourth row. The space is 1 column out of 4 column width provided by the `MultiColumn` module or constractor. 
    wrapper: "border text-center"
  ---

  This colum has span of 1 as well.
  :::

  :::ShColumn 
  ---
  size: 2 # This is the fourth row. The space is 2 out of the 4 possible columns.
  ui:
    wrapper: "bg-stone-300 text-center dark:text-black"
  ---
  This colum is now 2 column wide.
  :::

::

The above example is generated with the following code:

```mdc
::ShMultiColumn
---
ui:
cols: 4 # Indicates that the width of the `MultiColumn` is divided in 4 spaces or columns
---

  :::ShColumn 
  --- 
  size: 2 #First row will expand the column content to cover 2 out of the 4 column spaces.
  ui:
    wrapper: "bg-stone-200 text-center dark:text-black" # Provides background color and text is centered
  ---
  This column has a span of two. 
  :::

  :::ShColumn 
  ---
  ui: # First row, second column
    wrapper: "bg-stone-300 text-center dark:text-black" # The background color is darked than previous column and text is set in the center
  ---
  This colum has default span of 1.
  :::

  :::ShColumn 
  ---
  ui: # First row, third column
    wrapper: "bg-stone-300 text-center dark:text-black"
  ---
  This colum has default span of 1.
  :::

  :::ShColumn 
  ---
  ui: # Second row, first column. It doesn't use `size` therefore the  the width is 1 out of the 4 column space.
    wrapper: "bg-stone-200 text-center dark:text-black"
  ---
  This colum has default span.
  :::

  :::ShColumn 
  ---
  size: 3 # Second row, as `size` is used this column covers 3 out of the 4 column space.
  ui:
    wrapper: "bg-stone-300 text-center dark:text-black"
  ---
  This colum now is 3 column wide.
  :::

  :::ShColumn 
  ---
  ui: # Third and fourth row as it is used the `row-span-2`
    wrapper: "bg-stone-200 text-center row-span-2 flex flex-col justify-center items-center dark:text-black"
  ---
  This colum has default span and spread on 2 rows.
  :::

  :::ShColumn 
  ---
  size: 2 # Third row, this column covers the space of 2 out of 4 `MultiColum` width.
  ui:
    wrapper: "bg-stone-300 text-center dark:text-black"
  ---
  This colum now is 2 column wide.
  :::

  :::ShColumn 
  ---
  ui: # Third row, it covers the space of 1 out of 4 `Multicolumn` width.
    wrapper: "border text-center" # It doesn't contain any background color
  ---

  This colum has span of 1 as well.
  :::

  :::ShColumn 
  ---
  ui: # This is the fourth row. The space is 1 column out of 4 column width provided by the `MultiColumn` module or constractor. 
    wrapper: "border text-center"
  ---

  This colum has span of 1 as well.
  :::

  :::ShColumn 
  ---
  size: 2 # This is the fourth row. The space is 2 out of the 4 possible columns.
  ui:
    wrapper: "bg-stone-300 text-center dark:text-black"
  ---
  This colum is now 2 column wide.
  :::

::
```

## Config
These style properties can be modified via `ui` and are stored in the <code><b>{{ $doc.constructorName }}</b><b>.ts</b></code> file:

```ts
export default {
  wrapper: "rounded-2xl p-5",
  default: {
    size: 3,
    gap: "gap-4"
  }
}
```

#### Class Descriptions
These represent the class values utilized in the <b>{{ $doc.constructorName }}</b> constructor. These values are customizable and can be strengthened or overridden through the `ui` properties' attributes.

_**wrapper**_:

* **Value**: "rounded-2xl p-5"
* **Description**: Adding radius to corners of 2xl value and adding padding all over constructor.

_**default**_:

* **Value**: { size: 3, gap: "gap-4" }
* **Description**: This object holds the default Tailwind CSS values that might be used as fallback or initial styles. In this case, it sets a default size value of 3 and a default gap value of "gap-4".

_**size**_:

* **Value**: 3
* **Description**: This defines the default number of columns. The value 3 indicates that the component will have three columns by default.

_**gap**_:

* **Value**: "gap-4"
* **Description**: This defines the default gutter size between columns. The value "gap-4" applies a gap utility class from Tailwind CSS to add spacing between the columns. Detailed information about the gap property can be found in the Tailwind CSS documentation. This value can only be modified in the sh-multi-column.ts file; it cannot be modified via markdown.

These style properties ensure that the <b>{{ $doc.constructorName }}</b> component is visually appealing and flexible, allowing for a wide range of customization to meet specific design requirements. 
