// plugins/filter-ddf-objects.ts
import * as convert from 'xml-js';

export default defineNuxtPlugin((nuxtApp) => {

  type ddfObject = {
    ObjectID: string;
    URN: string;
    Name: string;
    Description: string;
    Owner: string;
    Source: string;
    Ver: string;
    DDF: string;
    Vorto: string;
    DDFLink: string;
    TS: string;
    TSLink: string;
    xmlEditor: string;
    lwm2mEditor: string;
    tsLink: string;
  }

  const filterDDFObjects = (xmlString: string): ddfObject[] | null => {

    const xmlDoc = convert.xml2js(xmlString, {compact: true});
    if (!xmlDoc) {
      console.error("No valid XML first node found.");
      return null;
    }
/*
 <Item>
        <!-- Integer -->
        <!-- ObjectID -->
        <ObjectID>0</ObjectID>
        <!-- URN of the object -->
        <URN>urn:oma:lwm2m:oma:0</URN>
        <!-- Name of the object -->
        <Name>LWM2M Securitnpm install htmlparser2y</Name>
        <!-- Description of the Object -->
        <Description>This LwM2M Object provides the keying material of a LwM2M Client appropriate to access a specified LwM2M Server. One Object Instance SHOULD address a LwM2M Bootstrap-Server.
These LwM2M Object Resources MUST only be changed by a LwM2M Bootstrap-Server or Bootstrap from Smartcard and MUST NOT be accessible by any other LwM2M Server.</Description>
        <!-- Name of the organization that has registered the object -->
        <Owner>Test WG</Owner>
        <!-- Type of Object: 0 = defined by OMA, 1 = defined by external Standards Development Organizations, 2 = private or individual -->
        <Source>0</Source>
        <!-- Ver of the object, not visible, not used -->
        <Ver>1.0</Ver>
        <!-- URL to the xml file describing the object -->
        <DDF>version_history/0-1_0.xml</DDF>
        <!-- Link that opens the Object in the Vorto environment -->
        <Vorto></Vorto>
        <!-- 0 => if link to object should not be visible, 1 => if object should be visible (default) -->
        <DDFLink>1</DDFLink>
        <!-- URL to the TS of the object, not visible, not used -->
        <TS>http://www.openmobilealliance.org/release/LightweightM2M/V1_0_2-20180209-A/OMA-TS-LightweightM2M-V1_0_2-20180209-A.pdf</TS>
        <!-- 0 => if link to TS should not be visible, 1 => if link to TS should be visible (default) -->
        <TSLink>1</TSLink>
    </Item>

 */
    const result: ddfObject[] = [];

    const items = xmlDoc.DDFList?.Item

    for (let i = 0; i < items.length; i++) {
      const child = items[i];

      const ObjectID = child["ObjectID"]?._text
      const URN = child["URN"]?._text
      const Name = child["Name"]?._text
      const Description = child["Description"]?._text
      const Owner = child["Owner"]?._text
      const Source = child["Source"]?._text
      const Ver = child["Ver"]?._text
      const DDF = child["DDF"]?._text
      const Vorto = child["Vorto"]?._text
      const DDFLink = child["DDFLink"]?._text
      const TS = child["TS"]?._text
      const TSLink = child["TSLink"]?._text

      let xmlEditor = ""
      if (ObjectID?.length > 0 && DDF?.length > 0 && DDFLink?.length > 0 && DDFLink ===  '1')  {
        xmlEditor = `<a href="https://raw.githubusercontent.com/OpenMobileAlliance/lwm2m-registry/prod/${DDF}" target="_blank">${ObjectID}</a>`
      }

      let lwm2mEditor = ""
      if (ObjectID?.length > 0 && DDF?.length > 0 && DDFLink?.length > 0 && DDFLink ===  '1')  {
        lwm2mEditor = `<a href="http://devtoolkit.openmobilealliance.org/OEditor/LWMOView?url=${DDF}" target="_blank">${ObjectID}</a>`
      }

      let tsLink = TS
      if (TS?.length > 0 && TSLink?.length > 0 && TSLink ===  '1')  {
        let docName = TS.split('/')?.pop()
        tsLink = `<a href="${TS}" target="_blank" title="${docName}"><Icon size="1.5rem" name="i-carbon:cloud-download" /></a>`
      }

      const newItem: ddfObject = {
        ObjectID: ObjectID?.length > 0 ? ObjectID : "",
        URN: URN?.length > 0 ? URN : "",
        Name: Name?.length > 0 ? Name : "",
        Description: Description?.length > 0 ? Description : "",
        Owner: Owner?.length > 0 ? Owner : "",
        Source: Source?.length > 0 ? Source : "",
        Ver: Ver?.length > 0 ? Ver : "",
        DDF: DDF?.length > 0 ? DDF : "",
        Vorto: Vorto?.length ? Vorto : "",
        DDFLink: DDFLink?.length > 0 ? DDFLink : "",
        TS: TS?.length > 0 ? TS : "",
        TSLink: TSLink?.length > 0 ? TSLink : "",
        xmlEditor: xmlEditor,
        lwm2mEditor: lwm2mEditor,
        tsLink: tsLink
      }

      result.push(newItem);
    }

    return result;
  };

  return {
    provide: {
      filterDDFObjects: filterDDFObjects
    }
  };
});

