<template>
  <div class="autocomplete">
    <div class="autocomplete-input">
      <input
        v-model="input"
        type="text"
        :placeholder="placeholder"
        @input="filter"
        @keyup="select"
      />
    </div>
    <div v-if="isOpen" class="autocomplete-suggestions">
      <ul>
        <li
          v-for="match in matches"
          :key="match.id"
          :data-id="match.id"
          :data-label="match.label"
          @click="choose"
        >
          {{ match.label }}
        </li>
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
    },
    placeholder: {
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
    select(e) {
      // eslint-disable-next-line
      console.log(e);
      if (e.key === "Enter") {
        // eslint-disable-next-line
        console.log("Enter pressed");

        if (this.matches.length === 0) {
          return;
        }

        this.$emit("choose", {
          id: this.matches[0].id,
          label: this.matches[0].label
        });

        this.isOpen = false;
      } else if (e.key === "ArrowDown") {
        // eslint-disable-next-line
        console.log("down");
      } else if (e.key === "ArrowUp") {
        // eslint-disable-next-line
        console.log("up");
      }
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
