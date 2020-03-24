import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import { RootState } from "../types/State";
import { TAB } from "../types/UI";
import { Weenie, WeenieType } from "../types/Weenie";

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
    properties: {
      string: [],
      int32: [],
      int64: [],
      float: [],
      dataId: [],
      instanceId: [],
      bool: [],
      position: []
    },
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
