export interface Pokemon {
    name: string;
    url: string;
    image?:string
  }
  
  export interface PokemonsData {
    count: number;
    next: string | null;
    previous: string | null;
    results: Pokemon[];
  }

  interface Type{
    slot : number
    type : {
      name : string
      url : string
    }
  }

  export interface PokemonsDetails {
    id : number
    name : string
    height : number
    weight: number
    types : Type[]
    sprites: {
      other: {
        home : {
          front_default : string
        }
      }
    }
  }
  