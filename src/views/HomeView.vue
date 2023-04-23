<template>
  <div>
    <Carrusel/>
    <InfoTextos/>
    <Imagenes/>
  </div>
</template>

<script>
import Carrusel from '@/components/Carrusel'
import InfoTextos from '@/components/InfoTextos';
import Imagenes from '@/components/Imagenes'
export default {
  name: "Home",
  components: {
    Carrusel,
    InfoTextos,
    Imagenes
  },
};
</script>
