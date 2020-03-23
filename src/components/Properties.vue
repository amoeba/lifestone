<template>
  <ul>
    <Property
      v-for="(property, index) in properties"
      :key="index"
      v-model="properties[index]"
      @change="update"
    />
  </ul>
</template>

<script>
import Property from "./Property";

export default {
  name: "Properties",
  components: {
    Property
  },
  props: {
    properties: {
      type: Array,
      required: true
    }
  },
  model: {
    prop: "properties",
    event: "change"
  },
  methods: {
    update() {
      this.$emit("change", this.properties);
    }
  }
};
</script>
