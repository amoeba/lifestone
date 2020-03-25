<template>
  <div class="row">
    <label>
      ID
      <input type="text" v-model="spell.id" @change="update" />
    </label>
    <label>
      Spell
      <input type="text" v-model="spell.name" @change="update" />
    </label>
    <label>
      Probability
      <input type="text" v-model="spell.probability" @change="update" />
    </label>
    <button @click="remove">Remove</button>
  </div>
</template>

<script>
export default {
  name: "Spell",
  props: {
    spell: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  model: {
    prop: "spell",
    event: "change"
  },
  methods: {
    update() {
      this.$emit("change", this.spell);
    },
    remove() {
      this.$emit("remove", this.index);
    }
  }
};
</script>
