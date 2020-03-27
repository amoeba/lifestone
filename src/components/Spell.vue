<template>
  <div class="item">
    <label>
      ID
      <input v-model="spell.id" type="text" @change="update" />
    </label>
    <label>
      Spell
      <Autocomplete :options="spells" :value="spell.name" @change="update" @choose="choose" />
    </label>
    <label>
      Probability
      <input v-model="spell.probability" type="text" @change="update" />
    </label>
    <button @click="remove">Remove</button>
  </div>
</template>

<script>
import Autocomplete from "./Autocomplete";

export default {
  name: "Spell",
  components: {
    Autocomplete
  },
  model: {
    prop: "spell",
    event: "change"
  },
  props: {
    spell: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  computed: {
    spells() {
      return [
        { id: 0, label: "Heal Self I" },
        { id: 1, label: "Heal Self 2" },
        { id: 2, label: "Stamina to Mana Other III" }
      ];
    }
  },
  methods: {
    choose(payload) {
      (this.spell.id = payload.id), (this.spell.name = payload.label);
      this.$emit("change", this.spell);
    },
    update() {
      console.log("update", this.spell);
      this.$emit("change", this.spell);
    },
    remove() {
      this.$emit("remove", this.index);
    }
  }
};
</script>
