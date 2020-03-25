<template>
  <div>
    <h3>CreatureProperties</h3>
    <label>
      Strength
      <input type="text" v-model="creature.strength" />
    </label>
    <label>
      Endurance
      <input type="text" v-model="creature.endurance" />
    </label>
    <label>
      Coordination
      <input type="text" v-model="creature.coordination" />
    </label>
    <label>
      Quickness
      <input type="text" v-model="creature.quickness" />
    </label>
    <label>
      Focus
      <input type="text" v-model="creature.focus" />
    </label>
    <label>
      Self
      <input type="text" v-model="creature.self" />
    </label>
  </div>
</template>

<script>
export default {
  name: "CreatureProperties",
  props: {
    creature: {
      type: Object,
      required: true
    }
  },
  model: {
    prop: "creature",
    event: "change"
  },
  methods: {
    update() {
      this.$emit("update", this.creature);
    }
  }
};
</script>
