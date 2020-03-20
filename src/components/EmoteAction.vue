<template>
  <div>
    Action [{{ index }}]
    <ul>
      <li>
        Type
        <select v-model="action.type" @input="updateType">
          <option
            v-for="type in actionTypes"
            :key="type.id"
            :value="type.id">{{ type.label }}</option>
        </select>
      </li>
      <li>
        <EmoteActionProperties
          :properties="action.properties"
          @input="(newProperties) => { action.properties = newProperties }" />
      </li>
    </ul>
  </div>
</template>

<script>
import EmoteActionProperties from "./EmoteActionProperties";
import { ActionTypes} from "../types/Actions";

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
      return ActionTypes;
    }
  },
  methods: {
    // Hacky thing I had to do to get the <select> to update correctly
    updateType(e) {
      this.action.type = e.target.value;
    }
  }
};
</script>


