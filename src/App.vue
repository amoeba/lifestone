<template>
  <div id="app">
    <h1>Lifestone</h1>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/create">Create</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>
