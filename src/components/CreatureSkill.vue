<template>
  <div>
    <label>
      Name
      <input type="text" v-model="skill.name" @change="update" />
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
      this.$emit("change", this.skill);
    }
  }
};
</script>
