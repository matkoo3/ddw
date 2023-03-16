<script>
   export default{

   }

</script>

<template>
  <div class="header">
    <div><div class="logo"><NuxtLink to="/"><img src="./assets/logo.png"></NuxtLink></div>
    <div class="link">Navigacia:<NuxtLink to="/articles/">Articles</NuxtLink> <NuxtLink to="/contact">Kontakt</NuxtLink></div></div>
  </div>
</template>

<style scoped>
.header{
  position: fixed;
  width: 100%;
  left: 0;
  padding: 10px;
  background: #1abc9c;
  color: white;
  font-size: 30px;
}
.logo{
  align-content: left;
}
.link{
  text-align: right;
}
</style>
