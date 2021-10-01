<template>
  <div>
    <VueSlickCarousel :arrows="true" :dots="true">
      <div><img src="assets/images/Misc/Lugares/291.jpg" class="img-fluid" style="height: 100px;"></div>
      <div><img src="assets/images/Misc/Lugares/292.jpg" class="img-fluid" ></div>
      <div><img src="assets/images/Misc/Lugares/293.jpg" class="img-fluid" ></div>
      <div><img src="assets/images/Misc/Lugares/296.jpg" class="img-fluid" ></div>
    </VueSlickCarousel>
  </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel';
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  export default {
    name: 'CarouselProveedor',
    components: { VueSlickCarousel },
    data() {
      return {
        settings: {
  "dots": true,
  "dotsClass": "slick-dots custom-dot-class",
  "edgeFriction": 0.35,
  "infinite": false,
  "speed": 500,
  "slidesToShow": 1,
  "slidesToScroll": 1
}


      }
    },
  }
</script>