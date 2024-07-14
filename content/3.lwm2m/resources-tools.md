## LwM2M Resources & Tools

<table>
    <caption>What is LwM2M</caption>
    <tr>
        <th>Resource</th>
        <th>Explanation</th>
    </tr>
    <tr>
        <td><a href="https://technical.openmobilealliance.org/OMNA/LwM2M/LwM2MRegistry.html" target="_blank">OMNA Registry</a></td>
        <td>Centralized database for assigning unique Object IDs to IoT devices and services, ensuring seamless interoperability. Click <a href=""><strong>here</strong></a> for more information.</td>
    </tr>
    <tr>
        <td><a href="https://raw.githubusercontent.com/OpenMobileAlliance/LwM2M/development/SUP/LWM2M.xsd?token=GHSAT0AAAAAABZGAUAJW6K33I5BKDUEIOSOZULWQLQ" target="_blank">OMA SenML Units</a></td>
        <td>Standardized measurement units for consistent data interpretation and integration across IoT resources. Click <a href=""><strong>here</strong></a> for more information.</td>
    </tr>
    <tr>
        <td><strong>OMA LwM2M Schemas</strong>: <a href="https://raw.githubusercontent.com/OpenMobileAlliance/lwm2m-registry/prod/LWM2M.xsd" target="_blank">v1.0</a>, <a href="https://raw.githubusercontent.com/OpenMobileAlliance/lwm2m-registry/prod/LWM2M-v1_1.xsd" target="_blank">v1.1</a></td>
        <td>Structured framework defining data organization rules for consistent communication between IoT devices. Click <a href=""><strong>here</strong></a> for more information.</td>
    </tr>
    <tr>
        <td><a href="https://github.com/OpenMobileAlliance/OMA_LwM2M_for_Developers/issues" target="_blank">Report LwM2M Issues</a></td>
        <td>Platform for reporting and tracking bugs to ensure the robustness and reliability of OMA LwM2M specifications. Click <a href=""><strong>here</strong></a> for more information.</td>
    </tr>
    </tr>
        <td><a href="" target="_blank">LwM2M Best Practice</a></td>
        <td>Guidelines for efficient and standardized creation and registration of LwM2M objects to minimize delays and rejections. Click <a href=""><strong>here</strong></a> for more information.</td>
    </tr>
    </tr>
        <td><a href="" target="_blank">LwM2M Product Listing</a></td>
        <td>The LwM2M Product Listing showcases products implementing the OMA LwM2M protocol, validated through Test events, enhancing visibility and trust for companies. Click <a href=""><strong>here</strong></a> for more information.</td>
    </tr>
</table>

<table>
    <caption>LwM2M Tools</caption>
    <tr>
        <th>Tool</th>
        <th>Explanation</th>
    </tr>
    <tr>
        <td><a href="https://wiki-archive.openmobilealliance.org/Tools/Registry-API_25664023.html" target="_blank">LwM2M Registry API</a></td>
        <td>API for accessing detailed metadata and managing IoT objects within the LwM2M ecosystem.</td>
    </tr>
    <tr>
        <td><a href="https://devtoolkit.openmobilealliance.org/OEditor/Legal?back=default.aspx" target="_blank">LwM2M Editor / Validator</a></td>
        <td>Tool for creating, validating, and managing LwM2M objects and resources in compliance with specifications.</td>
    </tr>
    <tr>
        <td><a href="https://github.com/OpenMobileAlliance/OMA-LWM2M-DevKit/blob/master/README.md" target="_blank">LwM2M Developer's Kit</a></td>
        <td>Firefox add-on for developing, testing, and interacting with LwM2M servers and clients.</td>
    </tr>
</table>

### OMNA Registry
The OMA Lightweight M2M (LwM2M) Registry is a centralized database managed by the Open Mobile Alliance Naming Authority (OMNA) that assigns unique Object IDs to various types of devices and services for IoT deployments. It categorizes these Object IDs into several classes, including those produced by OMA (Object IDs 0-1023), reserved for future use (Object IDs 1024-2047), registered by third-party standards organizations (Object IDs 2048-10240), and those registered by companies or individuals (Object IDs 10241-32768). Additionally, there are ranges for company bulk reservations (Object IDs 32769-42768) and for testing purposes (Object IDs 42769-42800). This registry ensures that each Object ID is unique, preventing conflicts and enabling seamless interoperability between different IoT devices and services.

### OMA SenMl Units
<strong>OMA LwM2M adopts SenML</strong> <i>(Sensor Markup Language)</i> Units to ensure standardized and consistent measurement units across IoT resources. By following the rules provided by SenML, OMA LwM2M facilitates interoperability and data exchange among diverse IoT devices and platforms. Using standardized units is crucial for accurately interpreting sensor data, avoiding ambiguity, and ensuring that data from different sources can be seamlessly integrated and compared. This standardization also aids in the development of reliable and scalable IoT solutions, as developers can confidently build applications knowing that the data conforms to a recognized and consistent set of units. The adoption of SenML Units ultimately enhances the efficiency and reliability of IoT ecosystems, fostering innovation and broader adoption of IoT technologies.

### OMA LwM2M Schemas
The <strong>OMA LwM2M Schema</strong> is a structured framework that defines the rules and format for organizing and validating data, ensuring consistent and interoperable communication between IoT devices and services.  The <strong>OMA LwM2M Schema</strong> has undergone significant enhancements from version 1.0 to version 1.1 to better support the evolving needs of IoT deployments. The primary differences between LwM2M Schema v1.0 and v1.1 can be seen in the updated XML schema definitions, which reflect improvements in resource definitions, data type support, and overall schema structure. Version 1.1 introduces additional data types and resource attributes, enhancing the flexibility and expressiveness of the schema. These updates enable more complex IoT use cases and improve compatibility with a wider range of devices and services. Furthermore, the refined schema structure in v1.1 provides better support for modularity and scalability, making it easier for developers to create and manage large-scale IoT solutions. These advancements ensure that OMA LwM2M remains at the forefront of IoT standards, providing robust and future-proof specifications for IoT device management and service enablement.

### Report LwM2M Issues
The <strong>OMA LwM2M for Developers GitHub repository</strong> serves as a crucial platform for industry professionals to report and track bugs related to the OMA LwM2M specifications. This collaborative space allows developers and users to submit issues they encounter, ensuring that problems are documented, reviewed, and addressed efficiently. By facilitating open communication and feedback, the repository helps maintain the robustness and reliability of the LwM2M framework, fostering continuous improvement and innovation within the IoT ecosystem. We encourage all users to actively participate by reporting bugs and contributing to discussions, thereby enhancing the overall quality and functionality of OMA LwM2M specifications.

### LwM2M Best Practices
The document <strong>LwM2M Best Practice Guidelines for the Creation and Registration of LwM2M Objects and Resources</strong> provides comprehensive instructions for the efficient and standardized creation and registration of LwM2M objects. It emphasizes following a set of best practices to streamline the process and minimize delays or rejections. Key recommendations include evaluating existing reusable resources and objects in the OMNA registry to determine if they meet new requirements or if extensions to existing objects are more appropriate than creating new ones. Additionally, the guidelines advise using the LwM2M Editor Tool for tasks like adding licenses and validating objects, and to follow feedback from the Device Management Working Group to ensure compliance and accuracy throughout the registration process. The guidelines also highlight the importance of reserving object IDs through the proper channels and adhering to the specific licensing requirements for each object.

### LwM2M Product Listing
The <strong>OMA LwM2M Product Listing</strong> is a platform showcasing products that implement the OMA LwM2M protocol, developed by various companies that have participated in LwM2M Test events. This listing provides detailed information about each product, including its features and how it utilizes LwM2M for IoT deployments. The benefits to companies include enhanced visibility, validation of their products through TestFest participation, and the ability to demonstrate compliance with industry standards, thereby fostering trust and encouraging adoption by potential customers and partners.

## LwM2M Tools
### LwM2M Service API Registry
<strong>The LwM2M Registry API</strong>, developed and maintained by the Open Mobile Alliance Naming Authority (OMNA)), is a critical tool for accessing metadata information about various objects within the LwM2M ecosystem. Developed by OMA, this API allows users to retrieve detailed metadata for all object versions, specific objects, or the latest object versions through structured URLs. The API provides essential functions such as Objects Discovery and Object Retrieval, with clear error codes to guide users in case of incorrect requests. The metadata includes comprehensive details like object descriptions, identifiers, links to XML descriptions, visibility statuses, technical specifications, unique URNs, and registration ownership. This API is indispensable for developers and organizations looking to integrate or manage IoT devices within the LwM2M framework, ensuring they have access to up-to-date and precise metadata for efficient operation and development.

### LwM2M Editor / Validator
The <strong>LwM2M Editor</strong>, developed by OMA is a pivotal tool provided by the Open Mobile Alliance (OMA) for constructing and validating Objects and Resources within the LightweightM2M (LwM2M) framework. This editor facilitates the creation and management of XML-based objects and resources, ensuring compliance with the LwM2M specifications. Users can import existing OMA-registered objects, create new objects or resources, and utilize various functions such as viewing, exporting, and registering their configurations. The tool supports seamless integration with the OMNA registry and fosters collaboration through GitHub discussions, enhancing the overall efficiency and accuracy in developing LwM2M-enabled applications.

### LwM2M Developer's Kit
The <strong>OMA LWM2M DevKit</strong></a> is a powerful add-on for the Mozilla Firefox Web browser, designed to facilitate the development and testing of the OMA Lightweight M2M protocol. This tool allows developers to manually interact with an LWM2M Server directly from their browser, providing an interactive environment to explore and understand machine-to-machine communication protocols. Key features of the DevKit include support for OMA Lightweight M2M 1.0, virtual LWM2M clients, and editing capabilities for object instances and resources. The tool also offers comprehensive interfaces for client registration, device management, service enablement, and information reporting, complete with logging and visualization of LWM2M operations and their CoAP messages. Available as both a release version on the Mozilla Add-ons site and a developer version via GitHub, the OMA LWM2M DevKit is an essential resource for developers aiming to leverage the latest advancements in machine-to-machine communication technology.

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
