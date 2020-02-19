import React from "react";
import { ListOfCurrencies } from '../Fixtures/DATA';
import DatePicker from "react-datepicker";//datepicker
import "react-datepicker/dist/react-datepicker.css";//datePicker
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";



class Offers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            no_offer_price: "",
            price: "",
            id_price_currency: 1,
            startDate: new Date(),//datePicker
            endDate: new Date(),//datePicker

        };
    }
    onChangePriceInitial = async e => {
        const no_offer_price = e.target.value
        if (!no_offer_price || no_offer_price.match(/^\d{1,}(\.\d{0,2})?$/)) {
            await this.setState({ no_offer_price })
            this.props.setNoOfferPrice(this.state.no_offer_price)
        }
    };
    onChangePriceActual = async e => {
        const price = e.target.value
        if (!price || price.match(/^\d{1,}(\.\d{0,2})?$/)) {
            await this.setState({ price })
            this.props.setPrice(this.state.price)
        }
    };
    //datePicker
    handleChangeStart = async date => {
        await this.setState({
            startDate: date
        });
        console.log(this.state.startDate)
        this.props.setStartDate(this.state.startDate)
    };
    //datePicker
    handleChangeEnd = async date => {
        await this.setState({
            endDate: date
        });
        this.props.setEndDate(this.state.endDate)
    };

    renderCurrency = () => {
        const List = ListOfCurrencies.map(i => (
          <option key={i.id} value={i.id}>
            {i.name}
          </option>
        ));
        return List;
      };

      onChangeCurrency = async e => {
        const id_price_currency = e.target.value
        await this.setState({
          id_price_currency
        });
        this.props.setPriceCurrency(this.state.id_price_currency)
      };
    
     
    render() {
        return (
            <div>
                <Form.Group as={Row} className="mt-4 offers">
                    <div className="col-12 mb-4">
                    <Form.Label column className="text-left red">
                    Currency
                  </Form.Label>
                  <Form.Control as="select" onChange={this.onChangeCurrency} defaultValue={this.state.id_price_currency}>
                    {this.renderCurrency()}
                  </Form.Control>
                    </div>


                    <div className="col-6 mb-4">
                        <Form.Label column className="text-left red">
                            Initial price
            </Form.Label>
                        <Form.Control
                            column
                            onChange={this.onChangePriceInitial}
                            value={this.state.no_offer_price}
                            className="input-offers"
                            type="text"
                            placeholder="Initial price"
                        />
                    </div>
                    <div className="col-6 mb-4">
                        <Form.Label column className="text-left red">
                            Actual price
            </Form.Label>
                        <Form.Control
                            column
                            onChange={this.onChangePriceActual}
                            value={this.state.price}
                            className="input-offers"
                            type="text"
                            placeholder="Actual price"
                        />
                    </div>
                    <div className="col-6 mb-4">
                        <Form.Label column className="text-left red">
                            Start date
                  </Form.Label>
                        {/* <Form.Control
                    column
                    className="input-offers"
                    type="text"
                    placeholder="Start date"
                  /> */}
                        <DatePicker
                            className="input-offers input-date-picker"
                            type="text"
                            placeholder="Start date"
                            selected={this.state.startDate}
                            onChange={this.handleChangeStart}
                        />
                    </div>
                    <div className="col-6 mb-4">
                        <Form.Label column className="text-left red">
                            End date
                  </Form.Label>
                        {/* <Form.Control
                    column
                    className="input-offers"
                    type="text"
                    placeholder="End date"
                  /> */}
                        <DatePicker
                            className="input-offers input-date-picker"
                            type="text"
                            placeholder="End date"
                            selected={this.state.endDate}
                            onChange={this.handleChangeEnd}
                        />
                    </div>
                </Form.Group>
            </div>
        );
    }
}
export default Offers;

