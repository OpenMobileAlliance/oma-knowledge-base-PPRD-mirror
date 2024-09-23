---
title: Components
description: Custom made, home-brewed components for many use cases
layout: doc
---
{{$doc.description}}

## Prelude to Components

Custom components are building blocks that allow developers to define their own HTML elements, combining logic, styles, and structure into a cohesive unit. These components can be designed to accept inputs (props), manage internal states, and emit events, all while maintaining a separation of concerns. This modular approach ensures that complex UIs can be broken down into manageable, reusable pieces.

### Markdown Syntax

All of our components are mainly created with a vision of being used in Markdown files. With that in mind, their syntax needs to be more in the nature of Markdown, rather to look like a HTML elements. They all must start with prefix `Sh`.

#### Invoking Components

All components are using one of the two following rules when invoked:

- If component has props that are placeholders for the content itself
    ```mdc
    ::ShNameOfComponent
    ---
    prop1: |
        string
    prop2: number
    ---
    ::
    ```

- Or component uses `slot` that can accept anything inside of it
    ```mdc
    ::ShNameOfComponent
    string | number | component
    ::
    ```

Main difference here is that with second option we didn\`t use dashes. However, there is a usecase where we would use dashes in second option as well.

To find what props your component accepts, checkout the guideline for that component, and under `Props` table you will be able to find all props with their explanations.

#### Styling Components

To style components after you invoke them, you can use following instruction:

- Styling component that has content props
    ```mdc
    ::ShNameOfComponent
    ---
    ui:
        wrapper: tailwind-class
        prop1: tailwind-class
        prop2: tailwind-class
    prop1: |
        string
    prop2: number
    ---
    ::
    ```

- Or without content props
    ```mdc
    ::ShNameOfComponent
    ---
    ui:
        wrapper: tailwind-class
    ---
    string | number | component
    ::
    ```

In this example, we can notice few things:
1. When we want to style our component we need to use `ui` prop inside dashes and then in new row indent and call our attribute (e.g. `wrapper`). For all components, inside a guideline for component itself, you will be provided with a table under `Props` that will give you attributes to style.
2. All components poses `wrapper` attribute that encapsulates the whole component.
3. Classes can be any valid [Tailwind](https://tailwindcss.com/){.not-prose .text-oma-blue-500 .dark:text-oma-blue-300 .hover:text-oma-blue-300 .dark:hover:text-oma-blue-500} classes and we can concatinate them by separating them with spaces.

> Note: Components can be nested, as you will see in guidelines itslef.

