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
import { EMOTE, createEmote } from "../types/Emotes";

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
      const newEmote = createEmote(e.target.value);

      console.log(newEmote); // Why do I need this to make this work?

      // Update existing emote with properties from new emote

      // TODO: Merge property values for properties that exist in the old
      // emote so we can switch and not lose our Probability or Quest
      this.emote.type = newEmote.type;
      this.emote.properties = newEmote.properties;

      this.$emit("input", this.newEmote);
    }
  }
};
</script>
