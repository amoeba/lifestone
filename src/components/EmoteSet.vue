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
        <button @click="remove">Remove Category</button>
      </div>
      <div class="right">
        <button @click="addEmote">Add Emote</button>
      </div>
    </div>
    <div class="row">
      <div v-if="emoteset.value.length === 0">No Emotes to show.</div>

      <Emote
        v-for="(emote, index) in emoteset.value"
        :key="index"
        v-model="emoteset.value[index]"
        :index="index"
        @change="update"
        @duplicate="duplicate"
        @remove="remove"
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
    duplicate(index) {
      this.emoteset.splice(
        index,
        0,
        JSON.parse(JSON.stringify(this.emoteset[index]))
      );
      this.$emit("change", this.emoteset);
    },
    remove(index) {
      this.$emit("remove", this.index);
    }
  }
};
</script>
