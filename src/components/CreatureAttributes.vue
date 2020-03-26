<template>
  <div>
    <h4>Attributes</h4>
    <label>
      Strength
      <input v-model="attributes.strength" type="text" @change="update" />
    </label>
    <label>
      Endurance
      <input v-model="attributes.endurance" type="text" @change="update" />
    </label>
    <label>
      Coordination
      <input v-model="attributes.coordination" type="text" @change="update" />
    </label>
    <label>
      Quickness
      <input v-model="attributes.quickness" type="text" @change="update" />
    </label>
    <label>
      Focus
      <input v-model="attributes.focus" type="text" @change="update" />
    </label>
    <label>
      Self
      <input v-model="attributes.self" type="text" @change="update" />
    </label>
  </div>
</template>

<script>
export default {
  name: "CreatureAttributes",
  model: {
    prop: "attributes",
    event: "change"
  },
  props: {
    attributes: {
      type: Object,
      required: true
    }
  },

  methods: {
    update() {
      this.$emit("change", this.attributes);
    }
  }
};
</script>
