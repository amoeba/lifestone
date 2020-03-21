<template>
  <div>
    Emote [{{ index }}]
    <ul>
      <li>
        Type:
        <select v-model="emote.type" @input="updateType">
          <option
            v-for="type in Object.keys(emoteTypes)"
            :key="type"
            :value="type"
            >{{ type }}</option
          >
        </select>
      </li>
      <li>
        Properties
        <EmoteProperties
          :properties="emote.properties"
          @input="
            newProperties => {
              emote.properties = newProperties;
              update();
            }
          "
        />
      </li>
      <li>
        <EmoteActions
          :actions="emote.actions"
          @input="
            newActions => {
              emote.actions = newActions;
              update();
            }
          "
        />
      </li>
    </ul>
  </div>
</template>

<script>
import EmoteProperties from "./EmoteProperties";
import EmoteActions from "./EmoteActions";
import { EMOTE } from "../types/Emotes";

export default {
  name: "Emote",
  components: {
    EmoteProperties,
    EmoteActions
  },
  props: {
    index: {
      type: Number,
      required: true
    },
    emote: {
      type: Object,
      required: true
    }
  },
  computed: {
    emoteTypes() {
      return EMOTE;
    }
  },
  methods: {
    update() {
      this.$emit("input", this.emote);
    },
    // Hacky thing I had to do to get the <select> to update correctly
    updateType(e) {
      this.emote.type = e.target.value;
    }
  }
};
</script>
