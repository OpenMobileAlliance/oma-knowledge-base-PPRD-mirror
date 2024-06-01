---
title: ShColumn
description: Component representing the column with header and footer
constructorName: ShColumn
---

The {{ $doc.constructorName }} component is used to organise content of one column in
multi-column layout. The column has `header`, that can render `title` and
`subTitle` in the header accompanied with an image.
Beside the main content the column also can have the `footer` content as well.

## Usage

::ShTwoColumns
::ShColumn
---
title: This is *Colum*
subTitle: "*a component for your vertical content*"
footerText: "*use with care*"
---
This is {{ $doc.constructorName }} component design to show content of one column.

![columns](https://free-images.com/tn/7dbb/columns_arches_patio_de.jpg){.w-full .rounded}
::

:::ShColumn
---
ui:
  header:
    title: "tracking-wider text-primary text-center"
    subTitle: "text-center"
  footer: "text-center"
title: This is another Column
subTitle: "*with some additional formatting*"
footerText: |
  ::ShTwoColumns
  The footer can have  
  a complex content

  With great power comes  
  a great responsibility
  ::
---
The {{ $doc.constructorName }} component can contain any typical *Markdown* content, including:
* images 
* lists
* links
* ... or similar
* any supported component

[ ![coffee](https://free-images.com/sm/86a4/aroma_aromatic_beverage_bio.jpg){.w-1/2 .rounded-xl .not-prose .mb-2} ]{.w-full .flex .justify-center}
:::
::

The first column code:
```mdc 
::ShColumn
---
title: This is *Colum*
subTitle: "*a component for your vertical content*"
footerText: "*use with care*"
---
This is `ShColumn` component design to show content of one column.

![columns](https://free-images.com/tn/7dbb/columns_arches_patio_de.jpg){.w-full .rounded}
::
```
The code of second column is a bit more elaborated:
```mdc
:::ShColumn
---
ui:
  header:
    title: "tracking-wider text-primary text-center"
    subTitle: "text-center"
  footer: "text-center"
title: This is another Column
subTitle: "*with some additional formatting*"
footerText: |
  ::ShTwoColumns
  The footer can have  
  a complex content

  With great power comes  
  a great responsibility
  ::
---
The `ShColumn` component can contain any typical *Markdown* content, including:
* images 
* lists
* links
* ... or similar
* any supported component

[ ![coffee](https://free-images.com/sm/86a4/aroma_aromatic_beverage_bio.jpg){.w-1/2 .rounded-xl .not-prose .mb-2} ]{.w-full .flex .justify-center}
::
```

## Props

| name | type | default | note |
| --- | :---: | :---: | --- |
| ui  | config |      |     |
| title | String | "" | optional |
| subTitle | String | "" | optional |
| footerText | String | "" | optional |
| size | String | "" | optional |

## Config

```ts
{
  wrapper: "",
  header: {
    title: "text-xl not-prose",
    subTitle: "text-slate-400 py-0 not-prose"
  },
  main: "",
  footer: "text-slate-300 py-0 not-prose",
  default: {
    size: "L"
  }
}
```
