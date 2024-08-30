---
title: OMASPECWORKS
description:
layout: doc
---

::ShCarousel
---
ui:
    wrapper: rounded-2xl border-2
title: Latest OMA News
subtitle: Click here for more [news](/news)
items:
  - component: ShCard
    props:
      text: |
        Disruption at its finest…the transportation and the automotive industry embraces data intelligence, sensors, IoT, AI, and real-time edge computing to deliver advanced driving experiences. Urban modernization gives rise to the **intelligent transportation market**, integrating a variety of machines and technologies to enhance the efficiency, safety, and sustainability of transportation systems. Below we will dive into autonomous vehicles, electric vehicles, public transit, and transportation management.
      title: |
          "The Emergence of Intelligent Transportation, Riding Smart"
      subtitle: |
          "How IoT, AI, and Real-Time Data are Revolutionizing Urban Transportation Systems for a Safer, Smarter Future"
      leftLabel: |
          2024-July-29
      centerLabel: ""
      rightLabel: |
          OMA
      imageBackground: "" 
      urlImage: images/news/Industrial_Autom_Underway.png
      urlUpperBase: ""
  - component: ShTextImg
    props:
      positionText: right
      spanText: m
      alignText: left
      status: a
      urlImage: images/news/test-event-raleigh.png
      title: |
       Hello component
      subtitle: |
       Hello subtitle
      text: |
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et ligula quis justo bibendum consequat. Ut auctor diam sit amet diam ornare euismod. [URL](https://docs.google.com/spreadsheets/d/18O4QvBpIGMcXMq3VZMICwYB8L7tyJ11T/edit#gid=1718761465) elit at dapibus commodo. <a href="https://en.wikipedia.org/wiki/Gaius_Maecenas">Maecenas</a> sit amet purus eu metus pharetra pulvinar. In quis scelerisque leo. Praesent scelerisque at nulla non fermentum. Morbi varius nisi eu pharetra molestie. Sed ipsum mauris, tincidunt ut velit ac, luctus egestas mi. Quisque commodo dui in mi aliquam, nec varius nunc luctus
  - component: ShSocial
    props:
      src: "1813265126784393367"
  - component: ShTextImg
    props:
      positionText: left
      spanText: m
      alignText: left
      urlImage: images/news/test-event-raleigh.png
      title: |
       Hello component
      subtitle: |
       Hello subtitle
      text: |
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et ligula quis justo bibendum consequat. Ut auctor diam sit amet diam ornare euismod. [URL](https://docs.google.com/spreadsheets/d/18O4QvBpIGMcXMq3VZMICwYB8L7tyJ11T/edit#gid=1718761465) elit at dapibus commodo. <a href="https://en.wikipedia.org/wiki/Gaius_Maecenas">Maecenas</a> sit amet purus eu metus pharetra pulvinar. In quis scelerisque leo. Praesent scelerisque at nulla non fermentum. Morbi varius nisi eu pharetra molestie. Sed ipsum mauris, tincidunt ut velit ac, luctus egestas mi. Quisque commodo dui in mi aliquam, nec varius nunc luctus
  - component: ShSegment
    slotContent: "Ninjas are fast!"
---
::

## Welcome to OMASpecWorks


::ShMultiColumn
---
ui: 
   wrapper: bg-slate-100 rounded-2xl p-5 border-2
cols: 4
---
    :::ShColumn 
    --- 
    ui: # First Column
       wrapper: m-1
    ---
        ::::ShMicroCard
        ---
        ui:
            wrapper: bg-indigo-100 m-1 
            icon: text-blue-700 w-1/3
        icon: i-eos-icons:rotating-gear
        title: About # First Row
        subtitle: "OMA SpecWorks"
        urlWrapper: /omaspecworks/about/
        ---
        ::::

        ::::ShMicroCard
        ---
        ui:
            wrapper: mt-5
        title: OMA SpecWorks # First Column
        subtitle: Introduction
        urlWrapper: /omaspecworks/about/omaspecworks
        ---
        ::::

        ::::ShMicroCard
        ---
        ui:
            wrapper: mt-5
        title: IPR # First Column
        subtitle: Terms
        urlWrapper: /omaspecworks/about/ipr
        ---
        ::::

        ::::ShMicroCard
        ---
        ui:
            wrapper: mt-5 mb-10
        title: Policies & Terms # First Column
        subtitle: Terms
        urlWrapper: /omaspecworks/about/policies-terms
        ---
        ::::
    :::

    :::ShColumn 
    --- 
    ui: # Second Column
       wrapper:  m-1
    ---
        ::::ShMicroCard
        ---
        ui:
            wrapper: bg-indigo-100 mb-5
            icon: text-blue-700 w-1/4
        icon: i-eos-icons:rotating-gear
        title: Membership # Second Row
        subtitle: OMA SpecWorks
        urlWrapper: /omaspecworks/membership/
        ---
        ::::

        ::::ShMicroCard
        ---
        ui:
            wrapper: mt-5
        title: Join # Second Column
        subtitle: OMA SpecWorks
        urlWrapper: ""
        ---
        ::::

        ::::ShMicroCard
        ---
        ui:
            wrapper: mt-5
        title: Benefits # Second Column
        subtitle: Membership
        urlWrapper: ""
        ---
        ::::
        ::::ShMicroCard
        ---
        ui:
            wrapper: mt-5
        title: Members # Second Column
        subtitle: OMA SpecWorks
        urlWrapper: ""
        ---
        ::::
    :::

    :::ShColumn 
    --- 
    ui: # Third Column
       wrapper: m-1
    ---
        ::::ShMicroCard
        ---
        ui:
            wrapper: bg-indigo-100 
            icon: text-blue-700 w-1/4
        icon: eos-icons:background-tasks
        title: Collaborate # Third Column
        subtitle: OMA SpecWorks
        urlWrapper: ""
        ---
        ::::
        ::::ShMicroCard
        ---
        ui:
            wrapper: mt-5
        title: Affiliates # Third Column
        subtitle: OMA Predecesors
        urlWrapper: ""
        ---
        ::::  
        ::::ShMicroCard
        ---
        ui:
            wrapper: mt-5
        title: Liaisons # Third Column
        subtitle: Standards Flora
        urlWrapper: ""
        ---
        ::::        
    :::

    :::ShColumn 
    --- 
    ui: # Fourth Column
       wrapper: m-1
    ---
        ::::ShMicroCard
        ---
        ui:
            wrapper: bg-indigo-100 
            icon: text-blue-700 w-1/3
        icon: eos-icons:background-tasks
        title: Get Involved # Fourth Column
        subtitle: 
        urlWrapper: ""
        ---
        ::::

        ::::ShMicroCard
        ---
        ui:
            wrapper: mt-5
        title: Contact us # Fourth Column
        subtitle: Talk to us
        urlWrapper: 
        ---
        ::::
        ::::ShMicroCard
        ---
        ui:
            wrapper: mt-5 mb-10
        title: F.A.Q # Fourth Column
        subtitle: Questions & Answers
        urlWrapper: ""
        ---
        ::::
    :::          
::

