---
title: # Optional
description: # Optional
---

::ShColumn
    ::ShSegment
    ---
    ui:
        wrapper: group grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-5 opacity-75
    ---
        :::ShMicroCard
        ---
        icon: i-mdi-file-document-box-outline
        title: OMA SpecWorks
        urlWrapper: /omaspecworks/
        ---
        :::

        :::ShMicroCard
        ---
        icon: i-mdi-file-cog-outline
        title: Specifications
        urlWrapper: /specifications/
        ---
        :::

        :::ShMicroCard
        ---
        icon: i-mdi-cellphone-wireless
        title: LwM2M
        urlWrapper: "/lwm2m/"
        ---
        :::

        :::ShMicroCard
        ---
        icon: i-mdi-wrench-outline
        title: Utilities
        urlWrapper: "/utilities/"
        ---
        :::

        :::ShMicroCard
        ---
        icon: mdi:city-variant-outline
        title: uCIFI
        urlWrapper: "/ucifi/"
        ---
        :::

        :::ShMicroCard
        ---
        icon: i-mdi-newspaper-variant-outline
        title: News
        urlWrapper: "/news/"
        ---
        :::

        :::ShMicroCard
        ---
        icon: i-mdi-calendar-check-outline
        title: Events
        urlWrapper: "/oma-events/"
        ---
        :::

        :::ShMicroCard
        ---
        #ui:
            #wrapper: h-20 sm:h-full sm:w-full flex flex-col
            #icon: w-1/3 text-blue-400
            #title: text-white text-xs sm:text-lg
        icon: i-mdi-tools
        title: Tools
        urlWrapper: "/tools/"
        ---
        :::
    ::

    :::ShMicroCard
    ---
    ui:
        flat:
            wrapper: border-2 mt-12 backdrop-blur-sm max-w-xl hover:backdrop-blur-md hover:scale-105 duration-500 ease-in-out hover:border-blue-500
            title: text-white
            subtitle: text-red-500 dark:text-red-500 font-extrabold dark:font-extrabold animate-pulse
            icon: text-white
    layout: flat
    icon: mdi:video-outline
    title: uCIFI - OMA
    subtitle: |
        Register for Webinar
    urlWrapper: "/ucifi/"
    ---
    :::
::