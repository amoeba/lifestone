<template>
  <div>
    <h3>Book</h3>
    <div class="row">
      <button @click="create" v-bind:disabled="this.book">Create Book</button>
      <button @click="destroy" v-bind:disabled="!this.book">Destroy Book</button>
    </div>
    <div v-if="book">
      <div class="row">
        <label>
          Max Pages
          <input v-model="book.maxPages" type="text" @change="update" />
        </label>
        <label>
          Max Characters
          <input v-model="book.maxCharacters" type="text" @change="update" />
        </label>
      </div>
      <div class="row">
        <button @click="addPage">Add Page</button>
      </div>
      <Page
        v-for="(page, index) in book.pages"
        :key="index"
        v-model="book.pages[index]"
        :index="index"
        @change="update"
        @remove="removePage"
      />
    </div>
  </div>
</template>

<script>
import Page from "./Page";

import { createBook, createPage } from "../types/Book";

export default {
  name: "Book",
  components: {
    Page
  },
  model: {
    prop: "book",
    event: "change"
  },
  props: {
    book: {
      type: Object,
      required: false
    }
  },
  methods: {
    create() {
      this.$emit("change", createBook());
    },
    destroy() {
      this.$emit("change", null);
    },
    addPage() {
      this.book.pages.push(createPage());
      this.$emit("change", this.book);
    },
    removePage(index) {
      this.book.pages.splice(index, 1);
      this.$emit("change", this.book);
    },
    update() {
      this.$emit("change", this.book);
    }
  }
};
</script>
