import {requester} from "../requester";
 export const fetchokemons = async (params) => {
    try {
        const  {data} = await requester.get(   'pokemon', {
            params
        })
        return data;
    }catch (error) {
        console.log(error)
    }
}

export const getPokemonByName = async (name) => {
     try {
         const { data } = await requester.get('/pokemon/' + name)
         return data
     } catch (error){

     }
}