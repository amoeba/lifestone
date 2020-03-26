<template>
  <div>
    <h5>{{ name }}</h5>
    <label>
      Base
      <input v-model="vital.base" type="text" @input="update" />
    </label>
    <label>
      Current
      <input v-model="vital.current" type="text" @input="update" />
    </label>
    <label>
      Max
      <input v-model="vital.max" type="text" @input="update" />
    </label>
  </div>
</template>

<script>
export default {
  name: "CreatureVital",
  model: {
    prop: "vital",
    event: "change"
  },
  props: {
    vital: {
      type: Object,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  methods: {
    update() {
      this.$emit("change", this.vital);
    }
  }
};
</script>
