<template>
    <v-hover
      v-slot:default="{ hover }"
      :open-delay="openDelay"
      :close-delay="closeDelay"
      :disabled="disabled"
      :value="value"
      >  
      <v-card
            class="mx-auto"
            max-width="600"
            :elevation="hover ? 12 : 2"
      > 
      <router-link to="/products">
            <v-img
              class="white--text"
              height="400px"
              v-bind:src="imgSrc"
            >
                <v-card-title class="align-end fill-height black--text">{{name}}</v-card-title>
            </v-img>
      </router-link>
        </v-card> 
    </v-hover>
</template>

<script>
export default {
    props: ['imgSrc','name'],
    data(){
        return{
            
        }
    }
}
</script>