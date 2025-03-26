
export interface ResponseObject{
  status: string,
  message?: Record<string, any>,
  data?: Record<string, any>
}

export interface Song {
  id: string,
  title: string,
  artist: string,
  album: string,
  genre: string
}