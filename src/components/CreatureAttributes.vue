<template>
  <div>
    <h4>Attributes</h4>
    <label>
      Strength
      <input v-model="attributes.strength.init_level" type="text" @change="update" />
    </label>
    <label>
      Endurance
      <input v-model="attributes.endurance.init_level" type="text" @change="update" />
    </label>
    <label>
      Coordination
      <input v-model="attributes.coordination.init_level" type="text" @change="update" />
    </label>
    <label>
      Quickness
      <input v-model="attributes.quickness.init_level" type="text" @change="update" />
    </label>
    <label>
      Focus
      <input v-model="attributes.focus.init_level" type="text" @change="update" />
    </label>
    <label>
      Self
      <input v-model="attributes.self.init_level" type="text" @change="update" />
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
