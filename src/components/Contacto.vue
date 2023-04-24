<template>
  <div>
    <v-card color="#D9D9D9" class="text-center">
      <h2 class="pt-4">PÓNGASE EN CONTACTO CON NOSOTROS</h2>
      <p class="body mb-0">
        Solet vivendum efficiantur nec, eum te porro saperet tibique, vel augue
        timeam sententiae an.
      </p>
      <v-form class="mr-4 ml-4 mt-4">
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                label="Nombre"
                required
                clearable
                outlined
                background-color="white"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="Telefono"
                type="number"
                required
                clearable
                outlined
                background-color="white"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Correo"
                required
                clearable
                outlined
                background-color="white"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                outlined
                clearable
                background-color="white"
                label="Mensaje"
              ></v-textarea>
            </v-col>
          </v-row>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "FotoContacto",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
