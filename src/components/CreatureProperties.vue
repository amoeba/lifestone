<template>
  <div>
    <h3>CreatureProperties</h3>
    <h4>Attributes</h4>
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
    <CreatureVitals v-model="creature.vitals" @change="update" />
    <CreatureSkills v-model="creature.skills" @change="update" />
  </div>
</template>

<script>
import CreatureVitals from "./CreatureVitals";
import CreatureSkills from "./CreatureSkills";

export default {
  name: "CreatureProperties",
  components: {
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
