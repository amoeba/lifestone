<template>
  <div>
    <div class="two-col">
      <h5>Page {{ index + 1 }}</h5>
      <div class="right">
        <button @click="remove">Remove Page</button>
      </div>
    </div>
    <label>
      Author
      <input v-model="page.authorName" type="text" @change="update" />
    </label>
    <label>
      Account
      <input v-model="page.account" type="text" @change="update" />
    </label>
    <label>
      ID
      <input v-model="page.id" type="text" @change="update" />
    </label>
    <label>
      Ignore
      <input v-model="page.ignore" type="checkbox" @change="update" />
    </label>
    <textarea v-model="page.text" rows="10" @change="update" />
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
