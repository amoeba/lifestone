<template>
  <div class="item">
    <label>
      Slot
      <input v-model="item.slot" type="text" @change="update" />
    </label>
    <label>
      Probability
      <input v-model="item.probability" type="text" @change="update" />
    </label>
    <label>
      Delay
      <input v-model="item.delay" type="text" @change="update" />
    </label>
    <label>
      WCID
      <input v-model="item.wcid" type="text" @change="update" />
    </label>
    <label>
      Regen
      <input v-model="item.regen" type="text" @change="update" />
    </label>
    <label>
      Location
      <input v-model="item.location" type="text" @change="update" />
    </label>
    <label>
      Initial
      <input v-model="item.initial" type="text" @change="update" />
    </label>
    <label>
      Max
      <input v-model="item.max" type="text" @change="update" />
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
      Stack
      <input v-model="item.stack" type="text" @change="update" />
    </label>
    <label>
      Cell
      <input v-model="item.cell" type="text" @change="update" />
    </label>
    <label>
      Frame
      <input v-model="item.frame" type="text" @change="update" />
    </label>
    <button @click="remove">Remove</button>
  </div>
</template>

<script>
export default {
  name: "GeneratorTableItem",
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
