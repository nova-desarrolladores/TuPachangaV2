<script>
  
  import '../static/assets/css/blocks.css';
  import '../static/assets/css/bootstrap.css';



  import Vue from "vue";
  import vSelect from 'vue-select';

  
    

  import VueFormWizard from 'vue-form-wizard';
  import 'vue-form-generator/dist/vfg-core.css'; 
  import 'vue-form-wizard/dist/vue-form-wizard.min.css';

import ProfileCreation2 from '../components/ProfileCreation4.vue';

  Vue.use(VueFormWizard);
  
  Vue.component("v-select", vSelect);

  
  
export default {

  name: 'Tupachanga',
  components: {
    ProfileCreation2,    
  }
}
</script>


<template>
    <div> 

  <ProfileCreation2 />

    </div>
</template>
