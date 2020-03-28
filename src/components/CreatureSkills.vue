<template>
  <div class="box">
    <div class="two-col row">
      <h4>Skills</h4>
      <div class="right">
        <button @click="addSkill">Add Skill</button>
      </div>
    </div>
    <p v-if="skills.length === 0">No skills to show.</p>
    <CreatureSkill
      v-for="(skill, index) in skills"
      :key="index"
      v-model="skills[index]"
      :index="index"
      @change="update"
      @remove="removeSkill"
    />
  </div>
</template>

<script>
import CreatureSkill from "./CreatureSkill";
import { createSkill } from "../types/Creature";

export default {
  name: "CreatureSkills",
  components: {
    CreatureSkill
  },
  model: {
    prop: "skills",
    event: "change"
  },
  props: {
    skills: {
      type: Array,
      required: true
    }
  },
  methods: {
    addSkill() {
      this.skills.push(createSkill());
      this.$emit("change", this.skills);
    },
    removeSkill(index) {
      this.skills.splice(index, 1);
      this.$emit("change", this.skills);
    },
    update() {
      this.$emit("change", this.skills);
    }
  }
};
</script>
