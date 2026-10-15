---
title: TwoColumns
description: Create a two columns in an instant and populate them with your own content, whatever it may be
constructorName: ShTwoColumns
layout: doc
---

## Usage


The `ShTwoColumns` constructor enables you to provide any content presented in two
columns and one row.
> Note: The `border` in `wrapper` is only for visual understanding of the `ShTwoColumns` boundry. Component itself does not have that predefined

### Basic (text)

::doc-example
---
code: |
  ::ShTwoColumns
  ---
  ui: 
    wrapper: border
  ---
  This text is displayed in the left column first row.

  Text is displayed in the right column first row.

  This text is displayed in the left column second row.

  Text text is displayed in the right column second row.
  ::
---
::

### Basic (text/image)
It is possible to add text or an image to one or to both columns. For example, text and image:

::doc-example
---
code: |
  ::ShTwoColumns
  This text should be in the left column. 

  ![image](https://free-images.com/sm/3b8f/dalmatiner_schw_braun.jpg){.not-prose .w-full .rounded-2xl}
  ::
---
::
### Basic (image/text)
The order of the elements determine the left and right column content.

::doc-example
---
code: |
  ::ShTwoColumns
  ![image](https://free-images.com/sm/3b8f/dalmatiner_schw_braun.jpg){.not-prose .w-full .rounded-2xl}

  This text should be in the right column. 
  ::
---
::

### Advanced settings
It is possible to nest other components inside of the `ShTwoColumns` component as e.g., an `ShSegment` and nest a `ShTwoColumns` component to provide special effects. For instance the following example contains:
* Two columns
  * **Column 1**: Contains an image with inline style.
  * **Cloumn 2**: It is a `ShSegment` with background color, shadow and other special styles which in turn contains:
    * Markdown text,
    * Bullet list,
    * `ShTwoColumns` : A nested `ShTwoColumns` module at the bottom of the second column which contains:
      * *Sub-Column 1*: A markdown text styled inline,
      * *Sub-Column 2*: An image that has been styled by rounding the corners.

::doc-example
---
code: |
  ::ShTwoColumns
  ---
  ui: 
    wrapper: shadow-2xl
  ---
  ![laptop](https://free-images.com/tn/f4f3/coffee_apple_iphone_laptop.jpg){.not-prose .w-full .rounded-2xl .shadow-2xl}

  :::ShSegment
  ---
  ui:
    wrapper: bg-cyan-300 rounded-2xl border shadow-md p-1 # Comment
  ---
  For more elaborated content in one of the columns it's better to utilize the `ShSegment` 
  component.

  This component enables more *Markdown* content to be added to the column. This content
  can contain all available contractors as other parts of the *Markdown* document:

  * lists, images, tables, links
  * other components

  It can contain nested `ShTwoColumns` component as well, if that is needed for achieving
  desired effect.
  ::doc-example
  ---
  code: |
    ::ShTwoColumns
    ![laptop](https://free-images.com/tn/f4f3/coffee_apple_iphone_laptop.jpg){.not-prose .w-full .rounded-2xl .shadow-2xl}

    :::ShSegment
    ---
    ui:
      wrapper: bg-cyan-300 rounded-2xl border shadow-md p-1 # Comment
    ---
    For more elaborated content in one of the columns it's better to utilize the `ShSegment` 
    component.

    This component enables more *Markdown* content to be added to the column. This content
    can contain all available contractors as other parts of the *Markdown* document:

    * lists, images, tables, links
    * other components

    It can contain nested `ShTwoColumns` component as well, if that is needed for achieving
    desired effect.
    ::ShTwoColumns
    ---
    size: 2XL
    ---
    [Let your creativity blosom]{.text-4xl .bg-gradient-to-r .from-blue-600 .to-orange-400 .bg-clip-text .text-transparent .inline-block}

    ![image](https://free-images.com/sm/3b8f/dalmatiner_schw_braun.jpg){.not-prose .w-1/2 .rounded-full}
    ::

    :::

    ::
  ---
  ::
---
::

You can notice that in the right column, encoupsulated with `ShSegment`
component there is a `ShTwoColumns` component with different withs of the
columns.

The relationship between sizes of two columns can be controled using the property `size`.
The values of this property are define in [T-shirt]{} sizes starting from '2XS' all the
way up to '4XL', see below. Default value of the `size` property is 'L'.

### Two-Columns and Size
The image displayed below is composed of the following components:

* An `ShSegment` component that nests several `ShTwoColumns` components, with one for each row. The `ShTwoColumns` component uses the `size` attribute to define the width of the left column.
* Inside each `ShTwoColumns` component, two `ShSegment` components are nested. These `ShSegment` components use the `wrapper` attribute to provide background color and text to define the size (left column) and proportion (right column). 

::doc-example
---
code: |
  ::ShSegment
  ---
  ui:
    wrapper: grid grid-rows-1 gap-4
  ---
    ::ShTwoColumns
    ---
    size: 2XS
    ---
      :::ShSegment
      ---
      ui:
        wrapper: bg-slate-200 text-center dark:text-black
      ---
      2XS
      :::

      :::ShSegment
      ---
      ui:
        wrapper: bg-slate-300 text-center dark:text-black
      ---
      9/10
      :::
    ::

    ::ShTwoColumns
    ---
    size: XS
    ---
      :::ShSegment
      ---
      ui:
        wrapper: bg-slate-200 text-center dark:text-black
      ---
      XS
      :::

      :::ShSegment
      ---
      ui:
        wrapper: bg-slate-300 text-center dark:text-black
      ---
      4/5
      :::
    ::

    ::ShTwoColumns
    ---
    size: S
    ---
      :::ShSegment
      ---
      ui:
        wrapper: bg-slate-200 text-center dark:text-black
      ---
      S
      :::

      :::ShSegment
      ---
      ui:
        wrapper: bg-slate-300 text-center dark:text-black
      ---
      3/4
      :::
    ::

    ::ShTwoColumns
    ---
    size: M
    ---
      :::ShSegment
      ---
      ui:
        wrapper: bg-slate-200 text-center dark:text-black
      ---
      M
      :::

      :::ShSegment
      ---
      ui:
        wrapper: bg-slate-300 text-center dark:text-black
      ---
      2/3
      :::
    ::

    ::ShTwoColumns
    ---
    size: L
    ---
      :::ShSegment
      ---
      ui:
        wrapper: bg-slate-200 text-center dark:text-black
      ---
      L
      :::

      :::ShSegment
      ---
      ui:
        wrapper: bg-slate-300 text-center dark:text-black
      ---
      1/2
      :::
    ::

    ::ShTwoColumns
    ---
    size: XL
    ---
      :::ShSegment
      ---
      ui:
        wrapper: bg-slate-200 text-center dark:text-black
      ---
      XL
      :::

      :::ShSegment
      ---
      ui:
        wrapper: bg-slate-300 text-center dark:text-black
      ---
      1/3
      :::
    ::

    ::ShTwoColumns
    ---
    size: 2XL
    ---
      :::ShSegment
      ---
      ui:
        wrapper: bg-slate-200 text-center dark:text-black
      ---
      2XL
      :::

      :::ShSegment
      ---
      ui:
        wrapper: bg-slate-300 text-center dark:text-black
      ---
      1/4
      :::
    ::

    ::ShTwoColumns
    ---
    size: 3XL
    ---
      :::ShSegment
      ---
      ui:
        wrapper: bg-slate-200 text-center dark:text-black
      ---
      3XL
      :::

      :::ShSegment
      ---
      ui:
        wrapper: bg-slate-300 text-center dark:text-black
      ---
      1/5
      :::
    ::

    ::ShTwoColumns
    ---
    size: 4XL
    ---
      :::ShSegment
      ---
      ui:
        wrapper: bg-slate-200 text-center dark:text-black
      ---
      4XL
      :::

      :::ShSegment
      ---
      ui:
        wrapper: bg-slate-300 text-center dark:text-black
      ---
      1/10
      :::
    ::
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
