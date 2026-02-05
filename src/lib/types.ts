export type Team = {
  id: string
  name: string
  city: string
  conference: string
  titles: number
}

export type Player = {
  id: string
  name: string
  team: string
  position: string
  ppg: number
  apg: number
  rpg: number
}
