<script>
  import "../static/assets/css/blocks.css";
  import '../static/assets/css/bootstrap.css';
  
  import Header from '../components/Header.vue';
  import Footer from '../components/Footer.vue';
  import MainPage from '../components/MainPage.vue';
  import Head from '../components/Head.vue';
export default {

  name: 'Tupachanga',
  components: {
    Head,
    Header,
    MainPage,
    Footer,
    
  }
}


</script>

<template>
    <div> 
  <Head />
  <Header />
  <MainPage />
  <Footer />
    </div>
</template>