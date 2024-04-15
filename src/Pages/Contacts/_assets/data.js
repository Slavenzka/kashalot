export const contactsData = {
  banner: {
    bgImage: 'contacts__banner@desktop.jpg',
    bgImageTablet: 'contacts__banner@mobile.jpg',
    bgImageMobile: 'contacts__banner@mobile.jpg',
    title: 'Как до нас добраться',
  },
  title: 'Филиалы клиники',
  list: [
    {
      name: 'Кашалот',
      city: 'Москва',
      address: 'Каширское шоссе, д. 65, к.2',
      coords: [55.599957, 37.724633],
      schedule: 'вт, ср, чт, пт, сб с 10.00 до 21.00',
      phone: '+7 (926) 965-22-02',
      gallery: [
        {
          img: 'contacts__location.jpg',
          label: 'Расположение клиники Kashalot'
        },
      ]
    },
  ],
  mapSettings: {
    zoom: 16,
    center: [55.599957, 37.724633]
  }
}
