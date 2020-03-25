<template>
  <div>
    <label>
      Name
      <input type="text" v-model="skill.name" />
    </label>
    <label>
      Spec
      <input type="text" v-model="skill.spec" />
    </label>
    <label>
      Base
      <input type="text" v-model="skill.base" />
    </label>
    <label>
      Effective
      <input type="text" v-model="skill.effective" />
    </label>
    <button @click="remove">Remove</button>
  </div>
</template>

<script>
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
  methods: {
    remove() {
      this.$emit("remove", this.index);
    },
    update() {
      this.$emit("update", this.skill);
    }
  }
};
</script>
