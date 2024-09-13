export const ROUTES = Object.freeze([
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Resume",
      path: "/resume",
    },
    {
      id: 3,
      name: "Work Experience",
      path: "/work-experience",
    },
    {
      id: 4,
      name: "Projects",
      path: "/projects",
    },
  ]);

  export const SOCIAL_ICONS = Object.freeze([
    {
      id: 1,
      icon: "/assets/images/int.png",
      name: "Instagram",
    },
    {
      id: 3,
      icon: "/assets/images/in.png",
      name: "LinkedIn",
    },
    {
      id: 4,
      icon: "/x.png",
      name: "X",
    },
  ]);

  export const PROJECTS = Object.freeze([
    {
      id : 1,
      title : "One Data Musibanyuasin",
      desc : "The One Data Local Government platform provides a comprehensive data management system with various access levels: Open Data: Accessible to the public for general use. Limited Data: Accessible to specific government departments (OPD) with controlled permissions. Closed Data: Restricted to authorized personnel within the OPD. The platform is integrated with One Indonesian Data (https://data.go.id), ensuring consistency and interoperability across national data systems.",
      image : '/assets/images/satu-data-muba.png',
      category : "Frontend Developer",
      stack : ["React JS","Next.js", "Tailwind"],
      link : "https://satudata.mubakab.go.id"
    },
    {
      id : 2,
      title : "PIR - Regional Invetment",
      desc : "Pir is a geospatial-based information system for investment potential and opportunities in 38 Province 514 Regencies/Cities in Indonesia and is part of the website of the Ministry of Investment Coordination Board (BKPM). PIR contains regional profile information including demographic data, commodities, income and the Regional Minimum Wage (UMR), as well as supporting infrastructure.",
      image : '/assets/images/pir.png',
      category : "Frontend Developer",
      stack : ["React JS","Gatsby", "Tailwind"],
      link : "https://regionalinvestment.bkpm.go.id"
    },
    {
      id : 3,
      title : "PIR - Regional Invetment Admin",
      desc : "PIR Admin is a web-based platform designed for managing data on investment opportunities and commodities, sharing application authority access rights, inputting textual data, and uploading spatial data with the .shp extension",
      image : '/assets/images/pir-admin.png',
      category : "Backend Developer",
      stack : ["PHP Laravel 8","Bootstrap","Postgrsql","PostGIS","Esri"],
      link : "https://regionalinvestment.bkpm.go.id/admin/"
    }
  ]);