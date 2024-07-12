## LwM2M Resources

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
    <tr>
        <td>LwM2M Units</td>
        <td><a href="https://raw.githubusercontent.com/OpenMobileAlliance/LwM2M/development/SUP/LWM2M.xsd?token=GHSAT0AAAAAABZGAUAJW6K33I5BKDUEIOSOZULWQLQ" target="_blank">OMA SenML Units</a></td>
        <td></td>
    </tr>
    <tr>
        <td>LwM2M Schema</td>
        <td><a href="https://raw.githubusercontent.com/OpenMobileAlliance/LwM2M/development/SUP/LWM2M.xsd?token=GHSAT0AAAAAABZGAUAJW6K33I5BKDUEIOSOZULWQLQ" target="_blank">OMA LwM2M Schema v1.1</a></td>
        <td></td>
    </tr>
    <tr>
        <td>Report LwM2M Issues</td>
        <td><a href="https://github.com/OpenMobileAlliance/OMA_LwM2M_for_Developers/issues" target="_blank">OMA LwM2M for Developers</a></td>
        <td></td>
    </tr>
    <tr>
        <td>OMNA Registry</td>
        <td><a href="https://technical.openmobilealliance.org/OMNA/LwM2M/LwM2MRegistry.html" target="_blank">LwM2M Registry in OMA Naming Authority (OMNA) </a></td>
        <td></td>
    </tr>
    </tr>
        <td>Best Practice for the Creation & Registration of LwM2M Objects/Resources</td>
        <td><a href="" target="_blank">LwM2M Best Practice</a> </br>DO's, and </br> DON'Ts</td>
        <td></td>
    </tr>
</table>


### LwM2M Tools

<table>
    <caption>LwM2M Tools</caption>
    <tr>
        <th>Tool</th>
        <th>Explanation</th>
    </tr>
    <tr>
        <td>LwM2M Service Registry API</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>LwM2M Editor / Validator</td>
        <td></td>
        <td></td>
    </tr>
        <tr>
        <td>LwM2M Developer's Kit</td>
        <td></td>
        <td></td>
    </tr>
</table>

### LwM2M Guidelines

This content provides guidance on how to define new LwM2M Objects and/or Resources.

>A more detailed explanation can be found in this document: [Guidelines for the Creation and Registration of LwM2M Objects & Resources](http://www.openmobilealliance.org/documents/whitepapers/OMA-ORG-Guidelines_Creation_Registration_LwM2M_Objects_Resources-V1_0_1-20190115-A.pdf)


### LwM2M Objects

#### `Object License`
 * Software license inside of the Object.
   * Each Object in the OMNA LwM2M Registry MUST have a license. Currently, the tool provides only three different type of licenses:
     * `BSD-3 Clause license`. This is the only license that is accepted by One Data Model Registry, (ODM). ODM has created a language that can represent any object/model defined by Standards Development Organizations. For more information see [One Data Model](https://github.com/one-data-model).
     * `OMA BSD-3 license`. To be used by OMA Working Groups only.
     * `Your own license`. Please note that licenses that are not popular, e.g. (MIT, Apache, etc) are strongly discouraged; your Object won't be registered with One Data Model and more than probably won't be used by other members of the community.

#### `Name`
 * Name of the Object.
   * For details see ['Name'](https://github.com/OpenMobileAlliance/lwm2m-registry/wiki/Guidelines#name-1) below.
 * The `Name` value is duplicated in the title of the tool and in the definition of the Object. There is only one single `Name` value.

#### `Description`
 * The object description element should contain a precise and short definition of the purpose of the object. 
 * This value is used to populate the description field in the [OMNA LwM2M Registry](http://www.openmobilealliance.org/wp/OMNA/LwM2M/LwM2MRegistry.html). 
 * The length of the description is limited to **134** characters.

### Object Definition

####  Operations
* These are operations related to the [LwM2M Editor](https://devtoolkit.openmobilealliance.org/OEditor/):
  * `Edit`
  * `Save`

#### `Name`
 * `Name` of the Object, is the value that will appear inside the Object file.
 * If the `Name` has more than one word, first letter of each word should be capitalized. 
 * **NOTE:** The **IPSO Working Group**, pay special attention to the meaning of the name. The names should be very specific rather than general. 
>To request support and direction, please contact the **IPSO Working Group** via [GitHub Issues](https://github.com/OpenMobileAlliance/lwm2m-registry/issues).

#### [Object ID](https://technical.openmobilealliance.org/OMNA/LwM2M/LwM2MRegistry.html)
 
 >**Note:**
 >`Object ID` is formally allocated by OMA staff. 
 >
 >If you would like to reserve an ID please get in contact via
 >[GitHub Issues](https://github.com/OpenMobileAlliance/lwm2m-registry/issues) or via email: helpdesk@omaorg.org.

#### `ObjectVersion`
 * This is related to the version of the Object.
 >Please ensure that the version is aligned with the definition of the ['URN'](https://github.com/OpenMobileAlliance/lwm2m-registry/wiki/Guidelines#object-urn).

#### `LWM2MVersion`
 * The value of this element indicates the version of the **LwM2M protocol**.
 >Please ensure that this value matches the schema defined in the attribute, e.g.: ```xsi:noNamespaceSchemaLocation="http://.../LWM2M-v1_1"```.
 >
 >**NOTE:** OMA may introduce new schemas, e.g.: ```LWM2M.xsd```, ```LWM2M-v1_1.xsd```, in the future.

#### `Object URN`
 * The composition of this element is: ```urn:oma:lwm2m:<oma|ext|x>:<ObjectID>:<version>```
   * The category: indicates different ranges and stakeholders as described in the `Object ID`.

     * `oma`- Objects Produced by OMA. Only OMA can use this element 
        * e.g urn:oma:lwm2m:**oma**:`<ObjectID>:<version>`
     * `ext`- Objects registered by 3rd party standards organisations or alliances 
        * e.g urn:oma:lwm2m:**ext**:`<ObjectID>:<version>`
     * `x`- Objects registered by companies or individuals 
        * e.g urn:oma:lwm2m:**x**:`<ObjectID>:<version>`

 * `version` indicates the `ObjectVersion`:
   * for `1.0` is omitted from the urn,e.g.: `urn:oma:lwm2m:x:10241`
   * for version increments the urn is updated, e.g.`1.1` **must** be included: `urn:oma:lwm2m:x:10241:1.1`
 
#### `Instances`
 * Two possible values:
    * `multiple` - Indicates that it is possible to have more than one instantiation of the Object.
    * `single` - Indicates that is only one instantiation of the Object.

#### `Mandatory`
 * `Optional` - It is the default value. 
 * `Mandatory` - Value is restricted to some Objects defined by **OMA DMSE Working Group**.

### Resource Definition

#### Editing Operations
 * These are operations related to the [LwM2M Editor](https://devtoolkit.openmobilealliance.org/OEditor/):
  * `Edit`
  * `Save`
  * `Cancel`
  * `Delete`
  * `Move` (only available under Resources Definitions)

#### `Resource ID`
 * There are three types of Resources ID's:
   * `Common`
     * It doesn't need to be registered with [OMNA LwM2M Registry](http://www.openmobilealliance.org/wp/OMNA/LwM2M/LwM2MRegistry.html).
     * Range: `0 - 2047`
     * The `ResourceID` must be unique within the Object.
   >Please ensure that the range is sorted out in ascending order, e.g.: `0`, `1`, `2`, etc.

   * `Reusable`
     * Range: `2048 - 26240`.
     * It **MUST** be registered with [OMNA LwM2M Registry](http://www.openmobilealliance.org/wp/OMNA/LwM2M/LwM2MRegistry.html).
       * You can use the [LwM2M Editor](https://devtoolkit.openmobilealliance.org/OEditor/) for this registration.
    >Please note that Reusable Resources are selected by entry the number of the Reusable Resource in the Editor.
    >The tool populates, directly, the values for the Reusable Resource from the OMNA LwM2M Registry. 
    >According to the Technical Specifications. 
    >The following elements in a Reusable Resource cannot be modified:
    >  - `Name`, 
    >  - `ResourceID`,
    >  - `Operations`,
    >  - `Type`,
    >  - `Range or Enumeration`,
    >  - `Units`, and
    >  - `Description`
    >
    >If you need to customize the Reusable Resource `Description`, then use `Edit Additional Definition` button at the end of the table.

   * `Private`
     * It doesn't need to be registered with [OMNA LwM2M Registry](http://www.openmobilealliance.org/wp/OMNA/LwM2M/LwM2MRegistry.html).
     * Range: `26241 - 32768`.
     * It is open to re-use.


#### `Resource Name`
 * If the Resource is composed by more than one name, then please capitalize and separate each word.

#### `Resource Operations`
 * The [LwM2M Editor](https://devtoolkit.openmobilealliance.org/OEditor/) restricts the possible values.
 >Please note that if you select the option `E`-`Execute` then, the `Type` **must** be empty.

#### `Resource Instances`
 * The [LwM2M Editor](https://devtoolkit.openmobilealliance.org/OEditor/) provides two possible options:
   * `Multiple`
   * `Single`

#### `Resource Mandatory`
 * This element has two possible values:
   * `Mandatory`
     * It implies that the `Resource` **must** be present as soon as the Object is instantiated.

   * `Optional`
     * It indicates that this `Resource` in that particular Objects is **optional**.

#### `Resource Type`
  * The [LwM2M Technical Specifications](http://www.openmobilealliance.org/release/LightweightM2M/) define several  `Type`'s.

#### `Resource Range or Enumeration`
 * Machine-readable definition of valid values for the resource. 
 * Ranges of values are expressed with **two** dots, e.g.: '0..250'. List of valid values can be given as comma separated list. See [Appendix D of LwM2M TS 1.1.1](http://www.openmobilealliance.org/release/LightweightM2M/V1_1_1-20190617-A/OMA-TS-LightweightM2M_Core-V1_1_1-20190617-A.pdf) for details. 
* Explanation of values (if not obvious from the context) should be given in the resource description. 

#### `Resource Units`
 * The `Units` defined in OMA LwM2M Objects are defined by [SenML - Sensor Measurement Lists](https://www.iana.org/assignments/senml/senml.xhtml).
 * In addition to [SenML](https://www.iana.org/assignments/senml/senml.xhtml `Units` two extra values have been added to this list:
   * `TBD` - *To Be Defined*
     * This value is used when none of the `Unit` symbols in the drop-menu list are suitable.
       * This value will trigger the **IPSO WG** to define a suitable `Unit`.
   * `blank` 
     * This value can be used when no `Unit` is necessary. 

 >Please, send your `Unit` suggestion to the **IPSO WG** via [GitHub Issues](https://github.com/OpenMobileAlliance/lwm2m-registry/issues).  
 >**IPSO WG** will evaluate if a new `Unit` value will be sent to [IANA](https://www.iana.org/assignments/senml/senml.xhtml) for registration.

The following guidelines should be followed to maximize interoperability across uses of the units:
* Existing unit identifiers, when available, MUST be used (there must be only one unit identifier for each unit)
* When selecting a unit, the non-scaled SI units SHOULD be preferred over-scaled units (e.g., "m/s" instead of "km/h" for speed)
  * certain scaled units (e.g., "km/h" and "kWh") are being registered to enable use of units for legacy models and in scenarios where scaled units is the industry norm; however number of registered scaled units should be minimal
* There needs to be a compelling use case for registering new units; a reference to the use of the new unit in standards specifications is recommended
  * units that are specific to a single use case or user should not be registered; for such use the unit field can be left empty and semantics of the value can be explained in the description of the resource.  


#### `Resource Description`
 * Be precise and short.
 >Note: Reusable Resources `Description` is fixed during initial definition and must not be changed when used in new objects. If context-specific description of a resource is needed, the object description can be used for this purpose.
