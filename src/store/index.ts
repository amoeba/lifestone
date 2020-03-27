import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import { RootState } from "@/types/State";
import { TAB } from "@/types/UI";
import { Weenie, WeenieType } from "@/types/Weenie";
import { createCreatureProperties } from "@/types/Creature.ts";
import { Book } from "@/types/Book";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence<RootState>({
  key: "lifestone",
  storage: window.localStorage
});

// State
const initialState: RootState = {
  activeTab: TAB.PROPERTIES,
  weenie: {
    id: 0,
    name: "MyWeenie",
    type: WeenieType.CREATURE,
    creature: createCreatureProperties(),
    properties: {
      String: [],
      Int32: [],
      Int64: [],
      Float: [],
      DataID: [],
      InstanceID: [],
      Bool: [],
      Position: []
    },
    book: null,
    spells: [],
    createList: [],
    generators: [],
    emotes: []
  },
  drafts: []
};

export default new Vuex.Store({
  state: initialState,
  mutations: {
    changeTab(state, tab: TAB) {
      state.activeTab = tab;
    },
    updateWeenie(state, weenie) {
      state.weenie = weenie;
    }
  },
  actions: {
    changeTab(context, tab: TAB) {
      context.commit("changeTab", tab);
    },
    updateWeenie(context, weenie: Weenie) {
      context.commit("updateWeenie", weenie);
    }
  },
  plugins: [vuexLocal.plugin]
});
