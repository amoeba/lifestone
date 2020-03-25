<template>
  <div>
    <div class="two-col row">
      <h3>Spells</h3>
      <div class="right">
        <button @click="addSpell">Add Spell</button>
      </div>
    </div>
    <div>
      <ul>
        <li v-for="(spell, index) in spells" :key="index">
          <Spell v-model="spells[index]" :index="index" @change="update" @remove="removeSpell" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Spell from "./Spell";
import { createSpell } from "../types/Spells";

export default {
  name: "Spells",
  components: {
    Spell
  },
  props: {
    spells: {
      type: Array,
      required: true
    }
  },
  model: {
    prop: "spells",
    event: "change"
  },
  methods: {
    addSpell() {
      this.spells.push(createSpell());
      this.$emit("change", this.spells);
    },
    removeSpell(index) {
      this.spells.splice(index, 1);
      this.$emit("change", this.spells);
    },
    update() {
      this.$emit("change", this.spells);
    }
  }
};
</script>
