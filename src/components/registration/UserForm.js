import React from 'react'
import '../../App.css'
import Confirmation from '../confirmation/Confirmation'
import SubmitForm from '../request/SubmitForm'

import validString from '../utils/validString'
import validZip from '../utils/validZip'

import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

const {useState} = React

function UserForm() {
  const initialFormState = {
    firstName: '',
    lastName: '',
    addressOne: '',
    addressTwo: '',
    city: '',
    state: '',
    zip: '',
    country: ''
  }
  const [formState, setFormState] = useState(initialFormState)
  const initialValidState = {
    firstName: true,
    lastName: true,
    addressOne: true,
    addressTwo: true,
    city: true,
    state: true,
    zip: true,
    country: true
  }
  const [validState, setValidState] = useState(initialValidState)
  const [errorState, setErrorState] = useState(initialFormState)
  const [confirmState, setConfirmState] = useState(false)

  const states = [
    'AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA',
    'GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA',
    'MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND',
    'MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT',
    'VT','VI','VA','WA','WV','WI','WY'
   ];



  const handleInputChange = (e) => {
    e.preventDefault()
    const id = e.target.id
    const val = e.target.value
    console.log('id', id)
    console.log('val', val)
    setFormState({
      ...formState,
      [id] : val,
    })
  }

  const handleStateSelect = (e) => {
    e.preventDefault()
    const name = e.target.name
    const val = e.target.value
    console.log('name', name)
    console.log('val', val)
    setFormState({
      ...formState,
      [name] : val,
    })
  }

  function validateForm() {
    let allValid = true
    let isValidFirstName = true
    let isValidLastName = true
    let isValidAddressOne = true
    let isValidCity = true
    let isValidZip = true
    let isValidCountry = true

    if (!validString(formState.firstName)) { isValidFirstName = false; allValid = false }
    if (!validString(formState.lastName)) { isValidLastName = false; allValid = false }
    if (!validString(formState.addressOne)) { isValidAddressOne = false; allValid = false }
    if (!validString(formState.city)) { isValidCity = false; allValid = false }
    // FIXME: if xip length > 5 then it has to equal 9
    if (!validZip(formState.zip)) {isValidZip = false; allValid = false}
    if (formState.country !== 'US') { isValidCountry = false; allValid = false }

    setValidState({
      firstName: isValidFirstName,
      lastName: isValidLastName,
      addressOne: isValidAddressOne,
      city: isValidCity,
      zip: isValidZip,
      country: isValidCountry
    })

    setErrorState({
      ...errorState,
      firstName: isValidFirstName ? '' : 'Please enter a valid name.',
      lastName: isValidLastName ? '' : 'Please enter a valid name.',
      addressOne: isValidAddressOne ? '' : 'Please enter a valid address.',
      city: isValidCity ? '' : 'Please enter a valid city.',
      zip: isValidZip ? '' : 'Please enter a valid zipcode.',
      country: isValidCountry ? '' : 'Please enter "US"',
    })

    return allValid

  }

  function handleSubmit() {
    const isValid = true
    if (isValid) {
      console.log(formState)
      SubmitForm(formState)
      setFormState(initialFormState)
      setConfirmState(true)
    }
  }
  
  function handleCancel() {
    setFormState(initialFormState)
  }

  if (confirmState) {
    // return <Confirmation />
    return <Button onClick={() => {window.location.reload()}}>success</Button>
  }

  return (
    <>
      <Container fluid>
        <Row className="justify-content-md-center">
          <h1>Submit User Info</h1>
        </Row>
          <Form>
            <Form.Group >
              <Row className="justify-content-md-center">
                <Col xs lg='4'>
                  <Form.Label>First Name: </Form.Label>
                  <Form.Control id='firstName' value={formState.firstName} onChange={handleInputChange} type='text' placeholder='example: John'/>
                  <Form.Text className="warningText" muted>
                    {validState.firstName ? '' : errorState.firstName}
                  </Form.Text>
                </Col>
                <Col xs lg='4'>
                  <Form.Label>Last Name: </Form.Label>
                  <Form.Control id='lastName' value={formState.lastName} onChange={handleInputChange} type='text' placeholder='example: Smith'/>
                  <Form.Text className="warningText" muted>
                    {validState.lastName ? '' : errorState.lastName}
                  </Form.Text>
                </Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col xs lg='4'>
                  <Form.Label>Address 1: </Form.Label>
                  <Form.Control id='addressOne' value={formState.address1} onChange={handleInputChange} type='text' placeholder='example: 123 Washington Avenue'/>
                  <Form.Text className="warningText" muted>
                    {validState.address1 ? '' : errorState.address1}
                  </Form.Text>
                  <Form.Label>Address 2: </Form.Label>
                  <Form.Control id='addressTwo' value={formState.address2} onChange={handleInputChange} type='text' placeholder='example: Apt 1'/>
                  <Form.Text className="warningText" muted>
                  </Form.Text>
                  <Form.Label>City: </Form.Label>
                  <Form.Control id='city' value={formState.city} onChange={handleInputChange} type='text' placeholder='example: New York City'/>
                  <Form.Text className="warningText" muted>
                    {validState.city ? '' : errorState.city}
                  </Form.Text>
                </Col>
                <Col xs lg='4'>
                  <Form.Label>Zip: </Form.Label>
                  <Form.Control id='zip' value={formState.zip} onChange={handleInputChange} type='text' placeholder='example: 5 or 9 digits'/>
                  <Form.Text className="warningText" muted>
                    {validState.zip ? '' : errorState.zip}
                  </Form.Text>
                  <Form.Label>State: </Form.Label>
                  <Form.Control  name='state' value={formState.state} onChange={handleStateSelect} as='select'>
                    <option id='state' value='default'>Please Select a State</option>
                    {states.map(state =>
                      <option key={state}>{state}</option>
                    )}
                  </Form.Control>
                  <Form.Text className="warningText" muted>
                    {validState.state ? '' : errorState.state}
                  </Form.Text>
                  <Form.Label>Country: </Form.Label>
                  <Form.Control id='country' value={formState.country} onChange={handleInputChange} type='text' placeholder='example: Please Enter "US"'/>
                  <Form.Text className="warningText" muted>
                    {validState.country ? '' : errorState.country}
                  </Form.Text>
                </Col>
              </Row>
            </Form.Group>
            <Row className='buttons'>
              <Col xs lg={{ span: 4, offset: 8 }}>
                <Button className='button' variant='secondary' onClick={handleCancel}>Clear Form</Button>
                <Button className='button' variant='dark' onClick={handleSubmit}>Submit</Button>
              </Col>
            </Row>
          </Form>
      </Container>
    </>
  )
}

export default UserForm;