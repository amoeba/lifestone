<template>
  <ul>
    <EmoteProperty
      v-for="(property, index) in properties"
      :key="index"
      :index="index"
      v-model="properties[index]"
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
  props: {
    properties: {
      type: Array,
      required: false
    }
  },
  model: {
    prop: "properties",
    event: "change"
  }
};
</script>
