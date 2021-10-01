<script>
  
  import '../static/assets/css/blocks.css';
  import '../static/assets/css/bootstrap.css';



  import Vue from "vue";
  import vSelect from 'vue-select';

  
    

  import VueFormWizard from 'vue-form-wizard';
  import 'vue-form-generator/dist/vfg-core.css'; 
  import 'vue-form-wizard/dist/vue-form-wizard.min.css';

import ProfileCreation1 from '../components/ProfileCreation1.vue';

  Vue.use(VueFormWizard);
  
  Vue.component("v-select", vSelect);

  
  
export default {

  name: 'Tupachanga',
  components: {
    ProfileCreation1,    
  }
}
</script>


<template>
    <div> 

  <ProfileCreation1 />

    </div>
</template>
