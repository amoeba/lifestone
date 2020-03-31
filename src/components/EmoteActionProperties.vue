<template>
  <ul>
    <EmoteActionProperty
      v-for="(property, index) in properties"
      :key="index"
      v-model="properties[index]"
      @change="update"
    />
  </ul>
</template>

<script>
import EmoteActionProperty from "./EmoteActionProperty";

export default {
  name: "EmoteActionProperties",
  components: {
    EmoteActionProperty
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
