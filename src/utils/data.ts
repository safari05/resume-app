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

  export const EXPERIENCES = Object.freeze([
    {
      periode : "Feb 2024 - Present",
      role : "Senior Full Stack Developer",
      company : "As a freelancer at LAPI ITB",
      description : `As Senior Web Developer  developing and maintaining web applications PROPAR - Property Asset And Recovery PHE SHU Pertamina 
                     using ASP.Net 4.8, Entity Framework, on the job desk : Refactoring Code adjust enhancement ,
                     Processing Async import Excel, Consume External API's regional and Structure Master Hierarchy,
                     create Scheduler (Hourly, Daily, Weekly, Monthly, Yearly) for update data . Collaborated with stackholders to define project requirements and timelines `,
      Technologies : ["ASP.Net MVC","Entity Framework", "Kendo UI", "Vanila Javascript", "SQL Server"]
    },
    {
      periode: "2022 - 2023",
      role: "Frontend Developer",
      company: "PT.Saweri Gading",
      description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with C# (.Net 8) APIs. Implemented responsive designs and optimized frontend performance.`,
      Technologies: ["HTML", "CSS", "Next.js", "PostgreSQL"],
    },
    {
      periode: "2021 - 2022",
      role: "Full Stack Developer",
      company: "PT.Saweri Gading",
      description: `Developed and designed APIs using PHP with the Laravel 8 framework to support frontend integration. 
                    Some API's returned response data in textual and geometric formats as GeoJSON. Also created an admin application for data maintenance.
                    Designed and developed user interfaces for web applications using Next.js and React. Worked closely to integrate frontend components with PHP Laravel. Implemented responsive designs and optimized frontend performance.
                    <br/> Developed Web Aplication System Information Bantuan Sosial Musi Banyuasin with Net Core 3 and database PostgreSQL`,
      Technologies: ["HTML", "CSS", "PHP Laravel", "React", "Gatsby" ,"PostgreSQL"],
    },
    {
      periode: "2019 - 2020",
      role: "Web Developer",
      company: "PT. Arkamaya",
      description: `Most of the projects developed were applications for Toyota Manufacturing Motor Indonesia, such as supplier tracking of goods from vendors to TMIN using RFID reading methods. This development followed Toyota’s development standards known as TDK. In addition to projects from TMIN, there was one project from Triolet for maintenance issues`,
      Technologies: ["HTML", "CSS", ".Net MVC (C# Programming)" ,"SQL Server", "PHP"],
    },
    {
      periode: "2015 - 2019",
      role: "Web Developer",
      company: "PT. Virtua Internasional Pratama",
      description: `As a web developer at PT. Virtua Pratama, working on government-based projects such as those for the Geospatial Information, most of the work involved developing Geographic Information Systems (GIS) applications using C# programming language and PostgreSQL database `,
      Technologies: ["HTML", "CSS", ".Net MVC (C# Programming)" ,"PostgreSQL", ],
    },
  ])