<template>
  <div>
    <label>
      Weenie
      <input v-model="item.weenie" type="text" @change="update" />
    </label>
    <label>
      Destination
      <input v-model="item.destination" type="text" @change="update" />
    </label>
    <label>
      Palette
      <input v-model="item.palette" type="text" @change="update" />
    </label>
    <label>
      Shade
      <input v-model="item.shade" type="text" @change="update" />
    </label>
    <label>
      Quantity
      <input v-model="item.quantity" type="text" @change="update" />
    </label>
    <label>
      Bonded
      <input v-model="item.bonded" type="checkbox" @change="update" />
    </label>
    <button @click="remove">Remove</button>
  </div>
</template>

<script>
export default {
  name: "CreateListItem",
  model: {
    prop: "item",
    event: "change"
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    update() {
      this.$emit("change", this.item);
    },
    remove() {
      this.$emit("remove", this.index);
    }
  }
};
</script>
