<template>
  <div>
    <h3>Weenie Editor</h3>
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
    <Emotes v-model="weenie.emotes" />

    <textarea v-model="weenieJSON" rows="40" cols="120" />
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
      weenie: {
        id: 0,
        name: "MyWeenie",
        emotes: []
      }
    };
  },
  computed: {
    weenieJSON() {
      return JSON.stringify(this.weenie);
    }
  }
  // computed: {
  //   weenie: {
  //     get() {
  //       return this.$store.state.weenie;
  //     }
  //   },
  //   weenieJSON: {
  //     get() {
  //       return JSON.stringify(this.$store.state.weenie, null, "\t");
  //     }
  //   }
  // },
  // methods: {
  //   update() {
  //     this.$store.dispatch("updateWeenie", this.weenie);
  //   }
  // }
};
</script>
