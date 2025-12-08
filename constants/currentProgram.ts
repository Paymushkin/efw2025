import Station1 from '~/assets/image/stations/station-1.png';
import Station2 from '~/assets/image/stations/station-2.png';
import Station3 from '~/assets/image/stations/station-3.png';

// Спонсорские блоки для текущего сезона
const CURRENT_PRELAUNCH_SPONSOR = {
  type: 'sponsorStation',
  videoUrl: 'https://storage.yandexcloud.net/videos-meyou/efw2025/promo.mp4',
  title: 'The Showcase Station',
  description:
  `Emirates Fashion Week will unveil its Showcase Station at the pre-launch press conferences.
  Here, 80 beauty companies will present their latest services before and after the runway shows, as well as during the entire Beauty Showroom Day—an exclusive third-day event catering to an affluent audience passionate about fashion and beauty.`,
  buttonText: 'Learn More >',
  buttonLink: '/offer'
};

const CURRENT_FASHION_SHOW_SPONSOR = {
  type: 'sponsorStation',
  videoUrl: 'https://storage.yandexcloud.net/videos-meyou/efw2025/fd.mp4',
  title: 'The Dedicated designer popup corner',
  description: `Secure your Designer's Popup to showcase your collection in an exclusive, premium environment—connecting directly with buyers, media, and trendsetters. Meanwhile, discover the excitement of the Catwalk Show, where live runway presentations unveil new collections and styles. Whether you're presenting or exploring, our event offers a unique platform for visibility, collaboration, and inspiration.`,
  buttonText: 'Reserve Station >',
  buttonLink: '/offer'
};

const CURRENT_BEAUTY_EXPO_SPONSOR = {
  type: 'sponsorStation',
  videoUrl: 'https://storage.yandexcloud.net/videos-meyou/efw2025/bd.mp4',
  title: 'Explore 80 Stations with Beauty Service Providers',
  description: `Showcase your offerings, connect with potential clients, and discover new collaboration opportunities in a dynamic expo setting featuring 80 dedicated stations. Present your services, meet key representatives, and grow your business through impactful networking and real-time engagement.`,
  buttonText: 'Reserve Station >',
  buttonLink: '/offer'
};

const BEAUTY_AWARDS_SPONSOR = {
  type: 'sponsorStation',
  videoUrl: 'https://storage.yandexcloud.net/videos-meyou/efw2025/Professional_Mode_the_camera_dolly_zoom_out%20(online-video-cutter.com).mp4',
  title: `The award ceremony will take place at the luxurious<br> and fashionable venue of Dubai on TBD 2026.`,
  description: ``,
  buttonText: '',
  buttonLink: ''
};

export const CURRENT_EVENT_TYPES = {
  bigSponsorStation: {
    type: 'bigSponsorStation',
    title: 'Stations for sponsors',
    description: 'AI-powered business stations designed for seamless networking, lead generation, and interactive presentations. Engage with prospects through dynamic screens and real-time media integration, ensuring impactful connections at every moment.',
    images: [
      { src: Station1, caption: 'Station 1', subcaption: 'Описание и цена' },
      { src: Station2, caption: 'Station 2', subcaption: 'Описание и цена' },
      { src: Station3, caption: 'Station 3', subcaption: 'Описание и цена' }
    ],
    buttonText: 'More information >'
  }
} as const;

export const CURRENT_PROGRAM_TABS = [
  { 
    title: 'Model Casting', 
    date: 'TBD 2026',
    mobileDate: 'TBD',
    events: [
      {
        type: 'event',
        time: 'TBD',
        place: 'Disclosed to Attendees',
        description: `Model Casting`,
        details: `WEDNESDAY & THURSDAY | INTERNATIONAL MODEL CONFERENCE & CASTING EVENT — organized by MAG, bringing together aspiring models to sign the contracts with leading Top Agencies from Milan, Paris, London and New York and to start your real model career right at the event
        <div class="mt-6">
        <div class="mt-2">
        <strong><a href="https://modelagentgroup.com/" target="_blank" class="text-blue-600 hover:text-blue-800 underline">MAG – Model Agent Group</a></strong>
        <div class="mt-2">
        Worldwide Model Agency
        <div class="mt-2">
        Scouting / Development / Placement
        <div class="mt-2">
        Based in Austria
        <div class="mt-2">
        <strong>Registered Models Only</strong>
        </div>
        <div class="mt-4 flex flex-col md:flex-row gap-2 md:gap-4">
        <a href="https://www.instagram.com/modelagentgroup" target="_blank" class="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
        <span class="text-sm">@modelagentgroup</span>
        </a>
        <a href="https://www.instagram.com/globalfashioncode" target="_blank" class="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
        <span class="text-sm">@globalfashioncode</span>
        </a>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        `
      },
    ] 
  },
  { 
    title: `Fashion Shows 1<sup>st</sup> & 2<sup>nd</sup> Days`, 
    date: 'TBD 2026',
    mobileDate: 'TBD',
    events: [
      {
        type: 'event',
        time: 'TBD',
        place: `Skylight Gallery,<br>Arjaan Dubai Media City`,
        description: `SATURDAY |  PRÊT-À-PORTER WOMEN'S & MEN'S COLLECTIONS FW 26`,
        details: `<strong class="mb-2 block">By Invitation Only</strong>`,
        buttonText: 'REQUEST INVITE >',
        buttonLink: 'https://docs.google.com/forms/d/e/1FAIpQLSf9UiUI9FshAS-G9Ikkdj5Pq9DV3zkwtqdNdoNXeLxe2LQeEQ/viewform'
      },
      CURRENT_FASHION_SHOW_SPONSOR,
       {
         type: 'event',
         time: 'TBD',
         place: `Skylight Gallery,<br>Arjaan Dubai Media City`,
         description: `SUNDAY |  PRÊT-À-PORTER WOMEN'S & MEN'S COLLECTIONS FW 26`,
         details: `<strong class="mb-2 block">By Invitation Only</strong>`,
         buttonText: 'REQUEST INVITE >',
         buttonLink: 'https://docs.google.com/forms/d/e/1FAIpQLSf9UiUI9FshAS-G9Ikkdj5Pq9DV3zkwtqdNdoNXeLxe2LQeEQ/viewform'
       },
    ] 
  },
    { 
    title: `Pop-Up Market 3<sup>rd</sup> & 4<sup>th</sup> Days`, 
    date: 'TBD 2026',
    mobileDate: 'TBD',
    events: [
      {
        type: 'event',
        time: 'TBD',
        place: `Skylight Gallery,<br>Arjaan Dubai Media City`,
        description: `MONDAY | BEAUTY DAY`,
         details: `
          <strong>Free Entry | 10:00–18:00</strong>
           <div class="mt-4">
           <ul class="space-y-2 text-sm">
             <li>• 40 Designer Collection Pop-ups</li>
             <li>• Beauty & cosmetics brands</li>
             <li>• MUAs, nails, brows/lashes</li>
             <li>• Salons, spas, bridal beauty</li>
             <li>• Makeup & cosmetology schools / courses</li>
           </ul>
           </div>
           <div class="flex flex-col gap-3 mt-4">
             <a href="/offer" class="inline-flex items-center gap-2 px-6 py-2.5 text-sm rounded-3xl transition-colors bg-black text-white hover:bg-black/90 w-fit">
               <span>BOOK A SPOT AS A COMPANY</span>
             </a>
              <strong>TRY YOUR BRAND AT EFW</strong>
              <strong>2h Showcase Spot — Free via Waitlist</strong>
              <ul class="space-y-2 text-sm">
                <li>• 20 lead chats with real visitors</li>
                <li>• Limited 10–20 showcase spots, up to 80 SMEs selected</li>
                <li>• Subsidized by Dubai Culture & Emirates Fashion Week to support beauty & design businesses</li>
              </ul>
            </div>
            <div class="flex flex-col mt-4">
              <a href="/offer?tr" style="background-color:rgb(109, 109, 109);" class=" inline-flex items-center gap-2 px-6 py-2.5 text-sm rounded-3xl transition-colors text-white w-fit">
                <span>Join Wait List | 2h Free Trial Spot</span>
                <span id="trial-waitlist-count-1" style="background-color: rgba(255,255,255,0.2); padding: 2px 6px; border-radius: 12px; font-weight: bold;">0</span>
              </a>
              </div>
             <div class="mt-6">
               <strong class="block mb-2">POP-UP MARKET BRANDS</strong>
               <ul class="space-y-1 text-sm">
                 <li>•FLOR DE LUNA</li>
                 <li>•SARAH M</li>
                 <li>•SNIM</li>
                 <li>•ARTOGRAPH</li>
                 <li>•PROSETA/ITALIA</li>
                 <li>•ACQUADICOCCO</li>
                 <li>•ETNO FRESH</li>
                 <li>•MU</li>
                 <li>•ALEVTINI</li>
                 <li>•SOUTHWARD</li>
                 <li>•NIMANY</li>
                 <li>•HOUSE OD SOLANA</li>
                 <li>•ARNI</li>
                 <li>•MOON SOOUL</li>
                 <li>•ANNET</li>
                 <li>•RU-BASHKA</li>
                 <li>•IRIM</li>
                 <li>•OLGA BOGDANOVA</li>
                 <li>•MARIANNE MOORE</li>
                 <li>•SAIMA</li>
                 <li>•SARA SAAKIAN</li>
                 <li>•CASA JOHARA</li>
                 <li>•BOULAS</li>
               </ul>
             </div>
         `,
      },
      {
        type: 'event',
        time: 'TBD',
        place: `Skylight Gallery,<br>Arjaan Dubai Media City`,
        description: `TUESDAY | WELLNESS DAY`,
         details: `
          <strong>Free Entry | 10:00–18:00</strong>
           <div class="mt-4">
           <ul class="space-y-2 text-sm">
             <li>• 40 Designer Collection Pop-ups</li>
             <li>• Medical & aesthetic clinics</li>
             <li>• Health & wellness tourism, nutrition</li>
             <li>• Spas, massage, barbers</li>
             <li>• Gyms & wellness studios</li>
             <li>• Beauty tech (CRM, booking, payments)</li>
             <li>• Salon & clinic equipment suppliers</li>
           </ul>
           </div>
           <div class="flex flex-col gap-3 mt-4">
             <a href="/offer" class="inline-flex items-center gap-2 px-6 py-2.5 text-sm rounded-3xl transition-colors bg-black text-white hover:bg-black/90 w-fit">
               <span>BOOK A SPOT AS A COMPANY</span>
             </a>
            <strong>TRY YOUR BRAND AT EFW</strong>
            <strong>2h Showcase Spot — Free via Waitlist</strong>
            <ul class="space-y-2 text-sm">
              <li>• 20 lead chats with real visitors</li>
              <li>• Limited 10–20 showcase spots, up to 80 SMEs selected</li>
              <li>• Subsidized by Dubai Culture & Emirates Fashion Week to support beauty & design businesses</li>
            </ul>
           </div>
              <div class="flex flex-col mt-4">
               <a href="/offer?tr&waitlist" style="background-color:rgb(109, 109, 109);" class=" inline-flex items-center gap-2 px-6 py-2.5 text-sm rounded-3xl transition-colors text-white w-fit">
                <span>Join Wait List | 2h Free Trial Spot</span>
                <span id="trial-waitlist-count-2" style="background-color: rgba(255,255,255,0.2); padding: 2px 6px; border-radius: 12px; font-weight: bold;">0</span>
              </a>
            </div>
            <div class="mt-6">
               <strong class="block mb-2">POP-UP MARKET BRANDS</strong>
               <ul class="space-y-1 text-sm">
                 <li>• FLOR DE LUNA</li>
                 <li>•SARAH M</li>
                 <li>•SNIM</li>
                 <li>•ARTOGRAPH</li>
                 <li>•PROSETA/ITALIA</li>
                 <li>•ACQUADICOCCO</li>
                 <li>•ETNO FRESH</li>
                 <li>•MU</li>
                 <li>•ALEVTINI</li>
                 <li>•SOUTHWARD</li>
                 <li>•NIMANY</li>
                 <li>•HOUSE OD SOLANA</li>
                 <li>•ARNI</li>
                 <li>•MOON SOOUL</li>
                 <li>•ANNET</li>
                 <li>•RU-BASHKA</li>
                 <li>•IRIM</li>
                 <li>•OLGA BOGDANOVA</li>
                 <li>•MARIANNE MOORE</li>
                 <li>•SAIMA</li>
                 <li>•SARA SAAKIAN</li>
                 <li>•CASA JOHARA</li>
                 <li>•BOULAS</li>
               </ul>
             </div>
         `,
      },
    ] 
  },
  { 
    title: 'Beauty Awards', 
    date: 'TBD 2026',
    mobileDate: 'TBD',
    events: [
      {
        type: 'event',
        time: 'TBD',
        place: `Skylight Gallery,<br>Arjaan Dubai Media City`,
        description: `MONDAY TONIGHT | The award ceremony, Gala Dinner, and IntroduceMe Talk Show for VIP Buyers, Designers, Exhibitors, Influencers & Authorities`,
        details: `
          <strong>By Invitation Only</strong>
        `,
      },
    ] 
  },
  {
    title: 'VIP Brand Presentation',
    date: 'TBD 2026',
    mobileDate: 'TBD',
    events: [
      {
        type: 'event',
        time: 'TBD',
        place: `Belcanto Dubai Opera`,
        description: `TUESDAY TONIGHT | VIP Brand Presentation at Dubai Opera — exclusive showcase for a distinguished audience`,
        details: `
          <strong>By Invitation Only</strong>
          <div class="mt-6 space-y-4 text-left">
            <p class="font-semibold uppercase tracking-[0.24em] text-[#5b6b7f] text-xs">Join us at Dubai Tech Tuesdays!</p>
            <p class="text-sm text-[#2c3a4e] leading-relaxed">
              Tuesday, TBD 2026 • 18:00–23:30<br>
              Belcanto Restaurant at Dubai Opera, Downtown Dubai
            </p>
            <p class="text-sm text-[#2c3a4e] leading-relaxed">
              A special edition combining the Global Music Festival Pre-IMS Dubai + Emirates Fashion Week vibes. Expect:
            </p>
            <ul class="list-disc pl-4 space-y-2 text-sm text-[#2c3a4e]">
              <li>• A live outdoor terrace performance by international host and singer Wim Hoste starting at 18:00.</li>
              <li>• A high-level panel on entertainment industry &amp; festival production featuring NIKKA LORAK, Alexandra Busheva &amp; Arno Krimmer at 20:30.</li>
              <li>• A fast-pitch session and presentation: Gaming, virtual fashion, phygital wearables.</li>
              <li>• A catwalk show from Emirates Fashion Week and DJ set by Nikka Lorak.</li>
              <li>• Networking, dinner, shisha &amp; drinks until 23:30.</li>
            </ul>
            <p class="text-sm text-[#2c3a4e] leading-relaxed">
              Free entry for women. Men – AED 150 for three beverages. Dress to impress! Formal/business attire required (no shorts, sandals or sneakers).
            </p>
            <p class="text-sm text-[#2c3a4e] leading-relaxed">
              Register early — access is token-verified and subject to approval.
            </p>
            <div>
              <a
                href="https://luma.com/DubaiTechTues71"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white transition hover:bg-[#1a1a1a]"
              >
                Join
              </a>
            </div>
          </div>
        `,
      },
    ] 
  },
];
