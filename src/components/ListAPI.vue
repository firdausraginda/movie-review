<template>
  <div class="container">
    <div class="row">
      <span class="label label-warning">Now Playing</span>
      <router-link to="/nowplaying/nowplaying/1"> <span class="label label-primary"> More Movies <i class="fa fa-angle-double-right" aria-hidden="true"></i></span></router-link>
      <div class="col-sm-3" v-for= "index in 8">
        <a href="#" role="button" @click="detailFilm(nowplaying[index-1])">
          <router-link to="/detail/nowplaying/1">
            <div class="vote">
              <p>Rating: {{nowplaying[index-1].vote_average}}</p>
            </div>
            <div class="release_date">
              <p>{{nowplaying[index-1].release_date}}</p>
            </div>
            <div class="title">
              <p><strong>{{nowplaying[index-1].title}}</strong></p>
            </div>
            <img :src="'https://image.tmdb.org/t/p/w500_and_h282_bestv2'+nowplaying[index-1].poster_path" alt="">
            <div class="overlay">
              <div class="text">Review</div>
            </div>
          </router-link>
        </a>
      </div>
    </div>
    <div class="row">
      <span class="label label-warning">Popular Movie</span>
      <router-link to="/popular/popular/1"> <span class="label label-primary"> More Movies <i class="fa fa-angle-double-right" aria-hidden="true"></i></span></router-link>
      <div class="col-sm-3" v-for= "index in 8">
        <a href="#" role="button" @click="detailFilm(popular[index+10])">
          <router-link to="/detail/popular/1">
            <div class="vote">
              <p>Rating: {{popular[index+10].vote_average}}</p>
            </div>
            <div class="release_date">
              <p>{{popular[index+10].release_date}}</p>
            </div>
            <div class="title">
              <p><strong>{{popular[index+10].title}}</strong></p>
            </div>
            <img :src="'https://image.tmdb.org/t/p/w500_and_h282_bestv2'+popular[index+10].poster_path" alt="">
            <div class="overlay">
              <div class="text">Review</div>
            </div>
          </router-link>
        </a>
      </div>
    </div>
    <div class="row">
      <span class="label label-warning">Top Rated</span>
      <router-link to="/toprated/toprated/1"> <span class="label label-primary"> More Movies <i class="fa fa-angle-double-right" aria-hidden="true"></i></span></router-link>
      <div class="col-sm-3" v-for= "index in 8">
        <a href="#" role="button" @click="detailFilm(toprated[index-1])">
          <router-link to="/detail/toprated/1">
            <div class="vote">
              <p>Rating: {{toprated[index-1].vote_average}}</p>
            </div>
            <div class="release_date">
              <p>{{toprated[index-1].release_date}}</p>
            </div>
            <div class="title">
              <p><strong>{{toprated[index-1].title}}</strong></p>
            </div>
            <img :src="'https://image.tmdb.org/t/p/w500_and_h282_bestv2'+toprated[index-1].poster_path" alt="">
            <div class="overlay">
              <div class="text">Review</div>
            </div>
          </router-link>
        </a>
      </div>
    </div>
    <div class="row">
      <span class="label label-warning">Up Coming</span>
      <router-link to="/upcoming/upcoming/1"> <span class="label label-primary"> More Movies <i class="fa fa-angle-double-right" aria-hidden="true"></i></span></router-link>
      <div class="col-sm-3" v-for= "index in 8">
        <a href="#" role="button" @click="detailFilm(upcoming[index-1])">
          <router-link to="/detail/upcoming/1">
            <div class="vote">
              <p>Rating: {{upcoming[index-1].vote_average}}</p>
            </div>
            <div class="release_date">
              <p>{{upcoming[index-1].release_date}}</p>
            </div>
            <div class="title">
              <p><strong>{{upcoming[index-1].title}}</strong></p>
            </div>
            <img :src="'https://image.tmdb.org/t/p/w500_and_h282_bestv2'+upcoming[index-1].poster_path" alt="">
            <div class="overlay">
              <div class="text">Review</div>
            </div>
          </router-link>
        </a>
      </div>
    </div>
    <!-- <li v-for="index in 5"  style="color:white;">{{nama[index-1]}}</li> -->
  </div>
</template>

<script>
import axios from 'axios'
export default{
  data(){
    return{
      nowplaying: [],
      popular: [],
      toprated: [],
      upcoming: [],
      nama:['a','b','c','d','e','f','g']
    }
  },
  created(){
    this.getAPInp(),
    this.getAPIpop(),
    this.getAPItr(),
    this.getAPIuc()
  },
  methods:{
    getAPInp(){
      axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=4cd6d9ef2fca21ddbdba9671f95ae371&language=en-US&page=1')
      .then((response) => {
        this.nowplaying = response.data.results
        console.log(response)
      })
      // .catch((err) => {
      //   console.log(err)
      // })
    },
    getAPIpop(){
      axios.get('https://api.themoviedb.org/3/movie/popular?api_key=4cd6d9ef2fca21ddbdba9671f95ae371&language=en-US&page=1')
      .then((response) => {
        this.popular = response.data.results
        console.log(response)
      })
      // .catch((err) => {
      //   console.log(err)
      // })
    },
    getAPItr(){
      axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=4cd6d9ef2fca21ddbdba9671f95ae371&language=en-US&page=1')
      .then((response) => {
        this.toprated = response.data.results
        console.log(response)
      })
      // .catch((err) => {
      //   console.log(err)
      // })
    },
    getAPIuc(){
      axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=4cd6d9ef2fca21ddbdba9671f95ae371&language=en-US&page=1')
      .then((response) => {
        this.upcoming = response.data.results
        console.log(response)
      })
      // .catch((err) => {
      //   console.log(err)
      // })
    },
    detailFilm(data){
      this.$store.commit('setFilm', data)
      // this.$router.replace({'path': '/detail'})
    }
  }
}
</script>

<style scoped>

.movie_list .container{
  padding: 0px;
  margin: 0px;
}

.movie_list .row{
  position: relative;
  margin-top: 40px;
}

.movie_list img{
  /* width: 253px; */
  width: 100%;
  /* height: 100%; */
  margin-bottom: 20px;
}

.movie_list .vote p{
  position:absolute;
  /*background: linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,1));*/
  background:rgba(250, 220, 0, 0.6);
  /*background-color: black;*/
  top: auto;
  height: 25px;
  padding: 5px 2px;
  color: white;
  font-family:sans-serif;
  text-align: center;
  right: 15px;
  font-size: 13px;
}

.movie_list .release_date p{
  position:absolute;
  /*background: linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,1));*/
  /*background:rgba(0, 0, 0, 0.5);*/
  background:rgba(0, 200, 255, 0.6);
  /*background-color: black;*/
  height: 25px;
  padding: 5px 2px;
  color: white;
  text-align: center;
  font-size: 12px;
  font-family:sans-serif;
}

.title p{
  position:absolute;
  /*background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1));*/
  /*background:rgba(0, 0, 0, 1);*/
  background: rgba(230, 20, 10, 0.6);
  height: 25px;
  padding: 2px;
  color: white;
  text-align: center;
  font-size: 12px;
  bottom: 10px;
}

.overlay{
  position:absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background: rgba(0, 0, 0, 0.5);
}


.movie_list .label-warning{
  padding: 9px 13px;
  font-size: 15px;
  font-family: sans-serif;
  position: absolute;
  left: 15px;
  font-style: italic;
  /* right: 140px; */
}

.movie_list .label-primary{
  padding: 7px 7px;
  font-size: 15px;
  font-family: sans-serif;
  position: absolute;
  top: 0px;
  right: 15px;
}

.movie_list .label-primary:hover{
  /* color: white; */
  opacity: 0.8;
}

.movie_list .col-sm-3:nth-child(3), .movie_list .col-sm-3:nth-child(4), .movie_list .col-sm-3:nth-child(5), .movie_list .col-sm-3:nth-child(6){
  margin-top: 50px;
}

.movie_list .col-sm-3:hover .overlay {
  bottom: 0px;
  left: 15px;
  width: 89.2%;
  /* height: 87.5%; */
  height: 87.5%;
  /* width: 100%; */
  /* height: 100%; */
  opacity: 1;
}

.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}

@media (max-width: 768px){
  .movie_list .col-sm-3:nth-child(3){
    margin-top: 100px;
  }
  .movie_list .col-sm-3:nth-child(4), .movie_list .col-sm-3:nth-child(5), .movie_list .col-sm-3:nth-child(6){
    margin-top: 0px;
  }
  .movie_list .row{
    margin-top: 30px;
  }
  .label-warning{
    right: 15px ;
  }
  .label-primary{
    padding: 9px 13px !important;
    left: 15px;
    top: 45px !important;
  }
  .overlay{
    display: none !important;
  }
}

</style>
