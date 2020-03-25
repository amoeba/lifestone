<template>
  <div>
    <div class="two-col row">
      <h3>Generators</h3>
      <div class="right">
        <button @click="addItem">Add</button>
      </div>
    </div>
    <div>
      <ul>
        <li v-for="(item, index) in items" :key="index">
          <GeneratorTableItem
            v-model="items[index]"
            :index="index"
            @change="update"
            @remove="removeItem"
          />
        </li>
      </ul>
    </div>
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
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  model: {
    prop: "items",
    event: "change"
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
