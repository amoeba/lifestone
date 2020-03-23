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
          @click.prevent="switchTab('main')"
          :class="{ active: isActive('main') }"
          >Main</a
        >
      </li>
      <li>
        <a
          href="#emotes"
          @click.prevent="switchTab('emotes')"
          :class="{ active: isActive('emotes') }"
          >Emotes</a
        >
      </li>
      <li>
        <a
          href="#json"
          @click.prevent="switchTab('json')"
          :class="{ active: isActive('json') }"
          >JSON</a
        >
      </li>
    </ul>
    <div :class="{ hidden: !isActive('main') }">
      <h3>Main (TODO)</h3>
    </div>
    <div :class="{ hidden: !isActive('emotes') }">
      <Emotes v-model="weenie.emotes" @change="update" />
    </div>
    <div :class="{ hidden: !isActive('json') }">
      <textarea class="json" v-model="weenieJSON" rows="40" cols="120" />
    </div>
  </div>
</template>

<script>
import Emotes from "./Emotes";

export default {
  name: "WeenieEditor",
  components: {
    Emotes
  },
  data() {
    return {
      tab: "main"
    };
  },
  computed: {
    weenie: {
      get() {
        return this.$store.state.weenie;
      }
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
      this.tab = tab;
    },
    isActive(tab) {
      return this.tab === tab;
    }
  }
};
</script>
