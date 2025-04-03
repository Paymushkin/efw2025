<template>
  <div class="container mx-auto px-4 py-16">
    <AppSeo 
      title="Our Team | Emirates Fashion Week"
      description="Meet our dedicated team of professionals behind Emirates Fashion Week"
      :keywords="['team', 'fashion week', 'dubai', 'emirates', 'organizers']"
    />
    
    <div class="max-w-3xl mb-16">
      <h1 class="text-4xl font-bold mb-4">Our Team</h1>
      <p class="text-xl text-gray-600">Meet the dedicated professionals who make Emirates Fashion Week possible.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <TeamMemberCard 
        v-for="member in teamMembers" 
        :key="member.id" 
        :member="member"
      />
    </div>
  </div>
</template>

<script setup>
import TeamMemberCard from '~/components/TeamMemberCard.vue'
import Image from '~/assets/image/features/4-2.webp'

const teamMembers = [
  {
    id: 1,
    name: 'Danilov Stepan',
    position: 'CEO MeYou Arena Events',
    description: 'Best ai-matchmaking solution',
    photo: Image,
    linkedin: 'https://linkedin.com',
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    instagram: 'https://instagram.com'
  },
  {
    id: 2,
    name: 'Sarah Al Hashimi',
    position: 'Creative Director',
    description: 'Award-winning fashion designer with over 15 years of experience in luxury fashion.',
    photo: Image,
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com'
  },
  {
    id: 3,
    name: 'Mohammed Rahman',
    position: 'Head of Operations',
    description: 'Expert in event management and logistics with a track record of successful fashion shows.',
    photo: Image,
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com'
  },
  {
    id: 4,
    name: 'Elena Petrova',
    position: 'PR & Marketing Director',
    description: 'Strategic communications professional specializing in luxury and fashion brands.',
    photo: Image,
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com'
  },
  {
    id: 5,
    name: 'James Chen',
    position: 'Technical Director',
    description: 'Innovation leader bringing cutting-edge technology to fashion events.',
    photo: Image,
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com'
  },
  {
    id: 6,
    name: 'Fatima Al Mansouri',
    position: 'Partnerships Manager',
    description: 'Building strategic partnerships between fashion brands and cultural institutions.',
    photo: Image,
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com'
  }
]
</script> 