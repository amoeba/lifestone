<template>
  <div>
    <div>
      <label>
        Name
        <input type="text" v-model="weenie.name" />
      </label>
    </div>
    <div>
      <label>
        ID
        <input type="text" v-model="weenie.id" />
      </label>
    </div>
    <ul class="tabbar">
      <li>
        <a
          href="#main"
          @click.prevent="switchTab(TAB.MAIN)"
          :class="{ active: isActive(TAB.MAIN) }"
        >Main</a>
      </li>
      <li>
        <a
          href="#emotes"
          @click.prevent="switchTab(TAB.EMOTES)"
          :class="{ active: isActive(TAB.EMOTES) }"
        >Emotes</a>
      </li>
      <li>
        <a
          href="#json"
          @click.prevent="switchTab(TAB.JSON)"
          :class="{ active: isActive(TAB.JSON) }"
        >JSON</a>
      </li>
    </ul>
    <div :class="{ hidden: !isActive(TAB.MAIN) }">
      <label>
        Type
        <select v-model="weenie.type">
          <option v-for="type in weenieTypes" :key="type" :value="type">
            {{
            type
            }}
          </option>
        </select>
      </label>
      <WeenieProperties v-model="weenie.properties" @change="update" />
    </div>
    <div :class="{ hidden: !isActive(TAB.EMOTES) }">
      <Emotes v-model="weenie.emotes" @change="update" />
    </div>
    <div :class="{ hidden: !isActive(TAB.JSON) }">
      <textarea class="json" v-model="weenieJSON" rows="40" cols="120" />
    </div>
  </div>
</template>

<script>
import WeenieProperties from "./WeenieProperties";
import Emotes from "./Emotes";
import { TAB } from "../types/UI";
import { WeenieType } from "../types/Weenie";

export default {
  name: "WeenieEditor",
  components: {
    WeenieProperties,
    Emotes
  },
  computed: {
    TAB() {
      return TAB;
    },
    activeTab: {
      get() {
        return this.$store.state.activeTab;
      },
      set(value) {
        this.$store.dispatch("changeTab", value);
      }
    },
    weenie: {
      get() {
        return this.$store.state.weenie;
      }
    },
    weenieTypes() {
      return Object.keys(WeenieType);
    },
    weenieJSON: {
      get() {
        return JSON.stringify(this.$store.state.weenie, null, "  ");
      }
    }
  },
  methods: {
    update() {
      this.$store.dispatch("updateWeenie", this.weenie);
    },
    switchTab(tab) {
      this.activeTab = tab;
    },
    isActive(tab) {
      return this.activeTab === tab;
    }
  }
};
</script>
