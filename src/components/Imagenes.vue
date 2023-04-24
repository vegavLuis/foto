<template>
  <div>
    <v-card>
      <v-row no-gutters>
        <v-col
          cols="12"
          md="6"
          v-for="imagenes in images"
          :key="imagenes.index"
          class="mb-2"
        >
          <v-card color="white" class="mr-2 ml-2 mt-2">
            <!-- lazy-src="@/assets/imgs/foto3.jpg"
          src="@/assets/imgs/foto3.jpg" -->
            <v-img :src="imagenes.ima" height="100%" class=""></v-img>
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
          ima: require("@/assets/imgs/foto3.jpg"),
        },
        {
          ima: require("@/assets/imgs/foto3.jpg"),
        },
        {
          ima: require("@/assets/imgs/foto3.jpg"),
        },
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>
<style scoped>
.imagenes {
  object-fit: contain;
}
</style>
