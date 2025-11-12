import { d as useRoute } from "../server.mjs";
import { u as useHead } from "./v3-DpMGnK-K.js";
import { useSSRContext } from "vue";
const CANONICAL_DOMAIN = "https://emiratesfashionweeks.com";
const _sfc_main = {
  __name: "AppSeo",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: "Emirates Fashion Week Dubai 2025"
    },
    description: {
      type: String,
      default: "Emirates Fashion Week Dubai 2025: Beauty meets business. Join us on 8–11 November, 2025 for an exclusive fashion and beauty event in Dubai."
    },
    image: {
      type: String,
      default: `${CANONICAL_DOMAIN}/seo-poster.png`
    },
    keywords: {
      type: String,
      default: "Emirates Fashion Week, Dubai Fashion, Beauty Services, Fashion Show 2025, Dubai Events"
    }
  },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    const canonicalPath = route.path === "/" ? "/" : route.path.endsWith("/") ? route.path : route.path + "/";
    useHead({
      title: props.title,
      meta: [
        // ВАЖНО: Этот сайт (emiratesfashionweek.com без "s") - дублирующий
        // Запрещаем индексацию, чтобы не мешать основному сайту
        { name: "robots", content: "noindex, nofollow" },
        { name: "description", content: props.description },
        { property: "og:type", content: "website" },
        {
          property: "og:url",
          content: `${CANONICAL_DOMAIN}${canonicalPath}`
        },
        {
          property: "og:title",
          content: props.title
        },
        {
          property: "og:description",
          content: props.description
        },
        {
          property: "og:site_name",
          content: "Emirates Fashion Week"
        },
        {
          property: "og:locale",
          content: "en_US"
        },
        {
          property: "og:image",
          content: props.image
        },
        {
          property: "og:image:secure_url",
          content: props.image
        },
        {
          property: "og:image:type",
          content: "image/png"
        },
        {
          property: "og:image:width",
          content: "1200"
        },
        {
          property: "og:image:height",
          content: "630"
        },
        {
          property: "og:image:alt",
          content: "Emirates Fashion Week Dubai 2025 - 8-11 November"
        },
        {
          name: "keywords",
          content: props.keywords
        },
        {
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          name: "twitter:image",
          content: props.image
        }
      ],
      link: [
        {
          rel: "canonical",
          href: `${CANONICAL_DOMAIN}${canonicalPath}`
        }
      ],
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Emirates Fashion Week",
            url: CANONICAL_DOMAIN,
            logo: `${CANONICAL_DOMAIN}/favicon-512x512.png`,
            sameAs: [
              "https://www.instagram.com/emiratesfashionweek/",
              "https://www.youtube.com/@emiratesfashionweek"
            ],
            contactPoint: [{
              "@type": "ContactPoint",
              contactType: "customer support",
              email: "team@emiratesfashionweeks.com",
              telephone: "+971569534134"
            }]
          })
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Emirates Fashion Week",
            url: CANONICAL_DOMAIN,
            potentialAction: {
              "@type": "SearchAction",
              target: `https://www.google.com/search?q=site:www.emiratesfashionweek.com+{search_term_string}`,
              "query-input": "required name=search_term_string"
            }
          })
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppSeo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=AppSeo-D3mYHa43.js.map
