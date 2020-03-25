<template>
  <div class="row">
    <label>
      Slot
      <input type="text" v-model="item.slot" @change="update" />
    </label>
    <label>
      Probability
      <input type="text" v-model="item.probability" @change="update" />
    </label>
    <label>
      Delay
      <input type="text" v-model="item.delay" @change="update" />
    </label>
    <label>
      WCID
      <input type="text" v-model="item.wcid" @change="update" />
    </label>
    <label>
      Regen
      <input type="text" v-model="item.regen" @change="update" />
    </label>
    <label>
      Location
      <input type="text" v-model="item.location" @change="update" />
    </label>
    <label>
      Initial
      <input type="text" v-model="item.initial" @change="update" />
    </label>
    <label>
      Max
      <input type="text" v-model="item.max" @change="update" />
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
      Stack
      <input type="text" v-model="item.stack" @change="update" />
    </label>
    <label>
      Cell
      <input type="text" v-model="item.cell" @change="update" />
    </label>
    <label>
      Frame
      <input type="text" v-model="item.frame" @change="update" />
    </label>
    <button @click="remove">Remove</button>
  </div>
</template>

<script>
export default {
  name: "GeneratorTableItem",
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
