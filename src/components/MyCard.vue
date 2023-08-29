<template>
  <div :class="myClass">
    <img :src="image" class="mb-4" />
    <h5 class="fs-5">{{ title }}</h5>
    <p class="fs-6" :class="mute ? 'text-secondary' : ''">{{ subtitle }}</p>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    myClass: String,
    image: String,
    title: String,
    subtitle: String,
    mute: Boolean
  }
}
</script>
