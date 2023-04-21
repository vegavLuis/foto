<template>
  <div>
    <v-carousel height="auto" width="auto">
      <v-carousel-item
        class="carrusel"
        v-for="(item, i) in items"
        :key="i"
      >
        <v-img
          :lazy-src="item.src"
          max-height="100vh"
          max-width="100%"
          :src="item.src"
          class="imagen"
        ></v-img>
      </v-carousel-item>
      <h1 class="imagen-carrusel-opacidad text-center">
        CADA MOMENTO ES HERMOSO
      </h1>
      <div class="boton-flotante-carrusel">
        <v-btn elevation="2" class="boton black--text">
          <h3 class="letra-boton">Normal</h3>
        </v-btn>
      </div>
    </v-carousel>
  </div>
</template>
<script>
export default {
  name: "FotoCarrusel",
  data() {
    return {
      items: [
        {
          src: require("@/assets/imgs/foto2.jpg"),
        },
        {
          src: require("@/assets/imgs/foto2.jpg"),
        },
        {
          src: require("@/assets/imgs/foto2.jpg"),
        },
        {
          src: require("@/assets/imgs/foto2.jpg"),
        },
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>
<style>
.carrusel {
  filter: brightness(50%) !important;
}
.imagen-carrusel-opacidad {
  background-color: rgba(255, 0, 0, 0) !important;
  position: absolute !important;
  z-index: 100 !important;
  top: 30% !important;
  color: white;
  width: 100% !important;
  /* left: 50% !important;
  transform: translate(-50%, -50%) !important; */
  /*height: auto !important;
   width: auto !important;
  display: flex !important;
  align-items: center  !important;
  align-self: center  !important;
  padding-bottom: 50px !important;
  justify-content: center !important;
  justify-self: center !important; */
}
.boton-flotante-carrusel {
  background-color: rgba(255, 255, 255, 0) !important;
  position: absolute !important;
  z-index: 100 !important;
  top: 70% !important;
  width: 100% !important;
  /* left:50% !important; */
  /* width: 100% !important; */
}
.boton {
  background-color: rgb(255, 255, 255) !important;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  width: 302px !important;
  height: 86px !important;
}
.v-carousel__controls__item.v-btn {
  color: rgb(0, 0, 0) !important;
  opacity: 1 !important;
}

.v-carousel__controls__item.v-btn.v-btn--active {
  color: rgb(0, 0, 0) !important;
  opacity: 1 !important;
}

.v-carousel__controls__item.v-btn.v-btn--active:before {
  opacity: 1 !important;
  color: #114886 !important;
}
.v-window__prev,
.v-window__next {
  background: #114886;
}
@media screen and (max-width: 700px) {
  .boton {
    width: 78px !important;
    height: 22px !important;
  }
  .letra-boton {
    font-size: 10px !important;
  }
}
@media screen and (max-width: 960px) and (min-width: 600px) {
  .boton {
    width: 148px !important;
    height: 42px !important;
  }
}
</style>
