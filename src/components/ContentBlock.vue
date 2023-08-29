<script lang="ts">
export default {
  props: {
    title: String,
    subtitle: String,
    image: String,
    link: String,
    showBtn: Boolean,
    size: String
  }
}
</script>

<template>
  <div class="container">
    <div class="row justify-content-center align-items-center">
      <div class="col-lg-4 col-sm-12 my-4">
        <div class="image">
          <img :src="image" />
        </div>
      </div>
      <div class="col-lg-4 col-sm-12">
        <h3 :class="size" class="fs-5 mb-4">{{ title }}</h3>
        <p class="mb-4 text-secondary">
          {{ subtitle }}
        </p>
        <div :class="showBtn ? '' : 'd-none'">
          <router-link :to="link || ''">
            <a href="" class="btn blue text-white mb-4">اعرف اكثر</a>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.image img {
  box-sizing: border-box;
  border-radius: 20px;
  max-width: 100%;
  height: auto;
  object-fit: fill;
}

@media (max-width: 767px) {
  .content-column {
    flex: 0 0 100%;
  }
}
</style>
