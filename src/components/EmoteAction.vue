<template>
  <div>
    Action [{{ index }}]
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
        <EmoteActionProperties
          :properties="action.properties"
          @input="
            newProperties => {
              action.properties = newProperties;
            }
          "
        />
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
    index: {
      type: Number,
      required: true
    },
    action: {
      type: Object,
      required: true
    }
  },
  computed: {
    actionTypes() {
      return Object.keys(ACTION);
    }
  },
  methods: {
    // Hacky thing I had to do to get the <select> to update correctly
    updateType(e) {
      const newAction = createAction(e.target.value);
      this.$emit("input", newAction);
    }
  }
};
</script>
