<template lang="pug">
  .curso-main-container.pb-3.tema1
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      .titulo-principal.color-acento-botones
        .titulo-principal__numero
          span 1
        h1 ¿Qué es IoT?
     
      .row(data-aos="fade-left")
        .col-lg-4.col-12
          img(src="@/assets/curso/tema1/titulo1.png")
        .col-lg-8.col-22
          p.py-2 El internet de las cosas <b>hace referencia a la interconexión de los dispositivos y objetos con otros mediante redes como internet, empleando sensores y actuadores integrados y variedad de elementos electrónicos.</b> La interconexión de estos dispositivos con microprocesadores y la conexión de la red, permite obtener, tratar y transferir datos en forma automática; todo objeto en el mundo puede ser una fuente de datos.
          p A grandes rasgos, podemos decir que el internet de las cosas se conforma por tres sectores: conectividad, hardware y servicios, y el sector de servicios es un campo fértil por sembrar: <b>desarrollo web en la nube, ingeniería de datos, machine learning, inteligencia artificial, big data.</b>
      
      Separador
      #t_1_1.titulo-segundo.color-acento-contenido
        h2 1.1 Origen e importancia
      .row(data-aos="fade-left")
        p Entre los años 1991 y 1999, Mark Weiser y Naoto Fukusawa se centraron en el área del diseño de dispositivos que tengan una sensibilidad a la naturaleza humana, y estos dispositivos se volverán una parte integral de los seres humanos ejecutando algunos patrones de uso. Kevin Ashton, cofundador de AUTO ID center del MIT en 1999 en una presentación de frecuencias de radio (RFID) llamó a su presentación <b>“Internet de las cosas”,</b> pero el verdadero Internet de las cosas sucedería cuando se conecten a internet más dispositivos que personas y esto sucedió en el 2009 con el nacimiento de los celulares. 
        p En estos términos, para el 2022 se espera que estén <b>conectados 18 mil millones de dispositivos,</b> no solo celulares, tablets, pc’s, sino también dispositivos que nunca nos imaginariamos tales como refrigeradores, cepillos, autos, zapatillas, collares de mascotas, iluminación, cerraduras, ropa, etc.
        p El internet de las cosas tiene un millar de aplicaciones, algunas de ellas son:

      SlyderF(columnas="col-lg-4 col-xl-4").p-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/1.png' alt='AvatarTop')
          .tarjeta.fondo-slyderC
            .p-4
              h4 Fuera del hogar
              p Automóviles en red, prendas tecnológicas y monitores de salud en la ropa, aplicaciones para ciclistas para controlar su actividad física. Gafas inteligentes.
        
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/2.png' alt='AvatarTop')
          .tarjeta.fondo-slyderC
            .p-4
              h4 Ropa tecnológica (wearables)
              p Dispositivos médicos, productos de salud, marcapasos y bombas de insulina. Estos wearables monitorizan la geolocalización, así como la frecuencia cardiaca, el pulso, calorías, patrones del sueño, etc.
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/3.png' alt='AvatarTop')
          .tarjeta.fondo-slyderC
           .p-4
              h4 Transporte
              p Supervisión de vehículos conectados, sensores de proximidad, parqueo de vehículos, vehículos autónomos, control remoto de peajes.
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/4.png' alt='AvatarTop')
          .tarjeta.fondo-slyderC
            .p-4
              h4 Contadores inteligentes
              p Dispositivos electrónicos de medición de energía, calefacción, climatización , agua.
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/5.png' alt='AvatarTop')
          .tarjeta.fondo-slyderC
           .p-4
              h4 Hogar inteligente
              p Termostatos domésticos, control de televisores, detectores de humo, cámaras de seguridad, cafeteras y otros electrodomésticos.

      Separador
      #t_1_2.titulo-segundo.color-acento-contenido
        h2 1.2 Arquitectura IoT
      .row(data-aos="fade-left")
        p Según un artículo en <i>Hindawi Journal of Electrical and Computer Engineering</i>, no existe una arquitectura acordada para el Internet de las Cosas. Una arquitectura simple puede estar compuesta de tres o cinco capas. 
        p Conozcamos la arquitectura compuesta por tres capas:

      .row(columnas="col-lg-4 col-xl-4").p-4(data-aos="fade-right")
        .col-sm-6.col-lg-4.mb-4.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/tema1/01.png' alt='AvatarTop')
            .tarjeta.color-salmon
              .p-4
                h4 Capa de percepción
                p Es la capa física, la cual tiene sensores para detectar y recopilar información sobre el medio ambiente.
        
        .col-sm-6.col-lg-4.mb-4.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/tema1/02.png' alt='AvatarTop')
            .tarjeta.color-salmon   
              .p-4
                h4 Capa de red
                p Tiene la función de conectarse a otras cosas inteligentes, dispositivos de red y servidores, se transmiten y procesan datos de los sensores.
        
        .col-sm-6.col-lg-4.mb-4.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/tema1/03.png' alt='AvatarTop')
            .tarjeta.color-salmon
              .p-4
                h4 Capa de aplicación
                p Es responsable de proporcionar servicios de aplicación al usuario, ejemplo hogares inteligentes, ciudades inteligentes, salud inteligente, etc.
     
      .row.p-4
        .col-12
          p En la arquitectura de cinco capas, encontramos adicionalmente:

      .row.justify-content-center
        .col-sm-6.col-lg-5.mb-4.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/tema1/04.png' alt='AvatarTop')
            .tarjeta.color-salmon
              .p-4
                h4 Capa de transporte 
                p Encargada de transferir los datos de sensores desde la capa de percepción a la capa de procesamiento y viceversa a través de redes tales como Wireless, 3G, LAN , Bluetooth, RFID Y NFC.

        .col-sm-6.col-lg-5.mb-4.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/tema1/05.png' alt='AvatarTop')
            .tarjeta.color-salmon
              .p-4
                h4 Capa de procesamiento o capa middleware
                p Almacena, analiza y procesa grandes cantidades de datos que provienen de la capa de transporte. Puede administrar y proporcionar un conjunto diverso de servicios a las capas inferiores, aquí encontramos tecnologías como bases de datos, computación en la nube y procesamiento de big data.
      .row.p-4 
        .col
          p En la siguiente figura se puede observar una comparación entre cada una de estas arquitecturas:

      .row.justify-content-center.align-items-center
          .col-lg-8.col-22.p-2
            .titulo-sexto.color-acento-contenido.mb-3
              p.mb-0 #[b Figura 1.] Capas de arquitectura.
            .container.tarjeta.color-contenedornaranja.p-4.p-md-5
              .col-lg-12.col-12
                img(src="@/assets/curso/tema1/01.svg")
      
      
      Separador
      #t_1_3.titulo-segundo.color-acento-contenido
        h2 1.3 Componentes IoT
      .row(data-aos="fade-left")
        .col-lg-4.col-22
         img(src="@/assets/curso/tema1/1.3.png")
        .col-lg-8.col-22
          p.py-2 Un sistema IoT no se puede llevar a cabo o es imposible sin el uso de sensores para recoger datos del medio ambiente, estos son pequeños, de bajo costo y tienen un bajo consumo de energía, 
          p La información recogida por los sensores es convertida a información digital para así poder tratarla, almacenarla y enviarla a otros dispositivos. 
          p Los sensores son dispositivos electrónicos capaces de medir magnitudes físicas o químicas y transformarlas en señales eléctricas y se clasifican en:


      TabsA.p-4
        .tarjeta.color-acento-botones--borde.p-4(titulo="1. Basadas en aplicaciones")
          h4 1. Basadas en aplicaciones
            SlyderA.p-2
              .col-lg-3
                img(src="@/assets/curso/tema1/001.png")
              .col-lg-6
                  p Sensores digitales: la salida del sensor es binaria o digital la cual puede ser procesada directamente a través de controlador o procesador. 

        .tarjeta.color-acento-botones--borde.p-4(titulo="1. Basadas en aplicaciones")
          h4 1. Basadas en aplicaciones
            SlyderA.p-2
              .col-lg-4
                img(src="@/assets/curso/tema1/001.png")
              .col-lg-6
                  p Sensores digitales: la salida del sensor es binaria o digital la cual puede ser procesada directamente a través de controlador
      
      .row(data-aos="fade-left")
        .col-lg-12.col-22
            p Y los actuadores activan un determinado proceso utilizando señales eléctricas. Estos reciben una señal eléctrica y la transforman en movimiento en el ambiente Internet de las cosas; los actuadores se usan siempre que sea necesario encender o apagar otro dispositivo, aplicando una fuerza. 
        
        .col-lg-4
          h4.subrayado-naranja.p-2 Los actuadores tienen dos clasificaciones:
        .col-lg-12.p-4
          p <b>1. Según la fuente de energía:</b> se requieren para generar movimiento.

      .row.justify-content-center.align-items-center
        .col-10
          AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
            .row(titulo="Hidráulicos")
              .col-md-8.mb-4.mb-md-0
                p Utilizan la presión del líquido para generar un movimiento mecánico.
              .col-md-3
                figure
                  img(src="@/assets/curso/tema1/a1.png")
            .row(titulo="Neumáticos")
              .col-md-8.mb-4.mb-md-0
                p Utilizan aire comprimido a alta presión para permitir el funcionamiento mecánico.
              .col-md-3
                figure
                  img(src="@/assets/curso/tema1/a2.png")
            .row(titulo="Eléctricos")
              .col-md-8.mb-4.mb-md-0
                p Utilizan fuentes de energía externa como baterías u otros tipos de energía  eléctrica para generar movimiento.
              .col-md-3
                figure.justify-content-center.align-items-center
                  img(src="@/assets/curso/tema1/a3.png")

            
      .row(data-aos="fade-left")
        .col-lg-12.p-4
          p <b>1. Según la fuente de energía:</b> se requieren para generar movimiento.

      .row.justify-content-center.align-items-center
        .col-10
          AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
            .row(titulo="Actuadores lineales")
              .col-md-8.mb-4.mb-md-0
                p Se utilizan para permitir el movimiento de objetos o elementos en línea recta, se emplean principalmente para movimientos como empujar levantar, tirar, bloquear, expulsar, sujetar o descender.
              .col-md-3
                figure
                  img(src="@/assets/curso/tema1/a4.png")
            .row(titulo="Motores")
              .col-md-8.mb-4.mb-md-0
                p Permiten movimientos rotativos precisos de los componentes del dispositivo u objetos completos.
              .col-md-3
                figure
                  img(src="@/assets/curso/tema1/a5.png")
            .row(titulo="Relés")
              .col-md-8.mb-4.mb-md-0
                p Se basan en electroimanes para manejar mecánicamente un interruptor.  No necesitan mucha energía para operar la bobina del relé. Se usan en lámparas, calentadores, vehículos inteligentes entre otros.
              .col-md-3
                figure.justify-content-center.align-items-center
                  img(src="@/assets/curso/tema1/a6.png")
            .row(titulo="Selenoides")
              .col-md-8.mb-4.mb-md-0
                p Son un electroimán usados en electrodomésticos, equipos de oficina, automóviles, y  también funcionan como controladores en los sistemas de fugas de agua y gas en Iota.
              .col-md-3
                figure.justify-content-center.align-items-center
                  img(src="@/assets/curso/tema1/a7.png")
  
  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
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
