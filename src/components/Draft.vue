<template>
  <div class="box">
    <h3>{{ draft.id }} - {{ draft.name }}</h3>
    <button @click="load">Open</button>
    <button @click="remove">Destroy</button>
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
      this.$emit("open", this.index);
    },
    remove() {
      this.$emit("remove", this.index);
    }
  }
};
</script>
