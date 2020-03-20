<template>
  <li>
    {{ property.key }}:
    <input v-model="property.value" />
  </li>
</template>

<script>
export default {
  name: "EmoteActionProperty",
  props: {
    index: {
      type: Number,
      required: true
    },
    property: {
      type: Object,
      required: true
    }
  }
};
</script>


