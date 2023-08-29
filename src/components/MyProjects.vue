<script lang="ts" setup>
import ContentBlock from './ContentBlock.vue'
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  // Component options
})
</script>

<template>
  <div class="p-5 text-center">
    <p class="fs-6 text-gold">برامجنا</p>
    <h1 class="fs-2">كيف نحاول التغيير ؟</h1>

    <div class="mt-5rem">
      <div class="row justify-content-around">
        <ContentBlock
          title="القرض الحسن"
          subtitle="نموذج تمويل إسلامي يهدف إلى دعم مشاريع الشباب الإنتاجية كبديل اخلاقي ومبتكر للقروض التقليدية."
          image="coin-wooden-table.jpg"
          link="qarth-hasan"
        />
        <hr />
        <ContentBlock
          title="منصة سنبلة"
          subtitle="منصة جمع التواقيع الإلكترونية تسهل تنظيم حملات جمع التواقيع عبر الإنترنت لدعم قضايا معينة وزيادة الوعي والتأثير الاجتماعي."
          image="app.png"
          link="app"
        />
      </div>
      <hr />
      <div class="row justify-content-around">
        <ContentBlock
          title="حوكمة التبرع الصحي"
          subtitle="تنظيم حركة تبرعات المجال الصحي ومنع هدرها في دهاليز المنظومة الصحية الحكومية والاهلية."
          image="drugs.jpg"
          link="health-governance"
        />
        <hr />
        <ContentBlock
          title="الوصية الالكترونية"
          subtitle='انطلاقا من حديث النبي (ص) : "من مات بغير وصية مات ميتة جاهلية"، نعمل على مشروع الوصية الالكترونية لتوفر بديلا اسهل واكثر امانا لكتابة الوصية.'
          image="will.png"
          link="will-app"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  height: 500px;
}
.imageContainer {
  height: 300px;
}

img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}
</style>
