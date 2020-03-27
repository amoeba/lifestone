<template>
  <div>
    <h2>Drafts</h2>
    <DraftList />
  </div>
</template>

<script>
import DraftList from "../components/DraftList";

export default {
  name: "Drafts",
  components: {
    DraftList
  }
};
</script>
