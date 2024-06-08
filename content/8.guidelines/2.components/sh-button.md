---
title: Button
description: Component do render a button in the document
constructorName: ShButton
---

## Usage
The most simplest example of usage of the <b>{{ $doc.constructorName }}</b> is with just an `urlButton` and the text to show.

::ShButton
---
ui: 
  wrapper: shadow-2xl
urlButton: '#' # this is a comment to the link to the button.
rounded: rounded-full
---
ClickMe!!!  
::

```mdc
::ShButton
---
urlButton: '#' # this is a comment to the link to the button.
---

ClickMe!!!  
::
```

The <b>{{ $doc.constructorName }}</b> can be presented in `solid`, `outine` and `link` *variants*:

::ShMultiColumn
---
cols: 3
---

::ShButton
---
urlButton: "#"
variant: solid
---
ClickMe!!!  
::

::ShButton
---
urlButton: "#"
variant: outline
---
ClickMe!!!  
::

::ShButton
---
urlButton: "#"
variant: link
---
ClickMe!!!  
::

```mdc
::ShButton
---
urlButton: "#"
variant: solid
---
ClickMe!!!  
::
```

```mdc
::ShButton
---
urlButton: "#"
variant: outline
---
ClickMe!!!  
::
```

```mdc
::ShButton
---
urlButton: "#"
variant: link
---
ClickMe!!!  
::
```

::

The property `size` define the size of the `ShButton`

::ShButton
---
urlButton: "#"
size: 2xs
---
2xs  
::

::ShButton
---
urlButton: "#"
size: xs
---
xs 
::

::ShButton
---
urlButton: "#"
size: sm
---
sm
::

::ShButton
---
urlButton: "#"
size: md
---
md
::

::ShButton
---
urlButton: "#"
size: base
---
base
::

::ShButton
---
urlButton: "#"
size: lg
---
lg
::

::ShButton
---
urlButton: "#"
size: xl
---
xl
::

::ShButton
---
urlButton: "#"
size: 2xl
---
2xl
::

::ShButton
---
urlButton: "#"
size: 3xl
---
3xl
::

::ShButton
---
urlButton: "#"
size: 4xl
---
4xl
::

::ShButton
---
urlButton: "#"
size: 5xl
---
5xl
::

```mdc
::ShButton
---
urlButton: "#"
size: 2xs
---
2xs  
::

::ShButton
---
urlButton: "#"
size: xs
---
xs 
::

::ShButton
---
urlButton: "#"
size: sm
---
sm
::

::ShButton
---
urlButton: "#"
size: md
---
md
::

::ShButton
---
urlButton: "#"
size: base
---
base
::

::ShButton
---
urlButton: "#"
size: lg
---
lg
::

::ShButton
---
urlButton: "#"
size: xl
---
xl
::

::ShButton
---
urlButton: "#"
size: 2xl
---
2xl
::

::ShButton
---
urlButton: "#"
size: 3xl
---
3xl
::

::ShButton
---
urlButton: "#"
size: 4xl
---
4xl
::

::ShButton
---
urlButton: "#"
size: 5xl
---
5xl
::
```

Turning the parameter `block` to true you can instruct button to take the full length. And with `colorButton` 
you can change the color of the button.

::ShButton
---
urlButton: "#"
block: true
colorButton: cyan
---
This button takes the whole width
::

```mdc
::ShButton
---
urlButton: "#"
block: true
colorButton: cyan
---
This button takes the whole width
::
```
The <b>{{ $doc.constructorName }}</b> content can be any valid Markdown.

::ShButton
---
urlButton: "#"
---
ClickMe!!!  

*it will take you to desirable destination*
::

The other components are supported as well.

::ShButton
---
urlButton: "https://opensource.org/"
variant: outline
colorButton: blue
block: true
---
:::ShMultiColumn
---
ui:
  wrapper: w-full
cols: 8
---
[]{.i-fa6-brands-square-github .text-4xl}

::ShColumn
---
title: GitHub repository
subTitle: "*public*"
size: 2
---
::

::ShColumn
---
size: 5
---
In this repository all the content is Open Sounce and it's can be used accordigly to it's LICENSE.
::
:::
::

```mdc
::ShButton
---
urlButton: "https://opensource.org/"
variant: outline
colorButton: blue
block: true
---
:::ShMultiColumn
---
ui:
  wrapper: w-full
cols: 8
---
[]{.i-fa6-brands-square-github .text-4xl}

::ShColumn
---
title: GitHub repository
subTitle: "*public*"
size: 2
---
::

::ShColumn
---
size: 5
---
In this repository all the content is Open Sounce and it's can be used accordigly to it's LICENSE.
::
:::
::
```

There is a special way where the button can be part of the
:ShButton{urlButton ="/" labelButton="text" colorButton="blue"} using a inline notation for the
components. This notation supports <b><b>{{ $doc.constructorName }}</b></b> :ShButton{urlButton ="/" labelButton="all" variant="outline" colorButton="green"}
variants and all other parameters, colorButton for example.

```mdc
There is a special way where the button can be part of the
:ShButton{urlButton ="/" labelButton="text" colorButton="blue"} using a inline notation for the
components. This notation supports `ShButton` :ShButton{urlButton ="/" labelButton="all" variant="outline" colorButton="green"}
variants and all other parameters, colorButton for example.
```

## Properties

| name | type | default | note |
| --- | :---: | :---: | --- |
| ui |  config | | optional |
| urlButton| String |  | mandatory |
| target | String |  | optional |
| colorButton | String | primary | optional |
| size | String | base | optional |
| disabled | Boolean | false | optional |
| variant | String | solid | optional |
| type | String | button | optional |
| block | Boolean | false | optional |
| labelButton | String |  | optional |
## Config

```ts
{
  wrapper: "align-middle m-1",
  inner: "text-center not-prose mx-auto",
  variant: {
    solid: 'bg-{colorButton}-500 dark:bg-{colorButton}-400 text-white dark:text-gray-900 no-underline',
    outline: 'text-{colorButton}-500 dark:text-{colorButton}-400 ring-1 ring-inset ring-{colorButton}-500 dark:ring-{colorButton}-400 no-underline',
    link: 'text-{colorButton}-500 hover:text-{colorButton}-600 disabled:text-{colorButton}-500 dark:text-{colorButton}-400 dark:hover:text-{colorButton}-500 dark:disabled:text-{colorButton}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{colorButton}-500 dark:focus-visible:ring-{colorButton}-400'
  },
  block: 'w-full flex justify-center items-center',
  inline: 'inline-flex items-center',
  rounded: 'rounded-md',
  size: {
    '2xs': 'text-xs',
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-md',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl'
  },
  padding: {
    '2xs': 'px-1 py-1',
    xs: 'px-1.5 py-1.5',
    sm: 'px-2 py-2',
    md: 'px-2.5 py-2.5',
    base: 'px-3 py-3',
    lg: 'px-7 py-6',
    xl: 'px-8 py-7',
    '2xl': 'px-9 py-8',
    '3xl': 'px-10 py-9',
    '4xl': 'px-11 py-10',
    '5xl': 'px-12 py-11',
  },
  default: {
    size: 'base',
    variant: 'solid',
    colorButton: 'primary',
  }
}
```
