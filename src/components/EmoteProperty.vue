<template>
  <li>
    {{ property.key }}:
    <input type="text" v-model="property.value" />
  </li>
</template>

<script>
export default {
  name: "EmoteProperty",
  props: {
    index: {
      type: Number,
      required: true
    },
    property: {
      type: Object,
      required: true
    }
  },
  model: {
    prop: "property",
    event: "change"
  }
};
</script>
