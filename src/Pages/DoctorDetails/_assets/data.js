import { doctorsData } from 'Pages/Doctors/_assets/data'
import { getPracticeDuration } from 'utils'
import { ALLAHVERDIEV_START, KARPUSHOV_START, KIREVICHEVA_START, PANOVA_START, SHTEINBERG_START } from 'utils/const'

export const data = {
  0: {
    banner: {
      photo: 'doctors__photo--moskalev.png',
      name: 'Максим Сергеевич Москалев',
      speciality: 'Стоматолог-ортопед, стоматолог-хирург, имплантолог',
      experience: 'Ведет практику более 20 лет'
    },
    content: [
      {
        type: 'about',
        title: 'О себе',
        data: {
          quote: `
            <p>
              Я специализируюсь в области функционального и эстетического протезирования, занимаюсь реабилитацией пациентов с использованием дентальных имплантатов, с дефецитом костной ткани в целях дальнейшей имплантации и протезирования.
            </p>
            <p>
              Владею методиками современной цифровой стоматологии в планировании и комплексной реабилитации с помощью цифровых и высокоточных методов диагностики и лечения.
            </p>
`         ,
        }
      },
      {
        type: 'docs',
        title: 'Обучение и сертификаты',
        data: {
          list: new Array(23).fill(``).map((_, index) => ({
            image: `docs/moskalev/${index + 1}.jpg`,
            label: ''
          }))
        }
      },
      {
        type: 'reviews',
        title: 'Отзывы',
        data: {
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
              specialist: 'Москалев Максим Сергеевич',
            },
            {
              name: 'Татьяна Фищук',
              date: 'январь 2022',
              text: 'Лечение и&nbsp;протезирование, всё понравилось. Отзывчивые работники клиники, готовые помочь даже если это не&nbsp;в&nbsp;их&nbsp;компетенции. Улыбчивый и&nbsp;доброжелательный администратор и&nbsp;врачи. Большое спасибо главному врачу Москалёву Максиму Сергеевичу и&nbsp;стоматологу Ксении Андреевна.',
              specialist: 'Москалев Максим Сергеевич',
            },
            {
              name: 'Анна',
              date: 'март 2022',
              text: 'Любимая клиника. С удовольствием хожу к Лали на лечение и профилактику. А Максим Сергеевич ювелирно поставил имплант без дополнительной операции на челюсти, на которой настаивали другие специалисты. Очень нравится атмосфера: сложно бояться в клинике, где на стенах прекрасные картины и звучит музыка:)',
              specialist: 'Москалев Максим Сергеевич',
            },
            {
              text: 'У&nbsp;меня новая улыбка! Большое спасибо! Ваш индивидуальный подход, художественный вкус, желание сделать не&nbsp;просто красиво, но&nbsp;еще и&nbsp;как лучше для пациента мне очень нравятся! Я&nbsp;готова продолжать совершенствовать свою улыбку только с&nbsp;Вами!',
              specialist: 'Москалев Максим Сергеевич',
            },
          ]
        }
      }
    ],
    advised: doctorsData.list.filter(({id}) => id !== 0)
  },
  1: {
    banner: {
      photo: 'doctors__photo--moskaleva.png',
      name: 'Лали Нодариевна Москалева ',
      speciality: 'Стоматолог-терапевт, детский стоматолог',
      experience: 'Ведет практику более 20 лет'
    },
    content: [
      {
        type: 'about',
        title: 'О себе',
        data: {
          quote: 'Я специализируюсь в двух областях: детской стоматологии и терапевтической стоматологии. Владею методиками эстетической реабилитации пациентов и профилактики стоматологических заболеваний.',
        }
      },
      {
        type: 'reviews',
        title: 'Отзывы',
        data: {
          list: [
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
              specialist: 'Москалева Лали Нодариевна',
            },
            {
              text: 'Хочу от&nbsp;всей души поблагодарить доктора Лали. Мы&nbsp;с&nbsp;сыном долго собирались к&nbsp;стоматологу, боялись и&nbsp;я, и&nbsp;он. Зная вредный характер своего пятилетнего сына, я&nbsp;не&nbsp;верила в&nbsp;успех, что все получится и&nbsp;он&nbsp;даст полечить зубы. Но&nbsp;Лали сделала невозможное, спокойно, без суеты все показала, рассказала ребёнку, что будет делать, дала понажимать кнопочки&nbsp;и, пока сын обдумывал процесс поступления воды в&nbsp;краник, зуб был вылечен. Даже я&nbsp;не&nbsp;знаметила, так всё быстро и&nbsp;профессионально было сделано. И&nbsp;главное без единого крика и&nbsp;слезинки ребенка. Я&nbsp;сама лечила зубы у&nbsp;Лали 15&nbsp;лет назад и&nbsp;все промбы до&nbsp;сих пор на&nbsp;месте. Еще раз огромное спасибо! Доктор Лали&nbsp;&mdash; настоящий мастер своего дела!',
              specialist: 'Москалева Лали Нодариевна',
            },
            {
              text: 'Я&nbsp;так счастлива найти такого стоматолога как Лали! Это просто подарок, честное слово! Так классно, что мой сын с&nbsp;удовольствием всегда едет на&nbsp;приём. Классно, что у&nbsp;Сашки не&nbsp;будет таких страхов как у&nbsp;меня с&nbsp;детства и&nbsp;только с&nbsp;посещением Лали и&nbsp;мои страхи постепенно исчезают... спасибо! Спасибо за&nbsp;советы по&nbsp;гигиене, мы&nbsp;купили классые щётки, поменяли пасту так как в&nbsp;первый приём, когда мне показали все недочеты, я&nbsp;была просто обескуражена. Сейчас сын чистит зубы полностью сам и&nbsp;Лали сказала, что зачётно! Йохуууу!',
              specialist: 'Москалева Лали Нодариевна',
            },
          ]
        }
      }
    ],
    advised: doctorsData.list.filter(({id}) => id !== 1)
  },
  2: {
    banner: {
      photo: 'doctors__photo--panova.png',
      name: 'Ксения Андреевна Панова',
      speciality: 'Cтоматолог-терапевт, стоматолог-ортопед',
      experience: `Ведет практику более ${getPracticeDuration(PANOVA_START)} лет`
    },
    content: [
      {
        type: 'about',
        title: 'О себе',
        data: {
          quote: 'В работе я очень требовательна к себе и всегда руководствуюсь главным врачебным принципом "не навреди". За время практики установила большое количество коронок и виниров, спротезировала десятки имплантатов, в том числе тотальные балочные работы.',
        }
      },
      {
        type: 'reviews',
        title: 'Отзывы',
        data: {
          list: [
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
        }
      }
    ],
    advised: doctorsData.list.filter(({id}) => id !== 2)
  },
  3: {
    banner: {
      photo: 'doctors__photo--karpushov.png',
      name: 'Игорь Владимирович Карпушов',
      speciality: 'Стоматолог-хирург, имплантолог',
      experience: `Ведет практику более ${getPracticeDuration(KARPUSHOV_START)} лет`
    },
    content: [
      {
        type: 'about',
        title: 'О себе',
        data: {
          quote: 'Специализируюсь на&nbsp;удалении зубов любой сложности. Занимаюсь реабилитацией пациентов с&nbsp;использованием дентальных имплантатов. Для меня главное в&nbsp;работе качество, честность и&nbsp;профессионализм.',
        }
      },
      {
        type: 'docs',
        title: 'Обучение и сертификаты',
        data: {
          list: new Array(4).fill(``).map((_, index) => ({
            image: `docs/karpushov/${index + 1}.jpg`,
            label: ''
          }))
        }
      },
      {
        type: 'reviews',
        title: 'Отзывы',
        data: {
          list: [
            {
              name: `Татьяна. окт 2023`,
              text: 'Хочу выразить искреннюю благодарность Игорю Владимировичу! У&nbsp;меня сложный случай и&nbsp;я&nbsp;боялась идти на&nbsp;удаление, хотя уже стала ощущать боль, а&nbsp;зря. И&nbsp;удалил и&nbsp;проконсультировал что делать дальше, как восстановить зуб.',
              specialist: 'Карпушов Игорь Владимирович',
            },
          ]
        }
      }
    ],
    advised: doctorsData.list.filter(({id}) => id !== 3)
  },
  4: {
    banner: {
      photo: 'doctors__photo--allahverdiev.png',
      name: 'Эльчин Хударович Аллахвердиев',
      speciality: 'Стоматолог-терапевт, стоматолог-ортопед',
      experience: `Ведет практику более ${getPracticeDuration(ALLAHVERDIEV_START)} лет`
    },
    content: [
      {
        type: 'about',
        title: 'О себе',
        data: {
          quote: 'Моя специализация&nbsp;&mdash; восстановление не&nbsp;только функции, но&nbsp;и&nbsp;эстетики улыбки! Но&nbsp;и&nbsp;главное, конечно, избавить пациента от&nbsp;боли и&nbsp;дискомфорта. Если коронки, то&nbsp;только с&nbsp;использованием цифровых технологий, которые позволят вам забыть о&nbsp;проблемах с&nbsp;зубами надолго. Моя работа&nbsp;&mdash; перфекционизм во&nbsp;всех его проявлениях! Идеальный результат&nbsp;&mdash; моя цель!',
        }
      },
      {
        type: 'docs',
        title: 'Обучение и сертификаты',
        data: {
          list: new Array(5).fill(``).map((_, index) => ({
            image: `docs/allahverdiev/${index + 1}.jpg`,
            label: ''
          }))
        }
      },
      {
        type: 'reviews',
        title: 'Отзывы',
        data: {
          list: [
            {
              name: `Константин. Сентябрь  2023`,
              text: 'Замечательный доктор! Помог и&nbsp;с&nbsp;лечением, и&nbsp;с&nbsp;протезированием!',
              specialist: 'Аллахвердиев Эльчин Хударович',
            },
          ]
        }
      }
    ],
    advised: doctorsData.list.filter(({id}) => id !== 4)
  },
  5: {
    banner: {
      photo: 'doctors__photo--kirevicheva.png',
      name: 'Дарья Олеговна Киревичева',
      speciality: 'Стоматолог-ортодонт',
      experience: `Ведет практику более ${KIREVICHEVA_START} лет`
    },
    content: [
      {
        type: 'about',
        title: 'О себе',
        data: {
          quote: 'Провожу ортодонтическое лечение детей и&nbsp;взрослых по&nbsp;современным протоколам, используя съемные и&nbsp;несъемные ортодонтические аппараты. Уделяю огромное значение этапу диагностики для тщательного планирования . Всегда настроена на&nbsp;позитивное взаимодействие с&nbsp;пациентом для достижения лучшего результата в&nbsp;лечении.',
        }
      },
      {
        type: 'docs',
        title: 'Обучение и сертификаты',
        data: {
          list: new Array(10).fill(``).map((_, index) => ({
            image: `docs/kirevicheva/${index + 1}.jpg`,
            label: ''
          }))
        }
      },
      {
        type: 'reviews',
        title: 'Отзывы',
        data: {
          list: [
            {
              name: `Елена. Сентябрь 2023`,
              text: 'Дарья Олеговна лечит моего сына, чуткая и серьезная, всегда дает исчерпывающие ответы на все мои вопросы и в целом ситуация с зубами исправляется.',
              specialist: 'Киревичева Дарья Олеговна',
            },
          ]
        }
      }
    ],
    advised: doctorsData.list.filter(({id}) => id !== 5)
  },
  7: {
    banner: {
      photo: 'doctors__photo--steinberg.png',
      name: 'Ривека Сергеевна Штейнберг',
      speciality: 'Стоматолог-терапевт',
      experience: `Ведет практику более ${getPracticeDuration(SHTEINBERG_START)} лет`
    },
    content: [
      {
        type: 'about',
        title: 'О себе',
        data: {
          quote: 'В своей работе я придерживаюсь двух основных принципов - это забота о пациенте и качество проведенного лечения. Убеждена, что профессионализм, постоянное обучение и любовь к пациентам позволит Вашим улыбкам сиять ярче!',
        }
      },
      {
        type: 'docs',
        title: 'Обучение и сертификаты',
        data: {
          list: new Array(3).fill(``).map((_, index) => ({
            image: `docs/steinberg/${index + 1}.jpg`,
            label: ''
          }))
        }
      },
      {
        type: 'reviews',
        title: 'Отзывы',
        data: {
          list: [
            {
              name: `Кирилл, сентябрь 2023`,
              text: 'Хочу выразить благодарность Ривеке Сергеевне! Вылечила кариес профессионально и безболезненно!',
              specialist: 'Штейнберг Ривека Сергеевна',
            },
          ]
        }
      }
    ],
    advised: doctorsData.list.filter(({id}) => id !== 7)
  },
}