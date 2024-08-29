### V1.2.2

### V1.2.1

### V1.2

Version 1.2 of the LwM2M protocol introduced the following new features:

* New transports for LwM2M; this allows LwM2M messaging to be conveyed over MQTT and over HTTP.

* Optimizations for the bootstrapping interface; this reduces the amount of data and the number of messages transmitted during the bootstrapping exchange.

* Optimizations for the registration interface; this reduces the amount of data transmitted during registration exchanges.

* Optimizations for the information reporting interface; observation attributes may now be included in an Observe operation.

* Support for LwM2M gateway functionality; this allows non-LwM2M IoT devices as well as LwM2M devices behind a gateway to be connected to the LwM2M ecosystem and to manage those devices remotely.

* New, highly optimized encoding format based on CBOR called LwM2M CBOR.

* Enhanced functionality for firmware updates.

* Definition of new notification attributes (edge, confirmable notification, and maximum historical queue). Edge allows notifications to be triggered on rising and falling edges. Confirmable notifications allow the control of reliable transmissions of notifications. Maximum historical queue allows the control of time-series data usage.

* Clarifications of object versioning rules.

* Updates to use the latest communication security protocols based on TLS and DTLS 1.3 (as well as the use of the Connection ID).

* Flexibility to control the use of TLS and DTLS 1.3 through configuration information.

* Untangling the relationship of security credentials and their server configuration.

#### V1.2 Documents

<table>
    <caption>Document Listing for LightweightM2M v1.2</caption>
    <thead>
        <tr>
            <th>Doc Ref</th>
            <th>Permanent Document Reference</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>[LightweightM2M_RD]</td>
            <td><a href="https://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-RD-LightweightM2M-V1_2-20201110-A.pdf" target="_blank">OMA-RD-LightweightM2M-V1_2-20201110-A</a></td>
            <td>Requirements Document for LightweightM2M Enabler</td>
        </tr>
        <tr>
            <td>[LightweightM2M_TS_Core]</td>
            <td><a href="https://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Core-V1_2-20201110-A.pdf" target="_blank">OMA-TS-LightweightM2M_Core-V1_2-20201110-A</a></td>
            <td>Core Technical Specification for LightweightM2M Enabler</td>
        </tr>
        <tr>
            <td>[LightweightM2M_TS_Transport]</td>
            <td><a href="https://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Transport-V1_2-20201110-A.pdf" target="_blank">OMA-TS-LightweightM2M_Transport-V1_2-20201110-A</a></td>
            <td>Transport Technical Specification for LightweightM2M Enabler</td>
        </tr>
        <tr>
            <td>[lwm2m-schema]</td>
            <td><a href="https://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-SUP-XML_LWM2M-V1_1-20180710-A.xsd" target="_blank">OMA-SUP-XML_LWM2M-V1_1-20180710-A</a></td>
            <td>LwM2M schema for LwM2M v1.1, file name: LWM2M-v1_1.xsd, path: http://www.openmobilealliance.org/tech/profiles</td>
        </tr>
    </tbody>
</table>

> Note: download the v1.2 Enabler Release Package `.zip` by clicking [here](https://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-ERP-LightweightM2M-V1_2-20201110-A.zip)

#### OMNA Considerations
For LwM2M v1.2:
New LwM2M Objects are listed in Appendix E of [LightweightM2M_TS_Core](https://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-TS-LightweightM2M_Core-V1_2-20201110-A.pdf)

##### OMNA LwM2M-Registry
* Lwm2m Registry in:
    * [GitHub](https://github.com/OpenMobileAlliance/lwm2m-registry)
    * [Registry Page](https://technical.openmobilealliance.org/OMNA/LwM2M/LwM2MRegistry.html)

#### IANA Considerations
For LwM2M v1.2: 
OMA is requesting IANA to register a new media type for LwM2M CBOR in the "Media Types" registry and in the "CoAP Content-Formats" registry.:

* Type name: application
* Subtype name: vnd.oma.lwm2m+cbor
* Required parameters: none
* Optional parameters: none
* Encoding considerations: binary

### V1.1.1 Functionality

Version 1.1.1 of the LwM2M protocol introduced the following new feature:  

* Support for Concise Binary Object Representation (CBOR) format for use with "Read" and "Write" operations on single resources

#### V1.1.1 Documents

<table>
    <caption>Document Listing for LightweightM2M v1.1.1</caption>
    <thead>
        <tr>
            <th>Doc Ref</th>
            <th>Permanent Document Reference</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>[LightweightM2M_RD]</td>
            <td><a href="https://www.openmobilealliance.org/release/LightweightM2M/V1_1_1-20190617-A/OMA-RD-LightweightM2M-V1_1-20180710-A.pdf" target="_blank">OMA-RD-LightweightM2M-v1_1-20180710-A</a></td>
            <td>Requirements Document for LightweightM2M Enabler</td>
        </tr>
        <tr>
            <td>[LightweightM2M_TS_Core]</td>
            <td><a href="https://www.openmobilealliance.org/release/LightweightM2M/V1_1_1-20190617-A/OMA-TS-LightweightM2M_Core-V1_1_1-20190617-A.pdf" target="_blank">OMA-TS-LightweightM2M-Core-v1_1_1-20190617-A</a></td>
            <td>Core Technical Specification for LightweightM2M Enabler</td>
        </tr>
        <tr>
            <td>[LightweightM2M_TS_Transport]</td>
            <td><a href="https://www.openmobilealliance.org/release/LightweightM2M/V1_1_1-20190617-A/OMA-TS-LightweightM2M_Transport-V1_1_1-20190617-A.pdf" target="_blank">OMA-TS-LightweightM2M-Transport-v1_1_1-20190617-A</a></td>
            <td>Transport Technical Specification for LightweightM2M Enabler</td>
        </tr>
        <tr>
            <td>[lwm2m-schema]</td>
            <td><a href="https://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-SUP-XML_LWM2M-V1_1-20180710-A.xsd" target="_blank">OMA-SUP-XML_LWM2M-V1_1-20180710-A</a></td>
            <td>LwM2M schema for LwM2M v1.1, file name: LWM2M-v1_1.xsd, path: http://www.openmobilealliance.org/tech/profiles</td>
        </tr>
    </tbody>
</table>

> Note: download the v1.1.1 Enabler Release Package `.zip` by clicking [here](https://www.openmobilealliance.org/release/LightweightM2M/V1_1_1-20190617-A/OMA-ERP-LightweightM2M-V1_1_1-20190617-A.zip)

#### OMNA Considerations
For LwM2M v1.1:
* LWM2M-v1_1.xsd new LightweightM2M schema for v1.1 protocol.

##### OMNA LwM2M-Registry
* Lwm2m Registry in:
    * [GitHub](https://github.com/OpenMobileAlliance/lwm2m-registry)
    * [Registry Page](https://technical.openmobilealliance.org/OMNA/LwM2M/LwM2MRegistry.html)

#### IANA Considerations
For LwM2M v1.1: 
* OMA is requesting IANA to register a new SenML Label for LwM2M object links in the "Sensor Measurement Lists (SenML) Parameters" registry, "SenML Labels" sub-registry:

    * Name: Object Link Value
    * Label: vlo
    * JSON type: String
    * XML type: string
    * Reference: LwM2M TS v1.1


### V1.1 Functionality

Version 1.1 of the LwM2M protocol introduced the following new features:  

* Enhancement of the LwM2M bootstrapping capabilities allowing for incremental upgrades.  

* Improved support for Public Key Infrastructure (PKI) deployments. 

* Introduction of enhanced registration sequence mechanisms by the LwM2M Client to LwM2M Server(s).

* Support for LwM2M over TCP/TLS to better support firewall and NAT traversal. 

* Better support of LwM2M over Low Power WANs, including 3GPP CIoT & LoRaWAN.

* Extended LwM2M commands to enable Resource Instance level access.

* Performance improvement for retrieving and updating Resources of multiple objects.

* Support for JSON using SenML with CBOR serialization for compressed payload with highly efficient transmission.

* Addition of new data types.

#### V1.1 Documents

<table>
    <caption>Document Listing for LightweightM2M v1.1</caption>
    <thead>
        <tr>
            <th>Doc Ref</th>
            <th>Permanent Document Reference</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>[LightweightM2M_RD]</td>
            <td><a href="https://www.openmobilealliance.org/release/LightweightM2M/V1_1-20180710-A/OMA-ERP-LightweightM2M-V1_1-20180710-A-PDF.zip" target="_blank">OMA-RD-LightweightM2M-v1_1-20180710-A</a></td>
            <td>Requirements Document for LightweightM2M Enabler</td>
        </tr>
        <tr>
            <td>[LightweightM2M_TS_Core]</td>
            <td><a href="https://www.openmobilealliance.org/release/LightweightM2M/V1_1-20180710-A/OMA-TS-LightweightM2M_Core-V1_1-20180710-A.pdf" target="_blank">OMA-TS-LightweightM2M-Core-v1_1-20180710-A</a></td>
            <td>Core Technical Specification for LightweightM2M Enabler</td>
        </tr>
        <tr>
            <td>[LightweightM2M_TS_Transport]</td>
            <td><a href="https://www.openmobilealliance.org/release/LightweightM2M/V1_1-20180710-A/OMA-TS-LightweightM2M_Transport-V1_1-20180710-A.pdf" target="_blank">OMA-TS-LightweightM2M-Transport-v1_1-20180710-A</a></td>
            <td>Transport Technical Specification for LightweightM2M Enabler</td>
        </tr>
        <tr>
            <td>[lwm2m-schema]</td>
            <td><a href="https://www.openmobilealliance.org/release/LightweightM2M/V1_2-20201110-A/OMA-SUP-XML_LWM2M-V1_1-20180710-A.xsd" target="_blank">OMA-SUP-XML_LWM2M-V1_1-20180710-A</a></td>
            <td>LwM2M schema for LwM2M v1.1, file name: LWM2M-v1_1.xsd, path: http://www.openmobilealliance.org/tech/profiles</td>
        </tr>
    </tbody>
</table>

> Note: download the v1.1 Enabler Release Package `.zip` by clicking [here](https://www.openmobilealliance.org/release/LightweightM2M/V1_1-20180710-A/OMA-ERP-LightweightM2M-V1_1-20180710-A-PDF.zip)

#### OMNA Considerations
For LwM2M v1.1:
* LWM2M-v1_1.xsd new LightweightM2M schema for v1.1 protocol.

##### OMNA LwM2M-Registry
* Lwm2m Registry in:
    * [GitHub](https://github.com/OpenMobileAlliance/lwm2m-registry)
    * [Registry Page](https://technical.openmobilealliance.org/OMNA/LwM2M/LwM2MRegistry.html)

#### IANA Considerations
For LwM2M v1.1: 
IANA has registered the following media types for use with LwM2M:

* application/vnd.oma.lwm2m+json
* application/vnd.oma.lwm2m+tlv

OMA is requesting IANA to register a new SenML Label for LwM2M object links in the "Sensor Measurement Lists (SenML) Parameters" registry, "SenML Labels" sub-registry:

   * Name: Object Link Value
   * Label: vlo
   * JSON type: String
   * XML type: string
   * Reference: LwM2M TS v1.1

### V1.0 Functionality
Lightweight M2M 1.0 enabler introduces the following features below for the initial release.

* Simple Object based resource model

* Resource operations of creation/retrieval/update/deletion/configuration of attribute

* Resource observation/notification

* TLV/JSON/Plain Text/Opaque data format support

* UDP and SMS transport layer support

* DTLS based security

* Queue mode for NAT/Firewall environment

* Multiple LwM2M Server support

* Basic M2M functionalities: LwM2M Server, Access Control, Device, Connectivity, Firmware Update, Location, Connectivity Statistics 


## OMA LwM2M Test Specifications

**OMA Enabler Test Specifications** are critical documents developed by the Open Mobile Alliance (OMA) to ensure the interoperability, reliability, and performance of OMA-defined enablers across different devices and platforms. These specifications provide a standardized framework for testing and validating implementations of OMA protocols, ensuring that they conform to the requirements and functional definitions laid out in the corresponding technical specifications.

### Purpose of OMA Enabler Test Specifications

1. **Interoperability:** The primary goal is to ensure that products from different vendors can seamlessly work together within a diverse ecosystem. By following these test specifications, manufacturers and developers can validate that their implementations are interoperable with others that adhere to the same standard.

2. **Compliance:** The test specifications are used to verify that an implementation complies with the OMA-defined protocols and standards. This ensures that any device or software claiming conformance to a particular OMA standard meets the functional and operational requirements set forth by the OMA.

3. **Quality Assurance:** These specifications help in identifying potential issues early in the development process, thereby enhancing the overall quality and robustness of the final product.

4. **Certification:** Successful testing against OMA Enabler Test Specifications can be a prerequisite for certification, which is often required for market acceptance and deployment in operator networks.

5. **Reference for Development:** Developers and engineers use these specifications as a reference during the implementation phase to guide the development process, ensuring that all aspects of the protocol are correctly and fully implemented.

### Components of OMA Enabler Test Specifications

- **Test Requirements Document (TRD):** Outlines the test requirements necessary to verify compliance with the technical specifications.
- **Test Case Descriptions (TCD):** Provides detailed descriptions of each test case, including the objective, preconditions, execution steps, and expected results.
- **Test Procedures:** Describes the procedures to be followed during testing, ensuring consistent and repeatable results.
- **Test Suites:** Collections of related test cases that collectively validate a specific aspect or feature of the enabler.
- **Test Reports:** Documents the results of testing, including any deviations from expected outcomes and their implications.

## OMA Document Types

For the OMA LightweightM2M (LwM2M) protocol, the following test specification documents were created to support its various versions:

### 1. Enabler Release Package (ERP)
- **OMA Enabler Release Package (OMA ERP)** is a comprehensive bundle of specifications, guidelines, and associated documentation provided by the Open Mobile Alliance (OMA). This package facilitates the deployment of specific mobile services or technologies across different networks and devices. Each OMA ERP typically includes:

    1. **Core Specifications**: Detailed technical specifications that define the functionality and requirements of the enabler (e.g., messaging, browsing, or device management).

    2. **Test Cases**: A set of standardized test cases that ensure interoperability and compliance with the defined specifications across different platforms.

    3. **Reference Implementations**: Sample implementations that demonstrate how the specifications can be applied in real-world scenarios.

    4. **Deployment Guidelines**: Best practices and guidelines for network operators, device manufacturers, and service providers to efficiently deploy and integrate the enabler in their systems.

OMA ERPs aim to promote interoperability, reduce fragmentation, and streamline the deployment process of new mobile services, ensuring that different stakeholders in the mobile ecosystem can support and utilize the same technological standards.


### 2. Requirements Document (RD)
- **[LightweightM2M_RD]:** This document outlines the specific requirements for the LwM2M protocol, defining what the protocol must achieve in terms of functionality, interoperability, security, and performance. It serves as the foundation for both technical and test specifications.

### 3. Core Technical Specifications (TS)
- **[LightweightM2M_TS_Core]:** This is the central document that defines the core architecture and functionality of the LwM2M protocol. It details the object model, communication mechanisms, and the overall structure of LwM2M implementations. The test specifications for core functionalities are derived from this document.
  
- **[LightweightM2M_TS_Transport]:** This document specifies the transport mechanisms supported by LwM2M, including UDP, TCP, SMS, and more recently, MQTT and HTTP. It is crucial for ensuring that the protocol operates effectively over various network transports. Test cases specific to transport layers are outlined based on this document.

### 4. Supplemental Specifications (SUP)
- **[LwM2M Schema]:** The LwM2M schema defines the XML data models used in LwM2M. The schema ensures that devices correctly implement and interpret the data exchanged in an LwM2M environment. Testing against this schema ensures data consistency and correctness.

### 5. Test Specification Documents (TS)
- **[LwM2M Test Specification]:** This document includes detailed test cases and procedures tailored for LwM2M implementations. It covers core functionalities, transport-specific tests, and security aspects. The specification ensures that an LwM2M implementation meets all necessary technical requirements and behaves as expected under various scenarios.

### 6. Conformance Test Plan (CTP)
- **[LwM2M CTP]:** This plan outlines the structured testing approach for validating LwM2M implementations. It describes the order of tests, preconditions, and specific environments in which the tests should be executed. It ensures comprehensive coverage of all protocol features.