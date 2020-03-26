<template>
  <div>
    <label>
      Name
      <select v-model="skill.name" @change="update">
        <option v-for="(skill, index) in skills" :key="index">{{
          skill
        }}</option>
      </select>
    </label>
    <label>
      Spec
      <input type="text" v-model="skill.spec" @change="update" />
    </label>
    <label>
      Base
      <input type="text" v-model="skill.base" @change="update" />
    </label>
    <label>
      Effective
      <input type="text" v-model="skill.effective" @change="update" />
    </label>
    <button @click="remove">Remove</button>
  </div>
</template>

<script>
import { Skills } from "../types/Skills.ts";

export default {
  name: "CreatureSkill",
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
  model: {
    prop: "skill",
    event: "change"
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
