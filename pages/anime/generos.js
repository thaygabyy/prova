import Pagina from '@/components/Pagina'
import apiAnime from '@/services/apiAnime'
import React from 'react'

const generos = ({ anime }) => {

    console.log(anime)
  return (
    <Pagina titulo= "Gêneros">
        <ul>
            {anime.map(item =>(
                <li key={item.mal_id}>
                    {`${item.name} (${item.count})`}
                </li>
            ))}
        </ul>
</Pagina>
  )
}

export default generos

export async function getServerSideProps(context){
 
    const resultado = await apiAnime.get('/genres/anime')
    const anime = resultado.data.data

    return{
     props: { anime },

   }}

   