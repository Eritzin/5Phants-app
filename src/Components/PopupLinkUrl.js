import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";




class PopupLinkUrl extends React.Component {

    state = {
        url: ''
    }

    onChange = (e) => {
        const url = e.target.value
        this.setState({ url })
        console.log(url)
    }

    validateUrl = (url) => {
        if (url.match(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)) {
            console.log('VALID')
            this.props.setUrl(this.state.url)
            this.props.handleUrlVisibility();
            alert('The Url was added!')
        }
        else {
            alert('Please provide a valid Url!')
        }
    }



    render() {
        return (
            <div>

            <Modal
            show={this.props.renderModalUrl}
            onHide={this.props.handleUrlVisibility}
          >
            <Modal.Body>
            <Card className="card-popup border">
            <Card.Body>
              <Form.Group as={Row} className="mt-4 offers">
                <Form.Label column className="text-left red">
                  Url
                </Form.Label>
                <Form.Control
                  column
                  className="input-offers"
                  type="text"
                  placeholder="Paste your Url"
                  onChange={this.onChange}
                  value={this.state.url}
                />
                <Button
                  type="button"
                  className="float-left mt-3 btn-publish px-5 shadow"
                  onClick={() => this.validateUrl(this.state.url)}
                >
                  Validate
                </Button>
                <Button
                type="button"
                className="float-right mt-3 btn-publish px-5 shadow"
                onClick={this.props.handleUrlVisibility}
              >
                Close
              </Button>
              </Form.Group>
            </Card.Body>
          </Card>
            </Modal.Body>
          </Modal>
            </div>

        )
    }
}

export default PopupLinkUrl;

