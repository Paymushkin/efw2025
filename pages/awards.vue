<template>
  <div class="min-h-screen bg-gray-50">
    <AppSeo 
      title="Emirates Fashion Week Awards Fall Winter 2025 | April 15, 2025"
      description="Celebrating the winners of Emirates Fashion Week Awards Fall Winter 2025. Discover the talented designers, brands, and industry leaders who received recognition on April 15, 2025."
      :keywords="['Emirates Fashion Week Awards', 'Fashion Awards 2025', 'Dubai Fashion Awards', 'Fashion Winners', 'Design Awards']"
    />
    
    <!-- Hero Section -->
    <section class="bg-cover bg-center bg-no-repeat py-20 hero-bg">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-bold mb-6 text-white">Emirates Fashion Week Awards</h1>
          <p class="text-xl md:text-2xl text-gray-200 mb-4">A Professional International Recognition Platform for Emerging and Established Talent in the Fashion and Beauty Industries.</p>
          <p class="text-lg text-gray-300">Established in the United Arab Emirates as a formal institution for professional merit, industry legitimacy, and cross-border talent validation. Supported by an independent jury applying structured evaluation criteria across design excellence, digital innovation, and commercial strategy.</p>
        </div>
      </div>
    </section>

    <!-- Contents -->
    <section class="py-12 md:py-16">
      <div class="container mx-auto px-4">
        <nav class="rounded-3xl border border-white/40 bg-white/70 backdrop-blur-md p-6 shadow-sm">
          <p class="text-xs uppercase tracking-[0.35em] text-gray-500 mb-4 font-semibold">Contents</p>
          <div class="flex flex-wrap gap-3">
            <a
              v-for="item in tocItems"
              :key="item.id"
              :href="`#${item.id}`"
              class="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-black hover:text-black"
            >
              <span class="text-xs font-semibold text-gray-400">{{ item.index }}</span>
              {{ item.title }}
            </a>
          </div>
        </nav>
      </div>
    </section>

    <!-- SS26 Awards -->
    <section id="awards-ss26" class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center mb-12">
          <p class="text-sm uppercase tracking-[0.5em] text-gray-400 mb-3">10 November 2025</p>
          <h2 class="text-4xl md:text-5xl font-bold mb-4">Awards EFW SS26</h2>
          <p class="text-lg text-gray-600">
            Honoring the creative leaders, designers, and partners of the Emirates Fashion Week Spring/Summer 2026 season.
          </p>
        </div>

        <!-- Desktop grid -->
        <div class="hidden md:grid lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
          <div
            v-for="(award, index) in awardsSS26"
            :key="award.name + index"
            class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative p-6"
          >
            <div class="absolute top-4 right-4">
              <div class="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4945 0.7045C14.6865 0.5965 13.535 0.5 11.9995 0.5C10.4645 0.5 9.3135 0.5965 8.5055 0.7045L8.5555 0.8195C8.6725 1.0845 8.846 1.473 9.072 1.961C9.68511 3.28262 10.3325 4.58806 11.0135 5.876L11.0835 6.0075C11.6945 5.99713 12.3055 5.99713 12.9165 6.0075L12.9865 5.876C13.6675 4.58806 14.3149 3.28262 14.928 1.961C15.1212 1.54421 15.3103 1.12535 15.4945 0.7045ZM1.9175 8.122C1.6495 7.731 1.59 7.235 1.79 6.805C3.425 3.294 7 1 7 1C7 1 8.6665 4.974 11.3275 9.53C10.1777 9.63328 9.06726 10.0006 8.08267 10.6033C7.09808 11.2061 6.26592 12.028 5.651 13.005C4.3267 11.4401 3.08034 9.81038 1.9175 8.122ZM18.349 13.0055C19.6733 11.4404 20.9192 9.81055 22.082 8.122C22.35 7.731 22.4095 7.235 22.2095 6.805C20.575 3.294 16.9995 1 16.9995 1C16.9995 1 15.3335 4.974 12.6725 9.53C13.8222 9.63336 14.9326 10.0007 15.9171 10.6034C16.9016 11.2062 17.7336 12.028 18.3485 13.005M12 10.75C8.548 10.75 5.75 13.548 5.75 17C5.75 20.452 8.548 23.25 12 23.25C15.452 23.25 18.25 20.452 18.25 17C18.25 13.548 15.452 10.75 12 10.75ZM12.555 13.82L13.31 15.276L14.92 15.593C15.0284 15.6144 15.1291 15.664 15.2121 15.737C15.295 15.81 15.3571 15.9036 15.392 16.0084C15.427 16.1132 15.4336 16.2253 15.4111 16.3335C15.3886 16.4416 15.3378 16.5419 15.264 16.624L14.12 17.8965L14.3295 19.594C14.3434 19.7062 14.3266 19.82 14.2809 19.9234C14.2352 20.0268 14.1624 20.1159 14.0701 20.1812C13.9778 20.2464 13.8695 20.2854 13.7568 20.294C13.6441 20.3026 13.5311 20.2805 13.43 20.23L12 19.516L10.57 20.23C10.4689 20.2805 10.3559 20.3026 10.2432 20.294C10.1305 20.2854 10.0222 20.2464 9.92993 20.1812C9.83763 20.1159 9.76476 20.0268 9.71907 19.9234C9.67339 19.82 9.6566 19.7062 9.6705 19.594L9.88 17.8965L8.736 16.624C8.66217 16.5419 8.61142 16.4416 8.58893 16.3335C8.56644 16.2253 8.57301 16.1132 8.60797 16.0084C8.64293 15.9036 8.70503 15.81 8.78794 15.737C8.87086 15.664 8.97163 15.6144 9.08 15.593L10.69 15.276L11.445 13.8195C11.4977 13.7178 11.5773 13.6325 11.6752 13.5729C11.7731 13.5134 11.8854 13.4819 12 13.4819C12.1146 13.4819 12.2269 13.5134 12.3248 13.5729C12.4227 13.6325 12.5023 13.7183 12.555 13.82Z" />
                </svg>
              </div>
            </div>

            <div>
              <h3 class="text-xl font-bold mb-2">{{ award.name }}</h3>
              <p v-if="award.brand" class="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-widest">
                {{ award.brand }}
              </p>
              <p class="text-lg font-semibold text-blue-600 mb-4">{{ award.category }}</p>
              <div class="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-full text-sm font-semibold inline-block">
                Emirates Fashion Week Awards Spring Summer 2026
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile slider -->
        <div class="md:hidden overflow-x-auto custom-scrollbar card-container -mx-4 px-4">
          <div class="flex gap-5 pb-4">
            <div
              v-for="(award, index) in awardsSS26"
              :key="award.name + 'mobile' + index"
              class="bg-white rounded-2xl shadow-lg overflow-hidden flex-shrink-0 w-[85vw] max-w-[360px] card-item relative p-4"
            >
              <div class="absolute top-3 right-3">
                <div class="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4945 0.7045C14.6865 0.5965 13.535 0.5 11.9995 0.5C10.4645 0.5 9.3135 0.5965 8.5055 0.7045L8.5555 0.8195C8.6725 1.0845 8.846 1.473 9.072 1.961C9.68511 3.28262 10.3325 4.58806 11.0135 5.876L11.0835 6.0075C11.6945 5.99713 12.3055 5.99713 12.9165 6.0075L12.9865 5.876C13.6675 4.58806 14.3149 3.28262 14.928 1.961C15.1212 1.54421 15.3103 1.12535 15.4945 0.7045ZM1.9175 8.122C1.6495 7.731 1.59 7.235 1.79 6.805C3.425 3.294 7 1 7 1C7 1 8.6665 4.974 11.3275 9.53C10.1777 9.63328 9.06726 10.0006 8.08267 10.6033C7.09808 11.2061 6.26592 12.028 5.651 13.005C4.3267 11.4401 3.08034 9.81038 1.9175 8.122ZM18.349 13.0055C19.6733 11.4404 20.9192 9.81055 22.082 8.122C22.35 7.731 22.4095 7.235 22.2095 6.805C20.575 3.294 16.9995 1 16.9995 1C16.9995 1 15.3335 4.974 12.6725 9.53C13.8222 9.63336 14.9326 10.0007 15.9171 10.6034C16.9016 11.2062 17.7336 12.028 18.3485 13.005M12 10.75C8.548 10.75 5.75 13.548 5.75 17C5.75 20.452 8.548 23.25 12 23.25C15.452 23.25 18.25 20.452 18.25 17C18.25 13.548 15.452 10.75 12 10.75ZM12.555 13.82L13.31 15.276L14.92 15.593C15.0284 15.6144 15.1291 15.664 15.2121 15.737C15.295 15.81 15.3571 15.9036 15.392 16.0084C15.427 16.1132 15.4336 16.2253 15.4111 16.3335C15.3886 16.4416 15.3378 16.5419 15.264 16.624L14.12 17.8965L14.3295 19.594C14.3434 19.7062 14.3266 19.82 14.2809 19.9234C14.2352 20.0268 14.1624 20.1159 14.0701 20.1812C13.9778 20.2464 13.8695 20.2854 13.7568 20.294C13.6441 20.3026 13.5311 20.2805 13.43 20.23L12 19.516L10.57 20.23C10.4689 20.2805 10.3559 20.3026 10.2432 20.294C10.1305 20.2854 10.0222 20.2464 9.92993 20.1812C9.83763 20.1159 9.76476 20.0268 9.71907 19.9234C9.67339 19.82 9.6566 19.7062 9.6705 19.594L9.88 17.8965L8.736 16.624C8.66217 16.5419 8.61142 16.4416 8.58893 16.3335C8.56644 16.2253 8.57301 16.1132 8.60797 16.0084C8.64293 15.9036 8.70503 15.81 8.78794 15.737C8.87086 15.664 8.97163 15.6144 9.08 15.593L10.69 15.276L11.445 13.8195C11.4977 13.7178 11.5773 13.6325 11.6752 13.5729C11.7731 13.5134 11.8854 13.4819 12 13.4819C12.1146 13.4819 12.2269 13.5134 12.3248 13.5729C12.4227 13.6325 12.5023 13.7183 12.555 13.82Z" />
                  </svg>
                </div>
              </div>

              <div>
                <h3 class="text-lg font-bold mb-2">{{ award.name }}</h3>
                <p v-if="award.brand" class="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-widest">
                  {{ award.brand }}
                </p>
                <p class="text-base font-semibold text-blue-600 mb-3">{{ award.category }}</p>
                <div class="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-3 py-1 rounded-full text-xs font-semibold inline-block">
                  Emirates Fashion Week Awards Spring Summer 2026
                </div>
              </div>
            </div>
            <div class="flex-shrink-0 w-5"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Winners Section -->
    <section id="awards-fw25" class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <p class="text-sm uppercase tracking-[0.5em] text-gray-400 mb-3">15 April 2025</p>
          <h2 class="text-4xl md:text-5xl font-bold mb-4">Awards EFW FW25</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating excellence in fashion, design, and innovation across the industry.
          </p>
        </div>

        <!-- Alternating Content Blocks -->
        <div v-for="(group, groupIndex) in groupedContent" :key="groupIndex" class="mb-16">
          <!-- Winners Block -->
          <div v-if="group.type === 'winners'">

            <!-- Winners Grid - Desktop -->
            <div class="hidden md:grid lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
              <div 
                v-for="(winner, index) in group.data" 
                :key="index"
                class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative p-6"
              >
                <!-- Medal Icon as Corner Badge -->
                <div class="absolute top-4 right-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4945 0.7045C14.6865 0.5965 13.535 0.5 11.9995 0.5C10.4645 0.5 9.3135 0.5965 8.5055 0.7045L8.5555 0.8195C8.6725 1.0845 8.846 1.473 9.072 1.961C9.68511 3.28262 10.3325 4.58806 11.0135 5.876L11.0835 6.0075C11.6945 5.99713 12.3055 5.99713 12.9165 6.0075L12.9865 5.876C13.6675 4.58806 14.3149 3.28262 14.928 1.961C15.1212 1.54421 15.3103 1.12535 15.4945 0.7045ZM1.9175 8.122C1.6495 7.731 1.59 7.235 1.79 6.805C3.425 3.294 7 1 7 1C7 1 8.6665 4.974 11.3275 9.53C10.1777 9.63328 9.06726 10.0006 8.08267 10.6033C7.09808 11.2061 6.26592 12.028 5.651 13.005C4.3267 11.4401 3.08034 9.81038 1.9175 8.122ZM18.349 13.0055C19.6733 11.4404 20.9192 9.81055 22.082 8.122C22.35 7.731 22.4095 7.235 22.2095 6.805C20.575 3.294 16.9995 1 16.9995 1C16.9995 1 15.3335 4.974 12.6725 9.53C13.8222 9.63336 14.9326 10.0007 15.9171 10.6034C16.9016 11.2062 17.7336 12.028 18.3485 13.005M12 10.75C8.548 10.75 5.75 13.548 5.75 17C5.75 20.452 8.548 23.25 12 23.25C15.452 23.25 18.25 20.452 18.25 17C18.25 13.548 15.452 10.75 12 10.75ZM12.555 13.82L13.31 15.276L14.92 15.593C15.0284 15.6144 15.1291 15.664 15.2121 15.737C15.295 15.81 15.3571 15.9036 15.392 16.0084C15.427 16.1132 15.4336 16.2253 15.4111 16.3335C15.3886 16.4416 15.3378 16.5419 15.264 16.624L14.12 17.8965L14.3295 19.594C14.3434 19.7062 14.3266 19.82 14.2809 19.9234C14.2352 20.0268 14.1624 20.1159 14.0701 20.1812C13.9778 20.2464 13.8695 20.2854 13.7568 20.294C13.6441 20.3026 13.5311 20.2805 13.43 20.23L12 19.516L10.57 20.23C10.4689 20.2805 10.3559 20.3026 10.2432 20.294C10.1305 20.2854 10.0222 20.2464 9.92993 20.1812C9.83763 20.1159 9.76476 20.0268 9.71907 19.9234C9.67339 19.82 9.6566 19.7062 9.6705 19.594L9.88 17.8965L8.736 16.624C8.66217 16.5419 8.61142 16.4416 8.58893 16.3335C8.56644 16.2253 8.57301 16.1132 8.60797 16.0084C8.64293 15.9036 8.70503 15.81 8.78794 15.737C8.87086 15.664 8.97163 15.6144 9.08 15.593L10.69 15.276L11.445 13.8195C11.4977 13.7178 11.5773 13.6325 11.6752 13.5729C11.7731 13.5134 11.8854 13.4819 12 13.4819C12.1146 13.4819 12.2269 13.5134 12.3248 13.5729C12.4227 13.6325 12.5023 13.7183 12.555 13.82Z" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
                
                <!-- Winner Info -->
                <div>
                  <h3 class="text-xl font-bold mb-2">{{ winner.name }}</h3>
                  <p class="text-lg font-semibold text-blue-600 mb-2">{{ winner.category }}</p>
                  <p class="text-sm text-gray-500 mb-4">{{ winner.company }}</p>
                  
                  <!-- Award Badge -->
                  <div class="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-full text-sm font-semibold inline-block">
                    Emirates Fashion Week Awards Fall Winter 2025
                  </div>
                </div>
              </div>
            </div>

            <!-- Winners Horizontal Scroll - Mobile -->
            <div class="md:hidden overflow-x-auto custom-scrollbar card-container -mx-4 px-4">
              <div class="flex gap-5 pb-4">
                <div 
                  v-for="(winner, index) in group.data" 
                  :key="index"
                  class="bg-white rounded-2xl shadow-lg overflow-hidden flex-shrink-0 w-[85vw] max-w-[360px] card-item relative p-4"
                >
                  <!-- Medal Icon as Corner Badge -->
                  <div class="absolute top-3 right-3">
                    <div class="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
                      <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4945 0.7045C14.6865 0.5965 13.535 0.5 11.9995 0.5C10.4645 0.5 9.3135 0.5965 8.5055 0.7045L8.5555 0.8195C8.6725 1.0845 8.846 1.473 9.072 1.961C9.68511 3.28262 10.3325 4.58806 11.0135 5.876L11.0835 6.0075C11.6945 5.99713 12.3055 5.99713 12.9165 6.0075L12.9865 5.876C13.6675 4.58806 14.3149 3.28262 14.928 1.961C15.1212 1.54421 15.3103 1.12535 15.4945 0.7045ZM1.9175 8.122C1.6495 7.731 1.59 7.235 1.79 6.805C3.425 3.294 7 1 7 1C7 1 8.6665 4.974 11.3275 9.53C10.1777 9.63328 9.06726 10.0006 8.08267 10.6033C7.09808 11.2061 6.26592 12.028 5.651 13.005C4.3267 11.4401 3.08034 9.81038 1.9175 8.122ZM18.349 13.0055C19.6733 11.4404 20.9192 9.81055 22.082 8.122C22.35 7.731 22.4095 7.235 22.2095 6.805C20.575 3.294 16.9995 1 16.9995 1C16.9995 1 15.3335 4.974 12.6725 9.53C13.8222 9.63336 14.9326 10.0007 15.9171 10.6034C16.9016 11.2062 17.7336 12.028 18.3485 13.005M12 10.75C8.548 10.75 5.75 13.548 5.75 17C5.75 20.452 8.548 23.25 12 23.25C15.452 23.25 18.25 20.452 18.25 17C18.25 13.548 15.452 10.75 12 10.75ZM12.555 13.82L13.31 15.276L14.92 15.593C15.0284 15.6144 15.1291 15.664 15.2121 15.737C15.295 15.81 15.3571 15.9036 15.392 16.0084C15.427 16.1132 15.4336 16.2253 15.4111 16.3335C15.3886 16.4416 15.3378 16.5419 15.264 16.624L14.12 17.8965L14.3295 19.594C14.3434 19.7062 14.3266 19.82 14.2809 19.9234C14.2352 20.0268 14.1624 20.1159 14.0701 20.1812C13.9778 20.2464 13.8695 20.2854 13.7568 20.294C13.6441 20.3026 13.5311 20.2805 13.43 20.23L12 19.516L10.57 20.23C10.4689 20.2805 10.3559 20.3026 10.2432 20.294C10.1305 20.2854 10.0222 20.2464 9.92993 20.1812C9.83763 20.1159 9.76476 20.0268 9.71907 19.9234C9.67339 19.82 9.6566 19.7062 9.6705 19.594L9.88 17.8965L8.736 16.624C8.66217 16.5419 8.61142 16.4416 8.58893 16.3335C8.56644 16.2253 8.57301 16.1132 8.60797 16.0084C8.64293 15.9036 8.70503 15.81 8.78794 15.737C8.87086 15.664 8.97163 15.6144 9.08 15.593L10.69 15.276L11.445 13.8195C11.4977 13.7178 11.5773 13.6325 11.6752 13.5729C11.7731 13.5134 11.8854 13.4819 12 13.4819C12.1146 13.4819 12.2269 13.5134 12.3248 13.5729C12.4227 13.6325 12.5023 13.7183 12.555 13.82Z" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                  
                  <!-- Winner Info -->
                  <div>
                    <h3 class="text-lg font-bold mb-2">{{ winner.name }}</h3>
                    <p class="text-base font-semibold text-blue-600 mb-2">{{ winner.category }}</p>
                    <p class="text-sm text-gray-500 mb-3">{{ winner.company }}</p>
                    
                    <!-- Award Badge -->
                    <div class="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-3 py-1 rounded-full text-xs font-semibold inline-block">
                      Emirates Fashion Week Awards Fall Winter 2025
                    </div>
                  </div>
                </div>
                <div class="flex-shrink-0 w-5"></div>
              </div>
            </div>
          </div>

          <!-- Videos Block -->
          <div v-else-if="group.type === 'videos'">
            <!-- Videos Grid - Desktop -->
            <div class="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div 
                v-for="(interview, index) in group.data" 
                :key="index"
                class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div class="aspect-video relative">
                  <video 
                    :src="interview.video"
                    class="w-full h-full object-cover"
                    muted
                    loop
                    playsinline
                    :preload="isVideoVisible[group.startIndex + index] ? 'metadata' : 'none'"
                    controls
                    :data-index="group.startIndex + index"
                    ref="videoElements"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>

            <!-- Videos Horizontal Scroll - Mobile -->
            <div class="md:hidden overflow-x-auto custom-scrollbar card-container -mx-4 px-4">
              <div class="flex gap-5 pb-4">
                <div 
                  v-for="(interview, index) in group.data" 
                  :key="index"
                  class="bg-white rounded-2xl shadow-lg overflow-hidden flex-shrink-0 w-[85vw] max-w-[360px] card-item"
                >
                  <div class="aspect-video relative">
                    <video 
                      :src="interview.video"
                      class="w-full h-full object-cover"
                      muted
                      loop
                      playsinline
                      :preload="isVideoVisible[group.startIndex + index] ? 'metadata' : 'none'"
                      controls
                      :data-index="group.startIndex + index"
                      ref="videoElements"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
                <div class="flex-shrink-0 w-5"></div>
              </div>
            </div>
            
            <!-- All TV Interviews button under each video block -->
            <div class="text-center mt-8">
              <a 
                href="https://disk.yandex.ru/d/th-0hjIjKyPuag/TV%20Lobby/3%20Awards"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                All TV Interviews
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Awards Disclaimer -->
    <section id="awards-disclaimer" class="pb-12">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <details class="group rounded-3xl border border-gray-200 bg-white/90 p-6 shadow-sm">
            <summary class="flex cursor-pointer items-center justify-between text-2xl font-semibold text-gray-900">
              Awards Disclaimer
              <span
                class="ml-4 flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-xl font-bold text-gray-500 transition group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <ol class="mt-6 space-y-4 text-gray-700 list-decimal list-inside">
              <li v-for="(item, index) in disclaimerItems" :key="index">
                {{ item }}
              </li>
            </ol>
          </details>
        </div>
      </div>
    </section>

    <!-- Jury Panel -->
    <section id="awards-jury" class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <!-- <p class="text-sm uppercase tracking-[0.5em] text-gray-400 mb-3">Awards Jury Panel</p> -->
          <h2 class="text-4xl md:text-5xl font-bold mb-4">Awards Jury Panel</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            EFW Awards — Official Jury Panel
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-2">
          <article
            v-for="member in juryMembers"
            :key="member.name"
            class="rounded-3xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-6 shadow-sm"
          >
            <p class="text-xs uppercase tracking-[0.4em] text-gray-400 mb-3">{{ member.organization }}</p>
            <h3 class="text-2xl font-semibold mb-2">{{ member.name }}</h3>
            <p class="text-sm font-semibold text-emerald-700 mb-4">{{ member.title }}</p>
            <p class="text-gray-700 leading-relaxed">{{ member.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Faces of EFW -->
    <div id="faces-efw" class="container mx-auto p-4">
      <ClientOnly>
        <FacesOfEfwSection />
      </ClientOnly>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import FacesOfEfwSection from '@/components/FacesOfEfwSection.vue'

// Reactive data for lazy loading
const isVideoVisible = ref({})
const videoElements = ref([])

// Group data for alternating blocks
const groupedContent = ref([])

const awardsSS26 = [
  { name: 'Tatiana Domanova', category: 'Best Fashion Creative Look' },
  { name: 'Olga Zharkova', category: 'Best Fashion Stylist of the Year' },
  { name: 'Olesya Arkhipova', brand: 'Alevtini', category: 'Top Designer of the Year' },
  { name: 'Moonsoul', category: 'Best Tailored Luxury Brand of the Year' },
  { name: 'IRIM', category: 'Best Art of Fashion Brand of the Year' },
  { name: 'Olga Bogdanova', category: 'Best Avant-Garde Designer of the Year' },
  { name: 'Sasha Walton', brand: 'House of Solana', category: 'Best Plus Size Designer of the Year' },
  { name: 'Arni Fashion', category: 'Best Jewelry Brand of the Year' },
  { name: 'Annet', category: 'Best Iconic Style Brand of the Year' },
  { name: 'Vishal Laljibhaibhai Desai', brand: 'Desi Vogue by Vishal', category: 'Best Designer Integrating Indian Folk into Western Fashion' },
  { name: 'Anastasia Sabo', category: 'Top Personal Fashion Stylist' },
  { name: 'Elena Romanova', brand: 'Threads of Tradition', category: 'Best Designer of the Year' },
  { name: 'House of Ali', category: 'Best Couture Designer' },
  { name: 'Fitisova Flowers', category: 'Best Floral Company' },
  { name: 'BeOnd', category: 'Best Premium Leisure Airline' },
  { name: 'Ekaterina Potanina', category: 'Top Personal Stylist of the Year' },
  { name: 'Valeriya Lioci', category: 'Best Personal Stylist of the Year' },
  { name: 'Anna Tereshchuk', category: 'Top Personal Fashion Stylist / EFW TV Host' },
  { name: 'Ksenia Nova', category: 'Top Personal Stylist' },
  { name: 'Zayah D’or', category: 'Multi-Talented Personality Award — Fashion Industry' }
]

const disclaimerItems = [
  'All nominations are formed based on official participant applications, internal selection, and verified participation metrics of the Emirates Fashion Week season.',
  'Winners are determined by an independent jury using professional criteria: creativity, commercial potential, innovation, and contribution to the industry.',
  'Awards do not imply financial obligations on behalf of the organizers and cannot be transferred to third parties without written consent from EFW.',
  'The organizing committee reserves the right to adjust the list of nominations and finalists in line with season outcomes and validated data.',
  'Use of the Emirates Fashion Week Awards name in marketing or PR materials is allowed only after written approval from EFW.'
]

const juryMembers = [
  {
    name: 'Mr. Nayer Al Bayar',
    organization: 'HydraFacial, Middle East',
    title: 'Principal Adjudicator — HydraFacial Signature Glow Award',
    description:
      'Mr. Al Bayar evaluated submissions by their creative distinctiveness, technical precision, and contribution to contemporary design standards. His participation reflects HydraFacial’s leadership in clinical aesthetics and his authority in identifying emerging talent with international potential.'
  },
  {
    name: 'Marina Liubina',
    organization: 'Emirates Fashion Week',
    title: 'Fashion Operations & Brand Development',
    description:
      'Ms. Liubina assessed design excellence, production quality, team coordination, and commercial scalability. Her methodology aligned creative output with measurable business potential, underscoring her long-standing leadership in UAE fashion event management and brand development.'
  },
  {
    name: 'Stepan Danilov',
    organization: 'MeYou Arena',
    title: 'EventTech & Digital Innovation',
    description:
      'Mr. Danilov evaluated digital strategy and technological integration: adoption of AI-driven media systems, event-tech tools, and the ability of designers to scale via digital infrastructure. His role highlights his authority in EventTech and platform-based innovation across the UAE.'
  },
  {
    name: 'Slava Akulov',
    organization: 'Jupid Tax',
    title: 'Financial Strategy & Economic Evaluation',
    description:
      'Mr. Akulov reviewed business models, financial governance, long-term planning, and the economic feasibility of each entrant. His expertise in corporate finance and taxation frameworks ensured that creative enterprises met professional standards of commercial viability.'
  }
]

const tocItems = [
  { id: 'awards-ss26', index: '01', title: 'Awards EFW SS26 · 10 November 2025' },
  { id: 'awards-fw25', index: '02', title: 'Awards EFW FW25 · 15 April 2025' },
  { id: 'awards-disclaimer', index: '03', title: 'Awards Disclaimer' },
  { id: 'awards-jury', index: '04', title: 'Awards Jury Panel' }
]

// Intersection Observer for lazy loading
let observer = null

// Initialize intersection observer
const initIntersectionObserver = () => {
  if (typeof window === 'undefined') return

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const index = parseInt(entry.target.dataset.index)
      if (entry.isIntersecting) {
        isVideoVisible.value[index] = true
        // Set preload to metadata to get first frame
        if (entry.target) {
          entry.target.preload = 'metadata'
        }
      }
    })
  }, {
    rootMargin: '50px 0px', // Start loading 50px before video comes into view
    threshold: 0.1
  })

  // Observe all video elements
  videoElements.value.forEach((video) => {
    if (video) {
      observer.observe(video)
    }
  })
}

// Clean up observer
const cleanupObserver = () => {
  if (observer) {
    observer.disconnect()
    observer = null
  }
}

// Group content into alternating blocks
const groupContent = () => {
  const groups = []
  let winnerIndex = 0
  let videoIndex = 0
  
  while (winnerIndex < winners.length || videoIndex < tvInterviews.length) {
    // Add 6 winners
    if (winnerIndex < winners.length) {
      const winnerGroup = winners.slice(winnerIndex, winnerIndex + 6)
      groups.push({
        type: 'winners',
        data: winnerGroup,
        startIndex: winnerIndex
      })
      winnerIndex += 6
    }
    
    // Add 9 videos
    if (videoIndex < tvInterviews.length) {
      const videoGroup = tvInterviews.slice(videoIndex, videoIndex + 9)
      groups.push({
        type: 'videos',
        data: videoGroup,
        startIndex: videoIndex
      })
      videoIndex += 9
    }
  }
  
  groupedContent.value = groups
}

onMounted(() => {
  // Group content first
  groupContent()
  
  // Initialize observer after DOM is ready
  setTimeout(() => {
    initIntersectionObserver()
  }, 100)
})

onUnmounted(() => {
  cleanupObserver()
})

// Emirates Fashion Week Awards 2025 Winners
const winners = [
  {
    name: "Elena Chuvilina",
    category: "Best Fashion Stylist of the Year",
    company: "Designer",
    description: "Outstanding contribution to fashion styling and creative direction."
  },
  {
    name: "Marina Aleksandrova",
    category: "Best Fashion Creative Look",
    company: "Designer",
    description: "Innovative and creative approach to fashion presentation.",
  },
  {
    name: "Olga Zharkova",
    category: "Emerging Talent in Fashion Styling",
    company: "Designer",
    description: "Promising new talent in the field of fashion styling.",
  },
  {
    name: "Irina Buzinova",
    category: "Best Model of the Year",
    company: "Designer",
    description: "Exceptional modeling talent and professional excellence.",
  },
  {
    name: "Anna Sklyar",
    category: "Best Fashion Producer of the Year",
    company: "Designer",
    description: "Outstanding work in fashion production and event management.",
  },
  {
    name: "Natallia Safina",
    category: "Innovative Designer of the Year",
    company: "Danatella Brand",
    description: "Revolutionary design approach and innovative fashion concepts.",
  },
  {
    name: "Irina Sharova",
    category: "Best Fashion Designer of the Year",
    company: "Alisia Fiori Brand",
    description: "Exceptional fashion design and creative excellence.",
  },
  {
    name: "Radim Borovik",
    category: "Best Young Fashion Designer of the Year",
    company: "Designer",
    description: "Outstanding young talent in fashion design.",
  },
  {
    name: "Aisha Al Sulimani",
    category: "Best Modest Designer of the Year",
    company: "Designer",
    description: "Excellence in modest fashion design and cultural sensitivity.",
  },
  {
    name: "Sundus Al Siyabi",
    category: "Best Junior Designer",
    company: "Designer",
    description: "Promising junior talent in fashion design.",
  },
  {
    name: "Top Tapo",
    category: "Best Modest Couture Brand",
    company: "Dubai 15.04.2025",
    description: "Outstanding modest couture brand with innovative designs.",
  },
  {
    name: "Armine Avetisyan",
    category: "Iconic Designer of the Year",
    company: "Icona Stile Brand",
    description: "Iconic contributions to fashion design and industry influence.",
  },
  {
    name: "Ludmila Kanunnik",
    category: "Best Creative Fashion Designer of the Year",
    company: "From Luna Brand",
    description: "Exceptional creativity and innovation in fashion design.",
  },
  {
    name: "Annamaria",
    category: "Creative Leadership in Fashion",
    company: "Founder of WFGala",
    description: "Outstanding leadership and creative vision in fashion industry.",
  },
  {
    name: "Ketrin Boulas",
    category: "Best Evening Wear Designer of the Year",
    company: "Designer",
    description: "Excellence in evening wear design and formal fashion.",
  },
  {
    name: "Aisha",
    category: "Best Kids Fashion Brand of the Year",
    company: "Designer",
    description: "Outstanding children's fashion brand and design innovation.",
  },
  {
    name: "Marina Vilisova",
    category: "Best Elegance and Grace Designer of the Year",
    company: "Designer",
    description: "Exceptional elegance and grace in fashion design.",
  },
  {
    name: "Arshad Junaid",
    category: "Best Volunteer of the Year",
    company: "Designer",
    description: "Outstanding volunteer contributions to the fashion community.",
  },
  {
    name: "The Biltmore Spa",
    category: "Emirati Art of Wellness Award",
    company: "By Biltmore Hotel Villas",
    description: "Excellence in wellness and spa services in the UAE.",
  },
  {
    name: "The Biltmore Hotel Villas",
    category: "Boutique Icon: Fashion & Wellness Destination Award",
    company: "Biltmore Hotel Villas",
    description: "Outstanding fashion and wellness destination.",
  }
]

// TV interviews data with real video links
const tvInterviews = [
  {
    title: "Interview 1",
    winner: "Award Winner",
    video: "https://storage.yandexcloud.net/videos-meyou/efw2025/rt/rt-1.mov"
  },
  {
    title: "Interview 2", 
    winner: "Award Winner",
    video: "https://storage.yandexcloud.net/videos-meyou/efw2025/rt/rt-2.mov"
  },
  {
    title: "Interview 3",
    winner: "Award Winner", 
    video: "https://storage.yandexcloud.net/videos-meyou/efw2025/rt/rt-3.mov"
  },
  {
    title: "Interview 4",
    winner: "Award Winner",
    video: "https://storage.yandexcloud.net/videos-meyou/efw2025/rt/rt-4.mov"
  },
  {
    title: "Interview 5",
    winner: "Award Winner",
    video: "https://storage.yandexcloud.net/videos-meyou/efw2025/rt/rt-5.mov"
  },
  {
    title: "Interview 6",
    winner: "Award Winner",
    video: "https://storage.yandexcloud.net/videos-meyou/efw2025/rt/rt-6.mov"
  },
  {
    title: "Interview 7",
    winner: "Award Winner",
    video: "https://storage.yandexcloud.net/videos-meyou/efw2025/rt/rt-7.mov"
  },
  {
    title: "Interview 8",
    winner: "Award Winner",
    video: "https://storage.yandexcloud.net/videos-meyou/efw2025/rt/rt-8.mov"
  },
  {
    title: "Interview 9",
    winner: "Award Winner",
    video: "https://storage.yandexcloud.net/videos-meyou/efw2025/rt/rt-9.mov"
  },
  {
    title: "Interview 10",
    winner: "Award Winner",
    video: "https://storage.yandexcloud.net/videos-meyou/efw2025/rt/rt-10.mov"
  },
  {
    title: "Interview 11",
    winner: "Award Winner",
    video: "https://storage.yandexcloud.net/videos-meyou/efw2025/rt/rt-11.mov"
  },
  {
    title: "Interview 12",
    winner: "Award Winner",
    video: "https://storage.yandexcloud.net/videos-meyou/efw2025/rt/rt-12.mov"
  },
  {
    title: "Interview 13",
    winner: "Award Winner",
    video: "https://storage.yandexcloud.net/videos-meyou/efw2025/rt/rt-13.mov"
  },
  {
    title: "Interview 14",
    winner: "Award Winner",
    video: "https://storage.yandexcloud.net/videos-meyou/efw2025/rt/rt-14.mov"
  },
  {
    title: "Interview 15",
    winner: "Award Winner",
    video: "https://storage.yandexcloud.net/videos-meyou/efw2025/rt/rt-15.mov"
  },
  {
    title: "Interview 16",
    winner: "Award Winner",
    video: "https://storage.yandexcloud.net/videos-meyou/efw2025/rt/rt-16.mov"
  },
  {
    title: "Interview 17",
    winner: "Award Winner",
    video: "https://storage.yandexcloud.net/videos-meyou/efw2025/rt/rt-17.mov"
  },
  {
    title: "Interview 18",
    winner: "Award Winner",
    video: "https://storage.yandexcloud.net/videos-meyou/efw2025/rt/rt-18.mov"
  },
  {
    title: "Interview 19",
    winner: "Award Winner",
    video: "https://storage.yandexcloud.net/videos-meyou/efw2025/rt/rt-19.mov"
  },
  {
    title: "Interview 20",
    winner: "Award Winner",
    video: "https://storage.yandexcloud.net/videos-meyou/efw2025/rt/rt-20.mov"
  },
  {
    title: "Interview 21",
    winner: "Award Winner",
    video: "https://storage.yandexcloud.net/videos-meyou/efw2025/rt/rt-21.mov"
  },
  {
    title: "Interview 22",
    winner: "Award Winner",
    video: "https://storage.yandexcloud.net/videos-meyou/efw2025/rt/rt-22.mov"
  },
  {
    title: "Interview 23",
    winner: "Award Winner",
    video: "https://storage.yandexcloud.net/videos-meyou/efw2025/rt/rt-23.mov"
  },
  {
    title: "Interview 24",
    winner: "Award Winner",
    video: "https://storage.yandexcloud.net/videos-meyou/efw2025/rt/rt-24.mov"
  },
  {
    title: "Interview 25",
    winner: "Award Winner",
    video: "https://storage.yandexcloud.net/videos-meyou/efw2025/rt/rt-25.mov"
  },
  {
    title: "Interview 26",
    winner: "Award Winner",
    video: "https://storage.yandexcloud.net/videos-meyou/efw2025/rt/rt-26.mov"
  },
  {
    title: "Interview 27",
    winner: "Award Winner",
    video: "https://storage.yandexcloud.net/videos-meyou/efw2025/rt/rt-27.mov"
  }
]

</script>

<style scoped>
/* Custom styles for video hover effects */
.video-container:hover .play-overlay {
  opacity: 1;
}

.play-overlay {
  transition: opacity 0.3s ease;
}

/* Horizontal scroll styles */
.custom-scrollbar {
  scrollbar-width: none; /* Для Firefox */
  -ms-overflow-style: none; /* Для IE и Edge */
}

.custom-scrollbar::-webkit-scrollbar {
  display: none; /* Для Chrome, Safari и Opera */
}

@media (max-width: 768px) {
  .card-container {
    scroll-snap-type: x mandatory;
    scroll-padding: 1.25rem;
  }
  
  .card-item {
    scroll-snap-align: start;
  }
}

.hero-bg {
  background-image: url('/assets/image/awards/bg.JPG');
  position: relative;
}

.hero-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  z-index: 1;
}

.hero-bg > * {
  position: relative;
  z-index: 2;
}
</style>
