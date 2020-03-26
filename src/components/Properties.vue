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
  model: {
    prop: "properties",
    event: "change"
  },
  props: {
    properties: {
      type: Array,
      required: true
    }
  },
  methods: {
    update() {
      this.$emit("change", this.properties);
    }
  }
};
</script>
