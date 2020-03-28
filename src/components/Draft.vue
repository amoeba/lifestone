<template>
  <div class="box">
    <h3>{{ draft.id }} - {{ draft.name }}</h3>
    <div class="button-group">
      <button @click="load">Load</button>
      <button @click="destroy">Destroy</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DraftList",
  props: {
    draft: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    load() {
      this.$store.dispatch("loadDraft", this.index);
    },
    destroy() {
      this.$store.dispatch("destroyDraft", this.index);
    }
  }
};
</script>
