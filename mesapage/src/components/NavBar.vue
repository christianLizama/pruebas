<template>
  
  <div>
    <b-navbar toggleable="lg" type="dark" class="color">
            <!-- Alínea items a la derecha -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <!-- Items desplegables -->
            <!-- Hombre -->
            <b-nav-item-dropdown text="Hombre" right class= "letra">
          <b-dropdown-item href="#">Pantalones</b-dropdown-item>
          <b-dropdown-item href="#">Poleras</b-dropdown-item>
          <b-dropdown-item href="#">Polerones</b-dropdown-item>
          <b-dropdown-item href="#">Camisas</b-dropdown-item>
          <b-dropdown-item href="#">Camisetas</b-dropdown-item>
          <b-dropdown-item href="#">Casacas</b-dropdown-item>
          <b-dropdown-item href="#">Abrigos</b-dropdown-item>
            </b-nav-item-dropdown>
            <!-- Mujer -->
            <b-nav-item-dropdown text="Mujer" right class= "letra">
          <b-dropdown-item href="#">Pantalones</b-dropdown-item>
          <b-dropdown-item href="#">Poleras</b-dropdown-item>
          <b-dropdown-item href="#">Polerones</b-dropdown-item>
          <b-dropdown-item href="#">Camisas</b-dropdown-item>
          <b-dropdown-item href="#">Camisetas</b-dropdown-item>
          <b-dropdown-item href="#">Casacas</b-dropdown-item>
          <b-dropdown-item href="#">Abrigos</b-dropdown-item>
          <b-dropdown-item href="#">Vestidos</b-dropdown-item>
            </b-nav-item-dropdown>
            <!-- Temporada -->
            <b-nav-item-dropdown text="Temporada" right class= "letra">
          <b-dropdown-item href="#">Primavera-Verano 2021</b-dropdown-item>
          <b-dropdown-item href="#">Otoño-Invierno 2021</b-dropdown-item>
          <b-dropdown-item href="#">Primavera-Verano 2020</b-dropdown-item>
          <b-dropdown-item href="#">Otoño-Invierno 2020</b-dropdown-item>
            </b-nav-item-dropdown>


            <b-form-input id="formulario" v-model="textoBusqueda" size="sm" class="mr-sm-2" placeholder="Buscar"></b-form-input>
            
            <!-- Redirecciona a la Busqueda --> 
            <!--<router-link to="/Busqueda">-->
            
            <b-button id="botonBusqueda" href="Busqueda" v size="sm" class="my-2 my-sm-0" type="submit">GO</b-button>

            <router-link to="/Carrito">

              <b-img src="https://img.icons8.com/dotty/80/000000/shopping-cart.png" width="40" height="40">
              </b-img>
            
            </router-link>
            
            
            <!--</router-link>-->
            
          </b-nav-form>

        </b-navbar-nav>
    </b-navbar>
  </div>

</template>

<script>

    export default {
    data() {
      return {
        textoBusqueda:''
      }
    }
  }
</script>

<style scoped>
  .color{
    background-color: #1c335f;
  }
  .letra{
    font-size: 20px;
    font-family:Verdana, Geneva, Tahoma, sans-serif
  }
</style>