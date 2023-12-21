import React from 'react'
import { Container } from 'react-bootstrap'
import ChoosePayMethod from '../../Components/CheckOut/ChoosePayMethod'

export default function ChoosePayMethodPage() {
  return (
    <Container style={{minHeight:"100vh"}}>
        <ChoosePayMethod/>
    </Container>
  )
}
