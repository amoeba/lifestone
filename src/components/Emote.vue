<template>
  <div class="box">
    <div class="two-col row">
      <select v-model="emote.type" @input="updateType">
        <option v-for="type in emoteTypes" :key="type" :value="type">
          {{
          type
          }}
        </option>
      </select>
      <div class="right">
        <button @click="duplicate">Duplicate</button>
        <button @click="remove">Remove</button>
      </div>
    </div>
    <div class="row">
      <Properties v-model="emote.properties" @change="update" />
    </div>
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
  model: {
    prop: "emote",
    event: "change"
  },
  props: {
    emote: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  computed: {
    emoteTypes() {
      return EMOTE;
    }
  },
  methods: {
    updateType(e) {
      const newEmote = createEmote(e.target.value);
      this.$emit("change", newEmote);
    },
    update() {
      this.$emit("change", this.emote);
    },
    duplicate() {
      this.$emit("duplicate", this.index);
    },
    remove() {
      this.$emit("remove", this.index);
    }
  }
};
</script>
