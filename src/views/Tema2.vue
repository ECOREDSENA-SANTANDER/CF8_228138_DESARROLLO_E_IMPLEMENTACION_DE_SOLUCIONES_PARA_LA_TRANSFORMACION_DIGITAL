<template lang="pug">
  .curso-main-container.pb-3.tema2
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5    
      .titulo-principal.color-acento-botones
        .titulo-principal__numero
          span 2
        h1 #[em Raspberry Pi y Arduino]
  
      p.p-2 A continuación conoceremos qué son el Raspberry Pi y el Arduino, elementos importantes a la hora de hablar de Internet de las Cosas.

      .row(data-aos="fade-left")
        .col-lg-5.col-22
          img(src="@/assets/curso/tema2/img01.jpg").p-1
          img(src="@/assets/curso/tema2/img02.jpg").p-1
        .col-lg-7.col-22 
          h5.p-2 #[em El Raspberry Pi] es un minicomputador de bajo costo que puede ser conectado a un monitor o televisión.
          p.p-2 Los componentes del Raspberry Pi son:
          .container.color-contenedornaranja
            .row(data-aos="fade-left")
                .col-lg-2.col-5.p-4
                  img.d-none.d-md-block(src='@/assets/curso/tema2/01.svg', alt='') 
                .col-lg-9.col-22.p-4
                  h4 Fuente de potencia: 
                  p Puede ser conectado con una conexión capaz de suplir 400 mA en 5V.
                .col-lg-11.col-7
                  img(src="@/assets/curso/tema2/linea.png") 
        
            .row(data-aos="fade-left")
                .col-lg-2.col-5.p-4
                  img(src="@/assets/curso/tema2/02.svg") 
                .col-lg-9.col-22.p-4
                  h4 Pantalla:
                  p La pantalla es un monitor o televisor con entrada HDMI o DVI. 
                .col-lg-11.col-22 
                  img(src="@/assets/curso/tema2/linea.png") 
            
            .row(data-aos="fade-left")
                .col-lg-2.col-5.p-4
                  img(src="@/assets/curso/tema2/03.svg") 
                .col-lg-9.col-22.p-4
                  h4 Teclado y mouse: 
                  p Periféricos USB de baja potencia con menos de 0.1ª.
                .col-lg-11.col-22 
                  img(src="@/assets/curso/tema2/linea.png")
        
            .row(data-aos="fade-left")
                .col-lg-2.col-5.p-4.justify-content-center
                  img(src="@/assets/curso/tema2/04.svg") 
                .col-lg-10.col-22.p-4
                  h4 Tarjeta de memoria SD: 
                  p La tarjeta SD usada para Raspberry Pi debe ser al menos clase 4 con mínimo 8 Gb de capacidad de almacenamiento, la tarjeta SD necesita ser instalada sobre un sistema operativo desde otro computador. El proceso de instalación puede  ser realizada sobre Windows, Mac, Linux, NOOBS y Raspbian.
      .row.p-3
      .container.color-contenedorpink
        .row.justify-content-center.align-items-center(data-aos="fade-left")
          .col-lg-1.col-2
            img.p-1(src="@/assets/curso/tema2/fresa.png") 
          .col-lg-10.col-22.p-3
            h4 Ventajas de Raspberry Pi
            ol.lista-ol
              li 
                span.text-bold • Uso sencillo
              li 
                span.text-bold • Tamaño muy pequeño
              li 
                span.text-bold • Precio bajo
              li 
                span.text-bold • Tienen pines de entrada/salida, por lo que también se pueden conectar a otros componentes electrónicos, como sensores, LEDs, etc.
          
      .row(data-aos="fade-left").p-2
        .col-lg-5.col-22.p-3
          img(src="@/assets/curso/tema2/img03.png")
        .col-lg-7.col-22.p-3
          h5.p-2 Inventado en el Ivrea Interaction Design Institute, diseñado para la creación rápida de prototipos dirigido a aficionados, muy pronto su uso creció exponencialmente y se adapta a las últimas tendencias en el mercado, desde una placa de 8 bits hasta productos IoT, dispositivos portátiles y entornos embebidos.
          p.p-2 El software Arduino es fácil de usar y se puede operar en plataformas Mac, Linux y Windows.<br><br>A continuación identifiquemos cada uno de sus componentes:
      
      
      .container.tarjeta.color-contenedornaranja.p-4.p-md-5 
          .row.justify-content-center.align-items-center(data-aos="fade-left") 
            .col-10
              .container.tarjeta.tarjeta--blanca.p-4.p-md-5
                ImagenInfografica.color-acento-botones
                  template(v-slot:imagen)
                    figure
                      img(src='@/assets/curso/tema2/Arsuino.svg', alt='Texto que describa la imagen')

                  .tarjeta.color-acento-botones.p-3(x="95%" y="70%" numero="1")
                    .h5.mb-2 1. ATmega 328 
                    p microcontrolador. El corazón del Arduino, el procesador.

                  .tarjeta.color-acento-botones.p-3(x="10%" y="30%" numero="2")
                    .h5.mb-2 2. Puerto USB
                    p Se utiliza para la alimentación de la interfaz Uno Genuino, la carga de nuestros programas, y para la comunicación con nuestra placa (a través de serie. PrintIn (), etc.) El regulador de tensión ubicado a su lado, convertirá la tensión que le llega a través de este puerto USB y hará que trabaje a 5V.

                  .tarjeta.color-acento-botones.p-3(x="10%" y="90%" numero="3")
                    .h5.mb-2 3. Conector de alimentación
                    p Esta es la forma de alimentar nuestra placa cuando no está conectada a un puerto USB para para suministrar corriente eléctrica. Puede aceptar tensiones entre 7-12V.

                  .tarjeta.color-acento-botones.p-3(x="70%" y="10%" numero="4")
                    .h5.mb-2 4. Los pines digitales
                    p Utilizaremos estos pines con instrucciones como DigitalRead (), DigitalWrite (). AnalogRead () y AnalogWrite () funcionarán únicamente en los ìnes con el símbolo PWM
          
                  .tarjeta.color-acento-botones.p-3(x="90%" y="10%" numero="5")
                    .h5.mb-2 5. Serial IN (TX)
                    p Los puertos serie están físicamente unidos a distintos pines de la placa Arduino. Lógicamente, mientras usamos los puertos de serie no podemos usar como entradas o salidas digitales los pines asociados con el puerto de serie en uso. Pines asociados con el puerto de serie como entrada y salida digital (TX es el que Transmite y RX es el que recibe).

                  .tarjeta.color-acento-botones.p-3(x="93%" y="10%" numero="6")
                    .h5.mb-2 6. Serial IN (RX)
                    p Los puertos serie están físicamente unidos a distintos pines de la placa Arduino. Lógicamente, mientras usamos los puertos de serie no podemos usar como entradas o salidas digitales los pines asociados con el puerto de serie en uso. Pines asociados con el puerto de serie como entrada y salida digital (TX es el que Transmite y RX es el que recibe).
                  
                  .tarjeta.color-acento-botones.p-3(x="51%" y="10%" numero="7/23")
                    .h5.mb-2 7 y 23. Pin 13 + L (on board led)
                    p El único actuador incorporado a la placa. Además de ser un objetivo práctico para nuestra primera práctica de encender y apagar LED, este LED es muy útil para la depuración (debugging).

                  .tarjeta.color-acento-botones.p-3(x="47%" y="10%" numero="8")
                    .h5.mb-2 8. GND
                    p proporciona masa, tierra, negativo a los circuitos.

                  .tarjeta.color-acento-botones.p-3(x="40%" y="7%" numero="9")
                    .h5.mb-2 9. AREF
                    p AnalogReference input V- Tensión a 5V, proporciona diferencia de potencial. Si se le aplica voltaje externo debe ser entre 0 y 5V solamente.

                  .tarjeta.color-acento-botones.p-3(x="20%" y="8%" numero="10")
                    .h5.mb-2 10. Botón Reset
                    p Restablece el microcontrolador ATmega

                  .tarjeta.color-acento-botones.p-3(x="36%" y="38%" numero="11")
                    .h5.mb-2 11. Chip
                    p Chip de comunicación serie.
                  
                  .tarjeta.color-acento-botones.p-3(x="20%" y="71%" numero="12")
                    .h5.mb-2 12. Regulador de tensión
                    p Se debe tener en cuenta que para que trabaje a 5V la placa deberá recibir unos 6,5V – 7V, pero todo lo que esté por encima de este valor se desperdiciará (es decir, sobrecalentará la placa de Arduino y mayor calor que tendrá que disipar el regulador). En cualquier caso no está recomendado aplicar al regulador más de 12V y a los 20V se dañará.
                  
                  .tarjeta.color-acento-botones.p-3(x="95%" y="45%" numero="13")
                    .h5.mb-2 13. ICSP
                    p In-Circuit Serial Programming.

                  .tarjeta.color-acento-botones.p-3(x="85%" y="35%" numero="14")
                    .h5.mb-2 14. Led de encendido
                    p Indica que la placa está recibiendo alimentación.

                  .tarjeta.color-acento-botones.p-3(x="85%" y="95%" numero="15")
                    .h5.mb-2 15. Pines analógicos
                    p Utilizaremos estos pines con instrucciones como Analogread ().

                  .tarjeta.color-acento-botones.p-3(x="70%" y="97%" numero="16")
                    .h5.mb-2 16. Vin
                    p Voltaje Input. Deberá llegarle una tensión regulada y estable (ya que no pasa por el regulador -nº12-) de 5V.

                  .tarjeta.color-acento-botones.p-3(x="67%" y="97%" numero="17")
                    .h5.mb-2 17. GND
                    p proporciona masa, tierra, negativo a nuestros circuitos.

                  .tarjeta.color-acento-botones.p-3(x="60%" y="97%" numero="18")
                    .h5.mb-2 18. 5V
                    p Voltaje Input.

                  .tarjeta.color-acento-botones.p-3(x="57%" y="97%" numero="19")
                    .h5.mb-2 19. 3,3V
                    p  Voltaje Input.

                  .tarjeta.color-acento-botones.p-3(x="53%" y="97%" numero="20")
                    .h5.mb-2 20. Reset pin
                    p  Restablece el microcontrolador ATmega. A su izquierda está el conector IOREF: Digital Reference input V, y a continuación un pin reservado para futuras finalidades.

                  .tarjeta.color-acento-botones.p-3(x="46%" y="34%" numero="21")
                    .h5.mb-2  21. TX y RX LED.
                    p  Estos LEDs indican la comunicación entre la placa y el ordenador. Estos leds parpadearán rápidamente durante la carga de nuestros programas, así como durante la comunicación serie. Útil para la depuración (debugging).

                  .tarjeta.color-acento-botones.p-3(x="53%" y="53%" numero="22")
                    .h5.mb-2 Casa fabricante original.
                    p Aquí puedes comprobar fácilmente si tu placa se trata de una imitación o el original.

                  .tarjeta.color-acento-botones.p-3(x="33%" y="50%" numero="24")
                    .h5.mb-2 24. Reloj / Crystal 16 Mhz oscilador
                    p se usa como reloj externo en el montaje del Arduino.

      .row.p-3 

      .container.color-contenedorpink.p-4
        .row(data-aos="fade-left")
          .col-lg-2.col-6
            img.p-1(src="@/assets/curso/tema2/img6.png") 
          .col-lg-10.col-22.p-3
            h4 Ventajas de Arduino
            ol.lista-ol
              li 
                span.text-bold • Costo
                p Los tableros de Arduino son menos costosos comparados con otros dispositivos como microcontroladores.
              li 
                span.text-bold • Plataforma
                p El software de Arduino (IDE ) es compatible con la mayoría de sistemas operativos como Macintosh OSX, Windows , Linux
              li 
                span.text-bold • Fácil de usar
                p El software de Arduino (IDE)es fácil de usar, además tiene flexibilidad para programadores expertos.
              li 
                span.text-bold • Código abierto
                p El Arduino es un software de código abierto que puede ser programado con lenguajes C, C++, AVR-C 
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
