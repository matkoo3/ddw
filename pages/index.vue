<script setup>
let articles = useArticles().list.array;
</script>

<template>
  <div>
    <MyHeader></MyHeader>
    <div class="article" v-for="article of articles" v-bind:key="article">
          <div style="font-size: 35px; font-weight: bold;">{{ article.title }}</div>
          <div><p style="font-size: 24px; text-align: justify;">{{ article.text.substring(0, 300) }}</p></div>
          <div>
            <div><NuxtLink :to="{path:`/articles/${article.id}`, params:{id:article.id}}">detail</NuxtLink></div>
          </div>
        </div>
    <MyFooter></MyFooter>
  </div>
</template>

<style scoped>
</style>
