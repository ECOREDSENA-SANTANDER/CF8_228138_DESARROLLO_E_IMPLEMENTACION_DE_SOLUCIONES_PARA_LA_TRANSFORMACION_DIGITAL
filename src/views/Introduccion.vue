<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

      .titulo-principal.color-acento-botones
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción

      .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
        .col-lg-17.col-22
          p Estimado aprendiz, bienvenido a este componente formativo llamado Arquitectura y componentes de IoT, revise el siguiente video de introducción a la temática y alcance propios del componente.
  

      figure(data-aos="fade-right")
        .video.mb-1
          iframe(width="1280" height="720" src="https://youtube.com/embed/c_4unB8YYG8" title="Infraestructura y servicios tecnológicos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Arquitectura y componentes de IoT

  </template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
