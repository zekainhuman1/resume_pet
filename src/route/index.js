// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

var header = {
  name: {
    firstname: 'Yevhenii',
    lastname: 'Pokutnii',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяц',
  address: 'Ukraine, Poltava',
}

var footer = {
  social: {
    phone: {
      text: '+380993219864',
      href: 'tel:+380993219864',
    },
    email: {
      text: 'zekainhuman@gmail.com',
      href: 'mailto:zekainhuman@gmail.com',
    },
    telegram: {
      text: 'Telegram',
      href: 'https://t.me/zekainhuman',
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Summary | Resume',
    },

    header,
    // main

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to 
      work on a new project I learn the domain and try to understand the idea of the project. Good team 
      player, every colleague is a friend to me.`,
      },
      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics 
      (tournament position, goals etc), analyzing by simple mathematics models and preparing probability 
      for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },

    // footer

    footer,
  })
}),
  router.get('/skills', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('skills', {
      // ↙ сюди вводимо JSON дані
      page: {
        title: 'Skills | Resume',
      },

      header,
      // main

      main: {
        hobbies: [
          {
            name: 'GYM',
            isMain: true,
          },
          {
            name: 'Pets',
            isMain: true,
          },
          {
            name: 'Technologies',
            isMain: false,
          },
        ],

        skills: [
          {
            name: 'HTML',
            point: 10,
            isTop: true,
          },
          {
            name: 'Git',
            point: 7,
            isTop: false,
          },
          {
            name: 'HandleBars',
            point: 8,
            isTop: true,
          },
          {
            name: 'VS Code',
            point: 10,
            isTop: false,
          },
          {
            name: 'NPM',
            point: 9,
            isTop: false,
          },
          {
            name: 'Terminal',
            point: 10,
            isTop: false,
          },
          {
            name: 'React.js',
            point: 0,
          },
          {
            name: 'PHP',
            point: null,
          },
        ],
      },

      // footer

      footer,
    })
  }),
  router.get('/education', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('education', {
      // ↙ сюди вводимо JSON дані
      page: {
        title: 'Education | Resume',
      },

      header,
      // main

      main: {
        certificates: [
          {
            name: 'Metrology',
            id: 1001,
          },
          {
            name: 'IT BRAINS',
            id: 1002,
          },
          {
            name: 'Metrology',
            id: 1003,
          },
        ],

        educations: [
          {
            name: 'КПІ',
            isEnd: true,
          },
          {
            name: 'ХНУРЕ',
            isEnd: false,
          },
          {
            name: 'ПВІЗ',
            isEnd: true,
          },
        ],
      },

      // footer

      footer,
    })
  }),
  router.get('/work', function (req, res) {
    res.render('work', {
      layout: 'big',

      page: {
        title: 'Work | Resume',
      },

      header,

      main: {
        works: [
          {
            position: 'Junior Fullstack Deweloper',
            company: {
              name: 'IT BRAINS',
              url: 'https://nextcloud.zekainhuman.com/',
            },
            duration: {
              from: '01.05.2020',
              to: '10.08.2022',
            },
            projectAmount: 3,
            projects: [
              {
                name: "Resume",
                url: "https://web.skillzrun.com/",
                about: "A wallet address is a publicly available address",
                stacks: [
                  {
                    name: "React.js",
                  },
                  {
                    name: "HTML / CSS",
                  },
                  {
                    name: "Node.js",
                  }
                ],
                stackAmount: 3,
                awards: [
                  {
                    name: "Transactions involving tokens with poor reputation have been detected",
                  },
                  {
                    name: "To hide these transactions, go to Token Ignore List.",
                  }
                ],
                awardAmount: 2,
              },

            ],
          },
        ],
      },

      footer,
    })
  })

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
