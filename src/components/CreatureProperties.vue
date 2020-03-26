<template>
  <div>
    <h3>CreatureProperties</h3>
    <CreatureAttributes v-model="creature.attributes" @change="update" />
    <CreatureVitals v-model="creature.vitals" @change="update" />
    <CreatureSkills v-model="creature.skills" @change="update" />
  </div>
</template>

<script>
import CreatureAttributes from "./CreatureAttributes";
import CreatureVitals from "./CreatureVitals";
import CreatureSkills from "./CreatureSkills";

export default {
  name: "CreatureProperties",
  components: {
    CreatureAttributes,
    CreatureVitals,
    CreatureSkills
  },
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
