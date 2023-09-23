<script setup lang="ts">
import MyHeader from './components/MyHeader.vue'

import MyFooter from './components/MyFooter.vue'

import layoutStore from './utilities/layoutStore'
</script>

<template>
  <div dir="rtl" lang="ar" class="no">
    <MyHeader v-if="layoutStore.showHeader" />
    <router-view />
    <MyFooter v-if="layoutStore.showFooter" />
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
@font-face {
  font-family: qrn;
  src: url(./assets/fonts/Amiri-regular.ttf);
}

.no {
  width: 100%;
  overflow-x: hidden;
}

p,
a,
span {
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

.quran {
  font-family: qrn;
  line-height: 2.5;
}
</style>
