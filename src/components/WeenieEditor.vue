<template>
  <div>
    <div class="row">
      <label>
        Name
        <input type="text" v-model="weenie.name" />
      </label>

      <label>
        ID
        <input type="text" v-model="weenie.id" />
      </label>
      <label>
        Type
        <select v-model="weenie.type">
          <option v-for="type in weenieTypes" :key="type" :value="type">{{ type }}</option>
        </select>
      </label>
    </div>
    <ul class="tabbar">
      <li>
        <a
          href="#properties"
          @click.prevent="switchTab(TAB.PROPERTIES)"
          :class="{ active: isActive(TAB.PROPERTIES) }"
        >Properties</a>
      </li>
      <li>
        <a
          href="#creature"
          @click.prevent="switchTab(TAB.CREATURE)"
          :class="{ active: isActive(TAB.CREATURE) }"
        >Creature</a>
      </li>
      <li>
        <a
          href="#spells"
          @click.prevent="switchTab(TAB.SPELLS)"
          :class="{ active: isActive(TAB.SPELLS) }"
        >Spells</a>
      </li>
      <li>
        <a
          href="#createlist"
          @click.prevent="switchTab(TAB.CREATELIST)"
          :class="{ active: isActive(TAB.CREATELIST) }"
        >Create List</a>
      </li>
      <li>
        <a
          href="#generators"
          @click.prevent="switchTab(TAB.GENERATORS)"
          :class="{ active: isActive(TAB.GENERATORS) }"
        >Generators</a>
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
    <div :class="{ hidden: !isActive(TAB.PROPERTIES) }">
      <WeenieProperties v-model="weenie.properties" @change="update" />
    </div>
    <div :class="{ hidden: !isActive(TAB.CREATURE) }">
      <CreatureProperties v-model="weenie.creature" @change="update" />
    </div>
    <div :class="{ hidden: !isActive(TAB.SPELLS) }">
      <Spells v-model="weenie.spells" @change="update" />
    </div>
    <div :class="{ hidden: !isActive(TAB.CREATELIST) }">
      <CreateList v-model="weenie.createList" @change="update" />
    </div>
    <div :class="{ hidden: !isActive(TAB.GENERATORS) }">
      <GeneratorTable v-model="weenie.generators" @change="update" />
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
import CreatureProperties from "./CreatureProperties";
import Spells from "./Spells";
import CreateList from "./CreateList";
import GeneratorTable from "./GeneratorTable";
import Emotes from "./Emotes";
import { TAB } from "../types/UI";
import { WeenieType } from "../types/Weenie";

export default {
  name: "WeenieEditor",
  components: {
    WeenieProperties,
    CreatureProperties,
    Spells,
    CreateList,
    GeneratorTable,
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
      return WeenieType;
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
