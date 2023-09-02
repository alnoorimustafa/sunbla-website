<template>
  <div class="container p-5">
    <router-link to="/">
      <button class="btn btn-dark">الرجوع</button>
    </router-link>
    <h1 class="text-center">قصتنا</h1>
    <p>
      قبل فترة من الزمن، اجتمع مجموعة من الشباب الشغوفين والمصممين على تحقيق تأثير إيجابي في
      مجتمعهم. كان إلهامهم بخلق تغيير ملموس منطلقا من حسهم بالمسؤولية وإيمانهم العميق بإمكانية تحقيق
      التغيير من خلال الجهود الجماعية.
    </p>
    <p>
      بعد مناقشات وجلسات كثيرة، أدركوا أن هناك عوائقا كبيرة في الطريقة التي يسعى بها الناس إلى تحقيق
      أحلامهم ومشاريعهم سواء كانت انتاجية او خيرية. فبينما كان لديهم العديد من الأفكار والطموحات
      الرائعة، كانوا غالبًا يواجهون صعوبة في جذب الدعم الكافي.
    </p>
    <p>
      بعد تفكير عميق وبحث مكثف، وجدوا فكرة فريدة ومبتكرة: إنشاء مؤسسة غير ربحية تسمح للأفراد ببدء
      مشاريعهم الخاصة من خلال هذه المؤسسة. بدلاً من محاولة تنفيذ مشاريعهم بمفردهم، سيتاح لهم الفرصة
      للانضمام إلى مجتمع داعم يشجع على تبادل الخبرات والموارد.
    </p>
    <p>
      كان هذا المفهوم المبتكر لإطلاق المشاريع من خلال مؤسسة واحدة يجمع بين الأفراد المبدعين
      والمبتكرين والمخلصين في مكان واحد. بدأوا في تحقيق حلمهم من خلال توفير البنية التحتية والدعم
      الضروري للمشاريع المختلفة، مما يجعل الفكرة ممكنة وملهمة للجميع. وما زالوا يسعون بكل حماس
      وتفاني لدعم الأفراد في تحقيق أحلامهم وتطوير مشاريعهم.
    </p>
    <hr class="my-5" />

    <div class="video col-lg-4 col-md-12 col-sm-12 m-auto text-center w-100">
      <h1 class="fs-5 my-5">فديو تعريفي</h1>
      <iframe
        src="https://www.youtube.com/embed/jmsIb63AOrY?si=t71s4TYsUdnkDwF3"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
    <hr class="my-5" />
    <div class="col-lg-4 col-md-6 col-sm-12 m-auto text-center">
      <h1 class="fs-5 my-5">شهادة التسجيل</h1>
      <img src="/certificate.jpg" alt="certificate" />
    </div>
  </div>
</template>

<style scoped>
img {
  width: 100%;
  height: auto;
}
iframe {
  width: 560px;
  height: 315px;
}

@media screen and (max-width: 775px) {
  iframe {
    height: auto;
    width: auto;
  }
}
</style>
