/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Vitor Ozório",
  title: "Oi, sou o Vitor Ozório",
  subTitle: emoji(
    "Sou um Desenvolvedor de Software, Analista de Sistemas/Suporte e entusiasta em soluções impulsionadas por IA (AI-Driven Solutions), permitindo-me integrar tecnologias avançadas em projetos que participo. Transformo desafios em inovação, garantindo tecnologia de ponta e um bom suporte."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/vitorozorio027",
  linkedin: "https://www.linkedin.com/in/vitorozorioazevedorezende/",
  gmail: "vitoraze14@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section 

const skillsSection = {
  title: "O que eu faço",
  subTitle: "DESENVOLVEDOR DE SOFTWARE, ANALISTA DE SISTEMAS/SUPORTE E UM AI-DRIVEN SOLUTIONS",
  skills: [
    emoji(
      "⚡ Desenvolver interfaces de usuário interativas para suas aplicações web e móveis"
    ),
    emoji(
      "⚡ Análise e suporte de sistemas para garantir a eficiência e funcionalidade"
    ),
    emoji(
      "⚡ Desenvolvimento de soluções impulsionadas por IA para otimizar processos e inovar em tecnologia"
    )
  ],



  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },

    // Desenvolvimento Backend
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    // Banco de Dados
    {
      skillName: "SQL Server/MySQL",
      fontAwesomeClassname: "fas fa-database"
    },

    // Ferramentas e Ambiente de Desenvolvimento
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    // Sistemas Operacionais e Plataformas
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "IIS",
      fontAwesomeClassname: "fab fa-windows"  // Use o ícone apropriado para IIS, geralmente associado ao Windows
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Instituição Senai",
      logo: require("./assets/images/senaiLogo.png"),
      subHeader: "Curso Técnico - Desenvolvimento de Sistemas",
      duration: "Fevereiro 2023 - Julho 2024",
      desc: "Concluí o curso de Desenvolvimento de Sistemas no Senai - ES, adquirindo habilidades extensas.",
      descBullets: [
        "Obtive experiência em linguagens de programação, bancos de dados e ferramentas de desenvolvimento",
        "Desenvolvi projetos práticos e aprendi sobre gestão de projetos e metodologias ágeis"
      ]

    },
    {
      schoolName: "Cisco Networking Academy",
      logo: require("./assets/images/ciscoLogo.png"),
      subHeader: "Curso Complementar - Introduction to IoT",
      duration: "Verificação emitida em Março de 2024",
      desc: "Concluí o curso 'Introduction to IoT' da Cisco, aprendendo sobre dispositivos e redes IoT.",
      descBullets: [
        "Explorei conceitos de sensores, comunicação e segurança em ambientes IoT"
      ]
    },
    {
      schoolName: "Certificado SAEP",
      logo: require("./assets/images/saepLogo.png"),
      subHeader: "Simulado SAEP - Técnico em Desenvolvimento de Sistemas",
      duration: "Verificação emitida em Janeiro de 2024",
      desc: "Obtive alta pontuação no simulado SAEP para Técnico em Desenvolvimento de Sistemas, cobrindo diversas áreas.",
      descBullets: [
        "Avaliou conhecimentos em desenvolvimento de software, bancos de dados e segurança"
      ]
    },
    {
      schoolName: "Cisco Networking Academy",
      logo: require("./assets/images/ciscoLogo.png"),
      subHeader: "Curso Complementar - PCAP - Programming  Essentials in Python",
      duration: "Verificação emitida em Dezembro de 2023",
      desc: "Concluí o curso 'PCAP - Programming Essentials in Python' da Cisco, dominando fundamentos da linguagem Python.",
      descBullets: [
        "Aprendi sobre estruturas de dados, controle de fluxo e desenvolvimento de scripts em Python"
      ]
    },
    {
      schoolName: "Cisco Networking Academy",
      logo: require("./assets/images/ciscoLogo.png"),
      subHeader: "Curso Complementar - NDG Linux Unhatched",
      duration: "Verificação emitida em Outubro de 2023",
      desc: "Concluí o curso 'NDG Linux Unhatched' da Cisco, aprendendo os fundamentos do sistema Linux.",
      descBullets: [
        "Explorou conceitos básicos de comandos, arquivos e administração de sistemas Linux"
      ]
    },
    {
      schoolName: "Cisco Networking Academy",
      logo: require("./assets/images/ciscoLogo.png"),
      subHeader: "Curso Complementar - JavaScript Essentials 1 (JSE)",
      duration: "Verificação emitida em Outubro de 2023",
      desc: "Concluí o curso 'JavaScript Essentials 1 (JSE)' da Cisco, dominando fundamentos essenciais de JavaScript.",
      descBullets: [
        "Aprendi sobre sintaxe, manipulação de DOM e eventos em JavaScript"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  "experience": [
    {
      "Stack": "Frontend",
      "progressPercentage": "90%",
    },
    {
      "Stack": "Backend",
      "progressPercentage": "67%",
    },
    {
      "Stack": "Gerenciamento de Banco de Dados",
      "progressPercentage": "70%",
    },
    {
      "Stack": "Análise de Sistemas",
      "progressPercentage": "80%",
    },
    {
      "Stack": "Suporte Técnico",
      "progressPercentage": "75%",
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Function to update the stack names based on the window width
function updateStackNames() {
  if (window.innerWidth < 520) {
    techStack.experience = techStack.experience.map(exp => {
      if (exp.Stack.includes("Gerenciamento de")) {
        exp.Stack = exp.Stack.replace("Gerenciamento de ", "");
      }
      return exp;
    });
  } else {
    techStack.experience = techStack.experience.map(exp => {
      if (exp.Stack.includes("Banco de Dados") && !exp.Stack.includes("Gerenciamento de")) {
        exp.Stack = "Gerenciamento de " + exp.Stack;
      }
      return exp;
    });
  }
  
  // Assuming you have a function to render the skill bars, call it here to update the UI
  renderSkillBars();
}

// Event listener for window resize
window.addEventListener('resize', updateStackNames);

// Initial call to set the correct stack names based on the current window width
updateStackNames();

function renderSkillBars() {
  // Example function to render skill bars
  console.log(techStack.experience);
}

// Call renderSkillBars initially to display the skill bars
renderSkillBars();


// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Analista de Sistemas/Suporte",
      company: "Pred Engenharia",
      companylogo: require("./assets/images/pred.png"),
      date: "Março 2023 – Presente",
      desc: "Responsável por fornecer suporte técnico e soluções de sistemas para otimizar os processos da Pred Engenharia.",
      descBullets: [
        "Análise e resolução de problemas técnicos em sistemas e aplicações",
        "Implementação e manutenção de sistemas para melhorar processos internos"
      ]
    },
    {
      role: "Suporte Técnico",
      company: "Cota Síndicos",
      companylogo: require("./assets/images/cotaSindicos1.png"),
      date: "Fev 2021 – Jan 2022",
      desc: "Responsável por fornecer suporte técnico para a plataforma de cotações online, solucionando problemas técnicos, auxiliando usuários e garantindo a continuidade dos serviços. Trabalhou na otimização de processos internos e na implementação de melhorias no sistema."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Alguns Projetos",
  subtitle: "ALGUNS DOS MEUS PROJETOS QUE JÁ TRABALHEI",
  projects: [
    {
      image: require("./assets/images/s3iportfolio.png"),
      projectName: "Portal S3i",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visitar Website",
          url: "http://www.s3i.com.br/"
        }
        //  you can add extra buttons here.
      ]
    },
    {

      projectName: "À adicionar",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visitar Website",
          url: "#"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Certificados",
  subtitle:
    "Um Pouco Sobre Meus Certificados e Cursos Complementares",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://drive.google.com/file/d/1-FqjEA-6ZlqcrZTZQnIi4flODvWiDY7e/view",
      title: "Introdução ao Internet das Coisas (IoT)",
      description: "Adquiri conhecimentos sólidos sobre os fundamentos do Internet das Coisas (IoT) e explorei como essa tecnologia está moldando o futuro em diversas áreas."
    },
    {
      url: "https://drive.google.com/file/d/1rz1gpOoeXPVtAHqvzfeTCYOa07Pv-2sq/view",
      title: "PCAP - Essenciais da Programação em Python",
      description: "Desenvolvi habilidades essenciais de programação em Python, compreendendo os conceitos fundamentais que sustentam a lógica de programação."
    },
    {
      url: "https://drive.google.com/file/d/1K8C6PBmAVKajO8a5V4uhIxvH3pU4ysZW/view",
      title: "NDG Linux Unhatched: Desbravando o Linux",
      description: "Obtive uma introdução abrangente ao Linux, explorando os princípios básicos e a estrutura do sistema operacional mais popular do mundo."
    },
    {
      url: "https://drive.google.com/file/d/1r2YVlh0zApaA_Fmjg1GjrYAjVksJ0lM1/view",
      title: "JavaScript Essentials 1 (JSE): Domine o Desenvolvimento Web",
      description: "Dominei os conceitos essenciais da programação em JavaScript, capacitando-me a criar aplicações web interativas e dinâmicas."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Quer discutir um projeto ou simplesmente dizer um oi? Minha caixa de entrada está sempre aberta!",
  number: "+5527996001702",
  whatsapp: "+5527996001702",
  email_address: "vitor@pred.com.br"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
