<template>
  <div>
    <button @click="addSkill">Add Skill</button>
    <CreatureSkill
      v-for="(skill, index) in skills"
      v-model="skills[index]"
      :index="index"
      :key="index"
      @change="update"
      @remove="removeSkill"
    />
  </div>
</template>

<script>
import CreatureSkill from "./CreatureSkill";
import { createSkill } from "../types/Skills";

export default {
  name: "CreatureSkills",
  components: {
    CreatureSkill
  },
  props: {
    skills: {
      type: Array,
      required: true
    }
  },
  model: {
    prop: "skills",
    event: "change"
  },
  methods: {
    addSkill() {
      this.skills.push(createSkill());
    },
    removeSkill(index) {
      this.skills.splice(index, 1);
      this.$emit("update", this.skills);
    },
    update() {
      this.$emit("update", this.skills);
    }
  }
};
</script>
