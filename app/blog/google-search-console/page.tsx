'use client';

import AEOArticle, { AEOChunk } from '@/components/aeo/AEOArticle';

export default function GoogleSearchConsoleGuide() {
  return (
    <AEOArticle
      title="Google Search Console 2026: الدليل الشامل لأقوى أداة SEO مجانية"
      subtitle="Performance Reports, URL Inspection, Index Coverage, Sitemaps: كل ما تحتاج معرفته."
      date="11 أبريل 2026"
      readTime="13 دقيقة قراءة"
      summary="Google Search Console (GSC) هي الأداة الأهم لأي متخصص SEO — ومع ذلك 80% من أصحاب المواقع لا يستخدمونها بشكل صحيح. في 2026، جوجل أضاف ميزات جديدة ثورية: تقارير AI Overviews وRecommendations المدعومة بالذكاء الاصطناعي وتحسينات على تقرير المظهر في البحث. في هذا الدليل من (1to5click) نعلمك كيف تستخرج أقصى قيمة من GSC."
    >
      <AEOChunk heading="تقرير الأداء (Performance Report): كنز البيانات المخفي">
        تقرير الأداء يكشف بالضبط كيف يظهر موقعك في جوجل. المقاييس الأربعة: (Impressions): كم مرة ظهرت صفحاتك في نتائج البحث. (Clicks): كم مرة نقر المستخدم على نتيجتك. (CTR - Click Through Rate): نسبة النقر مقابل الظهور — مؤشر قوة العنوان والوصف. و(Average Position): متوسط ترتيبك لكل استعلام. كيف تستخدمه استراتيجياً: فلتر بـ (Queries) واكتشف الكلمات المفتاحية التي تظهر لها لكن CTR منخفض — حسّن العنوان والوصف. ابحث عن كلمات مفتاحية في Position 4-10 — فرص ذهبية لتحسين بسيط يرفعها للصفحة الأولى.
      </AEOChunk>

      <AEOChunk heading="فحص URL (URL Inspection): هل جوجل يرى صفحتك؟">
        أداة (URL Inspection) تخبرك بالضبط كيف يرى جوجل صفحتك. تحقق من: هل الصفحة مفهرسة أم لا؟ وإذا لم تكن — لماذا؟ ما الـ Canonical URL الذي اختاره جوجل؟ (قد يختلف عن ما حددته أنت). هل الصفحة Mobile-Friendly؟ وهل تم اكتشاف Rich Results من Schema Markup؟ ميزة مهمة: (Request Indexing) — بعد نشر أو تحديث صفحة مهمة اطلب فهرستها فوراً بدلاً من الانتظار. تحذير: جوجل يحد من عدد طلبات الفهرسة اليومية — لا تسيء استخدامها.
      </AEOChunk>

      <AEOChunk heading="تقرير تغطية الفهرس (Index Coverage): اكتشف المشاكل الخفية">
        تقرير (Pages) يُظهر كل صفحات موقعك المُكتشفة وحالتها. الحالات الأربع: (Valid): صفحات مفهرسة بنجاح. (Valid with warnings): مفهرسة لكن يوجد مشكلة يجب إصلاحها. (Excluded): صفحات استبعدها جوجل — راجع السبب. و(Error): صفحات بها خطأ يمنع فهرستها — أولوية إصلاح قصوى. أكثر الأسباب شيوعاً للاستبعاد: (Crawled but not indexed): جوجل زحف الصفحة لكن قرر عدم فهرستها — عادة بسبب محتوى ضعيف. (Duplicate without canonical): محتوى مكرر بدون canonical tag. و(Blocked by robots.txt): أنت حظرتها بالخطأ.
      </AEOChunk>

      <AEOChunk heading="ميزات GSC الجديدة في 2026">
        جوجل أضاف ميزات قوية في 2026: (AI Overviews Report): تقرير جديد يوضح كم مرة ظهر موقعك كمصدر في AI Overviews. (Recommendations): نصائح تحسين مخصصة مدعومة بـ AI — جوجل يخبرك ماذا تُصلح وكيف. (Shopping Tab Performance): تقرير منفصل لأداء المنتجات في تبويب التسوق. و(Merchant Center Integration): ربط أعمق مع Google Merchant Center لتتبع أداء المنتجات. تأكد من إعداد (Email Alerts) لتصلك إشعارات فورية عند اكتشاف مشاكل جديدة.
      </AEOChunk>

      <AEOChunk heading="احترف Search Console مع (1to5click)">
        في وكالة (ون تو فايف كليك) نستخدم GSC كمصدر بيانات أساسي لكل قراراتنا. خدمة (GSC Analytics) تشمل: إعداد Search Console بشكل صحيح مع كل التحققات. تقارير شهرية تُحلل أداء موقعك في البحث. اكتشاف وإصلاح مشاكل الفهرسة فوراً. واستخراج فرص الكلمات المفتاحية من بيانات GSC. تواصل معنا لتحويل بيانات GSC لقرارات تنمّي موقعك.
      </AEOChunk>
    </AEOArticle>
  );
}
