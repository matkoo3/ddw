<script setup>
const triedy = useData().classesInitialValue.value
</script>

<template>
  <div>
    <div v-for="item of triedy" :key="item" class="triedy">
      <NuxtLink :to="{path: `/classes/${item}`,params:{myClass: item}}">{{item}}</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.triedy{
  font-size: 20px;
}
</style>
