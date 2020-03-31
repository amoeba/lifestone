<template>
  <div>
    <div class="two-col">
      <h3>Emotes</h3>
      <div class="right">
        <button @click="addEmote">Add Emote Category</button>
      </div>
    </div>
    <p v-if="emotesets.length === 0">No emotes to show.</p>
    <EmoteSet
      v-for="(emote, index) in emotesets"
      :key="index"
      v-model="emotesets[index]"
      :index="index"
      @change="update"
      @duplicate="duplicateEmoteSet"
      @remove="removeEmoteSet"
    />
  </div>
</template>

<script>
import EmoteSet from "./EmoteSet";
import { createEmoteSet } from "../types/Emotes";

export default {
  name: "EmoteTable",
  components: {
    EmoteSet
  },
  model: {
    prop: "emotesets",
    event: "change"
  },
  props: {
    emotesets: {
      type: Array,
      required: true
    }
  },
  methods: {
    addEmote() {
      this.emotesets.push(createEmoteSet(0));
      this.$emit("change", this.emotesets);
    },
    duplicateEmoteSet(index) {
      this.emotesets.splice(
        index,
        0,
        JSON.parse(JSON.stringify(this.emotesets[index]))
      );
      this.$emit("change", this.emotesets);
    },
    removeEmoteSet(index) {
      this.emotesets.splice(index, 1);
      this.$emit("change", this.emotesets);
    },
    update() {
      this.$emit("change", this.emotesets);
    }
  }
};
</script>
