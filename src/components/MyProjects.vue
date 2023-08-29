<script lang="ts" setup>
import ProjectCard from './ProjectCard.vue'
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
        <div class="row">
          <div class="col-6">
            <h1>title</h1>
            <p>subtitle</p>
          </div>
          <div class="col-6">
            <img height="100%" src="triangle.png" alt="Image" class="img-fluid image" />
          </div>
        </div>
        <ProjectCard
          title="القرض الحسن"
          subtitle="نموذج تمويل إسلامي يهدف إلى دعم مشاريع الشباب الإنتاجية كبديل اخلاقي ومبتكر للقروض التقليدية."
        />
        <ProjectCard
          title="منصة سنبلة"
          subtitle="منصة جمع التواقيع الإلكترونية تسهل تنظيم حملات جمع التواقيع عبر الإنترنت لدعم قضايا معينة وزيادة الوعي والتأثير الاجتماعي."
        />
      </div>
      <div class="row justify-content-around">
        <ProjectCard
          title="حوكمة التبرع الصحي"
          subtitle="تنظيم حركة تبرعات المجال الصحي ومنع هدرها في دهاليز المنظومة الصحية الحكومية والاهلية."
        />
        <ProjectCard
          title="تطبيق وصيتي"
          subtitle='انطلاقا من حديث النبي (ص) : "من مات بغير وصية مات ميتة جاهلية"، نعمل على مشروع الوصية الالكترونية لتوفر بديلا اسهل واكثر امانا لكتابة الوصية.'
        />
      </div>
    </div>
  </div>
</template>
