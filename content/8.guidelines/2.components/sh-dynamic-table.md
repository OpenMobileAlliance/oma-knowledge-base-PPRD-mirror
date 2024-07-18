---
title: Dynamic Table
description: Table component with dynamic capabiities
constructorName: ShDynamicTable
---


## Usage

The symplest usage of {{ $doc.constructorName }} can be shown in the following example:

::ShDynamicTable
---
dataUrl: "http://dummyjson.com/users"
dataField: "users"
data:
  base: "users"
  columns:
  - name: "firstName"
    title: "First Name"
    filter: false
    query: true
    order: true
    type: text
  - name: "lastName"
    title: "Last Name"
    filter: false
    query: true
    order: true
    type: text
  - name: "username"
    title: "username"
    filter: false
    query: true
    order: true
    type: text
  - name: "email"
    title: "Email"
    filter: false
    query: true
    order: true
    type: email
  - name: "gender"
    title: "Gender"
    filter: true
    query: true
    order: true
    type: text
  - name: "birthDate"
    title: "Birth Date"
    filter: false
    query: true
    order: true
    type: date
  - name: "age"
    title: "Age"
    filter: true
    query: true
    order: true
    type: number
ui:
  footer: "text-sm"
header: Table with a caption
footer: "*Copyright &copy; 2024*"
---
::


## Properties

## Configuration

