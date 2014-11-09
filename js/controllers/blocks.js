angular.module('app', ['ngSanitize']).controller('blocksCtrl', ['$scope', function blocksCtrl($scope) {
  $scope.blocks = [
    {
      id: 'birth',
      order: 1,
      classes: 'personal order',
      title: 'Birth',
      dates: 'Feb. 1979',
      place: {
        city_country: 'Cascais, Portugal'
      },
      icon_classes: 'fa fa-gift',
      description: {
        texts: [
          'Born in the beautiful coastal city of Cascais, in Portugal. It is said that the locals still celebrate such a glorious event.',
        ]
      }
    },
    {
      id: 'primary_school',
      order: 2,
      classes: 'education order',
      title: 'Primary school',
      dates: 'Oct. 1985 / Jun. 1989',
      icon_classes: 'fa fa-book',
      description: {
        texts: [
          'Learned how to read and write, do basic math, a bit about geography and Portuguese history, had excellent grades and played a lot of soccer in recess... the usual.',
        ]
      }
    },
    {
      id: 'preparatory_school',
      order: 3,
      classes: 'education order',
      title: 'Preparatory school',
      dates: 'Oct. 1989 / Jun. 1994',
      icon_classes: 'fa fa-book',
      description: {
        texts: [
          'Learned the usual stuff that kids learn during prep school, had excellent grades, played a lot of soccer in recess... I\'m starting to notice a pattern here.',
        ]
      }
    },
    {
      id: 'first_program',
      order: 4,
      classes: 'personal order',
      title: 'First computer program',
      dates: 'ca. 1990',
      icon_classes: 'fa fa-bug',
      description: {
        texts: [
          'Contrary to popular belief, my first computer program was not a "Hello World" kind of thing. It was instead a program running on my friend\'s ZX spectrum that displayed a small bug running from one side of the television to the other. The irony that my first computer program was quite literally a "bug", is not lost in me.',
        ]
      }
    },
    {
      id: 'first_internet',
      order: 5,
      classes: 'personal order',
      title: 'First contact with the internet',
      dates: 'ca. 1990-1991',
      icon_classes: 'fa fa-globe',
      description: {
        texts: [
          'My father took me to a tech fair in Lisbon where I first interacted with a computer that was connected to a global network of computers known as the Internet.',
          'The first website that I visited: <a href="http://web.archive.org/web/19961109092233/http://www.lego.com/" target="_blank">www.lego.com</a>'
        ]
      }
    },
    {
      id: 'first_job',
      order: 6,
      classes: 'work order',
      title: 'First job',
      dates: 'July 1996',
      place: {
        link: 'http://www.vitrohm.com/',
        title: 'Vitrohm',
        city_country: 'Trajouce, Portugal'
      },
      icon_classes: 'fa fa-truck',
      description: {
        texts: [
          'Worked at a warehouse for an electrical resistors\' factory doing inventory and operating heavy machinery.'
        ],
        items: [
          {
            title: 'Main responsibilities and acquired knowledge',
            points: [
              {text: 'Basic inventory skills (counting stuff and writing it down, mostly)'},
              {text: 'Operating heavy lift machinery to pile stuff on top of other stuff'},
              {text: 'Trolley racing through long warehouse corridors (Undefeated champion of Summer\'96 championship)'}
            ]
          }
        ]
      }
    },
    {
      id: 'high_school',
      order: 7,
      classes: 'education order',
      title: 'High school',
      dates: 'Sep. 1994 / Jun. 1997',
      icon_classes: 'fa fa-book',
      description: {
        texts: [
          'Learned a bunch of stuff that kids learn during high school, didn\'t play that much soccer in recess, had great grades and started thinking about what I wanted to do when I grew up (code for choosing the right college degree).'
        ]
      }
    },
    {
      id: 'video_store',
      order: 8,
      classes: 'work order',
      title: 'Video store clerk',
      dates: 'Jun. 1997 / Aug. 1997',
      place: {
        title: 'Video Clube Xana',
        city_country: 'Sintra, Portugal'
      },
      icon_classes: 'fa fa-film',
      description: {
        texts: [
          'I wanted to travel before going to college, so I worked the entire Summer as a clerk at a video rental store.'
        ],
        items: [
          {
            title: 'Main responsibilities and acquired knowledge',
            points: [
              {text: 'Fast-rewinding VHS cassettes (the machine did most of the work, really)'},
              {text: 'Cataloging movies by genre'},
              {text: 'Learned that movies can be magical'}
            ]
          }
        ]
      }
    },
    {
      id: 'college',
      order: 9,
      classes: 'education order',
      title: 'College',
      dates: 'Sep. 1997 / Jul. 2002',
      place: {
        link: 'http://web.archive.org/web/20000706210554/http://www.iscte.pt/',
        title: 'Instituto Superior de Ciências do Trabalho e da Empresa',
        city_country: 'Lisbon, Portugal'
      },
      icon_classes: 'fa fa-laptop',
      description: {
        texts: [
          'Enrolled and completed the 5-year course (yes, in Portugal, typical college courses had 5 years at that time - they\'re called <i>Licenciaturas</i>) in Computer Science and Business Management.'
        ],
        items: [
          {
            title: 'Acquired knowledge',
            points: [
              {text: 'Computer programming (C, Pascal, C++, Prolog, PHP, ASP)'},
              {text: 'Algorithms and data strutuctures'},
              {text: 'Information systems design and development'},
              {text: 'Project Management and Coordination'},
              {text: 'Accounting'},
              {text: 'Advanced fussball techniques and card-games'},
              {text: 'How to drink a pint of <i>sangria</i> in under 15 seconds'}
            ]
          }
        ]
      }
    },
    {
      id: 'first_website',
      order: 10,
      classes: 'personal order',
      title: 'First website',
      dates: 'ca. 1998',
      place: {
        link: 'http://web.archive.org/web/19980703095403/http://www1.geocities.com/',
        title: 'Geocities'
      },
      icon_classes: 'fa fa-smile-o fa-spin',
      description: {
        texts: [
          'Engulfed in the beauty that was the interconnection of millions of computers around the world, I decided to create my first website to let myself be known to the virtual world. Sadly, I was convicted by the World Court of Good Taste for excessive use of the <span class="blink">&lt;blink&gt;</span> tag and animated GIFs.',
          'Sorry, Internet, I was young and didn\'t know better.'
        ]
      }
    },
    {
      id: 'plurimarketing',
      order: 11,
      classes: 'work order',
      title: 'IT help desk technician',
      dates: 'Oct. 1998 / Dec. 1999',
      place: {
        title: 'Plurimarketing',
        city_country: 'Lisbon, Portugal'
      },
      icon_classes: 'fa fa-phone',
      description: {
        texts: [
          'Helped people configure their dial-up and ISDN internet connections. Yes, it\'s as boring as it sounds. But I was young and needed the money.'
        ],
        items: [
          {
            title: 'Main responsibilities and acquired knowledge',
            points: [
              {text: 'Great conversational skills over the phone'},
              {text: 'Instructing people to do what they were supposed to know if they read the manual'},
              {text: 'Doing it all without swearing'}
            ]
          }
        ]
      }
    },
    {
      id: 'adetti',
      order: 12,
      classes: 'work order',
      title: 'Researcher & exec. proj. manager',
      dates: 'Jan. 2000 / Dec. 2008',
      place: {
        link: 'http://web.archive.org/web/20020603062156/http://www.adetti.pt/eng/index.html',
        title: 'Associação para o Desenvolvimento das Tecnologias e Técnicas de Informática',
        city_country: 'Lisbon, Portugal'
      },
      icon_classes: 'fa fa-keyboard-o',
      description: {
        texts: [
          'Embraced the world of artificial intelligence research by working at the Intelligent and Communication Integrated Systems group of the ADETTI Lab.'
        ],
        items: [
          {
            title: 'Main responsibilities and acquired knowledge',
            points: [
              {text: 'Development of autonomous and intelligent software in both fixed and mobile environments'},
              {text: 'Occasional development of websites'},
              {text: 'Executive coordinating the group\'s team in European and National projects'},
              {text: 'Attending conferences and traveling around the world'}
            ]
          },
          {
            title: 'Main languages/technologies used',
            points: [
              {text: 'C, C++, Java, Prolog, Python'},
              {text: 'HTML, CSS, Javascript'},
              {text: 'MySQL, PostgreSQL'}
            ]
          }
        ]
      }
    },
    {
      id: 'first_class',
      order: 13,
      classes: 'work order',
      title: 'First teaching experience',
      dates: '2001 / 2003',
      place: {
        link: 'http://web.archive.org/web/20030327105022/http://www.iscte.pt/',
        title: 'Instituto Superior de Ciências do Trabalho e da Empresa',
        city_country: 'Lisbon, Portugal'
      },
      icon_classes: 'fa fa-group',
      description: {
        texts: [
          'During this period I started teaching (occasionally) in introductory classes for basic computer skills (like Word processing and Microsoft Excel) to first-year students of Psychology and Sociology courses.'
        ],
        items: [
          {
            title: 'Main responsibilities and acquired knowledge',
            points: [
              {text: 'Learned a bit about how to teach (it\'s not as easy as it seems)'},
              {text: 'Learned a bit about how to deal with all kinds of students (the good ones, the bad ones, the wise guys, the jokers, etc...)'}
            ]
          }
        ]
      }
    },
    {
      id: 'msc',
      order: 14,
      classes: 'education order',
      title: 'M.Sc. on Computer Engineering and Telecommunications',
      dates: '2003 / 2006',
      place: {
        link: 'http://web.archive.org/web/20030327105022/http://www.iscte.pt/',
        title: 'Instituto Superior de Ciências do Trabalho e da Empresa',
        city_country: 'Lisbon, Portugal'
      },
      icon_classes: 'fa fa-terminal',
      description: {
        texts: [
          'Enrolled and completed my Master\'s degree by proposing the use of intelligent mechanisms and context-awareness in the world of Web Services and Semantic Web (in a time when most people were still discussing Web 2.0).',
          '<b>Thesis title</b>: Agent Technology for Context-aware Execution of Semantic Web Services.'
        ],
        items: [
          {
            title: 'Acquired knowledge',
            points: [
              {text: 'Advanced programming (in Java and C++)'},
              {text: 'Telecommunication protocols and standards (yes, 3G was the Holy Grail at this point)'},
              {text: 'How to write a thesis (probably the most challenging type of document that one has to write)'}
            ]
          }
        ]
      }
    },
    {
      id: 'invited_assistant',
      order: 15,
      classes: 'work order',
      title: 'Invited Teaching Assistant',
      dates: 'Sep. 2005 / Feb. 2006',
      place: {
        link: 'http://web.archive.org/web/20030327105022/http://www.iscte.pt/',
        title: 'Instituto Superior de Ciências do Trabalho e da Empresa',
        city_country: 'Lisbon, Portugal'
      },
      icon_classes: 'fa fa-group',
      description: {
        texts: [
          'Was an Invited Teaching Assistant for the <i>Database Fundamentals</i> curricular unit of the Computer Engineering course.'
        ],
        items: [
          {
            title: 'Major languages/technologies taught',
            points: [
              {text: 'Unified Modeling Language (UML)'},
              {text: 'Structured Query Language (SQL)'},
              {text: 'Database creation and management'}
            ]
          }
        ]
      }
    },
    {
      id: 'assistant',
      order: 16,
      classes: 'work order',
      title: 'Teaching Assistant',
      dates: 'Sep. 2008 / July 2013',
      place: {
        link: 'http://www.iscte-iul.pt/',
        title: 'University Institute of Lisbon',
        city_country: 'Lisbon, Portugal'
      },
      icon_classes: 'fa fa-group',
      description: {
        texts: [
          'Teaching assistant at the Department for Information Science and Technology, where I taught the following curricular units for the Computer Science and Engineering degrees'
        ],
        items: [
          {
            points: [
              {text: 'Introduction to Programming'},
              {text: 'Algorithms and Data Structures'},
              {text: 'Concurrent and Distributed Programming'},
              {text: 'Design and Development of Information Systems'}
            ]
          },
          {
            title: 'Major languages/technologies taught',
            points: [
              {text: 'Java (basics, user interface, advanced programming including multi-threaded and distributed environments)'},
              {text: 'Unified Modeling Language (UML), Structured Query Language (SQL)'},
              {text: 'Model-View-Controller Architectures'}
            ]
          }
        ]
      }
    },
    {
      id: 'itiul',
      order: 17,
      classes: 'work order',
      title: 'Researcher',
      dates: 'Jan. 2009 onwards',
      place: {
        link: 'http://www.it.pt/',
        title: 'Instituto de Telecomunicações',
        city_country: 'Lisbon, Portugal'
      },
      icon_classes: 'fa fa-gears',
      description: {
        texts: [
          'Started developing my Artificial Intelligence research at <i>Instituto de Telecomunicações</i>, one of the best research centres in the country.'
        ],
        items: [
          {
            title: 'Main responsibilities and acquired knowledge',
            points: [
              {text: 'Development of large-scale distributed networks of intelligent software nodes'},
              {text: 'Robotics simulations for rescue environments and manufacturing coordination'},
              {text: 'Seismic and environmental activity monitoring using low-cost devices'}
            ]
          },
          {
            title: 'Major languages/technologies used',
            points: [
              {text: 'Java and Python'},
              {text: 'Physical Computing (Robotics, Arduino, Raspberry Pi, sensors and nano-computing)'}
            ]
          }
        ]
      }
    },
    {
      id: 'phd',
      order: 18,
      classes: 'education order',
      title: 'Ph.D. on Information Science and Technology (Artificial Intelligence branch)',
      dates: '2007 / 2011',
      place: {
        link: 'http://www.iscte-iul.pt/',
        title: 'University Institute of Lisbon, ISCTE-IUL',
        city_country: 'Lisbon, Portugal'
      },
      icon_classes: 'fa fa-terminal',
      description: {
        texts: [
          'Enrolled and completed my doctoral degree by proposing the creation of a sinergy of intelligence by combining the capabilities of different intelligent software units into a single hivemind without a central unit of coordination. You know... like Skynet.',
          '<b>Thesis title</b>: Distributed Coordination in Unstructured Intelligent Agent Societies.'
        ],
        items: [
          {
            title: 'Acquired knowledge',
            points: [
              {text: 'Advanced simulation environments'},
              {text: 'Large distributed and multi-threaded systems'},
              {text: 'Writing articles and thesis in LaTeX'},
              {text: 'Having the realization that one has just advanced science, even if just for a little bit'}
            ]
          }
        ]
      }
    },
    {
      id: 'developer',
      order: 19,
      classes: 'work order',
      title: 'Systems Architect and Full Stack Developer',
      dates: 'Feb. 2011 onwards',
      place: {
        link: 'http://www.iscte-iul.pt/',
        title: 'University Institute of Lisbon',
        city_country: 'Lisbon, Portugal'
      },
      icon_classes: 'fa fa-keyboard-o',
      description: {
        texts: [
          'Because I\'m often said that "Those who can, do. Those who can\'t, teach.", I decided to embrace the world of application development in real-world environments (instead of just research).'
        ],
        items: [
          {
            title: 'Main responsibilities and acquired knowledge',
            points: [
              {text: 'Development of in-house systems and websites (sorry, most of them are for in-house use only, but <a href="https://ciencia.iscte-iul.pt" target="_blank">here\'s one</a> that has a public area)'},
              {text: 'Development and use of APIs (Application Programming Interfaces) and Web Services'},
              {text: 'Integration with existing platforms and databases'},
              {text: 'Front-end/back-end development using MVC (Model-View-Controller) frameworks'}
            ]
          },
          {
            title: 'Major languages/technologies used',
            points: [
              {text: 'Java, Scala, PHP and Python'},
              {text: 'Javascript (JQuery), CSS (LESS), HTML'},
              {text: 'JSON, XML and MySQL'}
            ]
          }
        ]
      }
    }
  ];
  $scope.other_blocks = [
    {
      id: 'skills',
      classes: 'personal work education',
      title: 'Other skills',
      icon_classes: 'fa fa-dashboard',
      description: {
        texts: [
          'Being a part of the universe of technology and information science means that one must keep up with the incredible pace of change that this world presents. I often realize this and try to learn new languages and technologies even though they may not be imediately useful to my work needs.'
        ],
        items: [
          {
            title: 'These are some of those ocasions',
            points: [
              {text: 'I\'ve used <a href="http://www.angularjs.org/" target="_blank">Angular.js</a> on some websites (including this one)'},
              {text: 'I\'ve built iOS apps using <a href="http://phonegap.com/" target="_blank">Phonegap</a>'},
              {text: 'I\'ve been reading and learning about <a href="https://www.ruby-lang.org/en/" target="_blank">Ruby</a> and its partner framework, <a href="http://rubyonrails.org/" target="_blank">Ruby on Rails</a>'}
            ]
          }
        ]
      }
    },
    {
      id: 'other',
      classes: 'personal work education',
      title: 'Other activities',
      icon_classes: 'fa fa-user',
      description: {
        texts: [
          'Why should a CV be only about work and education? These are some of the things I enjoy doing with my free time:'
        ],
        items: [
          {
            points: [
              {text: 'I ocasionally collaborate with the nice folks at the <a href="http://vitruviusfablab.iscte-iul.pt/" target="_blank">Vitruvius Fab-Lab</a> giving them a hand on all kinds of stuff related to physical and nano computing'},
              {text: 'Every now and then I challenge myself into creating a small website (usually a game) in under 24 hours. Not all of these websites were created in under 24 hours but it was still fun creating them. Here are some <a href="http://antoniolopes.info/wp/portfolio/" target="_blank">examples</a>.'},
              {text: 'Like most internet-savy people on the planet, I <a href="http://antoniolopes.info/wp/" target="_blank">blog</a> sometimes but also <a href="http://antoniolopes.info/wp/essays/" target="_blank">write more serious stuff</a> (almost always about techonology and the future)'},
              {text: 'I\'ve been playing the guitar since I was 15, but now I decided I want to learn to play the ukulele (and I\'m enjoying it much more than I thought I would)'},
              {text: 'I\'m trying to get fit (\'cause I\'m not getting any younger), so I run and I bike'},
              {text: 'I know how to make a soufflé'}
            ]
          }
        ]
      }
    }
  ];
}]);