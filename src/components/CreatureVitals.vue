<template>
  <div>
    <h4>Vitals</h4>
    <CreatureVital v-model="vitals.health" name="Health" @change="update" />
    <CreatureVital v-model="vitals.stamina" name="Stamina" @change="update" />
    <CreatureVital v-model="vitals.mana" name="Mana" @change="update" />
  </div>
</template>

<script>
import CreatureVital from "./CreatureVital";

export default {
  name: "CreatureVitals",
  components: {
    CreatureVital
  },
  model: {
    prop: "vitals",
    event: "change"
  },
  props: {
    vitals: {
      type: Object,
      required: true
    }
  },
  methods: {
    update() {
      this.$emit("change", this.vitals);
    }
  }
};
</script>
