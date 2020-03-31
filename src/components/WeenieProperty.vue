<template>
  <div class="row group">
    <select v-model.number="property.id" @change="update">
      <option v-for="(prop, index) in propertyTypes" :key="index" :value="prop.id">
        {{
        prop.label
        }}
      </option>
    </select>

    <input v-model="property.value" :type="inputType" @change="update" />
    <button @click="remove">Remove</button>
  </div>
</template>

<script>
import { WEENIE_PROPERTY, getPropertyTypes } from "../types/Weenie";

export default {
  name: "WeenieProperty",
  model: {
    prop: "property",
    event: "input"
  },
  props: {
    index: {
      type: Number,
      required: true
    },
    kind: {
      type: String,
      required: true
    },
    property: {
      type: Object,
      required: true
    }
  },
  computed: {
    propertyTypes() {
      return getPropertyTypes(this.kind);
    },
    inputType() {
      if (this.kind === WEENIE_PROPERTY.STRING) {
        return "text";
      } else if (this.kind === WEENIE_PROPERTY.BOOL) {
        return "checkbox";
      } else {
        return "number";
      }
    }
  },
  methods: {
    update() {
      this.$emit("change", this.property);
    },
    remove() {
      this.$emit("remove", this.index);
    }
  }
};
</script>
