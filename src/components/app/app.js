import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Col, Row} from 'react-bootstrap'

import Header from '../header'
import RandomCharacter from '../randomCharacter/randomCharacter'
import CharList from '../charList/charList'
import CharInfo from '../charInfo/charInfo'

export default function App() {
  return(
    <Container className>
      <Header/>
      <RandomCharacter/>
      <Container>
        <Row>
          <Col md="6">
            <CharList/>
          </Col>
          <Col md="6">
            <CharInfo/>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}


