import { DOCTORS } from 'utils/const'

export const HOME_PAGE_DATA = {
  siteMainCaption: 'Стоматологическая клиника "Кашалот"',
  videoBanner: {
    top: {
      slogan: 'Гарантия на&nbsp;все виды работ<br/>в&nbsp;течение 2&nbsp;лет',
      previewLabel: 'Посмотрите видео о клинике',
      modalVideo: 'video-banner__video--modal.mp4',
      modalVideoPreview: 'video-banner__preview.jpg',
    },
    bottom: {
      sloganAdaptive: 'На одной волне с вами. Вливатесь!',
      sloganDesktop: 'На одной волне с вами. Вливатесь!',
      backgroundDesktop: `video__preview.jpg`,
      backgroundMobile: 'bg__video-banner@mobile.jpg',
      backgroundTablet: 'bg__video-banner@tablet.jpg',
      descriptor: 'Заботимся о&nbsp;добродушных, вежливых, заразительных, скромных, кокетливых, уверенных, во&nbsp;все 32&nbsp;зуба или меньше улыбках наших пациентов любого возраста.',
      videoBg: 'video-banner__video.mp4'
    }
  },
  services: {
    title: 'Услуги',
    list: [
      {
        category: 'Терапия',
        sublist: [
          {
            text: 'Восстановление зуба пломбой, лечение кариеса от 5 000₽'
          },
          {
            text: 'Профессиональная гигиента полости рта и зубов 5 500₽'
          },
          {
            text: 'Извлечение анкерного штифта от 2 000₽'
          },
          {
            text: 'Лечение пульпита от 8 000₽'
          },
          {
            text: 'Лечение периодонтита от 10 000₽'
          },
        ]
      },
      {
        category: 'Для детей',
        sublist: [
          {
            text: 'Профессиональная гигиена полости рта и зубов 2 500₽'
          },
          {
            text: 'Герметизация фиссур зубов 2 000₽'
          },
          {
            text: 'Восстановление зуба пломбой, лечение кариеса от 3 500₽'
          },
          {
            text: 'Лечение осложнений кариеса временных зубов от 7 500₽'
          },
          {
            text: 'Удаление временного зуба 2 500₽'
          },
        ]
      },
      {
        category: 'Ортопедия',
        sublist: [
          {
            text: 'Циркониевая коронка полностью анатомическая CAD CAM 19 500₽'
          },
          {
            text: 'Керамическая коронка полностью анатомическая Emax 26 000₽'
          },
          {
            text: 'Циркониевая коронка полностью анатомическая CAD CAM для имплантата с винтовой фиксацией (включая винт и платформу) 38 000₽'
          },
          {
            text: 'Винир керамический Emaх, изготовленный по технологии 3D Smile Design 40 000₽'
          },
          {
            text: 'Коронка металлокерамическая 12 500₽'
          },
          {
            text: 'Вкладка оклюзионная Emax от 25 000₽'
          },
        ]
      },
      {
        category: 'Хирургия',
        sublist: [
          {
            text: 'Внутрикостная дентальная имплантация системы Straumann SLA  50 000₽'
          },
          {
            text: 'Установка формирователя десны 7 000₽'
          },
          {
            text: 'Синус-лифтинг (открытая методика) +остеопластический материал от 65 000₽'
          },
          {
            text: 'Удаление постоянного зуба от 5 000₽'
          },
          {
            text: 'Удаление 8 зуба от 8 000₽'
          },
        ]
      },
    ],
    ads: [
      {
        type: 'therapy',
        // url: SPECIALS,
        id: 0,
        color: 'rgb(119, 194, 255)',
        duration: 'Всё лето',
        title: 'Первичная консультация со специалистом',
        price: '<span>500</span> рублей'
      },
      {
        type: 'teeth',
        // url: SPECIALS,
        id: 1,
        color: '#f4785d',
        duration: 'система Straumann SLA',
        title: 'Внутрикостная дентальная имплантация',
        price: '<span>50 000</span> рублей'
      },
    ]
  },
  reviewBanner: {
    bgImages: {
      mobile: 'review-banner__img--mobile.jpg',
      tablet: 'review-banner__img--mobile.jpg',
      desktop: 'review-banner__img.jpg'
    },
    quote: 'Мы&nbsp;заботимся об&nbsp;улыбках пациентов с&nbsp;улыбкой. У&nbsp;нас уютно, а&nbsp;позитивная и&nbsp;приветливая команда поддержит на&nbsp;всех этапах лечения.',
    author: 'Максим Сергеевич Москалев, основатель клиники'
  },
  sliderDoctors: {
    title: 'Врачи',
    list: [
      {
        url: DOCTORS,
        name: 'Москалев Максим Сергеевич',
        expertise: 'Стоматолог-хирург, имплантолог, ортопед',
        // address: 'Общая стоматология',
        photo: 'doctors__photo--moskalev.png',
      },
      {
        url: DOCTORS,
        name: 'Москалева Лали Нодариевна ',
        // expertise: 'Врач стоматолог-терапевт, хирург',
        // address: 'Общая стоматология',
        photo: 'doctors__photo--moskaleva.png',
      },
      {
        url: DOCTORS,
        name: 'Панова Ксения Андреевна',
        // expertise: 'Врач стоматолог-терапевт',
        // address: 'Терапия',
        photo: 'doctors__photo--panova.png',
      },
    ]
  },
  testBanner: {
    title: 'Не&nbsp;знаете, какая услуга нужна?',
    descriptor: 'Пройдите тест, ответив на&nbsp;несколько вопросов'
  },
  about: {
    title: 'О клинике',
    descriptor: 'Все мы&nbsp;уникальны и&nbsp;нуждаемся в&nbsp;персонифицированных решениях. Именно поэтому работа в&nbsp;нашей клинике строится на&nbsp;основе высокоточной диагностики и&nbsp;новейших методов цифровой стоматологии, а&nbsp;еще мы&nbsp;очень внимательно прислушиваемся к&nbsp;потребностям пациента.',
    feature: {
      subtitle: 'Волнуетесь перед лечением?',
      descriptor: `
        <p>
          К&nbsp;сожалению, дентофобия все еще очень широко распространена во&nbsp;всём мире. Но&nbsp;есть способы справиться с&nbsp;беспокойством.
        </p>
        <p>
          Например, попросите кого-то из&nbsp;близких составить компанию. Возможно, вам поможет расслабляющая музыка или медитация, захватите на&nbsp;прием наушники. Познакомьтесь с&nbsp;доктором на&nbsp;первичной консультации, распросите поподробнее о&nbsp;ходе и&nbsp;продолжительности лечения, о&nbsp;материалах, оборудовании в&nbsp;клинике, обязательно поделитесь тревожащими мыслями.
        </p>
        <p>
          Приходите, мы&nbsp;готовы ответить на&nbsp;все вопросы :)
        </p>
      `
    },
    offices: {
      subtitle: 'Наш адрес',
      list: [
        'Каширское ш., 65, корп. 2, Москва',
      ]
    },
    map: {
      markers: [
        [55.599728, 37.724723],
      ],
      center: [55.599728, 37.724723],
      zoom: 16
    }
  },
  reviews: {
    title: 'Отзывы',
    list: [
      {
        name: 'Юлия Качалова',
        date: '2021 год',
        text: 'В&nbsp;2021&nbsp;году, я&nbsp;проходила длительное лечение в&nbsp;клинике &laquo;Кашалот&raquo;. Доктор Максим Сергеевич сделал мне новую, красивую и&nbsp;белоснежнуюулыбку. До&nbsp;сих пор не&nbsp;могу поверить, что она моя! Огромное спасибо! Всем рекомендую. Моя старшая дочь, кстати, лечится у&nbsp;доктора Лали Нодариевны.',
        specialist: 'Маскалев Максим Сергеевич',
        preview: 'review__video-preview--1.jpg'
      },
      {
        name: 'Игорь Ковалев',
        date: 'декабрь 2021',
        text: 'Много лет нашу семью ведёт супер доктор: Максим Сергеевич! Его протезы просто чудо! По&nbsp;очень умеренным ценам! Спасибо! И&nbsp;в&nbsp;этом году открыли для внука супер доктора Лали!!! Она победила нас своим профессионализмом и&nbsp;подходом к&nbsp;детям! Здоровья, Добра и&nbsp;Счастья в&nbsp;вашей семейной профессиональной жизни!!',
        specialist: 'Москалев Максим Сергеевич, Москалева Лали Нодариевна',
      },
      {
        name: 'Татьяна Фищук',
        date: 'январь 2022',
        text: 'Лечение и&nbsp;протезирование, всё понравилось. Отзывчивые работники клиники, готовые помочь даже если это не&nbsp;в&nbsp;их&nbsp;компетенции. Улыбчивый и&nbsp;доброжелательный администратор и&nbsp;врачи. Большое спасибо главному врачу Москалёву Максиму Сергеевичу и&nbsp;стоматологу Ксении Андреевна.',
        specialist: 'Москалев Максим Сергеевич, Панова Ксения Андреевна',
      },
      {
        name: 'Анна',
        date: 'март 2022',
        text: 'Любимая клиника. С удовольствием хожу к Лали на лечение и профилактику. А Максим Сергеевич ювелирно поставил имплант без дополнительной операции на челюсти, на которой настаивали другие специалисты. Очень нравится атмосфера: сложно бояться в клинике, где на стенах прекрасные картины и звучит музыка:)',
        specialist: 'Москалев Максим Сергеевич, Москалева Лали Нодариевна',
      },
      {
        name: 'Надежда',
        date: 'ноябрь 2021',
        text: 'Готовы ехать через все Москву к&nbsp;доктору Лали, она единственная кто так быстро нашел подход к&nbsp;дочке. Приятная распологающая атмосфера, чего нет в&nbsp;других клиниках. Образованные врачи все расскажут и&nbsp;объяснят. Персонал очень приветливый, чеки и&nbsp;все документы, все по-белому. Вылечели все зубки, второго ребенка и&nbsp;себя только сюда. Спасибо таким честным и&nbsp;грамотным врачам!!',
        specialist: 'Москалева Лали Нодариевна',
      },
      {
        text: 'Добрый день! Мы&nbsp;были у&nbsp;вас в&nbsp;январе месяце на&nbsp;консультации с&nbsp;сыном 3,5&nbsp;года. Нам в&nbsp;сентябре будет 4&nbsp;и&nbsp;мы&nbsp;каждый год проходим всех врачей сами. Но&nbsp;после знакомства с&nbsp;вами ни&nbsp;к&nbsp;какому стоматологу больше не&nbsp;хотим!',
        specialist: 'Москалева Лали Нодариевна',
      },
      {
        text: 'Добрый день! После приема сын вышел на&nbsp;улицу и&nbsp;говорит: &laquo;Мне так приятно, когда Лали мне зубы лечит&raquo;. Спасибо большое! После вчерашнего визита я&nbsp;четко осознала, что сын прошел через свою первую травму со&nbsp;страшным удалением у&nbsp;врача-монстра. Теперь при словах &laquo;надо лечиь зубы&raquo; его не&nbsp;бросает в&nbsp;пот.',
        specialist: 'Москалева Лали Нодариевна',
      },
      {
        text: 'Как&nbsp;же я&nbsp;благодарна, что однажды мы&nbsp;попали к&nbsp;замечательному доктору, что дети без страха идут в&nbsp;кресло лечить зубы. Ведь только она знает как я&nbsp;стрессую, оказываясь в&nbsp;кресле. Сегодня первый раз Варвара сидела самостоятельно, не&nbsp;на&nbsp;наших коленях и&nbsp;даже не&nbsp;пикнула. Пусть и&nbsp;дальше будет так. Любим и&nbsp;бесконечно благодарим!',
        specialist: 'Москалева Лали Нодариевна',
      },
      {
        text: 'У&nbsp;меня новая улыбка! Большое спасибо! Ваш индивидуальный подход, художественный вкус, желание сделать не&nbsp;просто красиво, но&nbsp;еще и&nbsp;как лучше для пациента мне очень нравятся! Я&nbsp;готова продолжать совершенствовать свою улыбку только с&nbsp;Вами!',
        specialist: 'Москалев Максим Сергеевич, Москалева Лали Нодариевна',
      },
      {
        text: 'Хочу от&nbsp;всей души поблагодарить доктора Лали. Мы&nbsp;с&nbsp;сыном долго собирались к&nbsp;стоматологу, боялись и&nbsp;я, и&nbsp;он. Зная вредный характер своего пятилетнего сына, я&nbsp;не&nbsp;верила в&nbsp;успех, что все получится и&nbsp;он&nbsp;даст полечить зубы. Но&nbsp;Лали сделала невозможное, спокойно, без суеты все показала, рассказала ребёнку, что будет делать, дала понажимать кнопочки&nbsp;и, пока сын обдумывал процесс поступления воды в&nbsp;краник, зуб был вылечен. Даже я&nbsp;не&nbsp;знаметила, так всё быстро и&nbsp;профессионально было сделано. И&nbsp;главное без единого крика и&nbsp;слезинки ребенка. Я&nbsp;сама лечила зубы у&nbsp;Лали 15&nbsp;лет назад и&nbsp;все промбы до&nbsp;сих пор на&nbsp;месте. Еще раз огромное спасибо! Доктор Лали&nbsp;&mdash; настоящий мастер своего дела!',
        specialist: 'Москалева Лали Нодариевна',
      },
      {
        text: 'Я&nbsp;так счастлива найти такого стоматолога как Лали! Это просто подарок, честное слово! Так классно, что мой сын с&nbsp;удовольствием всегда едет на&nbsp;приём. Классно, что у&nbsp;Сашки не&nbsp;будет таких страхов как у&nbsp;меня с&nbsp;детства и&nbsp;только с&nbsp;посещением Лали и&nbsp;мои страхи постепенно исчезают... спасибо! Спасибо за&nbsp;советы по&nbsp;гигиене, мы&nbsp;купили классые щётки, поменяли пасту так как в&nbsp;первый приём, когда мне показали все недочеты, я&nbsp;была просто обескуражена. Сейчас сын чистит зубы полностью сам и&nbsp;Лали сказала, что зачётно! Йохуууу!',
        specialist: 'Москалева Лали Нодариевна',
      },
      {
        name: `Светлана`,
        text: 'Так случилось, что мне катастрофически не&nbsp;везло со&nbsp;стоматологами, но&nbsp;чуткие руки Пановой Ксении Андреевны изменили моё отношение к&nbsp;стоматологии. Лечение прошло комфортно и&nbsp;профессионально! Ксения всё обхясняла на&nbsp;каждом этапе. Ксения, спасибо за&nbsp;вашу внимательность и&nbsp;профессионализм, вы&nbsp;очень хороший специалист и&nbsp;замечательный человек. Спасибо!',
        specialist: 'Панова Ксения Андреевна',
      },
      {
        name: `Яна`,
        text: 'Хочу выразить багодарность Ксении Андреевне Пановой, она замечательный специалист! Наблюдаюсь в&nbsp;клинике с&nbsp;августа 2021, прохожу комплекстное лечение. Попала к&nbsp;ней на&nbsp;приём случайно и&nbsp;это была судьба! Процедура всегда проходит безболезненно, спокойно, прихожу с&nbsp;удовольствием! Она избавила меня от&nbsp;страха перед стоматологами, который был у&nbsp;меня всю жизнь! Рада, что нашла своего самого лучшего стоматолога!',
        specialist: 'Панова Ксения Андреевна',
        preview: `review-Яна.webp`
      },
      {
        name: `@Shuraohman_`,
        text: 'Ксения&nbsp;&mdash; профессионал своего дела! Если у&nbsp;вас болят зубы, вам к&nbsp;Ксении! Потрясающий специалист! Спасибо большое, что помогли мне победить дентофобию! Я&nbsp;даже не&nbsp;могла подумать, что приём у&nbsp;врача&nbsp;&mdash; стоматолога может пройти настолько комфортно и&nbsp;безоболезненно!',
        specialist: 'Панова Ксения Андреевна',
      },
    ]
  },
  advantages: {
    title: 'Преимущества',
    list: [
      {
        subtitle: 'Только необходимое',
        descriptor: 'Никогда не&nbsp;навязываем лишние услуги. Практикуем только честных подход и&nbsp;персонально составляем план лечения с&nbsp;учетом особенностей конкретного пациента.'
      },
      {
        subtitle: 'Экспертная команда',
        descriptor: 'Мы&nbsp;в&nbsp;деле с&nbsp;2002 года и&nbsp;в&nbsp;команду берем лучших: сильных профессионалов, увлеченных своим делом, и&nbsp;то&nbsp;же время чутких к&nbsp;проблемам и&nbsp;заботам пациентов.'
      },
      {
        subtitle: 'Технологичное оборудование',
        descriptor: 'Мы&nbsp;инвестируем в&nbsp;инновацинные технологии и&nbsp;европейское премиальное оборудование, потому что современная цифровая стоматология позволяет достичь максимального лечебного эффекта и&nbsp;безупречных эстетических свойств.'
      },
    ]
  },
  license: {
    title: 'Лицензии',
    list: [
      {
        label: 'Выписка из реестра лицензий',
        previewImage: 'certificate-1.jpg',
        fullImage: 'certificate-1.jpg'
      },
      {
        label: 'Диплом врача-стоматолога Москалев М.С.',
        previewImage: 'certificate-2.jpg',
        fullImage: 'certificate-2.jpg'
      },
      {
        label: 'Сертификат специалиста Ортопедическая стоматология Москалев М.С.',
        previewImage: 'certificate-3.jpg',
        fullImage: 'certificate-3.jpg'
      },
      {
        label: 'Сертификат специалиста Хирургическая стоматология Москалев М.С.',
        previewImage: 'certificate-4.jpg',
        fullImage: 'certificate-4.jpg'
      },
      {
        label: 'Удостоверение о повышении квалификации на кафедре челюстно-лицевой и пластической хирургии Москалев.М.С.',
        previewImage: 'certificate-5.jpg',
        fullImage: 'certificate-5.jpg'
      },
      {
        label: 'Удостоверение о повышении квалификации по дополнительной профессиональной квалификации "Стоматология ортопедическая" Москалев.М.С.',
        previewImage: 'certificate-6.jpg',
        fullImage: 'certificate-6.jpg'
      },
      {
        label: 'Диплом о профессиональной переподготовке в сфера организации здравоохранения и общественного здоровья. Москалев М.С.',
        previewImage: 'certificate-7.jpg',
        fullImage: 'certificate-7.jpg'
      },
      {
        label: 'Сертификат специалиста Организация здравоохранения и общественное здоровье Москалев М.С.',
        previewImage: 'certificate-8.jpg',
        fullImage: 'certificate-8.jpg'
      },
      {
        label: 'Диплом врача-стоматолога Москалева Л.Н.',
        previewImage: 'certificate-9.jpg',
        fullImage: 'certificate-9.jpg'
      },
      {
        label: 'Удостоверение о повышении квалификации "Стоматология терапевтическая" Москалева Л.Н.',
        previewImage: 'certificate-10.jpg',
        fullImage: 'certificate-10.jpg'
      },
      {
        label: 'Сертификат специалиста "Стоматология терапевтическая" Москалева Л.Н.',
        previewImage: 'certificate-11.jpg',
        fullImage: 'certificate-11.jpg'
      },
      {
        label: 'Сертификат специалиста "Стоматология детская" Москалева Л.Н.',
        previewImage: 'certificate-12.jpg',
        fullImage: 'certificate-12.jpg'
      },
      {
        label: 'Удостоверение о повышении квалификации "Стоматология детская" Москалева Л.Н.',
        previewImage: 'certificate-13.jpg',
        fullImage: 'certificate-13.jpg'
      },
    ]
  }
}