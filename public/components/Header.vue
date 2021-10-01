<template>
    <header style="background-color: rgba(255, 255, 255, 0.6);" class="fixed-top" data-pgc="directory.header">
<div>
  <b-navbar toggleable="lg" class="border-bottom navbar navbar-expand-lg navbar-light pb-lg-0 pt-lg-0"  type="light" variant="oscuroso">
      <div class="container">
    <b-navbar-brand href="."><img src="assets/images/Logo_tu_pachanga_C.png" height="80"></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
          <li class="nav-item">
                <b-nav-item-dropdown text="Servicios" right>
                    <b-dropdown-item href="#">Comida</b-dropdown-item>
                    <b-dropdown-item href="#">Salones y otros lugares</b-dropdown-item>
                    <b-dropdown-item href="#">Amenidades</b-dropdown-item>
                    <b-dropdown-item href="#">Disfraces</b-dropdown-item>
                    </b-nav-item-dropdown>
        </li>
        <b-nav-item href="#">Ayuda</b-nav-item>
        <b-nav-item href="Contact">Contacto</b-nav-item>
        <b-nav-item href="Nosotros">Nosotros</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <ul class="align-items-lg-center flex-row ms-auto me-2 me-lg-0 navbar-nav order-lg-2">
                  <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>Usuario registrado</em>
          </template>

<b-dropdown-item href="Profile">Perfil</b-dropdown-item>
<b-dropdown-item href="#">Cerrar sesión</b-dropdown-item>
</b-nav-item-dropdown>
<li class="d-none d-sm-block nav-item">
    <a class="btn btn-dark ps-4 pe-4 rounded-pill" href="#">
        <path d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" /><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket-fill me-3" viewBox="0 0 16 16">
                            <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3z"/>
                        </svg><span class="align-middle">Agrega tu servicio</span></a>
</li>
<li class="ms-2 nav-item">
    <a class="btn btn-dark  p-2 rounded-pill" href="Search" aria-label="Search button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1.25em" height="1.25em" class="d-block">
                            <g>
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"></path>
                            </g>
                        </svg></a>

</li>
<li>
    <b-button id="show-btn" variant="danger" @click="showRegistrationModal">Registrarse</b-button>
    

    <b-modal ref="registration-modal"  centered ok-only ok-variant="danger" ok-title="Cancelar" title="Registro de usuario">
      <div class="d-block text-center">
        <img src="assets/images/Logo_tu_pachanga_C.png" height="90">
        <h3>¿Cómo desea registrarse?</h3>
        
      </div>
      
      <div class="text-center mt-5">
        <b-button variant="primary" @click="hideRegistrationModal">Cliente o consumidor</b-button>
        <b-button variant="primary" @click="toggleRegistrationModal">Proveedor</b-button>
      </div>
    </b-modal>
    
    <b-button id="show-btn" variant="danger" @click="showLoginModal">Iniciar sesión</b-button>
    <b-modal ref="login-modal"  centered ok-variant="success" cancel-title="Cancelar" ok-title="Login" title="Inicio de sesión" >
      <div class="d-block text-center">
        <img src="assets/images/Logo_tu_pachanga_C.png" height="90">
      <div class="text-center mt-5">
      <div>
          <b-form inline>
            <label class="sr-only" for="inline-form-input-name">Name</label>
            <b-form-input
              id="inline-form-input-name"
              class="mb-2 mr-sm-2 mb-sm-0 "
              placeholder="Correo electrónico"
            ></b-form-input>

            <label class="sr-only " for="inline-form-input-password">Contraseña</label>
            
              <b-form-input id="inline-form-input-password" placeholder="Contraseña"></b-form-input>
            

            <b-form-checkbox class="mt-5 text-center mb-2 mr-sm-2 mb-sm-0">Recuérdame</b-form-checkbox>

            
          </b-form>
        </div>
      </div>
      </div>
    </b-modal>



</li>
</ul>







</b-navbar-nav>
</b-collapse>
</div>
</b-navbar>
</div>






</header>





</template>

<script>
  export default {
    methods: {
      showRegistrationModal() {
        this.$refs['registration-modal'].show()
      },
      hideRegistrationModal() {
        this.$refs['registration-modal'].hide()
      },
      toggleRegistrationModal() {
        // We pass the ID of the button that we want to return focus to
        // when the modal has hidden
        this.$refs['registration-modal'].toggle('#toggle-btn')
      },
      showLoginModal() {
        this.$refs['login-modal'].show()
      },
      hideLoginModal() {
        this.$refs['login-modal'].hide()
      },
      toggleLoginModal() {
        // We pass the ID of the button that we want to return focus to
        // when the modal has hidden
        this.$refs['login-modal'].toggle('#toggle-btn')
      }
    }
  }
</script>



