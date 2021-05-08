import React from 'react'
import '../../App.css'

import fetchRequest from '../request/fetchRequest'

import validString from '../utils/validString'
import validZip from '../utils/validZip'

import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'

const {useState, useEffect} = React

function UserForm() {
  const initialFormState = {
    firstName: '',
    lastName: '',
    addressOne: '',
    addressTwo: '',
    city: '',
    state: '',
    zipcode: '',
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
    zipcode: true,
    country: true
  }
  const [validState, setValidState] = useState(initialValidState)
  const [errorState, setErrorState] = useState(initialFormState)
  const [confirmState, setConfirmState] = useState(false)
  const [loadedState, setLoadedState] = useState(false)
  const [error, setError] = useState('')
  const url = window.location.href

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
    setFormState({
      ...formState,
      [id] : val,
    })
  }

  const handleStateSelect = (e) => {
    e.preventDefault()
    const name = e.target.name
    const val = e.target.value
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
    let isValidState = true
    let isValidCountry = true

    if (!validString(formState.firstName)) { isValidFirstName = false; allValid = false }
    if (!validString(formState.lastName)) { isValidLastName = false; allValid = false }
    if (!validString(formState.addressOne)) { isValidAddressOne = false; allValid = false }
    if (!validString(formState.city)) { isValidCity = false; allValid = false }
    if (!validZip(formState.zipcode)) {isValidZip = false; allValid = false}
    if (formState.state === '' ) { isValidState = false; allValid = false }
    if (formState.country.toUpperCase() !== 'US') { isValidCountry = false; allValid = false }

    setValidState({
      firstName: isValidFirstName,
      lastName: isValidLastName,
      addressOne: isValidAddressOne,
      city: isValidCity,
      zipcode: isValidZip,
      state: isValidState,
      country: isValidCountry
    })

    setErrorState({
      ...errorState,
      firstName: isValidFirstName ? '' : 'Please enter a valid name.',
      lastName: isValidLastName ? '' : 'Please enter a valid name.',
      addressOne: isValidAddressOne ? '' : 'Please enter a valid address.',
      city: isValidCity ? '' : 'Please enter a valid city.',
      state: isValidState ? '' : 'Please enter a valid state.',
      zipcode: isValidZip ? '' : 'Please enter a valid zipcode.',
      country: isValidCountry ? '' : 'Please enter "US"',
    })

    return allValid

  }

  async function registerUser() {
    const route = 'https://0sjhqfet72.execute-api.us-east-1.amazonaws.com/dev/api/register'
    const requestBody = formState

    const data = await fetchRequest({url: route, body: requestBody, type: 'POST'})
    if (data.error) {
      setError(data.errorMessage)
    } else {
      setFormState(initialFormState)
      setConfirmState(true)
    }
  }

  function handleSubmit() {
    const isValid = validateForm()
    if (isValid) {
      registerUser(formState)
    }
  }
  
  function handleCancel() {
    setFormState(initialFormState)
  }
  

  useEffect(() => {
    console.log(url)
    console.log(typeof(url))
  })

  function closeModal() {
    setConfirmState(false)
  }

  if (url.includes('admin')) {
    console.log('hit')
    return <DisplayUsers />
  }

  return (
    <>
      <Modal
        show={confirmState}
        onHide={closeModal}
        backdrop="static"
        keyboard={false}
        animation={false}
      >
        <Modal.Header>
          Submission Confirmed
        </Modal.Header>
        <Modal.Body>
          <p>
            Thanks for submitting a new user!
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closeModal}>
            Create Another User
          </Button>
        </Modal.Footer>
      </Modal>
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
                  <Form.Control id='addressOne' value={formState.addressOne} onChange={handleInputChange} type='text' placeholder='example: 123 Washington Avenue'/>
                  <Form.Text className="warningText" muted>
                    {validState.addressOne ? '' : errorState.addressOne}
                  </Form.Text>
                  <Form.Label>Address 2: </Form.Label>
                  <Form.Control id='addressTwo' value={formState.addressTwo} onChange={handleInputChange} type='text' placeholder='example: Apt 1'/>
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
                  <Form.Control id='zipcode' value={formState.zipcode} onChange={handleInputChange} type='text' placeholder='example: 5 or 9 digits'/>
                  <Form.Text className="warningText" muted>
                    {validState.zipcode ? '' : errorState.zipcode}
                  </Form.Text>
                  <Form.Label>State: </Form.Label>
                  <Form.Control  name='state' value={formState.state} onChange={handleStateSelect} as='select'>
                    <option>Please Select a State</option>
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