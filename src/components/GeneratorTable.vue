<template>
  <div class="box">
    <div class="two-col row">
      <h3>Generators</h3>
      <div class="right">
        <button @click="addItem">Add Generator</button>
      </div>
    </div>
    <div>
      <GeneratorTableItem
        v-for="(item, index) in items"
        :key="index"
        v-model="items[index]"
        :index="index"
        @change="update"
        @remove="removeItem"
      />
    </div>
    <p v-if="items.length === 0">No items to show.</p>
  </div>
</template>

<script>
import GeneratorTableItem from "./GeneratorTableItem";
import { createGenerator } from "../types/Generators";

export default {
  name: "GeneratorTable",
  components: {
    GeneratorTableItem
  },
  model: {
    prop: "items",
    event: "change"
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    addItem() {
      this.items.push(createGenerator());
      this.$emit("change", this.items);
    },
    removeItem(index) {
      this.items.splice(index, 1);
      this.$emit("change", this.items);
    },
    update() {
      this.$emit("change", this.items);
    }
  }
};
</script>
