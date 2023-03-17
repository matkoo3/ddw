<script setup>
const id = useRoute().params.id
const articles = useArticles().list.array
const article = articles.filter(item => item.id == id)[0]

</script>

<template>
  <div>
    <MyHeader></MyHeader>
    <div>
    <pre class="clanok">
      <h1>{{article.title}}</h1>
      <div>{{article.text}}</div>
    </pre>
    </div>
    <MyFooter></MyFooter>
  </div>
  
</template>

<style scoped>
</style>
