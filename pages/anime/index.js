import Pagina from '@/components/Pagina'
import apiAnime from '@/services/apiAnime'
import Link from 'next/link'
import React from 'react'
import { Card, Col, Row , Table } from 'react-bootstrap'
import {BsSearchHeart} from 'react-icons/bs'

const index = ({anime}) => {
  return (
    <>
        <Pagina titulo="Animes" />
         <Table striped bordered hover>
         <thead>
           <tr>
          <th scope="col">Detalhes</th>
          <th scope="col">Titulo</th>
           <th scope="col">Duração</th>
           <th scope="col">Ano</th>
    </tr>
  </thead>
  <tbody>
    {anime.map(item => (
    <tr key={item.mal_id}>
      <td>
        <Link href={'/anime/' + item.mal_id}>
          <BsSearchHeart style={{color: 'red', fontSize: '100%'}}/>
        </Link>
      </td>
      <td>{item.title}</td>
      <td>{item.duration}</td>
      <td>{item.year}</td>
    </tr>
    ))}
  </tbody>
  </Table>
        <Row md={6} mb={3}>
            {anime.map(item => (
                <Col>
                    <Link href={'/anime/' + item.mal_id}>
                        
                    </Link>
                </Col>
             ))}
        </Row>
    </>
)
}

export default index
export async function getServerSideProps(context){
 
    const resultado = await apiAnime.get('/anime')
    const anime = resultado.data.data
    return{
     props: { anime },

   }}