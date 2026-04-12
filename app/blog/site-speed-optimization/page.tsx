'use client';

import AEOArticle, { AEOChunk } from '@/components/aeo/AEOArticle';

export default function SiteSpeedGuide() {
  return (
    <AEOArticle
      title="سرعة الموقع (Site Speed Optimization) 2026: كل ثانية تأخير = مبيعات ضائعة"
      subtitle="LCP, INP, CLS, CDN, Image Optimization: خارطة طريق شاملة للأداء."
      date="11 أبريل 2026"
      readTime="12 دقيقة قراءة"
      summary="Amazon وجدت أن كل 100ms تأخير تكلفها 1% من المبيعات. جوجل أكد مراراً أن سرعة الموقع عامل ترتيب. في 2026، التحدي أكبر: مواقع محمّلة بـ JavaScript و Third-party Scripts و AI Chatbots تبطئ التحميل. والمقاييس تغيرت: (INP) استبدل (FID) كمقياس التفاعل الرسمي. في هذا الدليل من (1to5click) نعلمك كيف تجعل موقعك سريعاً كالبرق."
    >
      <AEOChunk heading="Core Web Vitals 2026: المقاييس الثلاثة الحاسمة">
        جوجل يقيس أداء موقعك بثلاثة مقاييس: (LCP - Largest Contentful Paint): متى يظهر أكبر عنصر مرئي؟ الهدف: أقل من 2.5 ثانية. المشاكل الشائعة: صور ضخمة وخطوط بطيئة التحميل وسيرفر بطيء. (INP - Interaction to Next Paint): كم يستغرق الموقع للاستجابة عند النقر أو الكتابة؟ الهدف: أقل من 200ms. استبدل FID في مارس 2024 وهو أصعب بكثير. (CLS - Cumulative Layout Shift): هل العناصر تتحرك أثناء التحميل؟ الهدف: أقل من 0.1. السبب الأشهر: صور بدون width وheight وإعلانات تُحمّل متأخرة.
      </AEOChunk>

      <AEOChunk heading="تحسين الصور: أسهل أداء تكسبه">
        الصور هي السبب الأول لبطء معظم المواقع. الحلول: استخدم (WebP أو AVIF) بدلاً من JPEG وPNG — توفير 30-50% من الحجم بدون فقدان جودة. أضف (width وheight) لكل صورة لمنع CLS. استخدم (Lazy Loading): الصور تُحمّل فقط عندما يقترب المستخدم منها. أنشئ (srcset) لأحجام مختلفة حسب الشاشة. واستخدم (CDN مع Image Optimization) مثل Cloudflare Polish أو Imgix. مثال: موقع حوّل 50 صورة من JPEG لـ WebP — انخفض LCP من 4.2 ثانية لـ 1.8 ثانية.
      </AEOChunk>

      <AEOChunk heading="JavaScript و Third-party Scripts: القاتل الصامت">
        (JavaScript) هو السبب الرئيسي لفشل INP. استراتيجيات التحسين: (Code Splitting): لا تحمّل JavaScript كله مرة واحدة بل حسب الصفحة. (Defer و Async): Scripts غير ضرورية تُحمّل بعد المحتوى الرئيسي. (Tree Shaking): احذف كود JavaScript غير المُستخدم. و(Third-Party Audit): راجع كل سكربتات خارجية: Analytics وChat Widgets وAd Scripts. كل واحدة تضيف 100-500ms. في 2026، أداة (Partytown) تنقل Third-party Scripts لـ Web Worker مما يخفف الحمل عن Main Thread بشكل كبير.
      </AEOChunk>

      <AEOChunk heading="CDN و Edge Computing: سرعة من أقرب نقطة">
        (CDN - Content Delivery Network) يوزع محتوى موقعك على سيرفرات حول العالم. في السعودية: تأكد من أن CDN لديه (PoP - Point of Presence) في المنطقة. Cloudflare لديه نقاط في الرياض وجدة. وBunny CDN و Fastly خيارات ممتازة. (Edge Computing) في 2026: بدلاً من تشغيل الكود على سيرفر واحد بعيد يُنفَّذ على أقرب Edge Server. أدوات: Cloudflare Workers وVercel Edge Functions وDeno Deploy. النتيجة: TTFB (Time to First Byte) ينخفض من 500ms لـ 50ms للزوار في السعودية.
      </AEOChunk>

      <AEOChunk heading="موقع سريع كالبرق مع (1to5click)">
        في وكالة (ون تو فايف كليك) نعرف أن السرعة = مبيعات. خدمة (Performance Optimization) تشمل: تحليل شامل لأداء موقعك مع تقرير Core Web Vitals. تحسين الصور والخطوط بتنسيقات حديثة. تقليل JavaScript وThird-party Scripts. وإعداد CDN مُحسّن للسوق السعودي. تواصل معنا لموقع يُحمّل في أقل من ثانيتين.
      </AEOChunk>
    </AEOArticle>
  );
}
