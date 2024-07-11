<template lang="pug">
  .curso-main-container.pb-3.tema5
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5    
      .titulo-principal.color-acento-botones
        .titulo-principal__numero
          span 5
        h1 Sensores para IoT
      
      .row(data-aos="fade-right")
        .col-lg-12.col-22 
          p Asumiendo que los sensores son una pieza clave en el éxito del internet de las cosas, es importante analizar en qué consisten y su función en la IoT:

      SlyderF(columnas="col-lg-4 col-xl-4").p-4(data-aos="fade-right")
        .tarjeta
          img.mb-lg-8.mb-8(alt="" src="@/assets/curso/tema5/img01.png")
          .fondo-slyderC.p-3
            h4 Sensores de temperatura
            p Aunque empleados masivamente en sistemas de aire acondicionado o electrodomésticos, el desarrollo del IoT ha abierto posibilidades en otros ámbitos: producción industrial, agricultura, tecnología médica.
        .tarjeta
          img.mb-lg-8.mb-8(alt="" src="@/assets/curso/tema5/img02.png")
          .fondo-slyderC.p-3
            h4 Sensores de proximidad
            p Utilizados en el ámbito de la seguridad y la videovigilancia, detectan la presencia o ausencia de un cuerpo cercano a las propiedades, convirtiéndolas en una señal de fácil lectura.
        .tarjeta
          img.mb-lg-8.mb-8(alt="" src="@/assets/curso/tema5/img03.png")
          .fondo-slyderC.p-3
            h4 Sensores de medición de gases
            p Utilizados para medir cambios en la calidad del aire, están cada vez más presentes en entornos urbanos con el objetivo de ofrecer información sobre la contaminación atmosférica que soportan los ciudadanos.
        .tarjeta
          img.mb-lg-8.mb-8(alt="" src="@/assets/curso/tema5/img04.png")
          .fondo-slyderC.p-3
            h4 Sensores de presión
            p Habituales en instalaciones industriales, en el mantenimiento de sistemas de suministro de agua y calefacción o para la obtención de pronósticos meteorológicos.<br><br>
        .tarjeta
          img.mb-lg-8.mb-8(alt="" src="@/assets/curso/tema5/img05.png")
          .fondo-slyderC.p-3
            h4 Sensores de humedad
            p Especialmente importantes en ámbitos como la agricultura, por ejemplo, mejorando la eficiencia de los sistemas de riego en la gestión de un recurso natural tan escaso como el agua.<br><br>
        .tarjeta
          img.mb-lg-8.mb-8(alt="" src="@/assets/curso/tema5/img06.png")
          .fondo-slyderC.p-3
            h4 Sensores de nivel
            p Los sensores de nivel se utilizan para medir todo tipo de fluidos en estado líquido, gaseoso, materiales de consistencia pastosa, etc.<br><br><br>
  </template>

<script>
export default {
  name: 'Tema5',
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
