---
title: Button
description: Component do render a button in the document
constructorName: ShButton
layout: doc
---

## Usage
The most simplest example of usage of the <b>{{ $doc.constructorName }}</b> is with just an `urlButton` and the text to show.
::ShButton
---
urlButton: 'https://www.nasa.gov/' # this is a comment to the link to the button.
---
ClickMe!!!  
::

This is how it is written:

```mdc
::ShButton
---
urlButton: 'https://www.nasa.gov/' # this is a comment to the link to the button.
---

ClickMe!!!  
::
```


This is a more advance example of usage the <b>{{ $doc.constructorName }}</b> when some of the style is being modified:
::ShButton
---
ui: 
  wrapper: shadow-2xl
  rounded: rounded-full # options: rounded, rounded-md, rounded-lg & rounded-full
urlButton: https://www.nasa.gov/ # this is a comment to the link to the button.
target: "" # open in the same window
rounded: rounded-3xl
colorButton: green
disabled: true # true, false
styleButton: solid
fullWidth: "" # changes the button width
size: 3xl # modifies the size of the button
---
[]{.i-fa6-brands-square-github .text-4xl} ClickMe!!!  
::

This is how it is written:

```mdc
::ShButton
---
ui: 
  wrapper: shadow-2xl
  rounded: rounded-full # options: rounded, rounded-md, rounded-lg & rounded-full
urlButton: https://www.nasa.gov/ # this is a comment to the link to the button.
target: "" # open in the same window
rounded: rounded-3xl
colorButton: green
disabled: true # true, false
styleButton: solid
fullWidth: "" # changes the button width
size: 3xl # modifies the size of the button
---
[]{.i-fa6-brands-square-github .text-4xl} ClickMe!!!  
::
```

The <b>{{ $doc.constructorName }}</b> can be presented in `solid`, `outline` and `link` *styleButton*:

::ShMultiColumn
---
cols: 3
---

::ShButton
---
urlButton: "#"
styleButton: solid
---
ClickMe!!!  
::

::ShButton
---
urlButton: "#"
styleButton: outline
---
ClickMe!!!  
::

::ShButton
---
urlButton: "#"
styleButton: link
---
ClickMe!!!  
::

```mdc
::ShButton
---
urlButton: "#"
styleButton: solid
---
ClickMe!!!  
::
```

```mdc
::ShButton
---
urlButton: "#"
styleButton: outline
---
ClickMe!!!  
::
```

```mdc
::ShButton
---
urlButton: "#"
styleButton: link
---
ClickMe!!!  
::
```

::

The property `size` defines the size of the `ShButton`

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

Turning the parameter `fullWidth` to true you can instruct button to take the full width of available screen. And with `colorButton` 
you can change the color of the button.

::ShButton
---
urlButton: "#"
fullWidth: true
colorButton: cyan
---
This button takes the whole width
::

```mdc
::ShButton
---
urlButton: "#"
fullWidth: true
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

#### Combine Button with Other Constructors
It is possible to insert other constructors inside of the <b>{{ $doc.constructorName }}</b> constructor. The other components are supported as well.

::ShButton
---
ui:
  wrapper: w-fit
urlButton: "https://opensource.org/"
styleButton: outline
colorButton: blue
fullWidth: true
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
styleButton: outline
colorButton: blue
fullWidth: true
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
components. This notation supports <b>{{ $doc.constructorName }}</b> :ShButton{urlButton ="/" labelButton="all" styleButton="outline" colorButton="green"}
styleButtons and all other parameters, colorButton for example.

```mdc
There is a special way where the button can be part of the
:ShButton{urlButton ="/" labelButton="text" colorButton="blue"} using a inline notation for the
components. This notation supports `ShButton` :ShButton{urlButton ="/" labelButton="all" styleButton="outline" colorButton="green"}
styleButtons and all other parameters, colorButton for example.
```

## Props

These are the properties and attributes to define and style <b>{{ $doc.constructorName }}</b> constructor

<table>
    <caption>Properties & Attributes</caption>
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
            <td rowspan="3"><code>ui</code></td>
            <td>n/a</td>
            <td>n/a</td>
            <td>The <code>ui</code> property is a comprehensive configuration object that allows for the customization of various styling aspects of the button component. Each attribute within the <code>ui</code> property targets a specific part of the button's appearance and layout, providing detailed control over its design.</td>
        </tr>
        <tr>
            <td><code>wrapper</code></td>
            <td><code>config.wrapper</code></td>
            <td>Defines the overall styling for the container that holds all the elements of the button. The <code>wrapper</code> attribute is used to ensure the button is aligned properly within its container, with appropriate margins, e.g., <code>align-middle m-1</code></td>
        </tr>
        <tr>
            <td><code>inner</code></td>
            <td><code>config.inner</code></td>
            <td>Specifies the styling for the inner content of the button, ensuring it is centered and does not inherit any prose-related styles, making it suitable for standalone button components, e.g., <code>text-center not-prose mx-auto</code></td>
        </tr>
        <tr>
            <td><code>urlButton</code></td>
            <td>n/a</td>
            <td>n/a</td>
            <td>Represents the URL to which the button will navigate when clicked. It can be used to define external or internal links for the button's action.</td>
        </tr>
        <tr>
            <td><code>labelButton</code></td>
            <td>n/a</td>
            <td>n/a</td>
            <td>Defines the text label displayed on the button. This attribute ensures the button conveys its intended action clearly to the user.</td>
        </tr>
        <tr>
            <td><code>target</code></td>
            <td>n/a</td>
            <td><code>_blank</code></td>
            <td>Specifies where to open the linked document. Common values include <code>_self</code> for the same frame, <code>_blank</code> for a new window or tab, <code>_parent</code> for the parent frame, and <code>_top</code> for the full body of the window.</td>
        </tr>
        <tr>
            <td><code>colorButton</code></td>
            <td>n/a</td>
            <td><code>primary</code></td>
            <td>Determines the primary color scheme for the button. The value <code>primary</code> sets a default color, which can be customized by replacing <code>{colorButton}</code> in the styleButton styles with the desired color name.</td>
        </tr>
        <tr>
            <td><code>rounded</code></td>
            <td>n/a</td>
            <td><code>config.rounded</code></td>
            <td>Defines the border-radius of the button, making the edges rounded. The default class <code>rounded-md</code> provides medium-rounded corners.</td>
        </tr>
        <tr>
            <td><code>disabled</code></td>
            <td>n/a</td>
            <td><code>false</code></td>
            <td>A boolean attribute (<code>true</code> or <code>false</code>) that indicates whether the button is disabled. When true, the button is not interactive and is usually styled to look inactive.</td>
        </tr>
        <tr>
            <td><code>styleButton</code></td>
            <td>n/a</td>
            <td><code>solid</code></td>
            <td>Specifies the style styleButton of the button, which can be <code>solid</code>, <code>outline</code>, or <code>link</code>. Each styleButton applies different styling rules, such as background colors, border styles, and text decorations.</td>
        </tr>
        <tr>
            <td><code>fullWidth</code></td>
            <td>n/a</td>
            <td><code>false</code></td>
            <td>A boolean attribute (<code>true</code>, <code>false</code>) defines whether the button should be displayed as a fullWidth element, taking the full width of its container.</td>
        </tr>
        <tr>
            <td><code>size</code></td>
            <td>n/a</td>
            <td><code>base</code></td>
            <td>Sets the size of the button, ranging from <code>2xs</code>, <code>xs</code>, <code>sm</code>, <code>md</code>, <code>base</code>, <code>lg</code>, <code>xl</code>, <code>2xl</code>, <code>3xl</code>, <code>4xl</code>, to <code>5xl</code>. Each size corresponds to predefined text and padding sizes, ensuring consistency across different button sizes.</td>
        </tr>
        <tr>
            <td><code>inline</code></td>
            <td>n/a</td>
            <td><code>config.inline</code></td>
            <td>Defines whether the button should be displayed inline with other elements. The class <code>inline-flex items-center</code> ensures the button aligns properly with the surrounding content. It is advised <b>NOT</b> to change these values.</td>
        </tr>
        <tr>
            <td><code>padding</code></td>
            <td>n/a</td>
            <td>n/a</td>
            <td>Sets the padding for the button, with options ranging from <code>2xs</code>, <code>xs</code>, <code>sm</code>, <code>md</code>, <code>base</code>, <code>lg</code>, <code>xl</code>, <code>2xl</code>, <code>3xl</code>, <code>4xl</code>, to <code>5xl</code>. Each padding size corresponds to predefined padding values, ensuring the button's content is appropriately spaced. It is recommended to <b>NOT</b> modify these values as it is synced with the <code>size</code> property.</td>
        </tr>
        <tr>
      <td><code>description</code></td>
      <td>n/a</td>
      <td>n/a</td>
      <td>Intented to be used as a help to content writter. Doesn`t render on website.</td>
    </tr>
    </tbody>
</table>

## Config
These style properties can be modified via `ui` and are stored in the <code><b>{{ $doc.constructorName }}</b><b>.ts</b></code> and `status.ts` files:

```ts
export default {
  wrapper: "align-middle m-1 hover:saturate-150",s
  inner: "text-center not-prose mx-auto",
  styleButton: {
    solid: 'bg-{colorButton}-500 dark:bg-{colorButton}-400 text-white dark:text-gray-900 no-underline',
    outline: 'text-{colorButton}-500 dark:text-{colorButton}-400 ring-1 ring-inset ring-{colorButton}-500 dark:ring-{colorButton}-400 no-underline',
    link: 'text-{colorButton}-500 hover:text-{colorButton}-600 disabled:text-{colorButton}-500 dark:text-{colorButton}-400 dark:hover:text-{colorButton}-500 dark:disabled:text-{colorButton}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{colorButton}-500 dark:focus-visible:ring-{colorButton}-400'
  },
  fullWidth: 'flex mx-auto justify-center items-center',
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
    styleButton: 'solid',
    colorButton: 'primary',
    target: '_blank',
  }
}
```

#### Class Descriptions

These represent the class values utilized in the <b>{{ $doc.constructorName }}</b> constructor. These values are customizable and can be strengthened or overridden through the `ui` properties' attributes.

_**wrapper**_
*  **Value**: <code>"align-middle m-1"</code>
*  **Description**: Defines the alignment and margin for the container. The value "align-middle m-1" centers the element vertically (align-middle) and adds a margin of 1 unit (m-1).

_**inner**_
*  **Value**: <code>"text-center not-prose mx-auto"</code>
*  **Description**: Specifies styles for inner content. The value "text-center not-prose mx-auto" centers the text (text-center), excludes prose formatting (not-prose), and centers horizontally (mx-auto).

_**styleButton.solid**_
*  **Value**: <code>'bg-{colorButton}-500 dark:bg-{colorButton}-400 text-white dark:text-gray-900 no-underline'</code>
*  **Description**: Defines styles for a solid button. The value includes background color based on `{colorButton}` (bg-{colorButton}-500, dark:bg-{colorButton}-400), white text color (text-white), dark mode text color (dark:text-gray-900), and no underline (no-underline).

_**styleButton.outline**_
*  **Value**: <code>'text-{colorButton}-500 dark:text-{colorButton}-400 ring-1 ring-inset ring-{colorButton}-500 dark:ring-{colorButton}-400 no-underline'</code>
*  **Description**: Defines styles for an outlined button. The value includes text color based on `{colorButton}` (text-{colorButton}-500, dark:text-{colorButton}-400), an inset ring with color based on `{colorButton}` (ring-1 ring-inset ring-{colorButton}-500, dark:ring-{colorButton}-400), and no underline (no-underline).

_**styleButton.link**_
*  **Value**: <code>'text-{colorButton}-500 hover:text-{colorButton}-600 disabled:text-{colorButton}-500 dark:text-{colorButton}-400 dark:hover:text-{colorButton}-500 dark:disabled:text-{colorButton}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{colorButton}-500 dark:focus-visible:ring-{colorButton}-400'</code>
*  **Description**: Defines styles for a link button. The value includes text color based on `{colorButton}` (text-{colorButton}-500, dark:text-{colorButton}-400), hover text color (hover:text-{colorButton}-600, dark:hover:text-{colorButton}-500), disabled text color (disabled:text-{colorButton}-500, dark:disabled:text-{colorButton}-400), underline offset (underline-offset-4), hover underline (hover:underline), and focus-visible ring with color based on `{colorButton}` (focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{colorButton}-500, dark:focus-visible:ring-{colorButton}-400).

_**fullWidth**_
*  **Value**: <code>"w-full flex justify-center items-center"</code>
*  **Description**: Defines styles for full width elements. The value "w-full flex justify-center items-center" makes the element take full width (w-full), centers it using flexbox (flex justify-center items-center).

_**inline**_
*  **Value**: <code>"inline-flex items-center"</code>
*  **Description**: Defines styles for inline elements. The value "inline-flex items-center" sets inline flex display (inline-flex) and centers items vertically (items-center).

_**rounded**_
*  **Value**: <code>"rounded-md"</code>
*  **Description**: Defines the border radius. The value "rounded-md" applies a medium border radius.

_**size**_
*  **Value**: <code>{
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
  }</code>
*  **Description**: Defines text sizes for various options. Each value represents a different text size class from extra small (text-xs) to five times extra large (text-5xl).

_**padding**_
*  **Value**: <code>{
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
  }</code>
*  **Description**: Defines padding sizes for various options. Each value represents different padding classes for different sizes.

_**default**_
*  **Value**: <code>{
    size: 'base',
    styleButton: 'solid',
    colorButton: 'primary',
    target: '_blank',
  }</code>
*  **Description**: Defines default settings. The value includes default text size (size: 'base'), default button style (styleButton: 'solid'), default button color (colorButton: 'primary'), and default link target (target: '_blank').

These style properties ensure that the <b>{{ $doc.constructorName }}</b> component is visually appealing and flexible, allowing for a wide range of customization to meet specific design requirements.
