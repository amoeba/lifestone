<template>
  <div>
    <div class="two-col">
      <h3>Emotes</h3>
      <div class="right">
        <button @click="addEmote">Add Emote</button>
      </div>
    </div>
    <ul>
      <li v-for="(emote, index) in emotes" :key="index">
        <Emote
          v-model="emotes[index]"
          :index="index"
          @change="update"
          @duplicate="duplicateEmote"
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
  model: {
    prop: "emotes",
    event: "change"
  },
  props: {
    emotes: {
      type: Array,
      required: true
    }
  },
  methods: {
    addEmote() {
      this.emotes.push(createEmote(EMOTE.USE));
      this.$emit("change", this.emotes);
    },
    duplicateEmote(index) {
      this.emotes.splice(
        index,
        0,
        JSON.parse(JSON.stringify(this.emotes[index]))
      );
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
