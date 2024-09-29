// plugins/filter-oma-enablers.ts

export default defineNuxtPlugin((nuxtApp) => {

  type ddfObject = {
    name: string;
    abbreviation: string;
    url: string;
    versionName: string;
    status: string;
    versionStr: string;
    versionUrl: string;
    date: string;
  }


/*
 
 {
  "id": "http://www.openmobilealliance.org/tech/profiles/JSD/oma_ddf_library_schema.json",
  "organization": {
    "name": "Open Mobile Alliance",
    "abbreviation": "OMA",
    "schemaVersion": "1.0",
    "url": "http://openmobilealliance.org/wp/index.html",
    "ftp": "https://www.openmobilealliance.org/release/",
    "about": "about organization",
    "email": "info@omaorg.org"
  },
  "enablers": [
    {
      "name": "OMA 3D Contents Creation Service APIs",
      "abbreviation": "3DCAPI",
      "data": {
        "resources": [
          {
            "name": "README",
            "resourceType": "Overview",
            "url": "README.txt"
          },
          {
            "name": "Bugs",
            "resourceType": "Issue",
            "url": "mailto:helpdesk@omaorg.org?subject=Feedback"
          }
        ],
        "publications": [
          {
            "url": "3DCAPI/README.txt",
            "file": "README.txt",
            "status": "",
            "version": "",
            "date": "",
            "contentMediaType": "text/plain"
          }
        ],
        "versions": [
          {
            "name": "V1_0-20210210-C",
            "status": "Candidate",
            "version": "V1.0",
            "date": "2021-02-10"
          }
        ]
      }
    },
  ]
}

*/

  const filterOmaEnablers = (data: Object): ddfObject[] | null => {

    const orgInfo = data.organization

    const result: ddfObject[] = [];


    for (let i = 0; i < data?.enablers?.length; i++) {
      const enabler = data.enablers[i];

      let name =  enabler?.name ? enabler.name : ""
      let abbreviation = enabler?.abbreviation ? enabler.abbreviation : ""
      let url = abbreviation ? `${orgInfo.ftp}${abbreviation}` : ""

      for (let v = 0; v < enabler.data?.versions?.length; v++) {
        const version = enabler.data.versions[v];

        let versionName = version?.name?.length > 0 ? version.name : ""
        let status = version?.status?.length > 0  ? version.status :  ""
        let versionStr = version?.version?.length > 0 ? version.version : ""
        let date = version?.date?.length > 0 ? version.date :  ""

        let versionUrl = `${url}/${versionName}/`


        const newItem: ddfObject = {
          name: name,
          abbreviation: abbreviation,
          url: url,
          versionName: versionName,
          status: status,
          version: versionStr,
          versionUrl: versionUrl,
          date: date
        }

        result.push(newItem);
      }
    }

    return result;
  };

  return {
    provide: {
      filterOmaEnablers: filterOmaEnablers
    }
  };
});

