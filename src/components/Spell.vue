<template>
  <div class="item">
    <label>
      {{ spellName }}
      <div class="pairedinput">
        <input
          v-model.number="spell.id"
          type="text"
          size="7"
          @change="update"
        />
        <Autocomplete
          :options="spells"
          placeholder="Spell lookup..."
          @change="update"
          @choose="choose"
        />
      </div>
    </label>
    <label>
      Probability
      <input
        v-model="spell.value.casting_likelihood"
        type="text"
        @change="update"
      />
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
    spellName() {
      const matches = this.spells.filter(s => s.id === this.spell.id);

      if (matches.length === 0) {
        return "Not Found";
      }

      return matches[0].label;
    },
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
      this.spell.id = payload.id;
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
