import { FEATURES_IMAGES } from './featuresImages';
import { designerRegistration, visitorsRegistration, modelRegistration } from '~/constants/texts';

// Данные для всех блоков Features
export const FEATURES_DATA = {
  // Промо-блок для главной страницы
  featuresDataPromo: {
    id: "promo",
    title: "Features access",
    subtitle: "FOR STYLISTS, MODELS, PHOTO & OTHER PROFESSIONALS",
    subtitleBgColor: "#6D8987",
    buttonText: "View All Features",
    buttonLink: "/features",
    days: [
      {
        title: "Pre-Launch",
        date: "4 November 2025",
        highlighted: false
      },
      {
        title: "Casting Summit",
        date: "5-6 November 2025",
        highlighted: true
      },
      {
        title: `Fashion Show 1<sup>st</sup> & 2<sup>nd</sup> Days`,
        date: "8-9 November 2025",
        highlighted: true
      },
      {
        title: `Fashion Show 3<sup>rd</sup> & 4<sup>th</sup> Days`,
        date: "10-11 November 2025",
        highlighted: false
      },
      {
        title: "Beauty Awards",
        date: "10 November 2025",
        highlighted: false
      },
      {
        title: "Vip Brand Presentation",
        date: "12-13 November 2025",
        highlighted: false
      }
    ],
    cards: [
      {
        image: FEATURES_IMAGES.block2.image5,
        title: "Share Your Instant Paparazzi Shooting",
        subtitle: "Receive high-quality branded event photos",
        description: "Get professionally shot event photos instantly. Share branded, high-quality pictures across social media and capture your presence at the event in a stylish and elegant way."
      },
      {
        image: FEATURES_IMAGES.block2.image6,
        title: "See Influencer Photos & Interviews on Media Wall Reportage",
        subtitle: "Watch yourself on big event screens",
        description: "Influencers attending the event will have their best moments displayed on the media wall. Watch exclusive snapshots, interviews, and social updates in real time during the event."
      },
      {
        image: FEATURES_IMAGES.block2.image7,
        title: "Answer in TV Interviews",
        subtitle: "Give professional on-camera interviews",
        description: "Step in front of the camera and share your insights with a professional interviewer. Gain exposure with high-quality TV-style interviews that highlight your expertise and elevate your brand."
      },
    ]
  },

  // Блок 1: FOR VISITORS AND BUYERS
  featuresData1: {
    id: "visitors",
    title: "Features access",
    subtitle: "FOR VISITORS AND BUYERS",
    subtitleBgColor: "#6D8987",
    buttonText: "Visit",
    buttonLink: visitorsRegistration,
    days: [
      {
        title: "Pre-Launch",
        date: "4 November 2025",
        highlighted: true
      },
      {
        title: "Casting Summit",
        date: "5-6 November 2025",
        highlighted: true
      },
      {
        title: `Fashion Show 1<sup>st</sup> & 2<sup>nd</sup> Days`,
        date: "8-9 November 2025",
        highlighted: true
      },
      {
        title: `Fashion Show 3<sup>rd</sup> & 4<sup>th</sup> Days`,
        date: "10-11 November 2025",
        highlighted: false
      },
      {
        title: "Beauty Awards",
        date: "10 November 2025",
        highlighted: false
      },
      {
        title: "Vip Brand Presentation",
        date: "12-13 November 2025",
        highlighted: false
      }
    ],
    cards: [
      {
        type: "image",
        image: FEATURES_IMAGES.block1.image1,
        title: "Enjoy the Catwalk Show",
        subtitle: "Watch and Choose",
        description: "Watch live runway presentations, explore new collections and discover designers that match your style."
      },
      {
        type: "video",
        video: 'https://storage.yandexcloud.net/videos-meyou/efw2025/paparazzi12-vmake.mp4',
        title: "Share Your Instant Paparazzi Shooting",
        subtitle: "Receive high-quality branded event photos",
        description: "Get professionally shot event photos instantly. Share branded, high-quality pictures across social media."
      },
      {
        type: "video",
        video: 'https://storage.yandexcloud.net/videos-meyou/efw2025/1-3.mp4',
        title: "Guests' Photos on Media Wall Reportage",
        subtitle: "Watch yourself on big event screens",
        description: "See yourself featured on the event's media walls. Attendee photos are displayed on large screens."
      },
      {
        type: "image",
        image: FEATURES_IMAGES.block1.image4,
        title: "Try AI Matchmaking",
        subtitle: "Fill what you do useful and wait match",
        description: "Connect with the right people using AI matchmaking. Fill in your interests and let the system suggest matches."
      }
    ]
  },

  // Блок 2: FOR STYLISTS, MODELS, PHOTO & OTHER PROFESSIONALS
  featuresData2: {
    id: "professionals",
    title: "Features access",
    subtitle: "FOR STYLISTS, MODELS, PHOTO & OTHER PROFESSIONALS",
    subtitleBgColor: "#A43D6B",
    buttonText: "Participate - professionals",
    buttonLink: visitorsRegistration,
    days: [
      {
        title: "Pre-Launch",
        date: "4 November 2025",
        highlighted: true
      },
      {
        title: "Casting Summit",
        date: "5-6 November 2025",
        highlighted: true
      },
      {
        title: `Fashion Show 1<sup>st</sup> & 2<sup>nd</sup> Days`,
        date: "8-9 November 2025",
        highlighted: true
      },
      {
        title: `Fashion Show 3<sup>rd</sup> & 4<sup>th</sup> Days`,
        date: "10-11 November 2025",
        highlighted: false
      },
      {
        title: "Beauty Awards",
        date: "10 November 2025",
        highlighted: false
      },
      {
        title: "Vip Brand Presentation",
        date: "12-13 November 2025",
        highlighted: false
      }
    ],
    cards: [
      {
        type: "image",
        image: FEATURES_IMAGES.block2.image5,
        title: "Share Your Instant Paparazzi Shooting",
        subtitle: "Receive high-quality branded event photos",
        description: "Get professionally shot event photos instantly. Share branded, high-quality pictures across social media and capture your presence at the event in a stylish and elegant way."
      },
      {
        type: "video",
        video: 'https://storage.yandexcloud.net/videos-meyou/efw2025/2-2.mp4',
        title: "See Influencer Photos & Interviews on Media Wall Reportage",
        subtitle: "Watch yourself on big event screens",
        description: "Influencers attending the event will have their best moments displayed on the media wall. Watch exclusive snapshots, interviews, and social updates in real time during the event."
      },
      {
        type: "image",
        image: FEATURES_IMAGES.block2.image7,
        title: "Answer in TV Interviews",
        subtitle: "Give professional on-camera interviews",
        description: "Step in front of the camera and share your insights with a professional interviewer. Gain exposure with high-quality TV-style interviews that highlight your expertise and elevate your brand."
      },
    ]
  },

  // Блок 3: FOR DESIGNERS
  featuresData3: {
    id: "designers",
    title: "Features access",
    subtitle: "FOR DESIGNERS",
    subtitleBgColor: "#7887A3",
    buttonText: "Particirate - designers",
    buttonLink: visitorsRegistration,
    days: [
      {
        title: "Pre-Launch",
        date: "4 November 2025",
        highlighted: true
      },
      {
        title: "Casting Summit",
        date: "5-6 November 2025",
        highlighted: true
      },
      {
        title: `Fashion Show 1<sup>st</sup> & 2<sup>nd</sup> Days`,
        date: "8-9 November 2025",
        highlighted: true
      },
      {
        title: `Fashion Show 3<sup>rd</sup> & 4<sup>th</sup> Days`,
        date: "10-11 November 2025",
        highlighted: true
      },
      {
        title: "Beauty Awards",
        date: "10 November 2025",
        highlighted: true
      },
      {
        title: "Vip Brand Presentation",
        date: "12-13 November 2025",
        highlighted:  true
      }
    ],
    cards: [
      {
        type: "image",
        image: FEATURES_IMAGES.block3.image8,
        title: "Order Designer's Popup",
        subtitle: "Showcase your collection in a dedicated space",
        description: "Display your designs in an exclusive popup area, allowing you to connect with buyers, media, and fashion enthusiasts while gaining brand visibility in a premium environment."
      },
      {
        type: "image",
        image: FEATURES_IMAGES.block3.image9,
        title: "Visit IntroduceMe Talk Show",
        subtitle: "Host live discussions with designers",
        description: "Engage with top designers and industry leaders in exclusive discussions, bringing your audience firsthand insights into the latest fashion trends."
      },
      {
        type: "image",
        image: FEATURES_IMAGES.block3.image10,
        title: "Join Q&A & Press Conference",
        subtitle: "Share insights and get designers' feedback",
        description: "Engage in an interactive discussion, share your fashion vision, and receive valuable feedback from industry experts, media representatives, and fellow designers."
      },
      {
        type: "image",
        image: FEATURES_IMAGES.block3.image11,
        title: "Share Your Instant Paparazzi Shooting",
        subtitle: "Receive high-quality branded event photos",
        description: "Get professionally shot event photos instantly. Share branded, high-quality pictures across social media and capture your presence at the event in a stylish and elegant way."
      },
      {
        type: "image",
        image: FEATURES_IMAGES.block3.image12,
        title: "Answer in TV Interviews",
        subtitle: "Give professional on-camera interviews",
        description: "Step in front of the camera and share your insights with a professional interviewer. Gain exposure with high-quality TV-style interviews that highlight your expertise and elevate your brand."
      },
      {
        type: "video",
        video: 'https://storage.yandexcloud.net/videos-meyou/efw2025/3-6.mp4',
        title: "Seek Your Photo & Interviews Reportage Frame in Media",
        subtitle: "Get featured in real-time media reports",
        description: "Your event moments, interviews, and snapshots will be showcased in key media outlets, giving you a prime spot in event reportage."
      },
      {
        type: "video",
        video: 'https://storage.yandexcloud.net/videos-meyou/efw2025/1-3.mp4',
        title: "See Designers' Photos & Interviews on Media Wall Reportage",
        subtitle: "Watch yourself on big event screens",
        description: "Gain instant recognition as your photos and interviews appear on the venue's media wall, ensuring visibility among key attendees and media representatives."
      },
      {
        type: "video",
        video: 'https://storage.yandexcloud.net/videos-meyou/efw2025/Professional_Mode_the_camera_dolly_zoom_out%20(online-video-cutter.com).mp4',
        title: "Inquire Nominee",
        subtitle: "Apply for awards and industry recognition",
        description: "Submit your application for exclusive designer awards, gaining credibility and a chance to be recognized among top industry professionals."
      },
      {
        type: "image",
        image: FEATURES_IMAGES.block3.image16,
        title: "Entry Market UAE Program",
        subtitle: "Get insights on expanding into the UAE market",
        description: "Receive expert guidance on entering the UAE fashion industry, including market positioning, business expansion, and potential collaborations."
      }
    ]
  },

  // Блок 4: FOR INFLUENCERS
  featuresData4: {
    id: "influencers",
    title: "Features access",
    subtitle: "FOR INFLUENCERS",
    subtitleBgColor: "#C1A576",
    buttonText: "Participate - influencers",
    buttonLink: visitorsRegistration,
    days: [
      {
        title: "Pre-Launch",
        date: "4 November 2025",
        highlighted: true
      },
      {
        title: "Casting Summit",
        date: "5-6 November 2025",
        highlighted: true
      },
      {
        title: `Fashion Show 1<sup>st</sup> & 2<sup>nd</sup> Days`,
        date: "8-9 November 2025",
        highlighted: true
      },
      {
        title: `Fashion Show 3<sup>rd</sup> & 4<sup>th</sup> Days`,
        date: "10-11 November 2025",
        highlighted: true
      },
      {
        title: "Beauty Awards",
        date: "10 November 2025",
        highlighted: false
      },
      {
        title: "Vip Brand Presentation",
        date: "12-13 November 2025",
        highlighted: false
      }
    ],
    cards: [
      {
        type: "image",
        image: FEATURES_IMAGES.block4.image17,
        title: "Be EFW TV MIC Host",
        subtitle: "Host a fashion TV show",
        description: "Take center stage as a host for exclusive fashion segments, conducting interviews and presenting live content for the event's TV broadcast."
      },
      {
        type: "image",
        image: FEATURES_IMAGES.block4.image18,
        title: "Be Face of EFW",
        subtitle: "Become the official face of Fashion Week",
        description: "Represent Emirates Fashion Week by becoming its official ambassador, gaining VIP access, media exposure, and premium networking opportunities."
      },
      {
        type: "image",
        image: FEATURES_IMAGES.block4.image19,
        title: "Visit IntroduceMe Talk Show",
        subtitle: "Host live discussions with designers",
        description: "Engage with top designers and industry leaders in exclusive discussions, bringing your audience firsthand insights into the latest fashion trends."
      },
      {
        type: "image",
        image: FEATURES_IMAGES.block4.image20,
        title: "Be VIP's TV Interviewee",
        subtitle: "Get a premium TV-style interview",
        description: "Secure a high-profile, professionally filmed interview, boosting your credibility and positioning yourself as a key influencer in the fashion industry."
      },
      {
        type: "video",
        video: 'https://storage.yandexcloud.net/videos-meyou/efw2025/3-6.mp4',
        title: "Seek Your Photo & Interviews Reportage Frame in Media",
        subtitle: "Get featured in real-time media reports",
        description: "Your event moments, interviews, and snapshots will be showcased in key media outlets, giving you a prime spot in event reportage."
      },
      {
        type: "video",
        video: 'https://storage.yandexcloud.net/videos-meyou/efw2025/1-3.mp4',
        title: "See Designers' Photos & Interviews on Media Wall Reportage",
        subtitle: "Watch yourself on big event screens",
        description: "Gain instant recognition as your photos and interviews appear on the venue's media wall, ensuring visibility among key attendees and media representatives."
      },
      {
        type: "image",
        image: FEATURES_IMAGES.block4.image23,
        title: "Inquire Nominee",
        subtitle: "Apply for influencer recognition awards",
        description: "Submit your application for prestigious influencer awards, gaining industry recognition and exclusive access to nominee benefits."
      }
    ]
  },

  // Блок 5: FOR MEDIA
  featuresData5: {
    id: "media",
    title: "Features access",
    subtitle: "FOR MEDIA",
    subtitleBgColor: "#945647",
    buttonText: "Participate - Media",
    buttonLink: visitorsRegistration,
    days: [
      {
        title: "Pre-Launch",
        date: "4 November 2025",
        highlighted: true
      },
      {
        title: "Casting Summit",
        date: "5-6 November 2025",
        highlighted: true
      },
      {
        title: `Fashion Show 1<sup>st</sup> & 2<sup>nd</sup> Days`,
        date: "8-9 November 2025",
        highlighted: true
      },
      {
        title: `Fashion Show 3<sup>rd</sup> & 4<sup>th</sup> Days`,
        date: "10-11 November 2025",
        highlighted: true
      },
      {
        title: "Beauty Awards",
        date: "10 November 2025",
        highlighted: false
      },
      {
        title: "Vip Brand Presentation",
        date: "12-13 November 2025",
        highlighted: false
      }
    ],
    cards: [
      {
        type: "image",
        image: FEATURES_IMAGES.block5.image24,
        title: "#JoinDubai Campaign",
        subtitle: "Promote joining Dubai's economy by showcasing business event activity",
        description: "Support Dubai's economic growth by actively engaging in business events and making your presence visible through networking, media coverage, and industry collaborations."
      },
      {
        type: "image",
        image: FEATURES_IMAGES.block5.image25,
        title: "Join Q&A & Press Conference",
        subtitle: "Share insights and get designers' feedback",
        description: "Engage in an interactive discussion, share your fashion vision, and receive valuable feedback from industry experts, media representatives, and fellow designers."
      },
      {
        type: "image",
        image: FEATURES_IMAGES.block5.image26,
        title: "Visit IntroduceMe Talk Show",
        subtitle: "Host live discussions with designers",
        description: "Engage with top designers and industry leaders in exclusive discussions, bringing your audience firsthand insights into the latest fashion trends."
      },
      {
        type: "image",
        image: FEATURES_IMAGES.block5.image27,
        title: "Insert Photo & Interviews Reportage Frame in Your Media",
        subtitle: "Feature a reportage for your audience",
        description: "Get access to exclusive event content, including branded photos and interviews, allowing you to provide high-quality reportage to your media audience."
      }
    ]
  },

  // Блок 6: FOR SMALL & MEDIUM BUSINESSES
  featuresData6: {
    id: "business",
    title: "Features access",
    subtitle: "FOR SMALL & MEDIUM BUSINESSES",
    subtitleBgColor: "#55725C",
    buttonText: "Participate - Business",
    buttonLink: visitorsRegistration,
    days: [
      {
        title: "Pre-Launch",
        date: "4 November 2025",
        highlighted: true
      },
      {
        title: "Casting Summit",
        date: "5-6 November 2025",
        highlighted: true
      },
      {
        title: `Fashion Show 1<sup>st</sup> & 2<sup>nd</sup> Days`,
        date: "8-9 November 2025",
        highlighted: true
      },
      {
        title: `Fashion Show 3<sup>rd</sup> & 4<sup>th</sup> Days`,
        date: "10-11 November 2025",
        highlighted: true
      },
      {
        title: "Beauty Awards",
        date: "10 November 2025",
        highlighted: false
      },
      {
        title: "Vip Brand Presentation",
        date: "12-13 November 2025",
        highlighted: false
      }
    ],
    cards: [
      {
        type: "image",
        image: FEATURES_IMAGES.block6.image28,
        title: "Explore 60 Spots with Representatives of Service Providers",
        subtitle: "Showcase and connect with business representatives",
        description: "Present your services, connect with potential clients, and explore collaboration opportunities in a dynamic expo setting with 80 dedicated stations."
      },
      {
        type: "image",
        image: FEATURES_IMAGES.block6.image29,
        title: "50 Lead Chats from Visitors",
        subtitle: "Get Lead Generation from fashion visitors",
        description: "Interact with event attendees and generate high-quality leads from fashion industry professionals, entrepreneurs, and decision-makers"
      },
      {
        type: "image",
        image: FEATURES_IMAGES.block6.image30,
        title: "2 hour Trial Station",
        subtitle: "Try to showcase at a dedicated booth & timeline",
        description: "Experience a dedicated trial station where businesses can present their products and services to targeted visitors in a structured format."
      },
      {
        type: "video",
        video: 'https://storage.yandexcloud.net/videos-meyou/efw2025/1-3.mp4',
        title: "Representatives Interviews on Media Wall Reportage",
        subtitle: "Get featured on the event's media wall",
        description: "Gain visibility as your business representatives' interviews are displayed on the venue's media walls, ensuring engagement with event attendees"
      },
      {
        type: "video",
        video: 'https://storage.yandexcloud.net/videos-meyou/efw2025/3-6.mp4',
        title: "Representatives Interviews Reportage Frame on Media Pages",
        subtitle: "Gain exposure in partner media reports",
        description: "Get high-profile exposure with your interviews included in media partner reportage, expanding your reach beyond the event"
      },
      {
        type: "image",
        image: FEATURES_IMAGES.block6.image33,
        title: "Nominee",
        subtitle: "Apply for awards and industry recognition",
        description: "Compete for industry excellence awards and position your business as a leader in innovation, service quality, or brand influence."
      }
    ]
  },

  // Блок 7: FOR CORPORATIONS & BRAND AWARENESS
  featuresData7: {
    id: "corporations",
    title: "Features access",
    subtitle: "FOR CORPORATIONS & BRAND AWARENESS",
    subtitleBgColor: "#9478A1",
    buttonText: "Show Sponsors & Partner Options",
    buttonLink: "/station",
    days: [
      {
        title: "Pre-Launch",
        date: "4 November 2025",
        highlighted: true
      },
      {
        title: "Casting Summit",
        date: "5-6 November 2025",
        highlighted: true
      },
      {
        title: `Fashion Show 1<sup>st</sup> & 2<sup>nd</sup> Days`,
        date: "8-9 November 2025",
        highlighted: true
      },
      {
        title: `Fashion Show 3<sup>rd</sup> & 4<sup>th</sup> Days`,
        date: "10-11 November 2025",
        highlighted: true
      },
      {
        title: "Beauty Awards",
        date: "10 November 2025",
        highlighted: false
      },
      {
        title: "Vip Brand Presentation",
        date: "12-13 November 2025",
        highlighted: false
      }
    ],
    cards: [
      {
        type: "image",
        image: FEATURES_IMAGES.block7.image34,
        title: "1000 Watermarks Paparazzi Sponsor",
        subtitle: "Get brand exposure through sponsored event photography",
        description: "Boost your brand's visibility by sponsoring event photography, ensuring your logo is watermarked on over 1,000 guest photos shared across media and social platforms."
      },
      {
        type: "image",
        image: FEATURES_IMAGES.block7.image35,
        title: "100 TV Interviews Sponsor",
        subtitle: "Feature your brand in high-visibility interviews",
        description: "Gain exclusive brand exposure by being featured in up to 100 professional TV interviews, reaching an audience of business leaders and fashion enthusiasts."
      },
      {
        type: "image",
        image: FEATURES_IMAGES.block7.image36,
        title: "Always Top Banner in Reportage Frame in Media Partners",
        subtitle: "Get nominated for business excellence awards",
        description: "Secure premium banner placement in media reportage, ensuring your brand is prominently positioned in key coverage from media partners."
      },
      {
        type: "image",
        image: FEATURES_IMAGES.block7.image37,
        title: "Nominee",
        subtitle: "Get nominated for business excellence awards",
        description: "Position your company as a leader by competing for prestigious industry awards that recognize innovation, branding, and leadership."
      },
      {
        type: "video",
        video: 'https://storage.yandexcloud.net/videos-meyou/efw2025/3-6.mp4',
        title: "Representatives Interviews Reportage Frame on Media Pages",
        subtitle: "Gain exposure in partner media reports",
        description: "Get high-profile exposure with your interviews included in media partner reportage, expanding your reach beyond the event"
      },
      {
        type: "video",
        video: 'https://storage.yandexcloud.net/videos-meyou/efw2025/1-3.mp4',
        title: "Representatives Interviews on Media Wall Reportage",
        subtitle: "Get featured on the event's media wall",
        description: "Gain visibility as your business representatives' interviews are displayed on the venue's media walls, ensuring engagement with event attendees"
      },
      {
        type: "image",
        image: FEATURES_IMAGES.block7.image40,
        title: "Entry Market UAE Program",
        subtitle: "Get insights on expanding into the UAE market",
        description: "Receive expert guidance on entering the UAE fashion industry, including market positioning, business expansion, and potential collaborations."
      }
    ]
  },

  // Блок ALL Digital Products
  featuresDataDigital: {
    id: "digital-products",
    title: "ALL Digital Products",
    subtitle: "",
    subtitleBgColor: "#6D8987",
    buttonText: "",
    buttonLink: "",
    days: [],
    cards: [
      {
        type: "image",
        image: FEATURES_IMAGES.block1.image4, // Используем существующее изображение
        title: "Try Ai Matchmaking",
        subtitle: "AI-powered networking connections",
        description: "Experience intelligent networking with AI matchmaking that connects you with relevant industry professionals based on shared interests and goals."
      },
      {
        type: "video", 
        video: 'https://storage.yandexcloud.net/videos-meyou/efw2025/3-6.mp4',
        title: "Seek Your Photo & Interviews Reportage Frame in Media",
        subtitle: "Get featured in media coverage",
        description: "Find your photos and interviews featured in professional media reportage, ensuring your presence is documented and shared across media platforms."
      },
      {
        type: "video",
        video: 'https://storage.yandexcloud.net/videos-meyou/efw2025/paparazzi12-vmake.mp4',
        title: "Share Your Instant Paparazzi Shooting",
        subtitle: "Instant branded photography service",
        description: "Receive high-quality branded event photos instantly, capturing your best moments and sharing them across your social networks."
      },
      {
        type: "video",
        video: 'https://storage.yandexcloud.net/videos-meyou/efw2025/1-3.mp4',
        title: "See Designers' Photos & Interviews on Media Wall Reportage",
        subtitle: "Interactive media wall experience",
        description: "View live designer highlights and interviews on venue media walls, staying connected with the latest fashion week developments."
      },
      {
        type: "image",
        image: FEATURES_IMAGES.block6.image29, // Используем существующее изображение
        title: "50 Lead Chats from Visitors",
        subtitle: "Generate valuable business leads",
        description: "Connect with up to 50 potential business contacts through our lead generation system, expanding your professional network."
      },
      {
        type: "image",
        image: FEATURES_IMAGES.block7.image36, // Используем существующее изображение
        title: "Always Top Banner in Reportage Frame in Media Partners",
        subtitle: "Premium banner placement",
        description: "Secure premium banner placement in media reportage, ensuring your brand is prominently positioned in key coverage from media partners."
      }
    ],
    detailedText: `

        
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          <div class="bg-gray-50 p-4 rounded-lg border">
            <h4 class="font-semibold text-sm mb-2">Digital Power by MeYou Arena Event LLC</h4>
            <p class="text-xs leading-relaxed">Emirates Fashion Week 2025 powered its digital core together with our technology partner MeYou Arena Event LLC.<br>Their solutions transformed the event into an interactive and media-rich experience, ensuring that every guest, designer, and brand was seamlessly connected.</p>
          </div>

          <div class="bg-gray-50 p-4 rounded-lg border">
            <h4 class="font-semibold text-sm mb-2">TV Lobby / Realtime.Media</h4>
            <p class="text-xs leading-relaxed">With TV Lobby by MeYou Arena Event LLC, Emirates Fashion Week set up a studio inside the venue where designers, stylists, and opinion leaders were interviewed on camera. Thanks to the Realtime.Media pipeline, each interview was instantly edited, branded, and published during the event. In 2025 this resulted in hundreds of professional-quality video stories, amplifying the voices of participants far beyond the catwalk.</p>
          </div>
          
          <div class="bg-gray-50 p-4 rounded-lg border">
            <h4 class="font-semibold text-sm mb-2">Expochat / AI Matchmaking</h4>
            <p class="text-xs leading-relaxed">Networking at Fashion Week was powered by Expochat from MeYou Arena Event LLC. This AI-driven tool matched visitors and industry professionals by shared interests, sparking meaningful conversations with built-in icebreakers. Instead of chance encounters, participants experienced AI-powered networking that created real connections and measurable outcomes.</p>
          </div>
          
          <div class="bg-gray-50 p-4 rounded-lg border">
            <h4 class="font-semibold text-sm mb-2">Lead Generation via QR codes</h4>
            <p class="text-xs leading-relaxed">Every exhibitor and designer at Emirates Fashion Week was equipped with personalized QR codes from MeYou Arena Event LLC. Scanning a code enabled instant lead capture — no business cards, no delay. This simple but essential digital tool ensured that every conversation translated directly into follow-ups, multiplying the event's commercial impact.</p>
          </div>
          
          <div class="bg-gray-50 p-4 rounded-lg border">
            <h4 class="font-semibold text-sm mb-2">SecondScreen</h4>
            <p class="text-xs leading-relaxed">No apps. No logins. SecondScreen by MeYou Arena Event LLC delivered instant interaction during Fashion Week. Visitors connected through their browsers to vote in live polls, interact with speakers, explore designer profiles, and view real-time updates. This invisible layer of technology turned traditional shows into interactive experiences, where the audience was fully engaged.</p>
          </div>
          
          <div class="bg-gray-50 p-4 rounded-lg border">
            <h4 class="font-semibold text-sm mb-2">MediaWall</h4>
            <p class="text-xs leading-relaxed">On giant LED walls across the venue, MediaWall by MeYou Arena Event LLC streamed live interviews, designer highlights, and guest profiles. Every visitor became part of the digital story, and the event itself was documented in real time. This constant stream of curated, branded content created both immersion at the venue and a media archive accessible worldwide.</p>
          </div>
          
          <div class="bg-gray-50 p-4 rounded-lg border">
            <h4 class="font-semibold text-sm mb-2">Paparazzi</h4>
            <p class="text-xs leading-relaxed">Guests experienced the unique Paparazzi service from MeYou Arena Event LLC: branded instant photography projected on venue screens and delivered directly to mobile devices. This playful feature encouraged visitors to share their experience online, turning personal vanity into powerful event marketing.</p>
          </div>
          
          <div class="bg-gray-50 p-4 rounded-lg border">
            <h4 class="font-semibold text-sm mb-2">iFrame Reportage</h4>
            <p class="text-xs leading-relaxed">MeYou Arena Event LLC also powered fast digital reportage: live interviews and highlights were instantly edited and embedded into web and social media via iFrame players. This gave Fashion Week an always-on media presence and provided participants with ready-to-share, professional-quality content.</p>
          </div>
        </div>
      </div>
    `
  }
}; 