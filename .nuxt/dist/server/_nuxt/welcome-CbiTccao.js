import { ref, readonly, computed, watch, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { I as Image1 } from "./1-BC3ivLuv.js";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/hookable/dist/index.mjs";
import { u as useHead } from "./v3-DpMGnK-K.js";
import { _ as _export_sfc, d as useRoute } from "../server.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/@unhead/vue/dist/index.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/unctx/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/radix3/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/defu/dist/defu.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/ufo/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/klona/dist/index.mjs";
const LOCAL_DESIGNERS_DATA = {
  "8": [
    { name: "NOURA COUTURE", country: "UAE", day: "8", month: "November", confirmed: true },
    { name: "ANNET", country: "RUSSIA", day: "8", month: "November", confirmed: true },
    { name: "LESNIKOVA DRESSES", country: "RUSSIA", day: "8", month: "November", confirmed: true },
    { name: "SOLANA COUTURE", country: "USA", day: "8", month: "November", confirmed: true },
    { name: "LORA COUTURE", country: "AZERBAIJAN", day: "8", month: "November", confirmed: true },
    { name: "ETNO FRESH", country: "RUSSIA", day: "8", month: "November", confirmed: true },
    { name: "BELIZE", country: "GERMANY", day: "8", month: "November", confirmed: true },
    { name: "MOONSOUL", country: "KIRGHIZIAN", day: "8", month: "November", confirmed: true },
    { name: "OLECIA ARKHIPOVA", country: "RUSSIA", day: "8", month: "November", confirmed: true },
    { name: "MARIANNE MOORE", country: "", day: "8", month: "November", confirmed: true },
    { name: "IGARNITUR", country: "POLAND", day: "8", month: "November", confirmed: true },
    { name: "HERBELIN", country: "POLAND", day: "8", month: "November", confirmed: true },
    { name: "DEVU", country: "POLAND", day: "8", month: "November", confirmed: true }
  ],
  "9": [
    { name: "ALEXANDRA AMA CABINET", country: "RUSSIA", day: "9", month: "November", confirmed: true },
    { name: "ARNI FASHION", country: "USA/INDIAN", day: "9", month: "November", confirmed: true },
    { name: "RUBASHKA", country: "RUSSIA", day: "9", month: "November", confirmed: true },
    { name: "SNIM", country: "KAZAKHSTAN", day: "9", month: "November", confirmed: true },
    { name: "KIBOVSKAYA", country: "RUSSIA", day: "9", month: "November", confirmed: true },
    { name: "FYOR", country: "UAE", day: "9", month: "November", confirmed: true },
    { name: "POLINA TROPILLO", country: "RUSSIA", day: "9", month: "November", confirmed: true },
    { name: "OLGA BOGDANOVA", country: "RUSSIA", day: "9", month: "November", confirmed: true },
    { name: "ELENA ROMANOVA", country: "RUSSIA", day: "9", month: "November", confirmed: true }
  ]
};
const updateLocalDesignersData = (newData) => {
  console.log("🔄 Обновляем локальные данные дизайнеров:", newData);
  return newData;
};
const useDesigners = () => {
  const designers = ref(LOCAL_DESIGNERS_DATA);
  const loading = ref(false);
  const error = ref(null);
  const isDataUpdated = ref(false);
  const fetchDesigners = async () => {
    if (isDataUpdated.value) {
      console.log("📋 Данные уже обновлены, пропускаем запрос");
      return;
    }
    loading.value = true;
    error.value = null;
    try {
      console.log("🌐 Запрашиваем актуальные данные дизайнеров из Google Sheets...");
      const SPREADSHEET_ID = "1hr5eZ148EVDLhAdcY6L1t_PyNGlBtlQNIKm1jGhrQhw";
      const CSV_URL = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/export?format=csv&gid=0`;
      const response = await fetch(CSV_URL);
      if (!response.ok) {
        throw new Error(`CSV export error: ${response.statusText}`);
      }
      const csvText = await response.text();
      console.log("📊 Получены CSV данные:", csvText.substring(0, 200) + "...");
      const lines = csvText.split("\n");
      const rows = lines.filter((line) => line.trim()).map((line) => {
        const values = [];
        let current = "";
        let inQuotes = false;
        for (let i = 0; i < line.length; i++) {
          const char = line[i];
          if (char === '"') {
            inQuotes = !inQuotes;
          } else if (char === "," && !inQuotes) {
            values.push(current.trim());
            current = "";
          } else {
            current += char;
          }
        }
        values.push(current.trim());
        return values;
      });
      const designersData = rows.slice(1).map((row, index) => ({
        name: row[0] || "",
        country: row[1] || "",
        day: row[2] || "",
        month: row[3] || "",
        confirmed: row[4] === "TRUE"
      })).filter((designer) => designer.name);
      const designersByDay = designersData.reduce((acc, designer) => {
        const day = designer.day;
        if (!acc[day]) {
          acc[day] = [];
        }
        acc[day].push(designer);
        return acc;
      }, {});
      designers.value = designersByDay;
      updateLocalDesignersData(designersByDay);
      isDataUpdated.value = true;
      console.log("✅ Данные дизайнеров обновлены из Google Sheets:", designers.value);
    } catch (err) {
      error.value = err instanceof Error ? err.message : "Unknown error";
      console.error("❌ Ошибка запроса:", error.value);
      console.log("📋 Используем локальные данные (уже загружены)");
    } finally {
      loading.value = false;
    }
  };
  const maskName = (name) => {
    return name || "";
  };
  const formatDesigner = (designer) => {
    const maskedName = maskName(designer.name);
    const country = designer.country;
    if (designer.confirmed) {
      return `• ${maskedName} - ${country}`;
    } else {
      return `• ${maskedName} - ${country} *PENDING MUTUAL APPROVAL`;
    }
  };
  const getDesignersByDay = (day) => {
    return designers.value[day] || [];
  };
  const getFormattedDesignersByDay = (day) => {
    const dayDesigners = getDesignersByDay(day);
    return dayDesigners.map(formatDesigner);
  };
  return {
    designers: readonly(designers),
    loading: readonly(loading),
    error: readonly(error),
    isDataUpdated: readonly(isDataUpdated),
    fetchDesigners,
    maskName,
    formatDesigner,
    getDesignersByDay,
    getFormattedDesignersByDay
  };
};
const barWidth = 3;
const barHeight = 30;
const _sfc_main = {
  __name: "welcome",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Welcome - Emirates Fashion Week Dubai 2025",
      meta: [
        {
          name: "description",
          content: "Welcome to Emirates Fashion Week Dubai 2025. Your exclusive invitation to join us for three remarkable days of style, beauty, and meaningful connections."
        },
        {
          name: "keywords",
          content: "Emirates Fashion Week Welcome, Dubai Fashion Event, Fashion Week Invitation, Guest Welcome Dubai"
        },
        {
          property: "og:title",
          content: "Welcome - Emirates Fashion Week Dubai 2025"
        },
        {
          property: "og:description",
          content: "Welcome to Emirates Fashion Week Dubai 2025. Your exclusive invitation to join us for three remarkable days of style, beauty, and meaningful connections."
        },
        {
          property: "og:image",
          content: "https://emiratesfashionweeks.com/seo-poster.png"
        },
        {
          property: "og:type",
          content: "website"
        },
        {
          name: "twitter:card",
          content: "summary_large_image"
        }
      ]
    });
    const route = useRoute();
    const guestName = computed(() => {
      const name = route.query.by || "Guest";
      return name.replace(/\+/g, " ");
    });
    const defaultScheduleHours = {
      8: { start: 6, end: 10 },
      // 8 NOV: 6PM–10PM
      9: { start: 6, end: 10 },
      // 9 NOV: 6PM–10PM
      10: { start: 10, end: 6 },
      // 10 NOV: 10AM–6PM
      11: { start: 10, end: 6 }
      // 11 NOV: 10AM–6PM
    };
    const parsedDaysWithHours = computed(() => {
      const daysParam = route.query.days;
      console.log("🔍 Raw days parameter:", daysParam);
      if (!daysParam) {
        console.log("❌ No days parameter found");
        return null;
      }
      const result = {};
      const dayEntries = daysParam.toString().split(/[+\s]/).filter((entry) => entry.length > 0);
      console.log("📝 Day entries:", dayEntries);
      dayEntries.forEach((entry) => {
        const trimmed = entry.trim();
        if (trimmed.length === 0) return;
        let day, startHour = null, period = null;
        const hasAM = trimmed.toUpperCase().includes("AM");
        const hasPM = trimmed.toUpperCase().includes("PM");
        if (hasAM || hasPM) {
          period = hasAM ? "AM" : "PM";
          const numPart = trimmed.replace(/AM|PM|am|pm/gi, "");
          if (numPart.length === 2) {
            day = parseInt(numPart[0]);
            startHour = parseInt(numPart[1]);
          } else if (numPart.length === 3) {
            const firstDigit = parseInt(numPart[0]);
            if (firstDigit >= 8 && firstDigit <= 9) {
              day = parseInt(numPart[0]);
              startHour = parseInt(numPart.substring(1));
            } else {
              day = parseInt(numPart.substring(0, 2));
              startHour = parseInt(numPart[2]);
            }
          } else if (numPart.length === 4) {
            day = parseInt(numPart.substring(0, 2));
            startHour = parseInt(numPart.substring(2));
          }
        } else {
          if (trimmed.length === 1) {
            day = parseInt(trimmed);
          } else if (trimmed.length === 2) {
            const num = parseInt(trimmed);
            if (num >= 10 && num <= 11) {
              day = num;
            } else {
              day = parseInt(trimmed[0]);
              startHour = parseInt(trimmed[1]);
              period = "PM";
            }
          } else if (trimmed.length === 3) {
            day = parseInt(trimmed.substring(0, 2));
            startHour = parseInt(trimmed[2]);
            period = "PM";
          }
        }
        if (!isNaN(day)) {
          result[day] = startHour !== null ? { hour: startHour, period } : null;
        }
      });
      return Object.keys(result).length > 0 ? result : null;
    });
    const visibleDays = computed(() => {
      const parsed = parsedDaysWithHours.value;
      if (!parsed) {
        return [8, 9, 10, 11];
      }
      return Object.keys(parsed).map((day) => parseInt(day));
    });
    const scheduleHours = computed(() => {
      const parsed = parsedDaysWithHours.value;
      const hours = { ...defaultScheduleHours };
      if (parsed) {
        console.log("🔍 Parsed days with hours:", parsed);
        Object.keys(parsed).forEach((day) => {
          const dayNum = parseInt(day);
          const customTime = parsed[day];
          console.log(`📅 Day ${dayNum}:`, customTime);
          if (hours[dayNum] && customTime !== null) {
            hours[dayNum] = {
              ...hours[dayNum],
              start: customTime.hour,
              startPeriod: customTime.period || "PM"
              // Default to PM if not specified
            };
            console.log(`✅ Updated day ${dayNum} to:`, hours[dayNum]);
          }
        });
      }
      console.log("📋 Final schedule hours:", hours);
      return hours;
    });
    const getTimePeriod = (day) => {
      const hours = scheduleHours.value[day];
      if (hours?.startPeriod) {
        return hours.startPeriod;
      }
      return hours?.start >= 10 && hours?.start <= 12 ? "AM" : "PM";
    };
    const selectedDates = ref({
      8: "6PM",
      // Default: 8(6PM)
      9: "6PM",
      // Default: 9(6PM)
      10: "on",
      // Default: 10 (on without specific time)
      11: "on"
      // Default: 11 (on without specific time)
    });
    const formatDateButton = (day) => {
      const state = selectedDates.value[day];
      if (state === "off" || state === "on") {
        return day;
      } else {
        return { day, time: state };
      }
    };
    const showQRModal = ref(false);
    const newInviterName = ref("Marina Krapivina");
    ref(false);
    const isDesktop = ref(false);
    const showCopyNotification = ref(false);
    ref("Marina Krapivina");
    const hasInputChanged = ref(false);
    const eventQRCodeUrl = computed(() => {
      return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent("https://meyou.id/efwss26")}`;
    });
    const showRegistrationModal = ref(false);
    const showConfirmationModal = ref(false);
    const isSubmitting = ref(false);
    const registrationForm = ref({
      name: "",
      company: "",
      email: ""
    });
    const qrCodeUrl = ref("");
    const { designers } = useDesigners();
    const day8Designers = ref([]);
    const day9Designers = ref([]);
    const barcodeValue = ref("");
    const barcodeBits = ref([]);
    const getConfirmedDesigners = (day) => {
      const dayDesigners = designers.value[day] || [];
      return dayDesigners.filter((designer) => designer.confirmed).filter((designer) => !["NOURA COUTURE", "POLINA TROPILLO"].includes((designer.name || "").toUpperCase())).map((designer) => {
        const country = designer.country || "";
        const isValidCountry = country && isNaN(Number(country)) && country !== "8" && country !== "9";
        return isValidCountry ? `${designer.name} - ${country}` : designer.name;
      });
    };
    watch(designers, () => {
      day8Designers.value = getConfirmedDesigners("8");
      day9Designers.value = getConfirmedDesigners("9");
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-f2664ed8><div class="container mx-auto px-4 py-4 md:py-6" data-v-f2664ed8><div class="max-w-6xl mx-auto" data-v-f2664ed8><section class="md:mb-[76px] mb-[56px]" data-v-f2664ed8><div class="flex flex-col md:flex-row gap-6 md:gap-8" data-v-f2664ed8><div class="text-center md:text-left flex-1" data-v-f2664ed8><h1 class="text-xl md:text-2xl xl:text-3xl mb-3 md:mb-4" data-v-f2664ed8><strong class="uppercase mb-2 block text-2xl md:text-3xl xl:text-4xl" data-v-f2664ed8>Your Invitation</strong><div data-v-f2664ed8>to Emirates Fashion Week</div><div data-v-f2664ed8>by <span class="inline-block px-2 py-0.5 rounded-md bg-black text-white cursor-pointer select-none" data-v-f2664ed8>${ssrInterpolate(unref(guestName))}*</span></div></h1><p class="text-sm md:text-base text-gray-600 italic mb-4 md:mb-6" data-v-f2664ed8> (*PRO/Premium tier, authorized to invite) </p><div class="mb-4 md:mb-6" data-v-f2664ed8><div class="overflow-x-auto" data-v-f2664ed8><table class="min-w-full mb-3" data-v-f2664ed8><tbody data-v-f2664ed8>`);
      if (unref(visibleDays).includes(8)) {
        _push(`<tr class="border-b border-gray-100" data-v-f2664ed8><td class="py-2 pl-2 md:pr-2 text-sm md:text-base xl:text-lg font-medium text-left" data-v-f2664ed8><a class="hover:text-blue-600 transition-colors" target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=NWNpMTI0dnZ2bWhiNmtmZ3YzNWx1Yml2dXAgYTQ4Y2U2YjY4MzIwMDcxNjc0YmIxMTAxNmUxNDg2YTAzY2M0ZTdjMGE0NTJjZmMzYjM0NTAzZTI2OTYzYzIyY0Bn&amp;tmsrc=a48ce6b68320071674bb11016e1486a03cc4e7c0a452cfc3b34503e26963c22c%40group.calendar.google.com" data-v-f2664ed8>8 NOV | SAT</a><br data-v-f2664ed8>${ssrInterpolate(unref(scheduleHours)[8].start)}${ssrInterpolate(getTimePeriod(8))}–${ssrInterpolate(unref(scheduleHours)[8].end)}PM</td><td class="py-2 pr-2 text-sm md:text-base xl:text-lg text-gray-600" data-v-f2664ed8>PRÊT-À-PORTER WOMEN&#39;S<br data-v-f2664ed8>&amp; MEN&#39;S COLLECTIONS SS 26</td></tr>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(visibleDays).includes(9)) {
        _push(`<tr class="border-b border-gray-100" data-v-f2664ed8><td class="py-2 pl-2 md:pr-2 text-sm md:text-base xl:text-lg font-medium text-left" data-v-f2664ed8><a class="hover:text-blue-600 transition-colors" target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=N25sY3ExZXVtYjczNW12bmR0ZnR0cGd0OXAgYTQ4Y2U2YjY4MzIwMDcxNjc0YmIxMTAxNmUxNDg2YTAzY2M0ZTdjMGE0NTJjZmMzYjM0NTAzZTI2OTYzYzIyY0Bn&amp;tmsrc=a48ce6b68320071674bb11016e1486a03cc4e7c0a452cfc3b34503e26963c22c%40group.calendar.google.com" data-v-f2664ed8>9 NOV | SUN</a><br data-v-f2664ed8>${ssrInterpolate(unref(scheduleHours)[9].start)}${ssrInterpolate(getTimePeriod(9))}–${ssrInterpolate(unref(scheduleHours)[9].end)}PM</td><td class="py-2 pr-2 text-sm md:text-base xl:text-lg text-gray-600" data-v-f2664ed8>READY-TO-WEAR COLLECTIONS<br data-v-f2664ed8>&amp; Kid&#39;s collections Pop-Up Market</td></tr>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(visibleDays).includes(10)) {
        _push(`<tr class="border-b border-gray-100" data-v-f2664ed8><td class="py-2 pl-2 md:pr-2 text-sm md:text-base xl:text-lg font-medium text-left" data-v-f2664ed8><a class="hover:text-blue-600 transition-colors" target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=NTFzdXBkMjQzamhzanR0cjRiajdhb2J2Z3AgYTQ4Y2U2YjY4MzIwMDcxNjc0YmIxMTAxNmUxNDg2YTAzY2M0ZTdjMGE0NTJjZmMzYjM0NTAzZTI2OTYzYzIyY0Bn&amp;tmsrc=a48ce6b68320071674bb11016e1486a03cc4e7c0a452cfc3b34503e26963c22c%40group.calendar.google.com" data-v-f2664ed8>10 NOV | MON</a><br data-v-f2664ed8>${ssrInterpolate(unref(scheduleHours)[10].start)}${ssrInterpolate(getTimePeriod(10))}–${ssrInterpolate(unref(scheduleHours)[10].end)}PM</td><td class="py-2 pr-2 text-sm md:text-lg text-gray-600" data-v-f2664ed8>FASHION &amp; BEAUTY SERVICES<br data-v-f2664ed8>POP-UP MARKET </td></tr>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(visibleDays).includes(11)) {
        _push(`<tr data-v-f2664ed8><td class="py-2 pl-2 md:pr-2 text-sm md:text-base xl:text-lg font-medium text-left" data-v-f2664ed8><a class="hover:text-blue-600 transition-colors" target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=MG5qMjc3aXFtczQ2MmgyZWhlaGJ0dTNzMzggYTQ4Y2U2YjY4MzIwMDcxNjc0YmIxMTAxNmUxNDg2YTAzY2M0ZTdjMGE0NTJjZmMzYjM0NTAzZTI2OTYzYzIyY0Bn&amp;tmsrc=a48ce6b68320071674bb11016e1486a03cc4e7c0a452cfc3b34503e26963c22c%40group.calendar.google.com" data-v-f2664ed8>11 NOV | TUE</a><br data-v-f2664ed8>${ssrInterpolate(unref(scheduleHours)[11].start)}${ssrInterpolate(getTimePeriod(11))}–${ssrInterpolate(unref(scheduleHours)[11].end)}PM</td><td class="py-2 pr-2 text-sm md:text-base xl:text-lg text-gray-600" data-v-f2664ed8>FASHION &amp; WELLNESS SERVICES<br data-v-f2664ed8>POP-UP MARKET</td></tr>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</tbody></table></div><div class="flex justify-center mb-6" data-v-f2664ed8><button class="flex items-center gap-2 rounded-3xl transition-all duration-700 bg-black text-white hover:bg-black/90 hover:scale-105 active:scale-95 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-medium shadow-lg hover:shadow-xl animate-pulse" style="${ssrRenderStyle({ "animation-duration": "3s" })}" data-v-f2664ed8><span data-v-f2664ed8>Join &amp; Add to Calendar</span></button></div><div class="mt-4 mb-6" data-v-f2664ed8><div class="flex flex-col md:flex-row-reverse items-center justify-center md:justify-start gap-2" data-v-f2664ed8><p class="text-sm md:text-base text-gray-600 md:ml-2 text-center md:text-left" data-v-f2664ed8> Admit: You +1. This page is your final invitation. No emails, tickets, or confirmations will follow. </p>`);
      if (unref(barcodeBits).length) {
        _push(`<svg${ssrRenderAttr("width", barWidth * unref(barcodeBits).length)}${ssrRenderAttr("height", barHeight)} role="img" aria-label="Access barcode" class="w-full md:max-w-[260px]" data-v-f2664ed8><rect${ssrRenderAttr("width", barWidth * unref(barcodeBits).length)}${ssrRenderAttr("height", barHeight)} fill="#ffffff" data-v-f2664ed8></rect><!--[-->`);
        ssrRenderList(unref(barcodeBits), (bit, idx) => {
          _push(`<rect${ssrRenderAttr("x", idx * barWidth)} y="0"${ssrRenderAttr("width", bit === 1 ? Math.max(1, barWidth - 0.5) : 0)}${ssrRenderAttr("height", bit === 1 ? barHeight : 0)} fill="#000000" data-v-f2664ed8></rect>`);
        });
        _push(`<!--]--></svg>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><p class="mt-2 text-center md:text-left text-xs text-gray-500 select-all" data-v-f2664ed8> Code: ${ssrInterpolate(unref(barcodeValue))}</p></div></div></div><div class="flex flex-col items-center justify-center relative flex-shrink-0" data-v-f2664ed8><div class="w-full max-w-md mx-auto rounded-lg shadow-md overflow-hidden relative" data-v-f2664ed8><img${ssrRenderAttr("src", unref(Image1))} alt="Emirates Fashion Week 2025" class="w-full md:h-auto md:max-h-unset max-h-[65vh] h-[65vh] object-cover md:max-w-md hidden lg:block" data-v-f2664ed8></div></div></div></section><section class="md:mb-[76px] mb-[56px]" data-v-f2664ed8><h2 class="text-2xl md:text-3xl font-bold uppercase text-left mb-8" data-v-f2664ed8>Location</h2><div class="grid grid-cols-1 lg:grid-cols-2 gap-8" data-v-f2664ed8><div class="border border-gray-300 rounded-lg p-4" data-v-f2664ed8><h3 class="text-lg md:text-xl font-bold mb-4" data-v-f2664ed8>Google Maps</h3><div class="w-full" data-v-f2664ed8><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28905.594122284634!2d55.128635593056764!3d25.095115196678794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b0072bb3c61%3A0x3a456f0a9996fc2c!2sSkylight%20Gallery!5e0!3m2!1sru!2sae!4v1757756744547!5m2!1sru!2sae" width="100%" height="450" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-v-f2664ed8></iframe></div></div><div class="border border-gray-300 rounded-lg p-4" data-v-f2664ed8><h3 class="text-lg md:text-xl font-bold mb-4" data-v-f2664ed8>Skylight Gallery Arjaan by Rotana</h3><div class="w-full" data-v-f2664ed8><iframe src="https://www.google.com/maps/embed?pb=!4v1757756521377!6m8!1m7!1sFD00YnqiTe4Mfh-iCWTNNA!2m2!1d25.09490902264704!2d55.15351383099734!3f12.933478943500432!4f12.986052488037629!5f0.7820865974627469" width="100%" height="450" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-v-f2664ed8></iframe></div></div></div></section>`);
      if (unref(visibleDays).includes(8) || unref(visibleDays).includes(9)) {
        _push(`<div class="mt-8 md:mt-12" data-v-f2664ed8><h2 class="text-2xl md:text-3xl font-bold uppercase text-left mb-4 md:mb-6" data-v-f2664ed8>Fashion Show</h2><div class="hidden md:block" data-v-f2664ed8><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-f2664ed8>`);
        if (unref(visibleDays).includes(8)) {
          _push(`<div class="bg-white p-4 rounded-lg shadow-md" data-v-f2664ed8><h3 class="text-base font-medium text-gray-800 mb-3" data-v-f2664ed8>November 8, 2025</h3><div class="space-y-3" data-v-f2664ed8><div data-v-f2664ed8><h4 class="text-base md:text-lg font-medium text-gray-700" data-v-f2664ed8>Doors open 6PM</h4><ul class="mt-1 space-y-1" data-v-f2664ed8><!--[-->`);
          ssrRenderList(unref(day8Designers), (designer) => {
            _push(`<li class="text-sm text-gray-600" data-v-f2664ed8>${ssrInterpolate(designer)}</li>`);
          });
          _push(`<!--]--></ul></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(visibleDays).includes(9)) {
          _push(`<div class="bg-white p-4 rounded-lg shadow-md" data-v-f2664ed8><h3 class="text-base font-medium text-gray-800 mb-3" data-v-f2664ed8>November 9, 2025</h3><div class="space-y-3" data-v-f2664ed8><div data-v-f2664ed8><h4 class="text-base md:text-lg font-medium text-gray-700" data-v-f2664ed8>Doors open 6PM</h4><ul class="mt-1 space-y-1" data-v-f2664ed8><!--[-->`);
          ssrRenderList(unref(day9Designers), (designer) => {
            _push(`<li class="text-sm text-gray-600" data-v-f2664ed8>${ssrInterpolate(designer)}</li>`);
          });
          _push(`<!--]--></ul><p class="text-sm text-gray-700 font-semibold mt-2" data-v-f2664ed8>FASHION SHOW BY TOP FASHION STYLISTS</p></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="md:hidden" data-v-f2664ed8><div class="bg-white p-4 rounded-lg shadow-md" data-v-f2664ed8><h3 class="hidden md:block text-2xl md:text-3xl font-bold uppercase text-gray-800 mb-3 text-left" data-v-f2664ed8>Fashion Show</h3><div class="space-y-4" data-v-f2664ed8>`);
        if (unref(visibleDays).includes(8)) {
          _push(`<div data-v-f2664ed8><h4 class="text-sm font-medium text-gray-700 mb-2" data-v-f2664ed8>November 8, 2025</h4><div class="space-y-3" data-v-f2664ed8><div data-v-f2664ed8><h5 class="text-sm font-medium text-gray-600" data-v-f2664ed8>Doors open 6PM</h5><ul class="mt-1 space-y-1" data-v-f2664ed8><!--[-->`);
          ssrRenderList(unref(day8Designers), (designer) => {
            _push(`<li class="text-xs text-gray-600" data-v-f2664ed8>${ssrInterpolate(designer)}</li>`);
          });
          _push(`<!--]--></ul></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(visibleDays).includes(9)) {
          _push(`<div data-v-f2664ed8><h4 class="text-sm font-medium text-gray-700 mb-2" data-v-f2664ed8>November 9, 2025</h4><div class="space-y-3" data-v-f2664ed8><div data-v-f2664ed8><h5 class="text-sm font-medium text-gray-600" data-v-f2664ed8>Doors open 6PM</h5><ul class="mt-1 space-y-1" data-v-f2664ed8><!--[-->`);
          ssrRenderList(unref(day9Designers), (designer) => {
            _push(`<li class="text-xs text-gray-600" data-v-f2664ed8>${ssrInterpolate(designer)}</li>`);
          });
          _push(`<!--]--></ul><p class="text-xs text-gray-700 font-semibold mt-2" data-v-f2664ed8>FASHION SHOW BY TOP FASHION STYLISTS</p></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (unref(showQRModal)) {
        _push(`<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" data-v-f2664ed8><div class="bg-white rounded-lg p-6 max-w-sm w-full text-center relative" data-v-f2664ed8><button class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors text-xl" title="Close" data-v-f2664ed8> × </button><h2 class="text-xl mb-2" data-v-f2664ed8>Emirates Fashion Week</h2><h3 class="text-xl mb-2" data-v-f2664ed8>Your Exclusive invitation</h3><p class="text-xl font-bold text-gray-800 mb-4" data-v-f2664ed8>Scan for Details &amp; Confirm</p><div class="mb-6" data-v-f2664ed8><img${ssrRenderAttr("src", unref(qrCodeUrl))} alt="QR Code for invitation" class="mx-auto w-48 h-48" data-v-f2664ed8></div><div class="mb-4" data-v-f2664ed8><div class="flex flex-wrap gap-2 justify-center" data-v-f2664ed8><button class="${ssrRenderClass([
          "px-3 py-2 rounded text-sm font-medium transition-colors",
          unref(selectedDates)[8] && unref(selectedDates)[8] !== "off" ? "bg-black text-white" : "bg-gray-200 text-gray-500"
        ])}" data-v-f2664ed8>`);
        if (typeof formatDateButton(8) === "object") {
          _push(`<!--[-->${ssrInterpolate(formatDateButton(8).day)} <sup class="text-[8px]" data-v-f2664ed8>${ssrInterpolate(formatDateButton(8).time)}</sup><!--]-->`);
        } else {
          _push(`<!--[-->${ssrInterpolate(formatDateButton(8))}<!--]-->`);
        }
        _push(`</button><button class="${ssrRenderClass([
          "px-3 py-2 rounded text-sm font-medium transition-colors",
          unref(selectedDates)[9] && unref(selectedDates)[9] !== "off" ? "bg-black text-white" : "bg-gray-200 text-gray-500"
        ])}" data-v-f2664ed8>`);
        if (typeof formatDateButton(9) === "object") {
          _push(`<!--[-->${ssrInterpolate(formatDateButton(9).day)} <sup class="text-[8px]" data-v-f2664ed8>${ssrInterpolate(formatDateButton(9).time)}</sup><!--]-->`);
        } else {
          _push(`<!--[-->${ssrInterpolate(formatDateButton(9))}<!--]-->`);
        }
        _push(`</button><button class="${ssrRenderClass([
          "px-3 py-2 rounded text-sm font-medium transition-colors",
          unref(selectedDates)[10] && unref(selectedDates)[10] !== "off" ? "bg-black text-white" : "bg-gray-200 text-gray-500"
        ])}" data-v-f2664ed8>`);
        if (typeof formatDateButton(10) === "object") {
          _push(`<!--[-->${ssrInterpolate(formatDateButton(10).day)} <sup class="text-[8px]" data-v-f2664ed8>${ssrInterpolate(formatDateButton(10).time)}</sup><!--]-->`);
        } else {
          _push(`<!--[-->${ssrInterpolate(formatDateButton(10))}<!--]-->`);
        }
        _push(`</button><button class="${ssrRenderClass([
          "px-3 py-2 rounded text-sm font-medium transition-colors",
          unref(selectedDates)[11] && unref(selectedDates)[11] !== "off" ? "bg-black text-white" : "bg-gray-200 text-gray-500"
        ])}" data-v-f2664ed8>`);
        if (typeof formatDateButton(11) === "object") {
          _push(`<!--[-->${ssrInterpolate(formatDateButton(11).day)} <sup class="text-[8px]" data-v-f2664ed8>${ssrInterpolate(formatDateButton(11).time)}</sup><!--]-->`);
        } else {
          _push(`<!--[-->${ssrInterpolate(formatDateButton(11))}<!--]-->`);
        }
        _push(`</button></div><p class="text-xs font-medium text-gray-600 mt-2 text-center" data-v-f2664ed8>November 2025</p></div><div class="mb-4 p-4 bg-gray-50 rounded-lg relative" data-v-f2664ed8><label class="block text-sm font-medium text-gray-700 mb-2 text-left" data-v-f2664ed8> Authorized to invite </label><div class="flex gap-2" data-v-f2664ed8><button class="${ssrRenderClass([
          "w-10 h-10 flex items-center justify-center transition-colors border border-gray-300 rounded-md text-lg",
          unref(hasInputChanged) && unref(newInviterName).trim() ? "text-gray-600 hover:text-gray-800 cursor-pointer" : "text-gray-300 cursor-not-allowed"
        ])}"${ssrIncludeBooleanAttr(!unref(hasInputChanged) || !unref(newInviterName).trim()) ? " disabled" : ""} title="Add" data-v-f2664ed8> + </button><input${ssrRenderAttr("value", unref(newInviterName))} type="text" placeholder="Marina Krapivina" class="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" data-v-f2664ed8><button class="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors border border-gray-300 rounded-md relative" title="Copy link" data-v-f2664ed8><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-f2664ed8><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" data-v-f2664ed8></path></svg></button></div>`);
        if (unref(showCopyNotification)) {
          _push(`<div class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-4 py-2 bg-green-600 text-white text-sm rounded-md shadow-lg z-10" data-v-f2664ed8> ✓ Inviter updated successfully! </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(showRegistrationModal)) {
        _push(`<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" data-v-f2664ed8><div class="bg-white rounded-lg p-6 max-w-md w-full" data-v-f2664ed8><h3 class="text-lg font-semibold mb-4" data-v-f2664ed8>Join the Guest List</h3><form class="space-y-4" data-v-f2664ed8><div data-v-f2664ed8><label class="block text-sm font-medium text-gray-700 mb-1" data-v-f2664ed8> Name* </label><input${ssrRenderAttr("value", unref(registrationForm).name)} type="text" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your full name" data-v-f2664ed8></div><div data-v-f2664ed8><label class="block text-sm font-medium text-gray-700 mb-1" data-v-f2664ed8> Profession or Brand </label><input${ssrRenderAttr("value", unref(registrationForm).company)} type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g. Stylist, Buyer or Company…" data-v-f2664ed8></div><div data-v-f2664ed8><label class="block text-sm font-medium text-gray-700 mb-1" data-v-f2664ed8> Email (for Calendar reminder)* </label><input${ssrRenderAttr("value", unref(registrationForm).email)} type="email" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="your@email.com" data-v-f2664ed8></div><div class="flex gap-3 pt-4" data-v-f2664ed8><button type="button" class="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors" data-v-f2664ed8> Cancel </button><button type="submit"${ssrIncludeBooleanAttr(!unref(registrationForm).name || !unref(registrationForm).email || unref(isSubmitting)) ? " disabled" : ""} class="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2" data-v-f2664ed8>`);
        if (unref(isSubmitting)) {
          _push(`<svg class="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-f2664ed8><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" data-v-f2664ed8></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span data-v-f2664ed8>${ssrInterpolate(unref(isSubmitting) ? "Sending..." : "OK")}</span></button></div></form></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(showConfirmationModal)) {
        _push(`<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" data-v-f2664ed8><div class="bg-white rounded-lg p-6 max-w-md w-full text-center" data-v-f2664ed8><div class="mb-4" data-v-f2664ed8><svg class="w-16 h-16 text-green-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-f2664ed8><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-v-f2664ed8></path></svg><h3 class="text-lg font-semibold text-gray-800 mb-2" data-v-f2664ed8>You&#39;re officially on the Guest List!</h3></div><div class="mb-6 p-4 rounded-lg" data-v-f2664ed8><p class="text-sm text-gray-600 mb-6" data-v-f2664ed8> Optional: Share a few words about your usefulness, and we&#39;ll do our best to place you with matching VIPs </p>`);
        if (unref(isDesktop)) {
          _push(`<div class="text-center" data-v-f2664ed8><div class="flex justify-center mb" data-v-f2664ed8><img${ssrRenderAttr("src", unref(eventQRCodeUrl))} alt="Event QR Code" class="w-32 h-32" data-v-f2664ed8></div></div>`);
        } else {
          _push(`<div class="text-center" data-v-f2664ed8><button class="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors" data-v-f2664ed8> Request Reserved Seat </button></div>`);
        }
        _push(`</div><button class="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors" data-v-f2664ed8> Close </button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/welcome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const welcome = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f2664ed8"]]);
export {
  welcome as default
};
//# sourceMappingURL=welcome-CbiTccao.js.map
