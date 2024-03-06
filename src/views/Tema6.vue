<template lang="pug">
  .curso-main-container.pb-3.tema6
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-2.p-md-5    
      .titulo-principal.color-acento-botones
        .titulo-principal__numero
          span 6
        h1 Tipificación de delitos informáticos en Colombia
  
      p El almacenamiento para los dispositivos y aplicaciones de internet de las cosas requiere nuevas tácticas y rumbos, como los que se relacionan a continuación:

      .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
        .col-sm-6.col-xl-4.mb-3.mb-xl-0.vh-90
          .tarjeta.tarjeta-slide.arriba.fondo-tarjetasflip(@mouseover="indicadorTarjetaSlide = false")
            .indicador--hover(v-if="indicadorTarjetaSlide")
            .tarjeta-slide__contenedor
              .tarjeta-slide__contenido.p-4.p-xl-5
                h4 Dispositivos IoT de consumo
                p Comenzaron la tendencia de IoT. Incluyen termostatos y abridores de puertas de garaje, pero también sistemas de cámaras en el hogar, dispositivos de TV, entre otros dispositivos domésticos inteligentes.
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema6/img001.png')})`}")

        .col-sm-6.col-xl-4.mb-3.mb-xl-0.vh-90
          .tarjeta.tarjeta-slide.abajo.fondo-tarjetasflip(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema6/img002.png')})`}")
              .tarjeta-slide__contenido.p-4.p-xl-5
                h4 Dispositivos IoT empresariales
                p Los datos no estructurados generados por los dispositivos IoT son un caso de uso perfecto para procedimientos de almacenamiento de objetos altamente escalables e, incluso, almacenamiento en la nube. La clave: garantizar capacidad de almacenamiento de datos y ancho de banda para el manejo de la velocidad requerida en los sistemas de almacenamiento IoT.

        .col-sm-6.col-xl-4.mb-3.mb-xl-0.vh-90
          .tarjeta.tarjeta-slide.derecha.fondo-tarjetasflip(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema6/img003.png')})`}")
              .tarjeta-slide__contenido.p-4.p-xl-5
                h4 Dispositivos IoT de uso industrial
                p Proveedores de la nube, como Microsoft con Azure IoT Edge, tienen productos para ayudar en estos casos de uso, pero no siempre funcionan cuando hay restricciones de ancho de banda o latencia.

      separador 
      #t_6_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
        h2 6.1 Tipos 

      .row(data-aos="fade-left")
          p Existen diferentes tipos de sensores con características, funcionalidades y diversidad de marcas ofrecidas en el mercado. Los razonamientos a tener en cuenta para elegir un buen sensor se resumen en la siguiente infografía:
      .col-lg-3.col-22
          h4.subrayado-naranja.p-1 Selección de sensores para IoT: 

      separador 
      #t_6_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
        h2 6.2 Tecnologías <i>iscsi, fiber channel, sas y arreglos raid</i>


      .container.color-contenedorpink.p-2.p-md-5 
      
        .row(data-aos="fade-left")
          .col-lg-3.col-22.p-3
            img(src="@/assets/curso/tema6/6.2.1.png") 
          .col-lg-9.col-22.p-3
            p El ISCSI es una forma sencilla de gestionar el almacenamiento de archivos, bases de datos o discos duros en un almacenamiento centralizado en servidor, que permite el transporte de datos a nivel de bloque entre el iniciador Iscsi y el destino de almacenamiento a través de redes TCP/IP.
          .col-lg-12.col-22 
            img(src="@/assets/curso/tema6/linea.png") 
          
          .col-lg-3.col-22.p-3
            img(src="@/assets/curso/tema6/6.2.2.png") 
          .col-lg-9.col-22.p-3
            p La tecnología fibre channel transmite datos a alta velocidad entre los dispositivos de almacenamiento y los servidores utilizando 1 gigabit por segundo y soportando diferentes protocolos (SCSI, IP o ATM entre otros). Puede operar sobre cable o fibra óptica a distancias de 10 km sin uso de repetidores.
          .col-lg-12.col-22 
            img(src="@/assets/curso/tema6/linea.png")
          
          .col-lg-3.col-22.p-3
            img(src="@/assets/curso/tema6/6.2.3.png") 
          .col-lg-9.col-22.p-3
            p SAS es una tecnología que utilizan los computadores para transferir datos desde la tarjeta madre al almacenamiento y viceversa. Generalmente es más costoso y resulta más adecuado para su uso en servidores o estaciones de trabajo informáticas de procesamiento pesado.
          .col-lg-12.col-22 
            img(src="@/assets/curso/tema6/linea.png")
          
          .col-lg-3.col-22.p-3
            img(src="@/assets/curso/tema6/6.2.4.png") 
          .col-lg-9.col-22.p-3 
            p RAID es una tecnología de virtualización de almacenamiento de datos que adopta varios componentes de unidad de disco física en una sola unidad lógica para fines de redundancia de los datos, mejorando el rendimiento.
  </template>

<script>
export default {
  name: 'Tema6',
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
