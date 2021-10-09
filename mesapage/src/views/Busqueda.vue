<template>
  
  <div>
 
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
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
      </b-collapse>
    </b-navbar>
    <!-- Para imprimir el valor de lo que busca la persona --> 
    <div class="mt-2">Value: {{ textoBusqueda }}</div>

    <div>
      <b-table striped hover :items="items" :filter="textoBusqueda"></b-table>
    </div>

  </div>
      


</template>


<script>
    export default {
    data() {
      return {
        items: [
          { Producto: 'Polera Azul', Precio: '35000' },
          { Producto: 'Pantalon jeans', Precio: '20000' },
          { Producto: 'Chaqueta', Precio: '5000' },
          { Producto: 'Short', Precio: '4000' }
        ],
        textoBusqueda:''
      }
    }
  }

</script>
