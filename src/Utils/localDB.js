// import {splashTwo} from '../Assets';
import {
  Demo,
  ProfileFive,
  ProfileFour,
  ProfileOne,
  ProfileSix,
  ProfileThree,
  ProfileTwo,
  Sample,
  about,
  asenaProfile,
  bg1,
  bg2,
  bg3,
  bg4,
  bg5,
  bg6,
  bio,
  biomass,
  callS,
  contact,
  demo,
  demokit,
  downloadIcon,
  emailS,
  hadylProfile,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  linaProfile,
  locksetting,
  logout,
  messageS,
  microphoneS,
  oil,
  pBoom,
  pKits,
  pMat,
  pPillow,
  pSock,
  pSorbent,
  parkerProfile,
  privacy,
  product,
  profile,
  rapid,
  remediation,
  sample,
  splashIndustrial,
  splashLand,
  splashMarine,
  splashOne,
  splashThree,
  splashTwo,
  terms,
  tindraProfile,
  trainingPDFIcon,
  videoThumb,
  water,
  OnBoardOne,
  OnBoardTwo,
  userImage,
  information,
  receiptSearch,
  taskSquare,
  sms,
} from '../Assets';

export const onBoardingData = [
  {
    id: 0,
    heading: 'Welcome to StickSavvy!',
    description:
      'Your platform for rating phlebotomists and improving healthcare experiences.',
    image: splashOne,
    splashImage: OnBoardOne,
  },
  {
    id: 1,
    heading: `Let's make every blood draw a positive experience!`,
    description:
      'Your platform for rating phlebotomists and improving healthcare experiences.',
    image: splashTwo,
    splashImage: OnBoardTwo,
  },
  // {
  //   id: 2,
  //   heading: `Let's Get Started!`,
  //   description: `You're near a railtrack.`,
  //   image: splashThree,
  //   splashImage: OnBoardTwo,
  // },
];
export const certifiedPhlWithCta = [
  {
    id: 0,
    name: 'James Dean',
    ratings: '( 4.2 Reviews )',
    cta: 'View Details',
    image: userImage,
  },
  {
    id: 1,
    name: 'James Dean',
    cta: 'View Details',
    ratings: '( 4.2 Reviews )',
    image: userImage,
  },
  {
    id: 2,
    name: 'James Dean',
    cta: 'View Details',
    ratings: '( 4.2 Reviews )',
    image: userImage,
  },
  {
    id: 3,
    name: 'James Dean',
    cta: 'View Details',
    ratings: '( 4.2 Reviews )',
    image: userImage,
  },
];
export const certifiedPhl = [
  {
    id: 0,
    name: 'James Dean',
    location: 'Street338 Catherine St, Columbia.',
    ratings: '( 4.2 Reviews )',
    image: userImage,
  },
  {
    id: 1,
    name: 'James Dean',
    location: 'Street338 Catherine St, Columbia.',
    ratings: '( 4.2 Reviews )',
    image: userImage,
  },
  {
    id: 2,
    name: 'James Dean',
    location: 'Street338 Catherine St, Columbia.',
    ratings: '( 4.2 Reviews )',
    image: userImage,
  },
  {
    id: 3,
    name: 'James Dean',
    location: 'Street338 Catherine St, Columbia.',
    ratings: '( 4.2 Reviews )',
    image: userImage,
  },
  {
    id: 4,
    name: 'James Dean',
    location: 'Street338 Catherine St, Columbia.',
    ratings: '( 4.2 Reviews )',
    image: userImage,
  },
  {
    id: 5,
    name: 'James Dean',
    location: 'Street338 Catherine St, Columbia.',
    ratings: '( 4.2 Reviews )',
    image: userImage,
  },
  {
    id: 6,
    name: 'James Dean',
    location: 'Street338 Catherine St, Columbia.',
    ratings: '( 4.2 Reviews )',
    image: userImage,
  },
  {
    id: 7,
    name: 'James Dean',
    location: 'Street338 Catherine St, Columbia.',
    ratings: '( 4.2 Reviews )',
    image: userImage,
  },
  {
    id: 8,
    name: 'James Dean',
    location: 'Street338 Catherine St, Columbia.',
    ratings: '( 4.2 Reviews )',
    image: userImage,
  },
  {
    id: 9,
    name: 'James Dean',
    location: 'Street338 Catherine St, Columbia.',
    ratings: '( 4.2 Reviews )',
    image: userImage,
  },
  {
    id: 10,
    name: 'James Dean',
    location: 'Street338 Catherine St, Columbia.',
    ratings: '( 4.2 Reviews )',
    image: userImage,
  },
  {
    id: 11,
    name: 'James Dean',
    location: 'Street338 Catherine St, Columbia.',
    ratings: '( 4.2 Reviews )',
    image: userImage,
  },
];
export const homeScreenBtns = [
  {
    id: 'Training',
    title: 'Training',
    image: bg1,
    icon: icon1,
    routeName: 'TrainingScreen',
    category: [
      {
        id: 1,
        title: 'Training 101',
      },
      {
        id: 2,
        title: 'Videos',
      },
      {
        id: 3,
        title: 'Content',
      },
      {
        id: 4,
        title: 'Training 101',
      },
      {
        id: 5,
        title: 'Videos',
      },
      {
        id: 6,
        title: 'Content',
      },
    ],
  },
  {
    id: 'Video',
    title: 'Videos',
    image: bg2,
    icon: icon2,
    routeName: 'TrainingScreen',
    isVideo: true,
    category: [
      {
        id: 1,
        title: 'General',
      },
      {
        id: 2,
        title: 'Booms',
      },
      {
        id: 3,
        title: 'Pillows',
      },
      {
        id: 4,
        title: 'Socks',
      },
      {
        id: 5,
        title: 'General',
      },
      {
        id: 6,
        title: 'Content',
      },
    ],
  },
  {
    id: 3,
    title: 'Order a Demo Kit',
    image: bg3,
    icon: icon3,
    routeName: 'DemoKitScreen',
  },
  {
    id: 'MSDSheets',
    title: 'MSDS ',
    image: bg4,
    icon: icon4,
    routeName: 'MSDScreen',
    isVideo: true,
  },
  {
    id: 5,
    title: 'Products',
    image: bg5,
    icon: icon5,
    routeName: 'ProductScreen',
  },
  {
    id: 'salespitch',
    title: 'Perfect Sales Pitch',
    image: bg6,
    icon: icon6,
    routeName: 'TrainingScreen',
  },
];

export const videosData = {
  banner: {},
  category: [
    {
      id: 1,
      videoTitle: 'Green Boom Informational Session | Dr. Sudhir Sharma',
      videoDesc:
        'Join Green Boom CEO Dr. Sudhir Sharma for a short informational session on plastic waste and the importance of choosing biodegradable oil spill',
      videoThumb: videoThumb,
    },
    {
      id: 1,
      videoTitle: 'Green Boom Informational Session | Dr. Sudhir Sharma',
      videoDesc:
        'Join Green Boom CEO Dr. Sudhir Sharma for a short informational session on plastic waste and the importance of choosing biodegradable oil spill',
      videoThumb: videoThumb,
    },
    {
      id: 1,
      videoTitle: 'Green Boom Informational Session | Dr. Sudhir Sharma',
      videoDesc:
        'Join Green Boom CEO Dr. Sudhir Sharma for a short informational session on plastic waste and the importance of choosing biodegradable oil spill',
      videoThumb: videoThumb,
    },
    {
      id: 1,
      videoTitle: 'Green Boom Informational Session | Dr. Sudhir Sharma',
      videoDesc:
        'Join Green Boom CEO Dr. Sudhir Sharma for a short informational session on plastic waste and the importance of choosing biodegradable oil spill',
      videoThumb: videoThumb,
    },
  ],
};

export const settingData = [
  {
    title: 'My Profile',
    image: profile,
    screenUrl: 'MyProfileScreen',
  },
  {
    title: 'dinojames@StickSavvy.com',
    image: sms,
    screenUrl: ' ',
  },
  {
    title: 'Change Password',
    image: locksetting,
    screenUrl: 'ChangePasswordScreen',
  },
  {
    title: 'About StickSavvy',
    image: information,
    pageUrl: 'https://www.greenboom.com/about',
  },
  {
    title: 'Privacy Policy',
    image: receiptSearch,
    pageUrl: 'https://www.greenboom.com/privacy',
  },
  {
    title: 'Terms and Conditions',
    image: taskSquare,
    pageUrl: 'https://www.greenboom.com/terms',
  },
  // {
  //   title: 'Contact us',
  //   image: contact,
  //   screenUrl: 'ContactScreen',
  // },
  // {
  //   title: 'Log out',
  //   image: logout,
  //   screenUrl: '',
  //   logOut: 'onCancel',
  // },
];

export const contactData = [
  {
    image: ProfileOne,
    designation: 'Sales Support Europe',
    name: 'Lina Nashabat',
    subDesignation: 'Sales Executive',
    email: 'Lina.Nashabat@greenboom.com',
    phone: '+1 (470) 830-2859 ',
    available: '(Available East American office hours)',
  },
  {
    image: ProfileTwo,
    designation: 'Sales Support USA',
    name: 'Parker Pruett',
    subDesignation: 'Sales Director',
    email: 'Parker.Pruett@greenboom.com',
    phone: '+1 (470) 830-4517 ',
    available: '(Available East American office hours)',
  },
  {
    image: ProfileThree,
    designation: 'Sales Support Middle East',
    name: 'Hadyl Harbiye',
    subDesignation: 'Regional Sales Manager',
    email: 'Hadyl.Harbiye@greenboom.com',
    phone: '+974 33251000 ',
    available: '(Available Middle Eastern office hours)',
  },
  {
    image: ProfileFour,
    designation: 'Sales Support Middle East',
    name: 'Asena Kir',
    subDesignation: 'Regional Sales Manager',
    email: 'Asena.Kir@greenboom.com',
    phone: '+974 3325 8000 ',
    available: '(Available Middle Eastern office hours)',
  },
  {
    image: ProfileFive,
    designation: 'Marketing & Product Support',
    name: 'Tindra Falk',
    subDesignation: 'Global Marketing Lead',
    email: 'Tindra.Falk@greenboom.com',
    phone: '+1 (404)786-8003 ',
    available: '(Available European office hours)',
  },
  {
    image: ProfileSix,
    designation: 'For All Other Questions',
    email: 'Info@greenboom.com',
  },
];

export const accordionData = [
  {
    id: 1,
    title: 'Email Script',
    icon: emailS,
  },
  {
    id: 2,
    title: 'Phone Call Script',
    icon: callS,
  },
  {
    id: 3,
    title: 'Voice Mail Script',
    icon: microphoneS,
  },
  {
    id: 4,
    title: 'SMS Script',
    icon: messageS,
  },
];
export const reviewsData = [
  {
    id: 0,
    name: 'James Deano',
    text: 'Your platform for rating phlebotomists and improving healthcare experiences. Your platform for rating phlebotomists and improving healthcare experiences.',
    image: userImage,
    date: '25 / 4 / 2024',
  },
  {
    id: 1,
    name: 'James Deano',
    text: 'Your platform for rating phlebotomists and improving healthcare experiences. Your platform for rating phlebotomists and improving healthcare experiences.',
    image: userImage,
    date: '25 / 4 / 2024',
  },
  {
    id: 2,
    name: 'James Deano',
    text: 'Your platform for rating phlebotomists and improving healthcare experiences. Your platform for rating phlebotomists and improving healthcare experiences.',
    image: userImage,
    date: '25 / 4 / 2024',
  },
  {
    id: 3,
    name: 'James Deano',
    text: 'Your platform for rating phlebotomists and improving healthcare experiences. Your platform for rating phlebotomists and improving healthcare experiences.',
    image: userImage,
    date: '25 / 4 / 2024',
  },
];