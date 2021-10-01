<template>
  <div>
    <b-button id="show-btn" @click="showModal">Registrarse</b-button>
    <b-button id="toggle-btn" @click="toggleModal">Toggle Modal</b-button>

    <b-modal ref="my-modal" centered  hide-footer title="Registro"><img src="assets/images/Logo_tu_pachanga_C.png" height="80">
      <div class="d-block text-center">
        <h3>¿Cómo desea registrarse?</h3>
      </div>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
      <b-button class="mt-2" variant="outline-warning" block @click="toggleModal">Toggle Me</b-button>
    </b-modal>
  </div>
</template>

<script>
  export default {
    methods: {
      showModal() {
        this.$refs['my-modal'].show()
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
      toggleModal() {
        // We pass the ID of the button that we want to return focus to
        // when the modal has hidden
        this.$refs['my-modal'].toggle('#toggle-btn')
      }
    }
  }
</script>