---
title: LwM2M Registry
description:
layout: doc
---

## Overview
OMNA can provide you with a unique Object or/and Resource Identifier: (Object ID) or (Resource ID).

To register a new (Object ID) or (Resource ID), your submission will be redirected to GitHub Issues in [lwm2m-registry](https://github.com/OpenMobileAlliance/lwm2m-registry/issues).

OMA has developed an editor for creating LwM2M Objects & Resources.

- The LwM2M Editor can be accessed here: [Editor](https://openmobilealliance.org/lwm2m-editor).
- The XML schemas used by the LwM2M Editor can be found here: [LWM2M.xsd](https://openmobilealliance.org/lwm2m.xsd) and [LWM2M-v1_1.xsd](https://openmobilealliance.org/lwm2m-v1_1.xsd).
- The OMA Guidelines for the Creation and Registration of LwM2M Objects & Resources can be found here: [Guidelines](https://openmobilealliance.org/guidelines).
- Introduction to LightweightM2M can be found here: [Introduction](https://openmobilealliance.org/introduction).
- Best Practices for LwM2M can be found here: [Best Practice](https://openmobilealliance.org/best-practice).
- LwM2M Registry API: [LwM2M Registry API](https://openmobilealliance.org/lwm2m-registry-api).

## ObjectID Classes

<table>
  <tr>
    <th>Category</th>
    <th>Label</th>
    <th>URN</th>
    <th>Object ID Range</th>
    <th>Description</th>
    <th>Operations</th>
  </tr>
  <tr>
    <td>OMA</td>
    <td>oma</td>
    <td><code>urn:oma:lwm2m:oma:&lt;id&gt;:&lt;version&gt;</code></td>
    <td>0 - 1023</td>
    <td>Objects Produced by OMA. Only OMA can use this range.<br>0-499 DM&amp;SE Working Group<br>500-1023 IPSO Working Group</td>
    <td rowspan="7"><a href="" alt=""><img scr="carbon:view-filled" alt="View"></a>  <a href="" alt=""><img scr="icon-park:write" alt="Register"></a></td>
  </tr>
  <tr>
    <td>Reserved</td>
    <td>reserved</td>
    <td><code>n/a</code></td>
    <td>1024 - 2047</td>
    <td>Reserved for future use</td>
  </tr>
  <tr>
    <td>SDO</td>
    <td>ext</td>
    <td><code>urn:oma:lwm2m:ext:&lt;id&gt;:&lt;version&gt;</code></td>
    <td>2048 - 10240</td>
    <td>Objects registered by 3rd party standards organisations or alliances.</td>
  </tr>
  <tr>
    <td>Vendors</td>
    <td>x</td>
    <td><code>urn:oma:lwm2m:x:&lt;id&gt;:&lt;version&gt;</code></td>
    <td>10241 - 32768</td>
    <td>Objects registered by companies or individuals.</td>
  </tr>
  <tr>
    <td>Company Reserved</td>
    <td>x</td>
    <td><code>urn:oma:lwm2m:x:&lt;id&gt;:&lt;version&gt;</code></td>
    <td>32769 - 42768</td>
    <td>Company bulk reservations of up to 50 Object IDs. This range is to create private LwM2M Objects that are not published on the OMNA Lightweight Object Registry.</td>
  </tr>
  <tr>
    <td>Test</td>
    <td>x</td>
    <td><code>urn:oma:lwm2m:x:&lt;id&gt;:&lt;version&gt;</code></td>
    <td>42769 - 42800</td>
    <td>Object IDs for testing purpose. These IDs MUST NOT be used in production as collisions with other Object IDs are possible.</td>
  </tr>
  <tr>
    <td>Reserved</td>
    <td>n/a</td>
    <td><code>n/a</code></td>
    <td>42801 - 65534</td>
    <td>Reserved for future use.</td>
  </tr>
</table>
