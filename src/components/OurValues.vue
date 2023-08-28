<script lang="ts" setup>
import MyCard from './MyCard.vue'
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      myClass: 'col-lg-2 col-sm-6 mb-2'
    }
  }
})
</script>

<template>
  <div class="p-5 text-center green text-white">
    <p class="text-gold">ما الذي يوجهنا ؟</p>
    <h1 class="fs-2">مبادئ وقيم المؤسسة</h1>

    <div class="mt-5rem">
      <div class="row justify-content-around">
        <MyCard
          :my-class="myClass"
          title="الاخلاص"
          subtitle="تحمل المسؤولية على ما يجري في المجتمع وأن كل فرد له دور في الحل"
        />
        <MyCard
          :my-class="myClass"
          title="التكافل"
          subtitle="التكافل الاجتماعي هو ارقى الظواهر الإنسانية في المجتمع"
        />
        <MyCard
          :my-class="myClass"
          title="العدالة"
          subtitle="كل انسان يستحق ان يعامل بطريقة عادلة"
        />
        <MyCard
          :my-class="myClass"
          title="التعاطف"
          subtitle="هو أساس العلاقات الإنسانية الأخلاقية"
        />
        <MyCard
          :my-class="myClass"
          title="الشفافية"
          subtitle="المشاكل التقليدية قد تتطلب حلولا غير تقليدية"
        />
      </div>
      <div class="row justify-content-around">
        <MyCard
          :my-class="myClass"
          title="الابتكار"
          subtitle="انتاج تقارير واضحة وشفافة تنشر دوريا حول النشاطات والاداء والتعاملات المالية"
        />
        <MyCard
          :my-class="myClass"
          title="التنمية المستدامة"
          subtitle="تخطيط وتصميم البرامج لتقديم حلول دائمة"
        />
        <MyCard
          :my-class="myClass"
          title="التعلم"
          subtitle="مفتاح تحسين حياة الناس وتمكينهم من تحقيق أهدافهم"
        />
        <MyCard
          :my-class="myClass"
          title="التعاون"
          subtitle="الاشتراك مع المؤسسات الحكومية ومنظمات المجتمع المدني"
        />
        <MyCard
          :my-class="myClass"
          title="الامانة"
          subtitle="التعامل مع كل موارد ومشاريع المؤسسة بكل حرص وامانة"
        />
      </div>
    </div>
  </div>
</template>
