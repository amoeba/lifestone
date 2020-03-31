<template>
  <div class="box">
    <div class="row">
      <div class="right group">
        <button @click="duplicate">Duplicate</button>
        <button @click="remove">Remove</button>
      </div>
    </div>
    <div class="row">
      <h4>Properties</h4>
      <EmoteProperties v-model="emote.properties" @change="update" />
    </div>
    <EmoteActions v-model="emote.emotes" @change="update" />
  </div>
</template>

<script>
import EmoteProperties from "./EmoteProperties";
import EmoteActions from "./EmoteActions";
import { EMOTE, createEmote } from "../types/Emotes";
import { processEnum } from "../types/Util";

export default {
  name: "Emote",
  components: {
    EmoteProperties,
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
      return processEnum(EMOTE);
    }
  },
  methods: {
    updateType(e) {
      const newEmote = createEmote(Number(e.target.value));
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
