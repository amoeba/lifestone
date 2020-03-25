<template>
  <div>
    <div class="two-col row">
      <h3>Create List</h3>
      <div class="right">
        <button @click="addItem">Add Item</button>
      </div>
    </div>
    <div>
      <ul>
        <li v-for="(item, index) in items" :key="index">
          <CreateListItem
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
import CreateListItem from "./CreateListItem";
import { createCreateListItem } from "../types/CreateList";

export default {
  name: "CreateList",
  components: {
    CreateListItem
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
