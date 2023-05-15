import Pagina from '@/components/Pagina'
import apiAnime from '@/services/apiAnime'
import Link from 'next/link'
import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'


const Detalhes = ({ anime }) => {

    console.log(anime)
    return (
        <Pagina>
            <Row>

                <Col md={4}>

                    <Card border="danger">
                        <Card.Header className='bg-danger text-white'>Foto</Card.Header>
                        <Card.Body>
                            <Card.Img variant="top" src={anime.images.jpg.image_url} />
                       <Link href='' className='btn btn-danger mt-3'>Ampliar</Link>
                        </Card.Body>

<Link href='/anime' className='btn btn-danger mt-3'>Voltar</Link>
                    </Card>

                </Col>

                <Col md={8}>
                    <Card border="danger" >
                    <Card.Header className='bg-danger text-white'>Foto</Card.Header>
                        <Card.Body>

                        <p><strong>Episodios:</strong> {anime.episodes}</p>
                        <p><strong>Status:</strong> {anime.status}</p>
                        <p><strong>Duração:</strong> {anime.duration}</p>
                        {anime.year &&
                            <p><strong>Ano:</strong> {anime.year}</p>
                        }
                        <p><strong>Score:</strong> {anime.score}</p>
                        <p>Crime is timeless. By the year 2071, humanity has expanded across the galaxy, filling the surface of other planets with settlements like those on Earth. These new societies are plagued by murder, drug use, and theft, and intergalactic outlaws are hunted by a growing number of tough bounty hunters.\n\nSpike Spiegel and Jet Black pursue criminals throughout space to make a humble living. Beneath his goofy and aloof demeanor, Spike is haunted by the weight of his violent past. Meanwhile, Jet manages his own troubled memories while taking care of Spike and the Bebop, their ship. The duo is joined by the beautiful con artist Faye Valentine, odd child Edward Wong Hau Pepelu Tivrusky IV, and Ein, a bioengineered Welsh Corgi.\n\nWhile developing bonds and working to catch a colorful cast of criminals, the Bebop crew's lives are disrupted by a menace from Spike's past. As a rival's maniacal plot continues to unravel, Spike must choose between life with his newfound family or revenge for his old wounds.\n\n[Written by MAL Rewrite]</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Pagina>


    )
}

export default Detalhes

export async function getServerSideProps(context) {

    const id = context.params.id

    const resultado = await apiAnime.get('/anime/' + id)
    const anime = resultado.data.data

    return {
        props: { anime },

    }
}