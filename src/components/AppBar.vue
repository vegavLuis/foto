<template>
  <div>
    <v-toolbar elevation="4" color="#EAEAEA">
      <v-app-bar-nav-icon>
        <v-img src="@/assets/imgs/foto1.jpg" class="img" contain></v-img>
      </v-app-bar-nav-icon>
      <v-spacer> </v-spacer>

      <!-- <v-bottom-sheet v-model="sheet">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon class="hidden-md-and-up" v-bind="attrs" v-on="on">
            <v-icon color="#000000">mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-sheet height="100vh" width="50%" class="mt-0 pt-0">
          <v-btn text color="error" @click="sheet = !sheet"> close </v-btn>
          <div>This is a bottom sheet using the inset prop</div>
        </v-sheet>
      </v-bottom-sheet> -->

      <v-btn
        plain
        v-for="menu in menus"
        :key="menu.index"
        class="hidden-sm-and-down text-center"
      >
        <h6>
          {{ menu.title }}
        </h6>
      </v-btn>
    </v-toolbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sheet: true,
      menus: [
        { title: "Home" },
        { title: "Pages" },
        { title: "Portafolio" },
        { title: "Galeria" },
        { title: "Blog" },
        { title: "Contacto" },
      ],
    };
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
