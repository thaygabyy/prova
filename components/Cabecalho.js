import { Racing_Sans_One } from 'next/font/google'
import Link from 'next/link'
import React from 'react'
import { Container, Nav, Navbar, } from 'react-bootstrap'

const Cabecalho = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/anime">Animes</Navbar.Brand>
          <Nav className="me-auto">
            <Link className='nav-link' href="/anime">Animes</Link>
            <Link className='nav-link' href="/anime/generos">Gêneros</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Cabecalho