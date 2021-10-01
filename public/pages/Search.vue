<script>
  import "../static/assets/css/blocks.css";
  import '../static/assets/css/bootstrap.css';
  
  import Header from '../components/Header.vue';
  import Footer from '../components/Footer.vue';
  import Search from '../components/Search.vue';
  import Head from '../components/Head.vue';
export default {

  name: 'Tupachanga',
  components: {
    Head,
    Header,
    Search,
    Footer,
    
  }
}


</script>

<template>
    <div> 
  <Head />
  <Header />
  <Search />
  <Footer />
    </div>
</template>
