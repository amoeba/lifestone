<template>
  <div class="autocomplete">
    <div class="autocomplete-input">
      <input v-model="input" type="text" @input="filter" />
    </div>
    <div v-if="isOpen" class="autocomplete-suggestions">
      <ul>
        <li
          v-for="match in matches"
          :key="match.id"
          :data-id="match.id"
          :data-label="match.label"
          @click="choose"
        >{{ match.label }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Autocomplete",
  props: {
    options: {
      type: Array,
      required: true
    },
    value: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      input: this.value,
      isOpen: false,
      matches: [],
      choice: null
    };
  },
  methods: {
    filter() {
      this.isOpen = true;
      this.matches = this.options.filter(o => {
        return o.label.toLowerCase().indexOf(this.input.toLowerCase()) >= 0;
      });
    },
    choose(e) {
      e.target.blur();
      this.choice = Number(e.target.dataset.id);
      this.input = e.target.dataset.label;
      this.$emit("choose", { id: this.choice, label: this.input });
      this.isOpen = false;
    }
  }
};
</script>
