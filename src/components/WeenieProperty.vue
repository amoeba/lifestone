<template>
  <div class="two-col-auto">
    <label>
      <select v-model="property.key">
        <option v-for="(key, index) in propertyTypes" :key="index">{{
          key
        }}</option>
      </select>
      <input :type="inputType" v-model="property.value" @change="update" />
    </label>
    <button @click="remove">Remove</button>
  </div>
</template>

<script>
import { WEENIE_PROPERTY, getPropertyTypes } from "../types/Weenie";

export default {
  name: "WeenieProperty",
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
  model: {
    prop: "property",
    event: "change"
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
