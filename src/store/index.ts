import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import { RootState } from "@/types/State";
import { TAB } from "@/types/UI";
import { Weenie, WeenieType } from "@/types/Weenie";
import { createCreatureProperties } from "@/types/Creature.ts";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence<RootState>({
  key: "lifestone",
  storage: window.localStorage
});

// State
const initialState: RootState = {
  activeTab: TAB.PROPERTIES,
  weenie: {
    wcid: 0,
    weenieType: WeenieType.CREATURE,
    attributes: createCreatureProperties(),
    body: [],
    StringStats: [],
    Int32Stats: [],
    Int64Stats: [],
    FloatStats: [],
    DataIDStats: [],
    InstanceIDStats: [],
    BoolStats: [],
    PositionStats: [],
    book: null,
    spells: [],
    createList: [],
    generators: [],
    skills: [],
    emoteTable: []
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
      state.activeTab = tab;
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
