import { defineEventHandler } from 'file:///Users/paymei/Documents/Development/github/dubaifw/node_modules/h3/dist/index.mjs';

const formatAnswer = (answer) => {
  if (!answer) return "";
  return answer.replace(/\n/g, "<br>").replace(/\r\n/g, "<br>").replace(/\r/g, "<br>");
};
const faq_get = defineEventHandler(async (event) => {
  try {
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby-9k6uo_l1HnNVUXBC3cmyEgtwb6EJBe7kRnbQ07QKlXLeNMk2QAQoKDUismUx1_DdlQ/exec";
    const response = await fetch(`${GOOGLE_SCRIPT_URL}?action=getFaq`, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });
    if (!response.ok) {
      throw new Error(`Google Sheets API error: ${response.statusText}`);
    }
    const result = await response.json();
    console.log("Raw FAQ result from Google Sheets:", JSON.stringify(result, null, 2));
    if (!result.faq || result.faq.length === 0) {
      console.log("FAQ is empty, using test data");
      const testFaq = [
        {
          question: "What is the AI matchmaking tool? How does it work?",
          answer: "The AI matchmaking tool is available on laptops at each exhibitor station.\n\nOrganizers will introduce at least 50 visitor leads to every exhibitor through chat.\n\nSome visitors will approach the station directly, while others will be connected via chat for online introductions and follow-ups."
        },
        {
          question: "Are visitor passes free? How many invites are out? What's the audience profile?",
          answer: "Visitor entry is free. We usually welcome 300-700 guests, depending on the show. For April 15, we expect 300-500 attendees throughout the day. Our audience is diverse and international, mainly beauty- and fashion-conscious individuals from mid- to high-income backgrounds. We do not track nationality at registration."
        },
        {
          question: "Who are the 'Buyers'? What's their ratio to media, influencers, stylists, bloggers?",
          answer: "Buyers include individuals purchasing for themselves and for retail stores. We don't publish an exact ratio, but the crowd includes a mix of media, influencers, stylists, bloggers, and direct buyers."
        },
        {
          question: "What if I don't want a showcase station but still want to engage buyers?",
          answer: "You can attend for free, observe how other beauty service providers present their services, and interact with the audience. Many providers offer special promotions and discounts to visitors."
        },
        {
          question: "What are some example brands in the business showcase corner?",
          answer: "Over 30 brands are confirmed - including designers from the Middle East, CIS, Eastern Europe, and local UAE talents. We also host a wide range of beauty service providers: clinics, plastic surgery, botox, fitness, cosmetology, nails, lashes, brows, hair, and styling."
        },
        {
          question: "How do I register for the event?",
          answer: "Registration is simple and free:\n\n1. Visit our website\n2. Fill out the registration form\n3. Receive confirmation email\n4. Bring your ID on event day\n\nFor exhibitors, additional steps apply."
        }
      ];
      return { success: true, faq: testFaq };
    }
    const formattedFaq = (result.faq || []).map((item) => ({
      ...item,
      answer: formatAnswer(item.answer)
    }));
    formattedFaq.push({
      question: "How do I register for the event?",
      answer: formatAnswer("Registration is simple and free:\n\n1. Visit our website\n2. Fill out the registration form\n3. Receive confirmation email\n4. Bring your ID on event day\n\nFor exhibitors, additional steps apply.")
    });
    return { success: true, faq: formattedFaq };
  } catch (error) {
    console.error("Error fetching FAQ:", error);
    return { success: true, faq: [], error: error.message };
  }
});

export { faq_get as default };
//# sourceMappingURL=faq.get.mjs.map
