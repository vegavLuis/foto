<template>
  <v-app>
    <v-overlay
      :value="overlay"
      :opacity="opacity"
      :absolute="absolute"
      class="overlay"
    >
      <!-- <v-progress-circular
        :size="50"
        color="primary"
        indeterminate
        class="progres"
      ></v-progress-circular> -->
    </v-overlay>
    <!-- <v-card class="overflow-hidden" height="auto" width="auto"> -->
    <v-app-bar elevation="4" color="#EAEAEA" fixed class="barra">
      <v-app-bar-nav-icon>
        <v-img src="@/assets/imgs/foto1.jpg" class="img" contain></v-img>
      </v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>
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
    </v-app-bar>
    <v-navigation-drawer
    v-model="drawer"
    fixed
    temporary
    class="navi"
    floating
    >
    <v-list nav dense class="mt-4">
        <v-list-item-group
          v-model="group"
          active-class="#F5F5F5 text--accent-4"
          v-for="menu in menus"
          :key="menu.index"
        >
          <v-list-item>
            <v-list-item-title>
              {{ menu.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
    <!-- </v-card> -->
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    overlay: false,
    opacity: 1,
    absolute: true,
    drawer: false,
    group: null,
    menus: [
      { title: "Home" },
      { title: "Pages" },
      { title: "Portafolio" },
      { title: "Galeria" },
      { title: "Blog" },
      { title: "Contacto" },
    ],
  }),
  created() {
    this.overlay = true;
  },
  watch: {
    overlay(val) {
      val &&
        setTimeout(() => {
          this.overlay = false;
        }, 2000);
    },
    group() {
      this.drawer = false;
    },
  },
};
</script>
<style>
.barra {
  z-index: 190 !important;
}
.navi {
  z-index: 190 !important;
}
.img {
  margin-left: 20px;
  max-height: 50px;
  max-width: 70px;
  overflow: hidden;
}
h1 {
  font-family: "Josefin Sans", sans-serif !important;
  font-size: 47px !important;
}
h2 {
  font-family: "Josefin Sans", sans-serif !important;
  font-size: 39px !important;
}
h3 {
  font-family: "Josefin Sans", sans-serif !important;
  font-size: 33px !important;
}
h4 {
  font-family: "Josefin Sans", sans-serif !important;
  font-size: 27px !important;
}
h5 {
  font-family: "Josefin Sans", sans-serif !important;
  font-size: 23px !important;
}
h6 {
  font-family: "Josefin Sans", sans-serif !important;
  font-size: 19px !important;
}
.body {
  font-family: "Josefin Sans", sans-serif !important;
  font-size: 16px !important;
}
.small {
  font-family: "Josefin Sans", sans-serif !important;
  font-size: 13px !important;
}
.overlay {
  z-index: 200 !important;
  width: 100% !important;
  height: 100% !important;
}
/* .progres {
  z-index: 300 !important;
  width: 10% !important;
  height: 10% !important;
} */
@media screen and (max-width: 700px) {
  h1 {
    font-size: 23px !important;
  }
  h2 {
    font-size: 22px !important;
  }
  h3 {
    font-size: 20px !important;
  }
  h4 {
    font-size: 19px !important;
  }
  h5 {
    font-size: 18px !important;
  }
  h6 {
    font-size: 17px !important;
  }
  .small {
    font-size: 15px !important;
  }
}
@media screen and (max-width: 960px) and (min-width: 600px) {
  h1 {
    font-size: 32px !important;
  }
  h2 {
    font-size: 28px !important;
  }
  h3 {
    font-size: 25px !important;
  }
  h4 {
    font-size: 22px !important;
  }
  h5 {
    font-size: 20px !important;
  }
  h6 {
    font-size: 18px !important;
  }
  .small {
    font-size: 14px !important;
  }
}
@media screen and (min-width: 1904px) {
  h1 {
    font-size: 47px !important;
  }
  h2 {
    font-size: 39px !important;
  }
  h3 {
    font-size: 33px !important;
  }
  h4 {
    font-size: 27px !important;
  }
  h5 {
    font-size: 23px !important;
  }
  h6 {
    font-size: 19px !important;
  }
  .small {
    font-size: 13px !important;
  }
}
</style>
