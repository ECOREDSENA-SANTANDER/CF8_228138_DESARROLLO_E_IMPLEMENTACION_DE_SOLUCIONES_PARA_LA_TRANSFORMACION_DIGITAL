<template lang="pug">
  .curso-main-container.pb-3.tema3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5    
      .titulo-principal.color-acento-botones
        .titulo-principal__numero
          span 3
        h1 Conectividad IoT

      .row(data-aos="fade-left")
        .col-lg-4.col-22.py-2
          img(src="@/assets/curso/tema3/01.png")
        .col-lg-8.col-22-py-2
          p El IoT, o internet de las cosas, consiste en conectar a internet cualquier dispositivo teniendo en cuenta tres aspectos fundamentales: captura de datos (telemetría, geoposicionamiento), tratamiento de datos (#[em Business Intelligence, Machine Learning]) y transformación del negocio.
          p Los dispositivos IoT generan grandes cantidades de datos digitales que contienen información de los usuarios, y las máquinas de análisis del #[em Big Data] y las plataformas en la nube pueden acceder a esos datos para generar información relevante y útil para los consumidores.
          p Para lo anterior se necesita una arquitectura global IoT que se compone de los siguientes componentes, trabajando conjuntamente:

  
        .p-2
      
      SlyderF(columnas="col-lg-4 col-xl-4").p-4(data-aos="fade-right") 
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/cone1.png' alt='AvatarTop')
          .tarjeta.fondo-slyderC
            .p-4
              h2 Cosas 
              p IoT inicia con sensores conectados a las cosas para recolectar los datos y actuadores para realizar acciones correspondientes  a los comandos recibidos desde la nube.
            
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/cone2.png' alt='AvatarTop')
          .tarjeta.fondo-slyderC
            .p-4
              h2 #[em Gateway]
              p Es usado para filtrado, preprocesamiento y comunicación con la nube y viceversa. 
        
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/cone3.png' alt='AvatarTop')
          .tarjeta.fondo-slyderC
            .p-4
              h2 #[em Cloud Gateway]
              p Se usa para transmitir datos entre otros #[em gateway] y los servidores centrales IoT. 
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/cone4.png' alt='AvatarTop')
          .tarjeta.fondo-slyderC
            .p-4
              h2 #[em Data Lake]
              p Repositorio de almacenamiento que contiene datos en bruto. 

        .tarjeta-avatar
          img(src='@/assets/curso/tema3/cone5.png' alt='AvatarTop')
          .tarjeta.fondo-slyderC
            .p-4
              h2 #[em Big data Warehouse]
              p Se usa para recopilar datos valiosos. 

        .tarjeta-avatar
          img(src='@/assets/curso/tema3/cone6.png' alt='AvatarTop')
          .tarjeta.fondo-slyderC
            .p-4
              h2 Aplicaciones de control
              p Se emplea para enviar datos a los actuadores. 

        .tarjeta-avatar
          img(src='@/assets/curso/tema3/cone7.png' alt='AvatarTop')
          .tarjeta.fondo-slyderC
            .p-4
              h2 Aplicaciones de usuario
              p Habilita a los usuarios el monitoreo de los datos y toma de decisiones sobre el control de dispositivos conectados. 

      Separador
      #t_3_1.titulo-segundo.color-acento-contenido
        h2 3.1 Protocolos de conexión
      p A continuación, se estudiarán los diferentes protocolos de conexión.

      .row 
        .col-lg-2
          h4.subrayado-naranja.p-2 Modelo #[em OSI]
      P El modelo de interconexión de sistemas abiertos (#[em OSI], por sus siglas en inglés), es un modelo de red creado por la ISO (Organización Internacional de Normalización) y se compone de siete capas:
      
      TabsA.P-4
        .tarjeta.color-contenedorpink.p-4(titulo="7. Aplicación")
          h4 7. Aplicación
          p Esta es la capa que los usuarios ven y sirve de interfaz entre las aplicaciones donde generamos los datos y el resto de la red. Los datos a transmitir son generados por una aplicación. No nos referimos a las aplicaciones mismas, sino a los procesos que funcionan a nivel de #[em software] en nuestro aplicativo; por ejemplo: enviar un mensaje con #[em WhatsApp], ver un video, enviar un correo, #[em Twitter], navegador #[em web].
        .tarjeta.color-contenedorpink.p-4(titulo="6. Presentación")
          h4 6. Presentación
          p Se encarga del formato que deseamos analizar e implementa mecanismos de codificación como ASCII o Unicode para representar los datos a un formato que las computadoras entienden, se traduce lenguaje de alto nivel a lenguaje binario. Por ejemplo: si queremos conocer una imagen, esta capa se encarga de dicha acción.
        .tarjeta.color-contenedorpink.p-4(titulo="5. Sesión")
          h4 5. Sesión
          p Maneja la conversación entre dos equipos (#[em hosts]) y establece el camino para las aplicaciones que se van a comunicar entre el dispositivo emisor y el receptor; el diálogo de establecer, mantener y cerrar se llama sesión.
        .tarjeta.color-contenedorpink.p-4(titulo="4. Transporte")
          h4 4. Transporte
          p Segmenta los datos en paquete, se hace en el dispositivo emisor y el dispositivo receptor hace todo lo contrario; a este al proceso se le conoce como segmentación y reensamblaje. Los datos son particionados, puesto que las redes tienen anchos de banda limitados.
        .tarjeta.color-contenedorpink.p-4(titulo="3. Red")
          h4 3. Red
          p Una de las capas más importantes es la capa 3, pues determina la mejor ruta para que un mensaje llegue a otro dispositivo. Es una capa de direccionamiento y enrutamiento que no toca el contenido de los datos, sino que les agrega a dicho contenido direcciones #[em IP] origen e #[em IP] destino; cada dispositivo en el mundo tiene una dirección.
          p En esta capa también se hace enrutamiento, para ello se usan los #[em routers].
        .tarjeta.color-contenedorpink.p-4(titulo="2. Enlace de datos")
          h4 2. Enlace de datos
          p Toma toda la información y la traduce en información binaria, además, se divide en dos subcapas:
          ol.lista-ol
              li 
                span • #[em LLC (Logic Link Control), MAC (Media Access Control).]
              li 
                span • #[em LLC] comunica el #[em software] de la red con el #[em hardware] de la misma por medio de #[em drivers] de tarjeta de red, una vez se realiza la comunicación se envían los datos a la #[em MAC] (se agrega un direccionamiento físico), la #[em IP] indica en qué red en el mundo se encuentra el dispositivo y la dirección #[em MAC] dice cuál es el dispositivo de la red.
        
        .tarjeta.color-contenedorpink.p-4(titulo="1. Física")
          h4 1. Física
          p Envía la información de la capa de enlace de datos. Como los datos no pueden viajar como números o código binario, estos son codificados en señales (eléctricas, lumínicas o de ondas) dependiendo del tipo de medio de comunicación que conecte a nuestro dispositivo emisor o receptor. El trabajo de codificación lo realiza la tarjeta de red o #[em NIC]. Los datos pueden viajar por cables de cobre, fibra óptica o por el espacio como un tipo de onda, usando redes inalámbricas como el #[em wifi].
      
      
      .row.p-4 
        .col-lg-3
          h4.subrayado-naranja.p-2 Modelo TCP/IP
      
      p El siguiente video presenta el Modelo TCP/IP, a través de un ejemplo.

      figure(data-aos="fade-right")
        .video.mb-1
          iframe(width="1280" height="720" src="https://youtube.com/embed/r--xEt9-HnM?si=sOaZ5K467N1Af3zZ" title="Infraestructura y servicios tecnológicos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Modelo TCP/IP

      Separador
      #t_3_2.titulo-segundo.color-acento-contenido
        h2 3.2 Protocolo de comunicación #[em MQTT]
      
      .topSquare02.clr--pink.mb-5(data-aos="fade-left")
        .row
          .col-lg-2.col-auto
            figure
              img(src="@/assets/curso/tema3/img01.svg", alt="alt").img75.m-auto
          .col-lg-10
            p.mb-0 Es un protocolo simple para la transmisión de mensajes cortos de telemetría y control, desde o hacia una red de sensores / actuadores, es un protocolo de comunicación de máquina a máquina, #[em machine to machine o M2M]; este protocolo se localiza en las capas superiores del modelo #[em OSI]. <br><br>Existe un estándar #[em MQTT] a cargo del organismo OASIS que actualmente cuenta con la versión 5 del 7 de marzo de 2019; el protocolo #[em MQTT] se basa en el modelo de comunicación productor - consumidor.
      
      .row.justify-content-center.align-items-center
        .col-lg-10.col-22.p-3
          .container.tarjeta.color-contenedornaranja.p-4.p-md-5
            .col-lg-12.col-22.p-1
            .titulo-sexto.color-acento-contenido.mb-3
              p.mb-0 #[b Figura 2.] Protocolo #[em MQTT]
            img.d-none.d-md-block(src='@/assets/curso/tema3/3.2.svg', alt='La imagen muestra un  esquema en donde se visualizan tres bloques alineados horizontalmente. De izquierda a derecha, el primer bloque contiene el texto "OSI 5-7" junto a "<i>MQTT</i>", lo que indica que el protocolo <i>MQTT</i> opera en las capas 5 a 7 del modelo OSI, que son la capa de sesión, la capa de presentación y la capa de aplicación. El segundo bloque está etiquetado con "OSI 4" y "TCP", implicando que el protocolo de control de transmisión (TCP) opera en la capa 4, la capa de transporte. El tercer bloque está marcado como "Capa OSI 3" e "IP", señalando que el protocolo de internet (IP) corresponde a la capa 3, la capa de red del modelo OSI.') 
            img.d-block.d-md-none(src='@/assets/curso/tema3/3.2mobile.svg', alt='La imagen muestra un  esquema en donde se visualizan tres bloques alineados horizontalmente. De izquierda a derecha, el primer bloque contiene el texto "OSI 5-7" junto a "<i>MQTT</i>", lo que indica que el protocolo <i>MQTT</i> opera en las capas 5 a 7 del modelo OSI, que son la capa de sesión, la capa de presentación y la capa de aplicación. El segundo bloque está etiquetado con "OSI 4" y "TCP", implicando que el protocolo de control de transmisión (TCP) opera en la capa 4, la capa de transporte. El tercer bloque está marcado como "Capa OSI 3" e "IP", señalando que el protocolo de internet (IP) corresponde a la capa 3, la capa de red del modelo OSI.')



      p La estrategia comunicativa se basa en la publicación de mensajes específicos (#[em topics]) y la suscripción a esos mensajes. Estos mensajes son una trama de datos con un #[em payload] que contiene la información real para el servidor o para el resto de nodos. En una red de sensores esta información contiene valores medidos por los sensores, tales como temperatura, humedad, estado, etc.

      .row.justify-content-center.align-items-center
        .col-lg-10
          .row(data-aos="fade-left").color-contenedorpink.p-4
            .col-lg-1.col-3.py-2
              img.px-1(src="@/assets/curso/tema3/tecnologia.svg")
            .col-lg-11.col-12
              h4.py-2 El <i>broker</i> es el encargado de saber quién está en la red, qué mensajes puede enviar y envía mensajes de un lado a otro.
      
      .row(data-aos="fade-left").p-4
        .col-lg-4.col-22
          img(src="@/assets/curso/tema3/02.png").py-2
        .col-lg-8.col-22 
          p Cuando existe una aplicación o un nodo que publicará un mensaje, no se necesita saber nada acerca del nodo que recibirá y consumirá el mensaje. Con el protocolo #[em MQTT] la única dirección y puerto que se necesitan conocer es la del #[em broker] de mensajes.
          p #[b Quien publica y quien recibe no necesitan estar conectados a la vez, porque el #[em broker] tiene la capacidad de almacenar mensajes,] aunque en la mayoría de los casos los mensajes se consumen en tiempo real, generalmente sucede con clientes que no están sincrónicamente conectados. 
          p En resumen, #[b el protocolo #[em MQTT] se basa en que alguien publica un mensaje con el identificador de un #[em topic] específico,] el #[em broker] distribuye el mensaje a todos los clientes (aplicaciones o dispositivos) que están suscritos a ese topic y esos clientes reciben y consumen los datos de esos mensajes.
          p #[em MQTT] se usa actualmente en autos, casas y ciudades inteligentes, así como en fábricas, productos de consumo, etcétera.
       
      .row.justify-content-center.align-items-center
        .col-lg-10
          .row(data-aos="fade-left").color-contenedorpink.p-4
            .col-lg-1.col-3.py-2
              img.m-auto(src="@/assets/curso/tema3/cel.svg")
            .col-lg-11.col-12
              h4.m-auto.py-2 En conclusión, se puede desarrollar una aplicación que envía información, sin necesidad de saber qué usuario o aplicación la va a utilizar.<br><br>

      Separador
      #t_3_3.titulo-segundo.color-acento-contenido
        h2 3.3 Computación en la nube
      
      p A computación en la nube o #[em cloud computing] son tecnologías que ofrecen servicios mediante conexión a internet desde cualquier punto y en cualquier momento. Presentan características únicas al servicio del internet de las cosas, ofreciendo recolección, almacenamiento y gestión de los datos recogidos por los dispositivos, además de alta disponibilidad. 
      p La computación en la nube ofrece tres posibilidades en cuanto a modelos de servicio, a saber:

      .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
        .col-sm-6.col-xl-4.mb-4.mb-xl-5.tarjetaflipcontenido 
          .tarjeta.tarjeta-slide.arriba.fondo-tarjetasflip(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__contenido.p-4.p-xl-5
                h4 SaaS
                p (#[em software] como un servicio)
                p Aplicaciones que se ejecutan en la nube, en este caso para el usuario es invisible la infraestructura de red, almacenamiento, servidores, sistemas operativos y la nube asegura correcto funcionamiento del aplicativo. Ejemplos de este modelo son #[em Google Docs, Gmail, Dropbox].
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/1.svg')})`}")

        .col-sm-6.col-xl-4.mb-4.mb-xl-5.tarjetaflipcontenido
          .tarjeta.tarjeta-slide.abajo.fondo-tarjetasflip(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/3.svg')})`}")
              .tarjeta-slide__contenido.p-4.p-xl-5
                h4 PaaS
                p (plataforma como un servicio)
                p En este caso la nube alberga todo lo necesario para construir y entregar aplicaciones basadas en la nube, en este caso el usuario puede controlar la aplicación, pero no puede administrar la infraestructura subyacente de la nube. Ejemplos de este modelo son #[em Openshift] y #[em Google App Engine].

        .col-sm-6.col-xl-4.mb-4.mb-xl-5.tarjetaflipcontenido
          .tarjeta.tarjeta-slide.derecha.fondo-tarjetasflip(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor.d-flex
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/2.svg')})`}")
              .tarjeta-slide__contenido.p-4.p-xl-5
                h4 IaaS 
                p (infraestructura como un servicio)
                p En este modelo se proporciona a las empresas servidores, almacenamiento, redes y centros de datos listos para su uso; el proveedor se encarga de la comunicación, el procesamiento o el almacenamiento.
      Separador
      #t_3_4.titulo-segundo.color-acento-contenido
        h2 3.4 Pasarelas de #[em cloud] para IoT 
      p Debido a la necesidad de gestionar de forma ágil y eficiente la alta cantidad de datos que generan los dispositivos IoT, han nacido plataformas de computación en la nube orientadas a IoT. Ahora se ampliará la información al respecto.
      
      .row.justify-content-center.align-items-center
        .col-10
          AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
            .row(titulo="<i>Kaa Iot</i>")
              .col-md-4
                figure
                  img(src='@/assets/curso/tema3/acordion01.png', alt='Pruebaaaa')
              .col-md-8.mb-8.mb-md-0
                p Plataforma multipropósito, flexible de código abierto y lista para producción y establecer soluciones de IoT de extremo a extremo, aplicaciones conectadas y dispositivos inteligentes, ofrece control y supervisión de dispositivos en tiempo real, recopila y analiza datos de sensores, gestiona cantidad infinita de dispositivos en tiempo real, admite uso de protocolos abiertos como #[em MQTT] y #[em CoAP].
            
            .row(titulo="<i>OpenIoT</i>")
              .col-md-4
                figure
                  img(src='@/assets/curso/tema3/acordion02.png', alt='Pruebaaaa')
              .col-md-8.mb-4.mb-md-0
                p Plataforma #[em middleware] de código abierto que unifica IoT con los servicios de computación en la nube, proporciona servicios de registro, implementación y descubrimiento de sensores, monitoreo de dispositivos, visualización de información, desarrollo de aplicaciones sencillas.
            
            .row(titulo="<i>ThingSpeak</i>")
              .col-md-4
                figure
                  img(src='@/assets/curso/tema3/acordion03.png', alt='Pruebaaaa')
              .col-md-8.mb-4.mb-md-0
                p Plataforma de código abierto que permite captura de datos de sensores, almacenamiento en la nube, visualización y análisis de los mismos, con los datos recogidos crea alertas y se comunica a través de servicios de la red, como #[em Twitter], correo, etc.
            .row(titulo="<i>AWS IoT</i>")
              .col-md-4
                figure
                  img(src='@/assets/curso/tema3/acordion04.png', alt='Pruebaaaa')
              .col-md-8.mb-4.mb-md-0
                p Servicio #[em no opensource] para IoT de #[em Amazon], proporciona #[em gateway] de dispositivos, agente de mensajes #[em MQTT], y ofrece servicios de seguridad e identidad, registro de dispositivos.
            .row(titulo="<i>AZURE IoT</i>")
              .col-md-4
                figure
                  img(src='@/assets/curso/tema3/acordion05.png', alt='Pruebaaaa')
              .col-md-8.mb-4.mb-md-0
                p Plataforma creada por #[em Microsoft] que ofrece a los usuarios la creación de soluciones IoT acordes con sus necesidades.        
            .row(titulo="<i>Google Cloud IoT</i>")
              .col-md-4
                figure
                  img(src='@/assets/curso/tema3/acordion06.png', alt='Pruebaaaa')
              .col-md-8.mb-4.mb-md-0
                p Ofrece herramientas que posibilitan la conexión de dispositivos como procesamiento, almacenamiento y análisis de datos en la nube. 


      .row(data-aos="fade-left").p-2
        .col-lg-12
          .row
            .col-sm-6.col-lg-6.mb-4.mb-lg-0
              .tarjeta-avatar
                img(src='@/assets/curso/tema3/001.png' alt='left')
                .tarjeta.color-contenedornaranja2
                  .p-4
                    h4 Nodo cliente
                    p Es la capa de percepción que permite obtener o enviar datos al mundo físico o virtual mediante sensores o actuadores, sensores como temperatura, humedad, estado de un dispositivo, sensores lumínicos, etc.
            .col-sm-6.col-lg-6.mb-4.mb-lg-0
              .tarjeta-avatar
                img(src='@/assets/curso/tema3/002.png' alt='AvatarTop')
                .tarjeta.color-contenedornaranja2 
                  .p-4
                    h4 #[em Broker MQTT]
                    p Es un elemento  primordial para realizar el envío de los datos entre los clientes, debe estar en constante funcionamiento y ser visible a red externa. Entre muchos #[em brokers] públicos existen dos bastante usados y disponibles:
                    p #[b • Mosquito #[em Broker]:] servicio gratuito destinado a la realización de pruebas.
                    p #[b • #[em Cloud MQTT:]] servicio de pago y asegura disponibilidad del servicio.
      
      .row(data-aos="fade-left").p-2
        .col-lg-12
          .row
            .col-sm-6.col-lg-6.mb-4.mb-lg-0
              .tarjeta-avatar
                img(src='@/assets/curso/tema3/003.png' alt='AvatarTop')
                .tarjeta.color-contenedornaranja2 
                  .p-4
                    h4 Nodo servidor
                    p Este nodo cuenta  con funciones de servidor #[em web] y base de datos y como cliente #[em MQTT] suscrito a los #[em topics] de interés y almacena información en la base de datos.

            .col-sm-6.col-lg-6.mb-4.mb-lg-0
              .tarjeta-avatar
                img(src='@/assets/curso/tema3/004.png' alt='AvatarTop')
                .tarjeta.color-contenedornaranja2 
                  .p-4
                    h4 Usuarios finales
                    p Cualquier usuario del servicio que disponga de un terminal con acceso a internet podrá acceder a la aplicación #[em web] y visualizar la información proveniente de los sensores de manera sencilla.
                   
      
      Separador
      #t_3_5.titulo-segundo.color-acento-contenido
        h2 3.5 Adquisición de datos en la nube

      .row(data-aos="fade-left")
        .col-lg-8.col-22 
          p Para el objetivo final de los datos recogidos provenientes de la capa de percepción (sensores y otros dispositivos), es necesario describir patrones y correlaciones en tiempo real para impactar en forma positiva a las empresas en su toma de decisiones, como, por ejemplo, la analítica de datos en IoT puede controlar la producción, la temperatura en procesos industriales, monitorear la salud de los pacientes, etcétera.
          p Aquí entra el concepto del #[em Big Data] que, según el Instituto Nacional de Estándares y Tecnologías (NIST), consiste en un extenso conjunto de datos principalmente con características de volumen, variedad, velocidad y variabilidad que requieren una arquitectura escalable para un almacenamiento, manipulación y análisis eficientes.
          p Según la Unión Internacional de Telecomunicaciones (ITU-T), el #[em Big Data] es un paradigma para habilitar la colección, almacenamiento, gestión, análisis y visualización –potencialmente con limitaciones de tiempo real–, de un extenso conjunto de datos con características heterogéneas.
        .col-lg-4.col-22
          img(src="@/assets/curso/tema3/03.png")

          .p-2
      
      SlyderF(columnas="col-lg-4 col-xl-4").p-4(data-aos="fade-right") 
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/01.svg' alt='AvatarTop')
          .tarjeta.fondo-slyderC
            .p-4
              h4 Velocidad
              p Implica que los datos son generados con muy alta frecuencia y cambian constantemente, en el caso de IoT las medidas captadas por los sensores se realizan con mucha frecuencia.
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/02.svg' alt='AvatarTop')
          .tarjeta.fondo-slyderC
            .p-4
              h4 Variedad 
              p Indica los diferentes tipos de datos recolectados, pueden ser texto, imágenes, videos, audios o #[em logs], estructurados o no estructurados, los datos de IoT pueden ser almacenados en formatos #[em JSON].
        
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/03.svg' alt='AvatarTop')
          .tarjeta.fondo-slyderC
            .p-4
              h4 Veracidad
              p Indica el grado de fiabilidad de la información, es clave hacer un filtrado con la tecnología del #[em Big Data] de lo que puede ser falso o no. 
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/04.svg' alt='AvatarTop')
          .tarjeta.fondo-slyderC
            .p-4
              h4 Volumen
              p Indica la gran cantidad de datos recolectada de diferentes fuentes de datos, esta cantidad de datos se mide en #[em terabytes(tb), petabytes (PB)], incluso a los EB, en el caso de IoT provienen de sensores y dispositivos inteligentes.

        .tarjeta-avatar
          img(src='@/assets/curso/tema3/05.svg' alt='AvatarTop')
          .tarjeta.fondo-slyderC
            .p-4
              h4 Valor
              p Hace referencia a la información útil de verdad que se puede extraer de los datos. Esa misma ayudará a las empresas  a generar un valor agregado para tu negocio, que se convierte en conocimiento y en una acción o decisión. 
  
      .row.p-3
        p Para soportar los modelos de datos, se han desarrollado varias plataformas del #[em Big Data] como #[em Hadoop, Apache Spark, Apache Flinkm, Apache Storm.]
        p El objetivo del #[em Big Data] es extraer la mayor cantidad de valor, información o conocimiento de los grandes volúmenes de datos para lograr conclusiones acertadas y mejorar la toma de decisiones. El proceso de análisis de datos está compuesto por una extracción, limpieza, transformación, modelado y visualización de los datos.
  
      .row.justify-content-center.align-items-center
        .col-lg-10.col-22.p-3
          .container.tarjeta.color-contenedornaranja.p-4.p-md-5
            .col-lg-12.col-22.p-1
            .titulo-sexto.color-acento-contenido.mb-3
              p.mb-0 #[b Figura 3.] Proceso del #[em Big Data]
            img(src="@/assets/curso/tema3/ultimo.svg" alt='La imagen muestra un diagrama que presenta una vista general de las fases de un proceso de Big Data, dividido en dos grandes áreas: Gestión de Datos y Analítica. En la sección Gestión de Datos, hay tres bloques que representan etapas consecutivas: Adquisición y Registro, seguido de Extracción, Limpieza y Anotación, y finalmente Integración, Agregación y Representación. En la sección Analítica, también hay dos bloques: uno repite Extracción, Limpieza y Anotación, lo que sugiere que estas acciones son relevantes tanto en la gestión como en la analítica de datos. El segundo bloque está etiquetado Interpretación, indicando el paso final en el proceso de analítica de Big Data. El diagrama resalta los pasos clave en el manejo y análisis de grandes volúmenes de datos.')
  
  </template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
