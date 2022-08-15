import { useContext, useEffect, useState } from "react";
import axios, {AxiosError}  from 'axios'

import { iTicket } from "../types/tickets";
import { URL_ITEMS } from '../utils/constants';
import { FilterContext } from "../App";

export function useGetItems(){
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [items, setItems] = useState<iTicket[]>([])
  const FltrCntx = useContext(FilterContext)

  useEffect(() => {
    const keys = Object.keys(FltrCntx ? FltrCntx.filter : {})
    let strStops = '';
    let isAllFalse: boolean = true
    keys.forEach(key => {
      if(FltrCntx?.filter[key]){
        if(key !== 'all'){
          !strStops ? strStops = `stops=${key}` : strStops += `&stops=${key}`
        }
        isAllFalse = false
      }
    })
    if(isAllFalse){
      FltrCntx?.setFilter({...FltrCntx.filter, 'all': true})
    }
    fetchItems(strStops)
  },[FltrCntx?.filter])

  async function fetchItems(stops: string){
    try {
      setLoading(true)
      const res = await axios.get<iTicket[]>(URL_ITEMS + '?' + stops,
        {
          params:{
            '_sort': 'price',
            '_order': 'asc',
          }
        }
      )
      setItems(res.data)
    } catch (e: unknown) {
        const error = e as AxiosError
        setError(error.message)
    } finally{
        setLoading(false)
    }
  }

  return {loading, error, items}
}  