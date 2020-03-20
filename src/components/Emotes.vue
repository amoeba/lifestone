<template>
  <div v-on:remove="removeEmote">
    <h3>Emotes</h3>
    <button v-on:click="addEmote">Add Emote</button>
    <ul>
      <li v-for="(emote, index) in emotes" :key="index">
        <Emote
          :index="index"
          :emote="emote"
          @input="(newEmote) => { emote = newEmote; update() }" />
        <button v-on:click="removeEmote(index)">Remove Emote</button>
      </li>
    </ul>
  </div>
</template>

<script>
import Emote from "./Emote"
import { createEmote } from "../types/Emotes";

export default {
  name: "Emotes",
  components: {
    Emote
  },
  props: {
    emotes: {
      type: Array,
      required: true
    }
  },
  methods: {
    addEmote() {
      this.emotes.push(createEmote());
    },
    removeEmote(index) {
      this.emotes.splice(index, 1);
    },
    update() {
      this.$emit("input", this.emotes);
    }
  },
  watch: {
    emotes() {
      this.$emit("input", this.emotes);
    }
  }
};
</script>


