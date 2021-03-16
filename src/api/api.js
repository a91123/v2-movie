export function getFilmData(url) {
  return fetch(url, {
    headers: new Headers({
      'X-Client-Info':
        '{"a":"3000","ch":"1002","v":"5.0.4","e":"1608811732429964881035265","bc":"110100"}',
      'X-Host': 'mall.film-ticket.film.list'
    })
  })
}
