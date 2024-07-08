## What is LwM2M

<table>
    <caption>What is LwM2M</caption>
    <tr>
        <th>Concept</th>
        <th>Explanation</th>
        <th>Diagram</th>
    </tr>
    <tr>
        <td>LightweightM2M (LwM2M) Enabler</td>
        <td>
            The LWM2M Enabler has two components, LWM2M Server and LWM2M Client.<br><br>
            The LWM2M Device acts as a LWNM2M Client and the M2M service, platform or application acts as the LWM2M Server.
        </td>
        <td></td>
    </tr>
    <tr>
        <td>LightweightM2M Interfaces & functions</td>
        <td>
            Four interfaces are designed between these two components as shown below:<br><br>
            <ul>
                <li>Bootstrap</li>
                <li>Client Registration</li>
                <li>Device management and service enablement</li>
                <li>Information Reporting</li>
            </ul>
        </td>
        <td></td>
    </tr>
    <tr>
        <td>Resource Model</td>
        <td>
            The LWM2M Enabler defines a simple resource model where each piece of information made available by the LWM2M Client is a Resource.<br><br>
            Resources are logically organized into Objects. The figure illustrates this structure, and the relationship between Resources, Objects, and the LWM2M Client.<br><br>
            The LWM2M Client may have any number of Resources, each of which belongs to an Object.<br><br>
            Resources and Objects have the capability to have multiple instances of the Resource or Object.<br><br>
            Resources are defined per Object, and each Resource is given a unique identifier within that Object.<br><br>
            Each Object and Resource is defined to have one or more operations that it supports.<br><br>
            A Resource MAY consist of multiple instances called a Resource Instance as defined in the Object specification.
        </td>
        <td></td>
    </tr>
</table>
