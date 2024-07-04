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
        titulo: '¿Qué es IoT?',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Origen e importancia',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Arquitectura IoT ',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Componentes de IoT ',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Raspberry Pi y Arduino',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Conectividad IoT',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Protocolos de conexión',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Protocolo de comunicación MQTT',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Computación en la nube',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Pasarelas de cloud para IoT',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Adquisición de datos en la nube',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Protocolos de capa de aplicación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: ' HTTP',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'WEBSOCKETS',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'JSON',
            hash: 't_4_3',
          },
        ],
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
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Tipos',
            hash: 't_6_1',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Puertos de comunicación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Analógicos y digitales',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Programación de bloques',
            hash: 't_7_2',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo:
          'Criterios de configuración, interconexión y administración para IoT',
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
      referencia:
        'Microsoft. (2021).  Línea base de seguridad de Azure para Azure Active Directory. ',
      link:
        'https://docs.microsoft.com/es-es/security/benchmark/azure/baselines/aad-security-baseline?toc=/azure/active-directory/fundamentals/toc.json',
    },
    {
      referencia:
        'Real Academia Española. (s.f.). Contratación. En Diccionario de la lengua española. Recuperado el 10 de noviembre, 2022, de',
      link: 'https://dle.rae.es/contratación',
    },
  ],
  glosario: [
    {
      termino: '<i>Active Directory (AD)</i>',
      significado:
        'base de datos y conjunto de servicios que conectan a los usuarios con los recursos de red que necesitan para realizar su trabajo.',
    },
    {
      termino: 'Continuidad',
      significado:
        'en tecnología, hace referencia al principio en el que los recursos, información, servicios y aplicaciones se mantienen en funcionamiento continuo ante un evento no deseado.',
    },
    {
      termino: 'Contenedores',
      significado:
        'en el sector transporte (por ejemplo, en buques y en trenes), se usan contenedores físicos para aislar diferentes cargas.  Las tecnologías de desarrollo de software usan cada vez más un método denominado contenerización.',
    },
    {
      termino: 'Contratación',
      significado:
        'Pacto o convenio, oral o escrito, entre partes que se obligan sobre materia o cosa determinada, y a cuyo cumplimiento pueden ser compelidas (Real Academia Española, s.f.)”.',
    },
    {
      termino: '<i>Cloud computing</i>',
      significado:
        'la computación en la nube, conocida también como servicios en la nube, consiste en el uso de una red de servidores remotos alojados en Internet para almacenar, administrar y procesar datos e información, en lugar de un servidor local o una computadora personal.',
    },
    {
      termino: 'Ciberseguridad',
      significado:
        'conjunto de elementos articulados para la protección de la información alojados en dispositivos en el ciberespacio.',
    },
    {
      termino: 'Disponibilidad',
      significado:
        'en tecnología, hace referencia al principio en el que los recursos, información, servicios y aplicaciones están disponibles para quienes tienen derecho de acceso a ellos.',
    },
    {
      termino: 'Dominio',
      significado:
        'un dominio cuando hablamos de virtualización almacena una partición de directorio de dominio que consta de información sobre el dominio en el que se encuentra, más el esquema y las particiones del directorio de configuración para todo el bosque.',
    },
    {
      termino: '<i>Framework</i>',
      significado:
        'marco de trabajo específico, con instrucciones y estructuras, para la implementación de alguna acción.',
    },
    {
      termino: 'Incidente',
      significado: 'suceso repentino no deseado.',
    },
    {
      termino: 'Migración',
      significado:
        'la migración de la TI consiste en trasladar datos o software de un sistema a otro.',
    },
    {
      termino: 'Proveedor',
      significado: 'sujeto o entidad que suministra un producto o servicios.',
    },
    {
      termino: 'Servicio',
      significado:
        'conjunto de herramientas y actividades que sirven para responder a una necesidad.',
    },
    {
      termino: 'Servicio de TI',
      significado:
        'conjunto de recursos tecnológicos disponibles para ser utilizados como apoyo operativo de las actividades de negocio dentro de una organización, que entregan valor a la misma, facilitando el cumplimiento de las actividades y objetivos.',
    },
    {
      termino: 'Virtualización',
      significado:
        'tecnología que permite crear servicios de TI útiles, con recursos que están tradicionalmente vinculados al hardware.  ',
    },
  ],
  complementario: [
    {
      tema: 'Adquisición de datos en la nube',
      referencia:
        'Agencia española de protección de datos. (2013). Guía para clientes que contraten servicios de Computing. [Archivo PDF].',
      tipo: 'Documento PDF',
      link:
        'http://www.oas.org/es/sla/ddi/docs/Gu%C3%ADa%20para%20clientes%20que%20contraten%20servicios%20de%20Cloud%20Computing%20-%20AGPD.pdf',
    },
    {
      tema: 'Computación en la nube',
      referencia:
        'Decreto 1377 de 2013 - Gestor Normativo. (s/f). Gov.co. Recuperado el 25 de junio de 2024.',
      tipo: 'PDF',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=53646',
    },
    {
      tema: 'Computación en la nube',
      referencia:
        'Ley 1581 de 2012. Por la cual se dictan disposiciones generales para la protección de datos personales.  17 de octubre de 2022. D.O. No. 48587.',
      tipo: 'Libro',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=49981 ',
    },
    {
      tema: 'Conectividad IoT',
      referencia: 'Microsoft. (s.f.).  Introduction to AD DS.',
      tipo: 'Página web',
      link:
        'https://docs.microsoft.com/en-us/learn/modules/introduction-to-ad-ds/',
    },
    {
      tema: 'Computación en la nube',
      referencia:
        'Ministerio de Tecnologías de la Información y Comunicaciones (2019) G.ST.01 Guía del dominio de servicios tecnológicos.',
      tipo: 'Guía ',
      link:
        'https://www.cvc.gov.co/sites/default/files/2018-10/G.ST_.01%20Guia%20del%20dominio%20de%20servicios%20tecnologicos%20V1%202014-Dic-30.pdf',
    },
    {
      tema: 'Computación en la nube',
      referencia:
        'MinTIC expide la resolución que establece los lineamientos y estándares para la estrategia de seguridad digital - MinTIC expide la resolución que establece los lineamientos y estándares para la estrategia de seguridad digital. (s/f). MINTIC Colombia. Recuperado el 25 de junio de 2024.',
      tipo: 'Artículo',
      link:
        'https://mintic.gov.co/portal/inicio/Sala-de-prensa/Noticias/162626:MinTIC-expide-la-resolucion-que-establece-los-lineamientos-y-estandares-para-la-estrategia-de-seguridad-digital',
    },
    {
      tema: 'Adquisición de datos en la nube',
      referencia: 'Public cloud services comparison. (s.f.).',
      tipo: 'Página web',
      link: 'comparecloud.in',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Cesar Antonio Villamizar Nuñez',
          cargo: 'Experto temático',
          centro: 'Sena - Norte de Santander Centro - CIES',
        },
        {
          nombre: 'Maribel Avellaneda Nieves',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftali Lizcano Reyes',
          cargo: 'Responsable Equipo desarrollo curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepulveda',
          cargo: 'Correción de estilo',
          centro: 'Regional Distrito Capital -Centro de Diseño y Metrología',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Leonardo Castellanos Rodriguez',
          cargo: 'Desarrollador <i>Fullstack</i>',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñadora de Contenidos Digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y Productora Multimedia',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora de Recursos Educativos Digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para Contenidos Inclusivos y Accesibles',
          centro: 'Regional Santander - Centro Agroturístico',
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
