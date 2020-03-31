<template>
  <li>
    <label>
      {{ propertyLabel }}
      <input v-model="property.value" type="text" @change="update" />
    </label>
  </li>
</template>

<script>
import { ACTIONPROPERTY } from "../types/Actions";
import { processEnum } from "../types/Util";

export default {
  name: "EmoteActionProperty",
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
      return processEnum(ACTIONPROPERTY).filter(
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
