<script>
  import "../static/assets/css/blocks.css";
  import '../static/assets/css/bootstrap.css';
  
  import Header from '../components/Header.vue';
  import Footer from '../components/Footer.vue';
  import Profile from '../components/Profile.vue';
  import Head from '../components/Head.vue';
export default {

  name: 'Tupachanga',
  components: {
    Head,
    Header,
    Profile,
    Footer,
    
  }
}


</script>

<template>
    <div> 
  <Head />
  <Header />
  <Profile />
  <Footer />
    </div>
</template>
