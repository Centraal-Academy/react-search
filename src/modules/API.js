/* global fetch */

const API = {}

API.get = function (url) {
  return fetch(url)
    .then(response => response.json())
}

export default API
