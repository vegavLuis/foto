<template>
  <div>
    <Carrusel/>
    <InfoTextos/>
    <Imagenes/>
    <Contacto/>
  </div>
</template>

<script>
import Carrusel from '@/components/Carrusel'
import InfoTextos from '@/components/InfoTextos';
import Imagenes from '@/components/Imagenes'
import Contacto from '@/components/Contacto'
export default {
  name: "Home",
  components: {
    Carrusel,
    InfoTextos,
    Imagenes,
    Contacto
  },
};
</script>
