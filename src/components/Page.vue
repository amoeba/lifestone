<template>
  <div class="box">
    <div class="two-col">
      <h5>Page {{ index + 1 }}</h5>
      <div class="right">
        <button @click="remove">Remove Page</button>
      </div>
    </div>
    <label>
      Author Name
      <input v-model="page.authorName" type="text" @change="update" />
    </label>
    <label>
      Author Account
      <input v-model="page.authorAccount" type="text" @change="update" />
    </label>
    <label>
      Author ID
      <input v-model="page.authorID" type="text" @change="update" />
    </label>
    <label>
      Ignore Author
      <input v-model="page.ignoreAuthor" type="checkbox" @change="update" />
    </label>
    <textarea v-model="page.pageText" rows="10" @change="update" />
  </div>
</template>

<script>
export default {
  name: "Page",
  model: {
    prop: "page",
    event: "change"
  },
  props: {
    page: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    remove() {
      this.$emit("remove", this.index);
    },
    update() {
      this.$emit("change", this.page);
    }
  }
};
</script>
