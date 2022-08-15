import { Dispatch, SetStateAction } from "react"

export type tFilter = {
  [key: string]: boolean
}

export interface iFilterContext {
  filter: tFilter,
  setFilter: Dispatch<SetStateAction<tFilter>>
}

export type tFilterLabel = {
  id: string,
  text: string
}