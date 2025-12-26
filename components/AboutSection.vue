<template>
  <section ref="sectionRef" :id="props.id" :class="sectionClasses">
    <div class="space-y-4">
      
      <p class="text-xs md:text-sm text-black-70 leading-relaxed">
        The event is held twice a year, following the global fashion calendar with Spring/Summer (SS) and Autumn/Winter (AW) seasons. Emirates Fashion Week® serves as a major gateway for designers, fashion brands and beauty companies entering the Dubai and GCC markets, including the UAE, Saudi Arabia, Qatar, Kuwait, Bahrain and Oman.
      </p>
      
      <p class="text-xs md:text-sm text-black-70 leading-relaxed">
        Emirates Fashion Week® is more than a runway event. It operates as a full-scale fashion and beauty ecosystem, connecting designers, stylists, hair professionals, makeup artists, buyers, retailers, distributors, media and celebrities.
      </p>
      
      <p class="text-xs md:text-sm text-black-70 leading-relaxed">
        Within Emirates Fashion Week®, the following formats are presented:
      </p>
      
      <ul class="text-xs md:text-sm text-black-70 leading-relaxed ml-4 space-y-2 list-disc">
        <li>Fashion Shows showcasing international and regional designers</li>
        <li>Fashion Stylist Shows, curated by professional stylists</li>
        <li>Beauty & Hair Fashion Shows, where hairstylists, makeup artists and beauty brands demonstrate artistry, techniques and products</li>
        <li>Designer Showrooms, providing direct access to buyers, retailers and investors</li>
        <li>Pop-Up Market, where fashion and beauty brands present new collections, communicate directly with buyers and launch sales during and immediately after Fashion Week</li>
      </ul>
      
      <p class="text-xs md:text-sm text-black-70 leading-relaxed">
        Emirates Fashion Week® also publishes Emirates Fashion Week Magazine, available in a printed edition of 5,000 copies and an online digital format. The magazine highlights designers, fashion trends, beauty innovations and industry leaders.
      </p>
      
      <p class="text-xs md:text-sm text-black-70 leading-relaxed">
        As part of its professional mission, Emirates Fashion Week® hosts industry conferences, masterclasses and educational programs for fashion and beauty professionals.
      </p>
      
      <p class="text-xs md:text-sm text-black-70 leading-relaxed">
        Designers who become residents of Emirates Fashion Week® receive commercial opportunities including placement in multibrand stores, retail corners, boutique openings and immediate market entry in Dubai and the GCC.
      </p>
      
      <p class="text-xs md:text-sm text-black-70 leading-relaxed">
        Emirates Fashion Week® is a resident and official Fashion Event Media Hub of Shams Media City, a government-established media hub within the Shams ecosystem, which includes the Government Communication Office, Media Council and Sharjah Broadcasting Corporation.
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick, computed } from 'vue';
import { useAttrs } from 'vue';

defineOptions({ inheritAttrs: false });

const props = defineProps({
  id: {
    type: String,
    default: 'about'
  }
});

const attrs = useAttrs();
const sectionRef = ref(null);

const sectionClasses = computed(() => {
  const baseClasses = 'container mx-auto px-4';
  const attrsClass = attrs.class || '';
  return `${baseClasses} ${attrsClass}`.trim();
});

onMounted(() => {
  if (process.client && sectionRef.value && props.id) {
    nextTick(() => {
      if (sectionRef.value) {
        sectionRef.value.id = props.id;
      }
    });
  }
});
</script>

