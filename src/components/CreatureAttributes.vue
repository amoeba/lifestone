<template>
  <div>
    <h4>Attributes</h4>
    <label>
      Strength
      <input type="text" v-model="attributes.strength" @change="update" />
    </label>
    <label>
      Endurance
      <input type="text" v-model="attributes.endurance" @change="update" />
    </label>
    <label>
      Coordination
      <input type="text" v-model="attributes.coordination" @change="update" />
    </label>
    <label>
      Quickness
      <input type="text" v-model="attributes.quickness" @change="update" />
    </label>
    <label>
      Focus
      <input type="text" v-model="attributes.focus" @change="update" />
    </label>
    <label>
      Self
      <input type="text" v-model="attributes.self" @change="update" />
    </label>
  </div>
</template>

<script>
export default {
  name: "CreatureAttributes",
  props: {
    attributes: {
      type: Object,
      required: true
    }
  },
  model: {
    prop: "attributes",
    event: "change"
  },
  methods: {
    update() {
      this.$emit("update", this.attributes);
    }
  }
};
</script>
