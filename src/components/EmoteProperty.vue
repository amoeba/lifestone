<template>
  <div>
    <label>
      {{ propertyLabel }}
      <input v-model="property.value" type="text" @change="update" />
    </label>
  </div>
</template>

<script>
import { EMOTE_PROPERTY } from "../types/Emotes";
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
      return processEnum(EMOTE_PROPERTY).filter(
        p => Number(p.id) === this.property.id
      )[0].label;
    }
  },
  methods: {
    update() {
      this.$emit("change", this.property);
    }
  }
};
</script>
