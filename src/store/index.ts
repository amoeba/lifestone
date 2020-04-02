/* eslint-disable @typescript-eslint/camelcase */

import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import { RootState } from "@/types/State";
import { TAB } from "@/types/UI";
import { Weenie, WeenieType } from "@/types/Weenie";
import { createAttributes } from "@/types/Creature";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence<RootState>({
  key: "lifestone",
  storage: window.localStorage
});

// State
const initialState: RootState = {
  ui: {
    activeTab: TAB.PROPERTIES,
    darkMode: null
  },
  weenie: {
    wcid: 0,
    weenieType: WeenieType.CREATURE,
    pageDataList: null,
    attributes: createAttributes(),
    body: { body_part_table: [] },
    boolStats: [],
    intStats: [],
    didStats: [],
    iidStats: [],
    floatStats: [],
    int64Stats: [],
    stringStats: [],
    posStats: [],
    createList: [],
    skills: [],
    emoteTable: [],
    spellbook: [],
    generatorTable: []
  },
  drafts: []
};

export default new Vuex.Store({
  state: initialState,
  getters: {
    drafts(state) {
      return state.drafts;
    }
  },
  mutations: {
    changeTab(state, tab: TAB) {
      state.ui.activeTab = tab;
    },
    toggleDarkMode(state, preference: boolean) {
      if (state.ui.darkMode === null) {
        state.ui.darkMode = !preference;
      } else {
        state.ui.darkMode = !state.ui.darkMode;
      }
    },
    updateWeenie(state, weenie: Weenie) {
      state.weenie = weenie;
    },
    saveDraft(state, weenie: Weenie) {
      state.drafts.push(JSON.parse(JSON.stringify(weenie)));
    },
    loadDraft(state, index: number) {
      state.weenie = JSON.parse(JSON.stringify(state.drafts[index]));
    },
    destroyDraft(state, index: number) {
      state.drafts.splice(index, 1);
    }
  },
  actions: {
    changeTab(context, tab: TAB) {
      context.commit("changeTab", tab);
    },
    toggleDarkMode(context, preference: boolean) {
      context.commit("toggleDarkMode", preference);
    },
    updateWeenie(context, weenie: Weenie) {
      context.commit("updateWeenie", weenie);
    },
    saveDraft(context, weenie: Weenie) {
      context.commit("saveDraft", weenie);
    },
    loadDraft(context, index: number) {
      context.commit("loadDraft", index);
    },
    destroyDraft(context, index: number) {
      context.commit("destroyDraft", index);
    }
  },
  plugins: [vuexLocal.plugin]
});
