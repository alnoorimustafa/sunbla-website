<script lang="ts" setup>
import MyCard from './MyCard.vue'
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      testClass: 'col-lg-4 col-md-5 col-sm-10 mb-5'
    }
  }
})
</script>

<template>
  <div class="p-5 text-center">
    <p class="text-gold">خدماتنا</p>
    <h1 class="fs-2">ماذا توفر المؤسسة للمساهمين ؟</h1>

    <div class="mt-5rem">
      <div class="row justify-content-around">
        <MyCard
          :my-class="testClass"
          image="../src/assets/strategy.svg"
          title="التخطيط الاستراتيجي"
          subtitle="تقوم المؤسسة بدراسة كل مشروع تتبناه بمعق لاستنباط رؤيته ثم تحويلها الى مجموعة من الاهداف المحددة والمتسلسة التي يمكن تحقيقها وقياسها ضمن جدول زمني معين لتكون هذه الخطة خارطة طريق لكل من القائمين عليه والمساهمين فيه"
        />

        <MyCard
          :my-class="testClass"
          image="../src/assets/strategy.svg"
          title="التواصل المستمر"
          subtitle="تعهدت المؤسسة بالتواصل المستمر مع جميع الاطراف المرتبطة بمشاريعها لتضمن الشفافية الكاملة وجدوى مشاريعها على ارض الواقع، ولاستثمار مرونة المؤسسة في تغيير وتعديل نشاطها ليلائم المتطلبات المتغيرة للمشاريع لضمان استمرارها في افضل صورة"
        />
      </div>
      <div class="row justify-content-around">
        <MyCard
          :my-class="testClass"
          image="../src/assets/strategy.svg"
          title="حلقة الوصل"
          subtitle="يمتلك المؤسسون علاقات اجتماعية واسعة وجيدة مع شخصيات مؤثرة اجتماعيا من الناحية الدينية والسياسية والاقتصادية وتسعى المؤسسة لتكون نقطة التقاء هذه العلاقات في خدمة الأمة"
        />
        <MyCard
          :my-class="testClass"
          image="../src/assets/strategy.svg"
          title="الدراسات والاحصائيات"
          subtitle="تلتزم المؤسسة بالشفافية الكاملة تجاه الجميع في ما يتعلق بالاموال والجهود المبذولة في مشاريعها، وتستثمر الطرق العلمية الحديثة في قياس وتقييم كل مشروع من مشاريعها"
        />
      </div>
    </div>
  </div>
</template>

<style>
.mt-5rem {
  margin-top: 5rem;
}
</style>
