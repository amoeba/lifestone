<template>
  <li>
    {{ property.key }}:
    <input type="text" v-model="property.value" @change="update" />
  </li>
</template>

<script>
export default {
  name: "Property",
  props: {
    property: {
      type: Object,
      required: true
    }
  },
  model: {
    prop: "property",
    event: "change"
  },
  methods: {
    update() {
      this.$emit("change", this.property);
    }
  }
};
</script>
