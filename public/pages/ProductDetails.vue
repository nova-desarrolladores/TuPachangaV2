<script>
  import "../static/assets/css/blocks.css";
  import '../static/assets/css/bootstrap.css';
  
  import Header from '../components/Header.vue';
  import Footer from '../components/Footer.vue';
  import ProductDetails from '../components/ProductDetails.vue';
  import Head from '../components/Head.vue';
  
export default {

  name: 'Tupachanga',
  components: {
    Head,
    Header,
    ProductDetails,
    Footer,
    
  }
}


</script>

<template>
    <div> 
  <Head />
  <Header />
  <ProductDetails />
  <Footer />
    </div>
</template>
