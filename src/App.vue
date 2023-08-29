<script setup lang="ts">
import MyHeader from './components/MyHeader.vue'

import MyFooter from './components/MyFooter.vue'
</script>

<template>
  <div dir="rtl" lang="ar">
    <MyHeader />
    <router-view />
    <MyFooter />
  </div>
</template>

<style>
@font-face {
  font-family: med;
  src: url(./assets/fonts/Tajawal-Medium.ttf);
}
@font-face {
  font-family: bld;
  src: url(./assets/fonts/Alexandria-bold.ttf);
}

p,
a {
  font-family: med;
  line-height: 1.5;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: bld;
  line-height: 1.5;
}

.btn {
  font-family: med;
}

h1 {
  font-size: 48px;
  margin-top: 1rem;
}

p {
  font-size: 18px;
  margin-top: 1rem;
}

.gold {
  background-color: #ffc200;
}
.text-gold {
  color: #ffc200;
}

.green {
  background-color: #5a7830;
}
.text-green {
  color: #5a7830;
}

.blue {
  background-color: #0090b2;
}
.text-blue {
  color: #0090b2;
}

.btn {
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
}

.mt-5rem {
  margin-top: 5rem;
}
</style>
