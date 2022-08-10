export const aboutData = {
  banner: {
    bgImage: 'about__banner@desktop.jpg',
    bgImageTablet: 'about__banner@mobile.jpg',
    bgImageMobile: 'about__banner@mobile.jpg',
    title: 'О нас',
  },
  content: [
    {
      type: 'mission',
      title: 'Миссия клиники',
      data: {
        description: `
            <p> Что делает человек, когда счастлив? Улыбается! А мы работаем, инвестируем и развиваемся, чтобы каждый мог безопасно и эффективно позаботиться о своей улыбке в позитивной и приветливой атмосфере.</p>
          `,
        quote: `От того, каким будет опыт лечения многое зависит. Особенно важно впечатление маленьких пациентов, которые порой приходят на прием впервые. Поэтому в клинике Кашалот лечат людей, а не только решают стоматологические проблемы.`,
        doctor: {
          photo: 'doctors__photo--moskalev.png',
          name: 'Москалев Максим Сергеевич',
          rank: 'Основатель клиники'
        }
      }
    },
    {
      type: 'gallery',
      title: 'Галерея',
      data: {
        list: [
          {
            image: 'about__slide--1.jpg',
            label: 'Лечение пациентов в клинике Кашалот'
          },
          {
            image: 'about__slide--2.jpg',
            label: 'Лечение пациентов в клинике kashalot'
          },
          {
            image: 'about__slide--3.jpg',
            label: 'Лечение пациентов в клинике kashalot'
          },
          {
            image: 'about__slide--4.jpg',
            label: 'Лечение пациентов в клинике kashalot'
          },
          {
            image: 'about__slide--5.jpg',
            label: 'Лечение пациентов в клинике kashalot'
          },
          {
            image: 'about__slide--6.jpg',
            label: 'Лечение пациентов в клинике kashalot'
          },
          {
            image: 'about__slide--7.jpg',
            label: 'Лечение пациентов в клинике kashalot'
          },
          {
            image: 'about__slide--8.jpg',
            label: 'Лечение пациентов в клинике kashalot'
          },
        ]
      }
    },
    {
      type: 'principles',
      title: 'Принципы работы',
      descriptor: 'Здоровье, безопасность и комфорт пациентов - главные ценности, на основе которых построена работа специалистов нашей клиники.',
      data: {
        list: [
          {
            key: 'Инновационный подход к лечению ',
            value: `
                <p>Мы инвестируем в изучение и внедрение актуальных технологий и европейское премиальное оборудование для максимального лечебного эффекта,безопасности и безупречных эстетических свойств.</p>
              `
          },
          {
            key: 'Максимум комфорта',
            value: `
                <p>У нас пациенты получaют и красивую улыбку, и удовольствие от лечения в уютной и доброжелательной атмосфере.</p>
              `
          },
        ]
      }
    },
    {
      type: 'stats',
      title: 'Оправдаем ваше доверие',
      descriptor: 'В нашей работе нет мелочей: современное оборудование и качественные материалы в чутких руках профессионалов дают превосходный результат.',
      data: {
        list: [
          {
            key: 99,
            unit: '%',
            value: 'рекомендуют нас друзьям',
          },
          {
            key: 20,
            unit: 'лет+',
            value: 'стаж ведущих специалистов '
          },
          {
            key: 4.5,
            unit: '',
            value: 'рейтинг на Яндекс.Картах',
            step: 0.3
          },
        ]
      }
    },
  ],
  fullScreenPhoto: {
    url: 'about__fullscreen@desktop.jpg',
    description: 'Фотография клиники'
  }
}