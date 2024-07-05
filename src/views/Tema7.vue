<template lang="pug">
  .curso-main-container.pb-3.tema7
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      .titulo-principal.color-acento-botones
        .titulo-principal__numero
          span 7
        h1 Puertos de comunicación 

      .row(data-aos="fade-right")
        .col-lg-12-col-12
          p Los puertos de comunicación son las interfaces que se utilizan en las aplicaciones para conectarse con otros elementos, ya sean <i>hardware o software,</i> para enviar y recibir paquetes de datos. En cierta manera, es como el buzón de correos aplicado a un ordenador.<br><br>Las principales tecnologías de comunicaciones utilizadas en IoT, son:
      
      .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left").color-contenedornaranja
        .col-sm-6.col-lg-2.mb-4.mb-lg-0
          .tarjeta.p-4
            .row.justify-content-center.mb-3
              .col-10
                img(src="@/assets/curso/tema7/001.svg", alt="alt")

            h4.text-center #[em RFID]:
            p.text-center #[em Radio Frequency Identification] [12]

        .col-sm-6.col-lg-2.mb-4.mb-lg-0
          .tarjeta.p-4
            .row.justify-content-center.mb-3
              .col-10
                img(src="@/assets/curso/tema7/002.svg", alt="alt")

            h4.text-center #[em WSN]:
            p.text-center #[em Wireless Sensor Network] [13]

            
        .col-sm-6.col-lg-2.mb-4.mb-lg-0
          .tarjeta.p-4
            .row.justify-content-center.mb-3
              .col-10
                img(src="@/assets/curso/tema7/003.svg", alt="alt")

            h4.text-center #[em NFC:]
            p.text-center #[em Near Field Communication][14]

            
        .col-sm-6.col-lg-2.mb-4.mb-lg-0
          .tarjeta.p-4
            .row.justify-content-center.mb-3
              .col-10
                img(src="@/assets/curso/tema7/004.svg", alt="alt")

            h4.text-center #[em WiFi]:
            p.text-center estándar IEEE 802.11n

            
        .col-sm-6.col-lg-2.mb-4.mb-lg-0
          .tarjeta.p-4
            .row.justify-content-center.mb-3
              .col-10
                img(src="@/assets/curso/tema7/005.svg", alt="alt")

            h4.text-center #[em Bluetooth]
            p.text-center <br><br>

      .row 
        .col-lg-12-col-22
          p En general, podría decirse que están siendo utilizadas por diferentes protocolos de tecnologías de comunicaciones, dependiendo de la aplicación y su arquitectura técnica de alcance, manejo de datos, seguridad, consumo de energía, vida útil de la batería, etc.

      Separador
      #t_7_1.titulo-segundo.color-acento-contenido
        h2 7.1 Analógicos y digitales
        
      .row(data-aos="fade-left")
        .col-lg-4.col-22
          img(src="@/assets/curso/tema7/7.2.png", alt="alt")
        .col-lg-8.col-22 
          p.py-3 Algunos cálculos se pueden medir de forma “analógica”, otros en forma “digital”.<br><br>Los sistemas digitales tienen una aceptación significativa en la tecnología moderna, fundamentalmente en la computación y sistemas de control automático. La tecnología digital hace referencia a “cantidades discretas”, con relación a magnitudes o valores como la distancia y la temperatura o la velocidad, que podrían variar muy lento o muy rápido como un sistema de audio.<br><br>En la tecnología analógica es muy difícil almacenar, manipular, comparar, calcular y recuperar información con exactitud cuando ésta ha sido guardada.<br><br>Por lo anterior, la mayor parte de proyectos IoT se basan en tecnología digital.


      Separador
      #t_7_2.titulo-segundo.color-acento-contenido
        h2 7.2 Programación de bloques
        
      .row(data-aos="fade-right")
        .col-lg-4.col-22
          img(src="@/assets/curso/tema7/7.1.png")
        .col-lg-8.col-22.py-2 
          p La programación en bloques permite aprender la lógica de programación desde niños, mediante el uso de conexiones sencillas en forma de bloques. Cada bloque tiene una instrucción, condición o evento diferente. Al programar el paso a paso de una función, se deben encajar los bloques de forma ordenada y lógica, de modo que al juntarlos encajan como piezas de lego o rompecabezas, creando pilas o cadenas secuenciales de bloques, es decir, pequeños programas. Entre los principales objetivos de la programación por bloques está el que sea muy simple e intuitiva, ya que no requiere de que sepamos escribir código.<br><br>Existen múltiples herramientas y plataformas para incentivar el aprendizaje y volver más funcional la programación por bloques. A continuación, se destacan algunas de ellas:

      .row(data-aos="fade-right")
        .col-lg-5.col-22
          h4.subrayado-naranja.p-1 Herramientas de programación por bloques

      SlyderF(columnas="col-lg-4 col-xl-4").p-4(data-aos="fade-right")
        .tarjeta.lg-flex
          img.mb-lg-8.mb-8(alt="" src="@/assets/curso/tema7/slyder1.png")
          .fondo-slyderC.p-3
            h4 #[em Scratch]
            p.p-4 Herramienta suficientemente intuitiva y fluida, que permite al usuario trabajar con lenguaje de programación en bloques, usando piezas que se parecen a las de un rompecabezas.
        .tarjeta.lg-flex
          img.mb-lg-8.mb-8(alt="" src="@/assets/curso/tema7/slyder2.png")
          .fondo-slyderC.p-3
            h4 #[em Scratch Jr].
            p.p-3 Se trata de una versión más sencilla y digerible de Scratch diseñada para los niños. La manera de presentar la programación en bloques facilita el entendimiento de usuarios de muy corta edad.
        .tarjeta.lg-flex
          img.mb-lg-8.mb-8(alt="" src="@/assets/curso/tema7/slyder3.png")
          .fondo-slyderC.p-3
            h4 #[em Minecraft]
            p Videojuego muy popular en los últimos años, que insta a los jugadores a trabajar conceptos básicos de programación visual, aunque también, para usuarios con conocimientos avanzados, brinda funciones para programar en lenguajes más tradicionales como #[em JavaScript].
        .tarjeta
          img.mb-lg-8.mb-8(alt="" src="@/assets/curso/tema7/slyder4.png")
          .fondo-slyderC.p-3
            h4 Arduino
            p.p-2 Ofrece dos modalidades de programación para niños: una visual y otra centrada en lenguaje de código escrito. La primera, que funciona con bloques con códigos integrados, es bastante popular en la enseñanza de robótica.
        .tarjeta
          img.mb-lg-8.mb-8(alt="" src="@/assets/curso/tema7/slyder5.png")
          .fondo-slyderC.p-4
            h4 #[em Google Blockly]
            p.p-1 Se conforma de un conjunto de comandos que pueden ordenarse como piezas de rompecabezas. Es fácil de utilizar y está enfocado a usuarios pequeños que no esencialmente sepan escribir código.
</template>

<script>
export default {
  name: 'Tema7',
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
