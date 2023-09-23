<script lang="ts" setup>
import MyPetition from '../components/MyPetition.vue'
import DownloadApp from '../components/DownloadApp.vue'
</script>

<template>
  <div>
    <div class="imageConteiner text-center my-5">
      <img src="/sunbla-p.png" alt="" width="100" />
      <h2 class="text-center fs-3 mt-4 text-green">منصة سنبلة</h2>
    </div>
    <hr />
    <MyPetition></MyPetition>
    <hr />
    <div class="container p-5">
      <download-app></download-app>
    </div>
  </div>
</template>

<style scoped>
.imageContainer {
  width: 100px;
  height: 100px;
}
img {
  border-radius: 20px;
}
</style>
