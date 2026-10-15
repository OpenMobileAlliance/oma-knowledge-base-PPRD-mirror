---
title: Column
description: Component representing the column with header and footer
constructorName: ShColumn
layout: doc
---

## Usage


The `ShColumn` component is used to organise content of one column in
multi-column layout. The column has `header`, that can render `title` and
`subtitle` in the header accompanied with an image.
Beside the main content the column also can have the `footer` content as well.

### Basic Usage (no style)

This is how a basic `ShColumn` without style is displayed:

::doc-example
---
code: |
  ::ShColumn
  ---
  title: Column Title #title
  subtitle: "*Column Subtitle *" #use quotations
  footerText: "*Footer Text*" # use quotations
  ---
  This is `ShColumn` component design to show content of the first column.

  ![columns](https://free-images.com/tn/7dbb/columns_arches_patio_de.jpg){.w-full .rounded}
  ::
---
::

### Basic Usage (with style)

This is how a basic `ShColumn` with style is displayed:

::doc-example
---
code: |
  ::ShColumn
  ---
  ui:
    wrapper: border-8 text-center # added border around the column and center the text
  title: Column Title #title
  subtitle: "*Column Subtitle *" #use quotations
  footerText: "*Footer Text*" # use quotations
  ---
  This is `ShColumn` component design to show content of the first column.

  ![columns](https://free-images.com/tn/7dbb/columns_arches_patio_de.jpg){.w-full .rounded}
  ::
---
::

### Advanced settings
This is an advance example of a `ShColumn` constructor which contains:
* Column Title and Subtitle is centered,
* Markdown text,
* Bullet points,
* An image, and
* The footer contais two inner columns. 

::doc-example
---
code: |
  ::ShColumn
  ---
  ui:
    wrapper: "border-8" #border to highlight the column contourn 
    header: #header styling
      title: "tracking-wider text-primary text-center" #title styling
      subtitle: "text-center" #subtitle styling
    footer: "text-center" #footer styling
  title: Column Title # title
  subtitle: "*Column Subtitle*" #subtitle with quotations to incorporate markdown constructor
  footerText: | #footer text contains two columns
    :::ShTwoColumns
    ---
    ui:
      wrapper: border-8 bg-yellow-100 # show the border for the two columns with background color
    ---
    The footer can have  
    a complex content

    With great power comes  
    a great responsibility
    :::
  ---
  The `ShColumn` component can contain any typical *Markdown* content, including:
  * images 
  * lists
  * links
  * ... or similar
  * any supported component

  [ ![coffee](https://free-images.com/sm/86a4/aroma_aromatic_beverage_bio.jpg){.w-1/2 .rounded-xl .not-prose .mb-2 .shadow-2xl} ]{.w-full .flex .justify-center}
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

::ShFaq
---
qas:
  - q: |
       Is `header` an attribute and can we configure its style?
    a: |
      `Header` is an object that contains `wrapper`, `title`, and `subtitle`. It is there so we can differentiate e.g. `wrapper` for the whole constructor and `wrapper` only for the `header` section. So basically, we cannot style `header` with classes but only objects inside of it. What could we do if we wanted to add class to `header` is either target the `header.wrapper` or we can concatenate classes like in the picture below on the line 3

      ![ui.header](/images/faq/sh-column.ui.header.png)

  - q: |
       Is `size` a property or an attribute? Can we style it?
    a: |
        `Size` is a property with values of a whole number. This number represents an element in an array from `sh-grid-sizes.ts`. In this case, it takes the value of an element from `colSpan` array. So if we wanted to style it, we would have to change something in `sh-grid-sizes.ts`, but since the value of size is a number and it is used specially for grid, adding some other style in array would not make much sense.

  - q: |
       Is `main` an attribute or property? Can we style it? (it is defined in the `sh-column.ts` property)
    a: |
       `Main` is an attribute with values of classes. It can be styled and it is to be found in `sh-column.ts` but it is currently without any values. We could add background to the `main` and only that section of constructor will have that background.
---
::
