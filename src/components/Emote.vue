<template>
  <div>
    Emote
    <ul>
      <li>
        Type:
        <select v-model="emote.type" @input="updateType">
          <option v-for="type in emoteTypes" :key="type" :value="type">{{
            type
          }}</option>
        </select>
      </li>
      <li>
        Properties
        <EmoteProperties v-model="emote.properties" />
      </li>
      <li>
        <EmoteActions v-model="emote.actions" />
      </li>
    </ul>
  </div>
</template>

<script>
import EmoteProperties from "./EmoteProperties";
import EmoteActions from "./EmoteActions";
import { EMOTE, createEmote } from "../types/Emotes";

export default {
  name: "Emote",
  components: {
    EmoteProperties,
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
    update() {
      this.$emit("change", this.emote);
    },
    updateType(e) {
      const newEmote = createEmote(e.target.value);
      console.log(newEmote);
      this.$emit("change", newEmote);
    }
  }
};
</script>
