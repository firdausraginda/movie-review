<template>
   <div class="home" id="top">
     <Nav/>
     <div class="container">
       <div class="introduce">
         <h2 class="page-header">WELCOME</h2>
         <p>Movie-Review is a website that gives you informations about movie around the world. Including its <i>rating</i>, <i>date release</i>, and <i>review</i>. </p>
       </div>
       <Slider/>
       <!-- <div class="container"> -->
       <div class="movie_list">
         <ListAPI/>
       </div>
       <!-- </div> -->
       <div class="pra-footer">
         <dl class="dl-horizontal">
           <dt>Up To Date</dt>
           <dd>We always give the up to date movie by filter the movie based on release date</dd>
           <dt>Complete Movie</dt>
           <dd>You dont need to find in a different platform, because we have it all</dd>
           <dt>Have Fun with us!</dt>
           <dd>Colorful website will make your mood great</dd>
         </dl>
       </div>
     </div>
     <Footer/>
   </div>

</template>

<script>
import Nav from './Nav'
import Slider from './Slider'
import Footer from './Footer'
import ListAPI from './ListAPI'

export default {
  data () {
    return {
    }
  },
  components: {
    Nav,
    Slider,
    Footer,
    ListAPI
  }
}

</script>

<style scoped>

.home{
  /* background: url(../assets/bg.jpg) no-repeat center center fixed !important; */
  background: url(https://preview.ibb.co/co60fH/bg.jpg) no-repeat center center fixed !important;
  background-size:cover !important;
  background-repeat:no-repeat;
  padding-top: 2px !important;
}

.introduce{
  height: auto;
  /* width: 100%; */
  padding: 20px 15px;
  background: rgba(0, 0, 0, 0.5);
  margin-bottom: 30px;
}

.introduce h2{
  margin-top: 10px;
  color: white;
  text-align: center;
  font-family: 'Monoton';
  font-size: 40px;
}

.introduce p{
  margin-bottom: 0px;
  text-align: center;
  color: #d2d7e0;
  font-size: 16px;
  font-family: 'Raleway',cursive;
}


.movie_list{
  /* width: auto; */
  height: auto;
  background: rgba(0, 0, 0, 0.5) !important;
  /*background-color: white;*/
  padding: 0px 30px 15px 30px !important;
  margin-bottom: 30px;
  margin-top: 30px;
}

.container{
  width: auto;
  padding: 0px 105px;
}

.pra-footer{
  height: auto;
  width: 100%;
  /*background: url(warnawarni.png) no-repeat center center;
  background-size: cover;*/
  background: rgba(0, 0, 0, 0.5);
  padding: 20px 200px;
}

.pra-footer dl{
  margin-bottom: 0px;
  /* margin-left: 230px; */
}

.pra-footer dt {
  text-align: center;
  color: grey;
  font-size: 15px;
  font-family: 'Raleway',cursive;
}

.pra-footer dd {
  text-align: center;
  color: #c9cacc;
  font-size: 15px;
  font-family: 'Raleway',cursive;
}

@media (max-width: 768px){
  body{
    background-size: cover;
  }
  p,dt,dd{
    font-size: 13px !important;
  }
  .home{
    background: url(https://preview.ibb.co/co60fH/bg.jpg) no-repeat left fixed !important;
    background-size:cover !important;
    opacity: 1;
  }
  .container{
    padding: 0px 20px;
  }
  .introduce {
    margin-bottom: 20px;
  }
  .movie_list{
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .carousel-inner .item img{
  }
  .pra-footer{
    padding: 20px 40px;
  }
}


</style>
