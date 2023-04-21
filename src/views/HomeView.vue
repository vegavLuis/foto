<template>
  <div>
    <Carrusel/>
    <InfoTextos/>
  </div>
</template>

<script>
import Carrusel from '@/components/Carrusel'
import InfoTextos from '@/components/InfoTextos';
export default {
  name: "Home",
  components: {
    Carrusel,
    InfoTextos
  },
};
</script>
