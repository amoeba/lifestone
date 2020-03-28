<template>
  <div class="box">
    <div class="two-col row">
      <h4>{{ kind }} Properties</h4>
      <div class="right">
        <button @click="addProperty">Add Property</button>
      </div>
    </div>
    <p v-if="properties.length === 0">No {{kind}} properties to show.</p>
    <WeenieProperty
      v-for="(property, index) in properties"
      :key="index"
      v-model="properties[index]"
      :index="index"
      :kind="kind"
      @change="update"
      @remove="removeProperty"
    />
  </div>
</template>

<script>
import WeenieProperty from "./WeenieProperty";
import { createProperty } from "../types/Weenie";

export default {
  name: "WeeniePropertiesTable",
  components: {
    WeenieProperty
  },
  model: {
    prop: "properties",
    event: "change"
  },
  props: {
    kind: {
      type: String,
      required: true
    },
    properties: {
      type: Array,
      required: true
    }
  },
  methods: {
    update() {
      this.$emit("change", this.properties);
    },
    addProperty() {
      this.properties.push(createProperty(this.kind));
      this.$emit("change", this.properties);
    },
    removeProperty(index) {
      this.properties.splice(index, 1);
      this.$emit("change", this.properties);
    }
  }
};
</script>
