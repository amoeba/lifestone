<template>
  <div>
    <h3>Emotes</h3>
    <button @click="addEmote">Add Emote</button>
    <ul>
      <li v-for="(emote, index) in emotes" :key="index">
        <Emote
          v-model="emotes[index]"
          :index="index"
          @change="update"
          @remove="removeEmote"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import Emote from "./Emote";
import { createEmote } from "../types/Emotes";
import { EMOTE } from "../types/Emotes";

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
  model: {
    prop: "emotes",
    event: "change"
  },
  methods: {
    addEmote() {
      this.emotes.push(createEmote(EMOTE.USE));
      this.$emit("change", this.emotes);
    },
    removeEmote(index) {
      this.emotes.splice(index, 1);
      this.$emit("change", this.emotes);
    },
    update() {
      this.$emit("change", this.emotes);
    }
  }
};
</script>
