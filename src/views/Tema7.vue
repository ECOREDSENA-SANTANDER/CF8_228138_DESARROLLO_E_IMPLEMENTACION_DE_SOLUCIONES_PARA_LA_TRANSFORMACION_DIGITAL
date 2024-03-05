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
          p Los puertos de comunicación son las interfaces que se utilizan en las aplicaciones para conectarse con otros elementos, ya sean hardware o software, para enviar y recibir paquetes de datos. En cierta manera, es como el buzón de correos aplicado a un ordenador.<br><br>Las principales tecnologías de comunicaciones utilizadas en IoT, son:
      .row 
        .col-lg-8-col-22
          img(src="@/assets/curso/tema7/img01.svg", alt="alt")
          p <br>En general, podría decirse que están siendo utilizadas por diferentes protocolos de tecnologías de comunicaciones, dependiendo de la aplicación y su arquitectura técnica de alcance, manejo de datos, seguridad, consumo de energía, vida útil de la batería, etc.
 
          Separador
      #t_7_1.titulo-segundo.color-acento-contenido
        h2 7.1 Analógicos y digitales
        
      .row(data-aos="fade-left")
        .col-lg-4.col-22
          img(src="@/assets/curso/tema7/7.2.png")
        .col-lg-8.col-22 
          p Algunos cálculos se pueden medir de forma “analógica”, otros en forma “digital”.<br><br>Los sistemas digitales tienen una aceptación significativa en la tecnología moderna, fundamentalmente en la computación y sistemas de control automático. La tecnología digital hace referencia a “cantidades discretas”, en relación a magnitudes o valores como la distancia y la temperatura o la velocidad, que podrían variar muy lento o muy rápido como un sistema de audio.<br><br>En la tecnología analógica es muy difícil almacenar, manipular, comparar, calcular y recuperar información con exactitud cuando ésta ha sido guardada.<br><br>Por lo anterior, la mayor parte de proyectos IoT se basan en tecnología digital.


      Separador
      #t_7_2.titulo-segundo.color-acento-contenido
        h2 7.2 Programación de bloques
        
      .row(data-aos="fade-right")
        .col-lg-4.col-22
          img(src="@/assets/curso/tema7/7.1.png")
        .col-lg-8.col-22 
          p La programación en bloques permite aprender la lógica de programación desde niños, mediante el uso de conexiones sencillas en forma de bloques. Cada bloque tiene una instrucción, condición o evento diferente. Al programar el paso a paso de una función, se deben encajar los bloques de forma ordenada y lógica, de modo que al juntarlos encajan como piezas de lego o rompecabezas, creando pilas o cadenas secuenciales de bloques, es decir, pequeños programas. Entre los principales objetivos de la programación por bloques está el que sea muy simple e intuitiva, ya que no requiere de que sepamos escribir código<br><br>Existen múltiples herramientas y plataformas para incentivar el aprendizaje y volver más funcional la programación por bloques. A continuación, se destacan algunas de ellas:

      .row(data-aos="fade-right")
        .col-lg-4.col-22
          h4.subrayado-naranja.p-1 Herramientas de programación por bloques

      SlyderF(columnas="col-lg-4 col-xl-4").p-4(data-aos="fade-right")
        .tarjeta
          img.mb-lg-8.mb-8(alt="" src="@/assets/curso/tema7/slyder1.png")
          .fondo-slyderC.p-3
            h4 Scratch
            p Herramienta suficientemente intuitiva y fluida, que permite al usuario trabajar con lenguaje de programación en bloques, usando piezas que se parecen a las de un rompecabezas.
        .tarjeta
          img.mb-lg-8.mb-8(alt="" src="@/assets/curso/tema7/slyder2.png")
          .fondo-slyderC.p-3
            h4 Scratch Jr.
            p Se trata de una versión más sencilla y digerible de Scratch diseñada para los niños. La manera de presentar la programación en bloques facilita el entendimiento de usuarios de muy corta edad.
        .tarjeta
          img.mb-lg-8.mb-8(alt="" src="@/assets/curso/tema7/slyder3.png")
          .fondo-slyderC.p-3
            h4 Minecraft
            p Videojuego muy popular en los últimos años, que insta a los jugadores a trabajar conceptos básicos de programación visual, aunque también, para usuarios con conocimientos avanzados, brinda funciones para programar en lenguajes más tradicionales como JavaScript.
        .tarjeta
          img.mb-lg-8.mb-8(alt="" src="@/assets/curso/tema7/slyder4.png")
          .fondo-slyderC.p-3
            h4 Arduino
            p Ofrece dos modalidades de programación para niños: una visual y otra centrada en lenguaje de código escrito. La primera, que funciona con bloques con códigos integrados, es bastante popular en la enseñanza de robótica.
        .tarjeta
          img.mb-lg-8.mb-8(alt="" src="@/assets/curso/tema7/slyder5.png")
          .fondo-slyderC.p-4
            h4 Google Blockly
            p Se conforma de un conjunto de comandos que pueden ordenarse como piezas de rompecabezas. Es fácil de utilizar y está enfocado a usuarios pequeños que no esencialmente sepan escribir código.
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
