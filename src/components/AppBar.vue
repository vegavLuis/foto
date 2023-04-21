<template>
  <div>
    <v-toolbar elevation="4" color="#EAEAEA">
      <v-app-bar-nav-icon>
        <v-img src="@/assets/imgs/foto1.jpg" class="img" contain></v-img>
      </v-app-bar-nav-icon>
      <v-spacer> </v-spacer>
      <v-icon color="#000000">mdi-menu</v-icon>
    </v-toolbar>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style scoped>
.img {
  margin-left: 20px;
  max-height: 50px;
  max-width: 70px;
  overflow: hidden;
}
</style>
