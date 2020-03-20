<template>
  <div @input="update">
    <h2>Weenie Editor</h2>
    <label>
      Name
      <input type="text" v-model="weenie.name" />
    </label>
    <label>
      ID
      <input type="text" v-model="weenie.id" />
    </label>

    <Emotes :emotes="weenie.emotes" @input="(newEmotes) => { emotes = newEmotes; update() }" />

    <textarea v-model="weenieJSON" rows="40" cols="120" />
  </div>
</template>

<script>
import Emotes from "./Emotes";

export default {
  name: "WeenieEditor",
  components: {
    Emotes
  },
  computed: {
    weenie: {
      get() {
        return this.$store.state.weenie;
      }
    },
    weenieJSON: {
      get() {
        return JSON.stringify(this.$store.state.weenie, null, "\t");
      }
    }
  },
  methods: {
    update() {
      this.$store.dispatch("updateWeenie", this.weenie);
    }
  }
};
</script>
