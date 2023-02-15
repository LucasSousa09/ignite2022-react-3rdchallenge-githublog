import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import ptBR from 'date-fns/locale/pt-BR'

export function formatPostCreationToNow(ISODate: string) {
  const distanceToNow =
    'Há ' +
    formatDistanceToNow(new Date(ISODate), {
      locale: ptBR,
    })

  return distanceToNow
}
