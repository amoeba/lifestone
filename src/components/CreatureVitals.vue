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
  props: {
    vitals: {
      type: Object,
      required: true
    }
  },
  model: {
    prop: "vitals",
    event: "change"
  },
  methods: {
    update() {
      this.$emit("update", this.vitals);
    }
  }
};
</script>
