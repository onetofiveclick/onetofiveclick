'use client';
// fixed encoding

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Search, ArrowLeft } from 'lucide-react';

const blogPosts = [
    {
        id: 164,
        title: 'دليل السيو لعام 2026: عصر الكيانات والوكلاء',
        excerpt: 'اكتشف كيف تهيمن على محركات الإجابة وتتهيأ لعصر البحث الأرجنتي في السعودية والخليج.',
        author: 'فريق ون تو فايف كليك',
        date: '12 أبريل 2026',
        category: 'استراتيجية 2026',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
        slug: 'seo-this-year-guide-2026'
    },
    {
        id: 163,
        title: 'استراتيجيات بناء الروابط في 2026: من الروابط إلى الاستشهادات',
        excerpt: 'لماذا لم تعد الباك لينكس كافية؟ تعلم كيف تبني روابط سلطة تثق بها محركات الذكاء الاصطناعي.',
        author: 'فريق ون تو فايف كليك',
        date: '12 أبريل 2026',
        category: 'بناء السلطة',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        slug: 'link-building-strategies-2026'
    },
    {
        id: 162,
        title: 'ما هو AEO؟ دليل تحسين محركات الإجابة الشامل',
        excerpt: 'تعرّف على AEO (تحسين محركات الإجابة) وكيف تجعل أدوات الذكاء الاصطناعي مثل ChatGPT و Perplexity و Gemini و Claude توصي بعملك. دليل شامل مع خطوات عملية.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'سيو الذكاء الاصطناعي',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
        slug: 'aeo-answer-engine-optimization-guide'
    },
    {
        id: 161,
        title: 'السيو المبرمج (Programmatic SEO): دليل التوسع السريع في السعودية',
        excerpt: 'كيف تستخدم البيانات لتوليد آلاف الصفحات عالية الجودة بضغطة زر وتكتسح سوق العقارات والخدمات.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التقنية والسيو',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
        slug: 'programmatic-seo-saudi'
    },
    {
        id: 160,
        title: 'سياسة المحتوى المولد بالذكاء الاصطناعي: التوازن الذهبي',
        excerpt: 'كيف تستخدم الـ AI لزيادة الإنتاجية دون التضحية بـ E-E-A-T أو المخاطرة بمعاقبة جوجل لموقعك.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'سيو الذكاء الاصطناعي',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
        slug: 'ai-generated-content-policy'
    },
    {
        id: 159,
        title: 'الظهور في Google Discover: سر الزيارات المليونية',
        excerpt: 'كيف تقتحم واجهة هواتف ملايين السعوديين وتجعل محتواك ينتشر كالنار في الهشيم دون انتظار بحث المستخدم.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'الهيمنة على السوق',
        image: 'https://images.unsplash.com/photo-1512428559083-a400a3b8463e?auto=format&fit=crop&q=80&w=800',
        slug: 'google-discover-visibility'
    },
    {
        id: 158,
        title: 'سيو العقارات في السعودية: السيطرة على الأحياء الجارية',
        excerpt: 'خارطة طريق كاملة للشركات العقارية والمنصات للاستحواذ على بحث الباحثين عن منازل العمر في الرياض وجدة.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'استراتيجية السيو',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
        slug: 'seo-for-real-estate-saudi'
    },
    {
        id: 157,
        title: 'دليل السيو الطبي (Medical SEO) في السعودية',
        excerpt: 'كيف تجذب المرضى لعيادتك أو مستشفاك عبر بناء الثقة العلمية وتصدر نتائج بحث (النيش الصحي).',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'عائد استثمار المحتوى',
        image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800',
        slug: 'medical-seo-guide-ksa'
    },
    {
        id: 156,
        title: 'شبكات إعلانات التجزئة (Retail Media Networks) وسيو التجارة',
        excerpt: 'الموجة الكبيرة القادمة: كيف تحسن منتجاتك داخل سلة، زد، ونون، وتكسب حصة سوقية هائلة.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التجارة الإلكترونية (E-commerce)',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
        slug: 'retail-media-network-seo'
    },
    {
        id: 155,
        title: 'مستقبل البحث المحلي: ما وراء الخرائط',
        excerpt: 'كيف ستتغير رحلة العميل السعودي مع دمج الواقع المعزز (AR) والبحث البصري في محطات حياته اليومية.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'أبحاث وتقارير',
        image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800',
        slug: 'future-of-local-search'
    },
    {
        id: 154,
        title: 'تحسين الرسم البياني للمعرفة (Knowledge Graph)',
        excerpt: 'كيف تفرض علامتك ككيان رسمي في عقل جوجل، وتسيطر على صناديق المعلومات الجانبية.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التقنية والسيو',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
        slug: 'knowledge-graph-optimization'
    },
    {
        id: 153,
        title: 'السيو التقني لـ Headless CMS (Next.js & Contentful)',
        excerpt: 'دليل المطورين والمسوقين لبناء مواقع خارقة السرعة وصديقة للسيو باستخدام أحدث تقنيات الويب.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التقنية والسيو',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
        slug: 'technical-seo-for-headless-cms'
    },
    {
        id: 152,
        title: 'تقارير عائد الاستثمار (SEO ROI) للمدراء التنفيذيين',
        excerpt: 'كيف تثبت قيمة السيو بلغة الأرقام والأرباح، وتقنع الإدارة بزيادة ميزانية النمو العضوي.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'الاستراتيجية',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        slug: 'seo-roi-reporting-for-ceos'
    },
    {
        id: 151,
        title: 'مراجعة Semrush: المنصة الأقوى للسوق السعودي؟',
        excerpt: 'نظرة معمقة على أداة السيو الأكثر شهرة ومدى ملاءمتها لاحتياجات الشركات في المملكة والخليج.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'أبحاث وتقارير',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        slug: 'semrush-review-saudi'
    },
    {
        id: 150,
        title: 'مراجعة Ahrefs: هل هو ملك الروابط الخلفية فعلاً؟',
        excerpt: 'تحليل دقيق لأداة السيو المفضلة لمحترفي بناء السلطة ومدى فعاليتها الحقيقية في السوق السعودي.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'أبحاث وتقارير',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        slug: 'ahrefs-review-saudi'
    },
    {
        id: 149,
        title: 'مراجعة SurferSEO: السيو القائم على العلم',
        excerpt: 'كيف يفكك هذا البرنامج شفرة المركز الأول ويخبرك بالضبط ماذا تكتب لتتصدر النتائج العربية.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'استراتيجية السيو',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
        slug: 'surferseo-review-saudi'
    },
    {
        id: 148,
        title: 'Microsoft Clarity vs Hotjar: أفضل أدوات الـ CRO',
        excerpt: 'مقارنة بين عمالقة تحليل سلوك المستخدم: كيف ترى موقعك بعيون عملائك وتزيد مبيعاتك في المملكة.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'عائد استثمار المحتوى',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        slug: 'clarity-vs-hotjar-cro-saudi'
    },
    {
        id: 147,
        title: 'تاريخ محركات البحث: من AltaVista إلى Gemini',
        excerpt: 'رحلة عبر الزمن لفهم كيف تطورت العقول الإلكترونية التي تحكم عالمنا الرقمي وتهيمن على مستقبلنا.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'استراتيجية السيو',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
        slug: 'history-of-search-engines-guide'
    },
    {
        id: 146,
        title: 'سيو البحث الصوتي باللغة العربية: عصر التحدث',
        excerpt: 'كيف تهيئ موقعك لتتصدر إجابات Siri و Alexa و Google Assistant في السعودية والخليج.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'سيو الذكاء الاصطناعي',
        image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800',
        slug: 'voice-search-seo-arabic'
    },
    {
        id: 145,
        title: 'استراتيجية التسويق الفيروسي في السعودية',
        excerpt: 'كيف تصنع محتوى ينتشر كالنار في الهشيم عبر مجالس سناب شات وتيك توك في المملكة.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التسويق الرقمي',
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800',
        slug: 'viral-marketing-strategy-saudi'
    },
    {
        id: 144,
        title: 'تقرير تسويق المحتوى B2B في السعودية',
        excerpt: 'كيف تقنع صناع القرار في الشركات الكبرى عبر محتوى مؤسسي رصين وذكي وقائم على الأرقام.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'عائد استثمار المحتوى',
        image: 'https://images.unsplash.com/photo-1454165833767-0266b01131e5?auto=format&fit=crop&q=80&w=800',
        slug: 'b2b-content-marketing-ksa'
    },
    {
        id: 143,
        title: 'تحسين معدل التحويل (CRO) للأنشطة المحلية',
        excerpt: 'كيف تحول زوار موقعك إلى عملاء فعليين يتصلون، يحجزون، ويشترون عبر تقنيات التحويل المتقدمة.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'عائد استثمار المحتوى',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        slug: 'cro-local-business-saudi'
    },
    {
        id: 142,
        title: 'إتقان قمع التسويق (Marketing Funnel)',
        excerpt: 'دليل بناء رحلة العميل السعودي من الغرباء إلى العملاء الأوفياء والمسوقين لعلامتك تجارية.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التسويق الرقمي',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
        slug: 'marketing-funnel-mastery-saudi'
    },
    {
        id: 141,
        title: 'دليل التسويق بالفيديو في السعودية',
        excerpt: 'كيف تهيمن على شاشات الهواتف عبر استراتيجية فيديو ثلاثية: سناب شات، تيك توك، ويوتيوب.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التسويق الرقمي',
        image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800',
        slug: 'video-marketing-guide-ksa'
    },
    {
        id: 140,
        title: 'قائمة مراجعة EEAT للسلطة السعودية',
        excerpt: 'كيف تثبت لجوجل أنك خبير، موثوق، ومصدر معتمد (الخبرة، التجربة، السلطة، الموثوقية) في نيشك.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'استراتيجية السيو',
        image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800',
        slug: 'eeat-checklist-saudi-authority'
    },
    {
        id: 139,
        title: 'أتمتة التسويق: سير العمل بالذكاء الاصطناعي',
        excerpt: 'كيف تجعل شركتك تعمل بنظام الطيار الآلي وتضاعف إنتاجيتك دون زيادة حجم فريقك.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'سيو الذكاء الاصطناعي',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
        slug: 'automate-marketing-ai-workflows'
    },
    {
        id: 138,
        title: 'دليل Google Analytics 4 (GA4) للشركات السعودية',
        excerpt: 'كيف تقرأ لغة الأرقام وتتخذ قرارات استشارية مبنية على البيانات والتحليلات التنبؤية الذكية.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'أبحاث وتقارير',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        slug: 'ga4-guide-saudi-business'
    },
    {
        id: 137,
        title: 'استراتيجية نمو التجارة الإلكترونية (سلة وزد)',
        excerpt: 'كيف تخرج من عباءة المتجر العادي لتصبح العلامة التجارية رقم 1 في قطاعك بالسوق السعودي.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'الهيمنة على السوق',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
        slug: 'ecommerce-growth-strategy-salla-zid'
    },
    {
        id: 136,
        title: 'الأبحاث الأصلية والسيو القائم على البيانات',
        excerpt: 'كيف تحول أرقام شركتك إلى مغناطيس للروابط الخلفية وسلطة مطلقة في السوق السعودي والخليجي.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'أبحاث وتقارير',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        slug: 'original-research-data-seo-saudi'
    },
    {
        id: 135,
        title: 'إتقان نية البحث (Search Intent): فهم الـ لماذا',
        excerpt: 'لماذا يهم سبب البحث أكثر من كلمة البحث نفسها في الوصول للعملاء الملتزمين في رحلة الشراء.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'استراتيجية السيو',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
        slug: 'search-intent-mastery-saudi'
    },
    {
        id: 134,
        title: 'استراتيجية الروابط الداخلية المتقدمة: شبكة الثقة',
        excerpt: 'كيف تربط صفحات موقعك بذكاء لتوزيع القوة البرمجية وزيادة وقت البقاء وتوجيه البوتات بسلاسة.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التقنية والسيو',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        slug: 'advanced-internal-linking-strategy'
    },
    {
        id: 133,
        title: 'احتراف أدوات السيو (Semrush & Ahrefs) في السعودية',
        excerpt: 'كيف تستخدم أقوى أدوات العالم للتجسس على المنافسين واقتناص الفرص في السوق السعودي المحلي.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'أبحاث وتقارير',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        slug: 'semrush-ahrefs-guide-saudi'
    },
    {
        id: 132,
        title: 'الكلمات الدلالية والكيانات (LSI & Entities)',
        excerpt: 'كيف يفهم جوجل معنى صفحتك وراء الكلمات، ولماذا يعتبر السياق هو الأكسجين الجديد لنموك الرقمي.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'سيو الذكاء الاصطناعي',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
        slug: 'lsi-semantic-entities-ai'
    },
    {
        id: 131,
        title: 'بنية الموقع والزحف العميق (Site Architecture)',
        excerpt: 'كيف تبني هيكلاً برمجياً منطقياً يسهل مهمة جوجل في فهم قوتك الموضوعية وتوزيع سلطة الروابط.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التقنية والسيو',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        slug: 'site-architecture-deep-crawling'
    },
    {
        id: 130,
        title: 'سيو يوتيوب: الكلمات المفتاحية والوصف (YouTube SEO)',
        excerpt: 'كيف تهيمن على ثاني أكبر محرك بحث في العالم وتتصدر نتائج فيديو جوجل بالسعودية والخليج.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التسويق الرقمي',
        image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800',
        slug: 'youtube-keyword-research-metadata'
    },
    {
        id: 120,
        title: 'جوجل تريندز والسيو اللحظي (Real-Time SEO): ركوب الموجة',
        excerpt: 'كيف تقتنص الفرص البحثية في السعودية فور حدوثها وتتضلر الترند بذكاء وسرعة فائقة.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'أبحاث وتقارير',
        image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800',
        slug: 'google-trends-real-time-seo'
    },
    {
        id: 119,
        title: 'سيو البودكاست والبحث الصوتي (Podcast SEO): عصر الاستماع',
        excerpt: 'كيف تجعل محتوى علامتك التجارية الصوتي قابلاً للاكتشاف في جوجل، سبوتيفاي، ومساعدي الذكاء الاصطناعي.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التسويق الرقمي',
        image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=800',
        slug: 'podcast-seo-audio-search-saudi'
    },
    {
        id: 118,
        title: 'الرؤية الرقمية والوعي بالعلامة (SEO Visibility & Brand)',
        excerpt: 'كيف تحول ترتيبك في جوجل إلى هيبة رقمية ومكانة راسخة في عقول المستهلكين السعوديين.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التسويق الرقمي',
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800',
        slug: 'seo-visibility-brand-awareness'
    },
    {
        id: 117,
        title: 'بناء فريق سيو داخلي (In-House SEO): المؤسسة الرقمية',
        excerpt: 'كيف توظف وتدير أفضل كفاءات السيو في شركتك السعودية لتحقيق الاستقلال الرقمي والنمو الذاتي.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التسويق الرقمي',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
        slug: 'building-in-house-seo-team-saudi'
    },
    {
        id: 116,
        title: 'مغناطيسات العملاء (Lead Magnets): قاعدة بيانات ذهبية',
        excerpt: 'تحويل الزوار المجهولين إلى عملاء حقيقيين عبر أصول محتوى لا يمكن رفضها في السوق السعودي.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التسويق الرقمي',
        image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c02?auto=format&fit=crop&q=80&w=800',
        slug: 'lead-magnets-conversion-assets'
    },
    {
        id: 115,
        title: 'احتراف كتابة السيو (SEO Copywriting): سحر الكلمة',
        excerpt: 'كيف تكتب محتوى عربياً يلمس قلوب الباحثين السعوديين ويتصدر خوارزميات الذكاء الاصطناعي بدقة.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التسويق الرقمي',
        image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800',
        slug: 'seo-copywriting-mastery-arabic'
    },
    {
        id: 114,
        title: 'ملفات Robots.txt و Sitemaps: هندسة الزحف الاحترافية',
        excerpt: 'توجيه بوتات جوجل والذكاء الاصطناعي بدقة جراحية لضمان فهرسة أسرع وأذكى لمحتوى موقعك.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التقنية والسيو',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800',
        slug: 'robots-txt-sitemap-technical-seo'
    },
    {
        id: 113,
        title: 'تصميم المواقع الصديق للسيو (SEO-Friendly Design)',
        excerpt: 'كيف تدمج بين الـ UI/UX و قواعد السيو التقني لتبني موقعاً يحبه البشر والآلات في آن واحد.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التقنية والسيو',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        slug: 'seo-friendly-design-ui-ux'
    },
    {
        id: 112,
        title: 'محتوى الجذب الفيروسي (Linkbait): كيف تجعل الجميع يتحدث عنك؟',
        excerpt: 'استراتيجيات صناعة محتوى ينتشر تلقائياً ويجلب روابط طبيعية قوية وسلطة رقمية هائلة.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'أبحاث وتقارير',
        image: 'https://images.unsplash.com/photo-1557838330-91f614bd5a1e?auto=format&fit=crop&q=80&w=800',
        slug: 'linkbait-viral-content-saudi'
    },
    {
        id: 111,
        title: 'تخطيط وتقويم محتوى السيو (SEO Calendar): الانضباط الذكي',
        excerpt: 'كيف تنظم إنتاجك السنوي بناءً على المواسم السعودية، الترندات، ومواعيد تحديثات جوجل لضمان الصدارة الدائمة.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'أبحاث وتقارير',
        image: 'https://images.unsplash.com/photo-1506784919141-93b4828b5552?auto=format&fit=crop&q=80&w=800',
        slug: 'seo-content-planning-calendar'
    },
    {
        id: 110,
        title: 'تفاعل العملاء والاحتفاظ بهم (Engagement & Retention): بناء المجتمعات',
        excerpt: 'كيف تحول الزائر العابر إلى عميل مخلص يعود إليك دائماً في المملكة عبر بناء مجتمعات الواتساب وتليجرام.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التسويق الرقمي',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
        slug: 'user-engagement-retention-saudi'
    },
    {
        id: 109,
        title: 'استراتيجية المحتوى المرئي (Visual Content): لغة العين',
        excerpt: 'كيف تهيمن على انتباه الجمهور السعودي عبر الصور، الانفوجرافيك، والـ AI Art والرسومات البيانية المتقدمة.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التسويق الرقمي',
        image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=800',
        slug: 'visual-content-strategy-saudi'
    },
    {
        id: 108,
        title: 'مراجعة أفضل أدوات السيو المدفوعة: هل تستحق استثمارك؟',
        excerpt: 'Semrush, Ahrefs, Moz, Ubersuggest: مقارنة الأداء والدعم للسوق السعودي وأدوات الذكاء الاصطناعي.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التحليلات والأدوات',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        slug: 'top-paid-seo-tools-review'
    },
    {
        id: 107,
        title: 'قوالب صناعة المحتوى (Content Templates): سر السرعة والجودة',
        excerpt: 'قوالب جاهزة للمقالات، السناب شات، والواتساب مصممة للجمهور السعودي لرفع الإنتاجية ودقة الاستهداف.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التسويق الرقمي',
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800',
        slug: 'content-marketing-templates-saudi'
    },
    {
        id: 106,
        title: 'ميزات نتائج البحث وملخصات AI (SERP Features): احتلال الشاشة',
        excerpt: 'كيف تسيطر على الخريطة، الصور، المراجعات، وإجابات الذكاء الاصطناعي في آن واحد للسيطرة على انتباه السوق السعودي.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التقنية والسيو',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        slug: 'serp-features-ai-summaries'
    },
    {
        id: 105,
        title: 'المحتوى المكرر وسيو التحقيق (Duplicate Content): حماية الترتيب',
        excerpt: 'كيف تكتشف وتعالج مشاكل تكرار المحتوى التي تقتل ترتيب موقعك باستخدام تقنيات Canonical و Forensic Audit.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التقنية والسيو',
        image: 'https://images.unsplash.com/photo-1543286386-713bcd53400b?auto=format&fit=crop&q=80&w=800',
        slug: 'duplicate-content-forensic-seo'
    },
    {
        id: 104,
        title: 'قائمة فحص السيو الداخلي (On-Page SEO Checklist): الإتقان الكامل',
        excerpt: 'كل ما تحتاجه لتحسين صفحاتك من العناوين إلى الشيما لضمان أقصى ظهور في محركات البحث التقليدية والذكية.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التقنية والسيو',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        slug: 'on-page-seo-checklist-saudi'
    },
    {
        id: 103,
        title: 'مقتطفات جوجل المميزة (Featured Snippets): كيف تصبح النتيجة رقم 0؟',
        excerpt: 'السيطرة على المربع الذهبي في نتائج البحث والظهور كإجابة موثوقة في AI Overviews و SGE.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التقنية والسيو',
        image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800',
        slug: 'featured-snippets-guide-saudi'
    },
    {
        id: 102,
        title: 'استراتيجية الكلمات المفتاحية الطويلة (Long-Tail Keywords): كنز التحويل',
        excerpt: 'لماذا تعتبر الكلمات المحددة جداً هي المفتاح للسيطرة على السوق السعودي بأقل تكلفة وأعلى عائد على الاستثمار.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التقنية والسيو',
        image: 'https://images.unsplash.com/photo-1507537362145-5fbb81d9a922?auto=format&fit=crop&q=80&w=800',
        slug: 'long-tail-keywords-strategy-saudi'
    },
    {
        id: 101,
        title: 'إعادة تدوير المحتوى (Content Repurposing): كيف تعصر الفائدة من كل كلمة؟',
        excerpt: 'حوّل مقالاً واحداً إلى 20 قطعة محتوى في تيك توك، واتساب، وسناب شات بضغطة زر.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التسويق الرقمي',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
        slug: 'content-repurposing-strategy'
    },
    {
        id: 100,
        title: 'سيو الشركات الكبرى (Enterprise SEO): إدارة آلاف الصفحات بذكاء',
        excerpt: 'استراتيجيات المقياس (Scale)، ميزانية الزحف، والتعاون بين الأقسام في المؤسسات السعودية.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التقنية والسيو',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
        slug: 'enterprise-seo-saudi'
    },
    {
        id: 99,
        title: 'السيو الدلالي والكلمات المرتبطة (Semantic SEO & LSI): لغة الكيانات',
        excerpt: 'كيف يفهم جوجل المعنى خلف الكلمات العربية؟ الانتقال من الأوتار إلى الأشياء في عصر AI.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التقنية والسيو',
        image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800',
        slug: 'semantic-seo-lsi-arabic'
    },
    {
        id: 98,
        title: 'وقت المكوث ومعدل الارتداد (Dwell Time & Bounce Rate): كيف تُبقي الزوار في موقعك؟',
        excerpt: 'تحليلات رضا المستخدم وبناء محتوى يأسر انتباه الباحث السعودي من الثانية الأولى.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التحليلات والأدوات',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        slug: 'dwell-time-bounce-rate-saudi'
    },
    {
        id: 97,
        title: 'بناء الروابط عبر الروابط المكسورة (Broken Link Building): تكتيك الربح المتبادل',
        excerpt: 'كيف تحول أخطاء الآخرين إلى روابط قوية لموقعك بذكاء واحترام في السوق السعودي.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التقنية والسيو',
        image: 'https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&q=80&w=800',
        slug: 'broken-link-building-strategy'
    },
    {
        id: 96,
        title: 'إحصائيات التجارة الإلكترونية في السعودية: الأرقام التي ستغير استراتيجيتك',
        excerpt: 'تحليل نمو السوق (80+ مليار ريال)، حصص المنصات، وسلوك الدفع وتوقعات 2027.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'أبحاث وتقارير',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        slug: 'saudi-ecommerce-statistics'
    },
    {
        id: 95,
        title: 'أتمتة التسويق B2B (Marketing Automation): كفاءة المبيعات في السعودية',
        excerpt: 'كيف تدير آلاف العملاء المحتملين بمجهود أقل ونتائج أكبر باستخدام الذكاء الاصطناعي والواتساب.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التسويق الرقمي',
        image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800',
        slug: 'marketing-automation-b2b-ksa'
    },
    {
        id: 94,
        title: 'تحسين نية البحث (Search Intent): السر خلف ترتيب الصفحة الأولى',
        excerpt: 'تجاوز الكلمات المفتاحية وفهم الأهداف الحقيقية للباحث السعودي للسيطرة على جوجل و AI.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التقنية والسيو',
        image: 'https://images.unsplash.com/photo-1507537362145-5fbb81d9a922?auto=format&fit=crop&q=80&w=800',
        slug: 'search-intent-optimization-saudi'
    },
    {
        id: 93,
        title: 'الفهرسة أولاً للجوال (Mobile-First Indexing): الدليل الشامل في السعودية',
        excerpt: 'لماذا لم يعد موقع المكتب يهم جوجل؟ وكيف تضمن تصدرك عبر تجربة الجوال الأسرع والأمتع.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التقنية والسيو',
        image: 'https://images.unsplash.com/photo-1512428559083-a400a3b8463e?auto=format&fit=crop&q=80&w=800',
        slug: 'mobile-first-indexing-guide-ksa'
    },
    {
        id: 92,
        title: 'سيو المواقع المتعددة (Multi-Location SEO): كيف تسيطر على كل مدن المملكة',
        excerpt: 'توسيع نطاق ظهورك المحلي من الرياض إلى جدة والدمام بذكاء واستراتيجيات الفروع الكبرى.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'سيو محلي',
        image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800',
        slug: 'local-seo-multi-location-saudi'
    },
    {
        id: 91,
        title: 'مستقبل السيو التقني: HTTP/3 و Edge SEO',
        excerpt: 'كيف تجعل موقعك يسبق زوارك؟ تحويل السيو من السيرفر إلى الحافة باستخدام Cloudflare Workers.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التقنية والسيو',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
        slug: 'http3-edge-seo-future'
    },
    {
        id: 90,
        title: 'أفضل أدوات السيو (SEO Tools) لعام 2026: ما الذي تستخدمه الوكالات الاحترافية؟',
        excerpt: 'SEMrush, Ahrefs, Screaming Frog, AI Tools: دليلك لاختيار الترسانة المناسبة لجوجل وبقية المحركات.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التحليلات والأدوات',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        slug: 'top-seo-tools-saudi-agencies'
    },
    {
        id: 89,
        title: 'سلوك المستهلك السعودي الرقمي 2026: كيف يفكر عملاؤك في عصر الـ AI؟',
        excerpt: 'دراسة تحليلية للسلوك الشرائي، الثقة الرقمية، وتأثير المساعدين الأذكياء على القرار في المملكة.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التسويق الرقمي',
        image: 'https://images.unsplash.com/photo-1512428559083-a400a3b8463e?auto=format&fit=crop&q=80&w=800',
        slug: 'saudi-consumer-behavior-digital'
    },
    {
        id: 88,
        title: 'تحليل فجوة الروابط (Backlink Gap Analysis) 2026: كيف تسرق ميزة منافسيك؟',
        excerpt: 'استشراف فرص الروابط التي يمتلكها منافسوك وتفتقدها أنت، وكيفية إغلاق الفجوة لتنتزع الصدارة.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التقنية والسيو',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
        slug: 'backlink-gap-analysis-guide'
    },
    {
        id: 87,
        title: 'تحسين معدل التحويل للمتاجر (Ecommerce CRO) 2026: كيف تبيع أكثر بنفس الزيارات؟',
        excerpt: 'Psychology, Checkout Flow, Trust Signals, Mobile UX: أسرار المتاجر المليونية في السعودية.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التسويق الرقمي',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
        slug: 'ecommerce-conversion-optimization'
    },
    {
        id: 86,
        title: 'استراتيجية محركات بحث الذكاء الاصطناعي 2027: كيف تسيطر على المستقبل؟',
        excerpt: 'نقطة الانعطاف (Inflection Point): من الترتيب في جوجل إلى التوصية في ChatGPT و Gemini.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'الذكاء الاصطناعي',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
        slug: 'ai-search-engine-strategy'
    },
    {
        id: 85,
        title: 'أبحاث التسويق والسيو المدفوع بالبيانات (Data-Driven SEO) 2026: العلم خلف التصدر',
        excerpt: 'GA4, BigQuery, Python for SEO: كيف تحول الأرقام إلى استراتيجيات نمو في السعودية.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التحليلات والأدوات',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        slug: 'marketing-research-data-seo'
    },
    {
        id: 84,
        title: 'بناء الروابط (Link Building) عبر الأبحاث والبيانات 2026: كيف تصبح مرجعاً للسوق',
        excerpt: 'دراسات الحالة والبيانات الأصلية: كيف تجبر المواقع الأخرى على الإشارة إليك.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التقنية والسيو',
        image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=800',
        slug: 'link-building-research'
    },
    {
        id: 83,
        title: 'سيو الفيديو واليوتيوب (Video SEO) 2026: كيف تتصدر نتائج البحث المرئي في السعودية',
        excerpt: 'YouTube, TikTok, Reels: استراتيجيات الظهور في Ask Maps وبحث الذكاء الاصطناعي.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التسويق الرقمي',
        image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=800',
        slug: 'video-seo-youtube-saudi'
    },
    {
        id: 82,
        title: 'التسويق بالعمولة (Affiliate Marketing) في السعودية 2026: دليل الربح المستدام',
        excerpt: 'أمازون السعودية، نون، نمشي: كيف تبني إمبراطورية تسويق بالعمولة بمحتوى موثوق.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التسويق الرقمي',
        image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800',
        slug: 'affiliate-marketing-ksa'
    },
    {
        id: 81,
        title: 'Google Search Console 2026: الدليل الشامل لأقوى أداة SEO مجانية',
        excerpt: 'Performance Reports, URL Inspection, Index Coverage, AI Overviews Report.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التقنية والسيو',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        slug: 'google-search-console'
    },
    {
        id: 80,
        title: 'إمكانية الوصول للويب (Web Accessibility) 2026: لماذا موقعك يجب أن يكون متاحاً للجميع',
        excerpt: 'WCAG 2.2, ADA Compliance, SEO Benefits: الدليل الشامل للوصول الرقمي.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التقنية والسيو',
        image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800',
        slug: 'web-accessibility'
    },
    {
        id: 79,
        title: 'توليد العملاء المحتملين B2B (Lead Generation) 2026: من الاستعلام للعقد',
        excerpt: 'ABM, Intent Data, Sales Funnel: استراتيجية توليد عملاء B2B مؤهلين.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التسويق الرقمي',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
        slug: 'b2b-lead-generation'
    },
    {
        id: 78,
        title: 'سرعة الموقع (Site Speed Optimization) 2026: كل ثانية تأخير = مبيعات ضائعة',
        excerpt: 'LCP, INP, CLS, CDN, Image Optimization: خارطة طريق شاملة للأداء.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التقنية والسيو',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
        slug: 'site-speed-optimization'
    },
    {
        id: 77,
        title: 'السيو التقني (Technical SEO) 2026: الدليل الشامل لتحسين البنية التحتية لموقعك',
        excerpt: 'Crawl Budget, Redirects, JavaScript SEO, XML Sitemaps: أسس لا يمكن تجاهلها.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التقنية والسيو',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
        slug: 'technical-seo'
    },
    {
        id: 76,
        title: 'تدقيق السيو (SEO Audit) 2026: كيف تكتشف مشاكل موقعك وتصلحها قبل أن يُعاقبك جوجل',
        excerpt: 'Screaming Frog, Search Console, AI Readiness: تدقيق شامل خطوة بخطوة.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التقنية والسيو',
        image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800',
        slug: 'seo-audit'
    },
    {
        id: 75,
        title: 'التسويق عبر إنستغرام (Instagram Marketing) 2026: الدليل الشامل لتحويل المتابعين لعملاء',
        excerpt: 'Reels, Shops, Collab Posts, AI Features: كل ما تحتاجه الشركات السعودية.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التسويق الرقمي',
        image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=800',
        slug: 'instagram-marketing'
    },
    {
        id: 74,
        title: 'التسويق بالبريد الإلكتروني (Email Marketing) 2026: القناة التي لا تموت أبداً',
        excerpt: 'Automation, Segmentation, AI Personalization, Deliverability: الدليل العملي.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التسويق الرقمي',
        image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&q=80&w=800',
        slug: 'email-marketing'
    },
    {
        id: 73,
        title: 'التسويق عبر تيك توك (TikTok Marketing) 2026: من ترندات راقصة لآلة مبيعات حقيقية',
        excerpt: 'TikTok Shop, Search Ads, Creator Marketplace: الدليل العملي للسوق السعودي.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التسويق الرقمي',
        image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&q=80&w=800',
        slug: 'tiktok-marketing'
    },
    {
        id: 72,
        title: 'سيو المتاجر الإلكترونية (E-commerce SEO) 2026: دليل مضاعفة مبيعاتك من البحث العضوي',
        excerpt: 'صفحات المنتجات، الفلاتر، المحتوى المكرر، Google Shopping، Agentic Commerce.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التقنية والسيو',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
        slug: 'ecommerce-seo'
    },
    {
        id: 71,
        title: 'التسويق بالمحتوى (Content Marketing) 2026: من المقالات العشوائية لآلة اكتساب عملاء',
        excerpt: 'Citation-Worthy Content, AI Writing, Editorial Calendar: استراتيجية المحتوى الفائز.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التسويق الرقمي',
        image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800',
        slug: 'content-marketing'
    },
    {
        id: 70,
        title: 'حملات Performance Max 2026: الدليل الشامل لأقوى نوع حملة في Google Ads',
        excerpt: 'AI Max, Feed-Only PMax, Asset Groups: أقصى عائد استثمار بأقل ميزانية ضائعة.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'الإعلانات المدفوعة',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        slug: 'performance-max'
    },
    {
        id: 69,
        title: 'السيو المحلي (Local SEO) 2026: كيف تسيطر على خرائط جوجل وتجلب عملاء من حيّك؟',
        excerpt: 'Google Business Profile, Reviews, Ask Maps AI: خارطة طريق شاملة.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التقنية والسيو',
        image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800',
        slug: 'local-seo'
    },
    {
        id: 68,
        title: 'بناء الروابط (Link Building) 2026: الاستراتيجيات التي تعمل فعلاً في عصر الـ AI',
        excerpt: 'Digital PR, HARO Alternatives, Guest Posts, Disavow: روابط تُحدث فرقاً حقيقياً.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التقنية والسيو',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800',
        slug: 'link-building'
    },
    {
        id: 67,
        title: 'Google Discover 2026: كيف تحصل على آلاف الزيارات بدون بحث Keyword واحد؟',
        excerpt: 'خوارزمية التوصيات، Discover Core Update فبراير 2026، وشروط الظهور الأساسية.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التقنية والسيو',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
        slug: 'google-discover'
    },
    {
        id: 66,
        title: 'إدارة بوتات الذكاء الاصطناعي (AI Bot Management) 2026: robots.txt في عصر الوكلاء',
        excerpt: 'GPTBot, ClaudeBot, GoogleBot-AI: كيف تتحكم بمن يزحف ويقتبس من موقعك.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التقنية والسيو',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
        slug: 'ai-bot-management'
    },
    {
        id: 65,
        title: 'التسويق عبر Reddit 2026: الدليل الشامل للشركات العربية لاختراق أكبر منتدى عالمي',
        excerpt: 'Karma, Subreddits, Reddit Ads: كيف تبني حضوراً حقيقياً ولا تُحظر.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التسويق الرقمي',
        image: 'https://images.unsplash.com/photo-1616509091215-57bbece93654?auto=format&fit=crop&q=80&w=800',
        slug: 'reddit-marketing'
    },
    {
        id: 64,
        title: 'السيو الدولي (International SEO) 2026: كيف تصل لعملاء في أسواق جديدة؟',
        excerpt: 'Hreflang, ccTLDs, Content Localization: خارطة طريق التوسع العالمي.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التقنية والسيو',
        image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800',
        slug: 'international-seo'
    },
    {
        id: 63,
        title: 'التسويق عبر لينكدإن (LinkedIn Marketing) 2026: كيف تحوّل منشوراتك لصفقات مبيعات؟',
        excerpt: 'Founder-Led Growth, LinkedIn Ads, B2B Content Strategy: الدليل العملي.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التسويق الرقمي',
        image: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?auto=format&fit=crop&q=80&w=800',
        slug: 'linkedin-marketing'
    },
    {
        id: 62,
        title: 'التسويق عبر يوتيوب (YouTube Marketing) 2026: الدليل الشامل للسيطرة على ثاني أكبر محرك بحث',
        excerpt: 'Shorts, AI Tools, Shopping, SEO الفيديو: كل ما تحتاج لتحويل قناتك لآلة مبيعات.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التسويق الرقمي',
        image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=800',
        slug: 'youtube-marketing'
    },
    {
        id: 61,
        title: 'الربط الداخلي (Internal Linking) 2026: كيف تضاعف قوة صفحاتك بدون رابط خارجي واحد؟',
        excerpt: 'Topical Authority, Link Equity Flow, Anchor Text Strategy: العلم وراء الروابط الداخلية.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التقنية والسيو',
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800',
        slug: 'internal-linking'
    },
    {
        id: 60,
        title: 'بناء العلامة التجارية الرقمية (Digital Brand Building) 2026: من الوجود إلى السلطة',
        excerpt: 'Brand Search, Entity Recognition, Knowledge Panel: كيف تجعل جوجل والـ AI يعرفان من أنت.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التسويق الرقمي',
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800',
        slug: 'brand-building'
    },
    {
        id: 59,
        title: 'أمن WordPress 2026: دليل حماية موقعك من الاختراق والثغرات الأمنية',
        excerpt: 'ثغرات الإضافات الشهيرة، هجمات Brute Force، خطة الحماية الشاملة.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التقنية والسيو',
        image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800',
        slug: 'wordpress-security'
    },
    {
        id: 58,
        title: 'تحسين معدل التحويل (CRO) 2026: كيف تحوّل المزيد من الزوار لعملاء بنفس الميزانية؟',
        excerpt: 'Landing Pages, A/B Testing, UX Psychology: ضاعف إيراداتك بدون إنفاق إضافي.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التسويق الرقمي',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        slug: 'conversion-rate-optimization'
    },
    {
        id: 57,
        title: 'التسوق الوكيل بالذكاء الاصطناعي (Agentic AI Shopping) 2026: هل ينهي البحث التقليدي؟',
        excerpt: 'وكلاء الذكاء الاصطناعي يتسوقون بالنيابة عنك: كيف تجعل منتجك الخيار الأول للآلة؟',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'الذكاء الاصطناعي',
        image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80&w=800',
        slug: 'agentic-ai-shopping'
    },
    {
        id: 56,
        title: 'البيانات المنظمة وSchema Markup 2026: تحدث لغة محركات البحث والـ AI',
        excerpt: 'FAQ, HowTo, Product, Organization Schema: كيف تجعل جوجل يفهم موقعك مثل البشر.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التقنية والسيو',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
        slug: 'schema-markup'
    },
    {
        id: 55,
        title: 'الدليل الشامل لـ Google Analytics 4 (GA4) 2026: من الإعداد إلى التقارير المتقدمة',
        excerpt: 'الأحداث، التحويلات، Explorations، والمخطط السيناريو الجديد: كل ما تحتاج معرفته.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'تحليل البيانات',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        slug: 'google-analytics'
    },
    {
        id: 54,
        title: 'الاحتيال في النقرات (Click Fraud) 2026: كيف تحمي ميزانيتك الإعلانية من السرقة؟',
        excerpt: '15-20% من نقرات الإعلانات مزيفة. كيف تكتشفها وتمنعها وتسترد أموالك.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'الإعلانات المدفوعة',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800',
        slug: 'click-fraud'
    },
    {
        id: 53,
        title: 'السيو للشركات الناشئة (SEO for Startups) 2026: كيف تنافس الكبار بميزانية محدودة؟',
        excerpt: 'خارطة طريق 6 أشهر للتصدر في السعودية بدون ملايين.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التقنية والسيو',
        image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800',
        slug: 'seo-for-startups'
    },
    {
        id: 52,
        title: 'ظهورك في البحث بالذكاء الاصطناعي (AI Search Visibility) 2026: كيف تجعل الـ AI يقتبس منك؟',
        excerpt: 'من AI Overviews إلى ChatGPT Search: استراتيجية GEO لجعل علامتك المصدر المفضل للآلات.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'الذكاء الاصطناعي',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
        slug: 'ai-search-visibility'
    },
    {
        id: 51,
        title: 'تحديثات جوجل الأساسية (Google Core Updates) 2026: كيف تنجو وتربح بعد كل تحديث؟',
        excerpt: 'تحليل تحديث مارس 2026: 4 خاسرين لكل فائز واحد. خطة التعافي والتحصين الكاملة.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التقنية والسيو',
        image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800',
        slug: 'google-core-updates'
    },
    {
        id: 50,
        title: 'المحتوى المُولّد بالذكاء الاصطناعي (AI Content) 2026: 5 ركائز لبناء ثقة حقيقية',
        excerpt: 'ويكيبيديا حظرته. جوجل يراقبه. كيف تستخدم الـ AI في المحتوى دون أن تفقد مصداقيتك؟',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'الذكاء الاصطناعي',
        image: 'https://images.unsplash.com/photo-1655720828018-abb4c4a2d4e3?auto=format&fit=crop&q=80&w=800',
        slug: 'ai-content-trust'
    },
    {
        id: 49,
        title: 'السيو مقابل الإعلانات المدفوعة (SEO vs PPC) 2026: أيهما أفضل لعملك في السعودية؟',
        excerpt: 'مقارنة شاملة: التكلفة، العائد، السرعة. ولماذا الجمع بينهما هو الصيغة الفائزة.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'الإعلانات المدفوعة',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        slug: 'seo-vs-ppc'
    },
    {
        id: 48,
        title: 'الدليل الشامل لإعلانات جوجل (Google Ads) 2026: من حملات البحث إلى Performance Max',
        excerpt: 'إعداد الحساب، هيكلة الحملات، المزايدة الذكية، وأسرار خفض تكلفة النقرة في السعودية.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'الإعلانات المدفوعة',
        image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=800',
        slug: 'google-ads'
    },
    {
        id: 47,
        title: 'اتجاهات الإعلانات المدفوعة (PPC Trends) 2026: عصر الأتمتة الذكية',
        excerpt: 'من Performance Max إلى Demand Gen: كيف تستغل الذكاء الاصطناعي لمضاعفة عائد إنفاقك الإعلاني.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'الإعلانات المدفوعة',
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800',
        slug: 'ppc-trends'
    },
    {
        id: 46,
        title: 'محركات البحث: كيف تعمل (Search Engines) 2026؟ الدليل التقني الشامل',
        excerpt: 'الزحف، الفهرسة، الترتيب: كيف يقرر جوجل أي صفحة تستحق الظهور أولاً؟',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التقنية والسيو',
        image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800',
        slug: 'search-engines'
    },
    {
        id: 45,
        title: 'التسويق الموسمي والمناسبات (Holiday Marketing) 2026: خريطة حملات السعودية',
        excerpt: 'من رمضان إلى اليوم الوطني إلى الجمعة البيضاء: كيف تخطط لحملاتك قبل المنافسين بأشهر.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التسويق',
        image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=800',
        slug: 'holiday-marketing'
    },
    {
        id: 44,
        title: 'مؤشرات أداء المحتوى (Content KPIs) 2026: قِس النجاح بالأرقام لا بالأحاسيس',
        excerpt: 'من معدل الارتداد إلى تكلفة اكتساب العميل: المقاييس التي تهم فعلاً.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'تحليل البيانات',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        slug: 'content-kpis'
    },
    {
        id: 43,
        title: 'تاريخ خوارزميات جوجل (Google Algorithm History) 2026: من PageRank إلى SGE',
        excerpt: 'رحلة 25 عاماً من التحديثات: Panda, Penguin, BERT, MUM, وأخيراً البحث التوليدي.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'الذكاء الاصطناعي',
        image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&q=80&w=800',
        slug: 'google-algo-history'
    },
    {
        id: 42,
        title: 'الدليل الشامل لإعلانات فيسبوك وإنستغرام (Meta Ads) 2026: من الصفر إلى الحملات المُربحة',
        excerpt: 'استهداف الجمهور السعودي بدقة جراحية وأسرار تحقيق عائد إنفاق إعلاني (ROAS) يفوق الـ 5x.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'الإعلانات المدفوعة',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
        slug: 'facebook-ads'
    },
    {
        id: 41,
        title: 'الدليل الشامل لسيو ووردبريس (WordPress SEO) 2026: من التثبيت إلى التصدر',
        excerpt: 'كيف تحول موقع ووردبريس العادي إلى آلة سيو متكاملة تنافس أكبر المواقع في السعودية.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'ووردبريس',
        image: 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?auto=format&fit=crop&q=80&w=800',
        slug: 'wordpress-seo'
    },
    {
        id: 40,
        title: 'الدليل الشامل لتحسين السيو الداخلي (On-Page SEO) 2026: هندسة الصفحة المثالية',
        excerpt: 'من العنوان إلى آخر سطر: كيف تبني صفحة تطلب من جوجل أن يتصدرها بلا منافس.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التقنية والسيو',
        image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800',
        slug: 'on-page-seo'
    },
    {
        id: 39,
        title: 'عوامل ترتيب جوجل (Google Ranking Factors) 2026: ما هو مؤكد وما هو خرافة؟',
        excerpt: 'تحليل لأكثر من 80 عامل ترتيب: أيها مؤكد رسمياً من جوجل وأيها كذبة يجب أن تتوقف عن تصديقها.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التقنية والسيو',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        slug: 'ranking-factors'
    },
    {
        id: 38,
        title: 'الدليل الشامل لبحث الكلمات المفتاحية (Keyword Research) 2026: من البذرة إلى الإمبراطورية',
        excerpt: 'كيف تكتشف ما يبحث عنه السوق السعودي فعلاً، وتبني إستراتيجية محتوى لا تعتمد على التخمين.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'الكلمات المفتاحية',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        slug: 'keyword-research'
    },
    {
        id: 37,
        title: 'الدليل الشامل لمؤشرات أداء الويب الأساسية (Core Web Vitals) 2026: كيف تسرّع موقعك؟',
        excerpt: '(LCP) و(INP) و(CLS): فك تشفير المقاييس الثلاثة التي تحكم مصير ترتيبك في جوجل.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'الأداء التقني',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
        slug: 'core-web-vitals'
    },
    {
        id: 36,
        title: 'اتجاهات السيو (SEO Trends) لعام 2026: عصر الوكلاء الأذكياء (Agentic Search) واستراتيجيات النجاة',
        excerpt: 'من تحسين محركات البحث إلى تحسين محركات الإجابة (AEO). كيف تستعد لتجربة البحث التوليدي (SGE)؟',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'الذكاء الاصطناعي',
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800',
        slug: 'seo-trends'
    },
    {
        id: 35,
        title: 'السيو للمؤسسات الضخمة (Enterprise SEO) 2026: كيف تدير نمو أكثر من 100,000 صفحة؟',
        excerpt: 'استراتيجيات متقدمة لتجاوز البيروقراطية التقنية، بناء سلطة العلامة التجارية (Brand Equity)، والاستعداد لعصر البحث الصوتي والمرئي.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'الاستراتيجية',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
        slug: 'enterprise-seo'
    },
    {
        id: 34,
        title: 'الدليل الشامل لشرط (Google E-E-A-T) 2026: كيف تبني الثقة في عصر الذكاء الاصطناعي؟',
        excerpt: 'دليلك لاختراق نتائج الذكاء الاصطناعي (AEO)، وفك شفرة مقيمي الجودة، وبناء سلطة لعلامتك التجارية.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التقنية والسيو',
        image: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?auto=format&fit=crop&q=80&w=800',
        slug: 'google-eat-guide'
    },
    {
        id: 33,
        title: 'الدليل الشامل للتسويق بالمحتوى (Content Marketing) 2026: كيف تبني جيشاً من العملاء المخلصين؟',
        excerpt: 'أسرار دمج السيو مع المحتوى، هندسة الأجندة التحريرية، والاستراتيجية التي تحول القراء العابرين إلى زبائن دائمين.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'صناعة المحتوى',
        image: 'https://images.unsplash.com/photo-1542744094-24638ea0b56c?auto=format&fit=crop&q=80&w=800',
        slug: 'content-marketing'
    },
    {
        id: 32,
        title: 'الدليل الشامل لتدقيق السيو (SEO Audit) 2026: كيف نحلل أضخم المواقع السعودية؟',
        excerpt: 'اكتشف الأخطاء التقنية القاتلة باستخدام (Chrome DevTools)، وكيفية تحليل آلاف البيانات ببرامج (Excel) و (Screaming Frog).',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التقنية والسيو',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        slug: 'enterprise-seo-audit'
    },
    {
        id: 31,
        title: 'الدليل الشامل لحملات (PPC) 2026: تضاعف مبيعاتك عبر إعلانات جوجل',
        excerpt: 'أسرار بناء حملات إعلانية مدفوعة مربحة في السوق السعودي، من هندسة الكلمات المفتاحية إلى اختراق الـ (Quality Score).',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التسويق الرقمي',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        slug: 'ppc-guide'
    },
    {
        id: 30,
        title: 'سيو المتاجر الإلكترونية 2026: دليلك لتصدر مبيعات (Shopify) و (Salla)',
        excerpt: 'كيف تُهندس متجرك الإلكتروني لاختطاف الزبائن في السعودية بدون استنزاف ميزانيتك على الإعلانات الممولة؟',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التجارة الإلكترونية (E-commerce)',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
        slug: 'ecommerce-seo-guide'
    },
    {
        id: 29,
        title: 'السيو التقني (Technical SEO) 2026: الهيكل الخفي لتصدر نتائج جوجل',
        excerpt: 'كيف تصلح مشاكل الأرشفة المعقدة، وأخطاء الجافا سكريبت، وميزانية الزحف (Crawl Budget) لموقعك الإلكتروني.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التقنية والسيو',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
        slug: 'technical-seo-guide'
    },
    {
        id: 28,
        title: 'دليلك لاكتساح السوشيال ميديا 2026: كيف تبني إمبراطورية لعلامتك في السوق السعودي؟',
        excerpt: 'من جنون التيك توك (TikTok) إلى احترافية لينكد إن (LinkedIn) — أسرار تحويل المتابعين إلى عملاء ومبيعات فعلية.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'سوشيال ميديا',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
        slug: 'social-media-marketing-guide'
    },
    {
        id: 27,
        title: 'الدليل الشامل لأدوات السيو (SEO Tools) 2026: ترسانتك لاكتساح محركات البحث',
        excerpt: 'من Screaming Frog للتدقيق التقني إلى Ahrefs لتحليل المنافسين—اكتشف الترسانة البرمجية التي تستخدمها الوكالات لتصدر نتائج جوجل.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التقنية والسيو',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        slug: 'seo-tools-guide'
    },
    {
        id: 26,
        title: 'سيو مكاتب المحاماة 2026: كيف تحتكر القضايا الكبرى في مدينتك؟',
        excerpt: 'عبر Local SEO، وإدارة التقييمات، وهندسة صفحات تخصصية للمحاماة، اجعل مكتبك الخيار الأول للشركات وكبار الموكلين في السعودية.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'سيو الشركات (B2B)',
        image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800',
        slug: 'law-firm-seo-guide'
    },
    {
        id: 25,
        title: 'توليد العملاء للشركات (B2B Lead Generation) 2026: كيف تبني قمع مبيعات لا يقهر؟',
        excerpt: 'من كسر عوائق المشترين إلى هندسة خطة استحواذ (Lead Gen) تقنع صناع القرار والمدراء التنفيذيين في السوق السعودي.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التسويق الرقمي',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800',
        slug: 'b2b-lead-generation-guide'
    },
    {
        id: 24,
        title: 'استراتيجية بناء الروابط (Link Building) 2026: الجودة التي تحترمها خوارزميات الذكاء الاصطناعي',
        excerpt: 'من العلاقات العامة الرقمية (Digital PR) إلى هندسة المحتوى القابل للربط — دليلك الآمن لرفع موثوقية نطاقك (Domain Authority) للكيانات الكبرى.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'استراتيجية السيو',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
        slug: 'link-building-strategy-guide'
    },
    {
        id: 23,
        title: 'الدليل الشامل للسيو المحلي (Local SEO) 2026: كيف تسيطر على عملائك في مدينتك؟',
        excerpt: 'تصدر خرائط جوجل، إدارة المراجعات، وتوحيد بيانات ה-NAP (الاسم، العنوان، الهاتف) لاكتساح السوق الجغرافي للعيادات والمكاتب في السعودية.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'استراتيجية السيو',
        image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800',
        slug: 'local-seo-guide'
    },
    {
        id: 22,
        title: 'الدليل الشامل لحملات الدفع بالنقرة (PPC) 2026: ضاعف المبيعات دون حرق الميزانية',
        excerpt: 'سر المزايدة الذكية، رفع نقاط الجودة (Quality Score)، وكتابة نصوص إعلانية تسرق النقرات من منافسيك في السوق الخليجي.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'التسويق الرقمي',
        image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80&w=800',
        slug: 'ppc-advertising-strategy-guide'
    },
    {
        id: 21,
        title: 'الدليل الشامل لتسويق وسيو المتاجر الإلكترونية في 2026: كيف تضاعف مبيعاتك؟',
        excerpt: 'من هيكلة التصفح المبسطة وكتابة أوصاف المنتجات المحفزة إلى استراتيجيات الدفع بالنقرة وإعادة الاستهداف — خارطة مضاعفة العائد لمتجرك.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'عائد استثمار المحتوى',
        image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=800',
        slug: 'ecommerce-marketing-guide'
    },
    {
        id: 20,
        title: 'قياس الأداء في التسويق بالمحتوى (Content KPIs) 2026: كيف تعرف أن محتواك يدر أرباحاً؟',
        excerpt: 'من التخلص من مقاييس الإعجابات الوهمية إلى تتبع معدلات التحويل المالي (Business Conversion) — دليلك لقراءة بيانات حملاتك بدقة.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'عائد استثمار المحتوى',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        slug: 'content-marketing-kpis-guide'
    },
    {
        id: 19,
        title: 'السيو للشركات الكبرى (Enterprise SEO) 2026: استراتيجية السيطرة على آلاف الصفحات',
        excerpt: 'التحديات التقنية الكبرى، بناء الروابط بهوية العلامة التجارية، وكيف تختار الوكالة المناسبة لإدارة كتالوجات موقعك العملاق بشكل آلي.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'استراتيجية السيو',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
        slug: 'enterprise-seo-guide'
    },
    {
        id: 18,
        title: 'الدليل الشامل للتسويق بالمحتوى في 2026: كيف تبني علامة تجارية تبيع نيابة عنك؟',
        excerpt: 'عبر التقويم التحريري، دمج السيو، وكتابة دراسات الحالة — الدليل العملي لتحويل صفحات موقعك إلى أصول رقمية تجذب العملاء باستمرار.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'عائد استثمار المحتوى',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        slug: 'content-marketing-guide'
    },
    {
        id: 17,
        title: 'كيف تعمل محركات البحث في 2026؟ (Algorithms & AI): دليلك لفهم عقل جوجل',
        excerpt: 'الزحف، الفهرسة، والتعلم الآلي — اكتشف كيف تُقيم خوارزميات الذكاء الاصطناعي موقعك للوصول للنتيجة الأولى وما هي أسرار سلوك المستخدم.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'سيو الذكاء الاصطناعي',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
        slug: 'how-search-engines-work-guide'
    },
    {
        id: 16,
        title: 'الدليل الشامل للتسويق في المواسم للأعياد والمتاجر السعودية',
        excerpt: 'عبر السيو المحلي، تخطيط المحتوى المبكر، ودمج السوشيال ميديا — كيف تقتنص الحصة الأكبر من المبيعات في مواسم رمضان واليوم الوطني.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'استراتيجية السيو',
        image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=800',
        slug: 'holiday-marketing-guide-saudi'
    },
    {
        id: 15,
        title: 'تحسين السيو الداخلي (On-Page SEO) في 2026: كيف تكتب للذكاء الاصطناعي والإنسان معاً؟',
        excerpt: 'من مقاييس الثقة (E-E-A-T) إلى منع تآكل الكلمات المفتاحية وهيكلة الترويسات الصحيحة — استراتيجيتك الكاملة لجعل كل صفحة في موقعك آلة لجذب العملاء.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'استراتيجية السيو',
        image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800',
        slug: 'on-page-seo-guide'
    },
    {
        id: 14,
        title: 'الدليل الشامل لسيو الووردبريس (WordPress SEO) في 2026: من الإطلاق إلى القمة',
        excerpt: 'أسرار اختيار أفضل الإضافات، تحصين الأمان، وتجنب فخ المحتوى المكرر — دليلك لإطلاق موقع ووردبريس يتصدر نتائج جوجل منذ اليوم الأول.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'استراتيجية السيو',
        image: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=800',
        slug: 'wordpress-seo-guide'
    },
    {
        id: 13,
        title: 'مؤشرات أداء الويب الأساسية (Core Web Vitals) في 2026: الدليل الشامل لتسريع موقعك',
        excerpt: 'من تجربة المستخدم (INP) والمحتوى المرئي (LCP) واختبارات Lighthouse — تعرّف على أسباب معاقبة جوجل للمواقع البطيئة وكيف تتجنبها لرفع مبيعاتك.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'السيو التقني',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        slug: 'core-web-vitals-guide'
    },
    {
        id: 12,
        title: 'الدليل الشامل للبحث عن الكلمات المفتاحية في 2026: كيف تستقطب المشترين',
        excerpt: 'عصر البحث بالذكاء الاصطناعي (AEO) غيّر قواعد البحث. تعلم كيفية استخدام الكلمات طويلة الذنب وفهم نية البحث لاصطياد العملاء بدلاً من مجرد ملاحقة الزوار المجهولين.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'استراتيجية السيو',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        slug: 'keyword-research-guide'
    },
    {
        id: 11,
        title: 'الدليل الشامل لتدقيق السيو (SEO Audit) لموقعك في 2026',
        excerpt: 'من الفحص التقني المتقدم إلى تحليل المحتوى والروابط الخلفية — خطوتك الأولى لمضاعفة الترافيك والعملاء المحتملين باستراتيجيات موثوقة.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'استراتيجية السيو',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        slug: 'ultimate-seo-audit-checklist-ar'
    },
    {
        id: 1,
        title: 'مستقبل السيو يقوم على الكيانات: ما يجب أن تعرفه كل شركة سعودية الآن',
        excerpt: 'خبراء السيو العالميون يتفقون: حقبة الكلمات المفتاحية انتهت — حقبة الكيانات والأنطولوجيا والمحتوى المفيد بدأت. دليل عملي للشركات السعودية.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'استراتيجية السيو',
        image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800',
        slug: 'entity-seo-helpful-content-ai-ksa'
    },
    {
        id: 2,
        title: 'الدليل الشامل للسيو التقني 2026: ستة محاور تحكم ترتيب موقعك في السعودية',
        excerpt: 'ميزانية الزحف، Schema، robots.txt، سرعة الصفحة — ستة محاور تقنية يغفل عنها 80% من المواقع السعودية. دليل عملي بخطوات قابلة للتنفيذ.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'السيو التقني',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        slug: 'technical-seo-saudi-guide'
    },
    {
        id: 2,
        title: '5 أشياء تعلمتها عن مستقبل البحث من مقابلة سوندار بيتشاي',
        excerpt: 'الرئيس التنفيذي لجوجل يكشف: البحث سيصبح مدير وكلاء AI، و2027 هو عام التحول الكبير. الانعكاسات على الشركات السعودية.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'مستقبل البحث',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
        slug: 'sundar-pichai-search-future'
    },
    {
        id: 2,
        title: 'وضع الذكاء الاصطناعي من جوجل غيّر السيو إلى الأبد — القواعد الخمس الجديدة',
        excerpt: '72% من الباحثين يريدون إجابات فورية. الترتيب لم يعد الهدف — الاستشهاد هو الهدف. كيف تفوز في عصر AI Mode.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'استراتيجية AI Mode',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
        slug: 'google-ai-mode-seo-5-rules'
    },
    {
        id: 2,
        title: 'GEO في السعودية: كيف تجعل شركتك الإجابة الأولى لـ ChatGPT',
        excerpt: 'أكثر من 40% من قرارات الشراء B2B في 2026 تبدأ بسؤال في ChatGPT — إذا لم تكن جزء الإجابة فأنت غير موجود.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'استراتيجية GEO',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
        slug: 'geo-agency-ksa'
    },
    {
        id: 2,
        title: 'أتمتة التسويق B2B في الرياض: الدليل العملي 2026',
        excerpt: 'كيف تبني منظومة مبيعات تعمل 24/7 وتحوّل الزيارة المجهولة إلى عميل مؤهل — بدون فريق تسويق ضخم.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'أتمتة الأعمال',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        slug: 'marketing-automation-riyadh-b2b'
    },
    {
        id: 3,
        title: 'السيو التقني في السعودية 2026: ما تجاهله منافسوك يكسبه موقعك',
        excerpt: 'ستة عوامل تقنية يتجاهلها 70% من المواقع السعودية — وكيف تُحوّلها لميزة تنافسية فورية.',
        author: 'فريق ون تو فايف كليك',
        date: '11 أبريل 2026',
        category: 'السيو التقني',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        slug: 'umrah-taxi-service'
    },
    {
        id: 4,
        title: 'التشغيل الخفي: حصد الجمهور الجائع',
        excerpt: 'بروتوكول شراكة صغار المبدعين بقيمة 13,500 دولار شهرياً — نموذج عمل المستقبل بدون كشوف مرتبات.',
        author: 'فريق ون تو فايف كليك',
        date: '2 مارس 2026',
        category: 'استراتيجية المبدعين',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
        slug: 'ai-shadow-operating'
    },
    {
        id: 5,
        title: 'YouTube-RAG Stacking: محرك الاقتباسات المخفي',
        excerpt: 'لماذا تعد نصوص الفيديو العامل الأكثر ارتباطاً بظهور الذكاء الاصطناعي وكيفية تحسينها.',
        author: 'فريق ون تو فايف كليك',
        date: '28 فبراير 2026',
        category: 'سيو الذكاء الاصطناعي',
        image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800',
        slug: 'youtube-rag-stacking-visibility'
    },
    {
        id: 6,
        title: 'استراتيجية جالوت: التوسع ضد عمالقة الصناعة',
        excerpt: 'استخدام الترويج المقارن لإجبار نماذج اللغة على الاعتراف بعلامتك كقرين حقيقي للعمالقة.',
        author: 'فريق ون تو فايف كليك',
        date: '25 فبراير 2026',
        category: 'الهيمنة على السوق',
        image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=800',
        slug: 'goliath-strategy-scaling'
    }
];

const categories = ['الكل', 'استراتيجية السيو', 'التقنية والسيو', 'سيو الذكاء الاصطناعي', 'التسويق الرقمي', 'أبحاث وتقارير', 'عائد استثمار المحتوى', 'الهيمنة على السوق', 'التجارة الإلكترونية (E-commerce)'];

const authorityHubs = [
  {
    title: 'جامعة السيو (SEO)',
    description: 'من الأساسيات إلى التقنيات المتقدمة، كل ما تحتاجه لتصدر نتائج البحث في المملكة.',
    icon: '🎓',
    color: 'bg-blue-500/10 text-blue-600',
    category: 'التقنية والسيو',
    count: 145
  },
  {
    title: 'سيو الذكاء الاصطناعي',
    description: 'هندسة النتائج لمحركات الإجابة (AEO) وظهور الـ LLMs في 2026.',
    icon: '🤖',
    color: 'bg-brand-green/10 text-brand-green', 
    category: 'سيو الذكاء الاصطناعي',
    count: 32,
    toolUrl: '/tools/aeo-generator'
  },
  {
    title: 'تجارة إلكترونية محترفة',
    description: 'تحسين منصات سلة وزد وتوسيع نطاق المبيعات الرقمية في السعودية.',
    icon: '🛒',
    color: 'bg-purple-500/10 text-purple-600',
    category: 'التجارة الإلكترونية (E-commerce)',
    count: 28
  },
  {
    title: 'أبحاث السوق السعودي',
    description: 'تقارير حصرية ودراسات حالة لواقع البحث والتحويل الرقمي في المملكة.',
    icon: '📊',
    color: 'bg-orange-500/10 text-orange-600',
    category: 'أبحاث وتقارير',
    count: 15
  }
];

export default function BlogPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('الكل');
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 12;

    const filteredPosts = useMemo(() => {
        return blogPosts.filter(post => {
            const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                 post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === 'الكل' || post.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCategory]);

    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const paginatedPosts = filteredPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

    // Reset to page 1 when filter changes
    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery, selectedCategory]);

    return (
        <div className="pt-16 bg-white overflow-hidden min-h-screen text-right">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-40 overflow-hidden text-center bg-brand-navy">
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(white_1px,transparent_1px)] [background-size:32px_32px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 text-brand-green px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-10 border border-white/10 backdrop-blur-md">
              <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
              <span>مركز معرفة السيو المحلي</span>
            </div>
            <h1 className="text-5xl md:text-9xl font-black text-white mb-8 leading-[0.85] tracking-tighter">
              المنصة و <br />
              <span className="text-brand-green">رؤى محلية.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-bold">
              نصائح خبراء واستراتيجيات ودراسات لمساعدتك في السيطرة على سوق البحث المحلي في المملكة.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-green to-brand-navy rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                <div className="relative">
                    <Search className="absolute right-6 top-1/2 transform -translate-y-1/2 h-5 w-5 text-brand-navy/40" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="ابحث في استراتيجياتنا..."
                        className="w-full pr-16 pl-8 py-6 bg-white border-0 rounded-full focus:ring-4 focus:ring-brand-green/20 outline-none text-brand-navy font-bold placeholder:text-slate-300 shadow-2xl text-right"
                    />
                </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white border-b border-slate-100 sticky top-20 z-40 backdrop-blur-md bg-white/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap flex-row-reverse gap-3 justify-center">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${selectedCategory === category
                            ? 'bg-brand-navy text-white shadow-xl shadow-brand-navy/20'
                            : 'bg-slate-50 text-slate-400 border border-slate-100 hover:border-brand-green hover:text-brand-green'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
      </section>

      {/* Authority Hubs Grid */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
            <div className="mb-16">
                <h2 className="text-3xl md:text-5xl font-black text-brand-navy mb-4 tracking-tighter">تصفح حسب مراكز السلطة</h2>
                <p className="text-slate-500 font-bold">انتقل مباشرة إلى التخصص الذي تحتاجه لتطوير عملك.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 flex-row-reverse">
                {authorityHubs.map((hub, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -10 }}
                        className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-brand-navy/5 border border-slate-100 group cursor-pointer text-right relative overflow-hidden"
                        onClick={() => {
                            if (hub.toolUrl) {
                                window.location.href = hub.toolUrl;
                            } else {
                                setSelectedCategory(hub.category);
                            }
                        }}
                    >
                        <div className={`w-16 h-16 ${hub.color} rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform`}>
                            {hub.icon}
                        </div>
                        <h3 className="text-2xl font-black text-brand-navy mb-4 tracking-tighter">{hub.title}</h3>
                        <p className="text-slate-500 text-sm font-bold leading-relaxed mb-8">{hub.description}</p>
                        
                        <div className="flex items-center justify-between flex-row-reverse">
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{hub.count} دليل خبير</span>
                            <div className="w-10 h-10 bg-brand-navy rounded-full flex items-center justify-center text-white group-hover:bg-brand-green transition-colors">
                                <ArrowLeft className="h-4 w-4" />
                            </div>
                        </div>
                        
                        <span className="absolute -bottom-6 -left-6 text-9xl font-black text-slate-50 opacity-10 pointer-events-none">
                            {index + 1}
                        </span>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
            <div className="flex flex-col md:flex-row-reverse justify-between items-center mb-16 gap-8">
                <div>
                    <h2 className="text-3xl md:text-5xl font-black text-brand-navy mb-4 tracking-tighter">أحدث الاستراتيجيات</h2>
                    <p className="text-slate-500 font-bold">جميع الأدلة والمقالات لعام 2026/2027.</p>
                </div>
                <div className="flex items-center gap-4 text-[10px] font-black text-slate-400 uppercase tracking-widest bg-white px-6 py-3 rounded-full border border-slate-100 shadow-sm">
                    <span>{filteredPosts.length} نتيجة</span>
                    <div className="w-1 h-1 bg-brand-green rounded-full" />
                    <span>الفلتر: {selectedCategory}</span>
                </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                {paginatedPosts.length > 0 ? (
                    paginatedPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (index % 12) * 0.1 }}
                            className="bg-white rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 group flex flex-col h-full"
                        >
                            <div className="relative h-64 overflow-hidden m-4 rounded-[2rem]">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent" />
                                <div className="absolute bottom-6 right-6">
                                    <span className="bg-brand-green text-brand-navy px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/20 backdrop-blur-sm">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-10 pt-4 flex flex-col flex-grow text-right">
                                <div className="flex items-center gap-6 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-3.5 w-3.5 text-brand-green" />
                                        <span>{post.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <User className="h-3.5 w-3.5 text-brand-green" />
                                        <span>{post.author}</span>
                                    </div>
                                </div>

                                <h2 className="text-2xl font-black text-brand-navy mb-4 group-hover:text-brand-green transition-colors leading-[1.1] tracking-tighter">
                                    {post.title}
                                </h2>

                                <p className="text-slate-500 mb-8 font-medium leading-relaxed line-clamp-2 text-sm">
                                    {post.excerpt}
                                </p>

                                <div className="mt-auto pt-8 border-t border-slate-50 flex items-center justify-between flex-row-reverse">
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="inline-flex items-center text-brand-navy font-black text-xs uppercase tracking-widest hover:text-brand-green transition-colors group/link"
                                    >
                                        اقرأ الاستراتيجية
                                        <ArrowLeft className="mr-2 h-4 w-4 group-hover/link:-translate-x-1 transition-transform text-brand-green" />
                                    </Link>
                                    <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ArrowLeft className="h-4 w-4 text-brand-green" />
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))
                ) : (
                    <div className="col-span-full py-24 text-center">
                        <p className="text-2xl font-bold text-slate-400">لا توجد نتائج تطابق بحثك...</p>
                    </div>
                )}
            </div>

            {/* Pagination */}
            <div className="mt-24 flex justify-center">
                <div className="flex items-center gap-3 flex-row-reverse">
                    <button 
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                        className="w-12 h-12 border border-slate-100 rounded-full flex items-center justify-center hover:bg-brand-green hover:border-brand-green transition-all text-slate-400 hover:text-brand-navy disabled:opacity-30"
                    >
                        <ArrowLeft className="h-4 w-4 rotate-180" />
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                        <button 
                            key={num} 
                            onClick={() => setCurrentPage(num)}
                            className={`w-12 h-12 rounded-full font-black text-xs flex items-center justify-center transition-all ${currentPage === num ? 'bg-brand-navy text-white shadow-xl shadow-brand-navy/20' : 'bg-white border border-slate-100 text-slate-400 hover:border-brand-green'}`}
                        >
                            {num}
                        </button>
                    ))}
                    <button 
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                        className="w-12 h-12 border border-slate-100 rounded-full flex items-center justify-center hover:bg-brand-green hover:border-brand-green transition-all text-slate-400 hover:text-brand-navy disabled:opacity-30"
                    >
                        <ArrowLeft className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 pb-40 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-green rounded-[5rem] p-16 md:p-32 text-center relative overflow-hidden shadow-2xl shadow-brand-green/20">
                <div className="absolute inset-0 bg-white/10 opacity-30 blur-3xl rounded-full translate-y-1/2" />
                <h2 className="text-4xl md:text-8xl font-black text-brand-navy mb-8 tracking-tighter leading-[0.85]">
                    طور ذكاؤك <br /> المحلي الآن.
                </h2>
                <p className="text-lg md:text-xl text-brand-navy/60 mb-16 max-w-2xl mx-auto font-bold leading-relaxed">
                    انضم إلى أكثر من 10,000 من كبار المسوقين الذين يتلقون دراسات حالة السيو المحلي الأكثر تقدماً في العالم.
                </p>
                <div className="flex flex-col sm:flex-row-reverse gap-4 max-w-2xl mx-auto relative z-10">
                    <input
                        type="email"
                        placeholder="أدخل بريدك الإلكتروني للعمل"
                        className="flex-1 px-8 py-6 rounded-full focus:ring-4 focus:ring-brand-navy/10 focus:outline-none border-0 text-brand-navy font-bold placeholder:text-slate-400 shadow-xl text-right"
                    />
                    <button className="bg-brand-navy text-white px-12 py-6 rounded-full hover:scale-105 transition-all font-black uppercase tracking-widest text-xs shadow-2xl">
                        اشترك الآن
                    </button>
                </div>
            </div>
        </div>
      </section>
    </div>
    );
}
