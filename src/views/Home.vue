<template>
    <div>
        <BigTitle/>
        <Tiles/>
    </div>
</template>

<script>
import BigTitle from '../components/HomeTitle';
import Tiles from '../components/HomeTiles'

export default {
    components:{
        BigTitle,
        Tiles
    }
};
</script>

<style>

#app {
  background-color: #ffffff;
  margin:0;
  padding:0;
}
  
/*logovv*/  
i.fa.fa-github-square{
  font-size: 2.5em;
  color:white;
}

#logo:hover{
  opacity: 0.3;
}

#logo{
  transition: 0.7s ease;
}
/*logo^^*/


.container {
  padding:0;
}

/*header*/

/* Page content */
.content {
  padding: 16px;
}

#header {
  background-color: #000000;
  text-align:center;
  z-index:9000;
}

#header .nav {
  color:white;
}

/* The sticky class is added to the header with JS when it reaches its scroll position */
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}

/* Add some top padding to the page content to prevent sudden quick movement (as the header gets a new position at the top of the page (position:fixed and top:0) */
.sticky + .content {
  padding-top: 102px;
}

/*main stuff*/ 


.home h1 {
	font-size: 48px;
}
.home p {
	font-size: 24px;
	color: rgb(255, 255, 255);
	line-height: 44px;
}

.home {
	padding: 0px;
	padding-top: 200px;
	padding-bottom: 300px;
	background: url("https://i.imgur.com/OqH4GUk.jpg") no-repeat center center fixed; 
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
	border-right: 1px solid #fff;
  border-bottom: 1px solid #fff;
  margin-bottom: 10px;
}

a{
  text-decoration: none;
}


</style>