<template>
  <ul>
    <EmoteProperty
      v-for="(property, index) in properties"
      :key="index"
      :index="index"
      :property="property"
      @input="(newProperty) => { property = newProperty }"
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
  watch: {
    properties() {
      this.$emit("input", this.actions);
    }
  }
};
</script>


