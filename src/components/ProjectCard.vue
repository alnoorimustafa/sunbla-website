<template>
  <div class="col-lg-4 col-sm-5 mb-5">
    <h5 class="fs-4">{{ title }}</h5>
    <p class="fs-6 text-secondary">{{ subtitle }}</p>
    <a href="#" class="text-decoration-underline text-blue">اعرف اكثر</a>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: String,
    subtitle: String
  }
}
</script>
