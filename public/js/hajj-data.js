/* ------------------------------------------------------------------ *
 *  Hajj Journey — content
 *  Arabic/English/Urdu. Hadith references link to sunnah.com.
 *  Tamattu', Ifrad and Qiran share one guide; per-type differences
 *  live in each step's `variants` block.
 * ------------------------------------------------------------------ */

export const HAJJ_META = {
  name: { en: 'Hajj', ar: 'الحج', ur: 'حج' },
  brand: { en: 'Hajj Journey', ar: 'رحلة الحج', ur: 'حج کا سفر' },
  tagline: {
    en: 'Five days that answer a lifetime of prayer',
    ar: 'خمسة أيام تُجيب نداء العمر',
    ur: 'پانچ دن جو عمر بھر کی دعا کا جواب ہیں'
  },
  heroTitle: {
    en: 'Answer the call of Ibrahim.',
    ar: 'أجب نداء إبراهيم.',
    ur: 'ابراہیم کی پکار کا جواب دیں۔'
  },
  heroLead: {
    en: 'From the miqat to the farewell tawaf — the five days of Hajj, day by day, with the differences between Tamattu‘, Ifrad and Qiran made clear.',
    ar: 'من الميقات إلى طواف الوداع — أيام الحج الخمسة يوماً بيوم، مع بيان الفروق بين التمتع والإفراد والقران.',
    ur: 'میقات سے طواف وداع تک — حج کے پانچ دن روز بہ روز، تمتع، افراد اور قران کے فرق کے ساتھ۔'
  },
  heroArabic: 'الحج'
};

export const HAJJ_TYPES = [
  {
    id: 'tamattu',
    label: { en: 'Tamattu‘', ar: 'التمتع', ur: 'تمتع' },
    arabic: 'التمتع',
    badge: { en: 'Most common', ar: 'الأكثر شيوعاً', ur: 'سب سے عام' },
    tagline: {
      en: 'Umrah first, then Hajj',
      ar: 'عمرة أولاً ثم حج',
      ur: 'پہلے عمرہ، پھر حج'
    },
    who: {
      en: 'Pilgrims travelling to Makkah from outside the miqat',
      ar: 'القادمون إلى مكة من خارج الميقات',
      ur: 'وہ زائرین جو میقات سے باہر سے مکہ آتے ہیں'
    },
    summary: {
      en: 'You perform Umrah on arrival, release yourself from ihram, then enter ihram again for Hajj on the 8th of Dhul Hijjah.',
      ar: 'تعتمر عند وصولك، وتحلّ من إحرامك، ثم تحرم بالحج في الثامن من ذي الحجة.',
      ur: 'آپ پہنچ کر عمرہ کرتے ہیں، احرام سے باہر آتے ہیں، پھر ۸ ذوالحجہ کو حج کا احرام باندھتے ہیں۔'
    },
    points: [
      { en: 'Umrah is performed first, then you are released from ihram.', ar: 'تُؤدى العمرة أولاً ثم تحلّ من الإحرام.', ur: 'پہلے عمرہ ادا ہوتا ہے، پھر احرام کھل جاتا ہے۔' },
      { en: 'You re-enter ihram for Hajj on the 8th.', ar: 'تُحرم بالحج في الثامن.', ur: 'آٹھ تاریخ کو دوبارہ حج کا احرام باندھتے ہیں۔' },
      { en: 'A sacrifice (hady) is required.', ar: 'يجب الهدي.', ur: 'قربانی (ہدی) واجب ہے۔' }
    ],
    sacrifice: { en: 'Sacrifice required', ar: 'الهدي واجب', ur: 'قربانی واجب' }
  },
  {
    id: 'ifrad',
    label: { en: 'Ifrad', ar: 'الإفراد', ur: 'افراد' },
    arabic: 'الإفراد',
    badge: { en: 'Hajj alone', ar: 'حج فقط', ur: 'صرف حج' },
    tagline: {
      en: 'Hajj without Umrah',
      ar: 'حج بلا عمرة',
      ur: 'عمرہ کے بغیر حج'
    },
    who: {
      en: 'Those who live in Makkah, or who intend Hajj only',
      ar: 'المقيمون بمكة أو من يقصد الحج فقط',
      ur: 'مکہ کے رہائشی یا وہ جو صرف حج کا ارادہ رکھتے ہیں'
    },
    summary: {
      en: 'You enter ihram for Hajj alone and remain in it until the rites of the 10th. No Umrah is performed and no sacrifice is required.',
      ar: 'تحرم بالحج وحده وتبقى محرماً حتى أعمال العاشر. لا عمرة ولا هدي واجب.',
      ur: 'آپ صرف حج کا احرام باندھتے ہیں اور دس تاریخ کے اعمال تک احرام میں رہتے ہیں۔ نہ عمرہ، نہ قربانی واجب۔'
    },
    points: [
      { en: 'No Umrah before Hajj.', ar: 'لا عمرة قبل الحج.', ur: 'حج سے پہلے عمرہ نہیں۔' },
      { en: 'You stay in ihram from the miqat until the 10th.', ar: 'تبقى محرماً من الميقات إلى العاشر.', ur: 'میقات سے دس تاریخ تک احرام میں رہتے ہیں۔' },
      { en: 'Sacrifice is recommended, not required.', ar: 'الهدي مستحب لا واجب.', ur: 'قربانی مستحب ہے، واجب نہیں۔' }
    ],
    sacrifice: { en: 'Sacrifice optional', ar: 'الهدي مستحب', ur: 'قربانی مستحب' }
  },
  {
    id: 'qiran',
    label: { en: 'Qiran', ar: 'القران', ur: 'قران' },
    arabic: 'القران',
    badge: { en: 'Combined', ar: 'مقرون', ur: 'مقرون' },
    tagline: {
      en: 'Hajj and Umrah together',
      ar: 'الحج والعمرة معاً',
      ur: 'حج اور عمرہ ایک ساتھ'
    },
    who: {
      en: 'Those who bring a sacrifice and combine both rites in one ihram',
      ar: 'من يسوق الهدي ويجمع النسكين في إحرام واحد',
      ur: 'وہ جو قربانی ساتھ لاتے ہیں اور دونوں نسک ایک احرام میں کرتے ہیں'
    },
    summary: {
      en: 'You enter ihram for both Hajj and Umrah together, remain in ihram until the 10th, and offer a sacrifice.',
      ar: 'تحرم بالحج والعمرة معاً، وتبقى محرماً إلى العاشر، وعليك هدي.',
      ur: 'آپ حج اور عمرہ دونوں کا ایک ساتھ احرام باندھتے ہیں، دس تاریخ تک احرام میں رہتے ہیں، اور قربانی کرتے ہیں۔'
    },
    points: [
      { en: 'One ihram covers both Hajj and Umrah.', ar: 'إحرام واحد للحج والعمرة.', ur: 'ایک احرام حج اور عمرہ دونوں کے لیے۔' },
      { en: 'You do not release from ihram after the arrival tawaf.', ar: 'لا تحلّ بعد طواف القدوم.', ur: 'آمد کے طواف کے بعد احرام نہیں کھلتا۔' },
      { en: 'A sacrifice (hady) is required.', ar: 'يجب الهدي.', ur: 'قربانی (ہدی) واجب ہے۔' }
    ],
    sacrifice: { en: 'Sacrifice required', ar: 'الهدي واجب', ur: 'قربانی واجب' }
  }
];

/* ------------------------------------------------------------------ *
 *  Additional duas for Hajj
 * ------------------------------------------------------------------ */

export const HAJJ_DUAS = {
  arafah_best: {
    id: 'arafah_best',
    label: { en: 'The best dua of Arafah', ar: 'أفضل دعاء يوم عرفة', ur: 'عرفہ کی بہترین دعا' },
    ar: 'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
    tr: 'Lā ilāha illā Allāhu waḥdahu lā sharīka lah, lahu l-mulku wa lahu l-ḥamd, wa huwa ʿalā kulli shayʾin qadīr.',
    en: 'There is no god but Allah alone, with no partner. His is the dominion and His is the praise, and He is capable of all things.',
    ur: 'اللہ کے سوا کوئی معبود نہیں، وہ اکیلا ہے، اس کا کوئی شریک نہیں، اسی کی بادشاہت ہے اور اسی کی تعریف، اور وہ ہر چیز پر قادر ہے۔',
    ref: 'Jami‘ at-Tirmidhi 3585',
    url: 'https://sunnah.com/tirmidhi:3585',
    grade: { en: 'Hasan', ar: 'حسن', ur: 'حسن' },
    note: {
      en: 'The Prophet ﷺ said: “The best of supplication is the supplication of the Day of Arafah.” Repeat it often, with presence of heart.',
      ar: 'قال النبي ﷺ: «خير الدعاء دعاء يوم عرفة». أكثر منه بحضور قلب.',
      ur: 'نبی ﷺ نے فرمایا: ”سب سے بہتر دعا عرفہ کے دن کی دعا ہے۔“ اسے دل کی موجودگی کے ساتھ کثرت سے پڑھیں۔'
    }
  },

  muzdalifah_quran: {
    id: 'muzdalifah_quran',
    label: { en: 'Remembering Allah at Muzdalifah', ar: 'ذكر الله عند المشعر الحرام', ur: 'مشعر حرام پر اللہ کا ذکر' },
    ar: 'لَيْسَ عَلَيْكُمْ جُنَاحٌ أَن تَبْتَغُوا فَضْلًا مِّن رَّبِّكُمْ ۚ فَإِذَا أَفَضْتُم مِّنْ عَرَفَاتٍ فَاذْكُرُوا اللَّهَ عِندَ الْمَشْعَرِ الْحَرَامِ ۖ وَاذْكُرُوهُ كَمَا هَدَاكُمْ وَإِن كُنتُم مِّن قَبْلِهِ لَمِنَ الضَّالِّينَ',
    tr: 'Laysa ʿalaykum junāḥun an tabtaghū faḍlan min rabbikum. Fa-idhā afaḍtum min ʿArafātin fa-dhkurū Allāha ʿinda l-mashʿari l-ḥarām. Wa-dhkurūhu kamā hadākum wa in kuntum min qablihi la-mina ḍ-ḍāllīn.',
    en: 'There is no blame upon you for seeking bounty from your Lord. But when you depart from Arafat, remember Allah at al-Mash‘ar al-Haram. And remember Him as He has guided you, for indeed you were before that among those astray.',
    ur: 'تم پر کوئی گناہ نہیں کہ اپنے رب کا فضل تلاش کرو۔ پھر جب تم عرفات سے لوٹو تو مشعر حرام کے پاس اللہ کا ذکر کرو، اور اس کا ذکر کرو جیسے اس نے تمہیں ہدایت دی، اور بیشک تم اس سے پہلے گمراہوں میں سے تھے۔',
    ref: 'Qur’an 2:198',
    url: 'https://quran.com/2/198',
    grade: { en: 'Qur’an', ar: 'قرآن', ur: 'قرآن' },
    quran: {
      link: '2/198',
      reciter: 'Mishary Rashid Alafasy',
      ayahs: ['https://verses.quran.com/Alafasy/mp3/002198.mp3'],
      words: [
        { ar: 'لَيْسَ', src: 'https://verses.quran.com/wbw/002_198_001.mp3' },
        { ar: 'عَلَيْكُمْ', src: 'https://verses.quran.com/wbw/002_198_002.mp3' },
        { ar: 'جُنَاحٌ', src: 'https://verses.quran.com/wbw/002_198_003.mp3' },
        { ar: 'أَن', src: 'https://verses.quran.com/wbw/002_198_004.mp3' },
        { ar: 'تَبْتَغُوا', src: 'https://verses.quran.com/wbw/002_198_005.mp3' },
        { ar: 'فَضْلًا', src: 'https://verses.quran.com/wbw/002_198_006.mp3' },
        { ar: 'مِّن', src: 'https://verses.quran.com/wbw/002_198_007.mp3' },
        { ar: 'رَّبِّكُمْ', src: 'https://verses.quran.com/wbw/002_198_008.mp3' },
        { ar: 'فَإِذَا', src: 'https://verses.quran.com/wbw/002_198_010.mp3' },
        { ar: 'أَفَضْتُم', src: 'https://verses.quran.com/wbw/002_198_011.mp3' },
        { ar: 'مِّنْ', src: 'https://verses.quran.com/wbw/002_198_012.mp3' },
        { ar: 'عَرَفَاتٍ', src: 'https://verses.quran.com/wbw/002_198_013.mp3' },
        { ar: 'فَاذْكُرُوا', src: 'https://verses.quran.com/wbw/002_198_014.mp3' },
        { ar: 'اللَّهَ', src: 'https://verses.quran.com/wbw/002_198_015.mp3' },
        { ar: 'عِندَ', src: 'https://verses.quran.com/wbw/002_198_016.mp3' },
        { ar: 'الْمَشْعَرِ', src: 'https://verses.quran.com/wbw/002_198_017.mp3' },
        { ar: 'الْحَرَامِ', src: 'https://verses.quran.com/wbw/002_198_018.mp3' },
        { ar: 'وَاذْكُرُوهُ', src: 'https://verses.quran.com/wbw/002_198_020.mp3' },
        { ar: 'كَمَا', src: 'https://verses.quran.com/wbw/002_198_021.mp3' },
        { ar: 'هَدَاكُمْ', src: 'https://verses.quran.com/wbw/002_198_022.mp3' },
        { ar: 'وَإِن', src: 'https://verses.quran.com/wbw/002_198_023.mp3' },
        { ar: 'كُنتُم', src: 'https://verses.quran.com/wbw/002_198_024.mp3' },
        { ar: 'مِّن', src: 'https://verses.quran.com/wbw/002_198_025.mp3' },
        { ar: 'قَبْلِهِ', src: 'https://verses.quran.com/wbw/002_198_026.mp3' }
      ]
    },
    note: {
      en: 'Recited after leaving Arafah, as the pilgrims settle at Muzdalifah for the night.',
      ar: 'تُقرأ بعد الإفاضة من عرفات حين ينزل الحجاج بالمزدلفة.',
      ur: 'عرفات سے واپسی کے بعد پڑھی جاتی ہے جب حاجی رات کے لیے مزدلفہ پہنچتے ہیں۔'
    }
  },

  tashreeq_quran: {
    id: 'tashreeq_quran',
    label: { en: 'The days of remembrance', ar: 'ذكر الأيام المعدودات', ur: 'گنے ہوئے دنوں کا ذکر' },
    ar: 'وَاذْكُرُوا اللَّهَ فِي أَيَّامٍ مَّعْدُودَاتٍ ۚ فَمَن تَعَجَّلَ فِي يَوْمَيْنِ فَلَا إِثْمَ عَلَيْهِ وَمَن تَأَخَّرَ فَلَا إِثْمَ عَلَيْهِ ۚ لِمَنِ اتَّقَىٰ ۗ وَاتَّقُوا اللَّهَ وَاعْلَمُوا أَنَّكُمْ إِلَيْهِ تُحْشَرُونَ',
    tr: 'Wa-dhkurū Allāha fī ayyāmin maʿdūdāt. Fa-man taʿajjala fī yawmayni fa-lā ithma ʿalayh, wa man taʾakhkhara fa-lā ithma ʿalayh, li-mani ttqā. Wa-ttaqū Allāha wa-ʿlamū annakum ilayhi tuḥsharūn.',
    en: 'And remember Allah during the numbered days. Then whoever hastens his departure in two days — there is no sin upon him; and whoever delays — there is no sin upon him — for him who fears Allah. And fear Allah and know that unto Him you will be gathered.',
    ur: 'اور گنے ہوئے دنوں میں اللہ کا ذکر کرو۔ پھر جو دو دن میں جلدی کرے تو اس پر کوئی گناہ نہیں، اور جو پیچھے رہے تو بھی اس پر کوئی گناہ نہیں، یہ اس کے لیے ہے جو تقویٰ اختیار کرے۔ اور اللہ سے ڈرو اور جان لو کہ تم اسی کی طرف جمع کیے جاؤ گے۔',
    ref: 'Qur’an 2:203',
    url: 'https://quran.com/2/203',
    grade: { en: 'Qur’an', ar: 'قرآن', ur: 'قرآن' },
    quran: {
      link: '2/203',
      reciter: 'Mishary Rashid Alafasy',
      ayahs: ['https://verses.quran.com/Alafasy/mp3/002203.mp3'],
      words: [
        { ar: 'وَاذْكُرُوا', src: 'https://verses.quran.com/wbw/002_203_002.mp3' },
        { ar: 'اللَّهَ', src: 'https://verses.quran.com/wbw/002_203_003.mp3' },
        { ar: 'فِي', src: 'https://verses.quran.com/wbw/002_203_004.mp3' },
        { ar: 'أَيَّامٍ', src: 'https://verses.quran.com/wbw/002_203_005.mp3' },
        { ar: 'مَّعْدُودَاتٍ', src: 'https://verses.quran.com/wbw/002_203_006.mp3' },
        { ar: 'فَمَن', src: 'https://verses.quran.com/wbw/002_203_008.mp3' },
        { ar: 'تَعَجَّلَ', src: 'https://verses.quran.com/wbw/002_203_009.mp3' },
        { ar: 'فِي', src: 'https://verses.quran.com/wbw/002_203_010.mp3' },
        { ar: 'يَوْمَيْنِ', src: 'https://verses.quran.com/wbw/002_203_011.mp3' },
        { ar: 'فَلَا', src: 'https://verses.quran.com/wbw/002_203_012.mp3' },
        { ar: 'إِثْمَ', src: 'https://verses.quran.com/wbw/002_203_013.mp3' },
        { ar: 'عَلَيْهِ', src: 'https://verses.quran.com/wbw/002_203_014.mp3' },
        { ar: 'وَمَن', src: 'https://verses.quran.com/wbw/002_203_015.mp3' },
        { ar: 'تَأَخَّرَ', src: 'https://verses.quran.com/wbw/002_203_016.mp3' },
        { ar: 'فَلَا', src: 'https://verses.quran.com/wbw/002_203_017.mp3' },
        { ar: 'إِثْمَ', src: 'https://verses.quran.com/wbw/002_203_018.mp3' },
        { ar: 'عَلَيْهِ', src: 'https://verses.quran.com/wbw/002_203_019.mp3' },
        { ar: 'لِمَنِ', src: 'https://verses.quran.com/wbw/002_203_021.mp3' },
        { ar: 'اتَّقَىٰ', src: 'https://verses.quran.com/wbw/002_203_022.mp3' },
        { ar: 'وَاتَّقُوا', src: 'https://verses.quran.com/wbw/002_203_024.mp3' },
        { ar: 'اللَّهَ', src: 'https://verses.quran.com/wbw/002_203_025.mp3' }
      ]
    },
    note: {
      en: 'The Qur’anic command to remember Allah in Mina, and the permission to leave after two days or stay for three.',
      ar: 'أمر القرآن بذكر الله في منى، والإذن بالتعجل بعد يومين أو التأخر.',
      ur: 'منیٰ میں اللہ کے ذکر کا قرآنی حکم، اور دو دن بعد جانے یا تیسرے دن تک رکنے کی اجازت۔'
    }
  },

  ifadah_quran: {
    id: 'ifadah_quran',
    label: { en: 'The command of Tawaf al-Ifadah', ar: 'أمر طواف الإفاضة', ur: 'طواف افاضہ کا حکم' },
    ar: 'ثُمَّ لْيَقْضُوا تَفَثَهُمْ وَلْيُوفُوا نُذُورَهُمْ وَلْيَطَّوَّفُوا بِالْبَيْتِ الْعَتِيقِ',
    tr: 'Thumma l-yaqḍū tafathahum wa l-yūfū nudhūrahum wa l-yaṭṭawwafū bi-l-bayti l-ʿatīq.',
    en: 'Then let them end their untidiness, fulfill their vows, and perform Tawaf around the Ancient House.',
    ur: 'پھر چاہیے کہ اپنی میل کچیل دور کریں اور اپنی نذریں پوری کریں اور قدیم گھر (بیت اللہ) کا طواف کریں۔',
    ref: 'Qur’an 22:29',
    url: 'https://quran.com/22/29',
    grade: { en: 'Qur’an', ar: 'قرآن', ur: 'قرآن' },
    quran: {
      link: '22/29',
      reciter: 'Mishary Rashid Alafasy',
      ayahs: ['https://verses.quran.com/Alafasy/mp3/022029.mp3'],
      words: [
        { ar: 'ثُمَّ', src: 'https://verses.quran.com/wbw/022_029_001.mp3' },
        { ar: 'لْيَقْضُوا', src: 'https://verses.quran.com/wbw/022_029_002.mp3' },
        { ar: 'تَفَثَهُمْ', src: 'https://verses.quran.com/wbw/022_029_003.mp3' },
        { ar: 'وَلْيُوفُوا', src: 'https://verses.quran.com/wbw/022_029_004.mp3' },
        { ar: 'نُذُورَهُمْ', src: 'https://verses.quran.com/wbw/022_029_005.mp3' },
        { ar: 'وَلْيَطَّوَّفُوا', src: 'https://verses.quran.com/wbw/022_029_006.mp3' },
        { ar: 'بِالْبَيْتِ', src: 'https://verses.quran.com/wbw/022_029_007.mp3' },
        { ar: 'الْعَتِيقِ', src: 'https://verses.quran.com/wbw/022_029_008.mp3' }
      ]
    },
    note: {
      en: 'The verse that joins the release from ihram to the obligatory tawaf of Hajj.',
      ar: 'الآية التي تجمع بين التحلل من الإحرام وطواف الحج الواجب.',
      ur: 'وہ آیت جو احرام کھلنے کو حج کے واجب طواف سے جوڑتی ہے۔'
    }
  },

  sacrifice: {
    id: 'sacrifice',
    label: { en: 'At the sacrifice', ar: 'عند الهدي', ur: 'قربانی کے وقت' },
    ar: 'بِسْمِ اللَّهِ وَاللَّهُ أَكْبَرُ',
    tr: 'Bismillāhi wa-Allāhu akbar.',
    en: 'In the name of Allah, and Allah is the Greatest.',
    ur: 'اللہ کے نام سے، اور اللہ سب سے بڑا ہے۔',
    ref: 'Sahih al-Bukhari 5565 · Sahih Muslim 1966',
    url: 'https://sunnah.com/bukhari:5565',
    grade: { en: 'Sahih', ar: 'صحيح', ur: 'صحیح' },
    note: {
      en: 'The Prophet ﷺ mentioned Allah’s Name and said the takbir over his sacrifice. Say it as the animal is slaughtered, or when you appoint someone to do it for you.',
      ar: 'ذكر النبي ﷺ اسم الله وكبّر على هديه. قل هذا عند الذبح أو عند التوكيل.',
      ur: 'نبی ﷺ نے اپنی قربانی پر اللہ کا نام لیا اور تکبیر کہی۔ یہ ذبح کے وقت یا کسی کو وكیل کرتے وقت کہیں۔'
    }
  }
};

/* ------------------------------------------------------------------ *
 *  The eleven Hajj steps
 * ------------------------------------------------------------------ */

export const HAJJ_STEPS = [
  {
    id: 'hajj-ihram',
    num: 1,
    scene: 'miqat',
    minutes: 30,
    title: { en: 'Choose your type & enter ihram', ar: 'اختر النسك وأحرم', ur: 'نسک کا انتخاب اور احرام' },
    kicker: { en: 'Before the five days', ar: 'قبل الأيام الخمسة', ur: 'پانچ دن سے پہلے' },
    summary: {
      en: 'At the miqat, decide between Tamattu‘, Ifrad and Qiran, then make your intention and begin the Talbiyah.',
      ar: 'عند الميقات، اختر بين التمتع والإفراد والقران، ثم انوِ وابدأ التلبية.',
      ur: 'میقات پر تمتع، افراد اور قران میں سے انتخاب کریں، پھر نیت کریں اور تلبیہ شروع کریں۔'
    },
    narration: {
      en: 'Hajj begins before Mina: it begins at the miqat. Tamattu‘ means Umrah first, then Hajj after you release yourself from ihram. Ifrad means Hajj alone. Qiran means Hajj and Umrah together in one ihram. Men wear two unstitched white sheets; women wear modest, loose clothing with the face and hands uncovered. Bathe if you can, avoid perfume, and make the intention in your heart. Then recite the Talbiyah — men raising their voices, women softly.',
      ar: 'يبدأ الحج قبل منى: يبدأ عند الميقات. التمتع: عمرة أولاً ثم حج بعد التحلل. الإفراد: حج فقط. القران: حج وعمرة في إحرام واحد. يلبس الرجل إزاراً ورداءً أبيضين غير مخيطين، وتلبس المرأة ثياباً فضفاضة ساترة مع كشف الوجه والكفين. اغتسل إن استطعت، وتجنب الطيب، وانْوِ بقلبك، ثم ابدأ التلبية، يرفع الرجل صوته وتُسِرّ المرأة.',
      ur: 'حج منیٰ سے پہلے، میقات سے شروع ہوتا ہے۔ تمتع کا مطلب ہے پہلے عمرہ، پھر احرام کھول کر حج۔ افراد کا مطلب صرف حج۔ قران کا مطلب حج اور عمرہ ایک ہی احرام میں۔ مرد دو بغیر سلی سفید چادریں پہنیں، خواتین ڈھیلے پردے والے کپڑے پہنیں، چہرہ اور ہاتھ کھلے رکھیں۔ ممکن ہو تو غسل کریں، خوشبو سے بچیں، دل میں نیت کریں، پھر تلبیہ پڑھیں — مرد بلند آواز سے، خواتین آہستہ۔'
    },
    actions: [
      { en: 'Bathe or perform wudu, trim your nails, and remove all scent.', ar: 'اغتسل أو توضأ، وقلّم أظفارك، وأزل الطيب.', ur: 'غسل یا وضو کریں، ناخن تراشیں اور خوشبو دور کریں۔' },
      { en: 'Men: two unstitched white sheets. Women: modest, loose clothing, face and hands uncovered.', ar: 'الرجل: إزار ورداء أبيضان غير مخيطين. المرأة: ثياب فضفاضة ساترة مع كشف الوجه والكفين.', ur: 'مرد: دو بغیر سلی سفید چادریں۔ خواتین: ڈھیلے پردے والے کپڑے، چہرہ اور ہاتھ کھلے۔' },
      { en: 'Choose your type: Tamattu‘, Ifrad or Qiran — and intend it in your heart.', ar: 'اختر نسكك: تمتع أو إفراد أو قران، وانْوِه بقلبك.', ur: 'اپنا نسک منتخب کریں: تمتع، افراد یا قران — اور دل میں نیت کریں۔' },
      { en: 'Begin the Talbiyah and keep repeating it.', ar: 'ابدأ التلبية وأكثر منها.', ur: 'تلبیہ شروع کریں اور دہراتے رہیں۔' }
    ],
    tips: [
      {
        en: 'If you are unsure which type fits your trip, ask your group leader or a scholar before the miqat. The choice affects the sacrifice and whether you perform Umrah first.',
        ar: 'إن لم تكن متأكداً من النسك المناسب، فاسأل قائد الحملة أو عالماً قبل الميقات؛ فالاختيار يؤثر في الهدي وفي أداء العمرة أولاً.',
        ur: 'اگر آپ کو یقین نہ ہو کہ کون سا نسک آپ کے سفر کے مطابق ہے تو میقات سے پہلے اپنے گروپ لیڈر یا کسی عالم سے پوچھیں۔ اس انتخاب سے قربانی اور پہلے عمرے کا تعلق ہے۔'
      },
      {
        en: 'Write your intention and your dua list before you travel; the moment itself is busy and emotional.',
        ar: 'اكتب نيتك وقائمة دعائك قبل السفر؛ فالميقات مزدحم ومؤثر.',
        ur: 'سفر سے پہلے اپنی نیت اور دعاؤں کی فہرست لکھ لیں؛ وہ لمحہ مصروف اور جذباتی ہوتا ہے۔'
      }
    ],
    duas: ['travel', 'talbiyah'],
    variants: {
      ifrad: {
        summary: {
          en: 'You intend Hajj alone. You remain in ihram until the rites of the 10th, and no sacrifice is required.',
          ar: 'تنوي الحج وحده، وتبقى محرماً إلى أعمال العاشر، ولا هدي واجب.',
          ur: 'آپ صرف حج کی نیت کرتے ہیں، دس تاریخ کے اعمال تک احرام میں رہتے ہیں، اور قربانی واجب نہیں۔'
        },
        narration: {
          en: 'For Ifrad, you enter ihram for Hajj alone at the miqat and remain in it until you stone the Aqabah and shave on the 10th. There is no Umrah on this journey and no obligatory sacrifice. Men wear the two white sheets; women wear modest loose clothing. Make the intention for Hajj in your heart and begin the Talbiyah.',
          ar: 'في الإفراد تحرم بالحج وحده عند الميقات وتبقى محرماً حتى ترمي جمرة العقبة وتحلق يوم العاشر. لا عمرة في هذا النسك ولا هدي واجب. يلبس الرجل الإزار والرداء، وتلبس المرأة ثياباً فضفاضة. انوِ الحج بقلبك وابدأ التلبية.',
          ur: 'افراد میں آپ میقات پر صرف حج کا احرام باندھتے ہیں اور دس تاریخ کو جمرہ عقبہ کی رمی اور حلق تک احرام میں رہتے ہیں۔ اس سفر میں عمرہ نہیں اور قربانی واجب نہیں۔ مرد دو سفید چادریں پہنیں، خواتین ڈھیلے کپڑے۔ دل میں حج کی نیت کریں اور تلبیہ شروع کریں۔'
        }
      },
      qiran: {
        summary: {
          en: 'You intend Hajj and Umrah together in one ihram. You remain in ihram until the 10th, and a sacrifice is required.',
          ar: 'تنوي الحج والعمرة معاً في إحرام واحد، وتبقى محرماً إلى العاشر، وعليك هدي.',
          ur: 'آپ حج اور عمرہ دونوں کی ایک ساتھ ایک احرام میں نیت کرتے ہیں، دس تاریخ تک احرام میں رہتے ہیں، اور قربانی واجب ہے۔'
        },
        narration: {
          en: 'For Qiran, you enter ihram for Hajj and Umrah together at the miqat and remain in ihram until the 10th. You will perform tawaf al-qudum and sa‘i on arrival, but you do not shave or release. A sacrifice is required. Men wear the two white sheets; women wear modest loose clothing. Make the intention for both in your heart and begin the Talbiyah.',
          ar: 'في القران تحرم بالحج والعمرة معاً عند الميقات وتبقى محرماً إلى العاشر. تطوف طواف القدوم وتسعى عند الوصول، لكن لا تحلق ولا تحلّ. وعليك هدي. يلبس الرجل الإزار والرداء، وتلبس المرأة ثياباً فضفاضة. انوِ النسكين بقلبك وابدأ التلبية.',
          ur: 'قران میں آپ میقات پر حج اور عمرہ دونوں کا ایک ساتھ احرام باندھتے ہیں اور دس تاریخ تک احرام میں رہتے ہیں۔ آمد پر طواف قدوم اور سعی کرتے ہیں، لیکن حلق یا احرام کھولنا نہیں۔ قربانی واجب ہے۔ مرد دو سفید چادریں پہنیں، خواتین ڈھیلے کپڑے۔ دل میں دونوں کی نیت کریں اور تلبیہ شروع کریں۔'
        }
      }
    }
  },

  {
    id: 'hajj-makkah',
    num: 2,
    scene: 'tawaf',
    minutes: 90,
    interactive: ['tawaf', 'sai'],
    title: { en: 'Arriving in Makkah', ar: 'الوصول إلى مكة', ur: 'مکہ پہنچنا' },
    kicker: { en: 'Your first rites', ar: 'أول أعمالك', ur: 'آپ کے پہلے اعمال' },
    summary: {
      en: 'Tamattu‘: perform Umrah on arrival, then release from ihram. Ifrad and Qiran remain in ihram.',
      ar: 'التمتع: اعتمر عند الوصول ثم تحلّل. الإفراد والقران: ابق محرماً.',
      ur: 'تمتع: پہنچ کر عمرہ کریں پھر احرام کھول دیں۔ افراد اور قران: احرام میں رہیں۔'
    },
    narration: {
      en: 'For Tamattu‘, your Hajj begins with a full Umrah. Enter the Haram, perform tawaf around the Ka‘bah, pray two rak‘ahs, then make sa‘i between Safa and Marwa. Shave or trim, and your ihram restrictions end. You now wait in Makkah in normal clothes until the 8th of Dhul Hijjah. Rest, pray, and prepare for the days ahead.',
      ar: 'في التمتع تبدأ حجك بعمرة كاملة. ادخل الحرم، وطف بالكعبة، وصلِّ ركعتين، واسعَ بين الصفا والمروة، ثم احلق أو قصّر فتحلّ من إحرامك. تبقى في مكة بثيابك العادية إلى الثامن من ذي الحجة. استرح وصلِّ واستعد للأيام القادمة.',
      ur: 'تمتع میں آپ کا حج ایک مکمل عمرے سے شروع ہوتا ہے۔ حرم میں داخل ہوں، کعبہ کا طواف کریں، دو رکعتیں پڑھیں، پھر صفا و مروہ کے درمیان سعی کریں۔ حلق یا قصر کریں، احرام کی پابندیاں ختم ہو جاتی ہیں۔ اب آپ ۸ ذوالحجہ تک مکہ میں عام کپڑوں میں رہیں۔ آرام کریں، نماز پڑھیں اور آنے والے دنوں کی تیاری کریں۔'
    },
    actions: [
      { en: 'Enter the Haram with your right foot and the dua for entering the mosque.', ar: 'ادخل الحرم بالقدم اليمنى بدعاء دخول المسجد.', ur: 'دایاں قدم پہلے رکھ کر مسجد میں داخلے کی دعا پڑھیں۔' },
      { en: 'Perform tawaf: seven circuits with the Ka‘bah on your left.', ar: 'طف سبعة أشواط والكعبة عن يسارك.', ur: 'سات چکر کریں، کعبہ بائیں جانب رکھیں۔' },
      { en: 'Pray two rak‘ahs, then make sa‘i between Safa and Marwa.', ar: 'صلِّ ركعتين ثم اسعَ بين الصفا والمروة.', ur: 'دو رکعتیں پڑھیں، پھر صفا و مروہ کی سعی کریں۔' },
      { en: 'Shave or trim, change into normal clothes, and rest.', ar: 'احلق أو قصّر، والبس ثيابك العادية، واسترح.', ur: 'حلق یا قصر کریں، عام کپڑے پہنیں اور آرام کریں۔' }
    ],
    tips: [
      {
        en: 'Drink Zamzam, protect your feet and voice, and sleep when you can. The five days ahead are long.',
        ar: 'اشرب زمزم، وحافظ على قدميك وصوتك، ونم حين تستطيع؛ فالأيام الخمسة طويلة.',
        ur: 'زمزم پئیں، اپنے پاؤں اور آواز کا خیال رکھیں، اور جب موقع ملے سو جائیں۔ آگے پانچ دن طویل ہیں۔'
      }
    ],
    duas: ['enter_mosque', 'black_stone', 'safa', 'sai_dhikr'],
    variants: {
      tamattu: {},
      ifrad: {
        summary: {
          en: 'You are still in ihram. Perform tawaf al-qudum if you can, then remain in ihram. There is no Umrah and no release.',
          ar: 'ما زلت محرماً. طف طواف القدوم إن تيسر ثم ابق محرماً. لا عمرة ولا تحلل.',
          ur: 'آپ اب بھی احرام میں ہیں۔ ممکن ہو تو طواف قدوم کریں، پھر احرام میں رہیں۔ نہ عمرہ، نہ احرام کھلنا۔'
        },
        narration: {
          en: 'For Ifrad, you remain in ihram when you reach Makkah. You may perform tawaf al-qudum — the arrival tawaf — and then rest, but you do not shave, cut your hair, or leave ihram. There is no Umrah on this journey. Keep the Talbiyah and prepare to leave for Mina on the 8th.',
          ar: 'في الإفراد تبقى محرماً عند وصول مكة. لك أن تطوف طواف القدوم ثم تستريح، لكن لا تحلق ولا تقصّر ولا تحلّ. لا عمرة في هذا النسك. واصل التلبية واستعد للخروج إلى منى في الثامن.',
          ur: 'افراد میں مکہ پہنچنے پر آپ احرام میں رہتے ہیں۔ طواف قدوم کر سکتے ہیں، پھر آرام کریں، لیکن حلق یا قصر نہیں اور احرام نہیں کھولتے۔ اس سفر میں عمرہ نہیں۔ تلبیہ جاری رکھیں اور ۸ تاریخ کو منیٰ جانے کی تیاری کریں۔'
        },
        actions: [
          { en: 'Enter the Haram and perform tawaf al-qudum if you are able.', ar: 'ادخل الحرم وطف طواف القدوم إن استطعت.', ur: 'حرم میں داخل ہوں اور ممکن ہو تو طواف قدوم کریں۔' },
          { en: 'Do not shave, trim, or change out of ihram.', ar: 'لا تحلق ولا تقصّر ولا تخلع الإحرام.', ur: 'حلق یا قصر نہ کریں اور احرام نہ کھولیں۔' },
          { en: 'Rest, pray, and keep the Talbiyah.', ar: 'استرح وصلِّ وواصل التلبية.', ur: 'آرام کریں، نماز پڑھیں اور تلبیہ جاری رکھیں۔' }
        ]
      },
      qiran: {
        summary: {
          en: 'Perform tawaf al-qudum and sa‘i on arrival, then remain in ihram. Your Umrah is joined to your Hajj.',
          ar: 'طف طواف القدوم واسعَ عند الوصول ثم ابق محرماً. عمرتك داخلة في حجك.',
          ur: 'آمد پر طواف قدوم اور سعی کریں، پھر احرام میں رہیں۔ آپ کا عمرہ حج میں شامل ہے۔'
        },
        narration: {
          en: 'For Qiran, you perform tawaf al-qudum and sa‘i when you arrive, but you do not shave or release from ihram. Your Umrah is joined to your Hajj, and a sacrifice is required. Rest in Makkah in ihram, keep the Talbiyah, and prepare to leave for Mina on the 8th.',
          ar: 'في القران تطوف طواف القدوم وتسعى عند الوصول، لكن لا تحلق ولا تحلّ. عمرتك داخلة في حجك وعليك هدي. استرح بمكة محرماً، وواصل التلبية، واستعد للخروج إلى منى في الثامن.',
          ur: 'قران میں آپ آمد پر طواف قدوم اور سعی کرتے ہیں، لیکن حلق یا احرام کھولنا نہیں۔ آپ کا عمرہ حج میں شامل ہے اور قربانی واجب ہے۔ مکہ میں احرام کے ساتھ آرام کریں، تلبیہ جاری رکھیں اور ۸ تاریخ کو منیٰ جانے کی تیاری کریں۔'
        },
        actions: [
          { en: 'Perform tawaf al-qudum and sa‘i on arrival.', ar: 'طف طواف القدوم واسعَ عند الوصول.', ur: 'آمد پر طواف قدوم اور سعی کریں۔' },
          { en: 'Remain in ihram — do not shave or trim.', ar: 'ابق محرماً ولا تحلق ولا تقصّر.', ur: 'احرام میں رہیں — حلق یا قصر نہ کریں۔' },
          { en: 'Rest, keep the Talbiyah, and prepare for Mina.', ar: 'استرح وواصل التلبية واستعد لمنى.', ur: 'آرام کریں، تلبیہ جاری رکھیں اور منیٰ کی تیاری کریں۔' }
        ]
      }
    }
  },

  {
    id: 'hajj-tarwiyah',
    num: 3,
    scene: 'mina',
    minutes: 60,
    title: { en: 'Day 8 — Tarwiyah: to Mina', ar: 'اليوم الثامن — التروية إلى منى', ur: 'آٹھواں دن — ترویہ، منیٰ کی طرف' },
    kicker: { en: 'The journey outward', ar: 'الخروج إلى منى', ur: 'منیٰ کی طرف سفر' },
    summary: {
      en: 'After Fajr, travel to Mina and spend the day and night there in prayer, rest and Talbiyah.',
      ar: 'بعد الفجر، اخرج إلى منى واقضِ اليوم والليلة هناك في الصلاة والراحة والتلبية.',
      ur: 'فجر کے بعد منیٰ جائیں اور دن رات نماز، آرام اور تلبیہ میں گزاریں۔'
    },
    narration: {
      en: 'On the 8th of Dhul Hijjah, after Fajr in Makkah, set out for Mina. Pray Dhuhr, Asr, Maghrib, Isha and the next Fajr there, each at its time. Spend the day in remembrance, Qur’an and rest. Keep the Talbiyah on your tongue. Tonight is a night of preparation for the greatest day of the year.',
      ar: 'في الثامن من ذي الحجة، بعد الفجر بمكة، اخرج إلى منى. صلِّ بها الظهر والعصر والمغرب والعشاء وفجر الغد، كل صلاة في وقتها. اقضِ اليوم في الذكر والقرآن والراحة، وأكثر من التلبية. هذه ليلة الاستعداد لأعظم يوم في السنة.',
      ur: '۸ ذوالحجہ کو مکہ میں فجر کے بعد منیٰ روانہ ہوں۔ وہاں ظہر، عصر، مغرب، عشاء اور اگلی فجر ہر نماز اپنے وقت پر پڑھیں۔ دن ذکر، قرآن اور آرام میں گزاریں، تلبیہ جاری رکھیں۔ یہ رات سال کے سب سے عظیم دن کی تیاری کی رات ہے۔'
    },
    actions: [
      { en: 'After Fajr, travel to Mina and settle into your tent.', ar: 'بعد الفجر اخرج إلى منى واستقر في خيمتك.', ur: 'فجر کے بعد منیٰ جائیں اور اپنے خیمے میں جگہ لیں۔' },
      { en: 'Pray each of the five prayers at its time.', ar: 'صلِّ الصلوات الخمس كلٌّ في وقتها.', ur: 'پانچوں نمازیں اپنے وقت پر پڑھیں۔' },
      { en: 'Rest, eat lightly, and prepare for Arafah.', ar: 'استرح وأكل قليلاً واستعد لعرفة.', ur: 'آرام کریں، ہلکا کھائیں اور عرفہ کی تیاری کریں۔' },
      { en: 'Repeat the Talbiyah and keep your dua list close.', ar: 'أكثر من التلبية وأبقِ قائمة دعائك قريبة.', ur: 'تلبیہ دہرائیں اور دعاؤں کی فہرست پاس رکھیں۔' }
    ],
    tips: [
      {
        en: 'Pack a small bag for Arafah and Muzdalifah; you will not return to your Mina tent that night.',
        ar: 'جهّز حقيبة صغيرة لعرفة والمزدلفة؛ لن تعود إلى خيمتك بمنى تلك الليلة.',
        ur: 'عرفہ اور مزدلفہ کے لیے چھوٹا بیگ تیار رکھیں؛ اس رات آپ منیٰ کے خیمے میں واپس نہیں آئیں گے۔'
      },
      {
        en: 'Learn your tent number and the meeting point before it gets dark.',
        ar: 'اعرف رقم خيمتك ونقطة التجمع قبل حلول الظلام.',
        ur: 'اندھیرا ہونے سے پہلے اپنے خیمے کا نمبر اور ملاقات کی جگہ جان لیں۔'
      }
    ],
    duas: ['talbiyah']
  },

  {
    id: 'hajj-arafah',
    num: 4,
    scene: 'arafah',
    minutes: 240,
    title: { en: 'Day 9 — Arafah: the standing', ar: 'اليوم التاسع — عرفة: الوقوف', ur: 'نواں دن — عرفہ: وقوف' },
    kicker: { en: 'The heart of Hajj', ar: 'قلب الحج', ur: 'حج کا دل' },
    summary: {
      en: 'From Dhuhr until sunset you stand at Arafah in dua. The Prophet ﷺ said: “Hajj is Arafah.”',
      ar: 'من الظهر إلى الغروب تقف بعرفة داعياً. قال النبي ﷺ: «الحج عرفة».',
      ur: 'ظہر سے غروب تک آپ عرفہ میں دعا کے لیے کھڑے رہتے ہیں۔ نبی ﷺ نے فرمایا: ”حج عرفہ ہے۔“'
    },
    narration: {
      en: 'After Fajr in Mina, wait until the sun rises, then travel to Arafah. At Dhuhr, pray Dhuhr and Asr together, shortened. Then stand — in the shade if you can, facing the Qibla — and ask Allah for everything. Raise your hands, weep if you can, and stay until the sun sets. Do not fast; the pilgrim needs strength. This is the day on which Allah frees the most people from the Fire.',
      ar: 'بعد فجر منى، انتظر حتى تطلع الشمس ثم اخرج إلى عرفة. عند الظهر صلِّ الظهر والعصر جمعاً وقصراً، ثم قف في الظل إن استطعت مستقبلاً القبلة، واسأل الله كل شيء. ارفع يديك وابكِ إن قدرت، وابقَ حتى تغرب الشمس. لا تصم؛ فالحاج يحتاج القوة. هذا اليوم يعتق الله فيه أكثر عباده من النار.',
      ur: 'منیٰ میں فجر کے بعد سورج نکلنے کا انتظار کریں، پھر عرفہ جائیں۔ ظہر کے وقت ظہر اور عصر جمع و قصر کر کے پڑھیں۔ پھر سائے میں، قبلہ رخ کھڑے ہو کر اللہ سے سب کچھ مانگیں۔ ہاتھ اٹھائیں، ممکن ہو تو روئیں، اور سورج غروب ہونے تک رکیں۔ روزہ نہ رکھیں؛ حاجی کو طاقت چاہیے۔ یہ وہ دن ہے جس میں اللہ سب سے زیادہ بندوں کو آگ سے آزاد کرتا ہے۔'
    },
    actions: [
      { en: 'Travel to Arafah after sunrise.', ar: 'اخرج إلى عرفة بعد طلوع الشمس.', ur: 'سورج نکلنے کے بعد عرفہ جائیں۔' },
      { en: 'Pray Dhuhr and Asr together, shortened.', ar: 'صلِّ الظهر والعصر جمعاً وقصراً.', ur: 'ظہر اور عصر جمع و قصر کر کے پڑھیں۔' },
      { en: 'Stand in dua, facing the Qibla, until sunset.', ar: 'قف داعياً مستقبلاً القبلة حتى الغروب.', ur: 'قبلہ رخ دعا میں غروب تک کھڑے رہیں۔' },
      { en: 'Ask forgiveness for yourself, your family and the Ummah.', ar: 'استغفر لنفسك وأهلك والأمة.', ur: 'اپنے لیے، اہل و عیال اور امت کے لیے مغفرت مانگیں۔' },
      { en: 'Do not leave before the sun has set.', ar: 'لا تنصرف قبل غروب الشمس.', ur: 'سورج غروب ہونے سے پہلے واپس نہ جائیں۔' }
    ],
    tips: [
      {
        en: 'The whole of Arafah is a place of standing except the valley of ‘Uranah.',
        ar: 'عرفة كلها موقف إلا بطن عرنة.',
        ur: 'عرفہ کا پورا علاقہ وقوف کی جگہ ہے سوائے وادی عرنہ کے۔'
      },
      {
        en: 'Keep hydrated, use shade, and avoid crowds. Quality of dua matters more than quantity.',
        ar: 'أكثر من الماء واستظل وابتعد عن الزحام. جودة الدعاء أهم من كثرته.',
        ur: 'پانی پیتے رہیں، سایہ استعمال کریں اور بھیڑ سے بچیں۔ دعا کی کیفیت مقدار سے زیادہ اہم ہے۔'
      }
    ],
    duas: ['arafah_best', 'acceptance']
  },

  {
    id: 'hajj-muzdalifah',
    num: 5,
    scene: 'muzdalifah',
    minutes: 120,
    title: { en: 'Night at Muzdalifah', ar: 'ليلة المزدلفة', ur: 'مزدلفہ کی رات' },
    kicker: { en: 'A night under the sky', ar: 'ليلة تحت السماء', ur: 'آسمان تلے ایک رات' },
    summary: {
      en: 'After sunset, travel to Muzdalifah, pray Maghrib and Isha together, rest, and collect your pebbles.',
      ar: 'بعد الغروب اخرج إلى المزدلفة، وصلِّ المغرب والعشاء جمعاً، واسترح، واجمع حصاك.',
      ur: 'غروب کے بعد مزدلفہ جائیں، مغرب اور عشاء جمع کر کے پڑھیں، آرام کریں اور کنکریاں جمع کریں۔'
    },
    narration: {
      en: 'When the sun has fully set, leave Arafah for Muzdalifah without praying Maghrib on the way. At Muzdalifah, pray Maghrib and Isha together, then rest. It is a simple, open night: pray, sleep, and remember Allah at al-Mash‘ar al-Haram. Collect 49 or 70 small pebbles, or just enough for your rites. The weak, the elderly and women may leave after the middle of the night; others pray Fajr and leave before sunrise.',
      ar: 'إذا غربت الشمس تماماً، اخرج من عرفة إلى المزدلفة دون أن تصلي المغرب في الطريق. صلِّ بالمزدلفة المغرب والعشاء جمعاً ثم استرح. ليلة بسيطة في العراء: صلِّ ونم واذكر الله عند المشعر الحرام. اجمع ٤٩ أو ٧٠ حصاة صغيرة، أو ما يكفي مناسكك. الضعفة والكبار والنساء لهم الانصراف بعد نصف الليل، وغيرهم يصلي الفجر وينصرف قبل الشروق.',
      ur: 'جب سورج مکمل غروب ہو جائے تو عرفہ سے مزدلفہ چلے جائیں، راستے میں مغرب نہ پڑھیں۔ مزدلفہ میں مغرب اور عشاء جمع کر کے پڑھیں، پھر آرام کریں۔ یہ کھلی رات ہے: نماز، نیند اور مشعر حرام پر اللہ کا ذکر۔ ۴۹ یا ۷۰ چھوٹی کنکریاں جمع کریں، یا جتنی اپنے اعمال کے لیے کافی ہوں۔ کمزور، بزرگ اور خواتین آدھی رات کے بعد جا سکتے ہیں؛ باقی فجر پڑھ کر طلوع سے پہلے روانہ ہوں۔'
    },
    actions: [
      { en: 'Leave Arafah after sunset without praying Maghrib on the way.', ar: 'اخرج من عرفة بعد الغروب دون صلاة المغرب في الطريق.', ur: 'غروب کے بعد عرفہ سے روانہ ہوں، راستے میں مغرب نہ پڑھیں۔' },
      { en: 'At Muzdalifah, pray Maghrib and Isha together.', ar: 'صلِّ بالمزدلفة المغرب والعشاء جمعاً.', ur: 'مزدلفہ میں مغرب اور عشاء جمع کر کے پڑھیں۔' },
      { en: 'Rest, then collect small pebbles for the Jamarat.', ar: 'استرح ثم اجمع حصى صغيرة للجمرات.', ur: 'آرام کریں، پھر جمرات کے لیے چھوٹی کنکریاں جمع کریں۔' },
      { en: 'Pray Fajr and leave before sunrise, unless you are excused.', ar: 'صلِّ الفجر وانصرف قبل الشروق إلا لعذر.', ur: 'فجر پڑھیں اور طلوع سے پہلے روانہ ہوں، مگر عذر ہو۔' }
    ],
    tips: [
      {
        en: 'Pebbles should be small, like chickpeas — not large stones.',
        ar: 'الحصى صغيرة مثل الحمص، لا حجارة كبيرة.',
        ur: 'کنکریاں چنے جیسی چھوٹی ہوں، بڑے پتھر نہیں۔'
      },
      {
        en: 'Mark your bus and tent; the crowd is immense at night.',
        ar: 'اعرف حافلتك وخيمتك؛ الزحام شديد ليلاً.',
        ur: 'اپنی بس اور خیمے کا نشان یاد رکھیں؛ رات کو بہت بھیڑ ہوتی ہے۔'
      }
    ],
    duas: ['muzdalifah_quran']
  },

  {
    id: 'hajj-aqabah',
    num: 6,
    scene: 'jamarat',
    minutes: 60,
    title: { en: 'Day 10 — Stoning the Aqabah', ar: 'اليوم العاشر — رمي جمرة العقبة', ur: 'دسواں دن — جمرہ عقبہ کی رمی' },
    kicker: { en: 'The first pebbles', ar: 'أول الحصى', ur: 'پہلی کنکریاں' },
    summary: {
      en: 'Stone only the large Jamarat al-‘Aqabah with seven pebbles, saying Allahu Akbar with each. The Talbiyah stops here.',
      ar: 'ارمِ جمرة العقبة الكبرى فقط بسبع حصيات، وكبّر مع كل حصاة. تنتهي التلبية هنا.',
      ur: 'صرف بڑے جمرہ عقبہ کو سات کنکریوں سے رمی کریں، ہر کنکری پر اللہ اکبر کہیں۔ تلبیہ یہیں ختم ہوتا ہے۔'
    },
    narration: {
      en: 'On the 10th, after sunrise, go to Jamarat al-‘Aqabah — the largest pillar nearest Makkah. Throw seven small pebbles, one by one, saying Allahu Akbar with each. Do not stone the other two jamarat today. Stop the Talbiyah when you begin. Do not crowd or push; if it is unsafe, wait for a quieter time. The elderly and weak may stone after midnight if needed.',
      ar: 'في العاشر بعد الشروق، اذهب إلى جمرة العقبة الكبرى، أقرب الجمرات إلى مكة. ارمِ سبع حصيات صغيرة واحدة واحدة، وكبّر مع كل حصاة. لا ترمِ الجمرتين الأخريين اليوم. اقطع التلبية عند البدء. لا تزاحم ولا تدفع؛ فإن كان الأمر غير آمن فانتظر وقتاً أهدأ. وللضعفاء والكبار الرمي بعد منتصف الليل عند الحاجة.',
      ur: 'دس تاریخ کو طلوع آفتاب کے بعد جمرہ عقبہ — مکہ کے قریب سب سے بڑا جمرہ — جائیں۔ ایک ایک کر کے سات چھوٹی کنکریاں ماریں اور ہر کنکری پر اللہ اکبر کہیں۔ آج باقی دو جمرات پر رمی نہیں۔ شروع میں تلبیہ بند کر دیں۔ دھکم پیل نہ کریں؛ اگر خطرہ ہو تو پرسکون وقت کا انتظار کریں۔ بزرگ اور کمزور ضرورت ہو تو آدھی رات کے بعد رمی کر سکتے ہیں۔'
    },
    actions: [
      { en: 'Go to Jamarat al-‘Aqabah after sunrise.', ar: 'اذهب إلى جمرة العقبة بعد الشروق.', ur: 'طلوع کے بعد جمرہ عقبہ جائیں۔' },
      { en: 'Throw seven small pebbles, one by one.', ar: 'ارمِ سبع حصيات صغيرة واحدة واحدة.', ur: 'سات چھوٹی کنکریاں ایک ایک کر کے ماریں۔' },
      { en: 'Say Allahu Akbar with each throw.', ar: 'كبّر مع كل حصاة.', ur: 'ہر کنکری پر اللہ اکبر کہیں۔' },
      { en: 'Stone only the Aqabah today; stop the Talbiyah.', ar: 'ارمِ العقبة فقط اليوم، واقطع التلبية.', ur: 'آج صرف عقبہ پر رمی کریں اور تلبیہ بند کریں۔' }
    ],
    tips: [
      {
        en: 'Do not throw shoes, bags or large stones. The sunnah is small pebbles with takbir.',
        ar: 'لا ترمِ الأحذية أو الحقائب أو الحجارة الكبيرة. السنة الحصى الصغيرة مع التكبير.',
        ur: 'جوتے، بیگ یا بڑے پتھر نہ ماریں۔ سنت چھوٹی کنکریاں اور تکبیر ہے۔'
      },
      {
        en: 'If you stone on behalf of someone, do your own first, then theirs.',
        ar: 'إن رميت عن غيرك، فارمِ عن نفسك أولاً ثم عنه.',
        ur: 'اگر کسی کی طرف سے رمی کریں تو پہلے اپنی، پھر اس کی رمی کریں۔'
      }
    ],
    duas: []
  },

  {
    id: 'hajj-sacrifice',
    num: 7,
    scene: 'sacrifice',
    minutes: 45,
    title: { en: 'Day 10 — The sacrifice', ar: 'اليوم العاشر — الهدي', ur: 'دسواں دن — قربانی' },
    kicker: { en: 'Gratitude made visible', ar: 'شكرٌ ظاهر', ur: 'ظاہر شکر' },
    summary: {
      en: 'Tamattu‘ and Qiran pilgrims offer a sacrifice. Ifrad pilgrims may offer one voluntarily. Say the Name of Allah and give thanks.',
      ar: 'على المتمتع والقارن هدي، وللمفرد هدي مستحب. سمِّ الله وأشكر.',
      ur: 'تمتع اور قران والوں پر قربانی ہے۔ افراد والے رضاکارانہ کر سکتے ہیں۔ اللہ کا نام لیں اور شکر کریں۔'
    },
    narration: {
      en: 'After stoning the Aqabah, offer your sacrifice if it is due. For Tamattu‘ and Qiran it is obligatory; for Ifrad it is recommended, not required. You may slaughter yourself or appoint a trusted person, and many pilgrims use an official sacrifice voucher. Say Bismillah, Allahu Akbar. Eat from it, give to the poor, and remember that the meat does not reach Allah — your taqwa does.',
      ar: 'بعد رمي العقبة، اذبح هديك إن كان واجباً. هو واجب على المتمتع والقارن، ومستحب للمفرد. لك أن تذبح بنفسك أو توكّل ثقة، وكثير من الحجاج يستخدمون قسيمة الهدي الرسمية. قل: بسم الله والله أكبر. كل منه وأطعم الفقير، واعلم أن اللحم لا يصل إلى الله ولكن التقوى تصل.',
      ur: 'جمرہ عقبہ کی رمی کے بعد، اگر قربانی واجب ہو تو ادا کریں۔ تمتع اور قران پر واجب ہے، افراد پر مستحب۔ آپ خود ذبح کر سکتے ہیں یا کسی قابل اعتماد کو وكیل بنائیں، اور بہت سے حاجی سرکاری قربانی واؤچر استعمال کرتے ہیں۔ بسم اللہ، اللہ اکبر کہیں۔ اس میں سے کھائیں، فقیر کو دیں، اور یاد رکھیں کہ گوشت اللہ تک نہیں پہنچتا، تقویٰ پہنچتا ہے۔'
    },
    actions: [
      { en: 'Confirm whether a sacrifice is due for your type.', ar: 'تأكد هل الهدي واجب في نسكك.', ur: 'یقین کریں کہ آپ کے نسک میں قربانی واجب ہے یا نہیں۔' },
      { en: 'Slaughter yourself or appoint a trusted person or official voucher.', ar: 'اذبح بنفسك أو وكّل ثقة أو استخدم القسيمة الرسمية.', ur: 'خود ذبح کریں یا کسی قابل اعتماد شخص یا سرکاری واؤچر کو وكیل بنائیں۔' },
      { en: 'Say Bismillah, Allahu Akbar.', ar: 'قل: بسم الله والله أكبر.', ur: 'بسم اللہ، اللہ اکبر کہیں۔' },
      { en: 'Eat, give to the poor, and keep the receipt.', ar: 'كل وأطعم الفقير واحفظ الإيصال.', ur: 'کھائیں، فقیر کو دیں اور رسید سنبھالیں۔' }
    ],
    tips: [
      {
        en: 'If you use a voucher, confirm it is for the current year and that the animal meets the conditions.',
        ar: 'إن استخدمت قسيمة، تأكد أنها لهذا العام وأن الحيوان مستوفٍ للشروط.',
        ur: 'واؤچر استعمال کریں تو یقین کریں کہ وہ اسی سال کا ہے اور جانور شرائط پورا کرتا ہے۔'
      },
      {
        en: 'Do not delay the sacrifice past the days of Tashreeq if you are able.',
        ar: 'لا تؤخر الهدي عن أيام التشريق إن قدرت.',
        ur: 'ممکن ہو تو قربانی ایام تشریق سے آگے نہ بڑھائیں۔'
      }
    ],
    duas: ['sacrifice'],
    variants: {
      ifrad: {
        summary: {
          en: 'A sacrifice is not required for Ifrad, but it is recommended. If you offer one, say Bismillah, Allahu Akbar.',
          ar: 'لا هدي واجب في الإفراد، لكنه مستحب. فإن أهديت فقل: بسم الله والله أكبر.',
          ur: 'افراد میں قربانی واجب نہیں، مگر مستحب ہے۔ اگر کریں تو بسم اللہ، اللہ اکبر کہیں۔'
        }
      }
    }
  },

  {
    id: 'hajj-halq',
    num: 8,
    scene: 'halq',
    minutes: 30,
    title: { en: 'Day 10 — Shaving or trimming', ar: 'اليوم العاشر — الحلق أو التقصير', ur: 'دسواں دن — حلق یا قصر' },
    kicker: { en: 'A new beginning', ar: 'بداية جديدة', ur: 'نیا آغاز' },
    summary: {
      en: 'Men shave or trim; women trim a fingertip’s length. This is your partial release from ihram.',
      ar: 'يحلق الرجل أو يقصّر، وتقصّ المرأة قدر أنملة. هذا تحلل جزئي من الإحرام.',
      ur: 'مرد حلق یا قصر کریں، خواتین ایک پور کی لمبائی تراشیں۔ یہ احرام سے جزوی آزادی ہے۔'
    },
    narration: {
      en: 'After the sacrifice, shave your head or trim your hair. Men may shave completely — the Prophet ﷺ prayed for those who shave — or trim evenly. Women trim a fingertip’s length. With this, the restrictions of ihram end except marital intimacy, which remains until tawaf al-ifadah. Change into clean clothes, bathe if you wish, and prepare to go to Makkah.',
      ar: 'بعد الهدي، احلق رأسك أو قصّر شعرك. للرجل الحلق كاملاً — وقد دعا النبي ﷺ للمحلقين — أو التقصير، وللمرأة قصّ قدر أنملة. بهذا تنتهي محظورات الإحرام إلا الجماع، فيبقى محظوراً حتى طواف الإفاضة. البس ثياباً نظيفة واغتسل إن شئت واستعد للذهاب إلى مكة.',
      ur: 'قربانی کے بعد سر منڈوائیں یا بال تراشیں۔ مرد مکمل حلق کر سکتے ہیں — نبی ﷺ نے حلق کرنے والوں کے لیے دعا کی — یا برابر تراشیں، اور خواتین ایک پور کی لمبائی تراشیں۔ اس سے احرام کی پابندیاں ختم ہو جاتی ہیں سوائے ازدواجی تعلق کے، جو طواف افاضہ تک باقی رہتا ہے۔ صاف کپڑے پہنیں، چاہیں تو غسل کریں اور مکہ جانے کی تیاری کریں۔'
    },
    actions: [
      { en: 'Men: shave completely or trim evenly.', ar: 'الرجل: احلق أو قصّر بالتساوي.', ur: 'مرد: مکمل حلق کریں یا برابر تراشیں۔' },
      { en: 'Women: trim a fingertip’s length.', ar: 'المرأة: قصّ قدر أنملة.', ur: 'خواتین: ایک پور کی لمبائی تراشیں۔' },
      { en: 'Change into clean clothes and bathe if you wish.', ar: 'البس ثياباً نظيفة واغتسل إن شئت.', ur: 'صاف کپڑے پہنیں، چاہیں تو غسل کریں۔' },
      { en: 'Remember that intimacy remains forbidden until tawaf al-ifadah.', ar: 'تذكّر أن الجماع باقٍ محظوراً حتى طواف الإفاضة.', ur: 'یاد رکھیں ازدواجی تعلق طواف افاضہ تک حرام ہے۔' }
    ],
    tips: [
      {
        en: 'Use a trusted barber and a clean blade.',
        ar: 'استخدم حلاقاً موثوقاً وشفرات نظيفة.',
        ur: 'قابل اعتماد حجام اور صاف بلیڈ استعمال کریں۔'
      },
      {
        en: 'Keep your hair clippings tidy; do not leave them in the street.',
        ar: 'اجمع شعرك ولا تتركه في الطريق.',
        ur: 'بالوں کو سنبھالیں، راستے میں نہ چھوڑیں۔'
      }
    ],
    duas: []
  },

  {
    id: 'hajj-ifadah',
    num: 9,
    scene: 'tawaf',
    minutes: 120,
    interactive: 'tawaf',
    title: { en: 'Day 10 — Tawaf al-Ifadah & Sa‘i', ar: 'اليوم العاشر — طواف الإفاضة والسعي', ur: 'دسواں دن — طواف افاضہ اور سعی' },
    kicker: { en: 'The pillar of return', ar: 'ركن الإفاضة', ur: 'افاضہ کا رکن' },
    summary: {
      en: 'Go to Makkah, perform tawaf al-ifadah, then sa‘i if it is still due. This completes your Hajj and releases you fully.',
      ar: 'اذهب إلى مكة، وطف طواف الإفاضة، ثم اسعَ إن بقي عليك سعي. بهذا يتم حجك وتحلّ تحللاً كاملاً.',
      ur: 'مکہ جائیں، طواف افاضہ کریں، پھر اگر سعی باقی ہو تو کریں۔ اس سے حج مکمل اور احرام مکمل طور پر کھل جاتا ہے۔'
    },
    narration: {
      en: 'Travel to the Haram and perform tawaf al-ifadah — seven circuits, beginning and ending at the Black Stone. Pray two rak‘ahs, then perform sa‘i between Safa and Marwa if you are Tamattu‘, or if you have not already performed it. After this, you are fully released from ihram. Return to Mina to continue the days of Tashreeq. If the crowd is heavy, go at a quieter hour and keep your group informed.',
      ar: 'اذهب إلى الحرم وطف طواف الإفاضة: سبعة أشواط تبدأ وتنتهي عند الحجر الأسود. صلِّ ركعتين، ثم اسعَ بين الصفا والمروة إن كنت متمتعاً أو لم تسعَ بعد. بهذا تحلّ تحللاً كاملاً. ارجع إلى منى لتكمل أيام التشريق. وإن كان الزحام شديداً فاذهب في ساعة أهدأ وأخبر مجموعتك.',
      ur: 'حرم جائیں اور طواف افاضہ کریں — سات چکر، آغاز و اختتام حجر اسود سے۔ دو رکعتیں پڑھیں، پھر اگر تمتع والے ہیں یا سعی نہیں کی تو صفا و مروہ کی سعی کریں۔ اس کے بعد احرام مکمل طور پر کھل جاتا ہے۔ ایام تشریق جاری رکھنے کے لیے منیٰ واپس جائیں۔ اگر بہت بھیڑ ہو تو پرسکون وقت میں جائیں اور اپنے گروپ کو بتائیں۔'
    },
    actions: [
      { en: 'Perform tawaf al-ifadah: seven circuits.', ar: 'طف طواف الإفاضة سبعة أشواط.', ur: 'طواف افاضہ کے سات چکر کریں۔' },
      { en: 'Pray two rak‘ahs after the tawaf.', ar: 'صلِّ ركعتين بعد الطواف.', ur: 'طواف کے بعد دو رکعتیں پڑھیں۔' },
      { en: 'Perform sa‘i if it is still due for you.', ar: 'اسعَ إن بقي عليك سعي.', ur: 'اگر سعی باقی ہو تو کریں۔' },
      { en: 'Return to Mina for the days of Tashreeq.', ar: 'ارجع إلى منى لأيام التشريق.', ur: 'ایام تشریق کے لیے منیٰ واپس جائیں۔' }
    ],
    tips: [
      {
        en: 'For Ifrad and Qiran, if you already performed sa‘i with tawaf al-qudum, do not repeat it.',
        ar: 'في الإفراد والقران، إن سعيت مع طواف القدوم فلا تعد السعي.',
        ur: 'افراد اور قران میں اگر طواف قدوم کے ساتھ سعی کر لی ہے تو دوبارہ نہ کریں۔'
      },
      {
        en: 'You may delay tawaf al-ifadah to the 11th or 12th if needed, but do not leave it without a valid reason.',
        ar: 'لك تأخير طواف الإفاضة إلى الحادي عشر أو الثاني عشر عند الحاجة، ولا تتركه بلا عذر.',
        ur: 'ضرورت ہو تو طواف افاضہ ۱۱ یا ۱۲ تاریخ تک مؤخر کر سکتے ہیں، مگر بلا عذر نہ چھوڑیں۔'
      }
    ],
    duas: ['black_stone', 'safa', 'sai_dhikr', 'ifadah_quran'],
    variants: {
      tamattu: { interactive: ['tawaf', 'sai'] },
      ifrad: {
        summary: {
          en: 'Perform tawaf al-ifadah. If you already made sa‘i with tawaf al-qudum, do not repeat it. This completes your Hajj.',
          ar: 'طف طواف الإفاضة. إن سعيت مع طواف القدوم فلا تعد السعي. بهذا يتم حجك.',
          ur: 'طواف افاضہ کریں۔ اگر طواف قدوم کے ساتھ سعی کر لی ہے تو دوبارہ نہ کریں۔ اس سے حج مکمل ہوتا ہے۔'
        }
      },
      qiran: {
        summary: {
          en: 'Perform tawaf al-ifadah. If you already made sa‘i with tawaf al-qudum, do not repeat it. Your Hajj is complete.',
          ar: 'طف طواف الإفاضة. إن سعيت مع طواف القدوم فلا تعد السعي. تم حجك.',
          ur: 'طواف افاضہ کریں۔ اگر طواف قدوم کے ساتھ سعی کر لی ہے تو دوبارہ نہ کریں۔ آپ کا حج مکمل ہوا۔'
        }
      }
    }
  },

  {
    id: 'hajj-tashreeq',
    num: 10,
    scene: 'jamarat',
    minutes: 180,
    title: { en: 'Days 11–13 — The days of Tashreeq', ar: 'الأيام ١١–١٣ — أيام التشريق', ur: 'دن ۱۱–۱۳ — ایام تشریق' },
    kicker: { en: 'Three jamarat, three days', ar: 'ثلاث جمرات وثلاثة أيام', ur: 'تین جمرات، تین دن' },
    summary: {
      en: 'Stay in Mina and stone all three jamarat each day after Dhuhr. You may leave on the 12th after stoning, or stay to the 13th.',
      ar: 'ابقَ بمنى وارمِ الجمرات الثلاث كل يوم بعد الظهر. لك التعجل في الثاني عشر بعد الرمي أو البقاء إلى الثالث عشر.',
      ur: 'منیٰ میں رہیں اور ہر روز ظہر کے بعد تینوں جمرات پر رمی کریں۔ ۱۲ تاریخ کو رمی کے بعد جا سکتے ہیں یا ۱۳ تک رک سکتے ہیں۔'
    },
    narration: {
      en: 'The 11th, 12th and 13th are the days of Tashreeq — days of eating, drinking and remembering Allah. Each day after Dhuhr, stone the small jamarah, then the middle, then the large Aqabah, seven pebbles each, with takbir. Start with the small and do not reverse the order. If you leave Mina on the 12th after stoning, that is permitted; if the sun sets while you are still in Mina, stay for the 13th.',
      ar: 'الحادي عشر والثاني عشر والثالث عشر أيام التشريق: أيام أكل وشرب وذكر الله. كل يوم بعد الظهر ارمِ الجمرة الصغرى ثم الوسطى ثم العقبة الكبرى، سبع حصيات لكل جمرة، مع التكبير. ابدأ بالصغرى ولا تعكس الترتيب. إن تعجلت في الثاني عشر بعد الرمي جاز، وإن غربت الشمس وأنت بمنى فابقَ إلى الثالث عشر.',
      ur: '۱۱، ۱۲ اور ۱۳ ذوالحجہ ایام تشریق ہیں — کھانے، پینے اور اللہ کے ذکر کے دن۔ ہر روز ظہر کے بعد پہلے چھوٹے جمرے، پھر درمیانے، پھر بڑے جمرہ عقبہ پر سات سات کنکریاں ماریں، تکبیر کے ساتھ۔ چھوٹے سے شروع کریں، ترتیب نہ بدلیں۔ ۱۲ تاریخ کو رمی کے بعد روانہ ہونا جائز ہے؛ اگر سورج غروب ہو اور آپ منیٰ میں ہوں تو ۱۳ تک رکیں۔'
    },
    actions: [
      { en: 'Stay in Mina on the 11th and 12th.', ar: 'ابقَ بمنى في الحادي عشر والثاني عشر.', ur: '۱۱ اور ۱۲ تاریخ منیٰ میں رہیں۔' },
      { en: 'After Dhuhr, stone the small, then the middle, then the Aqabah.', ar: 'بعد الظهر ارمِ الصغرى ثم الوسطى ثم العقبة.', ur: 'ظہر کے بعد چھوٹے، پھر درمیانے، پھر عقبہ پر رمی کریں۔' },
      { en: 'Throw seven pebbles at each, saying Allahu Akbar.', ar: 'ارمِ سبع حصيات لكل جمرة مكبّراً.', ur: 'ہر جمرے پر سات کنکریاں، اللہ اکبر کہتے ہوئے۔' },
      { en: 'Leave on the 12th after stoning, or stay for the 13th.', ar: 'تعجّل في الثاني عشر بعد الرمي أو ابقَ للثالث عشر.', ur: '۱۲ کو رمی کے بعد جائیں یا ۱۳ تک رکیں۔' }
    ],
    tips: [
      {
        en: 'Do not fast on the days of Tashreeq.',
        ar: 'لا تصم أيام التشريق.',
        ur: 'ایام تشریق میں روزہ نہ رکھیں۔'
      },
      {
        en: 'If you leave on the 12th, complete your stoning before sunset.',
        ar: 'إن تعجلت في الثاني عشر فأتم الرمي قبل الغروب.',
        ur: '۱۲ کو جانا ہو تو غروب سے پہلے رمی مکمل کریں۔'
      }
    ],
    duas: ['tashreeq_quran']
  },

  {
    id: 'hajj-wada',
    num: 11,
    scene: 'wada',
    minutes: 60,
    title: { en: 'Tawaf al-Wada‘ — the farewell', ar: 'طواف الوداع', ur: 'طواف وداع' },
    kicker: { en: 'The last look', ar: 'النظرة الأخيرة', ur: 'آخری نظر' },
    summary: {
      en: 'Before leaving Makkah, perform the farewell tawaf. It is the last thing you do in the city.',
      ar: 'قبل مغادرة مكة، طف طواف الوداع. يكون آخر ما تفعله في البلد.',
      ur: 'مکہ سے روانگی سے پہلے طواف وداع کریں۔ یہ شہر میں آپ کا آخری عمل ہو۔'
    },
    narration: {
      en: 'When your days in Mina are complete, return to Makkah. Before you leave the city, perform tawaf al-wada‘ — seven circuits without sa‘i — and pray two rak‘ahs. Make it the last thing you do before departure. A menstruating woman is excused from this tawaf. Then leave with gratitude, and ask Allah to accept your Hajj and bring you back.',
      ar: 'إذا أكملت أيام منى، فارجع إلى مكة. قبل مغادرة البلد، طف طواف الوداع: سبعة أشواط بلا سعي، وصلِّ ركعتين. اجعله آخر ما تفعله قبل السفر. والحائض لا يجب عليها طواف الوداع. ثم اخرج شاكراً واسأل الله أن يتقبل حجك ويعيدك.',
      ur: 'منیٰ کے دن مکمل ہوں تو مکہ واپس آئیں۔ شہر چھوڑنے سے پہلے طواف وداع کریں — سات چکر بغیر سعی — اور دو رکعتیں پڑھیں۔ اسے روانگی سے پہلے آخری عمل بنائیں۔ حائضہ عورت اس طواف سے مستثنیٰ ہے۔ پھر شکر کے ساتھ روانہ ہوں اور اللہ سے حج کی قبولیت اور دوبارہ آنے کی دعا کریں۔'
    },
    actions: [
      { en: 'Perform seven circuits of tawaf without sa‘i.', ar: 'طف سبعة أشواط بلا سعي.', ur: 'سات چکر کریں، سعی کے بغیر۔' },
      { en: 'Pray two rak‘ahs and make your final dua.', ar: 'صلِّ ركعتين وادعُ دعاءك الأخير.', ur: 'دو رکعتیں پڑھیں اور آخری دعا کریں۔' },
      { en: 'Leave Makkah with gratitude.', ar: 'اخرج من مكة شاكراً.', ur: 'شکر کے ساتھ مکہ سے روانہ ہوں۔' }
    ],
    tips: [
      {
        en: 'Do not linger in shopping after the farewell tawaf; keep it as your last act in Makkah.',
        ar: 'لا تنشغل بالتسوق بعد طواف الوداع؛ اجعله آخر عملك بمكة.',
        ur: 'طواف وداع کے بعد خریداری میں نہ لگیں؛ اسے مکہ کا آخری عمل رکھیں۔'
      },
      {
        en: 'A menstruating woman is excused from the farewell tawaf and may travel.',
        ar: 'الحائض لا يجب عليها طواف الوداع ولها السفر.',
        ur: 'حائضہ عورت طواف وداع سے مستثنیٰ ہے اور سفر کر سکتی ہے۔'
      }
    ],
    duas: ['acceptance']
  }
];

/* ------------------------------------------------------------------ *
 *  Hajj essentials, checklist, FAQ and sources
 * ------------------------------------------------------------------ */

export const HAJJ_PILLARS = [
  {
    title: { en: 'Ihram', ar: 'الإحرام', ur: 'احرام' },
    text: {
      en: 'The sacred state and the intention. It begins at the miqat and shapes the whole journey.',
      ar: 'حالة التعبد والنية. تبدأ عند الميقات وتشكّل الرحلة كلها.',
      ur: 'مقدس حالت اور نیت۔ یہ میقات سے شروع ہو کر پورے سفر کو تشکیل دیتی ہے۔'
    }
  },
  {
    title: { en: 'Wuquf at Arafah', ar: 'الوقوف بعرفة', ur: 'عرفہ میں وقوف' },
    text: {
      en: 'Standing at Arafah between Dhuhr and sunset on the 9th. Without it, there is no Hajj.',
      ar: 'الوقوف بعرفة بين الظهر والغروب يوم التاسع. من فاته فلا حج له.',
      ur: 'نویں تاریخ کو ظہر سے غروب تک عرفہ میں کھڑا ہونا۔ اس کے بغیر حج نہیں۔'
    }
  },
  {
    title: { en: 'Tawaf al-Ifadah', ar: 'طواف الإفاضة', ur: 'طواف افاضہ' },
    text: {
      en: 'The obligatory tawaf of Hajj, performed after the standing and the release from ihram.',
      ar: 'طواف الحج الواجب، يؤدى بعد الوقوف والتحلل.',
      ur: 'حج کا واجب طواف، وقوف اور احرام کھلنے کے بعد ادا ہوتا ہے۔'
    }
  },
  {
    title: { en: 'Sa‘i', ar: 'السعي', ur: 'سعی' },
    text: {
      en: 'Seven trips between Safa and Marwa. Tamattu‘ pilgrims perform it after tawaf al-ifadah.',
      ar: 'سبعة أشواط بين الصفا والمروة. يؤديه المتمتع بعد طواف الإفاضة.',
      ur: 'صفا و مروہ کے درمیان سات چکر۔ تمتع والے طواف افاضہ کے بعد کرتے ہیں۔'
    }
  }
];

export const HAJJ_CHECKLIST = [
  {
    title: { en: 'Documents & health', ar: 'الوثائق والصحة', ur: 'دستاویزات اور صحت' },
    items: [
      { id: 'hajj-passport', text: { en: 'Passport, Hajj visa and Nusuk permit, with copies.', ar: 'الجواز وتأشيرة الحج وتصريح نسك، مع نسخ.', ur: 'پاسپورٹ، حج ویزا اور نسک اجازت، نقول کے ساتھ۔' } },
      { id: 'hajj-vaccine', text: { en: 'Vaccination record and any prescribed medication.', ar: 'شهادة التطعيم وأي دواء موصوف.', ur: 'ویکسینیشن ریکارڈ اور تجویز کردہ ادویات۔' } },
      { id: 'hajj-insurance', text: { en: 'Travel insurance and emergency contacts written down.', ar: 'تأمين السفر وأرقام الطوارئ مكتوبة.', ur: 'ٹریول انشورنس اور ہنگامی نمبر لکھے ہوئے۔' } }
    ]
  },
  {
    title: { en: 'Ihram & clothing', ar: 'الإحرام واللباس', ur: 'احرام اور لباس' },
    items: [
      { id: 'hajj-sheets', text: { en: 'Two unstitched white sheets and a spare set.', ar: 'إزار ورداء أبيضان وطقم احتياطي.', ur: 'دو بغیر سلی سفید چادریں اور ایک اضافی جوڑا۔' } },
      { id: 'hajj-unscented', text: { en: 'Unscented soap, shampoo and toiletries.', ar: 'صابون وشامبو ومستلزمات بلا عطر.', ur: 'بغیر خوشبو والا صابن، شیمپو اور سامان۔' } },
      { id: 'hajj-shoes', text: { en: 'Comfortable sandals and a small bag for shoes.', ar: 'نعل مريح وكيس صغير للحذاء.', ur: 'آرام دہ سینڈل اور جوتوں کے لیے چھوٹا بیگ۔' } },
      { id: 'hajj-belt', text: { en: 'Money belt or secure pouch for documents and cash.', ar: 'حزام نقود أو حافظة آمنة للوثائق.', ur: 'پیسوں کی بیلٹ یا دستاویزات کے لیے محفوظ تھیلا۔' } }
    ]
  },
  {
    title: { en: 'Mina, Arafah & Muzdalifah', ar: 'منى وعرفة والمزدلفة', ur: 'منیٰ، عرفہ اور مزدلفہ' },
    items: [
      { id: 'hajj-mat', text: { en: 'Light sleeping mat and small pillow.', ar: 'فراش خفيف ووسادة صغيرة.', ur: 'ہلکی سلیپنگ میٹ اور چھوٹا تکیہ۔' } },
      { id: 'hajj-blanket', text: { en: 'Light blanket or shawl for the night.', ar: 'بطانية خفيفة أو شال لليل.', ur: 'رات کے لیے ہلکی کمبل یا شال۔' } },
      { id: 'hajj-water', text: { en: 'Refillable water bottle and oral rehydration salts.', ar: 'قارورة ماء وأملاح الإماهة.', ur: 'دوبارہ بھرنے والی پانی کی بوتل اور ORS۔' } },
      { id: 'hajj-power', text: { en: 'Power bank, charger and a small torch.', ar: 'بطارية متنقلة وشاحن ومصباح صغير.', ur: 'پاور بینک، چارجر اور چھوٹی ٹارچ۔' } },
      { id: 'hajj-snacks', text: { en: 'Simple snacks, wet wipes and tissues.', ar: 'وجبات خفيفة ومناديل مبللة.', ur: 'ہلکے اسنیکس، ویٹ وائپس اور ٹشو۔' } }
    ]
  },
  {
    title: { en: 'Rites & sacrifice', ar: 'المناسك والهدي', ur: 'اعمال اور قربانی' },
    items: [
      { id: 'hajj-pebbles', text: { en: 'Small pouch for pebbles (49 or 70).', ar: 'كيس صغير للحصى (٤٩ أو ٧٠).', ur: 'کنکریوں کے لیے چھوٹا تھیلا (۴۹ یا ۷۰)۔' } },
      { id: 'hajj-voucher', text: { en: 'Sacrifice voucher or payment arranged in advance.', ar: 'قسيمة الهدي أو ترتيب الدفع مسبقاً.', ur: 'قربانی کا واؤچر یا ادائیگی پہلے سے طے۔' } },
      { id: 'hajj-bracelet', text: { en: 'Group wristband with tent and bus numbers.', ar: 'سوار مع رقم الخيمة والحافلة.', ur: 'گروپ کی کلائی پٹی، خیمہ اور بس نمبر کے ساتھ۔' } }
    ]
  },
  {
    title: { en: 'Heart & knowledge', ar: 'القلب والعلم', ur: 'دل اور علم' },
    items: [
      { id: 'hajj-talbiyah', text: { en: 'Memorise the Talbiyah and the order of the 10th.', ar: 'احفظ التلبية وترتيب أعمال العاشر.', ur: 'تلبیہ اور دس تاریخ کے اعمال کی ترتیب یاد کریں۔' } },
      { id: 'hajj-duas', text: { en: 'Write your dua list and seek forgiveness before you travel.', ar: 'اكتب قائمة دعائك واستغفر قبل السفر.', ur: 'دعاؤں کی فہرست لکھیں اور سفر سے پہلے مغفرت مانگیں۔' } },
      { id: 'hajj-debts', text: { en: 'Settle debts and reconcile with family.', ar: 'اقضِ الديون وصالح أهلك.', ur: 'قرض ادا کریں اور گھر والوں سے صلح کریں۔' } }
    ]
  }
];

export const HAJJ_FAQ = [
  {
    q: { en: 'Which type of Hajj should I choose?', ar: 'أي أنواع الحج أختار؟', ur: 'مجھے کون سا نسک اختیار کرنا چاہیے؟' },
    a: {
      en: 'Most pilgrims travelling from outside Makkah perform Tamattu‘. Ifrad suits those living in Makkah or intending Hajj only. Qiran suits those bringing a sacrifice and combining both rites. Ask your group leader or a scholar before the miqat, because the choice affects the sacrifice and the order of the rites.',
      ar: 'أكثر القادمين من خارج مكة يتمتعون. والإفراد لمن يقصد الحج فقط أو يقيم بمكة. والقران لمن يسوق الهدي ويجمع النسكين. اسأل قائد الحملة أو عالماً قبل الميقات؛ فالاختيار يؤثر في الهدي وترتيب الأعمال.',
      ur: 'مکہ سے باہر سے آنے والے زیادہ تر تمتع کرتے ہیں۔ افراد ان کے لیے ہے جو صرف حج کا ارادہ رکھیں یا مکہ میں رہتے ہوں۔ قران ان کے لیے جو قربانی ساتھ لائیں اور دونوں نسک جمع کریں۔ میقات سے پہلے گروپ لیڈر یا عالم سے پوچھیں، کیونکہ اس سے قربانی اور اعمال کی ترتیب متاثر ہوتی ہے۔'
    }
  },
  {
    q: { en: 'What if I miss the standing at Arafah?', ar: 'ماذا لو فاتني الوقوف بعرفة؟', ur: 'اگر عرفہ کا وقوف رہ جائے تو؟' },
    a: {
      en: 'Wuquf at Arafah is the pillar without which Hajj is not valid. If you arrive after Fajr on the 10th, the standing has passed and you must make up the Hajj in a later year. If you were present at any part of the 9th, even briefly, you have attended. Consult a scholar immediately if you are unsure.',
      ar: 'الوقوف بعرفة ركن لا يصح الحج بدونه. من وصل بعد فجر العاشر فقد فاته الوقوف وعليه الحج من قابل. ومن حضر أي جزء من التاسع ولو يسيراً فقد أدرك. استشر عالماً فوراً إن شككت.',
      ur: 'عرفہ کا وقوف ایسا رکن ہے جس کے بغیر حج درست نہیں۔ جو دسویں کی فجر کے بعد پہنچے، اس کا وقوف رہ گیا اور اسے آئندہ سال حج کرنا ہوگا۔ جو نویں تاریخ کے کسی حصے میں، اگرچہ تھوڑی دیر، موجود رہا، اس نے وقوف پا لیا۔ شک ہو تو فوراً عالم سے رجوع کریں۔'
    }
  },
  {
    q: { en: 'Can I leave Mina on the 12th?', ar: 'هل يجوز التعجل في الثاني عشر؟', ur: 'کیا ۱۲ تاریخ کو منیٰ سے جا سکتے ہیں؟' },
    a: {
      en: 'Yes. After stoning on the 12th you may leave before sunset — this is the “hastening” permitted in Qur’an 2:203. If the sun sets while you are still in Mina, you must stay and stone again on the 13th.',
      ar: 'نعم. بعد رمي الثاني عشر يجوز الانصراف قبل الغروب، وهو التعجل المذكور في قوله تعالى: {فمن تعجل في يومين}. وإن غربت الشمس وأنت بمنى وجب البقاء والرمي في الثالث عشر.',
      ur: 'جی ہاں۔ ۱۲ تاریخ کو رمی کے بعد غروب سے پہلے جا سکتے ہیں — یہی قرآن ۲:۲۰۳ میں بیان کردہ تعجل ہے۔ اگر سورج غروب ہو اور آپ منیٰ میں ہوں تو ۱۳ تاریخ تک رکنا اور دوبارہ رمی کرنا لازم ہے۔'
    }
  },
  {
    q: { en: 'I mixed up the order on the 10th — is my Hajj valid?', ar: 'أخطأت في ترتيب أعمال العاشر، فهل حجي صحيح؟', ur: 'دسویں تاریخ کے اعمال کی ترتیب بگڑ گئی، کیا حج درست ہے؟' },
    a: {
      en: 'In most cases, yes. The Prophet ﷺ was asked about doing one rite before another on the Day of Sacrifice and replied, “There is no harm.” If you are unsure about a specific case, ask a scholar. Do not panic or repeat a rite unnecessarily.',
      ar: 'في الغالب نعم. سُئل النبي ﷺ يوم النحر عن تقديم عمل على عمل فقال: «لا حرج». وإن شككت في مسألة معينة فاسأل عالماً، ولا تتشدد بلا علم.',
      ur: 'زیادہ تر صورتوں میں ہاں۔ نبی ﷺ سے یوم نحر پر ایک عمل دوسرے سے پہلے کرنے کے بارے میں پوچھا گیا تو فرمایا: ”کوئی حرج نہیں۔“ خاص مسئلے میں شک ہو تو عالم سے پوچھیں، بلا علم تکرار نہ کریں۔'
    }
  },
  {
    q: { en: 'Can someone stone or sacrifice on my behalf?', ar: 'هل يجوز أن يرمي أو يهدي عني غيري؟', ur: 'کیا کوئی میری طرف سے رمی یا قربانی کر سکتا ہے؟' },
    a: {
      en: 'A sacrifice may be delegated, and many pilgrims use an official voucher. Stoning may be delegated for the sick, the elderly, a child, or a pregnant woman who cannot reach the Jamarat safely. Do your own rites first where possible, and follow the ruling of your school.',
      ar: 'يجوز التوكيل في الهدي، ويستخدم كثير من الحجاج القسيمة الرسمية. ويجوز التوكيل في الرمي للمريض والكبير والطفل والحامل التي لا تستطيع الوصول بأمان. ابدأ بأعمالك ثم وكّل، واتبع مذهبك.',
      ur: 'قربانی میں وكالت جائز ہے، اور بہت سے حاجی سرکاری واؤچر استعمال کرتے ہیں۔ رمی میں وكالت بیمار، بزرگ، بچے یا حاملہ عورت کے لیے جائز ہے جو محفوظ طریقے سے جمرات تک نہ پہنچ سکے۔ ممکن ہو تو پہلے اپنے اعمال کریں، پھر وكیل کریں، اور اپنے مذہب کی رائے پر عمل کریں۔'
    }
  },
  {
    q: { en: 'Can a menstruating woman perform Hajj?', ar: 'هل تحج الحائض؟', ur: 'کیا حائضہ عورت حج کر سکتی ہے؟' },
    a: {
      en: 'Yes. She enters ihram, performs all the rites, and delays tawaf al-ifadah until she is pure. She is excused from tawaf al-wada‘ and may travel. Consult a scholar for your specific situation.',
      ar: 'نعم. تحرم وتؤدي المناسك، وتؤخر طواف الإفاضة حتى تطهر، وتسقط عنها طواف الوداع ولها السفر. استشيري عالماً لحالتك.',
      ur: 'جی ہاں۔ وہ احرام باندھتی ہے، تمام اعمال کرتی ہے، اور طواف افاضہ پاک ہونے تک مؤخر کرتی ہے۔ طواف وداع سے مستثنیٰ ہے اور سفر کر سکتی ہے۔ اپنی صورتِ حال کے لیے عالم سے رجوع کریں۔'
    }
  }
];

export const HAJJ_SOURCES = [
  { title: { en: 'The obligation of Hajj', ar: 'وجوب الحج', ur: 'حج کی فرضیت' }, ref: 'Qur’an 3:97', url: 'https://quran.com/3/97' },
  { title: { en: 'Completing Hajj and Umrah', ar: 'إتمام الحج والعمرة', ur: 'حج اور عمرہ مکمل کرنا' }, ref: 'Qur’an 2:196', url: 'https://quran.com/2/196' },
  { title: { en: 'Arafah and Muzdalifah', ar: 'عرفة والمزدلفة', ur: 'عرفہ اور مزدلفہ' }, ref: 'Qur’an 2:198–199', url: 'https://quran.com/2/198-199' },
  { title: { en: 'The numbered days and hastening', ar: 'الأيام المعدودات والتعجل', ur: 'گنے ہوئے دن اور تعجل' }, ref: 'Qur’an 2:203', url: 'https://quran.com/2/203' },
  { title: { en: 'The rites of Hajj and the sacrifice', ar: 'مناسك الحج والهدي', ur: 'حج کے اعمال اور قربانی' }, ref: 'Qur’an 22:27–29', url: 'https://quran.com/22/27-29' },
  { title: { en: '“Hajj is Arafah”', ar: '«الحج عرفة»', ur: '”حج عرفہ ہے“' }, ref: 'Jami‘ at-Tirmidhi 889', url: 'https://sunnah.com/tirmidhi:889' },
  { title: { en: 'The best dua of Arafah', ar: 'أفضل دعاء عرفة', ur: 'عرفہ کی بہترین دعا' }, ref: 'Jami‘ at-Tirmidhi 3585', url: 'https://sunnah.com/tirmidhi:3585' },
  { title: { en: 'The days of Tashreeq', ar: 'أيام التشريق', ur: 'ایام تشریق' }, ref: 'Sahih Muslim 1141', url: 'https://sunnah.com/muslim:1141' },
  { title: { en: 'Order of the rites on the 10th', ar: 'ترتيب أعمال العاشر', ur: 'دسویں تاریخ کے اعمال کی ترتیب' }, ref: 'Sahih al-Bukhari 1722', url: 'https://sunnah.com/bukhari:1722' },
  { title: { en: 'Shaving and trimming', ar: 'الحلق والتقصير', ur: 'حلق اور قصر' }, ref: 'Sahih al-Bukhari 1727', url: 'https://sunnah.com/bukhari:1727' },
  { title: { en: 'The farewell tawaf', ar: 'طواف الوداع', ur: 'طواف وداع' }, ref: 'Sahih al-Bukhari 1755', url: 'https://sunnah.com/bukhari:1755' },
  { title: { en: 'No one leaves before the farewell tawaf', ar: 'لا ينفر أحد قبل طواف الوداع', ur: 'طواف وداع سے پہلے کوئی نہ جائے' }, ref: 'Sahih Muslim 1327', url: 'https://sunnah.com/muslim:1327' },
  { title: { en: 'Allah frees the most on Arafah', ar: 'أكثر يوم يعتق الله فيه من النار', ur: 'عرفہ کے دن اللہ سب سے زیادہ آزاد کرتا ہے' }, ref: 'Sahih Muslim 1348', url: 'https://sunnah.com/muslim:1348' }
];
