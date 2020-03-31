<template>
  <div>
    <div class="two-col">
      <div>Edit Weenie</div>
      <div class="right">
        <button @click="saveDraft">Save Draft</button>
      </div>
    </div>
    <div class="row">
      <div>
        Name:
        {{ weenieName }}
      </div>

      <label>
        ID
        <input v-model="weenie.wcid" type="text" @change="update" />
      </label>
      <label>
        Type
        <select v-model="weenie.weenieType" @change="update">
          <option v-for="type in weenieTypes" :key="type" :value="type">
            {{
            type
            }}
          </option>
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
      <li v-if="isCreature">
        <a
          href="#skills"
          :class="{ active: isActive(TAB.SKILLS) }"
          @click.prevent="switchTab(TAB.SKILLS)"
        >Skills</a>
      </li>
      <li v-if="isCreature">
        <a
          href="#bodyparts"
          :class="{ active: isActive(TAB.BODYPARTS) }"
          @click.prevent="switchTab(TAB.BODYPARTS)"
        >Body Parts</a>
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
      <WeenieProperties v-model="weenie" @change="update" />
    </div>
    <div class="tabpage" :class="{ hidden: !isActive(TAB.CREATURE) }">
      <CreatureProperties v-model="weenie.attributes" @change="update" />
    </div>
    <div class="tabpage" :class="{ hidden: !isActive(TAB.SKILLS) }">
      <CreatureSkills v-model="weenie.skills" @change="update" />
    </div>
    <div class="tabpage" :class="{ hidden: !isActive(TAB.BODYPARTS) }">
      <CreatureBodyParts v-model="weenie.body.body_part_table" @change="update" />
    </div>
    <div class="tabpage" :class="{ hidden: !isActive(TAB.BOOK) }">
      <Book v-model="weenie.pageDataList" @change="update" />
    </div>
    <div class="tabpage" :class="{ hidden: !isActive(TAB.SPELLS) }">
      <Spells v-model="weenie.spellbook" @change="update" />
    </div>
    <div class="tabpage" :class="{ hidden: !isActive(TAB.CREATELIST) }">
      <CreateList v-model="weenie.createList" @change="update" />
    </div>
    <div class="tabpage" :class="{ hidden: !isActive(TAB.GENERATORS) }">
      <GeneratorTable v-model="weenie.generatorTable" @change="update" />
    </div>
    <div class="tabpage" :class="{ hidden: !isActive(TAB.EMOTES) }">
      <EmoteTable v-model="weenie.emoteTable" @change="update" />
    </div>
    <div class="tabpage" :class="{ hidden: !isActive(TAB.JSON) }">
      <textarea v-model="weenieJSON" class="json" rows="40" cols="120" />
    </div>
  </div>
</template>

<script>
import WeenieProperties from "./WeenieProperties";
import CreatureProperties from "./CreatureProperties";
import CreatureSkills from "./CreatureSkills";
import CreatureBodyParts from "./CreatureBodyParts";
import Book from "./Book";
import Spells from "./Spells";
import CreateList from "./CreateList";
import GeneratorTable from "./GeneratorTable";
import EmoteTable from "./EmoteTable";
import { TAB } from "../types/UI";
import { WeenieType } from "../types/Weenie";
import { StringProp } from "../types/properties/StringProp";

export default {
  name: "WeenieEditor",
  components: {
    WeenieProperties,
    CreatureProperties,
    CreatureSkills,
    CreatureBodyParts,
    Book,
    Spells,
    CreateList,
    GeneratorTable,
    EmoteTable
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
      },
      set() {
        this.$store.dispatch("updateWeenie", this.weenie);
      }
    },
    weenieName() {
      return this.$store.state.weenie.stringStats.filter(
        s => (s.id = StringProp.Name)
      ).value;
    },
    weenieTypes() {
      return WeenieType;
    },
    weenieJSON() {
      return JSON.stringify(this.$store.state.weenie, null, "  ");
    },
    isCreature() {
      return this.weenie.weenieType === WeenieType.CREATURE;
    },
    isBook() {
      return this.weenie.weenieType === WeenieType.BOOK;
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
