import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutUsView from '@/views/AboutUsView.vue'
import QarthHasan from '@/views/QarthHasan.vue'
import SunblaApp from '@/views/SunblaApp.vue'
import HealthGovernance from '@/views/HealthGovernance.vue'
import WillApp from '@/views/WillApp.vue'
import MyProjects from '@/components/MyProjects.vue'
import OurAdvantageView from '@/views/OurAdvantageView.vue'
import AppPrivacy from '@/views/AppPrivacy.vue'
import AppEULA from '@/views/AppEULA.vue'
import SupportView from '@/views/SupportView.vue'
import ContactUs from '@/components/ContactUs.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/about-us',
      component: AboutUsView
    },
    {
      path: '/qarth-hasan',
      component: QarthHasan
    },
    {
      path: '/app',
      component: SunblaApp
    },
    {
      path: '/health-governance',
      component: HealthGovernance
    },
    {
      path: '/projects',
      component: MyProjects
    },
    {
      path: '/will-app',
      component: WillApp
    },
    {
      path: '/our-advantage',
      component: OurAdvantageView
    },
    {
      path: '/app/privacy',
      component: AppPrivacy
    },
    {
      path: '/app/EULA',
      component: AppEULA
    },
    {
      path: '/contact-us',
      component: ContactUs
    },
    {
      path: '/support',
      component: SupportView
    }
  ]
})

export default router
