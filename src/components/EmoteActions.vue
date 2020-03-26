<template>
  <div>
    <h4>Actions</h4>
    <button @click="addEmoteAction">Add Action</button>
    <ul>
      <li v-for="(action, index) in actions" :key="index">
        <EmoteAction
          v-model="actions[index]"
          :index="index"
          @change="update"
          @remove="removeEmoteAction"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import EmoteAction from "./EmoteAction";
import { createAction, ACTION } from "../types/Actions";

export default {
  name: "EmoteActions",
  components: {
    EmoteAction
  },
  model: {
    prop: "actions",
    event: "change"
  },
  props: {
    actions: {
      type: Array,
      required: true
    }
  },
  methods: {
    addEmoteAction() {
      this.actions.push(createAction(ACTION.TURN_TO_TARGET));
      this.$emit("change", this.actions);
    },
    removeEmoteAction(index) {
      this.actions.splice(index, 1);
      this.$emit("change", this.actions);
    },
    update() {
      this.$emit("change", this.actions);
    }
  }
};
</script>
