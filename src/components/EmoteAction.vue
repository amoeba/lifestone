<template>
  <div class="action">
    <div class="two-col row">
      <select v-model="action.type" @input="updateType">
        <option v-for="type in actionTypes" :key="type" :value="type">{{
          type
        }}</option>
      </select>
      <div class="right">
        <button @click="handleRemove">Remove</button>
      </div>
    </div>
    <Properties v-model="action.properties" @change="update" />
  </div>
</template>

<script>
import Properties from "./Properties";
import { ACTION, createAction } from "../types/Actions";

export default {
  name: "EmoteAction",
  components: {
    Properties
  },
  props: {
    action: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  model: {
    prop: "action",
    event: "change"
  },
  computed: {
    actionTypes() {
      return Object.keys(ACTION);
    }
  },
  methods: {
    updateType(e) {
      const newAction = createAction(e.target.value);
      this.$emit("change", newAction);
    },
    update() {
      this.$emit("change", this.action);
    },
    handleRemove() {
      this.$emit("remove", this.index);
    }
  }
};
</script>
