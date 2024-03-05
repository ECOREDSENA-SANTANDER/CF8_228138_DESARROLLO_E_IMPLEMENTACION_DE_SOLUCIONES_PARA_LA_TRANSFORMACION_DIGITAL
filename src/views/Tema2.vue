<template lang="pug">
  .curso-main-container.pb-3.tema2
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5    
      .titulo-principal.color-acento-botones
        .titulo-principal__numero
          span 2
        h1 <i>Raspberry Pi y Arduino</i>
  
      p.p-2 A continuación conoceremos qué son el Raspberry Pi y el Arduino, elementos importantes a la hora de hablar de Internet de las Cosas.

      .row(data-aos="fade-left")
        .col-lg-5.col-22
          img(src="@/assets/curso/tema2/img01.jpg").p-1
          img(src="@/assets/curso/tema2/img02.jpg").p-1
        .col-lg-7.col-22 
          h5.p-2 <i>El Raspberry Pi</i> es un minicomputador de bajo costo que puede ser conectado a un monitor o televisión.
          p.p-2 Los componentes del Raspberry Pi son:
          .container.color-contenedornaranja
            .row(data-aos="fade-left")
                .col-lg-2.col-22.p-4
                  img(src="@/assets/curso/tema2/01.svg") 
                .col-lg-9.col-22.p-4
                  h4 Fuente de potencia: 
                  p Puede ser conectado con una conexión capaz de suplir 400 mA en 5V.
                .col-lg-11.col-22 
                  img(src="@/assets/curso/tema2/linea.png") 
        
            .row(data-aos="fade-left")
                .col-lg-2.col-22.p-4
                  img(src="@/assets/curso/tema2/02.svg") 
                .col-lg-9.col-22.p-4
                  h4 Pantalla:
                  p La pantalla es un monitor o televisor con entrada HDMI o DVI. 
                .col-lg-11.col-22 
                  img(src="@/assets/curso/tema2/linea.png") 
            
            .row(data-aos="fade-left")
                .col-lg-2.col-22.p-4
                  img(src="@/assets/curso/tema2/03.svg") 
                .col-lg-9.col-22.p-4
                  h4 Teclado y mouse: 
                  p Periféricos USB de baja potencia con menos de 0.1ª.
                .col-lg-11.col-22 
                  img(src="@/assets/curso/tema2/linea.png")
        
            .row(data-aos="fade-left")
                .col-lg-2.col-22.p-4
                  img(src="@/assets/curso/tema2/04.svg") 
                .col-lg-10.col-22.p-4
                  h4 Tarjeta de memoria SD: 
                  p La tarjeta SD usada para Raspberry Pi debe ser al menos clase 4 con mínimo 8 Gb de capacidad de almacenamiento, la tarjeta SD necesita ser instalada sobre un sistema operativo desde otro computador. El proceso de instalación puede  ser realizada sobre Windows, Mac, Linux, NOOBS y Raspbian.

        
        

  </template>

<script>
export default {
  name: 'Tema2',
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
