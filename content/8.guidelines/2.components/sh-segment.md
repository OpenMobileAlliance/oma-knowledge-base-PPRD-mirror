---
titile: ShSegment component
discription: 
---

The `ShSegment` component represent the most flexible component as it's 
encapsulates one block of markdown content that can be styled.

## Usage

::ShSegment
---
ui:
  wrapper: bg-cyan-300 rounded-xl border shadow-md p-4 hover:bg-sky-500
---
This is a specific block of *Markdown* content that can be styled as a whole.

::

```mdc
::ShSegment
---
ui:
  wrapper: bg-cyan-300 rounded-xl border shadow-md p-4 hover:bg-sky-500
---

This is a specific block of *Markdown* content that can be styled as a whole.

::
```

The content can be markdown text of any length. All elements are supported as in
the *normal* text.

::ShSegment
---
ui:
  wrapper: border p-4
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
  wrapper: bg-gradient-to-r from-blue-500 text-3xl p-4 rounded
---
This is a nested segment with its own specific styling and an image.


![image](https://assets-global.website-files.com/5e19ea5aa7d3a217492e372b/624de949df5a11680ab170b9_Axios%20logo%20-%20RGB%20-%20minimum%20space.png)

That is making this used to show this component flexibility.
:::

::

```mdc
:::ShSegment
---
ui:
  wrapper: bg-gradient-to-r from-blue-500 text-3xl p-4 rounded
---
This is a nested segment with its own specific styling and an image.


![image](https://assets-global.website-files.com/5e19ea5aa7d3a217492e372b/624de949df5a11680ab170b9_Axios%20logo%20-%20RGB%20-%20minimum%20space.png)

That is making this used to show this component flexibility.
:::

::
```

## Props

This component have no properties defined.
## Config

```json
{
  wrapper: ""
}
```
