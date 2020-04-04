<template>
  <div id="app" :class="theme">
    <h1>Lifestone</h1>
    <button class="theme-toggle" @click="toggleDarkMode">
      <span class="theme-icon"></span>
    </button>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/create">Create</router-link>
      <router-link to="/drafts">Drafts</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { THEME } from "./types/UI";

export default {
  name: "App",
  computed: {
    nextMode() {
      const preference = window.matchMedia("(prefers-color-scheme: dark)")
        .matches;

      if (this.$store.state.ui.darkMode === null) {
        return preference === "light" ? THEME.DARK : THEME.LIGHT;
      }

      return this.$store.state.ui.darkMode ? THEME.LIGHT : THEME.DARK;
    },

    theme() {
      if (this.$store.state.ui.darkMode === null) {
        return "";
      }

      return this.$store.state.ui.darkMode ? THEME.DARK : THEME.LIGHT;
    }
  },
  methods: {
    toggleDarkMode() {
      const preference = window.matchMedia("(prefers-color-scheme: dark)")
        .matches;

      this.$store.dispatch("toggleDarkMode", preference);
    }
  }
};
</script>
