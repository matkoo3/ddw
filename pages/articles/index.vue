<script setup>
  const articles = useArticles().list.array
  console.log(articles)
</script>

<template>
  <div>
    <MyHeader></MyHeader>
    <h1>List of articles</h1>
    <div v-for="item of articles" :key="item.id">
      <NuxtLink :to="{path: `/articles/${item.id}`,params:{id: item.id}}">{{ item.title }}</NuxtLink>
    </div>
    <MyFooter></MyFooter>
  </div>
</template>

<style scoped>
</style>
