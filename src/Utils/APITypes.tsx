//Tipagem dos conteúdos recebidos de API para facilitar tanto a distribuição entre os componentes, como a consulta de tipos em um só lugar.

export interface tvDataProps {
  Cast: {ID: string, Name:string }[],
  Genres: {ID: string, Title: string}[],
  ID: number,
  Images: {Background: string},
  Synopsis: string,
  Title: string,
  Year: number
};

export interface epDataProps {
  Duration: number,
  EpisodeNumber: number,
  ID: string,
  Image: string,
  SeasonNumber: number,
  Synopsis: string,
  Title: string
}