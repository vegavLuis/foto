<template>
  <div>
    <Carrusel/>
    <InfoTextos/>
    <Imagenes/>
    <Contacto/>
    <Footer/>
  </div>
</template>

<script>
import Carrusel from '@/components/Carrusel'
import InfoTextos from '@/components/InfoTextos';
import Imagenes from '@/components/Imagenes'
import Contacto from '@/components/Contacto'
import Footer from '@/components/Footer'
export default {
  name: "Home",
  components: {
    Carrusel,
    InfoTextos,
    Imagenes,
    Contacto,
    Footer
  },
};
</script>
