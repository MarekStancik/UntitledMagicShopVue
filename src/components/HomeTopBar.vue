<template>
    <v-container fluid>
        <v-container fluid>
            <v-row id="header" dense fluid> 
                <v-col cols="12" md="2" sm="12">   
                  <div class="nav"></div>
                </v-col>
                <v-col cols="12"  md="8" sm="4">
                  <div id="logo">
                    <router-link to="/"><i class="fa fa-github-square"></i></router-link>
                  </div>
                </v-col>
                <v-col cols="12" md="2" sm="4">
                    <div class="nav">
                      <router-link to="/shopping-cart">
                        <i class="fa fa-shopping-cart"></i>
                      </router-link></div> 
                </v-col>

            </v-row>
            <v-row id="header" dense>  
                <v-col cols="12" md="3" sm="1">   
                    <div class="nav">1</div>
                    </v-col>
                <v-col cols="12"  md="6" sm="2">
                    <div class="nav">2</div>
                </v-col>
                    <v-col cols="12" md="3" sm="1">
                    <div class="nav">
                        <a href="https://www.facebook.com/" target=_blank><i class="fa fa-facebook-square"></i></a>
                        <a href="https://www.instagram.com/" target=_blank><i class="fa fa-instagram"></i></a>
                        <a href="https://twitter.com/" target=_blank><i class="fa fa-twitter-square"></i></a> 
                    </div>
                    </v-col>
                </v-row>
        </v-container>
    </v-container>
</template>

<script>
export default {
  
};
</script>

<style scoped>
#header {
  background-color: #000000;
  text-align:center;
  z-index:9000;
}

#header .nav {
  color:white;
}

#logo:hover{
  opacity: 0.3;
}

#logo{
  transition: 0.7s ease;
}

/*logovv*/  
i.fa.fa-github-square{
  font-size: 2.5em;
  color:white;
}
</style>