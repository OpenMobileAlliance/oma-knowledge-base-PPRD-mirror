// plugins/filter-common-objects.ts
import * as convert from 'xml-js';

export default defineNuxtPlugin((nuxtApp) => {

/*
       <!-- Resource ID of the reusable resource -->
    <Item ID="4000">
        <!-- Name of the reusable resource -->
        <Name>ObjectInstanceHandle</Name>
        <!-- Allowed Operation on the reusable resource-->
        <Operations>R</Operations>
        <!-- Type of the reusable resource -->
        <Type>Objlnk</Type>
        <!-- Range/Enumeration of the reusable resource -->
        <RangeEnumeration></RangeEnumeration>
        <!-- Unit of the reusable resource -->
        <Units></Units>
        <!-- Name of the organization that has registered the object -->
        <Submitter>OMA</Submitter>
        <!-- Description of the reusable resource -->
        <Description>
          <![CDATA[The object link is used to refer an Instance of a given Object. An Object link value is composed of two concatenated 16-bit unsigned integers following the Network Byte Order convention. The Most Significant Halfword is an Object ID, the Least Significant Halfword is an Object Instance ID. An Object Link referencing no Object Instance will contain the concatenation of 2 MAX-ID values.]]>
        </Description>
        <!-- Link to the technical specification (word, pdf etc.) -->
        <TS></TS>
        <!--    0 => if link to TS should not be visible, 1 => if link to TS should be visible (default) -->
        <TSLink>0</TSLink>
      </Item>
*/

  type commonObject = {
    resourceID: string;
    resourceName: string;
    accessType: string;
    mandatory: string; 
    type: string;
    range: string;
    units: string;
    submitter: string;
    description: string;
    tsLink: string;
  }

  const filterCommonObjects = (xmlString: string): commonObject[] | null => {

    const xmlDoc = convert.xml2js(xmlString, {compact: true});
    if (!xmlDoc) {
      console.error("No valid XML first node found.");
      return null;
    }

    const result: commonObject[] = [];

    const items = xmlDoc.LWM2M?.Object?.Resources?.Item

    for (let i = 0; i < items.length; i++) {
      const child = items[i];

      const resourceID = child?._attributes?.ID;
      const resourceName = child['Name']?._text;
      const accessType = child['Operations']?._text;
      const multipleInstance = child['MultipleInstances']?._text;
      const mandatory = child['Mandatory']?._text;
      const type = child['Type']?._text;
      const range = child['RangeEnumeration']?._text;
      const units = child['Units']?._text;
      const submitter = child['Submitter']?._text;
      const description = child['Description']?._cdata;
      const TS = child['TS']?._text;
      const TSLink = child['TSLink']?._text;

      let tsLink = ""

      if (TS && TS.length > 0 && TSLink && TSLink === '1' && resourceName) {
        const docName = TS.split('/').pop()
        tsLink = `<a href="${TS}" target="_blank" title="${docName}">${resourceName}</a>`
      } else {
        tsLink = resourceName
      }

      const newItem: ddfObject = {
        resourceID: resourceID?.length > 0 ? resourceID : "" ,
        resourceName: resourceName?.length > 0 ? resourceName : "",
        accessType: accessType?.length > 0 ? accessType : " ",
        multipleInstance: multipleInstance?.length > 0 ? multipleInstance : "",
        mandatory: mandatory?.length > 0 ? mandatory : "", 
        type: type?.length > 0 ? type : "",
        range: range?.length > 0 ? range : "",
        units: units?.length > 0 ? units : "",
        submitter: submitter?.length > 0 ? submitter : "",
        description: description?.length > 0 ? description : "",
        tsLink: tsLink?.length > 0 ? tsLink : " "
      }

      result.push(newItem);
    }

    return result;
  };

  return {
    provide: {
      filterCommonObjects: filterCommonObjects
    }
  };
});

