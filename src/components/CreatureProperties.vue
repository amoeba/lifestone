<template>
  <div>
    <h3>Creature Properties</h3>
    <div class="col-40-60 box">
      <CreatureAttributes v-model="attributes" @change="update" />
      <CreatureVitals v-model="attributes" @change="update" />
    </div>
  </div>
</template>

<script>
import CreatureAttributes from "./CreatureAttributes";
import CreatureVitals from "./CreatureVitals";

export default {
  name: "CreatureProperties",
  components: {
    CreatureAttributes,
    CreatureVitals
  },
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
