<script>
  import "../static/assets/css/blocks.css";
  import '../static/assets/css/bootstrap.css';
  
  import Header from '../components/Header.vue';
  import Footer from '../components/Footer.vue';
  import Mission from '../components/Mission.vue';
  import Head from '../components/Head.vue';
  import CatchPhraseAll from '../components/CatchPhraseAll.vue';
export default {

  name: 'Tupachanga',
  components: {
    Head,
    Header,
    CatchPhraseAll,
    Mission,
    Footer,
    
  }
}
</script>

<template>
    <div> 
  <Head />
  <Header />
  <!-- Espacio para que no se junte con el header -->
          <div class="container pb-4 pt-4">
            <hr class="mb-0 mt-0" /> 
               
            
        </div>
        <CatchPhraseAll />      
  <Mission />
  <Footer />
    </div>
</template>
