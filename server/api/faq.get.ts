export default defineEventHandler(async (event) => {
  try {
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyJofyXQHr2G9RXPbdOhE8dvl10HDSIgz9tZEB_rlz4gg22btKAyPBDhelmlEqY0n8z/exec';
    
    console.log('Fetching FAQ from Google Sheets...');
    console.log('URL:', `${GOOGLE_SCRIPT_URL}?action=getFaq`);
    
    const response = await fetch(`${GOOGLE_SCRIPT_URL}?action=getFaq`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    
    console.log('Response status:', response.status);
    console.log('Response ok:', response.ok);
    
    if (!response.ok) {
      throw new Error(`Google Sheets API error: ${response.statusText}`);
    }
    
    const result = await response.json();
    
    // Отладочная информация
    console.log('Raw FAQ result from Google Sheets:', JSON.stringify(result, null, 2));
    if (result.faq && result.faq.length > 0) {
      console.log('First FAQ item:', JSON.stringify(result.faq[0], null, 2));
      console.log('Total FAQ items:', result.faq.length);
      return { success: true, faq: result.faq };
    } else {
      console.log('No FAQ items found, returning test data');
      // Временное решение: возвращаем тестовые данные
      const testFaq = [
        {
          question: "What is the AI matchmaking tool? How does it work?",
          answer: "The AI matchmaking tool is available on laptops at each exhibitor station. Organizers will introduce at least 50 visitor leads to every exhibitor through chat. Some visitors will approach the station directly, while others will be connected via chat for online introductions and follow-ups."
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
        }
      ];
      return { success: true, faq: testFaq };
    }
  } catch (error) {
    console.error('Error fetching FAQ:', error);
    // Возвращаем пустой список вместо ошибки
    return { success: true, faq: [], error: error.message };
  }
});