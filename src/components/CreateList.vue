<template>
  <div class="box">
    <div class="two-col row">
      <h3>Create List</h3>
      <div class="right">
        <button @click="addItem">Add Item</button>
      </div>
    </div>
    <div>
      <CreateListItem
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
import CreateListItem from "./CreateListItem";
import { createCreateListItem } from "../types/CreateList";

export default {
  name: "CreateList",
  components: {
    CreateListItem
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
      this.items.push(createCreateListItem());
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
