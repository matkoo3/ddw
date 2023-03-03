<script setup>
const id = useRoute().params.id
const articles = useArticles().list.array
const nem = useRoute()
</script>

<template>
  <div>
    <MyHeader></MyHeader>
    <pre>
      {{articles.findLast(item => item.id == id)}}
    </pre>
    <MyFooter></MyFooter>
  </div>
  
</template>

<style scoped></style>
