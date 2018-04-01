<template>
  <!-- <Pagination/> -->
  <nav aria-label="Page navigation">
    <ul class="pagination">
      <!-- <li>
        <a aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li> -->
    </ul>
    <ul class="pagination" v-for="index in 10">
      <li><router-link :to="'/' + linkPage + '/'  + linkPage + '/'+ index" onclick="location.reload()">{{index}}</router-link></li>
    </ul>
    <ul class="pagination">
      <!-- <li>
        <router-link :to="'/' + linkPage + '/'  + linkPage + '/'+ this.$route.params.id+1" onclick="location.reload()" aria-label="Next">
          <a aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </router-link>
      </li> -->
    </ul>
  </nav>
</template>

<script>
export default{
  computed:{
    linkPage(){
      return this.$route.params.linkprev
    },
    next(){
      return this.halaman++;
    }
  },
  data(){
    return{
      halaman: this.$route.params.id
    }
  },
  method:{

  }
}
</script>

<style scoped>

nav{
  padding-bottom: 10px;
}

nav ul{
  margin-top: 40px;
  margin-bottom: 0px;
}

nav .pagination li a{
  background-color: white;
  /* color: #337ab7; */
  color: black;
  border-color: transparent;
  margin-left: 10px;
  -webkit-box-shadow: 6px 11px 19px -5px rgba(0,0,0,0.61);
  -moz-box-shadow: 6px 11px 19px -5px rgba(0,0,0,0.61);
  box-shadow: 6px 11px 19px -5px rgba(0,0,0,0.61);
  border-radius: 10%;
}

nav .pagination li a:hover{
  cursor: pointer;
  color: white;
  background-color: #212121;
}

nav .pagination .active a{
  color: white;
  /* background-color: #FFD740; */
  background-color: #212121;
  border-color: transparent;
}

@media (max-width: 768px){
  nav{
    padding: 0;
  }
  nav ul{
    margin: 0;
  }
  nav ul li a{
    margin: 5px 5px !important;
  }
}

</style>
