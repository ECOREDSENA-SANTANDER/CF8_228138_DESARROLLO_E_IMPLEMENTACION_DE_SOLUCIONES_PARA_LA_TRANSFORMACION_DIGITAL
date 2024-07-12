<template lang="pug">
  .curso-main-container.pb-3.tema4
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      .titulo-principal.color-acento-botones
        .titulo-principal__numero
          span 4
        h1 Protocolos de capa de aplicación

      p En TI, un protocolo de comunicaciones es un procedimiento de criterios que permiten que dos o más entidades de un sistema se comuniquen para transmitir la información por medio de cualquier tipo de conmutación de una extensión física. Dentro de los protocolos de comunicación, las partes involucradas deben acordar los protocolos de red que se dividen en las siguientes siete capas:

      SlyderF(columnas="col-lg-4 col-xl-4").p-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img01.png' alt='AvatarTop')
          .tarjeta.fondo-slyderC
            .p-4
              h4 Capa 1 - Nivel físico
              p Cable coaxial o #[em UTP]. Cable de fibra óptica. Proporciona los medios mecánicos y eléctricos funcionales para activar, mantener o desactivar conexiones.
        
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img03.png' alt='AvatarTop')
          .tarjeta.fondo-slyderC
            .p-4
              h4 Capa 2 - Nivel de enlace de datos
              p Responsable de la transferencia de la información. Permite la comunicación entre la capa de red y la capa física por medio de la #[em Ethernet] que viene con cada computadora.
        
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img02.png' alt='AvatarTop')
          .tarjeta.fondo-slyderC
            .p-4
              h4 Capa 3 - Nivel de red
              p Posibilita que los datos de origen lleguen a su destino. Algunos protocolos de esta capa de red son: #[em Psec, IPv4, IPv6].
        
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img04.png' alt='AvatarTop')
          .tarjeta.fondo-slyderC
            .p-4
              h4 Capa 4 - Nivel de transporte
              p Transferencia libre de datos confiables entre origen y destino. Destacan los protocolos TCP (provee flujo de #[em bytes] confidenciales de extremo a extremo) y UDP (a través del cual las aplicaciones envían datagramas IP encapsulados).
        
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img05.png' alt='AvatarTop')
          .tarjeta.fondo-slyderC
            .p-4
              h4 Capa 5 - Nivel de sesión
              p Organiza y sincroniza el diálogo y control de intercambio de los datos. El protocolo #[em NetBIOS] enlaza un sistema operativo de red con un #[em hardware] específico.
        
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img06.png' alt='AvatarTop')
          .tarjeta.fondo-slyderC
            .p-4
              h4 Capa 6 - Nivel de presentación
              p Trabaja el contenido de la comunicación, considerando que las computadoras manejan de forma distinta la semántica y sintaxis de los datos. La norma ASN.1 clasifica los datos en simples o compuestos, y primitivos, construidos o definidos.
        
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/img07.png' alt='AvatarTop')
          .tarjeta.fondo-slyderC
            .p-4
              h4 Capa 7 - Nivel de aplicación
              p Puede acceder a las demás capas y definir los protocolos para el intercambio de datos. Por ejemplo, en el correo electrónico, se usa #[em POP y SMTP], y protocolos de transferencia de ficheros como #[em FTP].
  
      Separador
      #t_4_1.titulo-segundo.color-acento-contenido
        h2 4.1 #[em HTTP]

      .row(data-aos="fade-left")
        .col-lg-4.col-11
          img(src='@/assets/curso/tema4/http.png', alt='') 
        .col-lg-8.col-22.py-3
          p El protocolo #[em HTTP], de su sigla en inglés #[em Hypertext Transfer Protocol], permite realizar una petición de datos y recursos, como, por ejemplo, documentos #[em HTML]. Este protocolo es la base de cualquier intercambio de datos en la #[em WWW (World Wide Web)] que permite hablar un mismo idioma a la hora de transmitir información. El funcionamiento del #[em HTTP] se basa en un esquema de petición-respuesta, como se representa en la siguiente figura, donde cada petición individual es remitida a un servidor, que se encarga de gestionar y responder. Entre cada petición y respuesta, hay varios intermediarios, normalmente denominados #[em proxy].
  

        .row.justify-content-center.align-items-center
          .col-lg-10.col-22.p-5
            .container.tarjeta.color-contenedornaranja.p-4.p-md-5
              .col-lg-12.col-22.p-1
              .titulo-sexto.color-acento-contenido.mb-3
                p.mb-0 #[b Figura 4.] Funcionamiento del protocolo HTTP
              img.d-none.d-md-block(src='@/assets/curso/tema4/figura1.svg', alt='La imagen expone un esquema de Funcionamiento del protocolo HTTP y representa el flujo de comunicación entre un cliente y un servidor utilizando el protocolo HTTP, a través de dos servidores proxy. De izquierda a derecha, el primer elemento es un ícono de una persona con una laptop etiquetado como Cliente, que envía una solicitud HTTP que pasa por dos íconos de servidores proxy, ambos etiquetados como Proxy. La solicitud llega finalmente a un ícono que representa un servidor de datos, etiquetado como Server. Hay flechas bidireccionales entre cada par de elementos, indicando que la comunicación es de doble sentido. El diagrama explica visualmente cómo una solicitud HTTP de un cliente puede pasar a través de uno o más proxys antes de llegar al servidor y cómo la respuesta sigue un camino inverso.') 
              img.d-block.d-md-none(src='@/assets/curso/tema4/http2.svg', alt='La imagen expone un esquema de Funcionamiento del protocolo HTTP y representa el flujo de comunicación entre un cliente y un servidor utilizando el protocolo HTTP, a través de dos servidores proxy. De izquierda a derecha, el primer elemento es un ícono de una persona con una laptop etiquetado como Cliente, que envía una solicitud HTTP que pasa por dos íconos de servidores proxy, ambos etiquetados como Proxy. La solicitud llega finalmente a un ícono que representa un servidor de datos, etiquetado como Server. Hay flechas bidireccionales entre cada par de elementos, indicando que la comunicación es de doble sentido. El diagrama explica visualmente cómo una solicitud HTTP de un cliente puede pasar a través de uno o más proxys antes de llegar al servidor y cómo la respuesta sigue un camino inverso.')
          p Es importante recordar que #[em HTTP] se apoya en los protocolos de red y transporte, está desarrollado para ser leído e interpretado por los usuarios, es fácil de usar y se le permite avanzar con nuevas y futuras aplicaciones de internet.
 
      Separador
      #t_4_2.titulo-segundo.color-acento-contenido
        h2 4.2 #[em WEBSOCKET]
      .row(data-aos="fade-left")
        .col-lg-8.col-22 
          p #[em Websocket] es una tecnología avanzada que hace posible generar una sesión de comunicación de intercambio entre el navegador del usuario y un servidor. Con esta API, se puede remitir mensajes a un servidor y recibir contestaciones vigiladas por eventos, sin tener que consultar al servidor para una respuesta. Compatible con todos los navegadores, las peticiones y respuestas se envían en #[em Websocket] donde establecen una comunicación en el lenguaje del mismo protocolo.<br>
          p La siguiente figura ilustra el proceso de utilización de Websocket que inicia con su apertura. Cuando se crea #[em new WebSocket(url)], comienza la conexión de manera inmediata. Durante la unión, el navegador (usando cabeceras o #[em “header”]) le pregunta al servidor: “¿Soportas #[em Websockets]?” y si el servidor responde “Sí”, la comunicación se prolonga en el protocolo #[em WebSocket], que no es #[em HTTP] en absoluto.
        .col-lg-4.col-22
          img(src="@/assets/curso/tema4/4.2.png")
        
      .row.justify-content-center.align-items-center
        .col-lg-10.col-22.p-5
          .container.tarjeta.color-contenedornaranja.p-4.p-md-5
            .col-lg-12.col-22.p-1
            .titulo-sexto.color-acento-contenido.mb-3
              p.mb-0 #[b Figura 5.]  Interacción protocolo #[em Websocket]
            img.d-none.d-md-block(src="@/assets/curso/tema4/figura2.svg", alt='La imagen muestra el proceso de establecimiento de una conexión WebSocket entre un cliente y un servidor. A la izquierda está el icono de una persona con una laptop etiquetado como Client, y a la derecha, un ícono de un servidor de datos etiquetado como Server. Hay tres flechas que indican el flujo de comunicación: Una flecha va del cliente al servidor con la etiqueta Solicitud HTTP y el mensaje "Hola servidor, hablamos Websocket". Una flecha de respuesta va del servidor al cliente con la etiqueta Respuesta HTTP y el mensaje "OK". Finalmente, hay una flecha bidireccional entre cliente y servidor etiquetada "Protocolo Websocket". El diagrama visualiza cómo una conexión WebSocket comienza con una solicitud HTTP especial conocida como handshake, seguida por una respuesta HTTP del servidor. Una vez que el servidor responde con un "OK", se establece un canal de comunicación bidireccional a través del protocolo WebSocket.')
            img.d-block.d-md-none(src="@/assets/curso/tema4/figura2cel.svg", alt='La imagen muestra el proceso de establecimiento de una conexión WebSocket entre un cliente y un servidor. A la izquierda está el icono de una persona con una laptop etiquetado como Client, y a la derecha, un ícono de un servidor de datos etiquetado como Server. Hay tres flechas que indican el flujo de comunicación: Una flecha va del cliente al servidor con la etiqueta Solicitud HTTP y el mensaje "Hola servidor, hablamos Websocket". Una flecha de respuesta va del servidor al cliente con la etiqueta Respuesta HTTP y el mensaje "OK". Finalmente, hay una flecha bidireccional entre cliente y servidor etiquetada "Protocolo Websocket". El diagrama visualiza cómo una conexión WebSocket comienza con una solicitud HTTP especial conocida como handshake, seguida por una respuesta HTTP del servidor. Una vez que el servidor responde con un "OK", se establece un canal de comunicación bidireccional a través del protocolo WebSocket.')


      Separador
      #t_4_3.titulo-segundo.color-acento-contenido
        h2 4.3 #[em JSON]

      .row(data-aos="fade-left")
        .col-lg-4.col-22
          img(src="@/assets/curso/tema4/json.png")
        .col-lg-8.col-22.py-2
          p #[em JSON], acrónimo de #[em JavaScript Object Notation], (Notación de objetos de JavaScript) es una sintaxis de serialización de datos jerárquica concisa compatible con todos los navegadores modernos.<br><br> Su formato lo convierte en una forma liviana de representar objetos, sin dejar de ser legible por humanos, por lo que ha reemplazado la notación #[em XML] en muchas plataformas.
  </template>

<script>
export default {
  name: 'Tema4',
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
