<template>
  <div class="item">
    <label>
      Skill
      <select v-model.number="skill.id" @change="update">
        <option v-for="(skl, idx) in skills" :key="idx">{{ skl }}</option>
      </select>
    </label>
    <label>
      Training
      <select v-model.number="skill.value.sac" @change="update">
        <option
          v-for="(training, idx) in trainingLevels"
          :key="idx"
          :value="training.id"
        >{{ training.label }}</option>
      </select>
    </label>
    <label>
      Base
      <input v-model.number="skill.value.init_level" type="text" @change="update" />
    </label>

    <button @click="remove">Remove</button>
  </div>
</template>

<script>
import { processEnum } from "../types/Util.ts";
import { Training, Skills } from "../types/Skills.ts";

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
    trainingLevels() {
      return processEnum(Training);
    },
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
