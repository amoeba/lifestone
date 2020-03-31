<template>
  <div class="box">
    <div class="two-col">
      <div class="group">
        <select v-model="emoteset.id" @change="updateType">
          <option v-for="(type, index) in emoteTypes" :key="index" :value="type.id">
            {{
            type.label
            }}
          </option>
        </select>
        <button @click="addEmote">Add Category Entry</button>
        <button @click="remove">Remove Category</button>
      </div>
    </div>
    <div class="row">
      <div v-if="emoteset.value.length === 0">No entries to show for this category.</div>
      <Emote
        v-for="(emote, index) in emoteset.value"
        :key="index"
        v-model="emoteset.value[index]"
        :index="index"
        @change="update"
        @duplicate="duplicateEmote"
        @remove="removeEmote"
      />
    </div>
  </div>
</template>

<script>
import Emote from "./Emote";
import EmoteActions from "./EmoteActions";
import { EMOTE, createEmoteSet, createEmote } from "../types/Emotes";
import { processEnum } from "../types/Util";

export default {
  name: "EmoteSet",
  components: {
    Emote
  },
  model: {
    prop: "emoteset",
    event: "change"
  },
  props: {
    emoteset: {
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
    remove(index) {
      this.$emit("remove", index);
    },
    updateType(e) {
      const newEmoteSet = createEmoteSet(Number(e.target.value));
      this.$emit("change", newEmoteSet);
    },
    addEmote() {
      this.emoteset.value.push(createEmote(0));
    },
    update() {
      this.$emit("change", this.emoteset);
    },
    duplicateEmote(index) {
      this.emoteset.value.splice(
        index,
        0,
        JSON.parse(JSON.stringify(this.emoteset.value[index]))
      );
      this.$emit("change", this.emoteset);
    },
    removeEmote(index) {
      this.emoteset.value.splice(index, 1);
      this.$emit("change", this.emoteset);
    }
  }
};
</script>
