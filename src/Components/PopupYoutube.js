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


class PopupYoutube extends React.Component {

    state = {
        video: ''
    }

    onChange = (e) => {
        const video = e.target.value
        this.setState({ video })
        console.log(video)
    }

    validateYouTube = (video) => {
        if (video.match(/^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/)) {
            console.log('VALID')
            this.props.setYouTube(video)
            this.props.handleYoutubeVisibility();
            alert('The Youtube link was added!')

        } else {
          alert('Please provide a valid Youtube link!')
        }
    }

    render() {
        return (
            <div>
            <Modal
            show={this.props.renderModalYouTube}
            onHide={this.props.handleYoutubeVisibility}
          >
            <Modal.Body>
            <Card className="card-popup border">
            <Card.Body>
              <Form.Group as={Row} className="mt-4 offers">
                <Form.Label column className="text-left red">
                  YouTubeVideo
                </Form.Label>
                <Form.Control
                  column
                  className="input-offers"
                  type="text"
                  placeholder="Paste your Url"
                  onChange={this.onChange}
                  value={this.state.video}
                />
                <Button
                  type="button"
                  className="float-left mt-3 btn-publish px-5 shadow"
                  onClick={() => this.validateYouTube(this.state.video)}
                >
                  Validate
                </Button>
                <Button
                type="button"
                className="float-right mt-3 btn-publish px-5 shadow"
                onClick={this.props.handleYoutubeVisibility}
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

export default PopupYoutube;
