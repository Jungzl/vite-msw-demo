<script setup lang="ts">
import {ref} from "vue";

const isLoading = ref(true)
const list = ref([])
fetch('/mock/demo/list').then(res => res.json()).then(res => {
  isLoading.value = false
  if (res.code===0){
    list.value = res.data
  }
})
</script>

<template>
  <div >
    <div v-if="isLoading"> loading... </div>
    <ul v-else>
      <li v-for="item in list" :key="item.id">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
</style>
