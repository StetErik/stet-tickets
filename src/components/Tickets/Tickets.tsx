import { useGetItems } from '../../hooks/useGetItems'
import Ticket from '../Ticket/Ticket'

import s from './Tickets.module.sass'

const Tickets = () => {
  const {loading, error, items} = useGetItems()

  if(loading){
    return <h1 className={s.text}>Loading...</h1>
  }

  if(items.length === 0){
    return <h1 className={s.text}>{error}</h1>
  }

  return (
    <section className={s.wrapper}>
      {items.map(item => (
        <Ticket 
          key={item.price + item.arrival_time + item.destination_name}
          {...item}
        />
      ))}
    </section>
  )
}

export default Tickets