<template>
  <div>
    <button v-on:click="addEmoteAction">Add Action</button>
    <ul>
      <li v-for="(action, index) in actions" :key="index">
        <EmoteAction
          :index="index"
          :action="action"
          @input="(newAction) => { action = newAction }" />
        <button v-on:click="removeEmoteAction(index)">Remove Action</button>
      </li>
    </ul>
  </div>
</template>

<script>
import EmoteAction from "./EmoteAction"
import { createAction } from "../types/Actions";

export default {
  name: "EmoteActions",
  components: {
    EmoteAction
  },
  props: {
    actions: {
      type: Array,
      required: true
    }
  },
  methods: {
    addEmoteAction() {
      this.actions.push(createAction());
    },
    removeEmoteAction(index) {
      this.actions.splice(index, 1);
    }
  },
  watch: {
    actions() {
      this.$emit("input", this.actions);
    }
  }
};
</script>


