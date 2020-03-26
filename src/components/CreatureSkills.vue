<template>
  <div>
    <div class="two-col row">
      <h4>Skills</h4>
      <div class="right">
        <button @click="addSkill">Add Skill</button>
      </div>
    </div>
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
import { createSkill } from "../types/Creature";

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
