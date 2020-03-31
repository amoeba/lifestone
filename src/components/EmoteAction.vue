<template>
  <div class="box">
    <div class="two-col row">
      <select v-model.number="action.type" @change="updateType">
        <option v-for="(type, index) in actionTypes" :key="index" :value="type.id">
          {{
          type.label
          }}
        </option>
      </select>
      <div class="right">
        <button @click="handleRemove">Remove</button>
      </div>
    </div>
    <h5>Properties</h5>
    <EmoteActionProperties v-model="action.properties" @change="update" />
  </div>
</template>

<script>
import EmoteActionProperties from "./EmoteActionProperties";
import { ACTION, createAction } from "../types/Actions";
import { processEnum } from "../types/Util";

export default {
  name: "EmoteAction",
  components: {
    EmoteActionProperties
  },
  model: {
    prop: "action",
    event: "change"
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
  computed: {
    actionTypes() {
      return processEnum(ACTION);
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
