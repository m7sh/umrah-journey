/* ------------------------------------------------------------------ *
 *  Umrah Journey — content
 *  Arabic/English/Urdu. Hadith references link to sunnah.com.
 *  Treat this file as the single source of truth for all site content.
 * ------------------------------------------------------------------ */

export const META = {
  name: { en: 'Umrah', ar: 'العمرة', ur: 'عمرہ' },
  brand: { en: 'Umrah Journey', ar: 'رحلة العمرة', ur: 'عمرہ کا سفر' },
  tagline: {
    en: 'A step-by-step walkthrough for the pilgrim’s heart',
    ar: 'دليل خطوة بخطوة لقلب الحاج',
    ur: 'حاجی کے دل کے لیے قدم بہ قدم رہنمائی'
  },
  heroTitle: {
    en: 'Walk the path of the pilgrim.',
    ar: 'اسلك طريق الحاج.',
    ur: 'حاجی کے راستے پر چلیں۔'
  },
  heroLead: {
    en: 'From the first intention at the miqat to the final haircut — every rite, every dua, every detail, explained gently and authentically.',
    ar: 'من أول نية عند الميقات إلى الحلق — كل منسك، وكل دعاء، وكل تفصيل، ببيان رحيم وأصيل.',
    ur: 'میقات پر پہلی نیت سے لے کر حلق تک — ہر رکن، ہر دعا، ہر تفصیل، نرمی اور اصلیت کے ساتھ۔'
  },
  startJourney: { en: 'Begin the journey', ar: 'ابدأ الرحلة', ur: 'سفر شروع کریں' },
  resumeJourney: { en: 'Continue your journey', ar: 'أكمل رحلتك', ur: 'اپنا سفر جاری رکھیں' },
  browseDuas: { en: 'Browse the duas', ar: 'تصفح الأدعية', ur: 'دعائیں دیکھیں' },
  visitors: { en: 'pilgrims have visited', ar: 'زائراً زاروا الموقع', ur: 'زائرین نے دورہ کیا' },
  countries: { en: 'countries reached', ar: 'دولة وصلها الموقع', ur: 'ممالک تک پہنچا' }
};

/* ------------------------------------------------------------------ *
 *  Duas
 * ------------------------------------------------------------------ */

export const DUAS = {
  talbiyah: {
    id: 'talbiyah',
    label: { en: 'The Talbiyah', ar: 'التلبية', ur: 'تلبیہ' },
    ar: 'لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَكَ',
    tr: 'Labbayk Allāhumma labbayk, labbayka lā sharīka laka labbayk, inna l-ḥamda wa-n-niʿmata laka wa-l-mulk, lā sharīka lak.',
    en: 'Here I am, O Allah, here I am. Here I am; You have no partner, here I am. Indeed all praise, grace and sovereignty belong to You. You have no partner.',
    ur: 'حاضر ہوں اے اللہ! میں حاضر ہوں، حاضر ہوں، تیرا کوئی شریک نہیں، میں حاضر ہوں۔ بیشک تمام تعریفیں، نعمتیں اور بادشاہت تیری ہی ہے، تیرا کوئی شریک نہیں۔',
    ref: 'Sahih Muslim 1184a',
    url: 'https://sunnah.com/muslim:1184a',
    grade: { en: 'Sahih', ar: 'صحيح', ur: 'صحیح' },
    note: {
      en: 'This is the Talbiyah of the Prophet ﷺ. Recite it from the miqat until you begin Tawaf.',
      ar: 'هذه تلبية النبي ﷺ. تُقال من الميقات حتى تبدأ الطواف.',
      ur: 'یہ نبی ﷺ کا تلبیہ ہے۔ میقات سے طواف شروع کرنے تک پڑھیں۔'
    }
  },

  travel: {
    id: 'travel',
    label: { en: 'Dua for travel', ar: 'دعاء السفر', ur: 'سفر کی دعا' },
    ar: 'سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ، وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ',
    tr: 'Subḥān alladhī sakhkhara lanā hādhā wa mā kunnā lahu muqrinīn, wa innā ilā rabbinā lamunqalibūn.',
    en: 'Glory be to the One who has subjected this to us, though we could not have subdued it. And indeed, to our Lord we will return.',
    ur: 'پاک ہے وہ ذات جس نے یہ سواری ہمارے تابع کی، ورنہ ہم اسے قابو نہیں کر سکتے تھے، اور بیشک ہم اپنے رب کی طرف لوٹنے والے ہیں۔',
    ref: 'Qur’an 43:13–14',
    url: 'https://quran.com/43/13-14',
    grade: { en: 'Qur’an', ar: 'قرآن', ur: 'قرآن' },
    note: {
      en: 'Recited when boarding a plane, bus or car on the way to Umrah.',
      ar: 'تُقال عند ركوب الطائرة أو الحافلة أو السيارة في طريق العمرة.',
      ur: 'عمرہ کے سفر میں ہوائی جہاز، بس یا گاڑی پر سوار ہوتے وقت پڑھیں۔'
    }
  },

  enter_mosque: {
    id: 'enter_mosque',
    label: { en: 'Entering the mosque', ar: 'دعاء دخول المسجد', ur: 'مسجد میں داخلے کی دعا' },
    ar: 'اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ',
    tr: 'Allāhumma-ftaḥ lī abwāba raḥmatik.',
    en: 'O Allah, open for me the doors of Your mercy.',
    ur: 'اے اللہ! میرے لیے اپنی رحمت کے دروازے کھول دے۔',
    ref: 'Sahih Muslim 713',
    url: 'https://sunnah.com/muslim:713',
    grade: { en: 'Sahih', ar: 'صحيح', ur: 'صحیح' },
    note: {
      en: 'Enter with your right foot. A blessing on the Prophet ﷺ may also be sent.',
      ar: 'ادخل بالقدم اليمنى، ويُسنّ الصلاة على النبي ﷺ.',
      ur: 'دایاں قدم پہلے رکھیں، اور نبی ﷺ پر درود بھیجیں۔'
    }
  },

  black_stone: {
    id: 'black_stone',
    label: { en: 'At the Black Stone', ar: 'عند الحجر الأسود', ur: 'حجر اسود کے پاس' },
    ar: 'بِسْمِ اللَّهِ وَاللَّهُ أَكْبَرُ',
    tr: 'Bismillāh, wallāhu akbar.',
    en: 'In the name of Allah, and Allah is the Greatest.',
    ur: 'اللہ کے نام سے، اور اللہ سب سے بڑا ہے۔',
    ref: 'Sahih al-Bukhari 1613',
    url: 'https://sunnah.com/bukhari:1613',
    grade: { en: 'Sahih', ar: 'صحيح', ur: 'صحیح' },
    note: {
      en: 'The Prophet ﷺ said the takbir each time he passed the corner. If you cannot reach the Stone, point towards it and say this.',
      ar: 'كان النبي ﷺ يكبر كلما أتى الركن. وإن لم تستطع استلامه فأشر إليه وقل هذا.',
      ur: 'نبی ﷺ جب بھی رکن کے پاس آتے تکبیر کہتے۔ اگر چھو نہ سکیں تو اشارہ کریں اور یہی کہیں۔'
    }
  },

  between_corners: {
    id: 'between_corners',
    label: { en: 'Between the two corners', ar: 'بين الركنين', ur: 'دو رکنوں کے درمیان' },
    ar: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
    tr: 'Rabbanā ātinā fī d-dunyā ḥasanah wa fī l-ākhirati ḥasanah wa qinā ʿadhāba n-nār.',
    en: 'Our Lord, give us good in this world and good in the Hereafter, and protect us from the punishment of the Fire.',
    ur: 'اے ہمارے رب! ہمیں دنیا میں بھلائی اور آخرت میں بھلائی عطا فرما، اور ہمیں آگ کے عذاب سے بچا۔',
    ref: 'Qur’an 2:201 · Sunan Abi Dawud 1892',
    url: 'https://sunnah.com/abudawud:1892',
    grade: { en: 'Hasan (Al-Albani)', ar: 'حسن (الألباني)', ur: 'حسن (البانی)' },
    note: {
      en: 'Recite between the Yemeni corner and the Black Stone. This is the most emphasized dua of Tawaf.',
      ar: 'تُقال بين الركن اليماني والحجر الأسود، وهي آكد دعاء في الطواف.',
      ur: 'رکن یمانی اور حجر اسود کے درمیان پڑھیں۔ یہ طواف کی سب سے اہم دعا ہے۔'
    }
  },

  maqam: {
    id: 'maqam',
    label: { en: 'At Maqam Ibrahim', ar: 'عند مقام إبراهيم', ur: 'مقام ابراہیم پر' },
    ar: 'وَاتَّخِذُوا مِنْ مَقَامِ إِبْرَاهِيمَ مُصَلًّى',
    tr: 'Wa-ttakhidhū min maqāmi Ibrāhīma muṣallā.',
    en: 'And take the station of Ibrahim as a place of prayer.',
    ur: 'اور مقام ابراہیم کو نماز کی جگہ بنا لو۔',
    ref: 'Qur’an 2:125 · Sahih Muslim 1218a',
    url: 'https://sunnah.com/muslim:1218a',
    grade: { en: 'Qur’an', ar: 'قرآن', ur: 'قرآن' },
    note: {
      en: 'Pray two rak’ahs, reciting Surah al-Kafirun in the first and Surah al-Ikhlas in the second.',
      ar: 'صلِّ ركعتين، تقرأ في الأولى سورة الكافرون وفي الثانية سورة الإخلاص.',
      ur: 'دو رکعتیں پڑھیں، پہلی میں سورۃ الکافرون اور دوسری میں سورۃ الاخلاص۔'
    }
  },

  zamzam: {
    id: 'zamzam',
    label: { en: 'Drinking Zamzam', ar: 'دعاء شرب زمزم', ur: 'زمزم پیتے وقت' },
    ar: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا وَاسِعًا، وَشِفَاءً مِنْ كُلِّ دَاءٍ',
    tr: 'Allāhumma innī as’aluka ʿilman nāfiʿan, wa rizqan wāsiʿan, wa shifāʾan min kulli dāʾ.',
    en: 'O Allah, I ask You for beneficial knowledge, abundant provision, and healing from every illness.',
    ur: 'اے اللہ! میں تجھ سے نفع بخش علم، فراخ رزق اور ہر بیماری سے شفا مانگتا ہوں۔',
    ref: 'Reported from Ibn ‘Abbas · Sunan Ibn Majah 3062',
    url: 'https://sunnah.com/ibnmajah:3062',
    grade: { en: 'Athar (Companion report)', ar: 'أثر عن الصحابي', ur: 'صحابی کا قول' },
    note: {
      en: 'This wording is reported from Ibn ‘Abbas (رضي الله عنه), not as a Prophetic hadith. The Prophet ﷺ did say: “Zamzam is for whatever it is drunk for.”',
      ar: 'هذا اللفظ مروي عن ابن عباس رضي الله عنه، وليس حديثاً نبوياً. وقد قال النبي ﷺ: «ماء زمزم لما شُرب له».',
      ur: 'یہ الفاظ ابن عباس رضی اللہ عنہ سے مروی ہیں، نبی ﷺ کا فرمان نہیں۔ نبی ﷺ نے فرمایا: ”زمزم جس نیت سے پیا جائے اسی کے لیے ہے۔“'
    }
  },

  safa: {
    id: 'safa',
    label: { en: 'At Safa and Marwa', ar: 'على الصفا والمروة', ur: 'صفا و مروہ پر' },
    ar: 'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ، أَنْجَزَ وَعْدَهُ، وَنَصَرَ عَبْدَهُ، وَهَزَمَ الْأَحْزَابَ وَحْدَهُ',
    tr: 'Lā ilāha illā Allāhu waḥdahu lā sharīka lah, lahu l-mulku wa lahu l-ḥamdu wa huwa ʿalā kulli shayʾin qadīr. Lā ilāha illā Allāhu waḥdah, anjaza waʿdah, wa naṣara ʿabdah, wa hazama l-aḥzāba waḥdah.',
    en: 'There is no god but Allah alone, with no partner. His is the dominion, His is all praise, and He is capable of all things. There is no god but Allah alone: He fulfilled His promise, helped His servant, and defeated the confederates alone.',
    ur: 'اللہ کے سوا کوئی معبود نہیں، وہ اکیلا ہے، اس کا کوئی شریک نہیں۔ اسی کی بادشاہت اور اسی کی تعریف ہے، اور وہ ہر چیز پر قادر ہے۔ اللہ کے سوا کوئی معبود نہیں، اکیلا ہی نے اپنا وعدہ پورا کیا، اپنے بندے کی مدد کی اور اکیلے ہی لشکروں کو شکست دی۔',
    ref: 'Sahih Muslim 1218a',
    url: 'https://sunnah.com/muslim:1218a',
    grade: { en: 'Sahih', ar: 'صحيح', ur: 'صحیح' },
    note: {
      en: 'Recite three times, making your own dua in between. Before climbing Safa, recite: “Indeed, Safa and Marwa are among the symbols of Allah” (2:158) and “I begin with what Allah began with.”',
      ar: 'تُقال ثلاث مرات، وتدعو بينها. وقبل الصعود على الصفا اقرأ: ﴿إِنَّ الصَّفَا وَالْمَرْوَةَ مِن شَعَائِرِ اللَّهِ﴾ وقل: «أبدأ بما بدأ الله به».',
      ur: 'تین بار پڑھیں اور درمیان میں اپنی دعا کریں۔ صفا پر چڑھنے سے پہلے پڑھیں: ”بیشک صفا اور مروہ اللہ کی نشانیوں میں سے ہیں“ اور کہیں: ”میں اسی سے شروع کرتا ہوں جس سے اللہ نے شروع کیا۔“'
    }
  },

  sai_dhikr: {
    id: 'sai_dhikr',
    label: { en: 'During Sa‘i', ar: 'دعاء السعي', ur: 'سعی کے دوران' },
    ar: 'رَبِّ اغْفِرْ وَارْحَمْ، إِنَّكَ أَنْتَ الْأَعَزُّ الْأَكْرَمُ',
    tr: 'Rabbi-ghfir wa-rḥam, innaka anta l-aʿazzu l-akram.',
    en: 'My Lord, forgive and have mercy, for You are the Most Mighty, the Most Generous.',
    ur: 'اے میرے رب! بخش دے اور رحم فرما، بیشک تو سب سے زیادہ عزت والا اور سب سے زیادہ کرم والا ہے۔',
    ref: 'Reported from Ibn Mas‘ud',
    url: 'https://sunnah.com/',
    grade: { en: 'Athar (Companion report)', ar: 'أثر عن الصحابي', ur: 'صحابی کا قول' },
    note: {
      en: 'There is no fixed Prophetic dua for every step of Sa‘i. Remember Allah, recite Qur’an, and ask for what you need. This wording is reported from Ibn Mas‘ud (رضي الله عنه).',
      ar: 'لا يوجد دعاء نبوي مخصوص لكل خطوة في السعي. اذكر الله واقرأ القرآن واسأل حاجتك. وهذا اللفظ مروي عن ابن مسعود رضي الله عنه.',
      ur: 'سعی کے ہر قدم کے لیے کوئی مخصوص نبوی دعا نہیں۔ اللہ کا ذکر کریں، قرآن پڑھیں اور اپنی ضرورت مانگیں۔ یہ الفاظ ابن مسعود رضی اللہ عنہ سے مروی ہیں۔'
    }
  },

  acceptance: {
    id: 'acceptance',
    label: { en: 'Dua for acceptance', ar: 'دعاء القبول', ur: 'قبولیت کی دعا' },
    ar: 'اللَّهُمَّ تَقَبَّلْ مِنَّا، إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ',
    tr: 'Allāhumma taqabbal minnā, innaka anta s-samīʿu l-ʿalīm.',
    en: 'O Allah, accept this from us. Indeed, You are the All-Hearing, the All-Knowing.',
    ur: 'اے اللہ! ہم سے قبول فرما، بیشک تو سب کچھ سننے والا اور جاننے والا ہے۔',
    ref: 'Qur’an 2:127',
    url: 'https://quran.com/2/127',
    grade: { en: 'Qur’an', ar: 'قرآن', ur: 'قرآن' },
    note: {
      en: 'The words of Ibrahim and Isma‘il when they raised the foundations of the Ka‘bah. End your Umrah with gratitude and this supplication.',
      ar: 'دعاء إبراهيم وإسماعيل حين رفعا قواعد البيت. اختم عمرتك بالحمد وهذا الدعاء.',
      ur: 'ابراہیم اور اسماعیل علیہما السلام کی دعا جب وہ بیت اللہ کی بنیادیں اٹھا رہے تھے۔ اپنا عمرہ شکر اور اس دعا کے ساتھ ختم کریں۔'
    }
  }
};

/* ------------------------------------------------------------------ *
 *  The eight steps
 * ------------------------------------------------------------------ */

export const STEPS = [
  {
    id: 'ihram',
    num: 1,
    scene: 'miqat',
    minutes: 20,
    title: { en: 'Niyyah & Ihram at the Miqat', ar: 'الإحرام من الميقات', ur: 'میقات پر احرام' },
    kicker: { en: 'The sacred beginning', ar: 'البداية المباركة', ur: 'مقدس آغاز' },
    summary: {
      en: 'At the miqat, cleanse yourself, wear ihram, and make the intention in your heart. From this moment, the restrictions of ihram begin.',
      ar: 'عند الميقات، تطهّر والبس الإحرام وانْوِ العمرة بقلبك. ومن هذه اللحظة تبدأ محظورات الإحرام.',
      ur: 'میقات پر خود کو پاک کریں، احرام پہنیں اور دل میں نیت کریں۔ اسی لمحے سے احرام کی پابندیاں شروع ہو جاتی ہیں۔'
    },
    narration: {
      en: 'Before you cross the miqat, prepare yourself. Men wear two unstitched white sheets; women wear modest, loose clothing with the face and hands uncovered. Trim your nails, remove unwanted hair, bathe if you can, and leave behind perfume and scented products. Then, at the miqat, make the intention for Umrah in your heart and begin the Talbiyah. The intention is an act of the heart; saying it aloud is not required.',
      ar: 'قبل أن تصل إلى الميقات، تطهّر واغتسل إن استطعت، وقلّم أظفارك، وتجنّب الطيب. يلبس الرجل إزاراً ورداءً أبيضين غير مخيطين، وتلبس المرأة ثياباً فضفاضة ساترة مع كشف الوجه والكفين. ثم انوِ العمرة بقلبك عند الميقات وابدأ التلبية. النية عمل القلب، ولا يُشترط النطق بها.',
      ur: 'میقات پر پہنچنے سے پہلے خود کو تیار کریں۔ مرد دو بغیر سلی ہوئی سفید چادریں پہنیں، اور خواتین ڈھیلے پردے والے کپڑے پہنیں، چہرہ اور ہاتھ کھلے رکھیں۔ ناخن تراشیں، غیر ضروری بال صاف کریں، ممکن ہو تو غسل کریں، اور خوشبو سے دور رہیں۔ پھر میقات پر دل میں عمرہ کی نیت کریں اور تلبیہ شروع کریں۔ نیت دل کا عمل ہے، اسے زبان سے کہنا ضروری نہیں۔'
    },
    actions: [
      { en: 'Bathe or perform wudu, trim your nails, and remove all scent.', ar: 'اغتسل أو توضأ، وقلّم أظفارك، وأزل الطيب.', ur: 'غسل کریں یا وضو کریں، ناخن تراشیں اور خوشبو دور کریں۔' },
      { en: 'Men: two unstitched white sheets. Women: modest, loose clothing, face and hands uncovered.', ar: 'الرجل: إزار ورداء أبيضان غير مخيطين. المرأة: ثياب فضفاضة ساترة مع كشف الوجه والكفين.', ur: 'مرد: دو بغیر سلی سفید چادریں۔ خواتین: ڈھیلے پردے والے کپڑے، چہرہ اور ہاتھ کھلے۔' },
      { en: 'At the miqat, intend Umrah in your heart.', ar: 'عند الميقات، انوِ العمرة بقلبك.', ur: 'میقات پر دل میں عمرہ کی نیت کریں۔' },
      { en: 'Begin the Talbiyah.', ar: 'ابدأ التلبية.', ur: 'تلبیہ شروع کریں۔' }
    ],
    tips: [
      {
        en: 'Flying? Wear ihram before boarding, or change on the plane before the captain announces the miqat. Many airlines announce it.',
        ar: 'مسافراً بالطائرة؟ البس الإحرام قبل الصعود، أو غيّره في الطائرة قبل إعلان الميقات. كثير من الشركات تعلن عنه.',
        ur: 'ہوائی جہاز سے جا رہے ہیں؟ سوار ہونے سے پہلے احرام پہن لیں، یا میقات کے اعلان سے پہلے جہاز میں تبدیل کر لیں۔'
      },
      {
        en: 'Check with your madhhab or a trusted scholar for details — this guide follows the majority understanding.',
        ar: 'راجع مذهبك أو عالماً موثوقاً في التفاصيل؛ هذا الدليل على فهم الجمهور.',
        ur: 'تفصیلات کے لیے اپنے مذہب یا کسی معتبر عالم سے رجوع کریں؛ یہ رہنمائی جمہور کی فہم پر ہے۔'
      }
    ],
    duas: ['travel', 'talbiyah'],
    interactive: null
  },

  {
    id: 'talbiyah',
    num: 2,
    scene: 'talbiyah',
    minutes: 15,
    title: { en: 'The Talbiyah', ar: 'التلبية', ur: 'تلبیہ' },
    kicker: { en: 'Answering the call', ar: 'إجابة النداء', ur: 'پکار کا جواب' },
    summary: {
      en: 'Repeat the Talbiyah on the way to Makkah — men raising their voices, women softly. It is the anthem of the pilgrim.',
      ar: 'ردّد التلبية في طريقك إلى مكة، يرفع الرجل صوته وتُسِرّ المرأة. إنها نشيد الحاج.',
      ur: 'مکہ کی طرف جاتے ہوئے تلبیہ دہرائیں — مرد بلند آواز سے، خواتین آہستہ۔ یہ حاجی کا ترانہ ہے۔'
    },
    narration: {
      en: 'Keep repeating the Talbiyah as you travel towards Makkah. Men raise their voices; women recite softly enough to be heard by themselves. Pause to reflect on its meaning: you are answering Allah’s call, declaring His oneness, and placing your time, wealth and strength at His service. Continue the Talbiyah until you reach the Black Stone and begin Tawaf.',
      ar: 'واصل التلبية في طريقك إلى مكة، يرفع الرجل صوته وتُسِرّ المرأة. تدبّر معناها: أنت تجيب نداء الله، وتقرّ بوحدانيته، وتقدّم وقتك ومالك وقوتك في طاعته. استمر في التلبية حتى تصل إلى الحجر الأسود وتبدأ الطواف.',
      ur: 'مکہ کی طرف سفر میں تلبیہ دہراتے رہیں۔ مرد بلند آواز سے، اور خواتین آہستہ۔ اس کے معنی پر غور کریں: آپ اللہ کی پکار کا جواب دے رہے ہیں، اس کی وحدانیت کا اقرار کر رہے ہیں، اور اپنا وقت، مال اور طاقت اس کی خدمت میں پیش کر رہے ہیں۔ تلبیہ حجر اسود کے پاس پہنچ کر طواف شروع کرنے تک جاری رکھیں۔'
    },
    actions: [
      { en: 'Recite the Talbiyah often, especially after prayers and at each change of place.', ar: 'أكثر من التلبية، خاصة بعد الصلوات وعند تغيّر المواضع.', ur: 'تلبیہ کثرت سے پڑھیں، خاص طور پر نمازوں کے بعد اور جگہ بدلتے وقت۔' },
      { en: 'Men raise their voices; women recite softly.', ar: 'يرفع الرجل صوته، وتُسِرّ المرأة.', ur: 'مرد بلند آواز سے، خواتین آہستہ پڑھیں۔' },
      { en: 'Reflect on the meaning and keep reciting until Tawaf.', ar: 'تدبّر المعنى واستمر حتى الطواف.', ur: 'معنی پر غور کریں اور طواف تک جاری رکھیں۔' }
    ],
    tips: [
      {
        en: 'Learn the Talbiyah by heart before you travel — the moments at the miqat are emotional and busy.',
        ar: 'احفظ التلبية قبل السفر؛ لحظات الميقات مؤثرة ومزدحمة.',
        ur: 'سفر سے پہلے تلبیہ زبانی یاد کریں — میقات کے لمحات جذباتی اور مصروف ہوتے ہیں۔'
      }
    ],
    duas: ['talbiyah'],
    interactive: null
  },

  {
    id: 'first-sight',
    num: 3,
    scene: 'sight',
    minutes: 20,
    title: { en: 'Entering the Haram & the first sight', ar: 'دخول المسجد الحرام ورؤية الكعبة', ur: 'مسجد الحرام میں داخلہ اور کعبہ کی زیارت' },
    kicker: { en: 'The first sight', ar: 'أول نظرة', ur: 'پہلی نظر' },
    summary: {
      en: 'Enter with your right foot, send blessings on the Prophet ﷺ, and make dua. Seeing the Ka‘bah is a moment to ask Allah for everything.',
      ar: 'ادخل بالقدم اليمنى، وصلِّ على النبي ﷺ، وادعُ. رؤية الكعبة لحظة تسأل فيها الله كل شيء.',
      ur: 'دایاں قدم پہلے رکھیں، نبی ﷺ پر درود بھیجیں اور دعا کریں۔ کعبہ کو دیکھنا وہ لمحہ ہے جب آپ اللہ سے سب کچھ مانگیں۔'
    },
    narration: {
      en: 'Enter the Sacred Mosque with humility, stepping in with your right foot and saying the dua for entering a mosque. As you walk in, keep your gaze lowered until you see the Ka‘bah. When your eyes fall on it, pause. Raise your hands and ask Allah for what your heart needs. There is no authentic fixed dua for this moment, so speak to your Lord in your own words.',
      ar: 'ادخل المسجد الحرام بخشوع، وقدّم رجلك اليمنى واقرأ دعاء دخول المسجد. غضّ بصرك حتى ترى الكعبة، فإذا رأيتها فتوقف وارفع يديك واسأل الله حاجتك. لا يوجد دعاء ثابت مخصوص لهذه اللحظة، فادعُ ربك بكلماتك.',
      ur: 'مسجد الحرام میں عاجزی سے داخل ہوں، دایاں قدم پہلے رکھیں اور مسجد میں داخل ہونے کی دعا پڑھیں۔ اندر آتے وقت نگاہ نیچی رکھیں، اور جب کعبہ نظر آئے تو ٹھہر جائیں، ہاتھ اٹھائیں اور دل کی مراد مانگیں۔ اس لمحے کے لیے کوئی ثابت شدہ مخصوص دعا نہیں، اپنے الفاظ میں اپنے رب سے بات کریں۔'
    },
    actions: [
      { en: 'Enter with your right foot and say the dua for entering the mosque.', ar: 'ادخل بالقدم اليمنى وقل دعاء دخول المسجد.', ur: 'دایاں قدم پہلے رکھیں اور مسجد میں داخلے کی دعا پڑھیں۔' },
      { en: 'Lower your gaze until you see the Ka‘bah.', ar: 'غضّ بصرك حتى ترى الكعبة.', ur: 'کعبہ نظر آنے تک نگاہ نیچی رکھیں۔' },
      { en: 'When you see it, pause and make dua in your own words.', ar: 'فإذا رأيتها فتوقف وادعُ بكلماتك.', ur: 'جب نظر پڑے تو ٹھہر کر اپنے الفاظ میں دعا کریں۔' },
      { en: 'Keep moving and do not block other pilgrims.', ar: 'لا تسدّ الطريق على الطائفين.', ur: 'راستہ نہ روکیں اور دوسرے زائرین کو تکلیف نہ دیں۔' }
    ],
    tips: [
      {
        en: 'There is no authentic fixed dua for the first sight of the Ka‘bah. Ask sincerely, in any language.',
        ar: 'لا يوجد دعاء ثابت مخصوص لأول نظرة إلى الكعبة. ادعُ بصدق وبأي لغة.',
        ur: 'کعبہ کی پہلی زیارت کے لیے کوئی ثابت شدہ مخصوص دعا نہیں۔ خلوص سے کسی بھی زبان میں مانگیں۔'
      },
      {
        en: 'Move to the side for photos; the flow of pilgrims never stops.',
        ar: 'تنحَّ جانباً للتصوير؛ حركة الطائفين لا تتوقف.',
        ur: 'تصویر کے لیے ایک طرف ہٹ جائیں؛ زائرین کا بہاؤ رکا نہیں رہتا۔'
      }
    ],
    duas: ['enter_mosque'],
    interactive: null
  },

  {
    id: 'tawaf',
    num: 4,
    scene: 'tawaf',
    minutes: 60,
    title: { en: 'Tawaf — seven circuits', ar: 'الطواف سبعة أشواط', ur: 'طواف — سات چکر' },
    kicker: { en: 'Seven circuits of devotion', ar: 'سبعة أشواط من العبادة', ur: 'عقیدت کے سات چکر' },
    summary: {
      en: 'Begin in line with the Black Stone, say Allahu Akbar, and walk anticlockwise seven times, keeping the Ka‘bah on your left.',
      ar: 'ابدأ محاذياً الحجر الأسود، وقل الله أكبر، وامشِ عكس عقارب الساعة سبع مرات، والكعبة عن يسارك.',
      ur: 'حجر اسود کے سامنے سے شروع کریں، اللہ اکبر کہیں اور سات بار گھڑی کی مخالف سمت چلیں، کعبہ کو بائیں جانب رکھیں۔'
    },
    narration: {
      en: 'Tawaf begins in line with the Black Stone. Face it, raise your hand towards it, and say Allahu Akbar. If you can reach it without harming anyone, touch or kiss it; otherwise simply point. Then move to your right, keeping the Ka‘bah on your left. In the first three circuits, men may walk briskly; in the remaining four, walk normally. Between the Yemeni corner and the Black Stone, say: Our Lord, give us good in this world and good in the Hereafter, and protect us from the punishment of the Fire. There is no fixed dua for the rest of the circuit; remember Allah, recite Qur’an, and ask for what you need. Count carefully until you complete seven circuits.',
      ar: 'يبدأ الطواف من محاذاة الحجر الأسود. استقبله وأشر إليه بيدك وقل: الله أكبر. إن استطعت استلامه دون أذى فافعل، وإلا فالإشارة تكفي. ثم امشِ إلى يمينك واجعل الكعبة عن يسارك. يُسنّ للرجل الرمل في الأشواط الثلاثة الأولى، والمشي في الأربعة الباقية. بين الركن اليماني والحجر الأسود قل: ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار. ولا دعاء مخصوصاً لبقية الطواف، فاذكر الله واقرأ القرآن وادعُ بما تحتاج. احفظ العدد حتى تتم سبعة أشواط.',
      ur: 'طواف حجر اسود کے سامنے سے شروع ہوتا ہے۔ اس کی طرف رخ کریں، ہاتھ اشارہ کریں اور ”اللہ اکبر“ کہیں۔ اگر بغیر تکلیف پہنچ سکیں تو چھوئیں یا بوسہ دیں، ورنہ اشارہ کافی ہے۔ پھر دائیں طرف چلیں اور کعبہ کو بائیں جانب رکھیں۔ پہلے تین چکروں میں مرد تیز چل سکتے ہیں، باقی چار میں معمول کے مطابق۔ رکن یمانی اور حجر اسود کے درمیان یہ دعا پڑھیں: اے ہمارے رب! ہمیں دنیا میں بھلائی اور آخرت میں بھلائی عطا فرما اور ہمیں آگ کے عذاب سے بچا۔ باقی طواف میں کوئی مخصوص دعا نہیں؛ ذکر، تلاوت اور اپنی ضرورتوں کی دعا کریں۔ سات چکر پورے ہونے تک گنتی کا خیال رکھیں۔'
    },
    actions: [
      { en: 'Start in line with the Black Stone, say Allahu Akbar, and point.', ar: 'ابدأ محاذياً الحجر الأسود، وقل الله أكبر، وأشر إليه.', ur: 'حجر اسود کے سامنے سے شروع کریں، اللہ اکبر کہیں اور اشارہ کریں۔' },
      { en: 'Keep the Ka‘bah on your left and move anticlockwise.', ar: 'اجعل الكعبة عن يسارك وامشِ عكس عقارب الساعة.', ur: 'کعبہ بائیں جانب رکھیں اور گھڑی کی مخالف سمت چلیں۔' },
      { en: 'Men walk briskly in the first three circuits.', ar: 'يرمل الرجل في الأشواط الثلاثة الأولى.', ur: 'مرد پہلے تین چکروں میں تیز چلیں۔' },
      { en: 'Between the Yemeni corner and the Black Stone, recite the Quranic dua.', ar: 'بين الركن اليماني والحجر الأسود اقرأ الدعاء القرآني.', ur: 'رکن یمانی اور حجر اسود کے درمیان قرآنی دعا پڑھیں۔' },
      { en: 'Complete seven circuits without losing count.', ar: 'أتم سبعة أشواط دون أن تفقد العدد.', ur: 'سات چکر پورے کریں اور گنتی نہ بھولیں۔' }
    ],
    tips: [
      {
        en: 'If you lose count, continue from the number you are certain of. Do not harm others to reach the Stone.',
        ar: 'إن نسيت العدد فابنِ على اليقين. لا تؤذِ أحداً للوصول إلى الحجر.',
        ur: 'اگر گنتی بھول جائیں تو جتنے چکر یقینی ہیں وہیں سے جاری رکھیں۔ حجر اسود تک پہنچنے کے لیے کسی کو تکلیف نہ دیں۔'
      },
      {
        en: 'Upper floors count as Tawaf and are often calmer for families and wheelchairs.',
        ar: 'الطواف من الأدوار العليا صحيح، وهو أهدأ للعائلات والكراسي المتحركة.',
        ur: 'اوپر کی منزلوں کا طواف بھی درست ہے اور خاندانوں اور وہیل چیئر کے لیے زیادہ پرسکون ہوتا ہے۔'
      }
    ],
    duas: ['black_stone', 'between_corners'],
    interactive: 'tawaf'
  },

  {
    id: 'maqam',
    num: 5,
    scene: 'maqam',
    minutes: 15,
    title: { en: 'Two rak‘ahs & Zamzam', ar: 'ركعتا الطواف وزَمْزَم', ur: 'مقام ابراہیم پر دو رکعتیں اور زمزم' },
    kicker: { en: 'Prayer at the station', ar: 'الصلاة عند المقام', ur: 'مقام ابراہیم پر دعا' },
    summary: {
      en: 'After Tawaf, pray two rak‘ahs facing the Ka‘bah, ideally with Maqam Ibrahim between you and it. Then drink Zamzam.',
      ar: 'بعد الطواف صلِّ ركعتين باتجاه الكعبة، والأفضل أن يكون المقام بينك وبينها. ثم اشرب زمزم.',
      ur: 'طواف کے بعد کعبہ کی طرف رخ کر کے دو رکعتیں پڑھیں، بہتر ہے کہ مقام ابراہیم آپ کے اور کعبہ کے درمیان ہو۔ پھر زمزم پییں۔'
    },
    narration: {
      en: 'After completing the seventh circuit, go to Maqam Ibrahim and pray two rak‘ahs, reciting Surah al-Kafirun in the first and Surah al-Ikhlas in the second. If the area is crowded, pray anywhere in the mosque facing the Ka‘bah. Then drink the water of Zamzam. The Prophet ﷺ said that Zamzam is for whatever purpose it is drunk for, so drink with a sincere intention and make dua.',
      ar: 'بعد الشوط السابع، صلِّ ركعتين عند مقام إبراهيم، تقرأ في الأولى سورة الكافرون وفي الثانية سورة الإخلاص. فإن كان الزحام شديداً فصلِّ في أي مكان في المسجد باتجاه الكعبة. ثم اشرب من زمزم. قال النبي ﷺ: ماء زمزم لما شُرب له، فاشرب بنية صادقة وادعُ الله.',
      ur: 'ساتویں چکر کے بعد مقام ابراہیم کے پاس جا کر دو رکعتیں پڑھیں، پہلی میں سورۃ الکافرون اور دوسری میں سورۃ الاخلاص۔ اگر رش ہو تو مسجد میں کہیں بھی کعبہ کی طرف رخ کر کے پڑھ لیں۔ پھر زمزم کا پانی پییں۔ نبی ﷺ نے فرمایا کہ زمزم جس نیت سے پیا جائے اس کے لیے ہے، اس لیے سچی نیت سے پییں اور دعا کریں۔'
    },
    actions: [
      { en: 'Pray two rak‘ahs facing the Ka‘bah.', ar: 'صلِّ ركعتين باتجاه الكعبة.', ur: 'کعبہ کی طرف رخ کر کے دو رکعتیں پڑھیں۔' },
      { en: 'Recite Surah al-Kafirun and Surah al-Ikhlas.', ar: 'اقرأ سورة الكافرون وسورة الإخلاص.', ur: 'سورۃ الکافرون اور سورۃ الاخلاص پڑھیں۔' },
      { en: 'Drink Zamzam and make dua.', ar: 'اشرب زمزم وادعُ الله.', ur: 'زمزم پییں اور دعا کریں۔' }
    ],
    tips: [
      {
        en: 'Carry a small empty bottle to fill for later; use the marked Zamzam dispensers.',
        ar: 'احمل قارورة فارغة صغيرة للتعبئة لاحقاً، واستخدم برادات زمزم المخصصة.',
        ur: 'بعد کے لیے ایک چھوٹی خالی بوتل ساتھ رکھیں؛ زمزم کے مخصوص ڈسپنسر استعمال کریں۔'
      }
    ],
    duas: ['maqam', 'zamzam'],
    interactive: null
  },

  {
    id: 'sai',
    num: 6,
    scene: 'sai',
    minutes: 45,
    title: { en: 'Sa‘i — Safa to Marwa', ar: 'السعي بين الصفا والمروة', ur: 'صفا و مروہ کے درمیان سعی' },
    kicker: { en: 'Walking in Hajar’s footsteps', ar: 'على خطى هاجر', ur: 'ہاجرہ کے نقش قدم پر' },
    summary: {
      en: 'Walk seven times between Safa and Marwa, starting at Safa. Each trip counts as one; seven ends at Marwa.',
      ar: 'امشِ سبع مرات بين الصفا والمروة، بدءاً بالصفا. كل شوط مرة، والسابع ينتهي عند المروة.',
      ur: 'صفا اور مروہ کے درمیان سات چکر کریں، صفا سے شروع کریں۔ ہر چکر ایک شمار ہوگا؛ ساتواں مروہ پر ختم ہوگا۔'
    },
    narration: {
      en: 'Go to Safa. Before you climb it, recite: Indeed, Safa and Marwa are among the symbols of Allah. Then say: I begin with what Allah began with. Face the Ka‘bah, praise Allah, and recite the dua of the Prophet ﷺ three times, making your own supplication in between. Then walk to Marwa. Men run between the two green markers; women walk normally. Upon reaching Marwa, face the Ka‘bah and do as you did at Safa. This is one complete trip. Continue until you have completed seven trips, ending at Marwa.',
      ar: 'اذهب إلى الصفا. قبل أن تصعد اقرأ: إن الصفا والمروة من شعائر الله. ثم قل: أبدأ بما بدأ الله به. استقبل الكعبة واحمد الله واقرأ دعاء النبي ﷺ ثلاث مرات، وادعُ بينها. ثم امشِ إلى المروة. يسرع الرجل بين العلامتين الخضراوين، وتمشي المرأة على عادتها. على المروة استقبل الكعبة وافعل كما فعلت على الصفا. هذه شوط واحد. أكمل حتى تتم سبعة أشواط، وتنتهي عند المروة.',
      ur: 'صفا کی طرف جائیں۔ چڑھنے سے پہلے پڑھیں: بیشک صفا اور مروہ اللہ کی نشانیوں میں سے ہیں۔ پھر کہیں: میں اسی سے شروع کرتا ہوں جس سے اللہ نے شروع کیا۔ کعبہ کی طرف رخ کریں، اللہ کی تعریف کریں، اور نبی ﷺ کی دعا تین بار پڑھیں، درمیان میں اپنی دعا کریں۔ پھر مروہ کی طرف چلیں۔ مرد دو سبز نشانوں کے درمیان دوڑیں، خواتین معمول سے چلیں۔ مروہ پر پہنچ کر کعبہ کی طرف رخ کریں اور وہی کریں جو صفا پر کیا۔ یہ ایک مکمل چکر ہے۔ اسی طرح سات چکر پورے کریں، آخری مروہ پر ختم ہوگا۔'
    },
    actions: [
      { en: 'Recite the verse of Safa and Marwa, then begin at Safa.', ar: 'اقرأ آية الصفا والمروة، وابدأ بالصفا.', ur: 'صفا و مروہ کی آیت پڑھیں، پھر صفا سے شروع کریں۔' },
      { en: 'Face the Ka‘bah and make the Prophetic dua three times.', ar: 'استقبل الكعبة وادعُ بدعاء النبي ﷺ ثلاثاً.', ur: 'کعبہ کی طرف رخ کریں اور نبی ﷺ کی دعا تین بار پڑھیں۔' },
      { en: 'Walk to Marwa; men run between the green markers.', ar: 'امشِ إلى المروة، ويسرع الرجل بين العلامتين الخضراوين.', ur: 'مروہ کی طرف چلیں؛ مرد سبز نشانوں کے درمیان دوڑیں۔' },
      { en: 'Complete seven trips, ending at Marwa.', ar: 'أتم سبعة أشواط، وتنتهي عند المروة.', ur: 'سات چکر پورے کریں، آخری مروہ پر۔' }
    ],
    tips: [
      {
        en: 'Seven trips means Safa→Marwa four times and Marwa→Safa three times, ending at Marwa.',
        ar: 'سبعة أشواط: من الصفا إلى المروة أربعاً، ومن المروة إلى الصفا ثلاثاً، وتنتهي عند المروة.',
        ur: 'سات چکر: صفا سے مروہ چار بار، مروہ سے صفا تین بار، اور اختتام مروہ پر۔'
      },
      {
        en: 'The distance is about 3.15 km in total. Wear comfortable footwear and pace yourself.',
        ar: 'المسافة نحو 3.15 كم إجمالاً. البس حذاءً مريحاً ووزّع جهدك.',
        ur: 'کل فاصلہ تقریباً 3.15 کلومیٹر ہے۔ آرام دہ جوتے پہنیں اور رفتار برقرار رکھیں۔'
      }
    ],
    duas: ['safa', 'sai_dhikr'],
    interactive: 'sai'
  },

  {
    id: 'halq',
    num: 7,
    scene: 'halq',
    minutes: 10,
    title: { en: 'Halq or Taqsir — shave or trim', ar: 'الحلق أو التقصير', ur: 'حلق یا تقصیر' },
    kicker: { en: 'Leaving the sacred state', ar: 'الخروج من الإحرام', ur: 'احرام سے آزادی' },
    summary: {
      en: 'Men shave the head or trim evenly; women cut a fingertip’s length of hair. With this, the ihram restrictions end.',
      ar: 'يحلق الرجل رأسه أو يقصّر، وتقصّ المرأة قدر أنملة من شعرها. وبهذا تنتهي محظورات الإحرام.',
      ur: 'مرد سر منڈوائیں یا بال برابر کتریں؛ خواتین بالوں کے سروں سے تقریباً ایک پور کتریں۔ اسی کے ساتھ احرام کی پابندیاں ختم ہو جاتی ہیں۔'
    },
    narration: {
      en: 'After Sa‘i, shave your head or trim your hair. Shaving is better for men, and the Prophet ﷺ asked Allah’s mercy for those who shave. Women trim about a fingertip’s length from the ends of their hair. This is done with the intention of following the Sunnah, and it marks the end of Ihram. Your ihram restrictions now lift, and your Umrah is complete, by Allah’s permission.',
      ar: 'بعد السعي، احلق رأسك أو قصّر شعرك. الحلق أفضل للرجل، ودعا النبي ﷺ لمن حلق. تقصّ المرأة قدر أنملة من أطراف شعرها. افعل ذلك بنية اتباع السنة، وبه تنتهي محظورات الإحرام. تمّت عمرتك بفضل الله.',
      ur: 'سعی کے بعد سر منڈوائیں یا بال کتروائیں۔ مردوں کے لیے منڈوانا افضل ہے، اور نبی ﷺ نے منڈوانے والوں کے لیے رحمت کی دعا کی۔ خواتین بالوں کے سروں سے تقریباً ایک پور کی لمبائی کتریں۔ یہ سنت کی پیروی کی نیت سے کریں، اور اسی کے ساتھ احرام کی پابندیاں ختم ہو جاتی ہیں۔ اللہ کے فضل سے آپ کا عمرہ مکمل ہو گیا۔'
    },
    actions: [
      { en: 'Men: shave or trim evenly. Women: trim a fingertip’s length.', ar: 'الرجل: احلق أو قصّر بالتساوي. المرأة: قصّي قدر أنملة.', ur: 'مرد: منڈوائیں یا برابر کتریں۔ خواتین: ایک پور کے برابر کتریں۔' },
      { en: 'Use a clean blade and a licensed barber.', ar: 'استخدم موسى نظيفاً وحلاقاً مرخصاً.', ur: 'صاف بلیڈ اور مستند حجام استعمال کریں۔' },
      { en: 'Ihram restrictions end — you may now wear normal clothes and use perfume.', ar: 'تنتهي محظورات الإحرام، فيجوز لبس الثياب والطيب.', ur: 'احرام کی پابندیاں ختم — اب عام کپڑے اور خوشبو استعمال کر سکتے ہیں۔' }
    ],
    tips: [
      {
        en: 'Women may have a mahram or another woman trim their hair. Do not shave the head.',
        ar: 'تقصّ المرأة شعرها بحضور محرم أو امرأة، ولا تحلق رأسها.',
        ur: 'خواتین محرم یا کسی دوسری خاتون کی موجودگی میں بال کتریں۔ سر نہ منڈوائیں۔'
      }
    ],
    duas: [],
    interactive: null
  },

  {
    id: 'complete',
    num: 8,
    scene: 'complete',
    minutes: 5,
    title: { en: 'Umrah complete', ar: 'تمام العمرة', ur: 'عمرہ مکمل' },
    kicker: { en: 'A heart renewed', ar: 'قلب يتجدد', ur: 'دل کی تجدید' },
    summary: {
      en: 'Change into normal clothes, give thanks, and ask Allah to accept your Umrah. Umrah expiates the sins committed between it and the next.',
      ar: 'البس ثيابك، واحمد الله، واسأله القبول. العمرة كفارة لما بينها وبين العمرة التي تليها.',
      ur: 'عام کپڑے پہنیں، شکر ادا کریں اور اللہ سے قبولیت مانگیں۔ عمرہ اگلے عمرے تک کے گناہوں کا کفارہ ہے۔'
    },
    narration: {
      en: 'Your Umrah is complete. Change out of Ihram, give thanks to Allah, and ask Him to accept your worship. Umrah is a new beginning, not the end. The Prophet ﷺ said that Umrah is an expiation for the sins committed between it and the next Umrah. Keep the habits you built here: prayer, patience, generosity, and gentleness with people. And if you can, visit the Prophet’s Mosque in Madinah.',
      ar: 'تمّت عمرتك. اخرج من الإحرام والبس ثيابك، واحمد الله واسأله القبول. العمرة بداية جديدة لا نهاية. قال النبي ﷺ: العمرة إلى العمرة كفارة لما بينهما. حافظ على ما تعلمته: الصلاة والصبر والكرم والرفق بالناس. وإن تيسر فزر مسجد النبي ﷺ في المدينة.',
      ur: 'آپ کا عمرہ مکمل ہو گیا۔ احرام سے باہر آ کر عام کپڑے پہنیں، اللہ کا شکر ادا کریں اور دعا کریں کہ وہ آپ کی عبادت قبول فرمائے۔ عمرہ ایک نئی شروعات ہے، اختتام نہیں۔ نبی ﷺ نے فرمایا کہ ایک عمرہ دوسرے عمرے کے درمیان گناہوں کا کفارہ ہے۔ یہاں سیکھی ہوئی عادتیں اپنائی رکھیں: نماز، صبر، سخاوت اور لوگوں کے ساتھ نرمی۔ اور اگر ممکن ہو تو مدینہ میں نبی ﷺ کی مسجد کی زیارت کریں۔'
    },
    actions: [
      { en: 'Change into normal clothes and give thanks.', ar: 'البس ثيابك واحمد الله.', ur: 'عام کپڑے پہنیں اور شکر ادا کریں۔' },
      { en: 'Ask Allah to accept your Umrah.', ar: 'اسأل الله القبول.', ur: 'اللہ سے قبولیت مانگیں۔' },
      { en: 'Keep the good habits you built here.', ar: 'حافظ على العادات الحسنة التي بنيتها.', ur: 'یہاں بنائی گئی اچھی عادتیں برقرار رکھیں۔' },
      { en: 'Visit Madinah and the Prophet’s Mosque if you can.', ar: 'زر المدينة ومسجد النبي ﷺ إن تيسر.', ur: 'ممکن ہو تو مدینہ اور مسجد نبوی کی زیارت کریں۔' }
    ],
    tips: [
      {
        en: 'Many pilgrims feel a dip after Umrah. Set one small habit to carry home: a daily page of Qur’an, or a consistent charity.',
        ar: 'يشعر كثير من الحجاج بفتور بعد العمرة. اختر عادة صغيرة تحملها معك: صفحة قرآن يومياً أو صدقة منتظمة.',
        ur: 'بہت سے زائرین عمرہ کے بعد کمزوری محسوس کرتے ہیں۔ ایک چھوٹی عادت ساتھ لے کر جائیں: روزانہ قرآن کا ایک صفحہ یا مستقل صدقہ۔'
      }
    ],
    duas: ['acceptance'],
    interactive: null
  }
];

/* ------------------------------------------------------------------ *
 *  Preparation
 * ------------------------------------------------------------------ */

export const PILLARS = [
  {
    id: 'ihram',
    title: { en: 'Ihram', ar: 'الإحرام', ur: 'احرام' },
    text: {
      en: 'The sacred state entered at the miqat with the intention of Umrah.',
      ar: 'الحالة المقدسة التي يدخلها الحاج عند الميقات بنية العمرة.',
      ur: 'وہ مقدس حالت جو میقات پر عمرہ کی نیت سے شروع ہوتی ہے۔'
    }
  },
  {
    id: 'tawaf',
    title: { en: 'Tawaf', ar: 'الطواف', ur: 'طواف' },
    text: {
      en: 'Seven circuits around the Ka‘bah, anticlockwise, beginning at the Black Stone.',
      ar: 'سبعة أشواط حول الكعبة عكس عقارب الساعة، تبدأ من الحجر الأسود.',
      ur: 'کعبہ کے گرد سات چکر، گھڑی کی مخالف سمت، حجر اسود سے شروع۔'
    }
  },
  {
    id: 'sai',
    title: { en: 'Sa‘i', ar: 'السعي', ur: 'سعی' },
    text: {
      en: 'Seven trips between Safa and Marwa, following the steps of Hajar.',
      ar: 'سبع مرات بين الصفا والمروة، على خطى هاجر.',
      ur: 'صفا اور مروہ کے درمیان سات چکر، ہاجرہ کے نقش قدم پر۔'
    }
  },
  {
    id: 'halq',
    title: { en: 'Halq or Taqsir', ar: 'الحلق أو التقصير', ur: 'حلق یا تقصیر' },
    text: {
      en: 'Shaving or trimming the hair, which completes Umrah and ends ihram.',
      ar: 'حلق الشعر أو تقصيره، وبه تتم العمرة وتنتهي محظورات الإحرام.',
      ur: 'بال منڈوانا یا کتروانا، جس سے عمرہ مکمل اور احرام ختم ہوتا ہے۔'
    }
  }
];

export const CHECKLIST = [
  {
    id: 'documents',
    title: { en: 'Documents & travel', ar: 'الوثائق والسفر', ur: 'دستاویزات اور سفر' },
    items: [
      { id: 'passport', text: { en: 'Passport valid for at least 6 months', ar: 'جواز سفر صالح لستة أشهر على الأقل', ur: 'کم از کم چھ ماہ کی مدت والا پاسپورٹ' } },
      { id: 'visa', text: { en: 'Umrah visa approved', ar: 'تأشيرة العمرة معتمدة', ur: 'عمرہ ویزا منظور شدہ' } },
      { id: 'tickets', text: { en: 'Flight and hotel bookings saved offline', ar: 'حجوزات الطيران والفندق محفوظة دون اتصال', ur: 'فلائٹ اور ہوٹل کی بکنگ آف لائن محفوظ' } },
      { id: 'copies', text: { en: 'Printed and digital copies of all documents', ar: 'نسخ مطبوعة ورقمية من جميع الوثائق', ur: 'تمام دستاویزات کی پرنٹ اور ڈیجیٹل کاپیاں' } },
      { id: 'contacts', text: { en: 'Emergency contacts and group leader number', ar: 'أرقام الطوارئ وقائد المجموعة', ur: 'ایمرجنسی رابطے اور گروپ لیڈر کا نمبر' } }
    ]
  },
  {
    id: 'ihram',
    title: { en: 'Ihram & clothing', ar: 'الإحرام والملابس', ur: 'احرام اور کپڑے' },
    items: [
      { id: 'sheets', text: { en: 'Two white unstitched sheets (men)', ar: 'إزار ورداء أبيضان غير مخيطين (للرجال)', ur: 'دو سفید بغیر سلی چادریں (مرد)' } },
      { id: 'womens', text: { en: 'Loose, modest clothing and comfortable hijab (women)', ar: 'ثياب فضفاضة ساترة وحجاب مريح (للنساء)', ur: 'ڈھیلے پردے والے کپڑے اور آرام دہ حجاب (خواتین)' } },
      { id: 'sandals', text: { en: 'Comfortable sandals for long walks', ar: 'صنادل مريحة للمشي الطويل', ur: 'لمبی چہل قدمی کے لیے آرام دہ سینڈل' } },
      { id: 'unscented', text: { en: 'Unscented soap, shampoo and wipes', ar: 'صابون وشامبو ومناديل بلا عطر', ur: 'بغیر خوشبو والا صابن، شیمپو اور وائپس' } },
      { id: 'pouch', text: { en: 'Ihram belt or small pouch for essentials', ar: 'حزام إحرام أو حقيبة صغيرة للضروريات', ur: 'احرام بیلٹ یا ضروریات کے لیے چھوٹا بیگ' } },
      { id: 'spare', text: { en: 'Spare ihram set and safety pins', ar: 'طقم إحرام احتياطي ودبابيس أمان', ur: 'اضافی احرام اور سیفٹی پن' } }
    ]
  },
  {
    id: 'health',
    title: { en: 'Health & comfort', ar: 'الصحة والراحة', ur: 'صحت اور آرام' },
    items: [
      { id: 'meds', text: { en: 'Personal medication with prescriptions', ar: 'الأدوية الشخصية مع الوصفات', ur: 'ذاتی ادویات نسخوں کے ساتھ' } },
      { id: 'plasters', text: { en: 'Plasters for blisters and sore feet', ar: 'لاصقات للبثور وتقرحات القدم', ur: 'چھالوں اور پاؤں کے زخموں کے لیے پلاسٹر' } },
      { id: 'bottle', text: { en: 'Reusable water bottle', ar: 'قارورة ماء قابلة لإعادة الاستخدام', ur: 'دوبارہ استعمال ہونے والی پانی کی بوتل' } },
      { id: 'sunscreen', text: { en: 'Unscented sunscreen and sunglasses', ar: 'واقٍ من الشمس بلا عطر ونظارات شمسية', ur: 'بغیر خوشبو والا سن اسکرین اور دھوپ کے چشمے' } },
      { id: 'sanitiser', text: { en: 'Unscented hand sanitiser and masks', ar: 'معقم يدين بلا عطر وكمامات', ur: 'بغیر خوشبو والا سینیٹائزر اور ماسک' } }
    ]
  },
  {
    id: 'heart',
    title: { en: 'Heart & preparation', ar: 'القلب والاستعداد', ur: 'دل اور تیاری' },
    items: [
      { id: 'memorise', text: { en: 'Memorise the Talbiyah and learn the order of rites', ar: 'احفظ التلبية وتعلم ترتيب المناسك', ur: 'تلبیہ یاد کریں اور ارکان کی ترتیب سیکھیں' } },
      { id: 'duas', text: { en: 'Write a list of duas for yourself and others', ar: 'اكتب قائمة أدعية لنفسك وللآخرين', ur: 'اپنے اور دوسروں کے لیے دعاؤں کی فہرست لکھیں' } },
      { id: 'forgive', text: { en: 'Seek forgiveness and forgive others', ar: 'استغفر وسامح الآخرين', ur: 'معافی مانگیں اور دوسروں کو معاف کریں' } },
      { id: 'debts', text: { en: 'Settle debts and return trusts', ar: 'اقض الديون وردّ الأمانات', ur: 'قرض ادا کریں اور امانتیں واپس کریں' } },
      { id: 'permission', text: { en: 'Seek permission from parents and employer', ar: 'استأذن والديك وصاحب العمل', ur: 'والدین اور آجر سے اجازت لیں' } }
    ]
  }
];

export const PROHIBITIONS = [
  {
    id: 'men',
    title: { en: 'For men', ar: 'للرجال', ur: 'مردوں کے لیے' },
    items: [
      { en: 'No stitched clothing that fits the body.', ar: 'لا لبس المخيط.', ur: 'سلی ہوئی تنگ لباس نہیں۔' },
      { en: 'Do not cover the head or face.', ar: 'لا تغطية الرأس ولا الوجه.', ur: 'سر اور چہرہ نہ ڈھکیں۔' },
      { en: 'No shoes that cover the ankles (sandals are fine).', ar: 'لا لبس ما يغطي الكعبين (الصنادل جائزة).', ur: 'ٹخنے ڈھانپنے والے جوتے نہیں (سینڈل جائز ہیں)۔' }
    ]
  },
  {
    id: 'women',
    title: { en: 'For women', ar: 'للنساء', ur: 'خواتین کے لیے' },
    items: [
      { en: 'Wear loose, modest clothing that covers the body.', ar: 'لبس ثياب فضفاضة ساترة.', ur: 'ڈھیلے پردے والے کپڑے پہنیں جو جسم ڈھانپیں۔' },
      { en: 'The face and hands remain uncovered in ihram (per the majority).', ar: 'يبقى الوجه والكفان مكشوفين في الإحرام عند الجمهور.', ur: 'احرام میں چہرہ اور ہاتھ کھلے رہتے ہیں (جمہور کے نزدیک)۔' },
      { en: 'Do not wear gloves or a face veil that covers the face.', ar: 'لا تلبس القفازين ولا النقاب الذي يغطي الوجه.', ur: 'دستانے یا چہرہ ڈھانپنے والا نقاب نہ پہنیں۔' }
    ]
  },
  {
    id: 'both',
    title: { en: 'For everyone', ar: 'للجميع', ur: 'سب کے لیے' },
    items: [
      { en: 'No perfume, scented soap, cream or deodorant.', ar: 'لا طيب ولا صابون معطر ولا كريم ولا مزيل عرق.', ur: 'خوشبو، معطر صابن، کریم یا ڈیوڈرنٹ نہیں۔' },
      { en: 'Do not cut hair or nails.', ar: 'لا قص الشعر ولا الأظفار.', ur: 'بال یا ناخن نہ کاٹیں۔' },
      { en: 'No marital relations and no marriage contracts.', ar: 'لا جماع ولا عقد نكاح.', ur: 'ازدواجی تعلق اور نکاح نہیں۔' },
      { en: 'No hunting or harming wildlife.', ar: 'لا صيد ولا إيذاء للحيوانات.', ur: 'شکار یا جانوروں کو نقصان نہیں۔' },
      { en: 'No arguing, fighting or foul speech.', ar: 'لا جدال ولا خصام ولا فحش كلام.', ur: 'جھگڑا، لڑائی یا بری بات نہیں۔' },
      { en: 'Do not cut the vegetation of the sanctuary.', ar: 'لا قطع نباتات الحرم.', ur: 'حرم کی سبزیاں یا درخت نہ کاٹیں۔' }
    ]
  }
];

/* ------------------------------------------------------------------ *
 *  FAQ
 * ------------------------------------------------------------------ */

export const FAQ = [
  {
    q: { en: 'How long does Umrah take?', ar: 'كم تستغرق العمرة؟', ur: 'عمرہ میں کتنا وقت لگتا ہے؟' },
    a: {
      en: 'The rites themselves usually take two to four hours, depending on crowds. Many pilgrims split Tawaf and Sa‘i with rest. Allow a full day for a calm experience.',
      ar: 'تستغرق المناسك عادة من ساعتين إلى أربع، بحسب الزحام. ويمكن تقسيم الطواف والسعي مع الراحة. خصص يوماً كاملاً لتجربة هادئة.',
      ur: 'ارکان عام طور پر دو سے چار گھنٹے لیتے ہیں، رش کے مطابق۔ بہت سے زائرین طواف اور سعی کے درمیان آرام کرتے ہیں۔ پرسکون تجربے کے لیے پورا دن رکھیں۔'
    }
  },
  {
    q: { en: 'I lost count during Tawaf. What should I do?', ar: 'نسيت العدد في الطواف، ماذا أفعل؟', ur: 'طواف میں گنتی بھول گیا، کیا کروں؟' },
    a: {
      en: 'Build on what you are certain of. If you are sure you completed at least four circuits, continue from four. Do not repeat the whole Tawaf out of doubt.',
      ar: 'ابنِ على اليقين. إن كنت متأكداً من إتمام أربعة أشواط فأكمل من الرابع، ولا تعد الطواف كله من الشك.',
      ur: 'جتنے چکر یقینی ہیں انہی پر بنیاد رکھیں۔ اگر چار چکر یقینی ہیں تو چوتھے سے جاری رکھیں، شک کی وجہ سے پورا طواف دہرائیں نہیں۔'
    }
  },
  {
    q: { en: 'Can I perform Umrah on behalf of someone else?', ar: 'هل أستطيع أداء العمرة عن غيري؟', ur: 'کیا میں کسی اور کی طرف سے عمرہ کر سکتا ہوں؟' },
    a: {
      en: 'Yes, with conditions. It is commonly done for a deceased parent or someone unable to travel. You must have performed Umrah for yourself first, and you should consult your madhhab for details.',
      ar: 'نعم بشروط. يُفعل كثيراً عن الوالد المتوفى أو من لا يستطيع السفر. ويشترط أن تكون قد اعتمرت عن نفسك أولاً، وراجع مذهبك.',
      ur: 'جی ہاں، شرائط کے ساتھ۔ یہ عموماً فوت شدہ والدین یا سفر سے معذور شخص کے لیے کیا جاتا ہے۔ پہلے اپنا عمرہ کرنا ضروری ہے، تفصیل کے لیے اپنے مذہب سے رجوع کریں۔'
    }
  },
  {
    q: { en: 'Is Tawaf valid on the upper floors?', ar: 'هل يصح الطواف من الأدوار العليا؟', ur: 'کیا اوپر کی منزلوں سے طواف درست ہے؟' },
    a: {
      en: 'Yes. The upper floors are part of the mosque and are valid for Tawaf. They are often calmer, especially for families, the elderly and wheelchair users.',
      ar: 'نعم، الأدوار العليا من المسجد ويصح الطواف منها، وهي أهدأ للعائلات وكبار السن والكراسي المتحركة.',
      ur: 'جی ہاں، اوپر کی منزلیں مسجد کا حصہ ہیں اور وہاں سے طواف درست ہے۔ یہ خاندانوں، بزرگوں اور وہیل چیئر کے لیے زیادہ پرسکون ہوتی ہیں۔'
    }
  },
  {
    q: { en: 'What if I am menstruating?', ar: 'ماذا أفعل إذا كنت حائضاً؟', ur: 'اگر حیض ہو تو کیا کریں؟' },
    a: {
      en: 'You may enter ihram and make dua, but delay Tawaf until the bleeding ends and you purify. Sa‘i may be performed after Tawaf. Consult a trusted scholar for your specific situation.',
      ar: 'يجوز الإحرام والدعاء، ولكن تؤخر الطواف حتى ينقطع الدم وتطهر. ويمكن السعي بعد الطواف. راجعي عالماً موثوقاً لحالتك.',
      ur: 'احرام باندھ سکتی ہیں اور دعا کر سکتی ہیں، مگر طواف خون بند ہونے اور پاک ہونے تک مؤخر کریں۔ سعی طواف کے بعد کی جا سکتی ہے۔ اپنی صورتِ حال کے لیے معتبر عالم سے رجوع کریں۔'
    }
  },
  {
    q: { en: 'Do I need a mahram?', ar: 'هل أحتاج محرماً؟', ur: 'کیا محرم ضروری ہے؟' },
    a: {
      en: 'This depends on your madhhab and current Saudi regulations, which change. Check the official Umrah rules for your country and consult a scholar before booking.',
      ar: 'يعتمد على مذهبك وأنظمة السعودية الحالية التي تتغير. تحقق من قواعد العمرة الرسمية في بلدك واستشر عالماً قبل الحجز.',
      ur: 'یہ آپ کے مذہب اور سعودی عرب کے موجودہ قوانین پر منحصر ہے، جو بدلتے رہتے ہیں۔ اپنے ملک کے سرکاری عمرہ قوانین دیکھیں اور بکنگ سے پہلے عالم سے مشورہ کریں۔'
    }
  },
  {
    q: { en: 'Where do I enter ihram if I fly into Jeddah?', ar: 'من أين أحرم إذا وصلت جدة جواً؟', ur: 'جدہ ہوائی اڈے پر پہنچوں تو احرام کہاں سے باندھوں؟' },
    a: {
      en: 'You must be in ihram before crossing your miqat. Many pilgrims wear ihram before boarding or change on the plane before the captain announces the miqat. If you arrive without ihram, you may need to go to a miqat outside the Haram, such as at-Tan‘im, to enter ihram — check with your group.',
      ar: 'يجب أن تكون محرماً قبل تجاوز ميقاتك. كثير من الحجاج يلبسون الإحرام قبل الصعود أو يغيرونه في الطائرة قبل إعلان الميقات. وإن وصلت بلا إحرام فقد تحتاج للذهاب إلى ميقات خارج الحرم كالتنعيم — راجع مجموعتك.',
      ur: 'میقات سے گزرنے سے پہلے احرام میں ہونا ضروری ہے۔ بہت سے زائرین سوار ہونے سے پہلے احرام پہنتے ہیں یا میقات کے اعلان سے پہلے جہاز میں تبدیل کرتے ہیں۔ اگر احرام کے بغیر پہنچیں تو حرم سے باہر میقات (جیسے تنعیم) جانا پڑ سکتا ہے — اپنے گروپ سے پوچھیں۔'
    }
  },
  {
    q: { en: 'Can I take photos?', ar: 'هل يمكنني التصوير؟', ur: 'کیا تصاویر لے سکتا ہوں؟' },
    a: {
      en: 'Photography is generally allowed, but never block the flow of pilgrims or disturb anyone’s worship. Keep your phone away during Tawaf and Sa‘i so your heart stays present.',
      ar: 'التصوير جائز عموماً، لكن لا تسدّ الطريق ولا تشوش على العبادة. أبعد هاتفك في الطواف والسعي ليحضر قلبك.',
      ur: 'عام طور پر تصویر لینا جائز ہے، مگر زائرین کا راستہ نہ روکیں اور کسی کی عبادت میں خلل نہ ڈالیں۔ طواف اور سعی میں فون دور رکھیں تاکہ دل حاضر رہے۔'
    }
  },
  {
    q: { en: 'What is the difference between Umrah and Hajj?', ar: 'ما الفرق بين العمرة والحج؟', ur: 'عمرہ اور حج میں کیا فرق ہے؟' },
    a: {
      en: 'Umrah is the lesser pilgrimage: ihram, Tawaf, Sa‘i and cutting hair. It can be performed any time of year. Hajj is the greater pilgrimage, performed in Dhul-Hijjah with additional rites such as Arafah, Muzdalifah and Mina, and it is obligatory once for those who are able.',
      ar: 'العمرة هي الحج الأصغر: إحرام وطواف وسعي وحلق، وتُؤدى في أي وقت. والحج هو الأكبر، في ذي الحجة بمناسك إضافية كعرفة ومزدلفة ومنى، وهو واجب مرة لمن استطاع.',
      ur: 'عمرہ چھوٹا حج ہے: احرام، طواف، سعی اور بال کاٹنا۔ یہ سال کے کسی بھی وقت کیا جا سکتا ہے۔ حج بڑا حج ہے، ذوالحجہ میں ادا ہوتا ہے اور اس میں عرفہ، مزدلفہ اور منیٰ جیسے مزید ارکان شامل ہیں۔ یہ ہر صاحبِ استطاعت پر ایک بار فرض ہے۔'
    }
  },
  {
    q: { en: 'Can I use unscented soap and deodorant?', ar: 'هل أستخدم صابوناً ومزيل عرق بلا عطر؟', ur: 'کیا بغیر خوشبو والا صابن اور ڈیوڈرنٹ استعمال کر سکتا ہوں؟' },
    a: {
      en: 'Unscented soap and toiletries are generally fine. Avoid anything with visible perfume or fragrance, including scented wipes and strong deodorant. When in doubt, leave it out.',
      ar: 'الصابون والمستلزمات بلا عطر جائزة عموماً. تجنب كل ما فيه طيب ظاهر، ومنه المناديل المعطرة ومزيل العرق القوي. وعند الشك اتركه.',
      ur: 'بغیر خوشبو والا صابن اور سامان عام طور پر جائز ہے۔ ظاہر خوشبو والی ہر چیز سے بچیں، بشمول معطر وائپس اور تیز ڈیوڈرنٹ۔ شک ہو تو چھوڑ دیں۔'
    }
  }
];

/* ------------------------------------------------------------------ *
 *  Sources
 * ------------------------------------------------------------------ */

export const SOURCES = [
  { title: { en: 'The virtue of Umrah', ar: 'فضل العمرة', ur: 'عمرہ کی فضیلت' }, ref: 'Sahih al-Bukhari 1773', url: 'https://sunnah.com/bukhari:1773' },
  { title: { en: 'What the pilgrim in ihram may wear', ar: 'ما يلبسه المحرم', ur: 'احرام میں کیا پہنیں' }, ref: 'Sahih Muslim 1177a', url: 'https://sunnah.com/muslim:1177a' },
  { title: { en: 'The mawaqit (boundaries of ihram)', ar: 'مواقيت الإحرام', ur: 'میقات' }, ref: 'Sahih Muslim 1181a', url: 'https://sunnah.com/muslim:1181a' },
  { title: { en: 'The Talbiyah of the Prophet ﷺ', ar: 'تلبية النبي ﷺ', ur: 'نبی ﷺ کا تلبیہ' }, ref: 'Sahih Muslim 1184a', url: 'https://sunnah.com/muslim:1184a' },
  { title: { en: 'Dua for entering the mosque', ar: 'دعاء دخول المسجد', ur: 'مسجد میں داخلے کی دعا' }, ref: 'Sahih Muslim 713', url: 'https://sunnah.com/muslim:713' },
  { title: { en: 'Takbir at the Black Stone', ar: 'التكبير عند الحجر الأسود', ur: 'حجر اسود پر تکبیر' }, ref: 'Sahih al-Bukhari 1613', url: 'https://sunnah.com/bukhari:1613' },
  { title: { en: 'Dua between the two corners', ar: 'الدعاء بين الركنين', ur: 'دو رکنوں کے درمیان دعا' }, ref: 'Sunan Abi Dawud 1892 (Hasan)', url: 'https://sunnah.com/abudawud:1892' },
  { title: { en: 'The complete description of the rites', ar: 'صفة المناسك كاملة', ur: 'ارکان کی مکمل تفصیل' }, ref: 'Sahih Muslim 1218a', url: 'https://sunnah.com/muslim:1218a' },
  { title: { en: 'Sa‘i between Safa and Marwa', ar: 'السعي بين الصفا والمروة', ur: 'صفا و مروہ کی سعی' }, ref: 'Sahih al-Bukhari 1647', url: 'https://sunnah.com/bukhari:1647' },
  { title: { en: 'Shaving and trimming the hair', ar: 'الحلق والتقصير', ur: 'حلق اور تقصیر' }, ref: 'Sahih al-Bukhari 1727', url: 'https://sunnah.com/bukhari:1727' },
  { title: { en: 'The water of Zamzam', ar: 'ماء زمزم', ur: 'زمزم کا پانی' }, ref: 'Sunan Ibn Majah 3062 (Hasan)', url: 'https://sunnah.com/ibnmajah:3062' }
];
