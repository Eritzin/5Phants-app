import React from "react";
import FileBase64 from "react-file-base64";
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


class ImageList extends React.Component {
  state = {
    files: []
  };
  getFiles = files => {
    this.setState({
      files
    });
    console.log(files);
    this.props.setImage(this.state.files[0].base64);
    this.props.handleImageListVisibility();
  };
  render() {
    return (
      <div>
        <Modal
          show={this.props.renderImageList}
          onHide={this.props.handleImageListVisibility}
        >
          <Modal.Body>
            <Card className="card-popup p-2">
              <Card.Body className="">
                <FileBase64 multiple={true} onDone={this.getFiles} />
              </Card.Body>
            </Card>
          </Modal.Body>
          <Modal.Footer>
            <Button type="button"
            className="float-left mt-3 btn-publish px-5 shadow" onClick={this.props.handleImageListVisibility}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default ImageList;


