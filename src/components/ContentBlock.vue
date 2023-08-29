<script lang="ts">
export default {
  props: {
    title: String,
    subtitle: String,
    image: String,
    link: String
  }
}
</script>

<template>
  <div class="content-block container p-5 justify-content-center align-items-center">
    <div class="content-column">
      <img :src="image" />
    </div>
    <div class="content-column">
      <h2 class="mb-4">{{ title }}</h2>
      <p class="mb-4">
        {{ subtitle }}
      </p>
      <router-link :to="link || ''">
        <a href="" class="btn blue text-white">اعرف اكثر</a>
      </router-link>
    </div>
  </div>
</template>

<style>
.content-block {
  display: flex;
  flex-wrap: wrap;
}

.content-column {
  flex: 0 0 calc(50% - 20px);
  padding: 20px;
  box-sizing: border-box;
}

.content-column img {
  border-radius: 20px;
  max-width: 100%;
  height: auto;
}

@media (max-width: 767px) {
  .content-column {
    flex: 0 0 100%;
  }
}
</style>
