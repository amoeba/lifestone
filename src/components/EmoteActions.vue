<template>
  <div class="item">
    <div class="two-col">
      <h4>Actions</h4>
      <div class="right">
        <button @click="addEmoteAction">Add Action</button>
      </div>
    </div>
    <EmoteAction
      v-for="(action, index) in actions"
      :key="index"
      v-model="actions[index]"
      :index="index"
      @change="update"
      @remove="removeEmoteAction"
    />
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
      this.actions.push(createAction(0));
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
