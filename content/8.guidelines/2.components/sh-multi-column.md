---
title: Multi Column 
description: Create a multicolumn element to populate it with anything from your content
constructorName: ShMultiColumn
layout: doc
---

## Usage

The constructor `ShMultiColumn` allows to organize content inside a multi-column layout.

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

The following example shows a basic example of the `ShMultiColumn` component. It is used  to organise the content in three columns with two rows.
>Note: The `border` around the `ShMultiColumn` is just to highlight the area covered by the component. It is not displayed in the written example below.

### Basic

::doc-example
---
code: |
  ::ShMultiColumn
  ---
  cols: 2
  ---
  First column

  Last column

  First column 2nd row

  Last column 2nd row
  ::
---
::

### Advanced settings
In the following example the `ShMultiColumn` component is styled using the attribute `ui.wrapper` and `class` property. The [ShColumn](/guidelines/components/sh-column) component is usually used with the `ShMultiColumn` component to present each column content. It is possible to use different width for each column.

This `ShMultiColumn` contains the following content:
* The width is divided in four columns. The two middle columns have been combined into a single column. This is the reason why in the image below appears only three columns.
* The `ShMultiColumn` space or `wrapper` has been styled as `wrapper: "bg-stone-200 text-emerald-800 shadow-lg"`. This provides a specific background color, text color and shadow effect, creating a disting and appeling container:
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

This is how `ShMultiColumn` example is displayed:

::doc-example
---
code: |
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
---
::

### Advance Multicolumn

The `ShMultiColumn` can have multiple *rows* and each row can organise its 
columns with different column sizes. Columns can spread in multiple rows like in the following
example.

This is how `ShMultiColumn` component can be used to construct multiple rows with different column width:

::doc-example
---
code: |
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
---
::

## Props

::doc-api{section="props"}
::

## Slots

::doc-api{section="slots"}
::

## UI config

Default classes of every styled element. Override any key through the `ui` prop.

::doc-api{section="ui"}
::
