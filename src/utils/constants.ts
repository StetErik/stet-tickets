import { tFilterLabel } from "../types/filter"

export const URL_ITEMS = 
'https://my-json-server.typicode.com/steterik/data-base-tickets/tickets'

export const filterLabels: tFilterLabel[] = [
  { id: 'all', text: 'Все'},
  { id: '0', text: 'Без пересадок'},
  { id: '1', text: '1 пересадка'},
  { id: '2', text: '2 пересадки'},
  { id: '3', text: '3 пересадки'},
]