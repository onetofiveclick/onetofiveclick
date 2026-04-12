import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowRight, CheckCircle2, ArrowLeft } from 'lucide-react';

// Centralized Blog Content mimicking a CMS
const blogContent: Record<string, any> = {
  'why-organic-traffic-dropping-answer-engines': {
    title: 'لماذا تنخفض الحركة العضوية لموقعك؟ التحول الخفي نحو محركات الإجابة',
    excerpt: 'إذا كنت تشهد انخفاضاً مفاجئاً وغير مفسر في الحركة العضوية، فأنت لست وحدك. المشهد البحثي يتغير تحت أقدامنا.',
    author: 'فريق ون تو فايف كليك',
    date: '2 مارس 2026',
    category: 'استراتيجية AEO',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    content: `
      <h2>الخوارزمية غير المرئية: إنها ليست عقوبة، إنها تطور</h2>
      <p>خلال الأرباع القليلة الماضية، كانت فرق التسويق في كل قطاع B2B وSaaS تبلغ عن نفس المقياس المرعب: الحركة العضوية تهوي. تُظهر لوحات تحكم Google Search Console انطباعات تسقط من حافة الهاوية، والكلمات الرئيسية "الذهبية" المستقرة سابقاً لم تعد تحقق أي نقرات.</p>
      <p>رد الفعل الفوري عادة ما يكون الذعر. هل كان تحديثاً أساسياً؟ هل تعرضنا لعقوبة يدوية؟ هل السيو التقني لدينا معطل؟</p>
      <p>في 90% من الحالات التي ندققها في ون تو فايف كليك، تكون الإجابة على كل هذه الأسئلة هي <strong>لا</strong>.</p>
      
      <h2>مرحباً بكم في عصر محركات الإجابة</h2>
      <p>الحركة لم تتلاشى في الهواء؛ بل <em>هاجرت</em>. المستخدمون يتجاوزون صفحات نتائج محرك البحث التقليدية (SERPs) تماماً. بدلاً من كتابة الاستفسارات في جوجل والنقر عبر 10 روابط زرقاء، يسألون ChatGPT وClaude وPerplexity ونظرة جوجل العامة المدعمة بالذكاء الاصطناعي (AI Overviews).</p>
      <p>هذه المنصات هي <strong>محركات إجابة</strong>. إنها لا توفر قائمة بالمواقع؛ بل تقدم الإجابة الدقيقة المصاغة من الويب. هذا يعني أن "النقر" لم يعد ضرورياً للمستخدم للحصول على القيمة.</p>
      
      <h3>واقع "الصفر نقرة" (Zero-Click)</h3>
      <ul>
        <li>يسأل المستخدمون سؤالاً معقداً.</li>
        <li>يقرأ نموذج اللغة الكبير (LLM) موقع الويب الخاص بك (ومواقع منافسيك).</li>
        <li>يولد النموذج إجابة شاملة محلياً في واجهة الدردشة الخاصة به.</li>
        <li>يحصل المستخدم على ما يحتاج ويرحل.</li>
      </ul>
      <p>لقد قدمت البيانات، لكنك لم تحصل على الحركة. هذا هو الواقع الجديد.</p>
      
      <h2>استراتيجية الكلمات الرئيسية ماتت؛ عاشت "الكيانات"</h2>
      <p>إذا كانت استراتيجيتك الرقمية بالكامل تعتمد على "حجم الكلمات الرئيسية"، فأنت تحسن لمدينة أشباح. محركات الإجابة لا تهتم بكثافة الكلمات الرئيسية. إنها تهتم بـ <strong>الكيانات (Entities)</strong> و <strong>الاستشهادات (Citations)</strong>.</p>
      <p>يحاول نموذج اللغة تقديم الإجابة الأكثر دقة من الناحية الواقعية والمحظية بالتقدير. للقيام بذلك، يبحث عن الإجماع. إذا اتفقت عدة عقد عالية الثقة على الإنترنت (Reddit، Quora، YouTube، المدونات الموثوقة، العلاقات العامة) على أن إطار عملك يحل مشكلة معينة، سيبدأ النموذج بالاستشهاد الصريح بعلامتك التجارية في إجاباته.</p>

      <h2>كيفية وقف النزيف</h2>
      <p>لا يمكنك محاربة سلوك المستخدم. إذا كان المستخدمون يفضلون الدردشة مع الذكاء الاصطناعي على التمرير في جوجل، يجب أن تتغير استراتيجيتك التسويقية لمقابلتهم هناك. تحتاج إلى الانتقال من تحسين محركات البحث (SEO) إلى <strong>تحسين محركات الإجابة (AEO)</strong>.</p>
      <p>بدلاً من القلق بشأن الأوصاف التعريفية (meta-descriptions) وكثافة الكلمات الرئيسية، تحتاج إلى التركيز على:</p>
      <ul>
        <li><strong>تراكم الـ RAG:</strong> تقديم معلومات كثيفة وعالية القيمة عبر وسائط متعددة (خاصة نصوص YouTube) التي تلتهمها النماذج.</li>
        <li><strong>رسم خرائط الكيانات:</strong> التأكد من أن الويب يعرف بشكل لا لبس فيه بالضبط ما هو عملك، وما تبيعه، ومن أنت أفضل منه.</li>
        <li><strong>البيانات الأصلية:</strong> النماذج متعطشة للإحصائيات. قدم بيانات ملكية تضطر للاستشهاد بها.</li>
      </ul>
      <p>انخفاض الحركة ليس نهاية نموك الرقمي؛ إنه ببساطة تصفية. العلامات التجارية التي تتكيف مع AEO ستلتقط الموجة الجديدة من العملاء المحتملين ذوي النوايا العالية والمدفوعين بالذكاء الاصطناعي. أما العلامات التي لا تفعل ذلك، فستستمر في التحسين لنقرات لم تعد موجودة.</p>
    `
  },
  'youtube-rag-stacking-visibility': {
    title: 'تراكم الـ YouTube-RAG: محرك الاستشهاد الخفي',
    excerpt: 'لماذا تعد نصوص الفيديو العامل الأكثر ارتباطاً بظهورك في الذكاء الاصطناعي وكيفية تحسينها.',
    author: 'فريق ون تو فايف كليك',
    date: '28 فبراير 2026',
    category: 'AI-SEO',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200',
    content: `
      <h2>التحول إلى البحث متعدد الوسائط</h2>
      <p>عندما يفكر المسوقون في السيو، فإنهم يفكرون عادةً في النص على صفحة الويب. ما يفتقدونه هو أن نماذج اللغة الكبيرة (LLMs) مثل ChatGPT وGemini يتم تدريبها على بيانات أكثر بكثير من مجرد HTML القياسي. المصدر الأكثر قوة وغير المستغل حالياً؟ <strong>نصوص الفيديو.</strong></p>

      <h2>ما هو تراكم الـ RAG؟</h2>
      <p>يرمز RAG إلى <strong>التوليد المدعم بالاسترداد (Retrieval-Augmented Generation)</strong>. إنه الآلية التي تستخدمها محركات الذكاء الاصطناعي لربط إجاباتها ببيانات واقعية في الوقت الفعلي بدلاً من مجرد الهلوسة بناءً على بيانات التدريب. يشير "التراكم" (Stacking) إلى تقديم نفس بيانات الكيانات الواقعية والكثيفة عبر وسائط موثوقة متعددة بحيث لا يمكن للذكاء الاصطناعي تجاهل علامتك التجارية.</p>
      <p>إليك لماذا يعد YouTube الرصاصة الفضية لتراكم الـ RAG:</p>
      <ul>
        <li><strong>جوجل تملك يوتيوب:</strong> يمتلك Gemini وصولاً مباشراً وغير مقيد لكل كلمة منطوقة على يوتيوب في غضون ثوانٍ من التحميل.</li>
        <li><strong>كثافة ثقة عالية:</strong> يُنظر إلى الصوت المنطوق الذي يتم نسخه تلقائياً من قبل محركات الإجابة كمحتوى عضوي عالي الثقة مقارنة بالمقالات المحشوة بالكلمات الرئيسية.</li>
        <li><strong>لغة طبيعية محادثاتية:</strong> تم بناء نماذج الذكاء الاصطناعي للتحاور. الإيقاع الطبيعي المسموع في الفيديو يتماشى تماماً مع هياكل الأوامر التي يستخدمها المستخدمون عند سؤال الذكاء الاصطناعي.</li>
      </ul>

      <h2>خطة العمل لـ YouTube-RAG</h2>
      <p>لتنفيذ ذلك كجزء من استراتيجية AEO الخاصة بك:</p>
      <ol>
        <li><strong>تحديد استفسار "الوعي":</strong> مثل، *"كيف أحسن موقعي لمحركات الإجابة؟"*</li>
        <li><strong>تسجيل فيديو:</strong> لا تكتفِ بقراءة نص. تحدث بشكل طبيعي ولكن تأكد من ذكر اسم علامتك التجارية تحديداً ("هنا في ون تو فايف كليك...") والكيانات الأساسية ("تحسين محركات الإجابة").</li>
        <li><strong>التضمين والربط:</strong> قم برفع الفيديو، وتأكد من أن النصوص التوضيحية (CC) دقيقة تماماً، وقم بتضمين الفيديو في أعلى منشور مدونة مطابق على موقعك.</li>
      </ol>
      <p>من خلال تنفيذ هذا التراكم، عندما يسأل مستخدم ChatGPT عن محركات الإجابة، يحلل النموذج النص الكثيف والدقيق للفيديو الخاص بك ويستشهد بـ **ون تو فايف كليك** كمرجع معتمد.</p>
    `
  },
  'geo-vs-traditional-seo-comparison': {
    title: 'GEO مقابل السيو التقليدي: لماذا تفشل الاستراتيجيات القديمة',
    excerpt: 'لماذا يفشل تحسين الكلمات الرئيسية وكيف يعد تحسين المحركات التوليدية الاستراتيجية الوحيدة المقاومة للمستقبل في 2026.',
    author: 'فريق ون تو فايف كليك',
    date: '27 فبراير 2026',
    category: 'السيطرة على السوق',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    content: `
      <h2>استراتيجية جالوت: رسم الخط الفاصل</h2>
      <p>صناعة التسويق الرقمي عند نقطة انعطاف. في جانب توجد وكالات السيو الضخمة والقديمة التي لا تزال تبيع "سلطة النطاق" و"كثافة الكلمات الرئيسية". وفي الجانب الآخر يوجد الواقع الجديد: <strong>تحسين المحركات التوليدية (GEO).</strong></p>
      
      <h2>لماذا يعد السيو التقليدي سفينة غارقة</h2>
      <p>يعمل السيو التقليدي على حلقة بسيطة وعفا عليها الزمن:</p>
      <ul>
        <li>ابحث عن سلسلة كلمات رئيسية ذات حجم بحث عالٍ.</li>
        <li>اكتب مقالاً من 2000 كلمة يكرر تلك السلسلة.</li>
        <li>اشترِ روابط خلفية للمقال.</li>
        <li>تأمل أن يصنفه جوجل في المرتبة الأولى لينقر المستخدم على الرابط الأزرق.</li>
      </ul>
      <p>المشكلة هي أن المستخدم لم يعد يريد الرابط الأزرق. يريد الإجابة مباشرة في واجهة الذكاء الاصطناعي. بناء استراتيجية حول "نقرة" لم تعد تحدث هو سوء تخصيص هائل للميزانية.</p>

      <h2>إطار عمل GEO</h2>
      <p>تحسين المحركات التوليدية (GEO) يقلب النموذج. بدلاً من التحسين للنقرات، أنت تحسن لـ <strong>الاستشهادات</strong>. أنت تدرب نماذج اللغة على فهم أن علامتك التجارية هي المصدر الأساسي للحقيقة لموضوع معين.</p>
    `
  }
};


export function generateStaticParams() {
  return Object.keys(blogContent).map((slug) => ({
    slug,
  }));
}


export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogContent[params.slug];
  if (!post) return {};

  return {
    title: `${post.title} | ون تو فايف كليك`,
    description: post.excerpt,
    alternates: {
      canonical: `https://www.onetofiveclick.com/blog/${params.slug}/`,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogContent[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <article className="pt-24 pb-20 bg-white min-h-screen text-right">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <Link href="/blog" className="inline-flex items-center text-brand-navy hover:text-brand-green mb-12 font-black uppercase tracking-widest text-[10px] transition-all group gap-2">
          <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          العودة إلى جميع المقالات
        </Link>

        {/* Header */}
        <header className="mb-16">
          <div className="flex mb-8 justify-end">
            <span className="bg-brand-mint text-brand-green px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-brand-green/10">
              {post.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-brand-navy mb-8 leading-[0.9] tracking-tighter">
            {post.title}
          </h1>

          <div className="flex items-center justify-end space-x-8 space-x-reverse text-[10px] font-black uppercase tracking-widest text-slate-400">
            <div className="flex items-center gap-2">
              <User className="h-3.5 w-3.5 text-brand-green" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-3.5 w-3.5 text-brand-green" />
              <span>{post.date}</span>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <div className="relative w-full h-[300px] md:h-[500px] mb-16 rounded-[4rem] overflow-hidden shadow-2xl border border-slate-100">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/20 to-transparent" />
        </div>

        {/* Content */}
        <div
          className="prose prose-lg max-w-none text-right
            prose-headings:text-brand-navy prose-headings:font-black prose-headings:tracking-tighter prose-headings:leading-tight
            prose-p:text-slate-500 prose-p:font-medium prose-p:leading-relaxed
            prose-strong:text-brand-navy prose-strong:font-black
            prose-ul:text-slate-500 prose-li:font-medium
            prose-img:rounded-[2rem]
            prose-blockquote:border-r-4 prose-blockquote:border-brand-green prose-blockquote:bg-brand-mint/30 prose-blockquote:p-8 prose-blockquote:rounded-l-[2rem] prose-blockquote:font-bold prose-blockquote:text-brand-navy
            prose-a:text-brand-green prose-a:font-black prose-a:no-underline hover:prose-a:text-brand-navy transition-colors"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Footer CTA */}
        <div className="mt-24 p-12 md:p-20 bg-brand-navy rounded-[4rem] relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <h3 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter leading-none relative z-10">جاهز للسيطرة على <br /><span className="text-brand-green">محركات الإجابة؟</span></h3>
          <p className="text-slate-400 font-medium mb-12 max-w-xl relative z-10 leading-relaxed mx-auto md:mx-0">توقف عن خسارة الحركة لصالح منصات الذكاء الاصطناعي. ابدأ في استغلالها كأكبر قناة نمو لك من خلال أنظمة AEO المملوكة لنا.</p>
          <Link href="/contact" className="inline-flex items-center bg-brand-green text-brand-navy px-12 py-6 rounded-full hover:scale-105 transition-all font-black uppercase tracking-widest text-[10px] relative z-10 shadow-xl shadow-brand-green/20 group gap-3">
            ابدأ مخططك الخاص
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}
