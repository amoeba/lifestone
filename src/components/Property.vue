<template>
  <li>
    <label>
      {{ property.key }}
      <input v-model="property.value" type="text" @change="update" />
    </label>
  </li>
</template>

<script>
export default {
  name: "Property",
  model: {
    prop: "property",
    event: "change"
  },
  props: {
    property: {
      type: Object,
      required: true
    }
  },
  methods: {
    update() {
      this.$emit("change", this.property);
    }
  }
};
</script>
