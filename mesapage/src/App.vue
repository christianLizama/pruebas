<template>
  <div id="app">

    <b-container class="bv-example-row">
      <b-row>

        <b-col>
          <div id="nav">
            <!-- aca accesos superiores -->
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/busqueda">Buscar</router-link> |
            <router-link to="/carrito">Carrito</router-link>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
