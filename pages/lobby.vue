<template>
  <div class="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#f4f7ff] to-[#e9f7f5] py-10 md:py-16 lg:bg-transparent">
    <AppSeo
      title="EFW Lobby Guide — Emirates Fashion Week"
      description="Quick guide for Emirates Fashion Week lobby guests: registration, press wall, media resources, and special offers for beauty services, stylists, influencers, and media partners."
      keywords="Emirates Fashion Week Lobby, EFW Quick Guide, Beauty Market Access, Dubai Fashion Media, Emirates Fashion Week Contacts"
    />

    <div class="container relative z-10">
        <div class="mx-auto w-full max-w-[440px] rounded-[22px] border border-[#ecf1f8] bg-gradient-to-b from-white to-[#fbfdff] shadow-[0_8px_30px_rgba(16,24,40,0.10)]">
          <div class="mx-auto mt-3 h-1 w-10 rounded-full bg-[#d9e2ef]"></div>

          <!-- <div class="px-[18px] pt-2 pb-2">
            <p class="text-lg font-bold text-[#0f1824]">Quick Guide</p>
          </div> -->

          <div class="flex flex-col">
            <template v-for="(step, index) in quickSteps" :key="`step-${index}`">
              <details
                v-if="step.details && step.details.length"
                :open="openQuickSteps[step.key]"
                class="group border-t border-[#e6ebf3] px-[18px] first:border-t-0"
                @toggle="handleQuickStepToggle(step.key, $event.target.open)"
              >
                <summary class="relative -mx-[18px] flex cursor-pointer items-center gap-3 px-[18px] py-[18px] pr-14 text-left list-none">
                  <span :class="['mt-0.5 flex h-[22px] w-[22px] items-center justify-center rounded-full border-2 shrink-0 transition-colors', checkClasses(step.completed)]">
                    <svg class="h-[10px] w-[10px]" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <path d="M4 8.5 7 11.5 12 5.5" />
                    </svg>
                  </span>
                  <div class="flex flex-col gap-1">
                    <span class="text-base font-semibold text-[#0f1824]">{{ step.title }}</span>
                    <span v-if="step.subtitle" class="text-sm text-[#5b6b7f]">{{ step.subtitle }}</span>
                  </div>
                  <span class="absolute right-[14px] top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-[8px] border border-[#e7edf6] text-xl font-semibold text-[#3a4960]">
                    <span class="group-open:hidden">+</span>
                    <span class="hidden group-open:inline">–</span>
                  </span>
                </summary>
                <div class="-mx-[18px] border-t border-[#e6ebf3] bg-white px-[18px] py-[18px] pl-[48px] text-sm text-[#2c3a4e]">
                  <p>
                    <a
                      v-for="(detail, detailIndex) in step.details"
                      :key="`step-detail-${index}-${detailIndex}`"
                      :href="detail.url"
                      class="lobby-link"
                      target="_blank"
                      rel="noopener"
                      :data-step="step.key"
                    >
                      {{ detail.label }}
                    </a>
                  </p>
                </div>
              </details>
              <div
                v-else
                class="flex items-center gap-3 border-t border-[#e6ebf3] px-[18px] py-[18px] first:border-t-0"
              >
                <span :class="['mt-0.5 flex h-[22px] w-[22px] items-center justify-center rounded-full border-2 shrink-0 transition-colors', checkClasses(step.completed)]">
                  <svg class="h-[10px] w-[10px]" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M4 8.5 7 11.5 12 5.5" />
                  </svg>
                </span>
                <div class="flex flex-col gap-1">
                  <span class="text-base font-semibold text-[#0f1824]">{{ step.title }}</span>
                  <span v-if="step.subtitle" class="text-sm text-[#5b6b7f]">{{ step.subtitle }}</span>
                </div>
              </div>
            </template>

            <details class="group border-t border-[#e6ebf3]" @toggle="handlePersonaGroupToggle($event.target.open)">
              <summary class="px-[18px] py-[18px] text-lg font-bold text-[#0f1824] list-none flex items-center gap-3">
                <span :class="['mt-0.5 flex h-[22px] w-[22px] items-center justify-center rounded-full border-2 shrink-0 transition-colors', personaGroupClasses]">
                    <svg class="h-[10px] w-[10px]" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <path d="M4 8.5 7 11.5 12 5.5" />
                    </svg>
                  </span>
                <span>3. IF YOU’RE</span>
                <span class="ml-auto flex h-7 w-7 items-center justify-center rounded-[8px] border border-[#e7edf6] text-xl font-semibold text-[#3a4960]">
                  <span v-if="personaGroupOpen">–</span>
                  <span v-else>+</span>
                </span>
              </summary>
              <div class="border-t border-[#e6ebf3] bg-white">
                <details
                  v-for="section in personaSections"
                  :key="section.id"
                  class="group px-[18px] border-t border-[#e6ebf3]"
                  @toggle="handlePersonaToggle(section.id, $event.target.open)"
                >
                  <summary class="relative -mx-[18px] flex cursor-pointer items-center gap-3 px-[18px] py-[18px] pr-14 text-left list-none">
                    <span
                      :class="['mt-0.5 flex h-[22px] w-[22px] items-center justify-center rounded-full border-2 shrink-0 transition-colors', checkClasses(section.completed)]"
                    >
                      <svg class="h-[10px] w-[10px]" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <path d="M4 8.5 7 11.5 12 5.5" />
                      </svg>
                    </span>
                    <div class="flex flex-col gap-1">
                      <span class="text-base font-semibold text-[#0f1824]">{{ section.title }}</span>
                      <span v-if="section.subtitle" class="text-sm text-[#5b6b7f]">{{ section.subtitle }}</span>
                    </div>
                    <span class="absolute right-[14px] top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-[8px] border border-[#e7edf6] text-xl font-semibold text-[#3a4960]">
                      <span v-if="personaOpenStates[section.id]">–</span>
                      <span v-else>+</span>
                    </span>
                  </summary>
                  <div class="-mx-[18px] border-t border-[#e6ebf3] bg-white px-[18px] py-[18px] pl-[48px] text-sm text-[#2c3a4e]">
                    <ul class="list-disc space-y-3 pl-4">
                      <li v-for="(item, itemIndex) in section.items" :key="`${section.id}-item-${itemIndex}`">
                        <span v-html="item"></span>
                      </li>
                    </ul>
                  </div>
                </details>
              </div>
            </details>

            <details class="group border-t border-[#e6ebf3] px-[18px]" @toggle="handleMarketToggle($event.target.open)">
              <summary class="relative -mx-[18px] flex cursor-pointer items-center gap-3 px-[18px] py-[18px] pr-14 text-left list-none">
                <span :class="['mt-0.5 flex h-[22px] w-[22px] items-center justify-center rounded-full border-2 shrink-0 transition-colors', checkClasses(marketAccess.completed)]">
                  <svg class="h-[10px] w-[10px]" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M4 8.5 7 11.5 12 5.5" />
                  </svg>
                </span>
                <div class="flex flex-col gap-1">
                  <span class="text-base font-semibold text-[#0f1824]">{{ marketAccess.title }}</span>
                  <span v-if="marketAccess.subtitle" class="text-sm text-[#5b6b7f]">{{ marketAccess.subtitle }}</span>
                </div>
                <span class="absolute right-[14px] top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-[8px] border border-[#e7edf6] text-xl font-semibold text-[#3a4960]">
                  <span v-if="marketOpen">–</span>
                  <span v-else>+</span>
                </span>
              </summary>
              <div class="-mx-[18px] border-t border-[#e6ebf3] bg-white px-[18px] py-[18px] pl-[48px] text-sm text-[#2c3a4e]">
                <ul class="list-disc space-y-3 pl-4">
                  <li v-for="(item, itemIndex) in marketAccess.items" :key="`market-item-${itemIndex}`">
                    <span v-html="item"></span>
                  </li>
                </ul>
              </div>
            </details>

            <details class="group border-t border-[#e6ebf3] px-[18px]" @toggle="handleMagazineToggle($event.target.open)">
              <summary class="relative -mx-[18px] flex cursor-pointer items-center gap-3 px-[18px] py-[18px] pr-14 text-left list-none">
                <span :class="['mt-0.5 flex h-[22px] w-[22px] items-center justify-center rounded-full border-2 shrink-0 transition-colors', checkClasses(magazineInfo.completed)]">
                  <svg class="h-[10px] w-[10px]" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M4 8.5 7 11.5 12 5.5" />
                  </svg>
                </span>
                <div class="flex flex-col gap-1">
                  <span class="text-base font-semibold text-[#0f1824]">{{ magazineInfo.title }}</span>
                  <span v-if="magazineInfo.subtitle" class="text-sm text-[#5b6b7f]">{{ magazineInfo.subtitle }}</span>
                </div>
                <span class="absolute right-[14px] top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-[8px] border border-[#e7edf6] text-xl font-semibold text-[#3a4960]">
                  <span v-if="magazineOpen">–</span>
                  <span v-else>+</span>
                </span>
              </summary>
              <div class="-mx-[18px] border-t border-[#e6ebf3] bg-white px-[18px] py-[18px] pl-[48px] text-sm text-[#2c3a4e]">
                <ul class="list-disc space-y-3 pl-4">
                  <li v-for="(item, itemIndex) in magazineInfo.items" :key="`magazine-item-${itemIndex}`">
                    <span v-html="item"></span>
                  </li>
                </ul>
              </div>
            </details>

            <div class="flex border-t border-[#e6ebf3] px-[18px] py-[18px]">
              <WhatsAppButton :phone-number="whatsappNumber" text="Ask team — WhatsApp" />
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import AppSeo from '@/components/AppSeo.vue';
import WhatsAppButton from '@/components/ui/WhatsAppButton.vue';

definePageMeta({
  layout: 'default'
});

const route = useRoute();
const videoRef = ref(null);

const quickSteps = ref([
  {
    key: 'checkin',
    title: '1. Check-in',
    completed: true
  },
  {
    key: 'wall',
    title: '2. Go to Press Wall',
    subtitle: 'Take your ready-to-share photo. Tag @emirates_fashionweek.',
    completed: false,
    details: [
      {
        label: 'All Visitors ready-to-share photos — here',
        url: 'https://meyou.id/efwss26/live'
      }
    ]
  }
]);

const openQuickSteps = ref({ wall: true });

const personaSections = ref([
  {
    id: 'local-beauty-service',
    title: 'Local Beauty Service? > Special Offer',
    key: 'persona-local-beauty-service',
    completed: false,
    items: [
      'Last Showcase Stand (Mon 10 Nov or Tue 11 Nov — 1000 AED/day).',
      'Bring a laptop with PPT/PDF presentation.',
      'Female EFW audience (hundreds).',
      '40 designer pop-ups + 40 local beauty services.',
      'Details: <a class="lobby-link" data-step="persona-local-beauty-service" href="https://emiratesfashionweeks.com/offer?wp=971585753302&tr" target="_blank" rel="noopener">Special offer</a>.',
      'Ask team on <a class="lobby-link" data-step="persona-local-beauty-service" href="https://wa.me/message/2F4O6ZT7YH5RG1" target="_blank" rel="noopener">WhatsApp</a>.'  
    ]
  },
  {
    id: 'stylist-buyer',
    title: 'Stylist / Buyer? > Join EFW PRO Fashion',
    key: 'persona-stylist-buyer',
    completed: false,
    items: [
      'Join EFW PRO Fashion program.',
      'Contact <a class="lobby-link" data-step="persona-stylist-buyer" href="https://www.instagram.com/potanina_ea" target="_blank" rel="noopener">Kate (RU)</a> or <a class="lobby-link" data-step="persona-stylist-buyer" href="https://www.instagram.com/valeriya_lioci" target="_blank" rel="noopener">Valery (EN)</a>.'
    ]
  },
  {
    id: 'influencer',
    title: 'Influencer? > Go to TV interview',
    key: 'persona-influencer',
    completed: false,
    items: [
      '5k+ followers? Go to TV interview.',
      'Tag <a class="lobby-link" data-step="persona-influencer" href="https://www.instagram.com/emirates_fashionweek" target="_blank" rel="noopener">@emirates_fashionweek</a>'
    ]
  },
  {
    id: 'media',
    title: 'Media?',
    key: 'persona-media',
    completed: false,
    items: [
      'PRO runway photos available next day on <a class="lobby-link" data-step="persona-media" href="https://emiratesfashionweek.com/gallery-fw-25" target="_blank" rel="noopener">emiratesfashionweek.com/gallery-fw-25</a>.'
    ]
  }
]);

const personaSectionsCompleted = computed(() =>
  personaSections.value.every((section) => section.completed)
);

const personaGroupClasses = computed(() => {
  if (personaSections.value.some((section) => section.completed)) {
    return 'border-emerald-500 text-emerald-500 bg-emerald-500/5';
  }
  return 'border-[#d5dbe8] text-[#d5dbe8] bg-white';
});

const personaOpenStates = ref({});
const personaGroupOpen = ref(false);
const marketOpen = ref(false);
const magazineOpen = ref(false);

const marketAccess = ref({
  key: 'market-access',
  title: '4. Beauty Market Access',
  subtitle: 'Mon 10 Nov or Tue 11 Nov',
  completed: false,
  items: [
    'Mon <strong>10 Nov</strong> 10:00–20:00 — Arjaan (<a class="lobby-link" data-step="market-access" href="https://maps.app.goo.gl/2hTYTS7m3Sef7b2f6" target="_blank" rel="noopener">here</a>)',
    'Tue <strong>11 Nov</strong> 10:00–20:00 — Arjaan (<a class="lobby-link" data-step="market-access" href="https://maps.app.goo.gl/2hTYTS7m3Sef7b2f6" target="_blank" rel="noopener">here</a>)',
    '40 designer pop-ups + 40 beauty services (nails, hair, facecare, body, dental, clinics, cosmetology).'
  ]
});

const magazineInfo = ref({
  key: 'magazine',
  title: '5. Special — Get your printed copy of Emirates Fashion Week Magazine',
  completed: false,
  items: [
    'New Magazine is available on <a class="lobby-link" data-step="magazine" href="https://magazine.emiratesfashionweek.com" target="_blank" rel="noopener">magazine.emiratesfashionweek.com</a>.'
  ]
});

const whatsappNumber = 'https://wa.me/message/2F4O6ZT7YH5RG1';

const pendingRedirectTimer = ref(null);

onMounted(() => {
  if (videoRef.value) {
    videoRef.value.play().catch(() => {
      // Автозапуск может быть заблокирован браузером
    });
  }

  personaSections.value.forEach((section) => {
    if (personaOpenStates.value[section.id] === undefined) {
      personaOpenStates.value[section.id] = false;
    }
  });

  applyStoredStepState();

  if (route.query.step === 'wall') {
    markStepCompleted('wall');
    pendingRedirectTimer.value = window.setTimeout(() => {
      window.location.href = 'https://meyou.id/efwss26/live';
    }, 3000);
  }

  if (typeof document !== 'undefined') {
    document.addEventListener('click', handleGlobalLinkClick, true);
  }
});

onBeforeUnmount(() => {
  if (typeof document !== 'undefined') {
    document.removeEventListener('click', handleGlobalLinkClick, true);
  }

  if (pendingRedirectTimer.value !== null) {
    window.clearTimeout(pendingRedirectTimer.value);
    pendingRedirectTimer.value = null;
  }
});

const checkClasses = (isCompleted) =>
  isCompleted
    ? 'border-emerald-500 text-emerald-500 bg-emerald-500/5'
    : 'border-[#d5dbe8] text-[#d5dbe8] bg-white';

const STEP_STORAGE_KEY = 'efwLobbyStepState';

const loadStoredSteps = () => {
  if (typeof window === 'undefined') return {};
  try {
    return JSON.parse(window.localStorage.getItem(STEP_STORAGE_KEY) ?? '{}');
  } catch (error) {
    console.error('Failed to load lobby steps from storage', error);
    return {};
  }
};

const saveStoredSteps = (state) => {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STEP_STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error('Failed to save lobby steps to storage', error);
  }
};

const setCompletionByKey = (stepKey) => {
  let updated = false;

  const quickStep = quickSteps.value.find((step) => step.key === stepKey);
  if (quickStep) {
    quickStep.completed = true;
    updated = true;
  }

  const personaSection = personaSections.value.find((section) => section.key === stepKey);
  if (personaSection) {
    personaSection.completed = true;
    updated = true;
  }

  // TODO: добавить отметку выполненности для market access и журнала, если понадобится
  // if (marketAccess.value.key === stepKey) {
  //   marketAccess.value.completed = true;
  //   updated = true;
  // }

  // if (magazineInfo.value.key === stepKey) {
  //   magazineInfo.value.completed = true;
  //   updated = true;
  // }

  return updated;
};

const applyStoredStepState = () => {
  const stored = loadStoredSteps();
  Object.keys(stored).forEach((key) => {
    if (stored[key]) {
      setCompletionByKey(key);
    }
  });
};

const markStepCompleted = (stepKey) => {
  if (!setCompletionByKey(stepKey)) return;

  const stored = loadStoredSteps();
  stored[stepKey] = true;
  saveStoredSteps(stored);
};

const handleGlobalLinkClick = (event) => {
  const target = event.target instanceof Element ? event.target.closest('.lobby-link') : null;
  if (!target) return;

  const stepKey = target.getAttribute('data-step');
  if (stepKey) {
    markStepCompleted(stepKey);
  }
};

const handleQuickStepToggle = (key, isOpen) => {
  openQuickSteps.value[key] = isOpen;
};

const handlePersonaToggle = (id, isOpen) => {
  personaOpenStates.value[id] = isOpen;
};

const handlePersonaGroupToggle = (isOpen) => {
  personaGroupOpen.value = isOpen;
};

const handleMarketToggle = (isOpen) => {
  marketOpen.value = isOpen;
};

const handleMagazineToggle = (isOpen) => {
  magazineOpen.value = isOpen;
};
</script>

<style scoped>
:deep(summary) {
  list-style: none;
}

:deep(summary::-webkit-details-marker) {
  display: none;
}

:deep(summary::marker) {
  content: '';
}

:deep(.lobby-link) {
  color: #0a84ff;
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 0.2s ease, text-decoration-color 0.2s ease;
}

:deep(.lobby-link:hover) {
  color: #074cbe;
  text-decoration-color: rgba(7, 76, 190, 0.7);
}
</style>

