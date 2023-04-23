<template>
  <div>
    <v-card>
      <v-row no-gutters>
        <v-col cols="12" md="6" v-for="imagen in images" :key="imagen.id">
          <v-card
            color="white"
            class="mr-2 ml-2 mt-2"
            width="95%"
            height="95%"
            elevation="0"
          >
            <v-img
              :src="imagen.ima"
              height="95%"
            ></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "FotoImagenes",
  components: {},
  data() {
    return {
      images: [
        {
          ima: require("@/assets/imgs/foto3.jpg"),
        },
        {
          ima: require("@/assets/imgs/foto4.jpg"),
        },
        {
          ima: require("@/assets/imgs/foto5.jpg"),
        },
        {
          ima: require("@/assets/imgs/foto6.jpg"),
        },
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>
<style scoped>
.imagenes{
  object-fit: contain;
}
</style>
