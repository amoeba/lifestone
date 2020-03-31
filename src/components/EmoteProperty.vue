<template>
  <div>
    <label>
      {{ propertyLabel }}
      <input v-model="property.value" type="text" @change="update" />
    </label>
  </div>
</template>

<script>
import { EMOTE } from "../types/Emotes";
import { processEnum } from "../types/Util";

export default {
  name: "EmoteProperty",
  model: {
    prop: "property",
    event: "change"
  },
  props: {
    property: {
      type: Object,
      required: true
    }
  },
  computed: {
    propertyLabel() {
      return processEnum(EMOTE)[this.property.value].label;
    }
  },
  methods: {
    update() {
      this.$emit("change", this.property);
    }
  }
};
</script>
