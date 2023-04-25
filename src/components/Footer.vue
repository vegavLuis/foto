<template>
  <div>
    <v-footer dark padless>
      <v-card-text class="text-center white--text body font-weight-bold">
        SÍGUENOS
      </v-card-text>
      <v-row justify="center" no-gutters>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-row>
      <v-card-text class="text-center white--text body font-weight-bold">
        ENLACES RÁPIDOS
      </v-card-text>
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          rounded
          class="my-2 small"
        >
          {{ link }}
        </v-btn>
      </v-row>
    </v-footer>
  </div>
</template>
<script>
export default {
  name: "FotoFooter",
  data() {
    return {
    //   links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"],
    //   icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
      links: ["Home", "Pages", "Portafolio", "Galeria", "Blog", "Contacto"],
      icons: ["mdi-facebook", "mdi-instagram"],
    };
  },
  mounted() {},
  methods: {},
};
</script>
