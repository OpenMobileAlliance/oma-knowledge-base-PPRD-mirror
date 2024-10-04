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
    SourceStr: string;
    Ver: string;
    DDF: string;
    Vorto: string;
    DDFLink: string;
    TS: string;
    TSLink: string;
    xmlEditor: string;
    lwm2mEditor: string;
    tsLink: string;
    DocName: string;
  }

  const filterDDFObjects = (xmlString: string): ddfObject[] | null => {

    const xmlDoc = convert.xml2js(xmlString, {compact: true});
    if (!xmlDoc) {
      console.error("No valid XML first node found.");
      return null;
    }

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
        lwm2mEditor = decodeURI(`http://devtoolkit.openmobilealliance.org/OEditor/LWMOView?url=https://raw.githubusercontent.com/OpenMobileAlliance/lwm2m-registry/prod/${DDF}"`)
        lwm2mEditor = `<a href="${lwm2mEditor}" target="_blank">${ObjectID}</a>`
      }

      let docName = ""
      let tsLink = TS
      if (TS?.length > 0 && TSLink?.length > 0 && TSLink ===  '1')  {
        docName = TS.split('/')?.pop()
        tsLink = `<a href="${TS}" target="_blank" title="${docName}" class="mx-auto"><span class="text-primary dark:from-primary/[0.25] text-2xl"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="m30 25l-1.414-1.414L26 26.172V18h-2v8.172l-2.586-2.586L20 25l5 5z"/><path fill="currentColor" d="M18 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6v3h2v-5a.91.91 0 0 0-.3-.7l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h10Zm0-23.6l5.6 5.6H18Z"/></svg></span></a>`

      }

      let sourceStr = ""
      if (Source?.length > 0) {
        if (Source === '0') {
          sourceStr = "OMA Labels"
        }
        if (Source === '1') {
          sourceStr = "Standards Organizations Labels"
        }
        if (Source === '2') {
          sourceStr = "Companies or individuals"
        }
      }

      const newItem: ddfObject = {
        ObjectID: ObjectID?.length > 0 ? ObjectID : "",
        URN: URN?.length > 0 ? URN : "",
        Name: Name?.length > 0 ? Name : "",
        Description: Description?.length > 0 ? Description : "",
        Owner: Owner?.length > 0 ? Owner : "",
        Source: Source?.length > 0 ? Source : "",
        SourceStr: sourceStr,
        Ver: Ver?.length > 0 ? Ver : "",
        DDF: DDF?.length > 0 ? DDF : "",
        Vorto: Vorto?.length ? Vorto : "",
        DDFLink: DDFLink?.length > 0 ? DDFLink : "",
        TS: TS?.length > 0 ? TS : "",
        TSLink: TSLink?.length > 0 ? TSLink : "",
        xmlEditor: xmlEditor,
        lwm2mEditor: lwm2mEditor,
        tsLink: tsLink,
        DocName: docName
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

