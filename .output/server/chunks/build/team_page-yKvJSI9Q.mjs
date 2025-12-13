import { _ as _sfc_main$1 } from './AppSeo-BjG2yXmh.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-Bmms7Mh5.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { _ as _sfc_main$2 } from './TeamMemberCard-r8tUkBt4.mjs';
import { I as Image } from './4-2-AH5FmIKA.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'consola';
import 'vue-router';
import './v3-DpMGnK-K.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _sfc_main = {
  __name: "team_page",
  __ssrInlineRender: true,
  setup(__props) {
    const leadershipTeam = [
      {
        id: 1,
        name: "Danilov Stepan",
        position: "CEO & Founder",
        description: "Visionary leader with 15+ years in event management and AI innovation. Passionate about connecting fashion with technology.",
        photo: Image,
        linkedin: "https://linkedin.com/in/stepan-danilov",
        twitter: "https://twitter.com/stepan_danilov",
        instagram: "https://instagram.com/stepan_danilov"
      },
      {
        id: 2,
        name: "Sarah Al Hashimi",
        position: "Creative Director",
        description: "Award-winning fashion designer with over 15 years of experience in luxury fashion and creative direction.",
        photo: Image,
        linkedin: "https://linkedin.com/in/sarah-al-hashimi",
        instagram: "https://instagram.com/sarah_al_hashimi"
      },
      {
        id: 3,
        name: "Mohammed Rahman",
        position: "Head of Operations",
        description: "Expert in event management and logistics with a track record of successful fashion shows across the Middle East.",
        photo: Image,
        linkedin: "https://linkedin.com/in/mohammed-rahman",
        twitter: "https://twitter.com/mohammed_rahman"
      }
    ];
    const creativeTeam = [
      {
        id: 4,
        name: "Elena Petrova",
        position: "PR & Marketing Director",
        description: "Strategic communications professional specializing in luxury and fashion brands with international experience.",
        photo: Image,
        linkedin: "https://linkedin.com/in/elena-petrova",
        instagram: "https://instagram.com/elena_petrova"
      },
      {
        id: 5,
        name: "Fatima Al Mansouri",
        position: "Partnerships Manager",
        description: "Building strategic partnerships between fashion brands and cultural institutions across the UAE.",
        photo: Image,
        linkedin: "https://linkedin.com/in/fatima-al-mansouri",
        instagram: "https://instagram.com/fatima_al_mansouri"
      },
      {
        id: 6,
        name: "Aisha Johnson",
        position: "Fashion Curator",
        description: "Expert in emerging fashion trends and designer relations with a focus on sustainable fashion.",
        photo: Image,
        linkedin: "https://linkedin.com/in/aisha-johnson",
        instagram: "https://instagram.com/aisha_johnson"
      }
    ];
    const operationsTeam = [
      {
        id: 7,
        name: "James Chen",
        position: "Technical Director",
        description: "Innovation leader bringing cutting-edge technology to fashion events and digital experiences.",
        photo: Image,
        linkedin: "https://linkedin.com/in/james-chen",
        twitter: "https://twitter.com/james_chen"
      },
      {
        id: 8,
        name: "Maria Rodriguez",
        position: "Event Coordinator",
        description: "Detail-oriented professional ensuring flawless execution of all Emirates Fashion Week events.",
        photo: Image,
        linkedin: "https://linkedin.com/in/maria-rodriguez",
        instagram: "https://instagram.com/maria_rodriguez"
      },
      {
        id: 9,
        name: "Ahmed Hassan",
        position: "Logistics Manager",
        description: "Expert in venue management and logistics coordination for large-scale fashion events.",
        photo: Image,
        linkedin: "https://linkedin.com/in/ahmed-hassan",
        twitter: "https://twitter.com/ahmed_hassan"
      }
    ];
    const technologyTeam = [
      {
        id: 10,
        name: "David Kim",
        position: "AI Innovation Lead",
        description: "Leading the integration of artificial intelligence and machine learning in fashion technology.",
        photo: Image,
        linkedin: "https://linkedin.com/in/david-kim",
        twitter: "https://twitter.com/david_kim"
      },
      {
        id: 11,
        name: "Sophie Laurent",
        position: "Digital Experience Designer",
        description: "Creating immersive digital experiences that bridge the gap between physical and virtual fashion.",
        photo: Image,
        linkedin: "https://linkedin.com/in/sophie-laurent",
        instagram: "https://instagram.com/sophie_laurent"
      },
      {
        id: 12,
        name: "Omar Al-Zahra",
        position: "Blockchain Specialist",
        description: "Implementing blockchain technology for fashion authentication and digital asset management.",
        photo: Image,
        linkedin: "https://linkedin.com/in/omar-al-zahra",
        twitter: "https://twitter.com/omar_al_zahra"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppSeo = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50" }, _attrs))} data-v-fb9eaf4a>`);
      _push(ssrRenderComponent(_component_AppSeo, {
        title: "Our Team | Emirates Fashion Week",
        description: "Meet our dedicated team of professionals behind Emirates Fashion Week",
        keywords: ["team", "fashion week", "dubai", "emirates", "organizers", "leadership"]
      }, null, _parent));
      _push(`<section class="bg-gradient-to-br from-black to-gray-900 text-white py-20" data-v-fb9eaf4a><div class="container mx-auto px-4" data-v-fb9eaf4a><div class="max-w-4xl mx-auto text-center" data-v-fb9eaf4a><h1 class="text-5xl md:text-6xl font-bold mb-6" data-v-fb9eaf4a>Our Team</h1><p class="text-xl md:text-2xl text-gray-300 mb-8" data-v-fb9eaf4a> Meet the dedicated professionals who make Emirates Fashion Week possible </p><p class="text-lg text-gray-400 max-w-3xl mx-auto" data-v-fb9eaf4a> From creative visionaries to technical experts, our diverse team brings together decades of experience in fashion, events, and innovation to create unforgettable experiences. </p></div></div></section><section class="py-20" data-v-fb9eaf4a><div class="container mx-auto px-4" data-v-fb9eaf4a><div class="text-center mb-16" data-v-fb9eaf4a><h2 class="text-4xl md:text-5xl font-bold mb-6" data-v-fb9eaf4a>Leadership Team</h2><p class="text-xl text-gray-600 max-w-3xl mx-auto" data-v-fb9eaf4a> Our executive leadership brings together vision, experience, and passion for fashion innovation. </p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" data-v-fb9eaf4a><!--[-->`);
      ssrRenderList(leadershipTeam, (member) => {
        _push(ssrRenderComponent(_sfc_main$2, {
          key: member.id,
          member
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section><section class="py-20 bg-white" data-v-fb9eaf4a><div class="container mx-auto px-4" data-v-fb9eaf4a><div class="text-center mb-16" data-v-fb9eaf4a><h2 class="text-4xl md:text-5xl font-bold mb-6" data-v-fb9eaf4a>Creative Team</h2><p class="text-xl text-gray-600 max-w-3xl mx-auto" data-v-fb9eaf4a> The creative minds behind the visual and artistic direction of Emirates Fashion Week. </p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" data-v-fb9eaf4a><!--[-->`);
      ssrRenderList(creativeTeam, (member) => {
        _push(ssrRenderComponent(_sfc_main$2, {
          key: member.id,
          member
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section><section class="py-20" data-v-fb9eaf4a><div class="container mx-auto px-4" data-v-fb9eaf4a><div class="text-center mb-16" data-v-fb9eaf4a><h2 class="text-4xl md:text-5xl font-bold mb-6" data-v-fb9eaf4a>Operations Team</h2><p class="text-xl text-gray-600 max-w-3xl mx-auto" data-v-fb9eaf4a> The operational experts who ensure every detail of Emirates Fashion Week runs smoothly. </p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" data-v-fb9eaf4a><!--[-->`);
      ssrRenderList(operationsTeam, (member) => {
        _push(ssrRenderComponent(_sfc_main$2, {
          key: member.id,
          member
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section><section class="py-20 bg-white" data-v-fb9eaf4a><div class="container mx-auto px-4" data-v-fb9eaf4a><div class="text-center mb-16" data-v-fb9eaf4a><h2 class="text-4xl md:text-5xl font-bold mb-6" data-v-fb9eaf4a>Technology Team</h2><p class="text-xl text-gray-600 max-w-3xl mx-auto" data-v-fb9eaf4a> Innovation leaders bringing cutting-edge technology to fashion events and digital experiences. </p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" data-v-fb9eaf4a><!--[-->`);
      ssrRenderList(technologyTeam, (member) => {
        _push(ssrRenderComponent(_sfc_main$2, {
          key: member.id,
          member
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section><section class="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white" data-v-fb9eaf4a><div class="container mx-auto px-4" data-v-fb9eaf4a><div class="max-w-4xl mx-auto text-center" data-v-fb9eaf4a><h2 class="text-4xl md:text-5xl font-bold mb-6" data-v-fb9eaf4a>Join Our Team</h2><p class="text-xl mb-8" data-v-fb9eaf4a> Are you passionate about fashion, innovation, and creating unforgettable experiences? We&#39;re always looking for talented individuals to join our growing team. </p><div class="flex flex-col sm:flex-row gap-4 justify-center" data-v-fb9eaf4a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View Open Positions `);
          } else {
            return [
              createTextVNode(" View Open Positions ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/welcome",
        class: "border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Learn About EFW `);
          } else {
            return [
              createTextVNode(" Learn About EFW ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/team_page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const team_page = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fb9eaf4a"]]);

export { team_page as default };
//# sourceMappingURL=team_page-yKvJSI9Q.mjs.map
