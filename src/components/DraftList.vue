<template>
  <div>
    <p
      v-if="drafts.length === 0"
    >No drafts to show. When editing a Weenie, click the "Save Draft" button to save a draft of that Weenie.</p>
    <Draft v-for="(draft, index) in drafts" :key="index" :index="index" :draft="draft" />
  </div>
</template>

<script>
import Draft from "./Draft";

export default {
  name: "DraftList",
  components: {
    Draft
  },
  computed: {
    drafts() {
      return this.$store.state.drafts;
    }
  }
};
</script>
