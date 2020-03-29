<template>
  <div class="item">
    <label>
      Key
      <select v-model="skill.key" @change="update">
        <option v-for="(skl, idx) in skills" :key="idx">{{ skl }}</option>
      </select>
    </label>
    <label>
      init_level
      <input v-model="skill.value.init_level" type="text" @change="update" />
    </label>
    <label>
      sac?
      <input v-model="skill.value.sac" type="text" @change="update" />
    </label>
    <button @click="remove">Remove</button>
  </div>
</template>

<script>
import { Skills } from "../types/Skills.ts";

export default {
  name: "CreatureSkill",
  model: {
    prop: "skill",
    event: "change"
  },
  props: {
    skill: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  computed: {
    skills() {
      return Skills;
    }
  },
  methods: {
    remove() {
      this.$emit("remove", this.index);
    },
    update() {
      this.$emit("change", this.skill);
    }
  }
};
</script>
