import { _ as _sfc_main$1 } from "./AppSeo-D3mYHa43.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./TeamMemberCard-r8tUkBt4.js";
import { I as Image } from "./4-2-AH5FmIKA.js";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/hookable/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/unctx/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/radix3/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/defu/dist/defu.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/ufo/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/klona/dist/index.mjs";
import "./v3-DpMGnK-K.js";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = {
  __name: "team",
  __ssrInlineRender: true,
  setup(__props) {
    const teamMembers = [
      {
        id: 1,
        name: "Danilov Stepan",
        position: "CEO MeYou Arena Events",
        description: "Best ai-matchmaking solution",
        photo: Image,
        linkedin: "https://linkedin.com",
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        instagram: "https://instagram.com"
      },
      {
        id: 2,
        name: "Sarah Al Hashimi",
        position: "Creative Director",
        description: "Award-winning fashion designer with over 15 years of experience in luxury fashion.",
        photo: Image,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com"
      },
      {
        id: 3,
        name: "Mohammed Rahman",
        position: "Head of Operations",
        description: "Expert in event management and logistics with a track record of successful fashion shows.",
        photo: Image,
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com"
      },
      {
        id: 4,
        name: "Elena Petrova",
        position: "PR & Marketing Director",
        description: "Strategic communications professional specializing in luxury and fashion brands.",
        photo: Image,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com"
      },
      {
        id: 5,
        name: "James Chen",
        position: "Technical Director",
        description: "Innovation leader bringing cutting-edge technology to fashion events.",
        photo: Image,
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com"
      },
      {
        id: 6,
        name: "Fatima Al Mansouri",
        position: "Partnerships Manager",
        description: "Building strategic partnerships between fashion brands and cultural institutions.",
        photo: Image,
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppSeo = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-4 py-16" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppSeo, {
        title: "Our Team | Emirates Fashion Week",
        description: "Meet our dedicated team of professionals behind Emirates Fashion Week",
        keywords: ["team", "fashion week", "dubai", "emirates", "organizers"]
      }, null, _parent));
      _push(`<div class="max-w-3xl mb-16"><h1 class="text-4xl font-bold mb-4">Our Team</h1><p class="text-xl text-gray-600">Meet the dedicated professionals who make Emirates Fashion Week possible.</p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><!--[-->`);
      ssrRenderList(teamMembers, (member) => {
        _push(ssrRenderComponent(_sfc_main$2, {
          key: member.id,
          member
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/team.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=team-xtImdtwZ.js.map
