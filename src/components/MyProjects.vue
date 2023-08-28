<script lang="ts" setup>
import ProjectCard from './ProjectCard.vue'
</script>

<template>
  <div class="p-5 text-center">
    <p class="text-gold">مشاريعنا</p>
    <h1 class="">كيف نحاول التغيير ؟</h1>
    <p class="m-auto col-md-8 col-sm-12">
      بدأنا بمجموعة من المشاريع التي نعتقد انها ذات تأثير كبير
    </p>

    <div class="projects">
      <div class="row justify-content-around">
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

<style>
.projects {
  margin-top: 5rem;
}
</style>
