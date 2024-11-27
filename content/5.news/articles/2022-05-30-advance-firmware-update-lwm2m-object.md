---
layout: articles
urlImage: /images/news/micro-controllers.png
imageBackground: ""
title: Advanced LwM2M Firmware Update Object
subtitle: OMA SpecWorks is developing a new, advanced LwM2M Firmware Object
rightLabel: OMA SpecWorks
leftLabel: 2022-May-30
cardID: 40
tags: 
    - microcontrollers
---

Advanced Firmware Update Object – [OMASpecWorks](https://www.openmobilealliance.org/) is developing a new, advanced Firmware Object using the [LwM2M](https://lwm2m.openmobilealliance.org/) protocol to support emerging microcontrollers with multiple instances of firmware.

<!--more-->

The [LwM2M](https://lwm2m.openmobilealliance.org/) specifications define a Firmware Update Object, which allows a LwM2M Server to determine the firmware version running on the device, to update firmware on the device and to monitor the progress of the update. This Firmware Update Object has been widely implemented and is in deployment today in various IoT devices.

The firmware update process has become more complex with the advanced microcontrollers that are new to the market, since firmware can now be composed of multiple images. 

Examples include:
- microcontrollers containing separate images for a bootloader, modem firmware and application firmware,
- microcontrollers with multiple cores, and
- microcontrollers using modern security features, like TrustZone, with firmware partitioned into secure and non-secure processing environments.

While these firmware images can be updated independently, they cannot be activated or deactivated, or installed independently without considering the dependencies.  Additionally, each may require a device restart to apply the upgrade.

To maintain backwards compatibility with the single firmware image supported by the LwM2M Firmware Update Object, and to offer solutions for high-end IoT devices, the [DMSE Working Group](/omaspecworks/collaborate/working-groups) aims to start work on an Advanced Firmware Update Object using the [LwM2M](/lwm2m/whatis) protocol.

