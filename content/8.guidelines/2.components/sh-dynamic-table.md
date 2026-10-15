---
title: Dynamic Table
description: Table component with dynamic capabiities
constructorName: ShDynamicTable
layout: doc
---
# {{$doc.title}}

## Usage

### Basic

The simplest usage of `ShDynamicTable` can be shown in the following example:

::doc-example
---
code: |
  ::ShDynamicTable
  ---
  dataUrl: "http://dummyjson.com/users"
  dataField: "users"
  columns:
    - name: "firstName"
      title: "First Name"
      filter: false
      query: true
      sortable: true
      type: text
    - name: "lastName"
      title: "Last Name"
      filter: false
      query: true
      sortable: true
      type: text
    - name: "username"
      title: "username"
      filter: false
      query: true
      sortable: true
      type: text
    - name: "email"
      title: "Email"
      filter: false
      query: true
      sortable: false
      type: email
    - name: "gender"
      title: "Gender"
      filter: true
      sortable: true
      order: true
      type: text
    - name: "birthDate"
      title: "Birth Date"
      filter: false
      query: true
      sortable: true
      type: date
    - name: "age"
      title: "Age"
      filter: true
      query: true
      sortable: true
      type: number
  ui:
    footer: "text-sm"
  header: Dymanic Table example
  footer: "*Copyright &copy; 2024*"
  ---
  ::
---
::

The important parts are the `dataUrl`, and `columns`. The prior one define the
*URL* from witch the data will be fetched. On the other hand, `columns` represent
a list of elements where each table column is described.

Each column is described using the following properties:
* `name` - the property name
* `title` - the label that will be show in the column header
* `filter` - `true | false` value indication that if the field in question should be used for quick filters
* `query` - `true | false` value indicating if this filed should be used in query search
* `sortable` - `true | false` value indication if this field should be used for ordering the data
* `type` - one of the following `[text, number, date, list, url]` values defining the type of the field value. A `list` column holds comma-separated values, and each value gets its own quick filter
* `pill` - `true | false` value indicating that the value should be shown as a pill, meant for short status words
* `wrap` - `true | false` value letting the cell wrap over up to two lines instead of being cut to one (the full value is always available as a tooltip)

Numeric columns (other than identifiers whose name ends in `id`) are right-aligned automatically.

### Data field

Beside the above the `dataField` parameter can be used if the data fetched
holds the table items under a specific property.
This is typical in [REST API](https://aws.amazon.com/what-is/restful-api/){target="_blank"} results.
You can review the one used in [above example](http://dummyjson.com/users){target="_blank"}
where the items that we would like to show in the
table is stored in `users` field.

## Props

::doc-api{section="props"}
::

### Columns

Each item of the `columns` prop describes one column of the table:

::doc-api{section="type" type="itemsElement"}
::

## Slots

::doc-api{section="slots"}
::

## UI config

Default classes of every styled element. Override any key through the `ui` prop.

::doc-api{section="ui"}
::
