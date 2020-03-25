<template>
  <div>
    <h5>{{name}}</h5>
    <label>
      Base
      <input type="text" v-model="vital.base" />
    </label>
    <label>
      Current
      <input type="text" v-model="vital.current" />
    </label>
    <label>
      Max
      <input type="text" v-model="vital.max" />
    </label>
  </div>
</template>

<script>
export default {
  name: "CreatureVital",
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
  model: {
    prop: "vital",
    event: "change"
  },
  methods: {
    update() {
      this.$emit("update", this.vital);
    }
  }
};
</script>
