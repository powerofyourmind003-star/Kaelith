// Vocabulary data. pos = so'z turkumi (Uzbek). ipa = US pronunciation.
const WORDS = [
  {
    word: "qualify", ipa: "/ˈkwɑːlɪfaɪ/", pos: "fe'l (verb)",
    uz: "malakaga ega bo'lmoq, loyiq bo'lmoq; saralanmoq",
    usage: "Biror narsaga huquq yoki layoqat qozonish, imtihon/saralashdan o'tish haqida ishlatiladi.",
    synonyms: ["be eligible", "meet requirements", "be entitled"],
    examples: [
      { en: "You need a degree to qualify for this job.", uz: "Bu ishga loyiq bo'lish uchun sizga diplom kerak." },
      { en: "She qualified as a doctor last year.", uz: "U o'tgan yili shifokor malakasini oldi." },
      { en: "Our team qualified for the final.", uz: "Bizning jamoa finalga saralandi." },
      { en: "Low income may qualify you for support.", uz: "Past daromad sizga yordam olishga huquq berishi mumkin." }
    ]
  },
  {
    word: "quality", ipa: "/ˈkwɑːləti/", pos: "ot (noun)",
    uz: "sifat, fazilat",
    usage: "Biror narsaning qanchalik yaxshi ekanini yoki insonning xususiyatini ifodalashda.",
    synonyms: ["standard", "grade", "characteristic", "trait"],
    examples: [
      { en: "The quality of the food was excellent.", uz: "Ovqatning sifati ajoyib edi." },
      { en: "We sell high-quality products.", uz: "Biz yuqori sifatli mahsulotlar sotamiz." },
      { en: "Patience is an important quality in a teacher.", uz: "Sabr o'qituvchidagi muhim fazilat." },
      { en: "They focus on quality, not quantity.", uz: "Ular miqdorga emas, sifatga e'tibor berishadi." }
    ]
  },
  {
    word: "quarter", ipa: "/ˈkwɔːrtər/", pos: "ot (noun)",
    uz: "chorak; chorak yil; mahalla; 25 sent",
    usage: "Biror narsaning to'rtdan biri, yil choragi yoki shaharning bir qismi haqida.",
    synonyms: ["fourth", "district", "three months"],
    examples: [
      { en: "Cut the apple into quarters.", uz: "Olmani to'rt bo'lakka bo'ling." },
      { en: "Sales rose in the last quarter.", uz: "Oxirgi chorakda sotuvlar oshdi." },
      { en: "They live in the old quarter of the city.", uz: "Ular shaharning eski mahallasida yashashadi." },
      { en: "It's a quarter past nine.", uz: "Soat to'qqizdan o'n besh daqiqa o'tdi." }
    ]
  },
  {
    word: "quarterback", ipa: "/ˈkwɔːrtərbæk/", pos: "ot (noun)",
    uz: "kvoterbek (amerika futbolida hujum boshlovchi o'yinchi); rahbar/yetakchi",
    usage: "Amerika futbolida asosiy hujumchi o'yinchi; majoziy ma'noda jarayonni boshqaruvchi.",
    synonyms: ["QB", "playmaker", "leader"],
    examples: [
      { en: "The quarterback threw a perfect pass.", uz: "Kvoterbek mukammal uzatma berdi." },
      { en: "He was the star quarterback in college.", uz: "U kollejda yulduz kvoterbek edi." },
      { en: "She quarterbacked the whole project.", uz: "U butun loyihani boshqarib bordi." }
    ]
  },
  {
    word: "question", ipa: "/ˈkwestʃən/", pos: "ot (noun) / fe'l (verb)",
    uz: "savol; so'roq; shubha qilmoq",
    usage: "Savol berish yoki biror narsaga shubha bildirish haqida.",
    synonyms: ["query", "inquiry", "doubt", "challenge"],
    examples: [
      { en: "Can I ask you a question?", uz: "Sizga savol bersam bo'ladimi?" },
      { en: "That's a difficult question.", uz: "Bu qiyin savol." },
      { en: "Nobody questioned his decision.", uz: "Hech kim uning qaroriga shubha qilmadi." },
      { en: "The teacher answered every question.", uz: "O'qituvchi har bir savolga javob berdi." }
    ]
  },
  {
    word: "quick", ipa: "/kwɪk/", pos: "sifat (adjective)",
    uz: "tez, chaqqon",
    usage: "Tez sodir bo'ladigan yoki tez harakat qiladigan narsa/odam haqida.",
    synonyms: ["fast", "rapid", "swift", "speedy"],
    examples: [
      { en: "Let's have a quick lunch.", uz: "Tezgina tushlik qilaylik." },
      { en: "She gave a quick answer.", uz: "U tez javob berdi." },
      { en: "Be quick, the bus is coming!", uz: "Tez bo'l, avtobus kelyapti!" },
      { en: "He is a quick learner.", uz: "U tez o'rganadigan odam." }
    ]
  },
  {
    word: "quickly", ipa: "/ˈkwɪkli/", pos: "ravish (adverb)",
    uz: "tez, tezda",
    usage: "Harakat qanday — tez bajarilishini bildiradi.",
    synonyms: ["fast", "rapidly", "swiftly", "promptly"],
    examples: [
      { en: "He finished his work quickly.", uz: "U ishini tez tugatdi." },
      { en: "Please come quickly.", uz: "Iltimos, tez keling." },
      { en: "The news spread quickly.", uz: "Yangilik tez tarqaldi." },
      { en: "She quickly understood the problem.", uz: "U muammoni tezda tushundi." }
    ]
  },
  {
    word: "quiet", ipa: "/ˈkwaɪət/", pos: "sifat (adjective)",
    uz: "jim, tinch, sokin",
    usage: "Ovoz yo'q yoki kam joy/odam haqida; tinchlik holatini bildiradi.",
    synonyms: ["silent", "calm", "peaceful", "still"],
    examples: [
      { en: "Please be quiet during the exam.", uz: "Imtihon paytida jim turing." },
      { en: "It's a quiet little town.", uz: "Bu tinch kichik shaharcha." },
      { en: "He is a quiet and shy boy.", uz: "U jim va uyatchan bola." },
      { en: "The house was quiet at night.", uz: "Kechasi uy jim edi." }
    ]
  },
  {
    word: "quietly", ipa: "/ˈkwaɪətli/", pos: "ravish (adverb)",
    uz: "jimgina, sekin",
    usage: "Harakat ovozsiz yoki sokin tarzda bajarilishini bildiradi.",
    synonyms: ["silently", "softly", "calmly"],
    examples: [
      { en: "She closed the door quietly.", uz: "U eshikni jimgina yopdi." },
      { en: "They talked quietly in the corner.", uz: "Ular burchakda sekin gaplashishdi." },
      { en: "He sat quietly and waited.", uz: "U jimgina o'tirib kutdi." }
    ]
  },
  {
    word: "quit", ipa: "/kwɪt/", pos: "fe'l (verb)",
    uz: "tashlamoq, voz kechmoq, ishdan bo'shamoq",
    usage: "Biror ishni, odatni yoki joyni to'xtatish/tark etish haqida.",
    synonyms: ["stop", "leave", "give up", "resign"],
    examples: [
      { en: "He decided to quit smoking.", uz: "U chekishni tashlashga qaror qildi." },
      { en: "She quit her job last month.", uz: "U o'tgan oy ishdan bo'shadi." },
      { en: "Don't quit when things get hard.", uz: "Qiyin bo'lganda voz kechma." },
      { en: "I quit the game because it was boring.", uz: "Zerikarli bo'lgani uchun o'yinni tashladim." }
    ]
  },
  {
    word: "quite", ipa: "/kwaɪt/", pos: "ravish (adverb)",
    uz: "ancha, juda; tamoman",
    usage: "Darajani kuchaytirish uchun ('ancha') yoki to'liqlikni ('butunlay') bildirish uchun.",
    synonyms: ["fairly", "rather", "completely", "totally"],
    examples: [
      { en: "The film was quite good.", uz: "Film ancha yaxshi edi." },
      { en: "I'm not quite ready yet.", uz: "Men hali tayyor emasman." },
      { en: "It's quite cold today.", uz: "Bugun ancha sovuq." },
      { en: "You're quite right.", uz: "Siz mutlaqo haqsiz." }
    ]
  },
  {
    word: "quote", ipa: "/kwoʊt/", pos: "fe'l (verb) / ot (noun)",
    uz: "iqtibos keltirmoq; iqtibos; narx taklifi",
    usage: "Birovning so'zlarini aytib o'tish yoki narx aytish haqida.",
    synonyms: ["cite", "repeat", "estimate", "citation"],
    examples: [
      { en: "He quoted a famous writer.", uz: "U mashhur yozuvchidan iqtibos keltirdi." },
      { en: "Can you give me a quote for the repair?", uz: "Ta'mirlash uchun narx ayta olasizmi?" },
      { en: "She wrote a quote on the board.", uz: "U doskaga bir iqtibos yozdi." },
      { en: "The article quotes several experts.", uz: "Maqola bir nechta ekspertdan iqtibos keltiradi." }
    ]
  },

  {
    word: "race", ipa: "/reɪs/", pos: "ot (noun) / fe'l (verb)",
    uz: "poyga; irq; yugurib musobaqalashmoq",
    usage: "Tezlik musobaqasi yoki insonlarning irqiy guruhi haqida.",
    synonyms: ["contest", "competition", "ethnicity", "sprint"],
    examples: [
      { en: "He won the 100-meter race.", uz: "U 100 metrlik poygada g'olib chiqdi." },
      { en: "People of every race live here.", uz: "Bu yerda har xil irqdagi odamlar yashaydi." },
      { en: "The children raced to the gate.", uz: "Bolalar darvozagacha poyga qilishdi." },
      { en: "It was a close race for president.", uz: "Prezidentlik uchun kurash juda tarang edi." }
    ]
  },
  {
    word: "racial", ipa: "/ˈreɪʃəl/", pos: "sifat (adjective)",
    uz: "irqiy",
    usage: "Irqlar yoki ular o'rtasidagi munosabatlarga oid narsalarni ta'riflashda.",
    synonyms: ["ethnic", "race-related"],
    examples: [
      { en: "They fought against racial discrimination.", uz: "Ular irqiy kamsitishga qarshi kurashdi." },
      { en: "The city has great racial diversity.", uz: "Shaharda katta irqiy xilma-xillik bor." },
      { en: "Racial equality is a basic right.", uz: "Irqiy tenglik asosiy huquqdir." }
    ]
  },
  {
    word: "radical", ipa: "/ˈrædɪkəl/", pos: "sifat (adjective) / ot (noun)",
    uz: "tubdan o'zgartiruvchi, radikal; keskin",
    usage: "Juda katta, tub o'zgarish yoki o'ta qarashlarni ifodalashda.",
    synonyms: ["extreme", "drastic", "revolutionary", "fundamental"],
    examples: [
      { en: "The company made radical changes.", uz: "Kompaniya tub o'zgarishlar qildi." },
      { en: "He has radical political ideas.", uz: "Uning radikal siyosiy g'oyalari bor." },
      { en: "This is a radical new approach.", uz: "Bu mutlaqo yangi yondashuv." }
    ]
  },
  {
    word: "radio", ipa: "/ˈreɪdioʊ/", pos: "ot (noun)",
    uz: "radio",
    usage: "Ovozli eshittirish qurilmasi yoki tarmog'i haqida.",
    synonyms: ["wireless", "broadcast"],
    examples: [
      { en: "I listen to the radio every morning.", uz: "Men har kuni ertalab radio tinglayman." },
      { en: "Turn up the radio, please.", uz: "Iltimos, radioni balandroq qiling." },
      { en: "The song is playing on the radio.", uz: "Qo'shiq radioda yangramoqda." }
    ]
  },
  {
    word: "rail", ipa: "/reɪl/", pos: "ot (noun)",
    uz: "rels; temir yo'l; panjara, suyanchiq",
    usage: "Poyezd yo'li yoki ushlab turish uchun metall tayoq/to'siq haqida.",
    synonyms: ["track", "bar", "railing"],
    examples: [
      { en: "Hold the rail when you go down.", uz: "Pastga tushganda panjaradan ushlang." },
      { en: "They travel by rail.", uz: "Ular temir yo'l orqali sayohat qilishadi." },
      { en: "The train left the rails.", uz: "Poyezd relsdan chiqib ketdi." }
    ]
  },
  {
    word: "rain", ipa: "/reɪn/", pos: "ot (noun) / fe'l (verb)",
    uz: "yomg'ir; yomg'ir yog'moq",
    usage: "Osmondan yog'adigan suv haqida; ob-havoni tasvirlashda.",
    synonyms: ["rainfall", "shower", "downpour"],
    examples: [
      { en: "We got wet in the rain.", uz: "Biz yomg'irda ho'l bo'lib qoldik." },
      { en: "It started to rain heavily.", uz: "Qattiq yomg'ir yog'a boshladi." },
      { en: "The rain stopped in the afternoon.", uz: "Tushdan keyin yomg'ir to'xtadi." },
      { en: "Take an umbrella in case it rains.", uz: "Yomg'ir yog'sa deb soyabon oling." }
    ]
  },
  {
    word: "raise", ipa: "/reɪz/", pos: "fe'l (verb) / ot (noun)",
    uz: "ko'tarmoq; tarbiyalamoq; (mablag') yig'moq; maosh oshirilishi",
    usage: "Biror narsani yuqoriga ko'tarish, bolani o'stirish yoki masalani o'rtaga tashlash haqida.",
    synonyms: ["lift", "increase", "bring up", "rear"],
    examples: [
      { en: "Please raise your hand to answer.", uz: "Javob berish uchun qo'lingizni ko'taring." },
      { en: "They raised three children.", uz: "Ular uch farzandni tarbiyaladi." },
      { en: "The company raised prices again.", uz: "Kompaniya yana narxlarni oshirdi." },
      { en: "She raised an important question.", uz: "U muhim savolni o'rtaga tashladi." }
    ]
  },
  {
    word: "range", ipa: "/reɪndʒ/", pos: "ot (noun) / fe'l (verb)",
    uz: "qator, doira; oraliq; (turlicha) o'zgarmoq",
    usage: "Narsalarning xilma-xilligi yoki minimal–maksimal oralig'i haqida.",
    synonyms: ["variety", "scope", "span", "spectrum"],
    examples: [
      { en: "We sell a wide range of products.", uz: "Biz keng turdagi mahsulotlar sotamiz." },
      { en: "Prices range from $10 to $100.", uz: "Narxlar 10 dan 100 dollargacha o'zgaradi." },
      { en: "This topic is out of my range.", uz: "Bu mavzu mening doiramdan tashqarida." },
      { en: "The age range is wide here.", uz: "Bu yerda yosh oralig'i keng." }
    ]
  },
  {
    word: "rank", ipa: "/ræŋk/", pos: "ot (noun) / fe'l (verb)",
    uz: "daraja, unvon; o'rin; saralamoq",
    usage: "Tartib yoki ahamiyat bo'yicha o'rinni bildirishda (sport, harbiy, reyting).",
    synonyms: ["position", "grade", "status", "rate"],
    examples: [
      { en: "He holds a high rank in the army.", uz: "U armiyada yuqori unvonga ega." },
      { en: "The team ranks first in the league.", uz: "Jamoa ligada birinchi o'rinda turibdi." },
      { en: "She rose through the ranks quickly.", uz: "U tez orada lavozim pog'onasidan ko'tarildi." }
    ]
  },
  {
    word: "rapid", ipa: "/ˈræpɪd/", pos: "sifat (adjective)",
    uz: "tez, jadal",
    usage: "Juda tez sodir bo'ladigan o'zgarish yoki harakatni ta'riflashda (ko'pincha rasmiy).",
    synonyms: ["fast", "quick", "swift", "speedy"],
    examples: [
      { en: "The country saw rapid growth.", uz: "Mamlakat jadal o'sishni boshdan kechirdi." },
      { en: "There was a rapid change in weather.", uz: "Ob-havo tez o'zgardi." },
      { en: "He made a rapid recovery.", uz: "U tez tuzalib ketdi." }
    ]
  },
  {
    word: "rapidly", ipa: "/ˈræpɪdli/", pos: "ravish (adverb)",
    uz: "tez, jadal sur'atda",
    usage: "Biror jarayon tez kechishini bildiradi (rasmiy uslub).",
    synonyms: ["quickly", "fast", "swiftly"],
    examples: [
      { en: "Technology is changing rapidly.", uz: "Texnologiya jadal o'zgarmoqda." },
      { en: "The population grew rapidly.", uz: "Aholi soni tez ko'paydi." },
      { en: "Prices are rising rapidly.", uz: "Narxlar tez ko'tarilmoqda." }
    ]
  },
  {
    word: "rare", ipa: "/rer/", pos: "sifat (adjective)",
    uz: "kam uchraydigan, noyob; (go'sht) yarim pishgan",
    usage: "Kam topiladigan yoki kamdan-kam sodir bo'ladigan narsa haqida.",
    synonyms: ["uncommon", "unusual", "scarce"],
    examples: [
      { en: "This is a rare bird.", uz: "Bu noyob qush." },
      { en: "It's rare to see snow here.", uz: "Bu yerda qor ko'rish kam uchraydi." },
      { en: "He likes his steak rare.", uz: "U bifshteksni yarim pishgan holda yoqtiradi." }
    ]
  },
  {
    word: "rarely", ipa: "/ˈrerli/", pos: "ravish (adverb)",
    uz: "kamdan-kam, kam hollarda",
    usage: "Biror narsa juda kam sodir bo'lishini bildiradi.",
    synonyms: ["seldom", "hardly ever", "infrequently"],
    examples: [
      { en: "She rarely eats meat.", uz: "U kamdan-kam go'sht yeydi." },
      { en: "He rarely makes mistakes.", uz: "U kam hollarda xato qiladi." },
      { en: "We rarely go out at night.", uz: "Biz kechasi kamdan-kam tashqariga chiqamiz." }
    ]
  },
  {
    word: "rate", ipa: "/reɪt/", pos: "ot (noun) / fe'l (verb)",
    uz: "stavka, daraja, sur'at; baholamoq",
    usage: "Tezlik, narx yoki ko'rsatkichni hamda biror narsani baholashni ifodalashda.",
    synonyms: ["speed", "level", "ratio", "evaluate"],
    examples: [
      { en: "The birth rate is falling.", uz: "Tug'ilish darajasi pasaymoqda." },
      { en: "What's the interest rate?", uz: "Foiz stavkasi qancha?" },
      { en: "Users rate the app five stars.", uz: "Foydalanuvchilar ilovani besh yulduz bilan baholaydi." },
      { en: "He was driving at a high rate of speed.", uz: "U juda tez tezlikda haydab borardi." }
    ]
  },
  {
    word: "rather", ipa: "/ˈræðər/", pos: "ravish (adverb)",
    uz: "ancha, birmuncha; ko'ra (afzal ko'rmoq)",
    usage: "Darajani yumshoq kuchaytirish yoki tanlovda afzallikni ('would rather') bildirishda.",
    synonyms: ["fairly", "quite", "instead", "preferably"],
    examples: [
      { en: "It's rather cold outside.", uz: "Tashqarida ancha sovuq." },
      { en: "I'd rather stay at home.", uz: "Men uyda qolishni afzal ko'raman." },
      { en: "She was rather tired after work.", uz: "U ishdan keyin ancha charchagandi." },
      { en: "He chose tea rather than coffee.", uz: "U kofedan ko'ra choyni tanladi." }
    ]
  },
  {
    word: "rating", ipa: "/ˈreɪtɪŋ/", pos: "ot (noun)",
    uz: "reyting, baho; ko'rsatkich",
    usage: "Biror narsaning sifatini yoki mashhurligini ko'rsatuvchi baho haqida.",
    synonyms: ["score", "ranking", "evaluation", "grade"],
    examples: [
      { en: "The movie got a high rating.", uz: "Film yuqori reyting oldi." },
      { en: "This hotel has a five-star rating.", uz: "Bu mehmonxona besh yulduzli bahoga ega." },
      { en: "The show's ratings dropped.", uz: "Ko'rsatuvning reytingi tushdi." }
    ]
  },
  {
    word: "ratio", ipa: "/ˈreɪʃioʊ/", pos: "ot (noun)",
    uz: "nisbat",
    usage: "Ikki miqdor o'rtasidagi sonli nisbatni ifodalashda.",
    synonyms: ["proportion", "rate", "balance"],
    examples: [
      { en: "The ratio of boys to girls is 2 to 1.", uz: "O'g'il va qizlar nisbati 2 ga 1." },
      { en: "Mix water and flour in equal ratio.", uz: "Suv va unni teng nisbatda aralashtiring." },
      { en: "The debt-to-income ratio is high.", uz: "Qarzning daromadga nisbati yuqori." }
    ]
  },
  {
    word: "raw", ipa: "/rɔː/", pos: "sifat (adjective)",
    uz: "xom, pishmagan; tayyorlanmagan",
    usage: "Pishirilmagan ovqat yoki qayta ishlanmagan material/ma'lumot haqida.",
    synonyms: ["uncooked", "unprocessed", "natural"],
    examples: [
      { en: "Don't eat raw chicken.", uz: "Xom tovuq go'shtini yemang." },
      { en: "We need raw materials for the factory.", uz: "Zavod uchun xom ashyo kerak." },
      { en: "This is the raw data, not the report.", uz: "Bu xom ma'lumot, hisobot emas." }
    ]
  },

  {
    word: "reach", ipa: "/riːtʃ/", pos: "fe'l (verb) / ot (noun)",
    uz: "yetib bormoq, yetmoq; qo'l uzatmoq; erishmoq",
    usage: "Joyga yetib borish, qo'l cho'zish yoki kelishuvga erishish haqida.",
    synonyms: ["arrive at", "get to", "attain", "extend"],
    examples: [
      { en: "We reached the city at night.", uz: "Biz shaharga kechasi yetib bordik." },
      { en: "I can't reach the top shelf.", uz: "Men eng yuqori javonga yeta olmayman." },
      { en: "They finally reached an agreement.", uz: "Ular nihoyat kelishuvga erishdilar." },
      { en: "You can reach me by phone.", uz: "Menga telefon orqali bog'lana olasiz." }
    ]
  },
  {
    word: "react", ipa: "/riˈækt/", pos: "fe'l (verb)",
    uz: "munosabat bildirmoq, javob bermoq; reaksiyaga kirishmoq",
    usage: "Biror voqea yoki gapga javoban harakat qilish haqida.",
    synonyms: ["respond", "reply", "answer"],
    examples: [
      { en: "How did she react to the news?", uz: "U yangilikka qanday munosabat bildirdi?" },
      { en: "He reacted angrily to the question.", uz: "U savolga jahl bilan javob qildi." },
      { en: "Children react quickly to praise.", uz: "Bolalar maqtovga tez munosabat bildiradi." }
    ]
  },
  {
    word: "reaction", ipa: "/riˈækʃən/", pos: "ot (noun)",
    uz: "munosabat, javob, reaksiya",
    usage: "Biror narsaga bo'lgan javob harakati yoki kimyoviy reaksiya haqida.",
    synonyms: ["response", "reply", "feedback"],
    examples: [
      { en: "His reaction surprised everyone.", uz: "Uning munosabati hammani hayratga soldi." },
      { en: "What was the public's reaction?", uz: "Jamoatchilikning munosabati qanday bo'ldi?" },
      { en: "The chemical reaction created heat.", uz: "Kimyoviy reaksiya issiqlik hosil qildi." }
    ]
  },
  {
    word: "read", ipa: "/riːd/", pos: "fe'l (verb)",
    uz: "o'qimoq",
    usage: "Yozma matnni tushunish/talqin qilish haqida.",
    synonyms: ["study", "scan", "peruse"],
    examples: [
      { en: "I read a book every week.", uz: "Men har hafta kitob o'qiyman." },
      { en: "She read the letter twice.", uz: "U xatni ikki marta o'qidi." },
      { en: "Can you read this word for me?", uz: "Bu so'zni men uchun o'qib bera olasizmi?" },
      { en: "He likes reading the news online.", uz: "U yangiliklarni internetda o'qishni yoqtiradi." }
    ]
  },
  {
    word: "reader", ipa: "/ˈriːdər/", pos: "ot (noun)",
    uz: "o'quvchi, kitobxon; o'qish moslamasi",
    usage: "Matn o'qiydigan inson yoki o'qish uchun qurilma/dastur haqida.",
    synonyms: ["bookworm", "audience"],
    examples: [
      { en: "She is an avid reader.", uz: "U ishtiyoqli kitobxon." },
      { en: "The book has millions of readers.", uz: "Kitobning millionlab o'quvchilari bor." },
      { en: "I use an e-book reader on the train.", uz: "Men poyezdda elektron kitob o'qish moslamasidan foydalanaman." }
    ]
  },
  {
    word: "reading", ipa: "/ˈriːdɪŋ/", pos: "ot (noun)",
    uz: "o'qish; ko'rsatkich (asbobning)",
    usage: "O'qish jarayoni yoki o'lchov asbobining ko'rsatkichi haqida.",
    synonyms: ["study", "measurement", "interpretation"],
    examples: [
      { en: "Reading is my favorite hobby.", uz: "O'qish mening sevimli mashg'ulotim." },
      { en: "The reading test was easy.", uz: "O'qish testi oson edi." },
      { en: "The meter reading was high.", uz: "Hisoblagich ko'rsatkichi yuqori edi." }
    ]
  },
  {
    word: "ready", ipa: "/ˈredi/", pos: "sifat (adjective)",
    uz: "tayyor",
    usage: "Biror narsani qilishga shay holatda ekanlikni bildirishda.",
    synonyms: ["prepared", "set", "willing"],
    examples: [
      { en: "Are you ready to go?", uz: "Ketishga tayyormisiz?" },
      { en: "Dinner is ready.", uz: "Kechki ovqat tayyor." },
      { en: "I'm ready for the exam.", uz: "Men imtihonga tayyorman." },
      { en: "Get ready, the show is starting.", uz: "Tayyorlaning, tomosha boshlanmoqda." }
    ]
  },
  {
    word: "real", ipa: "/ˈriːəl/", pos: "sifat (adjective)",
    uz: "haqiqiy, asl",
    usage: "Hayoliy emas, chinakam mavjud yoki yasama bo'lmagan narsa haqida.",
    synonyms: ["genuine", "actual", "true", "authentic"],
    examples: [
      { en: "Is this a real diamond?", uz: "Bu haqiqiy olmosmi?" },
      { en: "He is a real friend.", uz: "U haqiqiy do'st." },
      { en: "Tell me the real reason.", uz: "Menga asl sababni ayting." },
      { en: "The danger is very real.", uz: "Xavf juda real." }
    ]
  },
  {
    word: "reality", ipa: "/riˈæləti/", pos: "ot (noun)",
    uz: "haqiqat, voqelik",
    usage: "Aslida mavjud bo'lgan holat — orzu yoki tasavvurdan farqli o'laroq.",
    synonyms: ["fact", "truth", "actuality"],
    examples: [
      { en: "In reality, the job is very hard.", uz: "Aslida, bu ish juda og'ir." },
      { en: "She must face reality.", uz: "U haqiqatga ro'baro' bo'lishi kerak." },
      { en: "His dream became a reality.", uz: "Uning orzusi haqiqatga aylandi." }
    ]
  },
  {
    word: "realize", ipa: "/ˈriːəlaɪz/", pos: "fe'l (verb)",
    uz: "anglab yetmoq, tushunmoq; ro'yobga chiqarmoq",
    usage: "Biror narsani birdan tushunib/idrok qilish yoki rejani amalga oshirish haqida.",
    synonyms: ["understand", "recognize", "achieve"],
    examples: [
      { en: "I didn't realize it was so late.", uz: "Bunchalik kech bo'lganini anglamabman." },
      { en: "She realized her mistake too late.", uz: "U xatosini juda kech angladi." },
      { en: "He finally realized his dream.", uz: "U nihoyat orzusini ro'yobga chiqardi." }
    ]
  },
  {
    word: "really", ipa: "/ˈriːəli/", pos: "ravish (adverb)",
    uz: "haqiqatan, rostdan; juda",
    usage: "Tasdiqni kuchaytirish yoki ajablanishni bildirishda.",
    synonyms: ["truly", "actually", "very", "genuinely"],
    examples: [
      { en: "I really like this song.", uz: "Menga bu qo'shiq rostdan yoqadi." },
      { en: "Is that really true?", uz: "Bu haqiqatan ham rostmi?" },
      { en: "She is really talented.", uz: "U juda iqtidorli." },
      { en: "I'm really sorry.", uz: "Men chindan ham uzr so'rayman." }
    ]
  },
  {
    word: "reason", ipa: "/ˈriːzən/", pos: "ot (noun)",
    uz: "sabab; aql, mantiq",
    usage: "Nima uchun biror narsa yuz berganini tushuntirishda.",
    synonyms: ["cause", "motive", "explanation", "logic"],
    examples: [
      { en: "What's the reason for the delay?", uz: "Kechikishning sababi nima?" },
      { en: "There's no reason to worry.", uz: "Tashvishlanishga sabab yo'q." },
      { en: "She left for personal reasons.", uz: "U shaxsiy sabablarga ko'ra ketdi." },
      { en: "Listen to reason.", uz: "Aql bilan ish tuting." }
    ]
  },
  {
    word: "reasonable", ipa: "/ˈriːzənəbəl/", pos: "sifat (adjective)",
    uz: "oqilona, mantiqiy; o'rtacha (narx)",
    usage: "Mantiqqa to'g'ri keladigan, adolatli yoki me'yoridagi narsalar haqida.",
    synonyms: ["sensible", "fair", "logical", "moderate"],
    examples: [
      { en: "That's a reasonable price.", uz: "Bu o'rinli narx." },
      { en: "Be reasonable, please.", uz: "Iltimos, oqilona bo'ling." },
      { en: "He made a reasonable request.", uz: "U mantiqiy iltimos qildi." }
    ]
  },
  {
    word: "recall", ipa: "/rɪˈkɔːl/", pos: "fe'l (verb) / ot (noun)",
    uz: "eslamoq; qaytarib chaqirmoq (mahsulotni)",
    usage: "Xotirlash yoki nuqsonli mahsulotni bozordan qaytarib olish haqida.",
    synonyms: ["remember", "recollect", "withdraw"],
    examples: [
      { en: "I can't recall his name.", uz: "Uning ismini eslay olmayapman." },
      { en: "Do you recall what happened?", uz: "Nima bo'lganini eslaysizmi?" },
      { en: "The company recalled the faulty cars.", uz: "Kompaniya nuqsonli mashinalarni qaytarib oldi." }
    ]
  },
  {
    word: "receive", ipa: "/rɪˈsiːv/", pos: "fe'l (verb)",
    uz: "olmoq, qabul qilmoq",
    usage: "Berilgan yoki yuborilgan narsani olish haqida.",
    synonyms: ["get", "obtain", "accept", "gain"],
    examples: [
      { en: "I received your email.", uz: "Sizning xatingizni oldim." },
      { en: "She received a gift on her birthday.", uz: "U tug'ilgan kunida sovg'a oldi." },
      { en: "He received an award for his work.", uz: "U ishi uchun mukofot oldi." },
      { en: "We receive many calls every day.", uz: "Biz har kuni ko'p qo'ng'iroq qabul qilamiz." }
    ]
  },
  {
    word: "recent", ipa: "/ˈriːsənt/", pos: "sifat (adjective)",
    uz: "yaqinda bo'lgan, so'nggi",
    usage: "Yaqin o'tmishda sodir bo'lgan voqea yoki narsani ta'riflashda.",
    synonyms: ["latest", "new", "current"],
    examples: [
      { en: "In recent years, prices have risen.", uz: "So'nggi yillarda narxlar oshdi." },
      { en: "This is a recent photo.", uz: "Bu yaqinda olingan surat." },
      { en: "Recent news shows improvement.", uz: "So'nggi yangiliklar yaxshilanishni ko'rsatadi." }
    ]
  },
  {
    word: "recently", ipa: "/ˈriːsəntli/", pos: "ravish (adverb)",
    uz: "yaqinda, so'nggi paytlarda",
    usage: "Yaqin o'tmishda sodir bo'lgan harakatni bildiradi.",
    synonyms: ["lately", "newly", "of late"],
    examples: [
      { en: "I recently moved to a new city.", uz: "Men yaqinda yangi shaharga ko'chib o'tdim." },
      { en: "Have you seen him recently?", uz: "Uni yaqinda ko'rdingizmi?" },
      { en: "She recently started a new job.", uz: "U yaqinda yangi ishni boshladi." }
    ]
  },
  {
    word: "recipe", ipa: "/ˈresəpi/", pos: "ot (noun)",
    uz: "retsept (taom tayyorlash usuli)",
    usage: "Taom tayyorlash bo'yicha yo'riqnoma; majoziy ma'noda biror natijaga olib keluvchi usul.",
    synonyms: ["formula", "instructions", "method"],
    examples: [
      { en: "This is my grandmother's recipe.", uz: "Bu buvimning retsepti." },
      { en: "Follow the recipe carefully.", uz: "Retseptga diqqat bilan amal qiling." },
      { en: "Hard work is a recipe for success.", uz: "Mehnat — muvaffaqiyat kalitidir." }
    ]
  },
  {
    word: "recognition", ipa: "/ˌrekəɡˈnɪʃən/", pos: "ot (noun)",
    uz: "tan olish, e'tirof; tanib olish",
    usage: "Xizmatni e'tirof etish yoki biror narsani/odamni tanib olish haqida.",
    synonyms: ["acknowledgment", "identification", "credit"],
    examples: [
      { en: "She got recognition for her research.", uz: "U tadqiqoti uchun e'tirofga sazovor bo'ldi." },
      { en: "Face recognition unlocks the phone.", uz: "Yuzni tanib olish telefonni ochadi." },
      { en: "The brand has worldwide recognition.", uz: "Brend butun dunyoda tanilgan." }
    ]
  },
  {
    word: "recognize", ipa: "/ˈrekəɡnaɪz/", pos: "fe'l (verb)",
    uz: "tanimoq; tan olmoq",
    usage: "Tanish narsani/odamni aniqlash yoki haqiqat sifatida qabul qilish haqida.",
    synonyms: ["identify", "know", "acknowledge"],
    examples: [
      { en: "I didn't recognize you with glasses.", uz: "Sizni ko'zoynakda tanimadim." },
      { en: "Do you recognize this song?", uz: "Bu qo'shiqni tanidingizmi?" },
      { en: "We recognize his great talent.", uz: "Biz uning buyuk iste'dodini tan olamiz." }
    ]
  },

  {
    word: "recommend", ipa: "/ˌrekəˈmend/", pos: "fe'l (verb)",
    uz: "tavsiya qilmoq",
    usage: "Biror narsani yaxshi deb maslahat berishda.",
    synonyms: ["suggest", "advise", "propose"],
    examples: [
      { en: "I recommend this restaurant.", uz: "Men bu restoranni tavsiya qilaman." },
      { en: "The doctor recommended rest.", uz: "Shifokor dam olishni tavsiya qildi." },
      { en: "Can you recommend a good book?", uz: "Yaxshi kitob tavsiya qila olasizmi?" },
      { en: "She recommended me for the job.", uz: "U meni ishga tavsiya qildi." }
    ]
  },
  {
    word: "recommendation", ipa: "/ˌrekəmenˈdeɪʃən/", pos: "ot (noun)",
    uz: "tavsiya, tavsiyanoma",
    usage: "Maslahat yoki rasmiy tavsiya xati haqida.",
    synonyms: ["suggestion", "advice", "endorsement"],
    examples: [
      { en: "I followed your recommendation.", uz: "Men sizning tavsiyangizga amal qildim." },
      { en: "She wrote a letter of recommendation.", uz: "U tavsiyanoma yozdi." },
      { en: "What's your recommendation?", uz: "Sizning tavsiyangiz qanday?" }
    ]
  },
  {
    word: "record", ipa: "/ˈrekərd/ (ot), /rɪˈkɔːrd/ (fe'l)", pos: "ot (noun) / fe'l (verb)",
    uz: "yozuv, rekord; yozib olmoq",
    usage: "Yozma/audio ma'lumot, eng yaxshi natija yoki ovoz yozish haqida.",
    synonyms: ["document", "log", "register", "achievement"],
    examples: [
      { en: "Keep a record of your expenses.", uz: "Xarajatlaringiz yozuvini yuriting." },
      { en: "He broke the world record.", uz: "U jahon rekordini yangiladi." },
      { en: "They recorded the meeting.", uz: "Ular yig'ilishni yozib olishdi." },
      { en: "The band recorded a new album.", uz: "Guruh yangi albom yozdi." }
    ]
  },
  {
    word: "recording", ipa: "/rɪˈkɔːrdɪŋ/", pos: "ot (noun)",
    uz: "yozuv (audio/video)",
    usage: "Yozib olingan ovoz yoki video haqida.",
    synonyms: ["tape", "track", "video"],
    examples: [
      { en: "Listen to the recording again.", uz: "Yozuvni yana bir bor tinglang." },
      { en: "The recording quality is poor.", uz: "Yozuv sifati past." },
      { en: "She made a recording of the lecture.", uz: "U ma'ruzaning yozuvini oldi." }
    ]
  },
  {
    word: "recover", ipa: "/rɪˈkʌvər/", pos: "fe'l (verb)",
    uz: "tuzalmoq, sog'aymoq; qaytarib olmoq",
    usage: "Kasallikdan keyin yaxshilanish yoki yo'qotilgan narsani qaytarish haqida.",
    synonyms: ["heal", "improve", "regain", "retrieve"],
    examples: [
      { en: "He is recovering from surgery.", uz: "U operatsiyadan keyin tuzalmoqda." },
      { en: "The economy slowly recovered.", uz: "Iqtisodiyot asta-sekin tiklandi." },
      { en: "Police recovered the stolen money.", uz: "Politsiya o'g'irlangan pulni qaytarib oldi." }
    ]
  },
  {
    word: "recovery", ipa: "/rɪˈkʌvəri/", pos: "ot (noun)",
    uz: "tiklanish, sog'ayish",
    usage: "Salomatlik, iqtisodiyot yoki yo'qotilgan narsaning tiklanishi haqida.",
    synonyms: ["healing", "improvement", "rebound"],
    examples: [
      { en: "She made a full recovery.", uz: "U to'liq sog'ayib ketdi." },
      { en: "Economic recovery takes time.", uz: "Iqtisodiy tiklanish vaqt talab qiladi." },
      { en: "His recovery surprised the doctors.", uz: "Uning tuzalishi shifokorlarni hayratga soldi." }
    ]
  },
  {
    word: "recruit", ipa: "/rɪˈkruːt/", pos: "fe'l (verb) / ot (noun)",
    uz: "ishga olmoq, jalb qilmoq; yangi a'zo/xodim",
    usage: "Yangi xodim, a'zo yoki askarni jalb qilish haqida.",
    synonyms: ["hire", "enlist", "employ", "newcomer"],
    examples: [
      { en: "The company is recruiting new staff.", uz: "Kompaniya yangi xodimlarni ishga olmoqda." },
      { en: "They recruited him from a rival team.", uz: "Ular uni raqib jamoadan jalb qilishdi." },
      { en: "The new recruits started training.", uz: "Yangi a'zolar mashg'ulotni boshlashdi." }
    ]
  },
  {
    word: "red", ipa: "/red/", pos: "sifat (adjective) / ot (noun)",
    uz: "qizil",
    usage: "Rangni ifodalashda.",
    synonyms: ["crimson", "scarlet", "ruby"],
    examples: [
      { en: "She wore a red dress.", uz: "U qizil ko'ylak kiygandi." },
      { en: "Stop at the red light.", uz: "Qizil chiroqda to'xtang." },
      { en: "My favorite color is red.", uz: "Mening sevimli rangim qizil." }
    ]
  },
  {
    word: "reduce", ipa: "/rɪˈduːs/", pos: "fe'l (verb)",
    uz: "kamaytirmoq, qisqartirmoq",
    usage: "Miqdor, hajm yoki darajani kichraytirish haqida.",
    synonyms: ["decrease", "lower", "cut", "lessen"],
    examples: [
      { en: "We must reduce our costs.", uz: "Biz xarajatlarimizni kamaytirishimiz kerak." },
      { en: "Exercise reduces stress.", uz: "Mashqlar stressni kamaytiradi." },
      { en: "The store reduced its prices.", uz: "Do'kon narxlarini pasaytirdi." },
      { en: "Reduce speed near schools.", uz: "Maktablar yonida tezlikni kamaytiring." }
    ]
  },
  {
    word: "reduction", ipa: "/rɪˈdʌkʃən/", pos: "ot (noun)",
    uz: "kamayish, qisqarish; chegirma",
    usage: "Miqdor yoki narxning kamayishini ifodalashda.",
    synonyms: ["decrease", "cut", "discount"],
    examples: [
      { en: "There was a reduction in sales.", uz: "Sotuvda kamayish bo'ldi." },
      { en: "We offer a price reduction.", uz: "Biz narx chegirmasini taklif qilamiz." },
      { en: "A reduction in pollution is needed.", uz: "Ifloslanishni kamaytirish zarur." }
    ]
  },
  {
    word: "refer", ipa: "/rɪˈfɜːr/", pos: "fe'l (verb)",
    uz: "ishora qilmoq, murojaat qilmoq; yo'naltirmoq",
    usage: "Biror narsani eslatish, manbaga murojaat qilish yoki yo'llash haqida ('refer to').",
    synonyms: ["mention", "direct", "consult"],
    examples: [
      { en: "He referred to the report.", uz: "U hisobotga murojaat qildi." },
      { en: "Please refer to page 10.", uz: "Iltimos, 10-betga qarang." },
      { en: "The doctor referred me to a specialist.", uz: "Shifokor meni mutaxassisga yo'lladi." }
    ]
  },
  {
    word: "reference", ipa: "/ˈrefərəns/", pos: "ot (noun)",
    uz: "havola, manba; tavsiyanoma",
    usage: "Manbaga ishora yoki tavsiya/ma'lumotnoma haqida.",
    synonyms: ["citation", "mention", "source"],
    examples: [
      { en: "Add a reference to your sources.", uz: "Manbalaringizga havola qo'shing." },
      { en: "She gave me a good reference.", uz: "U menga yaxshi tavsiyanoma berdi." },
      { en: "Keep this book for reference.", uz: "Bu kitobni ma'lumot uchun saqlang." }
    ]
  },
  {
    word: "reflect", ipa: "/rɪˈflekt/", pos: "fe'l (verb)",
    uz: "aks ettirmoq; mulohaza qilmoq",
    usage: "Yorug'lik/tasvirni qaytarish, biror holatni ko'rsatish yoki o'ylab ko'rish haqida.",
    synonyms: ["mirror", "show", "ponder", "consider"],
    examples: [
      { en: "The lake reflects the mountains.", uz: "Ko'l tog'larni aks ettiradi." },
      { en: "The results reflect hard work.", uz: "Natijalar qattiq mehnatni aks ettiradi." },
      { en: "Take time to reflect on your choices.", uz: "Tanlovlaringiz ustida mulohaza qilishga vaqt ajrating." }
    ]
  },
  {
    word: "reflection", ipa: "/rɪˈflekʃən/", pos: "ot (noun)",
    uz: "aks, tasvir; mulohaza",
    usage: "Oynadagi aks, biror narsaning ko'rinishi yoki chuqur o'ylash haqida.",
    synonyms: ["image", "thought", "consideration"],
    examples: [
      { en: "She saw her reflection in the water.", uz: "U suvda o'z aksini ko'rdi." },
      { en: "Your grades are a reflection of your effort.", uz: "Baholaringiz harakatingizning aksidir." },
      { en: "After much reflection, he agreed.", uz: "Uzoq mulohazadan so'ng u rozi bo'ldi." }
    ]
  },
  {
    word: "reform", ipa: "/rɪˈfɔːrm/", pos: "ot (noun) / fe'l (verb)",
    uz: "islohot; isloh qilmoq",
    usage: "Tizim yoki qonunni yaxshilash uchun o'zgartirish haqida.",
    synonyms: ["change", "improve", "overhaul"],
    examples: [
      { en: "The government promised education reform.", uz: "Hukumat ta'lim islohotini va'da qildi." },
      { en: "They want to reform the system.", uz: "Ular tizimni isloh qilmoqchi." },
      { en: "Tax reform is a hot topic.", uz: "Soliq islohoti dolzarb mavzu." }
    ]
  },
  {
    word: "refugee", ipa: "/ˌrefjuˈdʒiː/", pos: "ot (noun)",
    uz: "qochqin",
    usage: "Urush yoki ta'qib tufayli o'z yurtini tark etgan inson haqida.",
    synonyms: ["displaced person", "asylum seeker"],
    examples: [
      { en: "Many refugees crossed the border.", uz: "Ko'plab qochqinlar chegarani kesib o'tishdi." },
      { en: "The camp houses thousands of refugees.", uz: "Lager minglab qochqinlarni joylashtiradi." },
      { en: "She works to help refugees.", uz: "U qochqinlarga yordam berish uchun ishlaydi." }
    ]
  },
  {
    word: "refuse", ipa: "/rɪˈfjuːz/", pos: "fe'l (verb)",
    uz: "rad etmoq, bosh tortmoq",
    usage: "Taklif yoki iltimosni qabul qilmaslik haqida.",
    synonyms: ["decline", "reject", "turn down"],
    examples: [
      { en: "She refused his offer.", uz: "U uning taklifini rad etdi." },
      { en: "He refused to answer.", uz: "U javob berishdan bosh tortdi." },
      { en: "They refused to leave the house.", uz: "Ular uydan chiqishdan bosh tortishdi." }
    ]
  },
  {
    word: "regard", ipa: "/rɪˈɡɑːrd/", pos: "fe'l (verb) / ot (noun)",
    uz: "hisoblamoq, qaramoq; hurmat, e'tibor",
    usage: "Biror narsaga ma'lum nuqtai nazardan qarash yoki hurmat bildirishda.",
    synonyms: ["consider", "view", "respect", "esteem"],
    examples: [
      { en: "I regard him as a friend.", uz: "Men uni do'st deb bilaman." },
      { en: "She has high regard for her teacher.", uz: "U o'qituvchisini juda hurmat qiladi." },
      { en: "Give my regards to your family.", uz: "Oilangizga salomimni yetkazing." }
    ]
  },
  {
    word: "regarding", ipa: "/rɪˈɡɑːrdɪŋ/", pos: "predlog (preposition)",
    uz: "haqida, xususida, to'g'risida",
    usage: "Mavzuni ko'rsatish uchun (ko'pincha rasmiy yozishmalarda).",
    synonyms: ["concerning", "about", "with respect to"],
    examples: [
      { en: "I have a question regarding the bill.", uz: "Hisob to'g'risida savolim bor." },
      { en: "Regarding your email, I agree.", uz: "Xatingizga kelsak, men roziman." },
      { en: "Please call me regarding the order.", uz: "Buyurtma xususida menga qo'ng'iroq qiling." }
    ]
  },
  {
    word: "regardless", ipa: "/rɪˈɡɑːrdləs/", pos: "ravish (adverb)",
    uz: "qaramay, parvo qilmay",
    usage: "Qiyinchilik yoki shartga qaramasdan harakat davom etishini bildiradi ('regardless of').",
    synonyms: ["anyway", "nonetheless", "despite"],
    examples: [
      { en: "He continued regardless of the danger.", uz: "U xavfga qaramay davom etdi." },
      { en: "We will go regardless of the weather.", uz: "Ob-havoga qaramay boramiz." },
      { en: "She helps everyone, regardless of age.", uz: "U yoshidan qat'i nazar hammaga yordam beradi." }
    ]
  },

  {
    word: "regime", ipa: "/reɪˈʒiːm/", pos: "ot (noun)",
    uz: "rejim, tuzum, hukmronlik",
    usage: "Hokimiyat tizimi (ko'pincha qattiqqo'l) yoki tartib-qoida haqida.",
    synonyms: ["government", "rule", "system"],
    examples: [
      { en: "The old regime collapsed.", uz: "Eski tuzum quladi." },
      { en: "They lived under a military regime.", uz: "Ular harbiy rejim ostida yashashdi." },
      { en: "She follows a strict diet regime.", uz: "U qat'iy parhez rejimiga amal qiladi." }
    ]
  },
  {
    word: "region", ipa: "/ˈriːdʒən/", pos: "ot (noun)",
    uz: "mintaqa, hudud, viloyat",
    usage: "Geografik hudud yoki tananing bir qismi haqida.",
    synonyms: ["area", "zone", "district", "territory"],
    examples: [
      { en: "This region is famous for wine.", uz: "Bu mintaqa vinosi bilan mashhur." },
      { en: "The desert region is very hot.", uz: "Cho'l mintaqasi juda issiq." },
      { en: "Pain in the chest region is serious.", uz: "Ko'krak sohasidagi og'riq jiddiy." }
    ]
  },
  {
    word: "regional", ipa: "/ˈriːdʒənəl/", pos: "sifat (adjective)",
    uz: "mintaqaviy, hududiy",
    usage: "Ma'lum bir mintaqaga oid narsalarni ta'riflashda.",
    synonyms: ["local", "area", "district"],
    examples: [
      { en: "There are regional differences in food.", uz: "Ovqatda mintaqaviy farqlar bor." },
      { en: "She won the regional competition.", uz: "U mintaqaviy musobaqada g'olib chiqdi." },
      { en: "The regional office is downtown.", uz: "Hududiy ofis shahar markazida." }
    ]
  },
  {
    word: "register", ipa: "/ˈredʒɪstər/", pos: "fe'l (verb) / ot (noun)",
    uz: "ro'yxatdan o'tmoq; ro'yxat, daftar",
    usage: "Rasmiy ro'yxatga olish yoki yozuvlar daftari haqida.",
    synonyms: ["enroll", "sign up", "record", "log"],
    examples: [
      { en: "You must register to vote.", uz: "Ovoz berish uchun ro'yxatdan o'tishingiz kerak." },
      { en: "She registered for the course.", uz: "U kursga yozildi." },
      { en: "Sign your name in the register.", uz: "Daftarda ismingizni yozing." }
    ]
  },
  {
    word: "regular", ipa: "/ˈreɡjələr/", pos: "sifat (adjective)",
    uz: "doimiy, muntazam; oddiy",
    usage: "Takrorlanadigan, odatdagi yoki me'yoriy narsalar haqida.",
    synonyms: ["normal", "usual", "steady", "routine"],
    examples: [
      { en: "He is a regular customer here.", uz: "U bu yerning doimiy mijozi." },
      { en: "Regular exercise is good for health.", uz: "Muntazam mashq sog'liq uchun foydali." },
      { en: "I'll have a regular coffee.", uz: "Menga oddiy kofe bering." }
    ]
  },
  {
    word: "regularly", ipa: "/ˈreɡjələrli/", pos: "ravish (adverb)",
    uz: "muntazam ravishda, doimiy",
    usage: "Harakat takror va belgilangan oraliqda bajarilishini bildiradi.",
    synonyms: ["routinely", "frequently", "consistently"],
    examples: [
      { en: "She visits her parents regularly.", uz: "U ota-onasini muntazam ziyorat qiladi." },
      { en: "Check your car regularly.", uz: "Mashinangizni muntazam tekshiring." },
      { en: "We meet regularly on Mondays.", uz: "Biz dushanba kunlari muntazam uchrashamiz." }
    ]
  },
  {
    word: "regulate", ipa: "/ˈreɡjuleɪt/", pos: "fe'l (verb)",
    uz: "tartibga solmoq, nazorat qilmoq",
    usage: "Qoidalar yordamida boshqarish yoki sozlash haqida.",
    synonyms: ["control", "manage", "govern", "adjust"],
    examples: [
      { en: "The law regulates working hours.", uz: "Qonun ish soatlarini tartibga soladi." },
      { en: "The body regulates its temperature.", uz: "Tana o'z haroratini boshqaradi." },
      { en: "Banks are strictly regulated.", uz: "Banklar qattiq nazorat qilinadi." }
    ]
  },
  {
    word: "regulation", ipa: "/ˌreɡjuˈleɪʃən/", pos: "ot (noun)",
    uz: "qoida, nizom; tartibga solish",
    usage: "Rasmiy qoidalar yoki boshqaruv haqida.",
    synonyms: ["rule", "law", "control", "directive"],
    examples: [
      { en: "Follow the safety regulations.", uz: "Xavfsizlik qoidalariga amal qiling." },
      { en: "New regulations come into force today.", uz: "Yangi nizomlar bugundan kuchga kiradi." },
      { en: "The industry needs better regulation.", uz: "Bu soha yaxshiroq tartibga solishni talab qiladi." }
    ]
  },
  {
    word: "reinforce", ipa: "/ˌriːɪnˈfɔːrs/", pos: "fe'l (verb)",
    uz: "mustahkamlamoq, kuchaytirmoq",
    usage: "Biror narsani kuchliroq qilish yoki fikrni qo'llab-quvvatlash haqida.",
    synonyms: ["strengthen", "support", "boost"],
    examples: [
      { en: "Steel bars reinforce the wall.", uz: "Po'lat tayoqlar devorni mustahkamlaydi." },
      { en: "The results reinforce our theory.", uz: "Natijalar nazariyamizni kuchaytiradi." },
      { en: "Praise reinforces good behavior.", uz: "Maqtov yaxshi xulqni mustahkamlaydi." }
    ]
  },
  {
    word: "reject", ipa: "/rɪˈdʒekt/", pos: "fe'l (verb)",
    uz: "rad etmoq, qabul qilmaslik",
    usage: "Taklif, fikr yoki arizani qabul qilmaslik haqida.",
    synonyms: ["refuse", "decline", "turn down", "dismiss"],
    examples: [
      { en: "They rejected my proposal.", uz: "Ular mening taklifimni rad etishdi." },
      { en: "The body rejected the new organ.", uz: "Tana yangi a'zoni qabul qilmadi." },
      { en: "She was rejected from the program.", uz: "U dasturga qabul qilinmadi." }
    ]
  },
  {
    word: "relate", ipa: "/rɪˈleɪt/", pos: "fe'l (verb)",
    uz: "bog'lamoq, aloqador qilmoq; hamdard bo'lmoq",
    usage: "Ikki narsa o'rtasidagi bog'liqlik yoki kimnidir tushunish haqida ('relate to').",
    synonyms: ["connect", "link", "associate", "identify with"],
    examples: [
      { en: "How do these ideas relate?", uz: "Bu g'oyalar qanday bog'lanadi?" },
      { en: "I can relate to your problem.", uz: "Sizning muammoyingizni tushunaman." },
      { en: "The study relates diet to health.", uz: "Tadqiqot parhezni salomatlik bilan bog'laydi." }
    ]
  },
  {
    word: "relation", ipa: "/rɪˈleɪʃən/", pos: "ot (noun)",
    uz: "munosabat, aloqa; qarindosh",
    usage: "Narsalar yoki odamlar o'rtasidagi bog'liqlik haqida.",
    synonyms: ["connection", "link", "relationship", "relative"],
    examples: [
      { en: "There's a close relation between the two.", uz: "Ikkalasi o'rtasida yaqin aloqa bor." },
      { en: "Trade relations are improving.", uz: "Savdo aloqalari yaxshilanmoqda." },
      { en: "He is a distant relation of mine.", uz: "U mening uzoq qarindoshim." }
    ]
  },
  {
    word: "relationship", ipa: "/rɪˈleɪʃənʃɪp/", pos: "ot (noun)",
    uz: "munosabat, o'zaro aloqa",
    usage: "Odamlar yoki narsalar o'rtasidagi aloqa, ayniqsa shaxsiy munosabatlar haqida.",
    synonyms: ["connection", "bond", "link"],
    examples: [
      { en: "They have a strong relationship.", uz: "Ularning mustahkam munosabati bor." },
      { en: "What is the relationship between price and demand?", uz: "Narx va talab o'rtasidagi munosabat qanday?" },
      { en: "She ended the relationship.", uz: "U munosabatlarga chek qo'ydi." }
    ]
  },
  {
    word: "relative", ipa: "/ˈrelətɪv/", pos: "ot (noun) / sifat (adjective)",
    uz: "qarindosh; nisbiy",
    usage: "Oila a'zosi yoki boshqa narsaga nisbatan baholanadigan narsa haqida.",
    synonyms: ["family member", "kin", "comparative"],
    examples: [
      { en: "All my relatives came to the wedding.", uz: "Barcha qarindoshlarim to'yga kelishdi." },
      { en: "Comfort is relative.", uz: "Qulaylik nisbiy tushuncha." },
      { en: "We live in relative peace.", uz: "Biz nisbatan tinch sharoitda yashaymiz." }
    ]
  },
  {
    word: "relatively", ipa: "/ˈrelətɪvli/", pos: "ravish (adverb)",
    uz: "nisbatan, taqqoslaganda",
    usage: "Boshqa narsaga yoki me'yorga nisbatan baho berishda.",
    synonyms: ["comparatively", "fairly", "somewhat"],
    examples: [
      { en: "The test was relatively easy.", uz: "Test nisbatan oson edi." },
      { en: "Prices are relatively low here.", uz: "Bu yerda narxlar nisbatan past." },
      { en: "It's a relatively new company.", uz: "Bu nisbatan yangi kompaniya." }
    ]
  },
  {
    word: "relax", ipa: "/rɪˈlæks/", pos: "fe'l (verb)",
    uz: "dam olmoq, bo'shashmoq, tinchlanmoq",
    usage: "Tana yoki ongni dam oldirish, taranglikni yo'qotish haqida.",
    synonyms: ["unwind", "rest", "calm down", "loosen"],
    examples: [
      { en: "Sit down and relax.", uz: "O'tiring va dam oling." },
      { en: "Music helps me relax.", uz: "Musiqa menga tinchlanishga yordam beradi." },
      { en: "Relax your shoulders.", uz: "Yelkalaringizni bo'shating." }
    ]
  },
  {
    word: "release", ipa: "/rɪˈliːs/", pos: "fe'l (verb) / ot (noun)",
    uz: "ozod qilmoq; chiqarmoq (mahsulot/film); chiqarilish",
    usage: "Qo'yib yuborish, ommaga taqdim etish yoki ozodlikka chiqarish haqida.",
    synonyms: ["free", "launch", "publish", "let go"],
    examples: [
      { en: "The band released a new song.", uz: "Guruh yangi qo'shiq chiqardi." },
      { en: "He was released from prison.", uz: "U qamoqdan ozod qilindi." },
      { en: "They released the birds into the wild.", uz: "Ular qushlarni tabiatga qo'yib yuborishdi." },
      { en: "The new phone's release is next month.", uz: "Yangi telefon chiqishi kelasi oyda." }
    ]
  },
  {
    word: "relevant", ipa: "/ˈreləvənt/", pos: "sifat (adjective)",
    uz: "tegishli, dolzarb, aloqador",
    usage: "Mavzuga bevosita aloqador yoki muhim narsani ta'riflashda.",
    synonyms: ["related", "pertinent", "applicable"],
    examples: [
      { en: "Please give only relevant details.", uz: "Faqat tegishli tafsilotlarni bering." },
      { en: "Is this information relevant?", uz: "Bu ma'lumot tegishlimi?" },
      { en: "His experience is relevant to the job.", uz: "Uning tajribasi ishga aloqador." }
    ]
  },
  {
    word: "relief", ipa: "/rɪˈliːf/", pos: "ot (noun)",
    uz: "yengillik, taskin; yordam",
    usage: "Og'riq/tashvish yengillashishi yoki muhtojlarga yordam haqida.",
    synonyms: ["comfort", "ease", "aid"],
    examples: [
      { en: "It was a relief to hear good news.", uz: "Yaxshi xabarni eshitish yengillik bo'ldi." },
      { en: "The medicine gave him relief.", uz: "Dori unga yengillik berdi." },
      { en: "They sent relief to the flood victims.", uz: "Ular toshqin qurbonlariga yordam yuborishdi." }
    ]
  },
  {
    word: "religion", ipa: "/rɪˈlɪdʒən/", pos: "ot (noun)",
    uz: "din",
    usage: "E'tiqod tizimi yoki ibodat amaliyoti haqida.",
    synonyms: ["faith", "belief", "creed"],
    examples: [
      { en: "She studies world religions.", uz: "U jahon dinlarini o'rganadi." },
      { en: "Religion plays a big role here.", uz: "Bu yerda din katta rol o'ynaydi." },
      { en: "People of all religions are welcome.", uz: "Barcha dinlardagi insonlar marhamat." }
    ]
  },

  {
    word: "religious", ipa: "/rɪˈlɪdʒəs/", pos: "sifat (adjective)",
    uz: "diniy; dindor",
    usage: "Dinga oid narsalar yoki dinga e'tiqodli odam haqida.",
    synonyms: ["spiritual", "devout", "sacred"],
    examples: [
      { en: "It's a religious holiday.", uz: "Bu diniy bayram." },
      { en: "She comes from a religious family.", uz: "U dindor oiladan." },
      { en: "They visited a religious site.", uz: "Ular diniy maskanni ziyorat qilishdi." }
    ]
  },
  {
    word: "rely", ipa: "/rɪˈlaɪ/", pos: "fe'l (verb)",
    uz: "ishonmoq, tayanmoq ('rely on')",
    usage: "Biror kishi/narsaga umid bog'lab tayanish haqida.",
    synonyms: ["depend on", "count on", "trust"],
    examples: [
      { en: "You can rely on me.", uz: "Menga tayanishingiz mumkin." },
      { en: "We rely on solar power.", uz: "Biz quyosh energiyasiga tayanamiz." },
      { en: "She relies on her sister for help.", uz: "U yordam uchun opasiga tayanadi." }
    ]
  },
  {
    word: "remain", ipa: "/rɪˈmeɪn/", pos: "fe'l (verb)",
    uz: "qolmoq; o'zgarmay turmoq",
    usage: "Bir holatda davom etish yoki ortda qolish haqida (rasmiy).",
    synonyms: ["stay", "continue", "be left"],
    examples: [
      { en: "Please remain seated.", uz: "Iltimos, joyingizda qoling." },
      { en: "Few problems remain.", uz: "Kam muammo qoldi." },
      { en: "The weather remained cold all week.", uz: "Ob-havo butun hafta sovuqligicha qoldi." }
    ]
  },
  {
    word: "remaining", ipa: "/rɪˈmeɪnɪŋ/", pos: "sifat (adjective)",
    uz: "qolgan, ortib qolgan",
    usage: "Hali mavjud bo'lib turgan qoldiq qismni ta'riflashda.",
    synonyms: ["leftover", "rest", "surviving"],
    examples: [
      { en: "Spend the remaining money wisely.", uz: "Qolgan pulni oqilona sarflang." },
      { en: "The remaining guests left late.", uz: "Qolgan mehmonlar kech ketishdi." },
      { en: "Finish the remaining tasks today.", uz: "Qolgan vazifalarni bugun tugating." }
    ]
  },
  {
    word: "remarkable", ipa: "/rɪˈmɑːrkəbəl/", pos: "sifat (adjective)",
    uz: "ajoyib, e'tiborga loyiq, hayratlanarli",
    usage: "G'ayrioddiy darajada yaxshi yoki diqqatga sazovor narsa haqida.",
    synonyms: ["extraordinary", "outstanding", "impressive"],
    examples: [
      { en: "She made a remarkable recovery.", uz: "U hayratlanarli darajada tuzaldi." },
      { en: "It's a remarkable achievement.", uz: "Bu ajoyib yutuq." },
      { en: "He has a remarkable memory.", uz: "Uning ajoyib xotirasi bor." }
    ]
  },
  {
    word: "remember", ipa: "/rɪˈmembər/", pos: "fe'l (verb)",
    uz: "eslamoq, esda saqlamoq",
    usage: "Xotirada saqlash yoki yodga olish haqida.",
    synonyms: ["recall", "recollect", "memorize"],
    examples: [
      { en: "I remember my first day at school.", uz: "Maktabdagi birinchi kunimni eslayman." },
      { en: "Remember to lock the door.", uz: "Eshikni qulflashni unutmang." },
      { en: "Do you remember her name?", uz: "Uning ismini eslaysizmi?" },
      { en: "I can't remember where I put my keys.", uz: "Kalitlarni qayerga qo'yganimni eslay olmayapman." }
    ]
  },
  {
    word: "remind", ipa: "/rɪˈmaɪnd/", pos: "fe'l (verb)",
    uz: "eslatmoq",
    usage: "Birovga biror narsani esiga solish haqida ('remind of/to').",
    synonyms: ["prompt", "alert"],
    examples: [
      { en: "Remind me to call her.", uz: "Unga qo'ng'iroq qilishni menga eslat." },
      { en: "This song reminds me of summer.", uz: "Bu qo'shiq menga yozni eslatadi." },
      { en: "He reminded us about the meeting.", uz: "U bizga yig'ilishni eslatdi." }
    ]
  },
  {
    word: "remote", ipa: "/rɪˈmoʊt/", pos: "sifat (adjective)",
    uz: "uzoq, chekka; masofadan",
    usage: "Uzoqdagi joy, kichik ehtimol yoki masofadan ishlash haqida.",
    synonyms: ["distant", "far", "isolated"],
    examples: [
      { en: "They live in a remote village.", uz: "Ular chekka qishloqda yashashadi." },
      { en: "There's a remote chance of rain.", uz: "Yomg'ir yog'ish ehtimoli juda kam." },
      { en: "She works remote from home.", uz: "U uydan masofadan ishlaydi." }
    ]
  },
  {
    word: "remove", ipa: "/rɪˈmuːv/", pos: "fe'l (verb)",
    uz: "olib tashlamoq, yo'q qilmoq",
    usage: "Biror narsani joyidan olib tashlash yoki o'chirish haqida.",
    synonyms: ["take away", "delete", "eliminate", "extract"],
    examples: [
      { en: "Please remove your shoes.", uz: "Iltimos, oyoq kiyimingizni yeching." },
      { en: "Remove the file from the folder.", uz: "Faylni papkadan olib tashlang." },
      { en: "The stain is hard to remove.", uz: "Dog'ni ketkazish qiyin." }
    ]
  },
  {
    word: "repeat", ipa: "/rɪˈpiːt/", pos: "fe'l (verb)",
    uz: "takrorlamoq",
    usage: "Biror so'z yoki harakatni yana bir bor qilish haqida.",
    synonyms: ["redo", "say again", "reiterate"],
    examples: [
      { en: "Could you repeat that, please?", uz: "Iltimos, buni takrorlay olasizmi?" },
      { en: "Don't repeat the same mistake.", uz: "Bir xil xatoni takrorlamang." },
      { en: "Students repeat the words after the teacher.", uz: "O'quvchilar so'zlarni o'qituvchidan keyin takrorlaydilar." }
    ]
  },
  {
    word: "repeatedly", ipa: "/rɪˈpiːtɪdli/", pos: "ravish (adverb)",
    uz: "qayta-qayta, takror-takror",
    usage: "Harakat ko'p marta takrorlanishini bildiradi.",
    synonyms: ["again and again", "frequently", "constantly"],
    examples: [
      { en: "He called her repeatedly.", uz: "U unga qayta-qayta qo'ng'iroq qildi." },
      { en: "I've told you repeatedly.", uz: "Men senga takror-takror aytdim." },
      { en: "The machine failed repeatedly.", uz: "Mashina qayta-qayta ishdan chiqdi." }
    ]
  },
  {
    word: "replace", ipa: "/rɪˈpleɪs/", pos: "fe'l (verb)",
    uz: "almashtirmoq, o'rnini bosmoq",
    usage: "Eski narsa o'rniga yangisini qo'yish yoki o'rnini egallash haqida.",
    synonyms: ["substitute", "swap", "change"],
    examples: [
      { en: "Replace the old batteries.", uz: "Eski batareyalarni almashtiring." },
      { en: "Nothing can replace a mother's love.", uz: "Hech narsa ona mehrining o'rnini bosolmaydi." },
      { en: "A new manager replaced him.", uz: "Yangi menejer uning o'rnini egalladi." }
    ]
  },
  {
    word: "reply", ipa: "/rɪˈplaɪ/", pos: "fe'l (verb) / ot (noun)",
    uz: "javob bermoq; javob",
    usage: "Savol, xat yoki xabarga javob qaytarish haqida.",
    synonyms: ["answer", "respond", "response"],
    examples: [
      { en: "She didn't reply to my message.", uz: "U mening xabarimga javob bermadi." },
      { en: "I'm waiting for your reply.", uz: "Sizning javobingizni kutyapman." },
      { en: "He replied with a smile.", uz: "U tabassum bilan javob berdi." }
    ]
  },
  {
    word: "report", ipa: "/rɪˈpɔːrt/", pos: "ot (noun) / fe'l (verb)",
    uz: "hisobot, ma'lumot; xabar bermoq",
    usage: "Rasmiy ma'lumot taqdim etish yoki voqea haqida xabar berish.",
    synonyms: ["account", "statement", "inform", "announce"],
    examples: [
      { en: "She wrote a detailed report.", uz: "U batafsil hisobot yozdi." },
      { en: "Report the accident to the police.", uz: "Hodisa haqida politsiyaga xabar bering." },
      { en: "The news reported a storm.", uz: "Yangiliklar bo'ron haqida xabar berdi." }
    ]
  },
  {
    word: "reporter", ipa: "/rɪˈpɔːrtər/", pos: "ot (noun)",
    uz: "muxbir, jurnalist",
    usage: "Yangiliklarni to'plab xabar beradigan inson haqida.",
    synonyms: ["journalist", "correspondent"],
    examples: [
      { en: "A reporter asked him a tough question.", uz: "Muxbir unga qiyin savol berdi." },
      { en: "She works as a TV reporter.", uz: "U telejurnalist bo'lib ishlaydi." },
      { en: "Reporters gathered outside.", uz: "Muxbirlar tashqarida to'planishdi." }
    ]
  },
  {
    word: "represent", ipa: "/ˌreprɪˈzent/", pos: "fe'l (verb)",
    uz: "vakillik qilmoq; ifodalamoq, anglatmoq",
    usage: "Kim/nimaningdir nomidan ish ko'rish yoki belgini anglatish haqida.",
    synonyms: ["stand for", "symbolize", "speak for"],
    examples: [
      { en: "She represents our company abroad.", uz: "U chet elda kompaniyamiz vakili." },
      { en: "The dove represents peace.", uz: "Kaptar tinchlikni anglatadi." },
      { en: "This number represents the total.", uz: "Bu raqam umumiy miqdorni ifodalaydi." }
    ]
  },
  {
    word: "representation", ipa: "/ˌreprɪzenˈteɪʃən/", pos: "ot (noun)",
    uz: "vakillik; tasvir, ifoda",
    usage: "Vakil bo'lish yoki biror narsaning tasviri/aks etishi haqida.",
    synonyms: ["depiction", "image", "portrayal"],
    examples: [
      { en: "Women need more representation in politics.", uz: "Siyosatda ayollar vakilligini ko'paytirish kerak." },
      { en: "The painting is a representation of war.", uz: "Rasm urushning tasviridir." },
      { en: "Each region has equal representation.", uz: "Har bir mintaqa teng vakillikka ega." }
    ]
  },
  {
    word: "representative", ipa: "/ˌreprɪˈzentətɪv/", pos: "ot (noun) / sifat (adjective)",
    uz: "vakil; namunaviy, tipik",
    usage: "Guruh nomidan ish ko'ruvchi shaxs yoki tipik namuna haqida.",
    synonyms: ["delegate", "agent", "typical"],
    examples: [
      { en: "A sales representative called me.", uz: "Savdo vakili menga qo'ng'iroq qildi." },
      { en: "He is our representative in court.", uz: "U sudda bizning vakilimiz." },
      { en: "This sample is representative of the whole.", uz: "Bu namuna butunni aks ettiradi." }
    ]
  },
  {
    word: "Republican", ipa: "/rɪˈpʌblɪkən/", pos: "ot (noun) / sifat (adjective)",
    uz: "respublikachi (AQSh siyosiy partiyasi a'zosi); respublikaga oid",
    usage: "AQShdagi Respublikachilar partiyasi yoki uning a'zosi haqida.",
    synonyms: ["conservative", "GOP member"],
    examples: [
      { en: "He is a lifelong Republican.", uz: "U umrbod respublikachi." },
      { en: "The Republican candidate won.", uz: "Respublikachi nomzod g'olib chiqdi." },
      { en: "She voted for the Republican party.", uz: "U respublikachilar partiyasiga ovoz berdi." }
    ]
  },
  {
    word: "reputation", ipa: "/ˌrepjəˈteɪʃən/", pos: "ot (noun)",
    uz: "obro', nom, shuhrat",
    usage: "Odam yoki tashkilot haqidagi umumiy fikr/nom haqida.",
    synonyms: ["name", "image", "standing"],
    examples: [
      { en: "The company has a good reputation.", uz: "Kompaniyaning yaxshi obro'si bor." },
      { en: "He ruined his reputation.", uz: "U o'z obro'sini to'kdi." },
      { en: "She has a reputation for honesty.", uz: "U halolligi bilan nom chiqargan." }
    ]
  },

  {
    word: "request", ipa: "/rɪˈkwest/", pos: "ot (noun) / fe'l (verb)",
    uz: "iltimos, so'rov; so'ramoq",
    usage: "Biror narsani rasmiy yoki xushmuomalalik bilan so'rashda.",
    synonyms: ["ask for", "demand", "appeal"],
    examples: [
      { en: "I have a small request.", uz: "Kichik bir iltimosim bor." },
      { en: "She requested more information.", uz: "U qo'shimcha ma'lumot so'radi." },
      { en: "Your request has been approved.", uz: "Sizning so'rovingiz tasdiqlandi." }
    ]
  },
  {
    word: "require", ipa: "/rɪˈkwaɪər/", pos: "fe'l (verb)",
    uz: "talab qilmoq, zarur bo'lmoq",
    usage: "Biror narsa kerakligini yoki majburiyligini bildirishda.",
    synonyms: ["need", "demand", "call for"],
    examples: [
      { en: "This job requires patience.", uz: "Bu ish sabr talab qiladi." },
      { en: "The law requires a license.", uz: "Qonun litsenziyani talab qiladi." },
      { en: "Plants require water and light.", uz: "O'simliklarga suv va yorug'lik kerak." }
    ]
  },
  {
    word: "requirement", ipa: "/rɪˈkwaɪərmənt/", pos: "ot (noun)",
    uz: "talab, shart, ehtiyoj",
    usage: "Bajarilishi shart bo'lgan narsa haqida.",
    synonyms: ["need", "condition", "demand"],
    examples: [
      { en: "What are the entry requirements?", uz: "Kirish shartlari qanday?" },
      { en: "Experience is a key requirement.", uz: "Tajriba asosiy talab." },
      { en: "The product meets all requirements.", uz: "Mahsulot barcha talablarga javob beradi." }
    ]
  },
  {
    word: "research", ipa: "/ˈriːsɜːrtʃ/", pos: "ot (noun) / fe'l (verb)",
    uz: "tadqiqot, ilmiy izlanish; tadqiq qilmoq",
    usage: "Yangi bilim olish uchun chuqur o'rganish haqida.",
    synonyms: ["study", "investigation", "analysis"],
    examples: [
      { en: "She does research on cancer.", uz: "U saraton bo'yicha tadqiqot olib boradi." },
      { en: "More research is needed.", uz: "Ko'proq tadqiqot kerak." },
      { en: "I researched the topic online.", uz: "Men mavzuni internetda o'rgandim." }
    ]
  },
  {
    word: "researcher", ipa: "/rɪˈsɜːrtʃər/", pos: "ot (noun)",
    uz: "tadqiqotchi, ilmiy xodim",
    usage: "Ilmiy izlanish bilan shug'ullanadigan inson haqida.",
    synonyms: ["scientist", "investigator", "analyst"],
    examples: [
      { en: "The researcher published her findings.", uz: "Tadqiqotchi o'z natijalarini e'lon qildi." },
      { en: "He is a medical researcher.", uz: "U tibbiy tadqiqotchi." },
      { en: "Researchers studied the data carefully.", uz: "Tadqiqotchilar ma'lumotlarni diqqat bilan o'rganishdi." }
    ]
  },
  {
    word: "resemble", ipa: "/rɪˈzembəl/", pos: "fe'l (verb)",
    uz: "o'xshamoq, o'xshash bo'lmoq",
    usage: "Ikki narsa/odam tashqi yoki xususiyat jihatdan o'xshash ekanini bildirishda.",
    synonyms: ["look like", "be similar to", "take after"],
    examples: [
      { en: "She resembles her mother.", uz: "U onasiga o'xshaydi." },
      { en: "This fruit resembles an apple.", uz: "Bu meva olmaga o'xshaydi." },
      { en: "The two brothers closely resemble each other.", uz: "Ikki aka-uka bir-biriga juda o'xshaydi." }
    ]
  },
  {
    word: "reservation", ipa: "/ˌrezərˈveɪʃən/", pos: "ot (noun)",
    uz: "joy buyurtma; shubha, ikkilanish",
    usage: "Oldindan joy band qilish yoki biror narsaga shubha bildirish haqida.",
    synonyms: ["booking", "doubt", "hesitation"],
    examples: [
      { en: "I made a reservation for two.", uz: "Men ikki kishilik joy buyurtma qildim." },
      { en: "Do you have a reservation?", uz: "Sizda buyurtma bormi?" },
      { en: "I have reservations about this plan.", uz: "Bu reja borasida shubhalarim bor." }
    ]
  },
  {
    word: "resident", ipa: "/ˈrezɪdənt/", pos: "ot (noun)",
    uz: "aholi, mahalliy yashovchi",
    usage: "Ma'lum joyda doimiy yashaydigan inson haqida.",
    synonyms: ["inhabitant", "occupant", "local"],
    examples: [
      { en: "Local residents protested the plan.", uz: "Mahalliy aholi rejaga qarshi norozilik bildirdi." },
      { en: "She is a resident of New York.", uz: "U Nyu-York shahri aholisidir." },
      { en: "Residents must pay a fee.", uz: "Yashovchilar to'lov to'lashlari kerak." }
    ]
  },
  {
    word: "resist", ipa: "/rɪˈzɪst/", pos: "fe'l (verb)",
    uz: "qarshilik qilmoq, qarshi turmoq; o'zini tutmoq",
    usage: "Bosim yoki vasvasaga qarshi turish haqida.",
    synonyms: ["oppose", "withstand", "fight"],
    examples: [
      { en: "He couldn't resist the cake.", uz: "U tortga qarshi turolmadi." },
      { en: "They resisted the enemy attack.", uz: "Ular dushman hujumiga qarshilik ko'rsatishdi." },
      { en: "It's hard to resist temptation.", uz: "Vasvasaga qarshi turish qiyin." }
    ]
  },
  {
    word: "resistance", ipa: "/rɪˈzɪstəns/", pos: "ot (noun)",
    uz: "qarshilik",
    usage: "Qarshi turish kuchi yoki harakati haqida (jismoniy, siyosiy, biologik).",
    synonyms: ["opposition", "defiance", "struggle"],
    examples: [
      { en: "There was strong resistance to the change.", uz: "O'zgarishga qattiq qarshilik bo'ldi." },
      { en: "The body builds resistance to disease.", uz: "Tana kasallikka qarshilik hosil qiladi." },
      { en: "They joined the resistance movement.", uz: "Ular qarshilik harakatiga qo'shilishdi." }
    ]
  },
  {
    word: "resolution", ipa: "/ˌrezəˈluːʃən/", pos: "ot (noun)",
    uz: "qaror, niyat; yechim; tasvir aniqligi",
    usage: "Qat'iy qaror, muammoning yechimi yoki ekran/rasm aniqligi haqida.",
    synonyms: ["decision", "solution", "determination"],
    examples: [
      { en: "My New Year's resolution is to exercise.", uz: "Yangi yildagi niyatim sport bilan shug'ullanish." },
      { en: "They reached a peaceful resolution.", uz: "Ular tinch yechimga erishdilar." },
      { en: "The screen has high resolution.", uz: "Ekran yuqori aniqlikka ega." }
    ]
  },
  {
    word: "resolve", ipa: "/rɪˈzɑːlv/", pos: "fe'l (verb)",
    uz: "hal qilmoq; qat'iy qaror qilmoq",
    usage: "Muammoni yechish yoki qat'iy niyat qilish haqida.",
    synonyms: ["solve", "settle", "determine"],
    examples: [
      { en: "We must resolve this issue today.", uz: "Bu masalani bugun hal qilishimiz kerak." },
      { en: "They resolved their differences.", uz: "Ular kelishmovchiliklarini bartaraf qilishdi." },
      { en: "She resolved to study harder.", uz: "U qattiqroq o'qishni qat'iy ahd qildi." }
    ]
  },
  {
    word: "resort", ipa: "/rɪˈzɔːrt/", pos: "ot (noun) / fe'l (verb)",
    uz: "dam olish maskani, kurort; chora ko'rmoq ('resort to')",
    usage: "Sayyohlik dam olish joyi yoki oxirgi chora sifatida biror narsaga murojaat qilish haqida.",
    synonyms: ["retreat", "spa", "turn to"],
    examples: [
      { en: "We stayed at a beach resort.", uz: "Biz plyaj kurortida qoldik." },
      { en: "They resorted to violence.", uz: "Ular zo'ravonlikka murojaat qilishdi." },
      { en: "As a last resort, call the police.", uz: "Oxirgi chora sifatida politsiyaga qo'ng'iroq qiling." }
    ]
  },
  {
    word: "resource", ipa: "/ˈriːsɔːrs/", pos: "ot (noun)",
    uz: "resurs, manba; imkoniyat",
    usage: "Foydalaniladigan tabiiy boyliklar, mablag' yoki vositalar haqida.",
    synonyms: ["asset", "supply", "means"],
    examples: [
      { en: "Water is a precious resource.", uz: "Suv qimmatli resursdir." },
      { en: "The library is a great resource.", uz: "Kutubxona ajoyib manba." },
      { en: "We have limited resources.", uz: "Bizning resurslarimiz cheklangan." }
    ]
  },
  {
    word: "respect", ipa: "/rɪˈspekt/", pos: "ot (noun) / fe'l (verb)",
    uz: "hurmat; hurmat qilmoq",
    usage: "Birovga yoki qoidalarga hurmat ko'rsatishda.",
    synonyms: ["admiration", "esteem", "honor"],
    examples: [
      { en: "Show respect to your elders.", uz: "Kattalarni hurmat qiling." },
      { en: "I respect your decision.", uz: "Men sizning qaroringizni hurmat qilaman." },
      { en: "They have great respect for the teacher.", uz: "Ular o'qituvchini juda hurmat qilishadi." }
    ]
  },
  {
    word: "respond", ipa: "/rɪˈspɑːnd/", pos: "fe'l (verb)",
    uz: "javob bermoq, munosabat bildirmoq",
    usage: "Savol, vaziyat yoki davolashga javob qaytarish haqida (rasmiyroq).",
    synonyms: ["reply", "answer", "react"],
    examples: [
      { en: "He responded to my email quickly.", uz: "U xatimga tez javob berdi." },
      { en: "How did the patient respond to treatment?", uz: "Bemor davolashga qanday javob berdi?" },
      { en: "She didn't respond to the question.", uz: "U savolga javob bermadi." }
    ]
  },
  {
    word: "respondent", ipa: "/rɪˈspɑːndənt/", pos: "ot (noun)",
    uz: "respondent, so'rovga javob beruvchi",
    usage: "So'rovnoma yoki tadqiqotda javob beradigan shaxs haqida.",
    synonyms: ["participant", "interviewee"],
    examples: [
      { en: "Most respondents agreed with the idea.", uz: "Ko'pchilik respondentlar g'oyaga rozi bo'lishdi." },
      { en: "The survey had 500 respondents.", uz: "So'rovda 500 nafar respondent qatnashdi." },
      { en: "Each respondent answered ten questions.", uz: "Har bir respondent o'nta savolga javob berdi." }
    ]
  },
  {
    word: "response", ipa: "/rɪˈspɑːns/", pos: "ot (noun)",
    uz: "javob, munosabat",
    usage: "Savol, hodisa yoki taklifga qaytarilgan javob haqida.",
    synonyms: ["reply", "answer", "reaction"],
    examples: [
      { en: "I got no response to my letter.", uz: "Xatimga hech qanday javob olmadim." },
      { en: "Her response was positive.", uz: "Uning javobi ijobiy edi." },
      { en: "In response, the company apologized.", uz: "Javoban, kompaniya uzr so'radi." }
    ]
  },
  {
    word: "responsibility", ipa: "/rɪˌspɑːnsəˈbɪləti/", pos: "ot (noun)",
    uz: "mas'uliyat, javobgarlik; burch",
    usage: "Biror narsa uchun javobgar bo'lish yoki vazifa haqida.",
    synonyms: ["duty", "obligation", "accountability"],
    examples: [
      { en: "It's your responsibility to lock up.", uz: "Eshikni qulflash sizning mas'uliyatingiz." },
      { en: "She took responsibility for the mistake.", uz: "U xato uchun javobgarlikni o'z zimmasiga oldi." },
      { en: "Parents have many responsibilities.", uz: "Ota-onalarning ko'p mas'uliyatlari bor." }
    ]
  },
  {
    word: "responsible", ipa: "/rɪˈspɑːnsəbəl/", pos: "sifat (adjective)",
    uz: "mas'ul, javobgar; mas'uliyatli",
    usage: "Biror narsa uchun javobgar bo'lish yoki ishonchli xulq haqida.",
    synonyms: ["accountable", "reliable", "in charge"],
    examples: [
      { en: "Who is responsible for this?", uz: "Bunga kim javobgar?" },
      { en: "He is a responsible driver.", uz: "U mas'uliyatli haydovchi." },
      { en: "She is responsible for the team.", uz: "U jamoa uchun mas'ul." }
    ]
  },

  {
    word: "rest", ipa: "/rest/", pos: "ot (noun) / fe'l (verb)",
    uz: "dam, hordiq; qolgan qism; dam olmoq",
    usage: "Dam olish yoki biror narsaning qolgan qismini bildirishda.",
    synonyms: ["relaxation", "remainder", "relax"],
    examples: [
      { en: "Get some rest before the trip.", uz: "Sayohatdan oldin biroz dam oling." },
      { en: "The rest of the team arrived late.", uz: "Jamoaning qolgan qismi kech keldi." },
      { en: "Let's rest for a few minutes.", uz: "Bir necha daqiqa dam olaylik." }
    ]
  },
  {
    word: "restaurant", ipa: "/ˈrestrɑːnt/", pos: "ot (noun)",
    uz: "restoran",
    usage: "Ovqat sotib yeyiladigan joy haqida.",
    synonyms: ["eatery", "diner", "café"],
    examples: [
      { en: "We had dinner at a nice restaurant.", uz: "Biz yaxshi restoranda kechki ovqat qildik." },
      { en: "This restaurant serves Italian food.", uz: "Bu restoran italyan taomlari taklif qiladi." },
      { en: "The restaurant was full on Friday.", uz: "Juma kuni restoran to'la edi." }
    ]
  },
  {
    word: "restore", ipa: "/rɪˈstɔːr/", pos: "fe'l (verb)",
    uz: "tiklamoq, qayta tiklamoq; ta'mirlamoq",
    usage: "Avvalgi holatga qaytarish yoki eski narsani yangilash haqida.",
    synonyms: ["repair", "renew", "bring back"],
    examples: [
      { en: "They restored the old building.", uz: "Ular eski binoni ta'mirlashdi." },
      { en: "The medicine restored his strength.", uz: "Dori uning kuchini tikladi." },
      { en: "We must restore public trust.", uz: "Biz jamoatchilik ishonchini tiklashimiz kerak." }
    ]
  },
  {
    word: "restriction", ipa: "/rɪˈstrɪkʃən/", pos: "ot (noun)",
    uz: "cheklov, taqiq",
    usage: "Biror narsani cheklovchi qoida yoki shart haqida.",
    synonyms: ["limit", "control", "constraint"],
    examples: [
      { en: "There are restrictions on parking here.", uz: "Bu yerda to'xtashga cheklovlar bor." },
      { en: "The diet has no restrictions.", uz: "Parhezda hech qanday cheklov yo'q." },
      { en: "Travel restrictions were lifted.", uz: "Sayohat cheklovlari bekor qilindi." }
    ]
  },
  {
    word: "result", ipa: "/rɪˈzʌlt/", pos: "ot (noun) / fe'l (verb)",
    uz: "natija; natija bermoq ('result in/from')",
    usage: "Biror harakat yoki jarayonning oqibati haqida.",
    synonyms: ["outcome", "consequence", "effect"],
    examples: [
      { en: "The test results are ready.", uz: "Test natijalari tayyor." },
      { en: "Hard work results in success.", uz: "Mehnat muvaffaqiyatga olib keladi." },
      { en: "The accident resulted from carelessness.", uz: "Hodisa ehtiyotsizlik tufayli yuz berdi." }
    ]
  },
  {
    word: "retain", ipa: "/rɪˈteɪn/", pos: "fe'l (verb)",
    uz: "saqlab qolmoq, ushlab turmoq",
    usage: "Biror narsani yo'qotmasdan saqlab qolish haqida (rasmiy).",
    synonyms: ["keep", "hold", "maintain", "preserve"],
    examples: [
      { en: "The soil retains water well.", uz: "Tuproq suvni yaxshi ushlab turadi." },
      { en: "She retained her calm.", uz: "U xotirjamligini saqlab qoldi." },
      { en: "The company wants to retain its staff.", uz: "Kompaniya xodimlarini saqlab qolishni xohlaydi." }
    ]
  },
  {
    word: "retire", ipa: "/rɪˈtaɪər/", pos: "fe'l (verb)",
    uz: "nafaqaga chiqmoq, ishdan chetlashmoq",
    usage: "Yoshi yoki tanlov bo'yicha ishni butunlay tugatish haqida.",
    synonyms: ["stop working", "step down"],
    examples: [
      { en: "He retired at the age of 60.", uz: "U 60 yoshida nafaqaga chiqdi." },
      { en: "She plans to retire next year.", uz: "U kelasi yili nafaqaga chiqishni rejalashtirmoqda." },
      { en: "The athlete retired from sport.", uz: "Sportchi sportni tark etdi." }
    ]
  },
  {
    word: "retirement", ipa: "/rɪˈtaɪərmənt/", pos: "ot (noun)",
    uz: "nafaqa, nafaqaga chiqish",
    usage: "Ish faoliyatini tugatish davri yoki holati haqida.",
    synonyms: ["pension", "withdrawal"],
    examples: [
      { en: "He is enjoying his retirement.", uz: "U nafaqasidan rohatlanmoqda." },
      { en: "She saved money for retirement.", uz: "U nafaqa uchun pul yig'di." },
      { en: "Retirement age is rising.", uz: "Nafaqa yoshi oshmoqda." }
    ]
  },
  {
    word: "return", ipa: "/rɪˈtɜːrn/", pos: "fe'l (verb) / ot (noun)",
    uz: "qaytmoq, qaytarmoq; qaytish",
    usage: "Joyga qaytib kelish yoki narsani qaytarib berish haqida.",
    synonyms: ["come back", "give back", "comeback"],
    examples: [
      { en: "She returned home late.", uz: "U uyga kech qaytdi." },
      { en: "Please return the book to the library.", uz: "Iltimos, kitobni kutubxonaga qaytaring." },
      { en: "We look forward to your return.", uz: "Sizning qaytishingizni intiqlik bilan kutamiz." }
    ]
  },
  {
    word: "reveal", ipa: "/rɪˈviːl/", pos: "fe'l (verb)",
    uz: "oshkor qilmoq, fosh qilmoq, ko'rsatmoq",
    usage: "Yashirin ma'lumot yoki narsani ochib berish haqida.",
    synonyms: ["disclose", "show", "expose", "uncover"],
    examples: [
      { en: "He refused to reveal the secret.", uz: "U sirni oshkor qilishdan bosh tortdi." },
      { en: "The study reveals new facts.", uz: "Tadqiqot yangi faktlarni ochib beradi." },
      { en: "She revealed her true feelings.", uz: "U haqiqiy his-tuyg'ularini ochib berdi." }
    ]
  },
  {
    word: "revenue", ipa: "/ˈrevənuː/", pos: "ot (noun)",
    uz: "daromad, tushum",
    usage: "Korxona yoki davlat oladigan umumiy pul tushumi haqida.",
    synonyms: ["income", "earnings", "proceeds"],
    examples: [
      { en: "The company's revenue increased.", uz: "Kompaniyaning daromadi oshdi." },
      { en: "Tax revenue funds public services.", uz: "Soliq daromadi davlat xizmatlarini moliyalashtiradi." },
      { en: "Advertising brings in most of the revenue.", uz: "Reklama daromadning katta qismini keltiradi." }
    ]
  },
  {
    word: "review", ipa: "/rɪˈvjuː/", pos: "ot (noun) / fe'l (verb)",
    uz: "ko'rib chiqish, sharh; qayta ko'rmoq",
    usage: "Biror narsani baholash, sharh yozish yoki takrorlab o'rganish haqida.",
    synonyms: ["assessment", "evaluation", "examine"],
    examples: [
      { en: "The movie got great reviews.", uz: "Film ajoyib sharhlar oldi." },
      { en: "Let's review the lesson.", uz: "Darsni takrorlab ko'raylik." },
      { en: "The manager reviewed my work.", uz: "Menejer mening ishimni ko'rib chiqdi." }
    ]
  },
  {
    word: "revolution", ipa: "/ˌrevəˈluːʃən/", pos: "ot (noun)",
    uz: "inqilob; aylanish (to'liq)",
    usage: "Katta ijtimoiy o'zgarish yoki to'liq aylanish haqida.",
    synonyms: ["uprising", "transformation", "rotation"],
    examples: [
      { en: "The revolution changed the country.", uz: "Inqilob mamlakatni o'zgartirdi." },
      { en: "The internet caused a revolution in media.", uz: "Internet mediada inqilob qildi." },
      { en: "The Earth makes one revolution a day.", uz: "Yer kuniga bir marta aylanadi." }
    ]
  },
  {
    word: "rhythm", ipa: "/ˈrɪðəm/", pos: "ot (noun)",
    uz: "ritm, ohang, maromli takror",
    usage: "Musiqa yoki harakatdagi muntazam takrorlanuvchi naqsh haqida.",
    synonyms: ["beat", "tempo", "pattern"],
    examples: [
      { en: "She danced to the rhythm.", uz: "U ritmga mos raqsga tushdi." },
      { en: "The song has a fast rhythm.", uz: "Qo'shiqning tez ritmi bor." },
      { en: "Try to feel the rhythm of the music.", uz: "Musiqaning ritmini his qilishga harakat qiling." }
    ]
  },
  {
    word: "rice", ipa: "/raɪs/", pos: "ot (noun)",
    uz: "guruch, sholi",
    usage: "Asosiy oziq-ovqat doni haqida.",
    synonyms: ["grain"],
    examples: [
      { en: "We eat rice every day.", uz: "Biz har kuni guruch yeymiz." },
      { en: "Cook the rice for twenty minutes.", uz: "Guruchni yigirma daqiqa pishiring." },
      { en: "Rice grows in wet fields.", uz: "Sholi nam dalalarda o'sadi." }
    ]
  },
  {
    word: "rich", ipa: "/rɪtʃ/", pos: "sifat (adjective)",
    uz: "boy, badavlat; serunum, to'yimli",
    usage: "Ko'p pulga ega yoki biror narsaga to'la/boy bo'lish haqida.",
    synonyms: ["wealthy", "affluent", "abundant"],
    examples: [
      { en: "He became rich very quickly.", uz: "U juda tez boyib ketdi." },
      { en: "The soil is rich and fertile.", uz: "Tuproq boy va unumdor." },
      { en: "Oranges are rich in vitamin C.", uz: "Apelsinlar C vitaminiga boy." }
    ]
  },
  {
    word: "rid", ipa: "/rɪd/", pos: "fe'l (verb)",
    uz: "qutulmoq, xalos bo'lmoq ('get rid of')",
    usage: "Keraksiz narsadan xalos bo'lishni bildirishda, ko'pincha 'get rid of'.",
    synonyms: ["remove", "eliminate", "clear"],
    examples: [
      { en: "I want to get rid of these old clothes.", uz: "Men bu eski kiyimlardan qutulmoqchiman." },
      { en: "How do I get rid of this smell?", uz: "Bu hidan qanday qutulaman?" },
      { en: "They rid the house of insects.", uz: "Ular uyni hasharotlardan xalos qilishdi." }
    ]
  },
  {
    word: "ride", ipa: "/raɪd/", pos: "fe'l (verb) / ot (noun)",
    uz: "minmoq, haydab ketmoq; sayr, yo'l",
    usage: "Ot, velosiped yoki transport vositasida yurishni bildirishda.",
    synonyms: ["travel", "drive", "journey"],
    examples: [
      { en: "She rides a bike to work.", uz: "U ishga velosipedda boradi." },
      { en: "Can you give me a ride home?", uz: "Meni uyga olib borib qo'ya olasizmi?" },
      { en: "We enjoyed the train ride.", uz: "Bizga poyezd sayohati yoqdi." }
    ]
  },
  {
    word: "rifle", ipa: "/ˈraɪfəl/", pos: "ot (noun)",
    uz: "miltiq",
    usage: "Uzun stvolli o't ochar qurol haqida.",
    synonyms: ["gun", "firearm"],
    examples: [
      { en: "The hunter carried a rifle.", uz: "Ovchi miltiq ko'tarib yurdi." },
      { en: "He cleaned his rifle carefully.", uz: "U miltig'ini ehtiyotkorlik bilan tozaladi." },
      { en: "Soldiers were trained to use rifles.", uz: "Askarlar miltiqdan foydalanishga o'rgatildi." }
    ]
  },
  {
    word: "right", ipa: "/raɪt/", pos: "sifat (adjective) / ot (noun) / ravish (adverb)",
    uz: "to'g'ri; o'ng; huquq",
    usage: "To'g'rilik, o'ng tomon yoki qonuniy huquqni ifodalashda.",
    synonyms: ["correct", "proper", "entitlement"],
    examples: [
      { en: "You gave the right answer.", uz: "Siz to'g'ri javob berdingiz." },
      { en: "Turn right at the corner.", uz: "Burchakdan o'ngga buriling." },
      { en: "Everyone has the right to vote.", uz: "Har bir kishi ovoz berish huquqiga ega." },
      { en: "I'll be right back.", uz: "Hozir qaytaman." }
    ]
  },

  {
    word: "ring", ipa: "/rɪŋ/", pos: "ot (noun) / fe'l (verb)",
    uz: "uzuk; halqa; jiringlamoq; qo'ng'iroq qilmoq",
    usage: "Barmoqqa taqiladigan uzuk, aylana shakl yoki telefon/qo'ng'iroq ovozi haqida.",
    synonyms: ["band", "circle", "call", "chime"],
    examples: [
      { en: "He gave her a diamond ring.", uz: "U unga olmosli uzuk sovg'a qildi." },
      { en: "The phone is ringing.", uz: "Telefon jiringlayapti." },
      { en: "They stood in a ring.", uz: "Ular halqa shaklida turishdi." },
      { en: "Let me ring you back later.", uz: "Keyin senga qo'ng'iroq qilay." }
    ]
  },
  {
    word: "rise", ipa: "/raɪz/", pos: "fe'l (verb) / ot (noun)",
    uz: "ko'tarilmoq, oshmoq; ko'tarilish",
    usage: "Narx, suv sathi yoki odamning yuqoriga ko'tarilishi haqida.",
    synonyms: ["increase", "go up", "climb", "ascend"],
    examples: [
      { en: "Prices rise every year.", uz: "Narxlar har yili ko'tariladi." },
      { en: "The sun rises in the east.", uz: "Quyosh sharqdan chiqadi." },
      { en: "There was a sharp rise in temperature.", uz: "Haroratda keskin oshish bo'ldi." },
      { en: "She rose to a high position.", uz: "U yuqori lavozimga ko'tarildi." }
    ]
  },
  {
    word: "risk", ipa: "/rɪsk/", pos: "ot (noun) / fe'l (verb)",
    uz: "xavf, tavakkalchilik; xavf ostiga qo'ymoq",
    usage: "Yomon natija yuz berish ehtimoli yoki tavakkal qilish haqida.",
    synonyms: ["danger", "threat", "hazard", "gamble"],
    examples: [
      { en: "Smoking increases the risk of cancer.", uz: "Chekish saraton xavfini oshiradi." },
      { en: "He risked his life to save her.", uz: "U uni qutqarish uchun hayotini xavf ostiga qo'ydi." },
      { en: "There's a risk of flooding.", uz: "Toshqin xavfi bor." },
      { en: "Don't risk it, wait for the signal.", uz: "Tavakkal qilma, signalni kut." }
    ]
  },
  {
    word: "river", ipa: "/ˈrɪvər/", pos: "ot (noun)",
    uz: "daryo",
    usage: "Tabiiy oqar suv haqida.",
    synonyms: ["stream", "waterway"],
    examples: [
      { en: "The river flows to the sea.", uz: "Daryo dengizga oqadi." },
      { en: "They went swimming in the river.", uz: "Ular daryoda suzishdi." },
      { en: "The longest river in the world is the Nile.", uz: "Dunyodagi eng uzun daryo — Nil." }
    ]
  },
  {
    word: "road", ipa: "/roʊd/", pos: "ot (noun)",
    uz: "yo'l, ko'cha",
    usage: "Transport harakatlanadigan yo'l haqida.",
    synonyms: ["street", "highway", "path"],
    examples: [
      { en: "The road was wet from the rain.", uz: "Yo'l yomg'irdan ho'l edi." },
      { en: "Cross the road carefully.", uz: "Yo'ldan ehtiyotkorlik bilan o'ting." },
      { en: "We drove down a long road.", uz: "Biz uzun yo'ldan haydadik." },
      { en: "There's a new road being built.", uz: "Yangi yo'l qurilmoqda." }
    ]
  },
  {
    word: "rock", ipa: "/rɑːk/", pos: "ot (noun) / fe'l (verb)",
    uz: "tosh, qoya; tebranmoq; rok (musiqa)",
    usage: "Katta tosh, musiqa janri yoki oldinga-orqaga tebranish haqida.",
    synonyms: ["stone", "boulder", "sway", "shake"],
    examples: [
      { en: "They sat on a big rock.", uz: "Ular katta tosh ustida o'tirishdi." },
      { en: "She loves rock music.", uz: "U rok musiqani yaxshi ko'radi." },
      { en: "The boat rocked in the waves.", uz: "Qayiq to'lqinlarda tebranib turdi." }
    ]
  },
  {
    word: "role", ipa: "/roʊl/", pos: "ot (noun)",
    uz: "rol, vazifa",
    usage: "Aktyor roli yoki odamning jamiyat/ishdagi vazifasi haqida.",
    synonyms: ["part", "function", "position", "duty"],
    examples: [
      { en: "She played the leading role in the film.", uz: "U filmda bosh rolni o'ynadi." },
      { en: "What's your role in the company?", uz: "Kompaniyadagi vazifangiz nima?" },
      { en: "Parents play an important role in education.", uz: "Ota-onalar ta'limda muhim rol o'ynaydi." }
    ]
  },
  {
    word: "roll", ipa: "/roʊl/", pos: "fe'l (verb) / ot (noun)",
    uz: "dumalab ketmoq, o'ramoq; o'rama, bulka",
    usage: "Aylana jism harakati, yuzani aylantirish yoki non o'ramasi haqida.",
    synonyms: ["spin", "turn", "rotate", "bun"],
    examples: [
      { en: "The ball rolled down the hill.", uz: "To'p tepalikdan dumalab tushdi." },
      { en: "She bought a roll of bread.", uz: "U bir dona bulka sotib oldi." },
      { en: "Roll the dough flat.", uz: "Xamirni tekis qilib yoying." },
      { en: "He rolled the window down.", uz: "U oynani pastga tushirdi." }
    ]
  },
  {
    word: "romantic", ipa: "/roʊˈmæntɪk/", pos: "sifat (adjective)",
    uz: "romantik, ishqiy",
    usage: "Sevgi bilan bog'liq yoki hayoliy go'zal narsa haqida.",
    synonyms: ["loving", "passionate", "sentimental"],
    examples: [
      { en: "They had a romantic dinner.", uz: "Ular romantik kechki ovqat qilishdi." },
      { en: "He's a romantic person.", uz: "U romantik odam." },
      { en: "Paris is a romantic city.", uz: "Parij romantik shahar." }
    ]
  },
  {
    word: "roof", ipa: "/ruːf/", pos: "ot (noun)",
    uz: "tom, boshpana",
    usage: "Bino ustidagi yopiq qism haqida.",
    synonyms: ["rooftop", "shelter", "ceiling"],
    examples: [
      { en: "The roof needs repair.", uz: "Tom ta'mirga muhtoj." },
      { en: "They climbed onto the roof.", uz: "Ular tomga chiqishdi." },
      { en: "Rain was falling on the roof.", uz: "Yomg'ir tomga yog'ardi." }
    ]
  },
  {
    word: "room", ipa: "/ruːm/", pos: "ot (noun)",
    uz: "xona; joy",
    usage: "Bino ichidagi bo'lingan makon yoki bo'sh joy haqida.",
    synonyms: ["chamber", "space", "area"],
    examples: [
      { en: "He went to his room.", uz: "U xonasiga ketdi." },
      { en: "Is there room for me?", uz: "Menga joy bormi?" },
      { en: "This room is very bright.", uz: "Bu xona juda yorqin." },
      { en: "She cleaned her room.", uz: "U xonasini tozaladi." }
    ]
  },
  {
    word: "root", ipa: "/ruːt/", pos: "ot (noun)",
    uz: "ildiz; asl sabab",
    usage: "O'simlik ildizi, muammoning asli yoki kelib chiqishi haqida.",
    synonyms: ["origin", "source", "base"],
    examples: [
      { en: "The tree has deep roots.", uz: "Daraxtning chuqur ildizlari bor." },
      { en: "We need to find the root of the problem.", uz: "Muammoning ildizini topishimiz kerak." },
      { en: "He never forgot his roots.", uz: "U hech qachon o'z ildizlarini unutmadi." }
    ]
  },
  {
    word: "rope", ipa: "/roʊp/", pos: "ot (noun)",
    uz: "arqon",
    usage: "Bog'lash yoki tortish uchun ishlatiladigan pishiq ip haqida.",
    synonyms: ["cord", "line", "string"],
    examples: [
      { en: "Tie the box with a rope.", uz: "Qutini arqon bilan bog'lang." },
      { en: "He climbed up the rope.", uz: "U arqon bo'ylab yuqoriga chiqdi." },
      { en: "The rope was too short.", uz: "Arqon juda kalta edi." }
    ]
  },
  {
    word: "rose", ipa: "/roʊz/", pos: "ot (noun)",
    uz: "atirgul",
    usage: "Gul turi — go'zallik va sevgi ramzi.",
    synonyms: ["flower", "blossom"],
    examples: [
      { en: "He gave her a red rose.", uz: "U unga qizil atirgul berdi." },
      { en: "The garden is full of roses.", uz: "Bog' atirgullarga to'la." },
      { en: "A rose has thorns.", uz: "Atirgulning tikanlari bor." }
    ]
  },
  {
    word: "rough", ipa: "/rʌf/", pos: "sifat (adjective)",
    uz: "g'adir-budir, qo'pol; taxminiy; og'ir",
    usage: "Sirt notekisligi, og'ir sharoit yoki taxminiy hisob haqida.",
    synonyms: ["uneven", "harsh", "approximate", "tough"],
    examples: [
      { en: "The road surface was rough.", uz: "Yo'l sirti g'adir-budir edi." },
      { en: "He had a rough day at work.", uz: "Uning ishda og'ir kuni bo'ldi." },
      { en: "This is a rough estimate.", uz: "Bu taxminiy hisob." },
      { en: "The sea was rough that night.", uz: "O'sha kechasi dengiz to'lqinli edi." }
    ]
  },
  {
    word: "roughly", ipa: "/ˈrʌfli/", pos: "ravish (adverb)",
    uz: "taxminan; qo'pollik bilan",
    usage: "Aniq emas, taxminiy miqdorni bildirishda.",
    synonyms: ["approximately", "about", "around"],
    examples: [
      { en: "It costs roughly $500.", uz: "U taxminan 500 dollar turadi." },
      { en: "Roughly half the students passed.", uz: "Taxminan yarmisi imtihondan o'tdi." },
      { en: "He grabbed her arm roughly.", uz: "U uning qo'lini qo'pollik bilan ushladi." }
    ]
  },
  {
    word: "round", ipa: "/raʊnd/", pos: "sifat (adj) / ot (noun) / predlog (prep)",
    uz: "dumaloq, yumaloq; raund; atrofida",
    usage: "Shakl, musobaqa davri yoki atrofida bo'lishni ifodalashda.",
    synonyms: ["circular", "spherical", "around"],
    examples: [
      { en: "The table is round.", uz: "Stol dumaloq." },
      { en: "He won in the final round.", uz: "U oxirgi raundda g'olib chiqdi." },
      { en: "We walked round the lake.", uz: "Biz ko'l atrofida aylandik." }
    ]
  },
  {
    word: "route", ipa: "/ruːt/", pos: "ot (noun)",
    uz: "yo'nalish, marshrut",
    usage: "Bir joydan ikkinchisiga borish yo'li haqida.",
    synonyms: ["path", "way", "direction", "course"],
    examples: [
      { en: "What's the fastest route?", uz: "Eng tez yo'nalish qaysi?" },
      { en: "The bus follows a fixed route.", uz: "Avtobus belgilangan marshrutda yuradi." },
      { en: "Plan your route before driving.", uz: "Haydashdan oldin yo'nalishni rejalashtiring." }
    ]
  },
  {
    word: "routine", ipa: "/ruːˈtiːn/", pos: "ot (noun) / sifat (adjective)",
    uz: "kun tartibi, odatdagi ish; odatdagi",
    usage: "Har kuni takrorlanadigan tartib yoki oddiy/doimiy vazifa haqida.",
    synonyms: ["habit", "schedule", "regular", "usual"],
    examples: [
      { en: "Exercise is part of my daily routine.", uz: "Mashq mening kun tartibimning bir qismi." },
      { en: "It was a routine check-up.", uz: "Bu odatdagi tekshiruv edi." },
      { en: "She followed her morning routine.", uz: "U ertalabki kun tartibiga amal qildi." }
    ]
  },
  {
    word: "row", ipa: "/roʊ/ (qator); /raʊ/ (janjal)", pos: "ot (noun) / fe'l (verb)",
    uz: "qator; janjal (British); eshkak eshmoq",
    usage: "Narsalar saflanishi, qayiqni harakatlantirish yoki (Britaniya) mojaro haqida.",
    synonyms: ["line", "sequence", "argue", "paddle"],
    examples: [
      { en: "We sat in the front row.", uz: "Biz old qatorda o'tirdik." },
      { en: "They rowed the boat across the lake.", uz: "Ular qayiqni ko'l bo'ylab eshkak eshib o'tkazishdi." },
      { en: "Five days in a row!", uz: "Ketma-ket besh kun!" },
      { en: "They had a row about money.", uz: "Ular pul ustida janjal qilishdi." }
    ]
  },
  {
    word: "rub", ipa: "/rʌb/", pos: "fe'l (verb)",
    uz: "ishqalamoq, surtmoq",
    usage: "Qo'l bilan biror sirtni ishqalash/artish haqida.",
    synonyms: ["scrub", "massage", "wipe"],
    examples: [
      { en: "She rubbed her hands together.", uz: "U qo'llarini bir-biriga ishqadi." },
      { en: "Rub some cream on your skin.", uz: "Teringizga krem surting." },
      { en: "Don't rub your eyes.", uz: "Ko'zingizni ishqalamang." }
    ]
  },
  {
    word: "rule", ipa: "/ruːl/", pos: "ot (noun) / fe'l (verb)",
    uz: "qoida; boshqarmoq, hukmronlik qilmoq",
    usage: "O'yin/muassasa qoidasi yoki mamlakat boshqaruvi haqida.",
    synonyms: ["regulation", "law", "govern", "command"],
    examples: [
      { en: "Follow the rules.", uz: "Qoidalarga amal qiling." },
      { en: "The king ruled for 30 years.", uz: "Qirol 30 yil hukmronlik qildi." },
      { en: "The first rule is to be honest.", uz: "Birinchi qoida — halol bo'lish." },
      { en: "No rule is without an exception.", uz: "Istisnosiz qoida yo'q." }
    ]
  },
  {
    word: "run", ipa: "/rʌn/", pos: "fe'l (verb) / ot (noun)",
    uz: "yugurmoq; boshqarmoq; ishlash (dastur/mashina)",
    usage: "Tez harakatlanish, korxona boshqarish yoki mashina/dastur ishlashi haqida.",
    synonyms: ["sprint", "operate", "manage", "dash"],
    examples: [
      { en: "He runs five kilometers every morning.", uz: "U har kuni ertalab besh kilometr yuguradi." },
      { en: "She runs a small business.", uz: "U kichik biznes boshqaradi." },
      { en: "The engine is running smoothly.", uz: "Dvigatel silliq ishlayapti." },
      { en: "Let's go for a run.", uz: "Yugurgani boraylik." }
    ]
  },
  {
    word: "running", ipa: "/ˈrʌnɪŋ/", pos: "ot (noun) / sifat (adjective)",
    uz: "yugurish; davom etayotgan; oqar (suv)",
    usage: "Sport mashqi sifatida yugurish yoki uzluksiz davom etish haqida.",
    synonyms: ["jogging", "continuous", "flowing"],
    examples: [
      { en: "Running is good for your heart.", uz: "Yugurish yurak uchun foydali." },
      { en: "There's no running water here.", uz: "Bu yerda oqar suv yo'q." },
      { en: "She won for the third year running.", uz: "U uchinchi yil ketma-ket g'olib chiqdi." }
    ]
  },
  {
    word: "rural", ipa: "/ˈrʊrəl/", pos: "sifat (adjective)",
    uz: "qishloq, qishloq joylarga oid",
    usage: "Shahar tashqarisidagi, qishloq hayotiga oid narsalarni ta'riflashda.",
    synonyms: ["countryside", "agricultural", "village"],
    examples: [
      { en: "She grew up in a rural area.", uz: "U qishloq joyda o'sdi." },
      { en: "Rural life is quieter.", uz: "Qishloq hayoti tinchroq." },
      { en: "Many rural schools lack resources.", uz: "Ko'pgina qishloq maktablarida resurslar yetishmaydi." }
    ]
  },
  {
    word: "rush", ipa: "/rʌʃ/", pos: "fe'l (verb) / ot (noun)",
    uz: "shoshilmoq, yugurib bormoq; shoshqaloqlik",
    usage: "Tez harakat qilish zaruriyati yoki shoshilinch holat haqida.",
    synonyms: ["hurry", "dash", "hasten", "urgency"],
    examples: [
      { en: "Don't rush, we have time.", uz: "Shoshilma, vaqtimiz bor." },
      { en: "She rushed to the hospital.", uz: "U kasalxonaga yugurib bordi." },
      { en: "There's a rush for tickets.", uz: "Chiptalar uchun olomon bor." },
      { en: "Morning rush hour is crazy.", uz: "Ertalabki tiqilinch soati qiyomat." }
    ]
  },
  {
    word: "Russian", ipa: "/ˈrʌʃən/", pos: "sifat (adjective) / ot (noun)",
    uz: "rus, ruscha; rus odami",
    usage: "Rossiyaga, rus tiliga yoki rus millati vakiliga oid narsalar haqida.",
    synonyms: ["Soviet (historical)"],
    examples: [
      { en: "She speaks Russian fluently.", uz: "U ruscha ravon gapiradi." },
      { en: "Russian literature is very rich.", uz: "Rus adabiyoti juda boy." },
      { en: "He is learning Russian at school.", uz: "U maktabda rus tilini o'rganmoqda." }
    ]
  }
];
