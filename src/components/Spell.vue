<template>
  <div class="item">
    <label>
      ID
      <input v-model="spell.key" type="text" @change="update" />
    </label>
    <label>
      Spell
      <Autocomplete :options="spells" @change="update" @choose="choose" />
    </label>
    <label>
      Probability
      <input v-model="spell.value.casting_likelihood" type="text" @change="update" />
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
        { key: 0, label: "Heal Self I" },
        { key: 1, label: "Heal Self 2" },
        { key: 2, label: "Stamina to Mana Other III" }
      ];
    }
  },
  methods: {
    choose(payload) {
      this.spell.key = payload.key;
      this.$emit("change", this.spell);
    },
    update() {
      this.$emit("change", this.spell);
    },
    remove() {
      this.$emit("remove", this.index);
    }
  }
};
</script>
