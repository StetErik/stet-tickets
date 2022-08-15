import { createContext, useState } from 'react'
import { iFilterContext, tFilter } from './types/filter'

import Filter from './components/Filter'
import Tickets from './components/Tickets'

import './App.sass'

export const FilterContext = createContext<iFilterContext| null>(null)

function App() {
  const [filter, setFilter] = useState<tFilter>({
    'all': true, '0': false, '1': false, '2': false, '3': false
  })

  return (
    <div className="App">
      <FilterContext.Provider value={{filter, setFilter}}>
        <Filter/>
        <Tickets/>
      </FilterContext.Provider>
    </div>
  )
}

export default App
