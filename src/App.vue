<template>
  <div>
    <nav v-if="loggedIn">
      <router-link to="/">Home</router-link> |
      <router-link to="/will">Will's Books</router-link> |
      <router-link to="/jess">Jess' Books</router-link>
    </nav>
    <router-view/>
  </div>

</template>


<script>
export default {
  data() {
    return {
      loggedIn: true
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

table {
  margin: 20px auto;
}

th, td {
  padding: 8px 16px;
}
</style>
