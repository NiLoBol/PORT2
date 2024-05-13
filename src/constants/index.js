import {
  bg,
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  NextJs,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  shaq,
  netlify,
  bigdata,
  todolist,
  portfolio,
  resume,
} from "../assets";

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];
const skills = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JAVASCRIPT",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JAVASCRIPT",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "NextJs",
    icon: NextJs,
  },
];
const data = {
  name: {
    eng: "Sathaporn",
    thai: "สถาพร",
  },
  surname: {
    eng: "Euapattana",
    thai: "เอื้อพัฒนา",
  },
  introduction: {
    eng: "   Hello, my name is Sathaporn (nickname J) and I am interested in learning and developing skills in Frontend Web Development. I believe that web development is an exciting avenue to learn and improve oneself, in order to create something that can help others have a seamless and impressive experience using websites.",
    thai: "   สวัสดีครับ ผมชื่อสถาพร (ชื่อเล่นเจ) ผมเป็นคนที่มีความสนใจในการเรียนรู้และพัฒนาทักษะด้านการพัฒนาเว็บไซต์ (Frontend Developer) ผมเชื่อว่าการพัฒนาเว็บไซต์เป็นอีกหนึ่งทางเลือกที่น่าสนใจในการเรียนรู้และพัฒนาตนเอง เพื่อสร้างสิ่งที่สามารถช่วยให้คนอื่นมีประสบการณ์การใช้งานเว็บไซต์ได้อย่างสะดวกและประทับใจ",
  },
  img: shaq,
  bg: bg,
  netlify: netlify,
  aboutme:
    "สวัสดีครับ! ผมชื่อเจ ผมเป็นคนที่มีความหลงใหลในการสร้างสรรค์และพัฒนาเว็บไซต์ ผมมีความกระตือรือร้นและมุ่งมั่นที่จะเข้าสู่สายอาชีพนักพัฒนาส่วนหน้าอย่างแท้จริง ในการเขียนเว็บไซต์ ผมมีความเข้าใจและความชำนาญใน HTML, CSS, และ JavaScript ซึ่งเป็นสิ่งที่จำเป็นสำหรับการสร้างและปรับแต่งหน้าเว็บไซต์ ผมยังมีประสบการณ์ในการใช้งาน Framework เช่น React ที่ช่วยให้ผมสามารถสร้างแอพพลิเคชั่นหรือหน้าเว็บไซต์ที่มีประสิทธิภาพได้ ผมมุ่งหวังที่จะก้าวเข้าสู่อาชีพนักพัฒนาส่วนหน้าเพื่อสร้างประสบการณ์การใช้งานที่ดีและน่าสนใจในโลกออนไลน์ ผมมุ่งมั่นที่จะเรียนรู้และพัฒนาทักษะของตัวเองเพื่อเข้าสู่ตำแหน่งงานที่ต้องการ ผมได้ทำงานและโปรเจ็คต่าง ๆ ที่แสดงให้เห็นถึงความสามารถและความคิดสร้างสรรค์ของผมอย่างชัดเจน โปรเจ็คที่ผมทำได้ได้รับการตอบรับที่ดีและสร้างประสบการณ์ให้กับผู้ใช้",
  experience:{
    eng:[
        "Wat Lad Pla Kao school",
        "Satriwitthaya 2 school",
        "KING MONGKUT'S UNIVERSITY OF TECHNOLOGY NORTH BANGKOK",
    ],
    thai:[
        "โรงเรียนวัดลาดปลาเค้า",
        "โรงเรียนสตรีวิทยา ๒",
        "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ",
    ]
  }
  };



const project = [
  {
    name: "Order summary component",
    href: "https://chic-sfogliatella-fa0153.netlify.app/",
    img: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/ouobx6tvyduidzio7wr7.jpg",
    github: "https://github.com/NiLoBol/order-summary-component-main",
    type: ["CSS", "HTML"],
    text: "การสร้างการ์ด สรุปการสั่งซื้อ รองรับมือถือและเดสท็อป โดยได้โซลูชั่นมาจาก frontendmentor",
  },
  {
    name: "Todo app",
    href: "https://spectacular-starlight-bb5866.netlify.app/",
    img: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/ty4ppudcq94rtgj4rv6p.jpg",
    github: "https://github.com/NiLoBol/todo-app-main",
    type: ["CSS", "HTML", "JAVASCRIPT"],
    text: "การสร้างหน้า Todolis การปรับโหมดมืด การกรองข้อมูลและเคลียรข้อมูลในTodolis รองรับมือถือและเดสท็อป โดยได้โซลูชั่นมาจาก frontendmentor",
    RECOMMEND: true,
  },
  {
    name: "Sunnyside agency landing page",
    href: "https://magenta-biscotti-834ee0.netlify.app/",
    img: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/pigotdvhcch2b3wp9uuc.jpg",
    github: "https://github.com/NiLoBol/sunnyside-agency-landing-page-main",
    type: ["CSS", "HTML"],
    text: "การสร้างแลนดิ้งเพจ รองรับเดสท็อป โดยได้โซลูชั่นมาจาก frontendmentor",
    RECOMMEND: true,
  },
  {
    name: "E-commerce product page",
    href: "https://precious-blancmange-c6f319.netlify.app/",
    img: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/fhzpdnabrek50hvhftnl.jpg",
    github: "https://github.com/NiLoBol/ecommerce-product-page-main",
    type: ["CSS", "HTML", "JAVASCRIPT"],
    text: "การสร้างหน้า E-commerce product การเพิ่มของลงตระกร้า เพิ่มราคาสิ้นค้าทั้งหมดตามจำนวนของในตระกร้า รองรับมือถือและเดสท็อป โดยได้โซลูชั่นมาจาก frontendmentor",
    RECOMMEND: true,
  },
  {
    name: "Advice generator app",
    href: "https://glittering-cranachan-4a65e3.netlify.app/",
    img: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/sfl8uqvq75wnnr559ksp.jpg",
    github: "https://github.com/NiLoBol/advice-generator-app-main",
    type: ["CSS", "HTML", "JAVASCRIPT", "API"],
    text: "การสร้างหน้า คำแนะนำ โดยจะสุ่มคำแนะนำจาก API รองรับมือถือและเดสท็อป โดยได้โซลูชั่นมาจาก frontendmentor",
  },
  {
    name: "Profile card component",
    href: "https://gleeful-platypus-504548.netlify.app/",
    img: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/dia0o9uigiiz4gebiqps.jpg",
    github: "https://github.com/NiLoBol/profile-card-component-main",
    type: ["CSS", "HTML"],
    text: "การสร้างหน้า โปรไฟล์ รองรับมือถือและเดสท็อป โดยได้โซลูชั่นมาจาก frontendmentor",
  },
  {
    name: "News homepage",
    href: "https://symphonious-malabi-434105.netlify.app/",
    img: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/abbzt6kmkawmpbj7evxx.jpg",
    github: "https://github.com/NiLoBol/news-homepage-main",
    type: ["CSS", "HTML"],
    text: "สร้างหน้าแรกของเว็บไซต์ข่าว รองรับมือถือและเดสท็อป โดยได้โซลูชั่นมาจาก frontendmentor",
    RECOMMEND: true,
  },
  {
    name: "Expenses chart component",
    href: "https://calm-churros-4acc79.netlify.app/",
    img: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/xhxtaym7uzypzb37rpcc.jpg",
    github: "https://github.com/NiLoBol/expenses-chart-component-main",
    type: ["CSS", "HTML"],
    text: "การสร้างส่วนประกอบแผนภูมิแท่ง รองรับมือถือและเดสท็อป โดยได้โซลูชั่นมาจาก frontendmentor",
  },
  {
    name: "Intro section with dropdown navigation",
    href: "https://vocal-sorbet-946e6f.netlify.app/",
    img: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/rlaxdjplmeul4qe1qvh6.jpg",
    github:
      "https://github.com/NiLoBol/intro-section-with-dropdown-navigation-main",
    type: ["CSS", "HTML", "JAVASCRIPT"],
    text: "การสร้างหน้า Make remote work รองรับมือถือและเดสท็อป โดยได้โซลูชั่นมาจาก frontendmentor",
  },
  {
    name: "3-column preview card component",
    href: "https://vocal-gelato-6e2ab5.netlify.app/",
    img: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/juir90bwmmvlo86g9paz.jpg",
    github: "https://github.com/NiLoBol/3-column-preview-card-component-main",
    type: ["CSS", "HTML"],
    text: "การสร้างส่วนประกอบการ์ดแสดงตัวอย่าง 3 คอลัมน์ รองรับมือถือและเดสท็อป โดยได้โซลูชั่นมาจาก frontendmentor ",
  },
  {
    name: "NFT preview card component",
    href: "https://loquacious-gecko-00cdfd.netlify.app/",
    img: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/rinokvkluq95madbvtmk.jpg",
    github: "https://github.com/NiLoBol/nft-preview-card-component-main",
    type: ["CSS", "HTML"],
    text: "การสร้างส่วนประกอบการ์ด NFT รองรับมือถือและเดสท็อป โดยได้โซลูชั่นมาจาก frontendmentor",
  },
  {
    name: "Interactive card details form",
    href: "https://silly-kringle-d8a873.netlify.app/",
    img: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/u57dcsnhvoalnixjt6kb.jpg",
    github: "https://github.com/NiLoBol/interactive-card-details-form-main",
    type: ["CSS", "HTML", "JAVASCRIPT"],
    text: "การสร้างแบบฟอร์มรายละเอียดการ์ดบัตรเครดิต รองรับมือถือและเดสท็อป โดยได้โซลูชั่นมาจาก frontendmentor",
  },
  {
    name: "Interactive rating component",
    href: "https://magnificent-praline-dda532.netlify.app/",
    img: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/hxx2bhmtmeelt0a98zos.jpg",
    github: "https://github.com/NiLoBol/interactive-rating-component-main",
    type: ["CSS", "HTML"],
    text: "การสร้างองค์ประกอบการให้คะแนน หลังจากให้คะแนนแล้วจะเปลี่ยนเป็นหน้าส่งผลคะแนน รองรับมือถือและเดสท็อป โดยได้โซลูชั่นมาจาก frontendmentor",
  },
  {
    name: "Product preview card component",
    href: "https://tiny-dasik-e32a91.netlify.app/",
    img: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/lftjtn81b7brs2icc898.jpg",
    github: "https://github.com/NiLoBol/product-preview-card-component-main",
    type: ["CSS", "HTML"],
    text: "การสร้างส่วนประกอบการ์ดแสดงตัวอย่างผลิตภัณฑ์ รองรับมือถือและเดสท็อป โดยได้โซลูชั่นมาจาก frontendmentor",
  },
  {
    name: "Notifications page",
    href: "https://fantastic-rolypoly-5904f5.netlify.app/",
    img: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Challenges/wgwtjhvnsjnax4k6rdqw.jpg",
    github:
      "https://github.com/NiLoBol/notifications-page-main/tree/main/notifications-page-main",
    type: ["CSS", "HTML", "JAVASCRIPT"],
    text: "การสร้างหน้าการแจ้งเตือน แยกความแตกต่างระหว่าง 'ยังไม่ได้อ่าน' และ 'อ่าน' การแจ้งเตือน รองรับมือถือและเดสท็อป โดยได้โซลูชั่นมาจาก frontendmentor",
  },
  {
    name: "Results summary component",
    href: "https://tangerine-griffin-62cccf.netlify.app/",
    img: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Screenshots/mgzltquqffj7wrcfxtrr.jpg",
    github: "https://github.com/NiLoBol/Results-summary-component",
    type: ["CSS", "HTML"],
    text: "การสร้างองค์ประกอบสรุปผลลัพธ์ รองรับมือถือและเดสท็อป โดยได้โซลูชั่นมาจาก frontendmentor",
  },
  {
    name: "Article preview component",
    href: "https://dainty-crisp-b2f741.netlify.app/",
    img: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Screenshots/zyxx1yo7yhkvwpwcbojj.jpg",
    github: "https://github.com/NiLoBol/article-preview-component-master",
    type: ["CSS", "HTML"],
    text: "การสร้างองค์ประกอบการแสดงตัวอย่างบทความ รองรับเดสท็อป โดยได้โซลูชั่นมาจาก frontendmentor",
  },
  {
    name: "Intro component with sign-up form",
    href: "https://fabulous-fairy-22636e.netlify.app/",
    img: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Screenshots/zax48oezokykp0sdqoae.jpg",
    github:
      "https://github.com/NiLoBol/intro-component-with-signup-form-master",
    type: ["CSS", "HTML"],
    text: "การสร้างหน้า sign-up แสดงข้อความสีแดงเมื่อส่งค่าว่าง รองรับมือถือและเดสท็อป โดยได้โซลูชั่นมาจาก frontendmentor",
    RECOMMEND: false,
  },
  {
    name: "Newsletter sign-up form with success message",
    href: "https://dreamy-blini-88d713.netlify.app/",
    img: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Screenshots/tfelfl0tdev1zliajpql.jpg",
    github:
      "https://github.com/NiLoBol/newsletter-sign-up-with-success-message-main",
    type: ["CSS", "HTML", "JAVASCRIPT"],
    text: "การสร้างแบบฟอร์มจดหมายข่าว แสดงข้อความสีแดงเมื่อไม่อยู่ในรูปแบบ email ไม่ถูกต้อง ถ้าถูกต้องจะไปยังหน้าขอบคุณ รองรับมือถือและเดสท็อป โดยได้โซลูชั่นมาจาก frontendmentor",
  },
  {
    name: "FAQ accordion card",
    href: "https://precious-froyo-024632.netlify.app/",
    img: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Screenshots/abce3sd2imeruis6auzj.jpg",
    github: "https://github.com/NiLoBol/FAQ-accordion-card.",
    type: ["CSS", "HTML"],
    text: "การสร้างการ์ด FAQ แสดงข้อความที่ซ้อนไว้เมื่อคลิกคำถาม รองรับมือถือและเดสท็อป โดยได้โซลูชั่นมาจาก frontendmentor",
  },
  {
    name: "portfolio V1",
    href: "https://portfoliobyjay.netlify.app/",
    img: portfolio,
    github: "",
    type: ["JAVASCRIPT", "REACT"],
    text: "การสร้างหน้าเว็บพอตโฟลิโอ ครั้งที่1 รองรับมือถือและเดสท็อป มีการใช้ animetion ",
  },
  {
    name: "User Login todolist",
    href: "https://jaydb-user.netlify.app/",
    img: todolist,
    github: "",
    type: ["JAVASCRIPT", "NEXTJS", "MONGO DB"],
    text: "การสร้างหน้าเว็บ Totolist โดยใช้ mongodb เป็นฐานข้อมูล โดยต้องสมัครใช้งานก่อนถึงจะใส่ข้อมูลใน todolist ได้",
    RECOMMEND: true,
  },
  {
    name: "Big Data Page",
    href: "https://moonlit-llama-abb821.netlify.app/",
    img: bigdata,
    github: "",
    type: ["HTML","CSS"],
    text: "การสร้างหน้าเว็บ Big Data Page โดยได้โซลูชั่นมาจาก figma ",
    RECOMMEND: true,
  },
  {
    name: "Space tourism multi-page website",
    href: "https://spacetourismwebsitemain.netlify.app/",
    img: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_900/Challenges/wudjsbv8g93aarlhvbud.jpg",
    github: "https://github.com/NiLoBol/space-tourism-website-main",
    type: ["TYPESCRIPT", "NEXTJS", "CSS"],
    text: "",
    RECOMMEND: true,
  },
  // {
  //   name: "",
  //   href: "",
  //   img: "",
  //   github: "",
  //   type: [""],
  //   text: "",
  //   RECOMMEND: false,
  // },
];
export { skills, project, data ,services};
