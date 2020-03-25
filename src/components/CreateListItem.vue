<template>
  <div>
    <label>
      Weenie
      <input type="text" v-model="item.weenie" @change="update" />
    </label>
    <label>
      Destination
      <input type="text" v-model="item.destination" @change="update" />
    </label>
    <label>
      Palette
      <input type="text" v-model="item.palette" @change="update" />
    </label>
    <label>
      Shade
      <input type="text" v-model="item.shade" @change="update" />
    </label>
    <label>
      Quantity
      <input type="text" v-model="item.quantity" @change="update" />
    </label>
    <label>
      Bonded
      <input type="checkbox" v-model="item.bonded" @change="update" />
    </label>
    <button @click="remove">Remove</button>
  </div>
</template>

<script>
export default {
  name: "CreateListItem",
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
  model: {
    prop: "item",
    event: "change"
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
