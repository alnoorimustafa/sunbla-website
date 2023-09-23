import { createRouter, createWebHashHistory } from 'vue-router'
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
import PetitionView from '@/views/PetitionView.vue'
import layoutStore from '../utilities/layoutStore'

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      component: HomeView,
      meta: {
        showHeader: true,
        showFooter: true
      }
    },
    {
      path: '/about-us',
      component: AboutUsView,
      meta: {
        showHeader: true,
        showFooter: true
      }
    },
    {
      path: '/qarth-hasan',
      component: QarthHasan,
      meta: {
        showHeader: true,
        showFooter: true
      }
    },
    {
      path: '/app',
      component: SunblaApp,
      meta: {
        showHeader: true,
        showFooter: true
      }
    },
    {
      path: '/health-governance',
      component: HealthGovernance,
      meta: {
        showHeader: true,
        showFooter: true
      }
    },
    {
      path: '/projects',
      component: MyProjects,
      meta: {
        showHeader: true,
        showFooter: true
      }
    },
    {
      path: '/will-app',
      component: WillApp,
      meta: {
        showHeader: true,
        showFooter: true
      }
    },
    {
      path: '/our-advantage',
      component: OurAdvantageView,
      meta: {
        showHeader: true,
        showFooter: true
      }
    },
    {
      path: '/app/privacy',
      component: AppPrivacy,
      meta: {
        showHeader: true,
        showFooter: true
      }
    },
    {
      path: '/app/EULA',
      component: AppEULA,
      meta: {
        showHeader: true,
        showFooter: true
      }
    },
    {
      path: '/contact-us',
      component: ContactUs,
      meta: {
        showHeader: true,
        showFooter: true
      }
    },
    {
      path: '/support',
      component: SupportView,
      meta: {
        showHeader: true,
        showFooter: true
      }
    },
    {
      path: '/petition/:id',
      component: PetitionView,
      meta: {
        showHeader: false,
        showFooter: false
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  // Check if the route has meta properties to control header and footer visibility
  if (to.meta.showHeader !== undefined) {
    layoutStore.showHeader = to.meta.showHeader as boolean
  }
  if (to.meta.showFooter !== undefined) {
    layoutStore.showFooter = to.meta.showFooter as boolean
  }
  next()
})

export default router
