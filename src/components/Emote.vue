<template>
  <div>
    <select v-model="emote.type" @input="updateType">
      <option v-for="type in emoteTypes" :key="type" :value="type">{{
        type
      }}</option>
    </select>
    <Properties v-model="emote.properties" @change="update" />
    <EmoteActions v-model="emote.actions" @change="update" />
  </div>
</template>

<script>
import Properties from "./Properties";
import EmoteActions from "./EmoteActions";
import { EMOTE, createEmote } from "../types/Emotes";

export default {
  name: "Emote",
  components: {
    Properties,
    EmoteActions
  },
  props: {
    emote: {
      type: Object,
      required: true
    }
  },
  model: {
    prop: "emote",
    event: "change"
  },
  computed: {
    emoteTypes() {
      return Object.keys(EMOTE);
    }
  },
  methods: {
    updateType(e) {
      const newEmote = createEmote(e.target.value);
      this.$emit("change", newEmote);
    },
    update() {
      this.$emit("change", this.emote);
    }
  }
};
</script>
