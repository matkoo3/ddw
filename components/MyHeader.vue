<script>
   export default{

   }

</script>

<template>
  <div class="header">
    <span class="logo"><NuxtLink to="/"><img src="./assets/logo.png"></NuxtLink></span>
    <NuxtLink to="/articles/" class="link">Articles</NuxtLink>
    <NuxtLink to="/contact" class="link">Kontakt</NuxtLink>
  </div>
</template>

<style scoped>
.header{
  padding: 10px;
  background: #1abc9c;
  color: white;
  font-size: 30px;
}
.logo{
  height: 60px;
  text-align: left;
}
.link{
  text-align: right;
}
</style>
