<template>
  <div>
    <h5>{{ name }}</h5>
    <label>
      Base
      <input type="text" v-model="vital.base" @input="update" />
    </label>
    <label>
      Current
      <input type="text" v-model="vital.current" @input="update" />
    </label>
    <label>
      Max
      <input type="text" v-model="vital.max" @input="update" />
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
      this.$emit("change", this.vital);
    }
  }
};
</script>
