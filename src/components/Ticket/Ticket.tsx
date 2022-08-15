import { iTicket } from "../../types/tickets"

import logo from './logo.png'
import SvgPlane from "./SvgPlane"

import s from './Ticket.module.sass'

const Ticket = ({
  origin, origin_name, destination,
  destination_name, departure_date, departure_time,
  arrival_date, arrival_time, stops, price
}: iTicket) => {
  return (
    <div className={s.item}>
      <div className={s.left}>
        <img className={s.img} src={logo} alt="Logo" />
        <button className={s.btn}>Купить<br />за {price} ₽</button>
      </div>
      <div className={s.right}>
        <div className={s.rightTop}>
          <span className={s.time}>{departure_time}</span>
          <span className={s.stops}>
            {stops === 0 ? 'Без пересадок': 
            stops > 1 ? stops + ' Пересадки': '1 Пересадка'}
            <SvgPlane/>
          </span>
          <span className={s.time}>{arrival_time}</span>
        </div>
        <div className={s.rightMedium}>
          <span className={s.cities}>{origin + ', ' + origin_name}</span>
          <span className={s.cities}>
            {destination_name + ', ' + destination}
          </span>
        </div>
        <div className={s.rightBottom}>
          <span className={s.date}>{departure_date}</span>
          <span className={s.date}>{arrival_date}</span>
        </div>
      </div>
    </div>
  )
}

export default Ticket