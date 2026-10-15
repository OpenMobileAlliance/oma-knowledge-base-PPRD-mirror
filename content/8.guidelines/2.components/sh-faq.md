---
title: FAQ
description: Component to render a list of frequently asked questions and answers.
constructorName: ShFaq
layout: doc
---
# {{$doc.title}}

## Usage

### Basic

The simplest example of usage for the `ShFaq` is with just a list of questions and answers.

::doc-example
---
code: |
  ::ShFaq
  ---
  qas:
    - q: "What is the purpose of this component?"
      a: "To display a list of FAQs."
    - q: "How do I use it?"
      a: "Include the qas property with question-answer pairs."
  ---
  ::
---
::

### Advanced settings
An example with customized `ui` attributes for enhanced display:

::doc-example
---
code: |
  ::ShFaq
  ---
  ui:
    header:
      wrapper: "font-bold text-xl mb-4"
      title: "text-2xl"
    wrapper: "border p-4"
    inner: "mb-2"
    question: "cursor-pointer text-blue-500"
    answer: "text-gray-700"
    divider: "border-t my-2"
  qas:
    - q: "What is the purpose of this component?"
      a: "To display a list of FAQs."
    - q: "How do I use it?"
      a: "Include the qas property with question-answer pairs."
  ---
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
