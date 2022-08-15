import { ChangeEvent, MouseEvent, useContext } from 'react'

import { FilterContext } from '../../App'
import { tFilter } from '../../types/filter'
import { filterLabels } from '../../utils/constants'

import s from './Filter.module.sass'

const Filter = () => {
  const FltrCntx = useContext(FilterContext)

  function handleFilter(e: ChangeEvent<HTMLInputElement>) {
    const id: string = e.target.id
    if(id !== 'all'){
      FltrCntx?.setFilter(
        {...FltrCntx?.filter, 'all': false, [id]: !FltrCntx?.filter[id]}
      )
    } else {
      FltrCntx?.setFilter(
        {'all': true, '0': false, '1': false, '2': false, '3': false}
      )
    }
  }

  function handleOnlyClick(e: MouseEvent<HTMLButtonElement>) {
    const el = e.target as HTMLElement
    const id = el.parentElement?.children[0].id
    if(FltrCntx?.filter){
      const keys = Object.keys(FltrCntx?.filter)
      const newObj: tFilter = {}
      keys.forEach(key => {
        if(key !== id){
          newObj[key] = false
        }
      })
      if(id){
        newObj[id] = true
      }
      FltrCntx?.setFilter(newObj)
    }
  }

  return (
    <aside className={s.item}>
      <div className={s.title}>Количество пересадок</div>
      {filterLabels.map(label=>(
        <div key={label.id} className={s.filterItem}>
          <input type='checkbox' checked={FltrCntx?.filter[label.id]}
          onChange={handleFilter} id={label.id}/>
          <label className={s.label} htmlFor={label.id}>
            <span className={s.text}>{label.text}</span>
          </label>
          {label.id !== 'all' && 
          <button className={s.only} onClick={handleOnlyClick}>Только</button>}
        </div>
      ))}
    </aside>
  )
}

export default Filter