import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

function Confirmation(props) {
  const {show, message, header, button, close, variant} = props

  return (
    <Modal
        show={show}
        onHide={close}
        backdrop="static"
        keyboard={false}
        animation={false}
      >
        <Modal.Header>
          {header}
        </Modal.Header>
        <Modal.Body>
          <p>
            {message}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant={variant} onClick={close}>
            {button}
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default Confirmation;