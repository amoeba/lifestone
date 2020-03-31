<template>
  <ul>
    <EmoteProperty
      v-for="(property, index) in properties"
      :key="index"
      v-model="properties[index]"
      @change="update"
    />
  </ul>
</template>

<script>
import EmoteProperty from "./EmoteProperty";

export default {
  name: "EmoteProperties",
  components: {
    EmoteProperty
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
