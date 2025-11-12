import { mergeProps, withCtx, createVNode, useSSRContext, ref, unref } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr } from "vue/server-renderer";
import { p as photo19, a as photo22, b as photo34 } from "./photo-12-1-rQskvVvC.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-Bmms7Mh5.js";
import { _ as _sfc_main$2 } from "./BaseButton-BBGwxqcq.js";
import { _ as _export_sfc } from "../server.mjs";
import { u as useHead } from "./v3-DpMGnK-K.js";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/ufo/dist/index.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/hookable/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/unctx/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/radix3/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/defu/dist/defu.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/klona/dist/index.mjs";
import "/Users/paymei/Documents/Development/github/efw2025/node_modules/@unhead/vue/dist/index.mjs";
const photo1 = "" + __buildAssetsURL("photo-1-1.1OOLMoCP.webp");
const photo2 = "" + __buildAssetsURL("photo-1-2.MK22AT4S.webp");
const photo3 = "" + __buildAssetsURL("photo-1-3.9z0ZBNE4.webp");
const photo4 = "" + __buildAssetsURL("photo-2-1.DHAG0YGP.webp");
const photo5 = "" + __buildAssetsURL("photo-2-2.BerCoi1z.webp");
const photo6 = "" + __buildAssetsURL("photo-2-3.DmZbNXwt.webp");
const photo7 = "" + __buildAssetsURL("photo-3-1.BX49Ce0J.webp");
const photo8 = "" + __buildAssetsURL("photo-3-2.an515QQu.webp");
const photo9 = "" + __buildAssetsURL("photo-3-3.BXgCFzvb.webp");
const photo10 = "" + __buildAssetsURL("photo-4-1.sfbIK9Cg.webp");
const photo11 = "" + __buildAssetsURL("photo-4-2.CSmUUwOW.webp");
const photo12 = "" + __buildAssetsURL("photo-4-3.021R2wph.webp");
const photo13 = "" + __buildAssetsURL("photo-5-1.hhPEHS1d.webp");
const photo14 = "" + __buildAssetsURL("photo-5-2.Bn3tCYL9.webp");
const photo15 = "" + __buildAssetsURL("photo-5-3.DLbW-XLU.webp");
const photo16 = "" + __buildAssetsURL("photo-6-1.De3vLQ2A.webp");
const photo17 = "" + __buildAssetsURL("photo-6-2.K84MqXvS.webp");
const photo18 = "" + __buildAssetsURL("photo-6-3.D6e1Kx9z.webp");
const photo20 = "" + __buildAssetsURL("photo-7-2.BKclwl_3.webp");
const photo21 = "" + __buildAssetsURL("photo-7-3.B25uzyLR.webp");
const photo23 = "" + __buildAssetsURL("photo-8-2.3uQEW8aS.webp");
const photo24 = "" + __buildAssetsURL("photo-8-3.7dFTd6us.webp");
const photo25 = "" + __buildAssetsURL("photo-9-1.VTAPS-86.webp");
const photo26 = "" + __buildAssetsURL("photo-9-2.CyaNQ1j1.webp");
const photo27 = "" + __buildAssetsURL("photo-9-3.5q6XnasF.webp");
const photo28 = "" + __buildAssetsURL("photo-10-1.CYOcab9R.webp");
const photo29 = "" + __buildAssetsURL("photo-10-2.B_Dh1oc2.webp");
const photo30 = "" + __buildAssetsURL("photo-10-3.BUlxqy2j.webp");
const photo31 = "" + __buildAssetsURL("photo-11-1.Bk-zVyxo.webp");
const photo32 = "" + __buildAssetsURL("photo-11-2.CzOC__Mm.webp");
const photo33 = "" + __buildAssetsURL("photo-11-3.DzjixgD5.webp");
const photo35 = "" + __buildAssetsURL("photo-12-2.CLAsV4NH.webp");
const photo36 = "" + __buildAssetsURL("photo-12-3.Cl2f9JFX.webp");
const photo37 = "" + __buildAssetsURL("photo-13-1.DAJGc3Bp.webp");
const photo38 = "" + __buildAssetsURL("photo-13-2.1zbjp112.webp");
const photo39 = "" + __buildAssetsURL("photo-13-3.DeSk1fSx.webp");
const photo40 = "" + __buildAssetsURL("photo-14-1.pCobPYv6.webp");
const photo41 = "" + __buildAssetsURL("photo-14-2.DQonrLes.webp");
const photo42 = "" + __buildAssetsURL("photo-14-3._XsLVdmj.webp");
const photo43 = "" + __buildAssetsURL("photo-15-1.Djndh-CK.webp");
const photo44 = "" + __buildAssetsURL("photo-15-2.C4MZwuxa.webp");
const photo45 = "" + __buildAssetsURL("photo-15-3.GWakTCS0.webp");
const photo46 = "" + __buildAssetsURL("photo-16-1.B_uacj4S.webp");
const photo47 = "" + __buildAssetsURL("photo-16-2.DEgBFlK5.webp");
const photo48 = "" + __buildAssetsURL("photo-16-3.CBzZMCvT.webp");
const photo49 = "" + __buildAssetsURL("photo-17-1.B4KuB0ju.webp");
const photo50 = "" + __buildAssetsURL("photo-17-2.CKq1QsDn.webp");
const photo51 = "" + __buildAssetsURL("photo-17-3.vD3_c5-p.webp");
const photo52 = "" + __buildAssetsURL("photo-18-1.C1ZTge5J.webp");
const photo53 = "" + __buildAssetsURL("photo-18-2.Cwqbm-kq.webp");
const photo54 = "" + __buildAssetsURL("photo-18-3.sVHO3fcF.webp");
const photo55 = "" + __buildAssetsURL("photo-19-1.Bmnz6hM7.webp");
const photo56 = "" + __buildAssetsURL("photo-19-2.BTp_TW6w.webp");
const photo57 = "" + __buildAssetsURL("photo-19-3.C1bWlXun.webp");
const photo58 = "" + __buildAssetsURL("photo-20-1.CxvnIOFp.webp");
const photo59 = "" + __buildAssetsURL("photo-20-2.CjQPR2Ex.webp");
const photo60 = "" + __buildAssetsURL("photo-20-3.CN1T8eBn.webp");
const photo61 = "" + __buildAssetsURL("photo-21-1.g3X5Kh8H.webp");
const photo62 = "" + __buildAssetsURL("photo-21-2.Bit6evVW.webp");
const photo63 = "" + __buildAssetsURL("photo-21-3.CyT8uQjx.webp");
const photo64 = "" + __buildAssetsURL("photo-22-1.BCDHeb45.webp");
const photo65 = "" + __buildAssetsURL("photo-22-2.BCB0jOu3.webp");
const photo66 = "" + __buildAssetsURL("photo-22-3.DZ34HcLh.webp");
const photo67 = "" + __buildAssetsURL("photo-23-1.B2Za0S8O.webp");
const photo68 = "" + __buildAssetsURL("photo-23-2.OQJ0ZqR2.webp");
const photo69 = "" + __buildAssetsURL("photo-23-3.ChrVfyA4.webp");
const photo70 = "" + __buildAssetsURL("photo-24-1.BONrY7CO.webp");
const photo71 = "" + __buildAssetsURL("photo-24-2.pVM6XpCO.webp");
const photo72 = "" + __buildAssetsURL("photo-24-3.BbdNYaTY.webp");
const photo73 = "" + __buildAssetsURL("photo-25-1.CTBPAXuo.webp");
const photo74 = "" + __buildAssetsURL("photo-25-2.bPWmSZBw.webp");
const photo75 = "" + __buildAssetsURL("photo-25-3.CtlDCjcX.webp");
const photo76 = "" + __buildAssetsURL("photo-26-1.nzxJconE.webp");
const photo77 = "" + __buildAssetsURL("photo-26-2.DpBaWEHx.webp");
const photo78 = "" + __buildAssetsURL("photo-26-3.Bsp45Wsf.webp");
const photo79 = "" + __buildAssetsURL("photo-27-1.7ri-eaK1.webp");
const photo80 = "" + __buildAssetsURL("photo-27-2.CLMcewcT.webp");
const photo81 = "" + __buildAssetsURL("photo-27-3.BTcsDc3J.webp");
const photo82 = "" + __buildAssetsURL("photo-28-1.BtzV35py.webp");
const photo83 = "" + __buildAssetsURL("photo-28-2.CcrWi_Pn.webp");
const photo84 = "" + __buildAssetsURL("photo-28-3.D9lzEmMJ.webp");
const photo85 = "" + __buildAssetsURL("photo-29-1.CYKTq32_.webp");
const photo86 = "" + __buildAssetsURL("photo-29-2.DAOvK5z0.webp");
const photo87 = "" + __buildAssetsURL("photo-29-3.2rve-C7p.webp");
const photo88 = "" + __buildAssetsURL("photo-30-1.1vruYHtp.webp");
const photo89 = "" + __buildAssetsURL("photo-30-2.DvcDIHsC.webp");
const photo90 = "" + __buildAssetsURL("photo-30-3.__eDVBbJ.webp");
const photo91 = "" + __buildAssetsURL("photo-31-1.Cirf0192.webp");
const photo92 = "" + __buildAssetsURL("photo-31-2.D8SVlDml.webp");
const photo93 = "" + __buildAssetsURL("photo-31-3.ySuAOKRI.webp");
const photo94 = "" + __buildAssetsURL("photo-32-1.WFBKDV4x.webp");
const photo95 = "" + __buildAssetsURL("photo-32-2.CIwcBKah.webp");
const photo96 = "" + __buildAssetsURL("photo-32-3.B61-BTuu.webp");
const photo97 = "" + __buildAssetsURL("photo-33-1.DuXVJeE5.webp");
const photo98 = "" + __buildAssetsURL("photo-33-2.DcS1T6DF.webp");
const photo99 = "" + __buildAssetsURL("photo-33-3.BoYAiRxn.webp");
const photo100 = "" + __buildAssetsURL("photo-34-1.xc326hgH.webp");
const photo101 = "" + __buildAssetsURL("photo-34-2.C__JdbfA.webp");
const photo102 = "" + __buildAssetsURL("photo-34-3.DqUuFAX6.webp");
const photo103 = "" + __buildAssetsURL("photo-35-1.Bbt23iyl.webp");
const photo104 = "" + __buildAssetsURL("photo-35-2.DB9V0hmZ.webp");
const photo105 = "" + __buildAssetsURL("photo-35-3.nZGKDJkx.webp");
const photo106 = "" + __buildAssetsURL("photo-36-1.BIPvWTJf.webp");
const photo107 = "" + __buildAssetsURL("photo-36-2.Dzpfa3we.webp");
const photo108 = "" + __buildAssetsURL("photo-36-3.pZU0eEj5.webp");
const photo109 = "" + __buildAssetsURL("photo-37-1.DsjQ41RX.webp");
const photo110 = "" + __buildAssetsURL("photo-37-2.bhB2FBxh.webp");
const photo111 = "" + __buildAssetsURL("photo-37-3.sLMWkBuG.webp");
const photo112 = "" + __buildAssetsURL("photo-38-1.Dvto_mOA.webp");
const photo113 = "" + __buildAssetsURL("photo-38-2.C0CNcEOL.webp");
const photo114 = "" + __buildAssetsURL("photo-38-3.C1j2HC1k.webp");
const photo115 = "" + __buildAssetsURL("photo-39-1.BgO8rnr3.webp");
const photo116 = "" + __buildAssetsURL("photo-39-2.BE7sW3Rz.webp");
const photo117 = "" + __buildAssetsURL("photo-39-3.C7GacFVK.webp");
const photo118 = "" + __buildAssetsURL("photo-40-1.CurevqYe.webp");
const photo119 = "" + __buildAssetsURL("photo-40-2.Cal9JTUA.webp");
const photo120 = "" + __buildAssetsURL("photo-40-3.D4u0UeyX.webp");
const photo121 = "" + __buildAssetsURL("photo-41-1.q9l_ZZnF.webp");
const photo122 = "" + __buildAssetsURL("photo-41-2.Hp-SXwkT.webp");
const photo123 = "" + __buildAssetsURL("photo-41-3.D0EcUldw.webp");
const photo124 = "" + __buildAssetsURL("photo-42-1.DKOHKOVK.webp");
const photo125 = "" + __buildAssetsURL("photo-42-2.Ce2csH9_.webp");
const photo126 = "" + __buildAssetsURL("photo-42-3.DL1VBzP4.webp");
const photo127 = "" + __buildAssetsURL("photo-43-1.Dp4TsIEg.webp");
const photo128 = "" + __buildAssetsURL("photo-43-2.DRJsIwUc.webp");
const photo129 = "" + __buildAssetsURL("photo-43-3.y7Zg00np.webp");
const photographers = [
  {
    name: "1 pre-launch: MOB Kempinsky. Christina Zinovieva",
    profession: "Photographer",
    photos: [
      photo1,
      photo2,
      photo3
    ],
    galleryUrl: "https://kriszinoveva.gallery.photo/gallery/pre-lunch-event/"
  },
  {
    name: "2 pre-launch: Belcanto, Dubai Opera. Alexandra Kozlova",
    profession: "Photographer",
    photos: [
      photo10,
      photo11,
      photo12
    ],
    galleryUrl: "https://photos.app.goo.gl/RCGi5CnW8bFAD5UU6"
  },
  {
    name: "1, 2 & 3 days of EFW (Welcome Zone, SkyLight Gallery)",
    profession: "all photos",
    photos: [
      photo4,
      photo5,
      photo6
    ],
    galleryUrl: "https://6803584fdefaa9-24566832.gallery.photo/gallery/emirates-fashion-week/"
  },
  {
    name: "Awards, SkyLight Gallery. Leo Skryabin",
    profession: "Photographer",
    photos: [
      photo7,
      photo8,
      photo9
    ],
    galleryUrl: "https://leoskryabin.gallery.photo/gallery/emirates-fashion-week-x-deluxe-beauty-awards/"
  },
  {
    name: "TV-Lobby",
    profession: "Videographer",
    videos: [
      "https://storage.yandexcloud.net/videos-meyou/efw2025/ETW1.mov ",
      "https://storage.yandexcloud.net/videos-meyou/efw2025/ETW2.mov ",
      "https://storage.yandexcloud.net/videos-meyou/efw2025/ETW3.mov "
    ],
    galleryUrl: "https://disk.yandex.ru/d/th-0hjIjKyPuag/TV%20Lobby"
  },
  {
    name: "DAY 1 | 13 April | Anastasia Boyarskaya",
    profession: "Designer",
    photos: [
      photo13,
      photo14,
      photo15
    ],
    galleryUrl: "https://drive.google.com/drive/folders/15DiKyEyRswoUCGIgQSgZLltN7826ToCF"
  },
  {
    name: "DAY 1 | 13 April | Tanya Tuzova",
    profession: "Designer",
    photos: [
      photo16,
      photo17,
      photo18
    ],
    galleryUrl: "https://drive.google.com/drive/folders/130lkjgGf8CbIpwwz6dRtHBfiPAsk0GOR"
  },
  {
    name: "DAY 1 | 13 April | Osmosis",
    profession: "Designer",
    photos: [
      photo19,
      photo20,
      photo21
    ],
    galleryUrl: "https://drive.google.com/drive/folders/1CMgkHVX_dPeI2xY4GtSdr7bxW0miZgQh"
  },
  {
    name: "DAY 1 | 13 April | Nermin",
    profession: "Designer",
    photos: [
      photo22,
      photo23,
      photo24
    ],
    galleryUrl: "https://drive.google.com/drive/folders/1AXCQ1fCfgmoFd8XzIExEiPwS4FlO6SCC"
  },
  {
    name: "DAY 1 | 13 April | Katharina Arnold",
    profession: "Designer",
    photos: [
      photo25,
      photo26,
      photo27
    ],
    galleryUrl: "https://drive.google.com/drive/folders/1TMYRJHLoSkFxo_GMgX9JxrF9nEfob4Nn"
  },
  {
    name: "DAY 1 | 13 April | Kristina Kibovskaya",
    profession: "Designer",
    photos: [
      photo28,
      photo29,
      photo30
    ],
    galleryUrl: "https://drive.google.com/drive/folders/1MgPTO3U9U-ouEWJdmi933_1hlUC_NnJl"
  },
  {
    name: "DAY 1 | 13 April | Danatella",
    profession: "Designer",
    photos: [
      photo31,
      photo32,
      photo33
    ],
    galleryUrl: "https://drive.google.com/drive/folders/1P7OmnsbrQ6yav82F3bUNUpqI-UXSymzJ"
  },
  {
    name: "DAY 1 | 13 April | Aisha",
    profession: "Designer",
    photos: [
      photo34,
      photo35,
      photo36
    ],
    galleryUrl: "https://drive.google.com/drive/folders/1jIkujUXmkd7WzsvtjJhaAin0JG3pHOJk"
  },
  {
    name: "DAY 1 | 13 April | Edegey",
    profession: "Designer",
    photos: [
      photo37,
      photo38,
      photo39
    ],
    galleryUrl: "https://drive.google.com/drive/folders/1htiEOkDh9Nc2RR3R3M7d4fDeKqS5iEnf"
  },
  {
    name: "DAY 1 | 13 April | Radim Borovik",
    profession: "Designer",
    photos: [
      photo40,
      photo41,
      photo42
    ],
    galleryUrl: "https://drive.google.com/drive/folders/1B7K4O1JEVAsv2eJSRenyql-8PcL5svrm"
  },
  {
    name: "DAY 1 | 13 April | By Osmanova",
    profession: "Designer",
    photos: [
      photo43,
      photo44,
      photo45
    ],
    galleryUrl: "https://drive.google.com/drive/folders/1dXZOOixK5ocAZg2hm6Q6IE0L0rIPaUA9"
  },
  {
    name: "DAY 1 | 13 April | Alexandro Borelli",
    profession: "Designer",
    photos: [
      photo46,
      photo47,
      photo48
    ],
    galleryUrl: "https://drive.google.com/drive/folders/16SLr81zbLdBwU4aCWnLJN4o8b3Ebf74M"
  },
  {
    name: "DAY 1 | 13 April | Dongak",
    profession: "Designer",
    photos: [
      photo49,
      photo50,
      photo51
    ],
    galleryUrl: "https://drive.google.com/drive/folders/1q0Rzv9T32nVYVh7r1ESehhLhhaySrarz"
  },
  {
    name: "DAY 1 | 13 April | Raisa",
    profession: "Designer",
    photos: [
      photo52,
      photo53,
      photo54
    ],
    galleryUrl: "https://drive.google.com/drive/folders/1TILEAysumfift0ijaZMBgRfRMWeq0wyj"
  },
  {
    name: "DAY 1 | 13 April | Alla Couture",
    profession: "Designer",
    photos: [
      photo55,
      photo56,
      photo57
    ],
    galleryUrl: "https://drive.google.com/drive/folders/15vKlxYHoJOeyCvG94sNaFM7To809-t9r"
  },
  {
    name: "DAY 1 | 13 April | Bolero",
    profession: "Designer",
    photos: [
      photo58,
      photo59,
      photo60
    ],
    galleryUrl: "https://drive.google.com/drive/folders/1TILEAysumfift0ijaZMBgRfRMWeq0wyj"
  },
  {
    name: "DAY 1 | 13 April | Marina Mirova",
    profession: "Designer",
    photos: [
      photo61,
      photo62,
      photo63
    ],
    galleryUrl: "https://drive.google.com/drive/folders/1eUCBU8sOL74MjcEWDzTerzbEi7o4fPmd"
  },
  {
    name: "DAY 1 | 13 April | Stanislavwski & Mary Iem",
    profession: "Designer",
    photos: [
      photo64,
      photo65,
      photo66
    ],
    galleryUrl: "https://drive.google.com/drive/folders/1LlJzrrzSVc7IDexff_v9lPR9xi5PnA1R"
  },
  {
    name: "DAY 1 | 13 April | Irina Romanova",
    profession: "Designer",
    photos: [
      photo67,
      photo68,
      photo69
    ],
    galleryUrl: "https://drive.google.com/drive/folders/1JLB4WAn60nOQvzPERgNjwz97NzFwxlpt"
  },
  {
    name: "DAY 2 | 14 April | Alisa Fiori",
    profession: "Designer",
    photos: [
      photo70,
      photo71,
      photo72
    ],
    galleryUrl: "https://drive.google.com/drive/folders/1s4TdWj7DTK32k_4d6BmZ9ngkO2Ji9jiQ"
  },
  {
    name: "DAY 2 | 14 April | Triskelion",
    profession: "Designer",
    photos: [
      photo73,
      photo74,
      photo75
    ],
    galleryUrl: "https://drive.google.com/drive/folders/1FUwPd8D5Dy01Sn6KQ0GayZtcI__UfvhU"
  },
  {
    name: "DAY 2 | 14 April | Sundus",
    profession: "Designer",
    photos: [
      photo76,
      photo77,
      photo78
    ],
    galleryUrl: "https://drive.google.com/drive/folders/1ldwj3eMOCQQ2W8rsNoCHzFE13QFu8YrD"
  },
  {
    name: "DAY 2 | 14 April | Nadia",
    profession: "Designer",
    photos: [
      photo79,
      photo80,
      photo81
    ],
    galleryUrl: "https://drive.google.com/drive/folders/1vWXJ5ZoP09FH5Eo2y8C5XAOQkgPj2fPF"
  },
  {
    name: "DAY 2 | 14 April | Top Tato",
    profession: "Designer",
    photos: [
      photo82,
      photo83,
      photo84
    ],
    galleryUrl: "hhttps://drive.google.com/drive/folders/1TBkrKLAIzv4FaqxaGihlEy9FzORtDKt1"
  },
  {
    name: "DAY 2 | 14 April | Etno Fresh",
    profession: "Designer",
    photos: [
      photo85,
      photo86,
      photo87
    ],
    galleryUrl: "https://drive.google.com/drive/folders/1ZKAsbbMfn1JDH1jJ2amNX40-t9-u8FVj"
  },
  {
    name: "DAY 2 | 14 April | Icona Style",
    profession: "Designer",
    photos: [
      photo88,
      photo89,
      photo90
    ],
    galleryUrl: "https://drive.google.com/drive/folders/1sZO-W9e7GD38gsUqv6msdT-7MpuCD9q2"
  },
  {
    name: "DAY 2 | 14 April | Chinara",
    profession: "Designer",
    photos: [
      photo91,
      photo92,
      photo93
    ],
    galleryUrl: "https://drive.google.com/drive/folders/1Z17UWkJhrfTnBdiyumTK_Q7YlA3wOQk4"
  },
  {
    name: "DAY 2 | 14 April | Feminelli",
    profession: "Designer",
    photos: [
      photo94,
      photo95,
      photo96
    ],
    galleryUrl: "https://drive.google.com/drive/folders/1_cQJ327u3MlWyCB9anZbn6iaF8B9aiWo"
  },
  {
    name: "DAY 2 | 14 April | Orchidea",
    profession: "Designer",
    photos: [
      photo97,
      photo98,
      photo99
    ],
    galleryUrl: "https://drive.google.com/drive/folders/1nBGhF5vO5vHOLMsscngIAeam0hKA5fQT"
  },
  {
    name: "DAY 2 | 14 April | Boulas",
    profession: "Designer",
    photos: [
      photo100,
      photo101,
      photo102
    ],
    galleryUrl: "https://drive.google.com/drive/folders/1058o5TPdo1Qy4HWd7KSsncVIIt8T44DS"
  },
  {
    name: "DAY 2 | 14 April | Snim",
    profession: "Designer",
    photos: [
      photo103,
      photo104,
      photo105
    ],
    galleryUrl: "https://drive.google.com/drive/folders/1AiKe7XZID2Bg5YCjM9Ax_TnU80YT2_tF"
  },
  {
    name: "DAY 2 | 14 April | Irmi",
    profession: "Designer",
    photos: [
      photo106,
      photo107,
      photo108
    ],
    galleryUrl: "https://drive.google.com/drive/folders/1AiKe7XZID2Bg5YCjM9Ax_TnU80YT2_tF"
  },
  {
    name: "DAY 2 | 14 April | Alexandera Fashion House",
    profession: "Designer",
    photos: [
      photo109,
      photo110,
      photo111
    ],
    galleryUrl: "https://drive.google.com/drive/folders/1f--7yIP4t8DSSIdryqDLvknXG8PcVeDu"
  },
  {
    name: "DAY 2 | 14 April | Marina Undrits",
    profession: "Designer",
    photos: [
      photo112,
      photo113,
      photo114
    ],
    galleryUrl: "https://drive.google.com/drive/folders/1kVA1cs8ClJ8fGiCKR800ODttpvuhONiV"
  },
  {
    name: "DAY 2 | 14 April | Gnfayth",
    profession: "Designer",
    photos: [
      photo115,
      photo116,
      photo117
    ],
    galleryUrl: "https://drive.google.com/drive/folders/1wSSHVLINtWrc67CDDc3kVkzUj1Szeq0o"
  },
  {
    name: "DAY 2 | 14 April | From Luna",
    profession: "Designer",
    photos: [
      photo118,
      photo119,
      photo120
    ],
    galleryUrl: "https://drive.google.com/drive/folders/1LowdXEzEJmN6-uiVTugGpRZKsksZ1L1k"
  },
  {
    name: "DAY 2 | 14 April | Malika",
    profession: "Designer",
    photos: [
      photo121,
      photo122,
      photo123
    ],
    galleryUrl: "https://drive.google.com/drive/folders/1E3MAXF9SwW6QyHy1nYFIeG574P5Yrbbx"
  },
  {
    name: "DAY 2 | 14 April | Addicted",
    profession: "Designer",
    photos: [
      photo124,
      photo125,
      photo126
    ],
    galleryUrl: "https://drive.google.com/drive/folders/1ABW_QBpIMBnObuXzNE06ECI2NQXLHuDY"
  },
  {
    name: "DAY 2 | 14 April | Elena Romanova",
    profession: "Designer",
    photos: [
      photo127,
      photo128,
      photo129
    ],
    galleryUrl: "https://drive.google.com/drive/folders/1tL1SWIGRzhlpSHHJAfYgw3AN-5AsYJqw"
  }
];
const _sfc_main$1 = {
  __name: "PhotographerBlock",
  __ssrInlineRender: true,
  props: {
    photographer: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "photographer-block mb-16 md:mb-24" }, _attrs))} data-v-5a7ae68b><div class="mb-6 md:mb-8 flex justify-between items-center" data-v-5a7ae68b><div data-v-5a7ae68b><h3 class="text-xl md:text-2xl font-medium md:mb-2 mb-1" data-v-5a7ae68b>${ssrInterpolate(__props.photographer.name)}</h3><p class="md:text-xl text-gray-600" data-v-5a7ae68b>${ssrInterpolate(__props.photographer.profession)}</p></div>`);
      if (__props.photographer.galleryUrl) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: __props.photographer.galleryUrl,
          target: "_blank",
          rel: "noopener noreferrer"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$2, { variant: "primary" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span data-v-5a7ae68b${_scopeId2}>View Gallery</span><span data-v-5a7ae68b${_scopeId2}>&gt;</span>`);
                  } else {
                    return [
                      createVNode("span", null, "View Gallery"),
                      createVNode("span", null, ">")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$2, { variant: "primary" }, {
                  default: withCtx(() => [
                    createVNode("span", null, "View Gallery"),
                    createVNode("span", null, ">")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="hidden md:grid grid-cols-3 gap-6" data-v-5a7ae68b><!--[-->`);
      ssrRenderList(__props.photographer.photos || __props.photographer.videos, (item, index) => {
        _push(`<div class="${ssrRenderClass([
          "overflow-hidden rounded-lg",
          __props.photographer.videos ? "aspect-[16/9]" : "aspect-[3/4]"
        ])}" data-v-5a7ae68b>`);
        if (!__props.photographer.videos) {
          _push(`<img${ssrRenderAttr("src", item)}${ssrRenderAttr("alt", `Photo ${index + 1} by ${__props.photographer.name}`)} class="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"${ssrRenderAttr("loading", index === 0 ? "eager" : "lazy")} data-v-5a7ae68b>`);
        } else {
          _push(`<video${ssrRenderAttr("src", item)}${ssrRenderAttr("title", `Video ${index + 1} by ${__props.photographer.name}`)} class="w-full h-full object-cover" playsinline autoplay loop muted data-v-5a7ae68b></video>`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="md:hidden -mx-5 px-5" data-v-5a7ae68b><div class="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar" data-v-5a7ae68b><!--[-->`);
      ssrRenderList(__props.photographer.photos || __props.photographer.videos, (item, index) => {
        _push(`<div class="${ssrRenderClass([
          "flex-shrink-0 w-[85vw] max-w-[300px] overflow-hidden rounded-lg snap-center",
          __props.photographer.videos ? "aspect-[16/9]" : "aspect-[3/4]"
        ])}" data-v-5a7ae68b>`);
        if (!__props.photographer.videos) {
          _push(`<img${ssrRenderAttr("src", item)}${ssrRenderAttr("alt", `Photo ${index + 1} by ${__props.photographer.name}`)} class="w-full h-full object-cover" loading="lazy" data-v-5a7ae68b>`);
        } else {
          _push(`<video${ssrRenderAttr("src", item)}${ssrRenderAttr("title", `Video ${index + 1} by ${__props.photographer.name}`)} class="w-full h-full object-cover" playsinline autoplay loop muted data-v-5a7ae68b></video>`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--><div class="flex-shrink-0 w-5" data-v-5a7ae68b></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PhotographerBlock.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const PhotographerBlock = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5a7ae68b"]]);
const _sfc_main = {
  __name: "gallery",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Gallery - Emirates Fashion Week Dubai 2025",
      meta: [
        {
          name: "description",
          content: "Explore the stunning gallery of Emirates Fashion Week Dubai 2025. View exclusive photos from runway shows, designer collections, and behind-the-scenes moments."
        },
        {
          name: "keywords",
          content: "Emirates Fashion Week Gallery, Dubai Fashion Photos, Fashion Show Gallery, Runway Photos Dubai, Fashion Week Images"
        },
        {
          property: "og:title",
          content: "Gallery - Emirates Fashion Week Dubai 2025"
        },
        {
          property: "og:description",
          content: "Explore the stunning gallery of Emirates Fashion Week Dubai 2025. View exclusive photos from runway shows, designer collections, and behind-the-scenes moments."
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
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-5 py-10 md:py-16" }, _attrs))} data-v-55e252bd><h1 class="text-3xl md:text-4xl xl:text-5xl mb-10 md:mb-16" data-v-55e252bd>EFW gallery</h1><div class="photographers-list" data-v-55e252bd><!--[-->`);
      ssrRenderList(unref(photographers), (photographer, index) => {
        _push(ssrRenderComponent(PhotographerBlock, {
          key: index,
          photographer
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/gallery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gallery = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-55e252bd"]]);
export {
  gallery as default
};
//# sourceMappingURL=gallery-DJKz_Ms9.js.map
