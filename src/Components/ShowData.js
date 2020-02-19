import React from 'react';
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";


const ShowData = (props) => {

    return (
        <div>
        <Modal
            show={props.showData}
            onHide={props.clearData}
          >
          <Modal.Body>
          <Card className="card-result shadow">
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                  <Card.Title>{JSON.stringify(props.DATAS.title)}</Card.Title>
                  <Card.Title>{JSON.stringify(props.DATAS.price)}</Card.Title>
                  <Card.Title>{JSON.stringify(props.DATAS.startDate)}</Card.Title>
                  <Card.Title>{JSON.stringify(props.DATAS.youtube)}</Card.Title>
                </Card.Body>
              </Card>
          </Modal.Body>
          </Modal>
        </div>
    )
}

export default ShowData;
