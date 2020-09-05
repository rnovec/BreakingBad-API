let cardsData = [
  {
    char_id: 1,
    name: 'Walter White',
    birthday: '09-07-1958',
    occupation: ['High School Chemistry Teacher', 'Meth King Pin'],
    img:
      'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg',
    status: 'Presumed dead',
    nickname: 'Heisenberg',
    appearance: [1, 2, 3, 4, 5],
    portrayed: 'Bryan Cranston',
    category: 'Breaking Bad',
    better_call_saul_appearance: []
  },
  {
    char_id: 2,
    name: 'Jesse Pinkman',
    birthday: '09-24-1984',
    occupation: ['Meth Dealer'],
    img:
      'data:image/jpeg;base64,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',
    status: 'Alive',
    nickname: "Cap n' Cook",
    appearance: [1, 2, 3, 4, 5],
    portrayed: 'Aaron Paul',
    category: 'Breaking Bad',
    better_call_saul_appearance: []
  },
  {
    char_id: 3,
    name: 'Skyler White',
    birthday: '08-11-1970',
    occupation: [
      'House wife',
      'Book Keeper',
      'Car Wash Manager',
      'Taxi Dispatcher'
    ],
    img: 'https://s-i.huffpost.com/gen/1317262/images/o-ANNA-GUNN-facebook.jpg',
    status: 'Alive',
    nickname: 'Sky',
    appearance: [1, 2, 3, 4, 5],
    portrayed: 'Anna Gunn',
    category: 'Breaking Bad',
    better_call_saul_appearance: []
  },
  {
    char_id: 4,
    name: 'Walter White Jr.',
    birthday: '07-08-1993',
    occupation: ['Teenager'],
    img:
      'https://media1.popsugar-assets.com/files/thumbor/WeLUSvbAMS_GL4iELYAUzu7Bpv0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/01/12/910/n/1922283/fb758e62b5daf3c9_TCDBRBA_EC011/i/RJ-Mitte-Walter-White-Jr.jpg',
    status: 'Alive',
    nickname: 'Flynn',
    appearance: [1, 2, 3, 4, 5],
    portrayed: 'RJ Mitte',
    category: 'Breaking Bad',
    better_call_saul_appearance: []
  },
  {
    char_id: 5,
    name: 'Henry Schrader',
    birthday: 'Unknown',
    occupation: ['DEA Agent'],
    img:
      'https://static.wikia.nocookie.net/breakingbad/images/e/ec/T5B_-_Hank.jpg/revision/latest/top-crop/width/360/height/450?cb=20130812131352&path-prefix=es',
    status: 'Deceased',
    nickname: 'Hank',
    appearance: [1, 2, 3, 4, 5],
    portrayed: 'Dean Norris',
    category: 'Breaking Bad',
    better_call_saul_appearance: []
  },
   {
        "char_id": 6,
        "name": "Marie Schrader",
        "birthday": "Unknown",
        "occupation": [
            "Housewife",
            "Clepto"
        ],
        "img": "https://vignette.wikia.nocookie.net/breakingbad/images/1/10/Season_2_-_Marie.jpg/revision/latest?cb=20120617211645",
        "status": "Alive",
        "nickname": "Marie",
        "appearance": [
            1,
            2,
            3,
            4,
            5
        ],
        "portrayed": "Betsy Brandt",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    },
    {
        "char_id": 7,
        "name": "Mike Ehrmantraut",
        "birthday": "Unknown",
        "occupation": [
            "Hitman",
            "Private Investigator",
            "Ex-Cop"
        ],
        "img": "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_mike-ehrmantraut-lg.jpg",
        "status": "Deceased",
        "nickname": "Mike",
        "appearance": [
            2,
            3,
            4,
            5
        ],
        "portrayed": "Jonathan Banks",
        "category": "Breaking Bad, Better Call Saul",
        "better_call_saul_appearance": [
            1,
            2,
            3,
            4
        ]
    },
    {
        "char_id": 8,
        "name": "Saul Goodman",
        "birthday": "Unknown",
        "occupation": [
            "Lawyer"
        ],
        "img": "https://vignette.wikia.nocookie.net/breakingbad/images/1/16/Saul_Goodman.jpg/revision/latest?cb=20120704065846",
        "status": "Alive",
        "nickname": "Jimmy McGill",
        "appearance": [
            2,
            3,
            4,
            5
        ],
        "portrayed": "Bob Odenkirk",
        "category": "Breaking Bad, Better Call Saul",
        "better_call_saul_appearance": [
            1,
            2,
            3,
            4
        ]
    },
    {
        "char_id": 9,
        "name": "Gustavo Fring",
        "birthday": "Unknown",
        "occupation": [
            "Los-Pollos co-Founder",
            "Philanthropist",
            "Cartel Leader"
        ],
        "img": "https://vignette.wikia.nocookie.net/breakingbad/images/1/1f/BCS_S4_Gustavo_Fring.jpg/revision/latest?cb=20180824195925",
        "status": "Deceased",
        "nickname": "Gus",
        "appearance": [
            2,
            3,
            4
        ],
        "portrayed": "Giancarlo Esposito",
        "category": "Breaking Bad, Better Call Saul",
        "better_call_saul_appearance": [
            3,
            4
        ]
    },
    {
        "char_id": 10,
        "name": "Hector Salamanca",
        "birthday": "Unknown",
        "occupation": [
            "Former Senior Cartel Leader"
        ],
        "img": "https://vignette.wikia.nocookie.net/breakingbad/images/b/b4/Hector_BCS.jpg/revision/latest?cb=20170810091606",
        "status": "Deceased",
        "nickname": "Don Hector",
        "appearance": [
            1,
            2,
            3,
            4
        ],
        "portrayed": "Mark Margolis",
        "category": "Breaking Bad, Better Call Saul",
        "better_call_saul_appearance": [
            2,
            3,
            4
        ]
    },
    {
        "char_id": 11,
        "name": "Domingo Molina",
        "birthday": "Unknown",
        "occupation": [
            "Meth Distributor"
        ],
        "img": "https://vignette.wikia.nocookie.net/breakingbad/images/e/e7/Krazy8.png/revision/latest?cb=20130208041554",
        "status": "Deceased",
        "nickname": "Krazy-8",
        "appearance": [
            1
        ],
        "portrayed": "Maximino Arciniega",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    },
    {
        "char_id": 12,
        "name": "Tuco Salamanca",
        "birthday": "Unknown",
        "occupation": [
            "Meth Distributor"
        ],
        "img": "https://vignette.wikia.nocookie.net/breakingbad/images/a/a7/Tuco_BCS.jpg/revision/latest?cb=20170810082445",
        "status": "Deceased",
        "nickname": "Tuco",
        "appearance": [
            1,
            2
        ],
        "portrayed": "Raymond Cruz",
        "category": "Breaking Bad, Better Call Saul",
        "better_call_saul_appearance": [
            1,
            2
        ]
    },
]


