export default defineNuxtRouteMiddleware((to) => {
  // Редирект с /offer/tr на /offer?tr
  if (to.path === '/offer/tr') {
    return navigateTo('/offer?tr', { replace: true })
  }
  
  // Можно добавить другие редиректы здесь
  // if (to.path === '/offer/waitlist') {
  //   return navigateTo('/offer?waitlist', { replace: true })
  // }
})
