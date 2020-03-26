<template>
  <div>
    <h3>CreatureProperties</h3>
    <CreatureAttributes v-model="creature.attributes" @change="update" />
    <CreatureVitals v-model="creature.vitals" @change="update" />
    <CreatureSkills v-model="creature.skills" @change="update" />
    <CreatureBodyParts v-model="creature.bodyParts" @change="update" />
  </div>
</template>

<script>
import CreatureAttributes from "./CreatureAttributes";
import CreatureVitals from "./CreatureVitals";
import CreatureSkills from "./CreatureSkills";
import CreatureBodyParts from "./CreatureBodyParts";

export default {
  name: "CreatureProperties",
  components: {
    CreatureAttributes,
    CreatureVitals,
    CreatureSkills,
    CreatureBodyParts
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
      this.$emit("change", this.creature);
    }
  }
};
</script>
