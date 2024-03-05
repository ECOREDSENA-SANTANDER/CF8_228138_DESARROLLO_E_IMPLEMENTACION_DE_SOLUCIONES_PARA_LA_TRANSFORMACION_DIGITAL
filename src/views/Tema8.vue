<template lang="pug">
  .curso-main-container.pb-3.tema8
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      .titulo-principal.color-acento-botones
        .titulo-principal__numero
          span 8
        h1 Criterios de configuración, interconexión y administración para IoT
          
      .row(data-aos="fade-right")
        .col-lg-12.col-22 
          p Las configuraciones automáticas de dispositivos actualizan grandes conjuntos de gemelos y resumen el progreso y el cumplimiento. En los siguientes pasos generales se describe cómo se desarrolla y usa la administración automática de dispositivos:
      
      .row(data-aos="fade-right")
        .col-lg-4.col-xl-4.p-2
          .tarjeta
            img.mb-lg-8.mb-8(alt="" src="@/assets/curso/tema8/img01.png")
            .fondo-tarjetasflip.p-4
              p El integrador o fabricante de hardware de IoT implementa las características de administración de dispositivos dentro de una aplicación integrada, que pueden contener actualizaciones de firmware, instalación y actualizaciones de software, y administración de configuraciones.
        .col-lg-4.col-xl-4.p-2
          .tarjeta
            img.mb-lg-8.mb-8(alt="" src="@/assets/curso/tema8/img02.png")
            .fondo-tarjetasflip.p-4
              p El desarrollador de soluciones de IoT implementa configuraciones automáticas de terminales. La solución debe incluir la definición de una interfaz de operador para llevar a cabo las tareas de administración de dispositivos.
        .col-lg-4.col-xl-4.p-2
          .tarjeta
            img.mb-lg-8.mb-8(alt="" src="@/assets/curso/tema8/img03.png")
            .fondo-tarjetasflip.p-4
              p El operador de soluciones de IoT usa la solución de IoT para ejecutar tareas de administración de dispositivos, en concreto, para agrupar los dispositivos, iniciar cambios de configuración (como actualizaciones de firmware), inspeccionar el progreso y corregir los problemas que surjan.
  </template>

<script>
export default {
  name: 'Tema8',
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
