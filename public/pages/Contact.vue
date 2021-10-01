<script>
  import "../static/assets/css/blocks.css";
  import '../static/assets/css/bootstrap.css';
  
  import Header from '../components/Header.vue';
  import Footer from '../components/Footer.vue';
  import Contact from '../components/Contact.vue';
  import Head from '../components/Head.vue';
export default {

  name: 'Tupachanga',
  components: {
    Head,
    Header,
    Contact,
    Footer,
    
  }
}


</script>

<template>
    <div> 
        <Head />
        <Header />
        <Contact />
        <Footer />
    </div>
</template>
