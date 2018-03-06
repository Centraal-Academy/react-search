const RegisterWorker = {}

RegisterWorker.isAvailable = function (navigator) {
  return 'serviceWorker' in navigator
}
RegisterWorker.register = function (navigator, route) {
  if (RegisterWorker.isAvailable(navigator)) {
    return navigator.serviceWorker.register(route)
  } else {
    return Promise.reject(new Error('Service worker, not available'))
  }
}

export default RegisterWorker
