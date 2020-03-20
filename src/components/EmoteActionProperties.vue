<template>
  <div>
    Properties
    <ul v-for="(property, index) in properties" :key="index">
      <EmoteActionProperty
        :index="index"
        :property="property"
        @input="(newProperty) => { property = newProperty}" />
    </ul>
  </div>
</template>

<script>
import EmoteActionProperty from "./EmoteActionProperty";

export default {
  name: "EmoteActionProperties",
  components: {
    EmoteActionProperty
  },
  props: {
    properties: {
      type: Array,
      required: true
    }
  }
};
</script>


