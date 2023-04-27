<template>
  <div>
    <v-card color="" class="mt-15 contenedor" width="100% " height="100vh">
      <v-img src="@/assets/imgs/construccion.jpg" class="hijo" width="100%">
      </v-img>
      <v-card class="pt-15" elevation="0">
        <h4 class="">Pagina en Construccion</h4>
      </v-card>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "FotoPaginaConstruccion",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style scoped>
.contenedor {
  text-align: center !important;
  position: relative !important;
}
.hijo {
  width: 50% !important;
  margin: 0 auto !important;
  position: absolute !important;
  top: 40% !important;
  right: 50% !important;
  transform: translate(50%, -50%) !important;
}
</style>
