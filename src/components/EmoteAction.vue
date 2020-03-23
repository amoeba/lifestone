<template>
  <div>
    Action
    <ul>
      <li>
        Type
        <select v-model="action.type" @input="updateType">
          <option v-for="type in actionTypes" :key="type" :value="type">{{
            type
          }}</option>
        </select>
      </li>
      <li>
        <EmoteActionProperties v-model="action.properties" />
      </li>
    </ul>
  </div>
</template>

<script>
import EmoteActionProperties from "./EmoteActionProperties";
import { ACTION, createAction } from "../types/Actions";

export default {
  name: "EmoteAction",
  components: {
    EmoteActionProperties
  },
  props: {
    action: {
      type: Object,
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
      console.log(newAction);
      this.$emit("change", newAction);
    }
  }
};
</script>
