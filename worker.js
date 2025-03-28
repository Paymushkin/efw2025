addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // Настройка CORS
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Max-Age': '86400',
  }

  // Обработка OPTIONS запроса
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      headers: corsHeaders
    })
  }

  // Проксирование запроса к Vercel API
  const url = new URL(request.url)
  const vercelUrl = `https://dubaifw-gx8zrg9ut-andrews-projects-a9c238fc.vercel.app${url.pathname}${url.search}`

  try {
    const response = await fetch(vercelUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body
    })

    const newResponse = new Response(response.body, response)
    
    // Добавляем CORS заголовки к ответу
    Object.entries(corsHeaders).forEach(([key, value]) => {
      newResponse.headers.set(key, value)
    })

    return newResponse
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders
      }
    })
  }
} 