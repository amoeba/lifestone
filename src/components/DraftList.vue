<template>
  <div>
    <h3>Drafts</h3>
    <Draft
      v-for="(draft, index) in drafts"
      :key="index"
      :index="index"
      :draft="draft"
      @remove="remove"
    />
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
