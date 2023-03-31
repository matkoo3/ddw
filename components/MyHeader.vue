<script>
   export default{

   }

</script>

<template>
  <div class="header">
    <div class="logo"><NuxtLink to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/NASA_Wormball_logo.svg/1200px-NASA_Wormball_logo.svg.png"></NuxtLink>
    <div class="link">Navigacia:<NuxtLink to="/articles/">Articles</NuxtLink> <NuxtLink to="/contact">Kontakt</NuxtLink></div></div>
  </div>
</template>

<style scoped>
.header{
  width: 100%;
  left: 0;
  background: #ffffff;
  color: black;
  font-size: 30px;
}
.logo{
  
}
img{
  max-height: 3rem
}
.link{
  text-align: right;
}
</style>
