<template>
  <div class="min-h-screen bg-gray-50">
    <AppSeo 
      title="Our Team | Emirates Fashion Week"
      description="Meet our dedicated team of professionals behind Emirates Fashion Week"
      :keywords="['team', 'fashion week', 'dubai', 'emirates', 'organizers', 'leadership']"
    />
    
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-black to-gray-900 text-white py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-bold mb-6">Our Team</h1>
          <p class="text-xl md:text-2xl text-gray-300 mb-8">
            Meet the dedicated professionals who make Emirates Fashion Week possible
          </p>
          <p class="text-lg text-gray-400 max-w-3xl mx-auto">
            From creative visionaries to technical experts, our diverse team brings together decades of experience in fashion, events, and innovation to create unforgettable experiences.
          </p>
        </div>
      </div>
    </section>

    <!-- Leadership Team -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">Leadership Team</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Our executive leadership brings together vision, experience, and passion for fashion innovation.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <TeamMemberCard 
            v-for="member in leadershipTeam" 
            :key="member.id" 
            :member="member"
          />
        </div>
      </div>
    </section>

    <!-- Creative Team -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">Creative Team</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            The creative minds behind the visual and artistic direction of Emirates Fashion Week.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <TeamMemberCard 
            v-for="member in creativeTeam" 
            :key="member.id" 
            :member="member"
          />
        </div>
      </div>
    </section>

    <!-- Operations Team -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">Operations Team</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            The operational experts who ensure every detail of Emirates Fashion Week runs smoothly.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <TeamMemberCard 
            v-for="member in operationsTeam" 
            :key="member.id" 
            :member="member"
          />
        </div>
      </div>
    </section>

    <!-- Technology Team -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">Technology Team</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovation leaders bringing cutting-edge technology to fashion events and digital experiences.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <TeamMemberCard 
            v-for="member in technologyTeam" 
            :key="member.id" 
            :member="member"
          />
        </div>
      </div>
    </section>

    <!-- Join Our Team CTA -->
    <section class="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h2>
          <p class="text-xl mb-8">
            Are you passionate about fashion, innovation, and creating unforgettable experiences? 
            We're always looking for talented individuals to join our growing team.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink 
              to="/contact" 
              class="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View Open Positions
            </NuxtLink>
            <NuxtLink 
              to="/welcome" 
              class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Learn About EFW
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import TeamMemberCard from '~/components/TeamMemberCard.vue'
import Image from '~/assets/image/features/4-2.webp'

// Leadership Team
const leadershipTeam = [
  {
    id: 1,
    name: 'Danilov Stepan',
    position: 'CEO & Founder',
    description: 'Visionary leader with 15+ years in event management and AI innovation. Passionate about connecting fashion with technology.',
    photo: Image,
    linkedin: 'https://linkedin.com/in/stepan-danilov',
    twitter: 'https://twitter.com/stepan_danilov',
    instagram: 'https://instagram.com/stepan_danilov'
  },
  {
    id: 2,
    name: 'Sarah Al Hashimi',
    position: 'Creative Director',
    description: 'Award-winning fashion designer with over 15 years of experience in luxury fashion and creative direction.',
    photo: Image,
    linkedin: 'https://linkedin.com/in/sarah-al-hashimi',
    instagram: 'https://instagram.com/sarah_al_hashimi'
  },
  {
    id: 3,
    name: 'Mohammed Rahman',
    position: 'Head of Operations',
    description: 'Expert in event management and logistics with a track record of successful fashion shows across the Middle East.',
    photo: Image,
    linkedin: 'https://linkedin.com/in/mohammed-rahman',
    twitter: 'https://twitter.com/mohammed_rahman'
  }
]

// Creative Team
const creativeTeam = [
  {
    id: 4,
    name: 'Elena Petrova',
    position: 'PR & Marketing Director',
    description: 'Strategic communications professional specializing in luxury and fashion brands with international experience.',
    photo: Image,
    linkedin: 'https://linkedin.com/in/elena-petrova',
    instagram: 'https://instagram.com/elena_petrova'
  },
  {
    id: 5,
    name: 'Fatima Al Mansouri',
    position: 'Partnerships Manager',
    description: 'Building strategic partnerships between fashion brands and cultural institutions across the UAE.',
    photo: Image,
    linkedin: 'https://linkedin.com/in/fatima-al-mansouri',
    instagram: 'https://instagram.com/fatima_al_mansouri'
  },
  {
    id: 6,
    name: 'Aisha Johnson',
    position: 'Fashion Curator',
    description: 'Expert in emerging fashion trends and designer relations with a focus on sustainable fashion.',
    photo: Image,
    linkedin: 'https://linkedin.com/in/aisha-johnson',
    instagram: 'https://instagram.com/aisha_johnson'
  }
]

// Operations Team
const operationsTeam = [
  {
    id: 7,
    name: 'James Chen',
    position: 'Technical Director',
    description: 'Innovation leader bringing cutting-edge technology to fashion events and digital experiences.',
    photo: Image,
    linkedin: 'https://linkedin.com/in/james-chen',
    twitter: 'https://twitter.com/james_chen'
  },
  {
    id: 8,
    name: 'Maria Rodriguez',
    position: 'Event Coordinator',
    description: 'Detail-oriented professional ensuring flawless execution of all Emirates Fashion Week events.',
    photo: Image,
    linkedin: 'https://linkedin.com/in/maria-rodriguez',
    instagram: 'https://instagram.com/maria_rodriguez'
  },
  {
    id: 9,
    name: 'Ahmed Hassan',
    position: 'Logistics Manager',
    description: 'Expert in venue management and logistics coordination for large-scale fashion events.',
    photo: Image,
    linkedin: 'https://linkedin.com/in/ahmed-hassan',
    twitter: 'https://twitter.com/ahmed_hassan'
  }
]

// Technology Team
const technologyTeam = [
  {
    id: 10,
    name: 'David Kim',
    position: 'AI Innovation Lead',
    description: 'Leading the integration of artificial intelligence and machine learning in fashion technology.',
    photo: Image,
    linkedin: 'https://linkedin.com/in/david-kim',
    twitter: 'https://twitter.com/david_kim'
  },
  {
    id: 11,
    name: 'Sophie Laurent',
    position: 'Digital Experience Designer',
    description: 'Creating immersive digital experiences that bridge the gap between physical and virtual fashion.',
    photo: Image,
    linkedin: 'https://linkedin.com/in/sophie-laurent',
    instagram: 'https://instagram.com/sophie_laurent'
  },
  {
    id: 12,
    name: 'Omar Al-Zahra',
    position: 'Blockchain Specialist',
    description: 'Implementing blockchain technology for fashion authentication and digital asset management.',
    photo: Image,
    linkedin: 'https://linkedin.com/in/omar-al-zahra',
    twitter: 'https://twitter.com/omar_al_zahra'
  }
]
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
