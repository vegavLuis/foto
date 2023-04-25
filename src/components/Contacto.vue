<template>
  <div>
    <v-card color="#D9D9D9" class="text-center">
      <h2 class="pt-4">PÓNGASE EN CONTACTO CON NOSOTROS</h2>
      <p class="body mb-0">
        Solet vivendum efficiantur nec, eum te porro saperet tibique, vel augue
        timeam sententiae an.
      </p>
      <v-form class="mr-4 ml-4 mt-4" lazy-validation>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="nombre"
              label="Nombre"
              required
              clearable
              outlined
              background-color="white"
              :rules="nombreRules"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="telefono"
              label="Telefono"
              type="number"
              required
              clearable
              outlined
              background-color="white"
              :rules="telefonoRules"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="correo"
              label="Correo"
              required
              clearable
              outlined
              background-color="white"
              :rules="correoRules"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-textarea
              v-model="mensaje"
              :rules="mensajeRules"
              outlined
              clearable
              background-color="white"
              label="Mensaje"
            ></v-textarea>
          </v-col>
          <v-btn color="success" class="ml-4 mb-8" :disabled="bloquear">
            Enviar
          </v-btn>
        </v-row>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "FotoContacto",
  data() {
    return {
      nombre: "",
      telefono: "",
      correo: "",
      mensaje: "",
      nombreRules: [(v) => !!v || "El nombre es requerido"],
      telefonoRules: [(v) => !!v || "El telefono es requerido"],
      correoRules: [(v) => !!v || "El correo es requerido"],
      mensajeRules: [(v) => !!v || "El mensaje es requerido"],
    };
  },
  computed: {
    bloquear() {
      if (this.nombre.trim() === "") {
        return true;
      } else if (this.telefono.trim() === "") {
        return true;
      } else if (this.correo.trim() === "") {
        return true;
      } else if (this.mensaje.trim() === "") {
        return true;
      } else {
        return false;
      }
      // return this.campos.nombre.trim() === "" ? true : false
    },
  },
  mounted() {},
  methods: {},
};
</script>
