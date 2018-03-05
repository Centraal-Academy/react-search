import API from './API'

const FirebaseAPI = {}

FirebaseAPI.get = function (url) {
  return API.get(url)
    .then(json => Object.values(json))
}

export default FirebaseAPI
