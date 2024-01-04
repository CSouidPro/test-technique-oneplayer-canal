export interface Scene {
  id: number
  title: string
  beginTimecode: number
  endTimecode: number
}
export interface DetailedScene extends Scene {
  image: string
  casting: Casting[]
  reactions: Reaction[]
}

export interface Casting {
  id: number
  description: string
  name: string
  image: string
}

export interface Reaction {
  name: string
  timecode: number
  message: string
}
