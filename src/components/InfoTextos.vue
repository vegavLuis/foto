<template>
  <div>
    <v-card color="#EEEEEE" width="100%" class="">
      <v-row no-gutters>
        <v-col cols="12" md="4" v-for="card in cards" :key="card.title">
          <v-card
            color="#EEEEEE"
            class="d-flex align-center flex-column"
            elevation="0"
          >
            <v-img
              class="d-flex align-center"
              :lazy-src="card.img"
              :src="card.img"
              width="65px"
              height="65px"
            ></v-img>
            <h2 class="text-center">{{ card.title }}</h2>
            <p class="body mb-0 text-center">{{ card.body }}</p>
          </v-card>
        </v-col>
        <!-- <v-col cols="12" md="4">
          <v-card
            color="#EEEEEE"
            class="d-flex align-center flex-column"
            elevation="0"
          >
            <v-img
              class="d-flex align-center"
              lazy-src="@/assets/imgs/anillos.svg"
              src="@/assets/imgs/anillos.svg"
              width="65px"
              height="65px"
            ></v-img>
            <v-container>
              <h2 class="text-center">BODAS</h2>
              <p class="body mb-0 text-center">
                Abitur assueverit no. Iudico putent apeirian an mei, no tritani
                ullamcorper varius mauris eu.
              </p>
            </v-container>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card
            color="#EEEEEE"
            class="d-flex align-center flex-column"
            elevation="0"
          >
            <v-img
              class="d-flex align-center"
              lazy-src="@/assets/imgs/copas.svg"
              src="@/assets/imgs/copas.svg"
              width="65px"
              height="65px"
            ></v-img>
            <v-container>
              <h2 class="text-center">SOCIALES</h2>
              <p class="body mb-0 text-center">
                Abitur assueverit no. Iudico putent apeirian an mei, no tritani
                ullamcorper varius mauris eu.
              </p>
            </v-container>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card
            color="#EEEEEE"
            class="d-flex align-center flex-column"
            elevation="0"
          >
            <v-img
              class="d-flex align-center"
              lazy-src="@/assets/imgs/cultura.svg"
              src="@/assets/imgs/cultura.svg"
              width="65px"
              height="65px"
            ></v-img>
            <v-container>
              <h2 class="text-center">ACTIVIDADES CULTURALES</h2>
              <p class="body mb-0 text-center">
                Abitur assueverit no. Iudico putent apeirian an mei, no tritani
                ullamcorper varius mauris eu.
              </p>
            </v-container>
          </v-card>
        </v-col> -->
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "FotoInfoTextos",
  data() {
    return {
      cards: [
        {
          img: require("@/assets/imgs/anillos.svg"),
          title: "BODAS",
          body: "Abitur assueverit no. Iudico putent apeirian an mei, no tritani ullamcorper varius mauris eu.",
        },
        {
          img: require("@/assets/imgs/copas.svg"),
          title: "SOCIALES",
          body: "Abitur assueverit no. Iudico putent apeirian an mei, no tritani ullamcorper varius mauris eu.",
        },
        {
          img: require("@/assets/imgs/cultura.svg"),
          title: "ACTIVIDADES CULTURALES",
          body: "Abitur assueverit no. Iudico putent apeirian an mei, no tritani ullamcorper varius mauris eu.",
        },
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>
<style></style>
