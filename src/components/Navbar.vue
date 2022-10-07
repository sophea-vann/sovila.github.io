<template>
  <!-- <v-app-bar app flat class="px-8 header"> -->
  <!-- <v-btn icon>
      <v-icon color="#A7121D">fas fa-dragon</v-icon>
    </v-btn> -->
  <!-- <p>Portfolio</p> -->
  <div
    class="header"
    :style="{ backgroundImage: `url(${require('../assets/code.jpg')})` }"
  >
    <v-spacer></v-spacer>
    <v-btn text @click="scroll('home')" class="white--text">Home</v-btn>
    <v-btn text @click="scroll('project')" class="white--text">Project</v-btn>
    <v-btn text @click="scroll('about')" class="white--text">about</v-btn>
    <v-btn text @click="scroll('contact')" class="white--text"> contact</v-btn>
    <!-- </v-app-bar> -->
  </div>
</template>

<script>
export default {
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style>
.header {
  background-color: none;
}
/* .container {
  background-color: none;
} */
</style>
