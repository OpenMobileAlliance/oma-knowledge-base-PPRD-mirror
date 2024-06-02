---
title: ShColumn
description: Component representing the column with header and footer
---

The `ShColumn` component is used to organise content of one column in
multi-column layout. The column has `header`, that can render `title` and
`subTitle` in the header accompanied with an image.
Beside the main content the column also can have the `footer` content as well.

## Usage
### Presentation
#### Example Basic Column
This is how a basic column `ShColumn` is displayed:

::ShColumn
---
ui:
  wrapper: border-8
title: Column Title
subTitle: "*Column Subtitle *"
footerText: "*Footer Text*"
---
This is `ShColumn` component design to show content of the first column.

![columns](https://free-images.com/tn/7dbb/columns_arches_patio_de.jpg){.w-full .rounded}
::

This is how the above `ShColumn` constructor is written:
```md
::ShColumn
---
ui:
  wrapper: border-8 #shows the contour of the column with a border.
title: Column Title #title
subTitle: "*Column Subtitle *" #use quotations
footerText: "*Footer Text*" # use quotations
---
This is `ShColumn` component design to show content of the first column.

![columns](https://free-images.com/tn/7dbb/columns_arches_patio_de.jpg){.w-full .rounded}
::
```

#### Example Advance Column
This is an advance example of a `ShColumn` constructor which contains two inner columns to display the footer content. 

::ShColumn
---
ui:
  wrapper: border-8 #border to highlight the column contourn
  header: #header styling
    title: "tracking-wider text-primary text-center" #title styling
    subTitle: "text-center" #subtitle styling
  footer: "text-center" #footer styling
title: Column Title # title
subTitle: "*Column Subtitle*" #subtitle with quotations to incorporate markdown constructor
footerText: | #footer text contains two columns
  :::ShTwoColumns
  ---
  ui:
    wrapper: border-8 # show the border for the two columns
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

This is how the above advance `ShColumn` is written: 

```mdc
::ShColumn
---
ui:
  wrapper: border-8 #border to highlight the column contourn
  header: #header styling
    title: "tracking-wider text-primary text-center" #title styling
    subTitle: "text-center" #subtitle styling
  footer: "text-center" #footer styling
title: Column Title # title
subTitle: "*Column Subtitle*" #subtitle with quotations to incorporate markdown constructor
footerText: | #footer text contains two columns
  :::ShTwoColumns
  ---
  ui:
    wrapper: border-8 # show the border for the two columns
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
```

## Props
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
      <td rowspan="6">ui</td>
      <td>n/a</td>
      <td>The <code>ui</code> property in the <code>ShColumn</code> constructor is a comprehensive configuration object that allows for the customization of various styling aspects of the column component. Each attribute within the <code>ui</code> property targets a specific part of the column display, providing detailed control over its appearance and layout. Below is a detailed description of each attribute within the <code>ui</code> property:</td>
    </tr>
    <tr>
      <td><code>wrapper</code></td>
      <td>Defines the overall styling for the container that holds all the elements of the column. The attribute <code>border-8</code> is used to highlight the contur of the wrapper.</td>
    </tr>
    <tr>
      <td><code>title</code></td>
      <td>Styles applied to the text displaying the title of the column, such as font, size, color, etc.</td>
    </tr>
    <tr>
      <td><code>subtitle</code></td>
      <td>Styles applied to the text displaying the subtitle of the column, such as font, size, color, etc.</td>
    </tr>
    <tr>
      <td><code>footer</code></td>
      <td>Styles applied to the text displaying the footer text of the column, such as font, size, color, etc.</td>
    </tr>
    <tr>
      <td><code>size</code></td>
      <td></td>
    </tr>
    <tr>
      <td><code>title</code></td>
      <td>n/a</td>
      <td>Title of the column</td>
    </tr>
    <tr>
      <td><code>subtitle</code></td>
      <td>n/a</td>
      <td>Subtitle of the column</td>
    </tr>
    <tr>
      <td><code>footerText</code></td>
      <td>n/a</td>
      <td>Text at the footer of the column</td>
    </tr>
  </tbody>
</table>


## Config

```json
{
  wrapper: "",
  header: {
    wrapper: "",
    title: "text-xl not-prose",
    subTitle: "text-slate-400 py-0 not-prose"
  },
  main: "",
  footer: "text-slate-300 py-0 not-prose",
  default: {
    size: 1
  }
}
```
