import fs from 'fs';
import path from 'path';

const API_KEY = 'acea0c65254d4b4fa49ffcad54d0dd78';
const SITE_URL = 'https://onetofiveclick.com';

async function indexUrls() {
  try {
    console.log('🔄 جاري قراءة ملفات الرندر الخاصة بـ Next.js...');
    const manifestPath = path.join(process.cwd(), '.next', 'server', 'app-paths-manifest.json');
    if (!fs.existsSync(manifestPath)) {
      console.error('❌ عذراً! يرجى تشغيل npm run build أولاً.');
      return;
    }

    let pathsRaw = Object.keys(JSON.parse(fs.readFileSync(manifestPath, 'utf8')));

    // تنظيف المسارات
    let urls = pathsRaw
      .filter(p => !p.includes('/_not-found') && !p.includes('[') && p.endsWith('/page') || p === '/page')
      .map(p => {
        let cleanPath = p.replace(/\/page$/, '');
        return `${SITE_URL}${cleanPath}`;
      });

    // استخراج مسارات المجلدات الرئيسية للمدونة وغيرها التي قد تكون مخفية
    pathsRaw.forEach(p => {
       if(!p.includes('[') && p.includes('/route') === false && !p.includes('/page')) {
           urls.push(`${SITE_URL}${p}`);
       }
    });

    // إزالة التكرارات
    urls = [...new Set(urls)].filter(url => url !== 'https://onetofiveclick.com/');

    // إضافة الصفحة الرئيسية
    urls.unshift('https://onetofiveclick.com');

    console.log(`✅ تم استخراج ${urls.length} رابطاً جاهزاً للأرشفة الفورية!`);

    // Bing Webmaster لا يقبل أكثر من 500 رابط في الدفعة الواحدة، سنأخذ أول 500
    const urlsSlice = urls.slice(0, 100);

    const payload = {
      siteUrl: SITE_URL,
      urlList: urlsSlice
    };

    console.log('🚀 جاري إرسال الروابط إلى خوادم Bing Webmaster...');
    
    const response = await fetch(`https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlbatch?apikey=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();

    if (response.ok) {
        console.log(`🎉 نجاح مبهر! استجابة Bing:`, result);
        console.log(`✅ تم تقديم ${urlsSlice.length} رابط بنجاح لفهرسة الذكاء الاصطناعي (IndexNow / Bing)`);
    } else {
        console.error('❌ حدث خطأ من ناحية Bing:', result);
    }
  } catch (error) {
    console.error('❌ خطأ غير متوقع:', error);
  }
}

indexUrls();
