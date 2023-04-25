<template>
  <v-app>
    <v-overlay
      :value="overlay"
      :opacity="opacity"
      :absolute="absolute"
      class="overlay"
    >
     <v-progress-circular
      :size="50"
      color="primary"
      indeterminate
      class="progres"
    ></v-progress-circular>
    </v-overlay>
   
    <AppBarVue />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppBarVue from "./components/AppBar.vue";
export default {
  name: "App",
  components: {
    AppBarVue,
  },
  data: () => ({
    overlay: false,
    opacity: 1,
    absolute: true,
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
  },
};
</script>
<style>
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
  widows: 50% !important;
  height: 30% !important;
}
.progres {
  z-index: 300 !important;
}
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
