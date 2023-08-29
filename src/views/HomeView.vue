<script setup lang="ts">
import MyHero from '../components/MyHero.vue'
import AboutUs from '../components/AboutUs.vue'
import MyProjects from '../components/MyProjects.vue'
import OurValues from '../components/OurValues.vue'
import OurServices from '../components/OurServices.vue'
import OurAdvantage from '../components/OurAdvantage.vue'
import ReadyTo from '../components/ReadyTo.vue'
import ContactUs from '../components/ContactUs.vue'
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<template>
  <MyHero />
  <AboutUs />
  <MyProjects />
  <OurValues />
  <OurServices />
  <OurAdvantage />
  <ReadyTo />
  <ContactUs />
</template>
