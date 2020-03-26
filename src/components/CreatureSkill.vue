<template>
  <div>
    <label>
      Name
      <select v-model="skill.name" @change="update">
        <option v-for="(skl, idx) in skills" :key="idx">{{ skl }}</option>
      </select>
    </label>
    <label>
      Spec
      <input v-model="skill.spec" type="text" @change="update" />
    </label>
    <label>
      Base
      <input v-model="skill.base" type="text" @change="update" />
    </label>
    <label>
      Effective
      <input v-model="skill.effective" type="text" @change="update" />
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
