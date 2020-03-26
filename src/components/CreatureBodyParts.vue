<template>
  <div class="box">
    <div class="two-col row">
      <h4>Body Parts</h4>
      <div class="right">
        <button @click="add">Add Part</button>
      </div>
    </div>
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
import { createCreatureBodyPart } from "../types/Creature";

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
      this.parts.push(createCreatureBodyPart());
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
