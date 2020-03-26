<template>
  <div>
    <label>
      ID
      <input v-model="spell.id" type="text" @change="update" />
    </label>
    <label>
      Spell
      <input v-model="spell.name" type="text" @change="update" />
    </label>
    <label>
      Probability
      <input v-model="spell.probability" type="text" @change="update" />
    </label>
    <button @click="remove">Remove</button>
  </div>
</template>

<script>
export default {
  name: "Spell",
  model: {
    prop: "spell",
    event: "change"
  },
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
