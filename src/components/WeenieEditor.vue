<template>
  <div>
    <button @click="saveDraft">Save Draft</button>
    <div class="row">
      <label>
        Name
        <input v-model="weenie.name" type="text" @change="update" />
      </label>

      <label>
        ID
        <input v-model="weenie.id" type="text" @change="update" />
      </label>
      <label>
        Type
        <select v-model="weenie.type" @change="update">
          <option v-for="type in weenieTypes" :key="type" :value="type">{{ type }}</option>
        </select>
      </label>
    </div>
    <ul class="tabbar">
      <li>
        <a
          href="#properties"
          :class="{ active: isActive(TAB.PROPERTIES) }"
          @click.prevent="switchTab(TAB.PROPERTIES)"
        >Properties</a>
      </li>
      <li v-if="isCreature">
        <a
          href="#creature"
          :class="{ active: isActive(TAB.CREATURE) }"
          @click.prevent="switchTab(TAB.CREATURE)"
        >Creature</a>
      </li>
      <li v-if="isBook">
        <a
          href="#book"
          :class="{ active: isActive(TAB.BOOK) }"
          @click.prevent="switchTab(TAB.BOOK)"
        >Book</a>
      </li>
      <li>
        <a
          href="#spells"
          :class="{ active: isActive(TAB.SPELLS) }"
          @click.prevent="switchTab(TAB.SPELLS)"
        >Spells</a>
      </li>
      <li>
        <a
          href="#createlist"
          :class="{ active: isActive(TAB.CREATELIST) }"
          @click.prevent="switchTab(TAB.CREATELIST)"
        >Create List</a>
      </li>
      <li>
        <a
          href="#generators"
          :class="{ active: isActive(TAB.GENERATORS) }"
          @click.prevent="switchTab(TAB.GENERATORS)"
        >Generators</a>
      </li>
      <li>
        <a
          href="#emotes"
          :class="{ active: isActive(TAB.EMOTES) }"
          @click.prevent="switchTab(TAB.EMOTES)"
        >Emotes</a>
      </li>
      <li>
        <a
          href="#json"
          :class="{ active: isActive(TAB.JSON) }"
          @click.prevent="switchTab(TAB.JSON)"
        >JSON</a>
      </li>
    </ul>
    <div class="tabpage" :class="{ hidden: !isActive(TAB.PROPERTIES) }">
      <WeenieProperties v-model="weenie.properties" @change="update" />
    </div>
    <div class="tabpage" :class="{ hidden: !isActive(TAB.CREATURE) }">
      <CreatureProperties v-model="weenie.creature" @change="update" />
    </div>
    <div class="tabpage" :class="{ hidden: !isActive(TAB.BOOK) }">
      <Book v-model="weenie.book" @change="update" />
    </div>
    <div class="tabpage" :class="{ hidden: !isActive(TAB.SPELLS) }">
      <Spells v-model="weenie.spells" @change="update" />
    </div>
    <div class="tabpage" :class="{ hidden: !isActive(TAB.CREATELIST) }">
      <CreateList v-model="weenie.createList" @change="update" />
    </div>
    <div class="tabpage" :class="{ hidden: !isActive(TAB.GENERATORS) }">
      <GeneratorTable v-model="weenie.generators" @change="update" />
    </div>
    <div class="tabpage" :class="{ hidden: !isActive(TAB.EMOTES) }">
      <Emotes v-model="weenie.emotes" @change="update" />
    </div>
    <div class="tabpage" :class="{ hidden: !isActive(TAB.JSON) }">
      <textarea v-model="weenieJSON" class="json" rows="40" cols="120" />
    </div>
  </div>
</template>

<script>
import WeenieProperties from "./WeenieProperties";
import CreatureProperties from "./CreatureProperties";
import Book from "./Book";
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
    Book,
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
    weenie() {
      return this.$store.state.weenie;
    },
    weenieTypes() {
      return WeenieType;
    },
    weenieJSON() {
      return JSON.stringify(this.$store.state.weenie, null, "  ");
    },
    isCreature() {
      return this.weenie.type === WeenieType.CREATURE;
    },
    isBook() {
      return this.weenie.type === WeenieType.BOOK;
    }
  },
  methods: {
    saveDraft() {
      this.$store.dispatch("saveDraft", this.weenie);
    },
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
