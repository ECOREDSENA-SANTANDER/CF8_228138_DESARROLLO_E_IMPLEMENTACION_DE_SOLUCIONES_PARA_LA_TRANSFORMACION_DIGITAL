export default {
  global: {
    componenteFormativo: 'Arquitectura y componentes de IoT',
    descripcionCurso:
      'El Internet de las cosas propone una tendencia de conexión a Internet con más cosas u objetos que con personas, se refiere a la red colectiva de dispositivos conectados y a la tecnología que facilita la comunicación entre los dispositivos y la nube, así como entre los propios dispositivos. Las tecnologías como IoT se utilizan en los proyectos de ciudades inteligentes.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos de redes y <i>networking</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Conceptos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Características',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Enrutamiento IP',
            hash: 't_1_7',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Raspberry Pi y Arduin',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Conectividad IoT',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Protocolos de capa de aplicació',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Sensores para IoT',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Almacenamiento para IoT',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Puertos de comunicación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Características de los activos de información',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Tipos de activos de información',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Técnicas de valoración de activos',
            hash: 't_7_3',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo:
          'Criterios de configuración, interconexión y administración para Io',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228138_CF01_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Cloud Education. (2021). Redes. IBM. ',
      link:
        'https://www.ibm.com/co-es/cloud/learn/networking-a-complete-guide#toc-trminos-y--ZhqcZz4r',
    },
    {
      referencia:
        'Corporation and/or its affiliates. (2010). Modelo de referencia OSI. ORACLE. ',
      link: 'https://docs.oracle.com/cd/E19957-01/820-2981/ipov-8/index.html',
    },
    {
      referencia:
        'Ministerio de Hacienda y Administraciones Públicas de España. (2012). Metodología de análisis y gestión de riesgos de los sistemas de información.',
      link:
        'https://administracionelectronica.gob.es/pae_Home/dam/jcr:fb373672-f804-4d05-8567-2d44b3020387/2012_Magerit_v3_libro1_metodo_es_NIPO_630-12-171-8.pdf',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones de Colombia. (2017). Guía de transición IPv4 a IPv6 para Colombia. ',
      link:
        'https://www.mintic.gov.co/portal/715/articles-162301_guia_transicion_ipv4_ipv6.pdf',
    },
    {
      referencia:
        'Organización de Estados Americanos. (2019). Ciberseguridad marco NIST. Un abordaje integral de la ciberseguridad. ',
      link:
        'https://www.oas.org/es/sms/cicte/docs/OEA-AWS-Marco-NIST-de-Ciberseguridad-ESP.pdf',
    },
    {
      referencia:
        'Organización Internacional de Normalización. (ISO). (2013). Seguridad de la información, ciberseguridad y protección de la privacidad (ISO 27001). ',
      link: 'https://www.iso.org/standard/54534.html',
    },
    {
      referencia: 'Projete. (s.f.). Amenazas y vulnerabilidades. ',
      link:
        'https://protejete.wordpress.com/gdr_principal/amenazas_vulnerabilidades/',
    },
  ],
  glosario: [
    {
      termino: 'Activos de información',
      significado:
        'están relacionados con la seguridad de la información, hacen referencia a cualquier información o dispositivo que tenga que ver con el tratamiento de esta y que sea de valor para la organización.',
    },
    {
      termino: 'Auditoría',
      significado:
        'acción que consiste en emitir criterios y opiniones profesionales acerca de cualquier objeto de análisis, del cual se espera que represente de manera adecuada la realidad que pretende reflejar; también sobre si cumple o no con las condiciones y funcionalidades que se han acordado en el nivel de servicio.',
    },
    {
      termino: 'Auditorías internas de SGSI',
      significado:
        'el principal objetivo de la auditoría de SGSI es investigar, de manera objetiva, si existe algo que esté mal realizado. El auditor interno tiene que ser una persona capacitada, con su conocimiento debe poder descubrir si algo se hace mal dentro de la organización. Realizando un buen trabajo, correctivo y/o preventivo, entonces la auditoría interna de SGSI mejorará su seguridad.',
    },
    {
      termino: 'Ciberseguridad',
      significado:
        'conjunto de metodologías, medidas y controles destinados a gestionar la seguridad de la información de una organización y/o de la información en general.',
    },
    {
      termino: '<em>Ethical hacking</em>',
      significado:
        'proceso que se da al interior de las organizaciones a través del cual se exploran las vulnerabilidades existentes en los sistemas, haciendo pruebas de intrusión, que sirven para verificar y evaluar la seguridad física y lógica de los sistemas de información, redes de computadoras, aplicaciones web, bases de datos, servidores, etc.',
    },
    {
      termino: '<em>Malware</em>',
      significado:
        '<em>software</em> diseñado para comprometer la seguridad de la información, como la utilidad y preservación del equipo.',
    },
    {
      termino: 'Riesgo',
      significado:
        'posibilidad de sufrir una afectación por causa de factores externos o internos. El riesgo es un peligro latente que puede o no materializarse. En el orden informático y de ciberseguridad, los riesgos no son distintos, contemplan las vulnerabilidades y las amenazas y pueden ser controlados, tratados, mitigados, prevenidos y, en algunos casos, eliminados.',
    },
    {
      termino: 'Seguridad informática',
      significado:
        'rama del saber que tiene ocupación en el diseño de normas y criterios, procedimientos y métodos, técnicas y estrategias, dirigidos a lograr seguridad y confiabilidad en un sistema de información. ',
    },
    {
      termino: 'Tratamiento de riesgos',
      significado:
        'medidas y controles que se implementan para mitigar el impacto o la frecuencia de ocurrencia de un riego.',
    },
    {
      termino: 'Virus informático',
      significado:
        '<em>software</em> que se instala en un dispositivo sin el consentimiento del usuario, con el fin de alterar el funcionamiento. ',
    },
  ],
  complementario: [
    {
      tema:
        '2. Normatividad y estándares: ciberseguridad<br><br>3. Normatividad y estándares: seguridad de la información',
      referencia:
        'ISO. (2018). Seguridad de la información, ciberseguridad y protección de la privacidad (ISO 27005).',
      tipo: 'Norma / Documento',
      link: 'https://www.iso.org/standard/75281.html',
    },
    {
      tema:
        '2. Normatividad y estándares: ciberseguridad<br><br>3. Normatividad y estándares: seguridad de la información',
      referencia:
        'ISO. (2013). Seguridad de la información, ciberseguridad y protección de la privacidad (ISO 27002). ',
      tipo: 'Norma / Documento',
      link: 'https://www.iso.org/standard/54533.html',
    },
    {
      tema: '8. Amenazas y vulnerabilidades',
      referencia:
        'Gómez, V., Á. (2015). Auditoría de seguridad informática. RA-MA Editorial. ',
      tipo: 'Libro',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=6422&pg=1',
    },
    {
      tema: '9. Riesgos',
      referencia:
        'Gómez V., Á. (2015). Seguridad en equipos informáticos. RA-MA Editorial.',
      tipo: 'Libro',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=8105&pg=1',
    },
    {
      tema: '9.2. Características, impacto y análisis de riesgos',
      referencia: 'ISO (2018). Gestión del riesgo. Directrices (ISO 31000). ',
      tipo: 'Norma / Documento',
      link: 'https://www.iso.org/obp/ui#iso:std:iso:31000:ed-2:v1:es',
    },
    {
      tema: '10. <em>Ethical Hacking</em>',
      referencia:
        'Astudillo, B. K. (2019). Hacking ético: ¡Cómo convertirse en hacker ético en 21 días o menos! Ediciones de la U.',
      tipo: 'Libro',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=10047&pg=1',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Diana Carolina Triana Guarnizo',
          cargo: 'Instructor',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Juan Carlos Cárdenas Sánchez',
          cargo: 'Instructor',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Gloria Esperanza Ortiz Russi',
          cargo: 'Diseñador Instruccional',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Fabián Leonardo Correa Díaz',
          cargo: 'Diseñador Instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Asesor Metodológico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabian Zarate Saavedra',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander ',
        },
        // {
        //   nombre: 'Emilsen Alfonso Bautista ',
        //   cargo: 'Actividad didáctica',
        //   centro:
        //     'Centro Industrial del Diseño y la Manufactura - Regional Santander ',
        // },
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander ',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres ',
          cargo: 'Storyboard e Ilustración ',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander ',
        },
        {
          nombre: 'Mary Jeans Palacio Camacho ',
          cargo: 'Animador y Productor Multimedia  ',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander ',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada ',
          cargo: 'Animador y Productor Multimedia ',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander ',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: ' Locución ',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Validador de Recursos Educativos Digitales ',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Álvarez',
          cargo: 'Validador de Recursos Educativos Digitales ',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles ',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
