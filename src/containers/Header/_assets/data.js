import {
  ABOUT_CERTIFICATES,
  ABOUT_DOCUMENTS,
  ABOUT_FAQ,
  ABOUT_US, CONTACTS,
  DOCTORS, POLICY,
  PRICES,
  REVIEWS,
  SPECIALS
} from 'Pages/Routes'

export const headerData = {
  withSearch: true,
  schedule: 'вт, ср, чт, пт, сб с 10.00 до 21.00',
  phones: ['+7 (926) 965 22 02'],
  list: [
    {
      text: 'Услуги и цены',
      url: PRICES
    },
    {
      text: 'Акции',
      url: SPECIALS
    },
    {
      text: 'Врачи',
      url: DOCTORS
    },
    {
      text: 'О клинике',
      sublist: [
        {
          text: 'О нас',
          url: ABOUT_US
        },
        {
          text: 'Частые вопросы',
          url: ABOUT_FAQ
        },
        {
          text: 'Лицензии и сертификаты',
          url: ABOUT_CERTIFICATES
        },
        {
          text: 'Правовые документы',
          url: ABOUT_DOCUMENTS
        },
      ]
    },
    {
      text: 'Отзывы',
      url: REVIEWS
    },
    {
      text: 'Контакты',
      url: CONTACTS
    },
  ],
  auxList: [
    {
      text: 'Политика конфиденциальности',
      url: POLICY
    }
  ]
}
