<template>
  <div class="box">
    <div class="two-col row">
      <h4>Body Parts</h4>
      <div class="right">
        <button @click="add">Add Part</button>
      </div>
    </div>
    <p v-if="parts.length === 0">No body parts to show.</p>
    <CreatureBodyPart
      v-for="(part, index) in parts"
      :key="index"
      v-model="parts[index]"
      :index="index"
      @change="update"
      @add="add"
      @remove="remove"
    />
  </div>
</template>

<script>
import CreatureBodyPart from "./CreatureBodyPart";
import { createBodyPart } from "../types/BodyPart";

export default {
  name: "CreatureBodyParts",
  components: {
    CreatureBodyPart
  },
  model: {
    prop: "parts",
    event: "change"
  },
  props: {
    parts: {
      type: Array,
      required: true
    }
  },
  methods: {
    add() {
      this.parts.push(createBodyPart());
      this.$emit("change", this.parts);
    },
    remove(index) {
      this.parts.splice(index, 1);
      this.$emit("change", this.parts);
    },
    update() {
      this.$emit("change", this.parts);
    }
  }
};
</script>
