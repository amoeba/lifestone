import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import { RootState } from "../types/State";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence<RootState>({
  key: "lifestone",
  storage: window.localStorage
});

// State
const initialState: RootState = {
  weenie: {
    id: 0,
    name: "MyWeenie",
    emotes: []
  },
  drafts: []
};

export default new Vuex.Store({
  state: initialState,
  mutations: {
    updateWeenie(state, weenie) {
      state.weenie = weenie;
    }
  },
  actions: {
    updateWeenie(context, weenie) {
      context.commit("updateWeenie", weenie);
    }
  },
  plugins: [vuexLocal.plugin]
});
