---
title: SPECIFICATIONS
layout: doc
---
::ShMultiColumn
---
cols: 2 
---
    ::ShSegment
    ---
    ui:
        wrapper: rounded-lg
    ---
    <figure>
    <img src="/images/specifications/oma-specs-resources.png" class="rounded-lg">
    </figure>
    ::
    
    
    ::ShMultiColumn
    ---
    cols: 3 
    ---
        :::ShColumn 
        --- 
        ui: # First Column
        ---
            ::::ShMicroCard
            ---
            ui:
                wrapper: bg-[#cddcec] bg-gradient-to-b from-primary/[0.5] dark:bg-gradient-to-t dark:from-primary dark:bg-primary-900
                icon: w-1/4
            icon: tabler:search
            title: Search # First Row
            subtitle: OMA Documentation
            urlWrapper: "/specifications/#exploring-oma-specifications"
            ---
            ::::

            ::::ShMicroCard
            ---
            ui:
                wrapper: mt-5
                icon: w-1/4
            icon: i-heroicons:puzzle-piece
            title: by Specifications # First Column
            subtitle: OMA Baselines
            urlWrapper: "/specifications/#search-by-specific-document"
            ---
            ::::

            ::::ShMicroCard
            ---
            ui:
                wrapper: mt-5
                icon: w-1/3
            icon: codicon:versions
            title: by Enabler # First Column
            subtitle: OMA Enablers
            urlWrapper: "/specifications/#search-by-project-or-enabler"
            ---
            ::::

            ::::ShMicroCard
            ---
            ui:
                wrapper: mt-5
                icon: w-1/5
            icon: i-oui:folder-open
            title: by Public Documents # First Column
            subtitle: OMA Public Documentation
            urlWrapper: "/specifications/#oma-public-documents"
            ---
            ::::
        :::

        :::ShColumn 
        --- 
        ui: # Second Column
        ---
            ::::ShMicroCard
            ---
            ui:
                wrapper: bg-[#cddcec] bg-gradient-to-b from-primary/[0.6] dark:bg-gradient-to-t dark:from-primary dark:bg-primary-900
                icon: w-1/3
            icon: i-eos-icons:installing
            title: Registries # Second Row
            subtitle: OMNA Registries
            urlWrapper: "/specifications/#oma-registries-overview"
            ---
            ::::

            ::::ShMicroCard
            ---
            ui:
                wrapper: mt-5
                icon: w-1/3
            icon: uit:slack-alt
            title: LwM2M # Second Column
            subtitle: OMNA Registry
            urlWrapper: "/specifications/#oma-lwm2m-registry"
            ---
            ::::

            ::::ShMicroCard
            ---
            ui:
                wrapper: mt-5
                icon: w-1/4
            icon: eos-icons:products-outlined
            title: Enablers # Second Column
            subtitle: OMNA Registries
            urlWrapper: "/specifications/#omna-enabler-registries"
            ---
            ::::
        :::

        :::ShColumn 
        --- 
        ui: # Third Column
        ---
            ::::ShMicroCard
            ---
            ui:
                wrapper: bg-[#cddcec] bg-gradient-to-b from-primary/[0.6] dark:bg-gradient-to-t dark:from-primary dark:bg-primary-900
                icon: w-1/2
            icon: i-eos-icons:atom-electron
            title: API's # Third Column
            subtitle: OMA API's
            urlWrapper: "/specifications/#oma-api-inventory"
            ---
            ::::

            ::::ShMicroCard
            ---
            ui:
                wrapper: mt-5
                icon: w-1/6
            icon: i-pajamas:comparison
            title: LwM2M Registry API # Third Column
            subtitle: LwM2M Registry
            urlWrapper: "/specifications/#oma-lwm2m-registry-api"
            ---
            ::::

            ::::ShMicroCard
            ---
            ui:
                wrapper: mt-5
                icon: w-1/4
            icon: i-eos-icons:ingress
            title: Enablers API's # Third Column
            subtitle: OMA Enablers
            urlWrapper: "/specifications/#oma-api-table"
            ---
            ::::      
        :::      
    ::
    
::


## Exploring OMA Specifications

Unlock the Power of OMA's Enablers: With over 220 Enablers, each available in multiple release versions, OMA offers a vast range of possibilities. Explore this wealth of information using our two simple search methods:

1. **Search by Specific Document**: Find a specific document quickly by entering its title, keyword, or document number.

2. **Search by Project or Enabler**: Explore all documents related to a particular project or Enabler by selecting the relevant category.

These methods make it easy to find the technical specifications you need.

## Search by Specific Document
Finding the right documents for each OMA Enabler Release is now easier and more efficient. Follow these steps to find the documentation you need:

1. **Search by Enabler Name**: Enter the name of the Enabler in the search bar. For more accurate results, include specific terms related to the Enabler's functionality or release version.

    * **Example**: For documents related to the "Messaging" Enabler, you might search for "Messaging Enabler v1.2".

2. **Filter Your Results**: Use the advanced filtering options to narrow down your search. You can filter by:

    * **Version**: Specify the version of the Enabler.
    * **Status**: Choose between approved, candidate, or historic releases.
    * **Document Type**: Select the type of document, such as technical specifications, guidelines, or release notes.

3. **Keyword Search**: Use keywords related to the content you need. This can include terms from the document's scope or key features of the Enabler.

> Note: The publications listed in this table include the approved versions for each OMA Enabler and the latest candidates for release versions that still need approval.

> Note: Within the Enabler filter column, the assigned number for each Enabler represents the number of associated documents for that search.

{DYNAMIC TABLES FOR DOCUMENTATION}

## Search by Project or Enabler

Our publications table includes all the resources for approved, candidate, and historic OMA Enabler Releases. Use this feature to uncover dedicated resources for each Enabler Release:

1. **Enter Keywords**: Input keywords associated with the Enabler Name to get a comprehensive breakdown of resources.
2. **Review Results**: This efficient search method will streamline your quest for information, providing a complete list of resources.

By following these steps, you can efficiently locate the OMA documentation you need, tailored to your specific requirements.

{RESOURCE TABLES PER ENABLER}

## OMA Public Documents
This section offers publicly available documents that are important resources beyond our technical specifications. These include contributions from various working groups such as Architecture, Content Delivery, and Device Management & Service Enablement, each providing valuable insights into their areas. We also have white papers on topics like managing non-IP devices in cellular IoT networks and preparing for 5G, along with guidelines for creating and registering LwM2M objects and logging reusable resources. Additionally, our repository includes Birds of Feathers sessions, an extensive OMA dictionary, and key external references, supporting comprehensive industry knowledge and sharing.

{TABLE OF PUBLIC DOCUMENTS}
https://technical.openmobilealliance.org/public_documents.html

## OMA Registries Overview
The Open Mobile Naming Authority (OMNA) ensures seamless integration and interoperability by managing names and numbers for OMA technologies, including the Lightweight M2M (LwM2M) Registry and other active registries. OMNA simplifies the process and provides clear instructions, making it easy for users to navigate and find necessary information.

### OMA LwM2M Registry

The Lightweight M2M (LwM2M) Registry is supported by OMNA. This registry focuses on managing names and numbers specific to LwM2M implementations, ensuring seamless integration and interoperability within the LwM2M ecosystem.

By simplifying the process and providing clear instructions, we aim to make it easy for users to navigate the OMNA system and find the information they need efficiently.

The Open Mobile Naming Authority (OMNA) is responsible for managing names and numbers to ensure interoperability and compatibility among implementations using OMA technology. OMNA handles names and numbers not managed by other bodies like IANA.

## OMNA Enabler Registries
In addition to the LwM2M Registry, OMNA manages several other active registries. These registries ensure consistent use of names and numbers across various OMA technologies, supporting interoperability and compatibility among different implementations.

### How the OMNA Process Works

The OMNA process, currently based on the WINA process established by WAP, guides the allocation of names and numbers. Until an OMA-specific version is developed, use the WAP WINA process document as a reference.

### Submitting Requests for Assigned Names or Numbers

To request an OMNA assigned name or number:

1. **Fill Out the OMNA Request Form**: Select the appropriate Name Space.
2. **Review Process**: Your request will be reviewed by the OMNA Secretary and the Release Planning and Management Committee.
3. **Assignment and Recording**: Once approved, the name or number will be recorded in the OMNA database.

You can find the request form on the relevant pages listed below.

### OMNA Administration

OMNA is administered by the OMNA Secretary. If you have any comments or questions about OMNA or its processes, please contact the OMNA Secretary through the OMA Contacts page.

### OMNA Name and Number Database

OMNA maintains several name and number registries. These registries help ensure consistent use of names and numbers across implementations.

The following name and number registries are currently maintained by OMNA.

{OMNA REGISTRY TABLE}

### OMA LwM2M Registry API
The OMA LwM2M Registry API, also known as the OMNA (OMA Naming Authority), provides essential tools and information for interacting with the OMA Registry. This documentation outlines the available functionalities of the LwM2M Registry API version 1, offering comprehensive details on how to access and retrieve metadata about various objects within the registry.

**Base URL for the Registry API**:
http://www.openmobilealliance.org/api/

#### API Functions and Endpoints
##### Objects Discovery:

* **Endpoint**: lwm2m/v1/Object
    * **Description**: Retrieve a JSON file containing metadata information on all object versions.
* **Endpoint**: lwm2m/v1/Object?ObjectVersion=latest
    * **Description**: Retrieve a JSON file containing metadata information with the latest object versions.

##### Get an Object:

* **Endpoint**: lwm2m/v1/Object?ObjectID=12
    * **Description**: Retrieve a JSON file with metadata information on Object 12.
* **Endpoint**: lwm2m/v1/Object?ObjectID=12&ObjectVersion=latest
    * **Description**: Retrieve a JSON file with metadata information on the latest version of Object 12.
* **Endpoint**: lwm2m/v1/Object?ObjectID=12&ObjectVersion=1.0
    * Description: Retrieve a JSON file with metadata information on version 1.0 of Object 12.
    * >Note: When specifying an ObjectVersion other than "latest", the ObjectID must be included.
#### Error Codes
* **HTTP 400**: ObjectID must be included when ObjectVersion is set to "latest".
* **HTTP 404**: The specified ObjectID and/or ObjectVersion is not found in the registry.

### Metadata Information
The metadata provided by the API defines and classifies objects within the OMA system. This includes descriptions, object names, unique URNs, links to XML descriptions, and more. Key metadata elements include:

* **Description**: Description of the object.
* **Label**: Identifier for who has defined the object (OMA, external SDO, private registration).
* **Name**: Object name.
* **ObjectID**: Unique identifier for the object.
* **ObjectLink**: URL to the XML file describing the object, with visibility settings.
* **SpecLink**: URL to the Technical Specifications, with visibility settings.
* **URN**: Unique URN for the object.
* **Owner**: Organization name that registered the object.
* **Version**: Object version.
* **VortoLink**: DEPRECATED. URL to this object in Vorto.

This comprehensive API documentation ensures users can effectively interact with and retrieve vital information from the OMA LwM2M Registry.


## OMA API Inventory
This section showcases the API specifications managed by the Open Mobile Alliance (OMA), organized by protocol bindings such as RESTful, SOAP Web Services, and LDAP. You'll find a comprehensive list of APIs under each protocol binding, with detailed descriptions to help you navigate and understand their functions. This inventory serves as a resource for easily accessing and comprehending the available APIs and their uses.

* **RESTful APIs**: These APIs use the REST architectural style with an HTTP protocol binding. API operations are mapped to HTTP verbs (GET, POST, PUT, DELETE), allowing clients to query or modify the current state of a resource.

* **SOAP Web Services APIs**: These APIs utilize a SOAP binding, where API operations and their input parameters are encapsulated within an XML document sent via an HTTP POST method.

* **LDAP APIs**: These APIs bind operations to specific LDAP messages, such as AddRequest, SearchRequest, ModifyRequest, and DelRequest, to perform directory services tasks.

{OMA API TABLE}
### OMA API Table